const Router = require('express').Router()
const query = require('../../controllers/swerveController')

//Get the route route for both post and get
Router.route('/')
//Get all the data in the database and display to root route
.get(query.findAll)
//Post to the database
.post(query.create)

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(query.findById)
  .put(query.update)
  .delete(query.remove);


module.exports = Router


