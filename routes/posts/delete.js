module.exports = (route) => {
  route.delete('/posts', (request, response) => {
    response.send('Delete Post');
  });
};
