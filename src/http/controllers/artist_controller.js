import Artist from "../../database/models/artist_model.js";
import { give_id } from "../middlewares/id.js";

export const store = async (req, res) => {
  try {
    const { text } = req.body;
    const user = req.user._id;

    const content = await Artist.create({
        name,
        id: give_id(),
        album
    });

    res.status(201).json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const index = async (req, res) => {
  try {
    const filter = {
      user: {
        $in: [...req.user.following, req.user._id],
      },
    };

    const content = await Artist.find(filter).exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const show = async (req, res) => {
  try {
    const content = await Artist.findById(req.params.id).exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const update = async (req, res) => {
  try {
    const user = req.user._id;
    const { text } = req.body;

    const content = await Artist.findOneAndUpdate(
      {
        _id: req.params.id,
        user,
      },
      { text }
    ).exec();

    if (content) {
      res.json(content);
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const destroy = async (req, res) => {
  try {
    const user = req.user._id;

    const content = await Artist.findOneAndDelete({
      _id: req.params.id,
      user,
    }).exec();

    if (content) {
      res.json(content);
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};