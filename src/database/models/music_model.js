import { Schema, model } from "mongoose";

const music_Schema = new Schema ({
    name: {
        type: String,
        required: true
    },
    album: {
        type: Schema.Types.ObjectId,
        ref: "Album"
    }
});

const Music = model("Music", music_Schema);

export default Music;