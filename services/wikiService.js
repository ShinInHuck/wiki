const wikiDao = require('../models/wikiDao');

const addWiki = async(title, subtitle, content) => {
  return await wikiDao.addWiki(title, subtitle, content);
};

const getWiki = async(offset) => {
  const query =  5 * (offset - 1);
  const getWiki = await wikiDao.getWiki(query);
  const [wikiCount] = await wikiDao.wikiCount();

  return {getWiki, wikiCount};
};

const getWikiDetail = async(id) => {
  const [getWikiDetail] = await wikiDao.getWikiDetail(id);
  const getWikiTitle =  await wikiDao.getWikiTitle();

  return {getWikiDetail, getWikiTitle};
};

const updateWiki = async(title, subtitle, content, id) => {
  console.log(title, subtitle, content, id);
  const title1 = title ? title : 'NULL';
  const subtitle1 = subtitle ? subtitle : 'NULL';
  const content1 = content ? content : 'NULL';
  return await wikiDao.updateWiki(title1, subtitle1, content1, id)
 
};

module.exports = {
  addWiki,
  getWiki,
  updateWiki,
  getWikiDetail
}