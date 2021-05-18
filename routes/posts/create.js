module.exports = (route) => {
  route.post('/posts', (request, response) => {
    response.send('Create Post');
  });
};
