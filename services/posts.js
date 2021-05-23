const Posts = require('../repository/posts');
const validate = require('../validation/posts');

module.exports = {
  index: async () => {
    const posts = await Posts.select();
    return posts;
  },

  find: async (id) => {
    const post = await Posts.selectById(id);
    return post;
  },

  create: async (data) => {
    validate(data, ['body']);
    const post = await Posts.insert(data);
    return { id: post.insertId };
  },

  update: async (id, data) => {
    validate(data);
    const post = await Posts.update(id, data);
    if (post.affectedRows === 0) { return null; }
    return { id };
  },

  delete: async (id) => {
    const post = await Posts.delete(id);
    if (post.affectedRows === 0) { return null; }
    return { id };
  },

};
