const router = require('express').Router();
const wikiRouter = require('./wikiRouter');

router.use('/wiki', wikiRouter);


module.exports = router;