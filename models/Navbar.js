const mongoose = require('mongoose');

const navbarSchema = mongoose.Schema({
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

const Navbar = mongoose.model('navbar', navbarSchema);

module.exports = Navbar;
