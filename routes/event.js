const express = require("express");
//controllers
const {
  getAllEvents,
  getSingleEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/event");

const eventRouter = express.Router();
//GET ALL Teams && create Team
eventRouter.route("/").get(getAllEvents).post(createEvent);
// GET SINGLE Team BY ID
eventRouter
  .route("/:id")
  .get(getSingleEvent)
  .put(updateEvent)
  .delete(deleteEvent);

module.exports = eventRouter;
