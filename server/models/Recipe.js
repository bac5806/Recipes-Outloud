const { Schema } = require('mongoose');

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    recipeId: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },

});

module.exports = recipeSchema;