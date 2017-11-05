'use strict';
module.exports = function(app) {
  var featuredProperties = require('../controllers/featuredPropertiesController');
  var properties = require('../controllers/propertiesController');  

  //Properties Routes
  app.route('/createProperties').post(properties.createProperties);
  app.route('/getAllProperties').get(properties.getAllProperties);

  // Featured Properties Routes
  app.route('/createFeaturedProperties').post(featuredProperties.createFeaturedProperties);
  app.route('/getAllFeaturedProperties').get(featuredProperties.getAllFeaturedProperties);
  app.route('/readFeaturedProperty/:propertyId').get(featuredProperties.readFeaturedProperty);
  app.route('/updateFeaturedProperty/:propertyId').put(featuredProperties.updateFeaturedProperty);
  app.route('/deleteFeaturedProperty/:propertyId').delete(featuredProperties.deleteFeaturedProperty);
};