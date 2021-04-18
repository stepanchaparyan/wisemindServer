const express = require('express');
const router = express.Router();
const Navbar = require('../models/Navbar');
const Footer = require('../models/Footer');
const Hometext = require('../models/Hometext');

const getData = (model, lang = 'en') => {
  return async (req, res) => {
    try {
      const data = await model.find({ lang: lang });
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };
};

// // get Home data
router.get('/en/home/texts', getData(Hometext));
router.get('/es/home/texts', getData(Hometext));
router.get('/fr/home/texts', getData(Hometext));
router.get('/de/home/texts', getData(Hometext));
router.get('/ru/home/texts', getData(Hometext));
router.get('/am/home/texts', getData(Hometext));

// // get Navbar data
router.get('/en/menus', getData(Navbar));
router.get('/es/menus', getData(Navbar, 'es'));
router.get('/fr/menus', getData(Navbar));
router.get('/de/menus', getData(Navbar));
router.get('/ru/menus', getData(Navbar));
router.get('/am/menus', getData(Navbar));

// get Footer data
router.get('/en/footer', getData(Footer));
router.get('/es/footer', getData(Footer));
router.get('/fr/footer', getData(Footer));
router.get('/de/footer', getData(Footer));
router.get('/ru/footer', getData(Footer));
router.get('/am/footer', getData(Footer));

module.exports = router;
