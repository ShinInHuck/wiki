const router = require('express').Router();
const wikiController = require('../controllers/wikiController');

router.post('', wikiController.addWiki);
router.get('', wikiController.getWiki);
router.get('/detail', wikiController.getWikiDetail);
router.put('', wikiController.updateWiki);

module.exports = router