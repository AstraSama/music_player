import { Schema, model } from "mongoose";

const album_Schema = new Schema ({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: Schema.Types.ObjectId,
        ref: 'Artist',
        required: true
    },
    list_music: [{
        type: Schema.Types.ObjectId,
        ref: 'Music',
        required: true
    }]
}
);

const Album = model("Album", album_Schema);

export default Album;