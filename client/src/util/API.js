import axios from "axios";

export default {
  // Gets all Traffic
  getAllPosts: function() {
    return axios.get("/api/posts");
  },
  // Gets the Traffic with the given id
  getPostById: function(id) {
    return axios.get("/api/posts/" + id);
  },

  // Deletes the Traffic with the given id
  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a Traffic to the database
  savePost: function(formData) {
    return axios.post("/api/posts", formData);
  },

  // Saves a User to the database
  saveUser: function(formData) {
    return axios.post("/api/user", formData);
  },
  // Gets the User by id
  getUserById: function(id) {
    return axios.get("/api/posts/" + id);
  },
};
