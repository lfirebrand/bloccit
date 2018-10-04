const Topics = require("./models").Topics;
const Post = require("./models").Post;
const Flair = require("./models").Flair;

module.exports = {

    addFlair(newFlair, callback) {
        return Flair.create(newFlair)
            .then((flair) => {
                callback(null, flair);
            })
            .catch((err) => {
                callback(err);
            })
    },

    getFlair(id, callback) {
        return Flair.findById(id)
            .then((flair) => {
                callback(null, flair);
            })
            .catch((err) => {
                callback(err);
            })
    }

}