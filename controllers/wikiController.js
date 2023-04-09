
const  wikiService  = require('../services/wikiService');
const { catchAsync } = require('../utils/error');

const addWiki = catchAsync(async (req, res) => {
  const { title, subtitle, content} = req.body;

  await wikiService.addWiki(title, subtitle, content);
  res.status(200).json();
});

const getWiki = catchAsync(async (req, res) => {
  const offset = req.query.offset;
  console.log(offset);


  const data = await wikiService.getWiki(offset);
  res.status(200).json({data});
});

const getWikiDetail = catchAsync(async (req, res) => {
  const id = req.query.id
  
  const data = await wikiService.getWikiDetail(id);
  res.status(200).json({data});
});

const updateWiki = catchAsync(async (req, res) => {
  const { title, subtitle, content, id} = req.body;
  console.log(title, subtitle, content, id);

  await wikiService.updateWiki(title, subtitle, content, id);
  res.status(201).json({ 
    massage : 'success'
  })
});

module.exports = {
  addWiki,
  getWiki,
  getWikiDetail,
  updateWiki
};