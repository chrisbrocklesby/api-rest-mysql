module.exports = (route) => {
  route.patch('/posts', (request, response) => {
    response.send('Update Post');
  });
};
