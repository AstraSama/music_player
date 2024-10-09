import { Schema, model } from "mongoose";

const artist_Schema = new Schema ({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    album: {
        type: Schema.Types.ObjectId,
        ref: "Album"
    }
}
);

const Artist = model("Artist", artist_Schema);

export default Artist;