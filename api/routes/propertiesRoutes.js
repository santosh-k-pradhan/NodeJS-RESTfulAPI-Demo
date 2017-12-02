'use strict';
module.exports = function(app) {
  var featuredProperties = require('../controllers/featuredPropertiesController');
  var properties = require('../controllers/propertiesController');
  var user = require('../controllers/registerUserController');
  var authUser = require('../controllers/authenticateUserController');
  var userEnquiry = require('../controllers/userEnquiryController');

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  //Properties Routes
  app.route('/createProperties').post(properties.createProperties);
  app.route('/getAllProperties').get(properties.getAllProperties);
  app.route('/removeAllProperties').delete(properties.removeAllProperties);
  app.route('/getFeaturedProperties').get(properties.getFeaturedProperties);
  app.route('/getPaginatedProperties').put(properties.getPaginatedProperties);
  app.route('/updateToFeaturedProperty/:propertyId').put(properties.updateToFeaturedProperty);
  app.route('/updateAsSoldProperty/:propertyId').put(properties.updateAsSoldProperty);
  app.route('/getSoldProperties').get(properties.getSoldProperties);
  app.route('/getPropertiesById/:propertyId').get(properties.getPropertiesById);
  app.route('/getPaginatedSoldProperties').put(properties.getPaginatedSoldProperties);

  //User Routes
  app.route('/registerUser').post(user.createUser);
  app.route('/getUserMailValidation/:email').get(user.getUserMailValidation);
  app.route('/getAllUsers').get(user.getAllUsers);
  app.route('/updateAdminAccess/:email').put(user.updateAdminAccess);
  app.route('/getPaginatedUsers').put(user.getPaginatedUsers);

  //Login User Routes
  app.route('/authenticateUser').post(authUser.authenticateUser);

  //User Enquiry Routes
  app.route('/createUserEnquiry').post(userEnquiry.createUserEnquiry);
  app.route('/getAllEnquiries').get(userEnquiry.getAllEnquiries);
  app.route('/getPaginatedEnquiries').put(userEnquiry.getPaginatedEnquiries);

  // Featured Properties Routes
  app.route('/createFeaturedProperties').post(featuredProperties.createFeaturedProperties);
  app.route('/getAllFeaturedProperties').get(featuredProperties.getAllFeaturedProperties);
  app.route('/readFeaturedProperty/:propertyId').get(featuredProperties.readFeaturedProperty);
  app.route('/updateFeaturedProperty/:propertyId').put(featuredProperties.updateFeaturedProperty);
  app.route('/deleteFeaturedProperty/:propertyId').delete(featuredProperties.deleteFeaturedProperty);
};