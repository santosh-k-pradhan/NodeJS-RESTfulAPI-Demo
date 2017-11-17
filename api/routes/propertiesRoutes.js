'use strict';
module.exports = function(app) {
  var featuredProperties = require('../controllers/featuredPropertiesController');
  var properties = require('../controllers/propertiesController');
  var user = require('../controllers/registerUserController');
  var authUser = require('../controllers/authenticateUserController');

  //Properties Routes
  app.route('/createProperties').post(properties.createProperties);
  app.route('/getAllProperties').get(properties.getAllProperties);

  //User Routes
  app.route('/registerUser').post(user.createUser);
  app.route('/getUserMailValidation/:email').get(user.getUserMailValidation);  

  //Login User Routes
  app.route('/authenticateUser').post(authUser.authenticateUser);

  // Featured Properties Routes
  app.route('/createFeaturedProperties').post(featuredProperties.createFeaturedProperties);
  app.route('/getAllFeaturedProperties').get(featuredProperties.getAllFeaturedProperties);
  app.route('/readFeaturedProperty/:propertyId').get(featuredProperties.readFeaturedProperty);
  app.route('/updateFeaturedProperty/:propertyId').put(featuredProperties.updateFeaturedProperty);
  app.route('/deleteFeaturedProperty/:propertyId').delete(featuredProperties.deleteFeaturedProperty);
};