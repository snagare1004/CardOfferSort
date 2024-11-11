const express = require('express');
const router = express.Router();
let ProcessCard = require('./processcard')

// Route to get minimum charges from payment aggregators
router.post('/minCharges', ProcessCard)


module.exports = router;
