const appDataSource = require('./dataSource');

const addWiki = async (title, subtitle, content) => {
  const addWiki = await appDataSource.query(`
    INSERT INTO wiki(
      title,
      subtitle,
      content
    )
    VALUES (?, ?, ?);
    `, [title, subtitle, content]
  );
  return addWiki;
};

const getWiki = async (query) => {
    const getWiki = await appDataSource.query(`
      SELECT
        id,
        title,
        subtitle,
        content
      FROM wiki
      ORDERS LIMIT 5 OFFSET ${query};
    `,
    );

    return getWiki;
  };


  const getWikiDetail = async (id) => {
    const getWikiDetail = await appDataSource.query(`
      SELECT
        id,
        title,
        subtitle,
        content
      FROM wiki
      WHERE id = ${id};
    `,
    );

    return getWikiDetail;
  }; 

  const getWikiTitle = async () => {
    const getWikiTitle = await appDataSource.query(`
      SELECT id, title
      FROM wiki;
    `,
    );

    return getWikiTitle;
  };


  const wikiCount = async () => {
    const wikiCount = await appDataSource.query(`
      SELECT COUNT (*) as count
      FROM wiki
    `,
    );
    return wikiCount;
  };



const updateWiki = async (title1, subtitle1, content1, id) => {
  const updateWiki = (await appDataSource.query(`
    UPDATE wiki 
    SET 
      title = ?, 
      subtitle = ?, 
      content= ? 
      WHERE id = ?;
    `,[ title1, subtitle1, content1, id ])
  );
  return updateWiki;
};

module.exports = {
  addWiki,
  wikiCount,
  getWiki,
  getWikiDetail,
  getWikiTitle,
  updateWiki
}