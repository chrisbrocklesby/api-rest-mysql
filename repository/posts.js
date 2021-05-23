const db = require('.');

module.exports = {
  select: (page = 1) => {
    const limit = Number(100);
    const offset = Number(page - 1) * limit;
    return db('SELECT * FROM posts LIMIT ? OFFSET ?', [limit, offset]);
  },
  selectById: async (id) => (await db('SELECT * FROM posts WHERE id = ?', [id]))[0],
  insert: (data) => db('INSERT INTO posts SET ?', [data]),
  update: (id, data) => db('UPDATE posts SET ? WHERE id = ?', [data, id]),
  delete: (id) => db('DELETE FROM posts WHERE id = ?', [id]),
};
