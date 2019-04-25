import axios from "axios";

export default {
  // Gets all Traffic
  getAllTraffic: function() {
    return axios.get("/api/traffic");
  },
  // Gets the Traffic with the given id
  getTrafficById: function(id) {
    return axios.get("/api/traffic/" + id);
  },
    // Gets the Traffic with the given id
  getTrafficByStreetName: function(streetName) {
     return axios.get("/api/traffic/" + streetName);
   },
  // Deletes the Traffic with the given id
  deleteBook: function(id) {
    return axios.delete("/api/traffic/" + id);
  },
  // Saves a Traffic to the database
  saveBook: function(bookData) {
    return axios.post("/api/traffic", bookData);
  }
};
