module.exports = (route) => {
  route.get('/posts', (request, response) => {
    response.send('Post Index');
  });

  route.get('/posts/:id', (request, response) => {
    response.send('Post By Id');
  });

  route.post('/posts', (request, response) => {
    response.send('Post Create');
  });

  route.patch('/posts', (request, response) => {
    response.send('Post Update');
  });

  route.delete('/posts', (request, response) => {
    response.send('Post Delete');
  });
};
