const mongoose = require("mongoose");

const Notes = mongoose.model("Note", {
    content: {
        type: String
    }
});

module.exports = Notes;