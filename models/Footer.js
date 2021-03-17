const mongoose = require('mongoose');

const footerSchema = mongoose.Schema({
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
  link: {
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
});

const Footer = mongoose.model('footer', footerSchema);

module.exports = Footer;
