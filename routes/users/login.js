module.exports = (route) => {
  route.post('/user/login', (request, response) => {
    response.send('User Login');
  });
};
