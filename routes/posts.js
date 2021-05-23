const posts = require('../services/posts');

module.exports = (route) => {
  route.get('/posts', async (request, response, next) => {
    try {
      const data = await posts.index();
      response.json({ data });
    } catch (error) {
      next(error);
    }
  });

  route.get('/posts/:id', async (request, response, next) => {
    try {
      const data = await posts.find(request.params.id);
      if (!data) { next(); } else { response.json({ data }); }
    } catch (error) {
      next(error);
    }
  });

  route.post('/posts', async (request, response, next) => {
    try {
      const data = await posts.create(request.body);
      response.json({ data });
    } catch (error) {
      next(error);
    }
  });

  route.patch('/posts/:id', async (request, response, next) => {
    try {
      const data = await posts.update(request.params.id, request.body);
      if (!data) { next(); } else { response.json({ data }); }
    } catch (error) {
      next(error);
    }
  });

  route.delete('/posts/:id', async (request, response, next) => {
    try {
      const data = await posts.delete(request.params.id);
      if (!data) { next(); } else { response.json({ data }); }
    } catch (error) {
      next(error);
    }
  });
};
