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
    // Like Post url
    addLikes: function(id) {
      return axios.put(`/api/posts/like/${id}`);
      
    },
  // Unlike Post url
  unLike: function(id) {
    return  axios.put(`/api/posts/unlike/${id}`)
  },
  uploadImage: function(image, location, description) {
    const form = new FormData();
    form.append('image', image);
    form.append('location', location);
    form.append('description', description);
    return axios.post('/api/posts/', form, {
      headers: { 'content-type': 'multipart/form-data' }
  })
  }
};

// };
// var form = new FormData();
// form.append("text", "I ram into it as well");
// form.append("image", "C:\\Users\\AY PC\\Desktop\\KUBootCamp\\Swerve\\client\\src\\component\\images\\Demo.jpg");
// form.append("description", "Ohio");

// var settings = {
//    "headers": {
//     "Content-Type": "application/x-www-form-urlencoded",
//     "Accept": "*/*",
//     "Cache-Control": "no-cache",
//     "accept-encoding": "gzip, deflate",
//     "cache-control": "no-cache"
//   },
//   "processData": false,
//   "contentType": false,
//   "mimeType": "multipart/form-data",
//   "data": form
// }

// $.ajax(settings).done(function (response) {
//   console.log(response);
// });