module.exports = (route) => {
  route.get('/posts/:id', (request, response) => {
    response.send('Post By ID');
  });
};
