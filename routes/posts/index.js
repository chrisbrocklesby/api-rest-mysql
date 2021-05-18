const Post = require('../../models/Posts');

module.exports = (route) => {
  route.get('/posts', (request, response) => {
    Post.create({ title: 'H3ll0 W04ld' });
    response.send('Post Index');
  });
};
