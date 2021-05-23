const { validate, schema } = require('.');

const Post = schema.object({
  title: schema.string().min(2),
  body: schema.string(),
});

module.exports = (data, require) => validate(Post, data, require);
