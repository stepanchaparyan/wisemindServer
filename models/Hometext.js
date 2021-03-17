const mongoose = require('mongoose');

const hometextSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  parent_title: {
    type: String,
  },
  page: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  parent_section: {
    type: String,
  },
  text: {
    type: String,
    required: true,
  },
});

const Hometext = mongoose.model('hometext', hometextSchema);

module.exports = Hometext;
