module.exports = (route) => {
  route.get('/posts', (request, response) => {
    response.send('Post Index');
  });
};
