module.exports = (route) => {
  route.post('/user/register', (request, response) => {
    response.send('User Register');
  });
};
