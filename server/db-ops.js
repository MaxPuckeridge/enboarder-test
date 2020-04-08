const db = require('./db');

const INSERT_QUERY = ({ id, spaceItem }) =>
  `INSERT into spaceData (id, spaceItem) values ('${id}', '${spaceItem}');`;

const READ_QUERY = (id) => `SELECT * FROM spaceData WHERE id='${id}' LIMIT 1;`;

const writeEntry = async (id, record) => {
  const encoded = Buffer.from(JSON.stringify(record)).toString('base64');
  const query = INSERT_QUERY({ id, spaceItem: encoded });
  await db.query(query);
};

const readEntry = async (id) => {
  const result = await db.query(READ_QUERY(id));
  if (result.length == 1) {
    const [{spaceItem}] = result;
    const output = Buffer.from(spaceItem, 'base64').toString();
    return JSON.parse(output);
  }

  return null;
};

module.exports = {
  writeEntry,
  readEntry,
};
