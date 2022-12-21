'use strict';

module.exports = ({ strapi }) => ({

  index(ctx) {
    ctx.body = strapi
      .plugin('componentpreview')
      .service('myService')
      .getWelcomeMessage();
  },
});
