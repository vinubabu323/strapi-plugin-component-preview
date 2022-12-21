'use strict';

module.exports = ({ strapi }) => {
  // registeration phase
  strapi.customFields.register({
    name: 'preview',
    plugin: 'componentpreview',
    type: 'string',
  });
};
