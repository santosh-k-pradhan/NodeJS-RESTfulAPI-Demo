'use strict';
module.exports = function(app) {
  var featuredProperties = require('../controllers/featuredPropertiesController');

  // Properties Routes
  app.route('/createFeaturedProperties').post(featuredProperties.createProperties);
  app.route('/getAllFeaturedProperties').get(featuredProperties.getAllFeaturedProperties);
  app.route('/readFeaturedProperty/:propertyId').get(featuredProperties.readFeaturedProperty);
  app.route('/updateFeaturedProperty/:propertyId').put(featuredProperties.updateFeaturedProperty);
  app.route('/deleteFeaturedProperty/:propertyId').delete(featuredProperties.deleteFeaturedProperty);
};