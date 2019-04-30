const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/swervedb"
);

const userSeed = [
  {
    username: "Robert Martin",
    password: "helloworld",
    email: "robert4044@gmail.com",
    streetname: "10300 Cabela Dr. Kansas City, KS 66111",
    post: "This street is utterly destroyed.",
    like: true,
    comment: "We need to get this fixed",
    date: new Date(Date.now())
  },
  {
  username: "A. Y",
  password: "helloay",
  email: "ay@hottail.com",
  streetname: "10300 Castillo Lane Kansas City, MO 6615",
  post: "Just saw this.",
  like: true,
  comment: "We need to get this fixed",
  date: new Date(Date.now())
  },
  {
    username: "Bob O",
    password: "Heybob",
    email: "avenger@gsnail.com",
    streetname: "10300 Crabtree Circle Kansas City, MO 64108",
    post: "Just saw this.",
    like: true,
    comment: "We need to get this fixed",
    date: new Date(Date.now())
    },
    {
      username: "S H",
      password: "shanhen",
      email: "b@gsnail.com",
      streetname: "10300 pictureframe lane Kansas City, MO 64108",
      post: "Just saw this.",
      like: true,
      comment: "We need to get this fixed",
      date: new Date(Date.now())
      },
      {
        username: "Eddie Taylor",
        password: "taytee",
        email: "tayr@gsnail.com",
        streetname: "10300 taylor lane Kansas City, MO 64108",
        post: "Just saw this.",
        like: true,
        comment: "We need to get this fixed",
        date: new Date(Date.now())
        },
        {
          username: "Trevor Nitram",
          password: "treb",
          email: "trombrero@gsnail.com",
          streetname: "10376 Tambor Drive Kansas City, MO 64108",
          post: "Just saw this.",
          like: true,
          comment: "We need to get this fixed",
          date: new Date(Date.now())
          },
          {
            username: "bojack horseman",
            password: "bojer",
            email: "bojackr@gsnail.com",
            streetname: "10300 Bor lane Kansas City, MO 64108",
            post: "Just saw this.",
            like: true,
            comment: "We need to get this fixed",
            date: new Date(Date.now())
            },
            {
              username: "Just Chaz",
              password: "chazthebestname",
              email: "chazzie@gsnail.com",
              streetname: "10300 chazicle drive Kansas City, MO 64108",
              post: "Just saw this.",
              like: true,
              comment: "We need to get this fixed",
              date: new Date(Date.now())
              },
              {
                username: "Thanos Smith",
                password: "thanos",
                email: "thanos@gsnail.com",
                streetname: "10300 taylor lane Kansas City, MO 64108",
                post: "Just saw this.",
                like: true,
                comment: "We need to get this fixed",
                date: new Date(Date.now())
                },
                {
                  username: "Bones McCoy",
                  password: "taytee",
                  email: "taylor@gnail.com",
                  streetname: "10300 taylor lane Kansas City, MO 64108",
                  post: "Just saw this.",
                  like: true,
                  comment: "We need to get this fixed",
                  date: new Date(Date.now())
                  }
]

  
  db.User.remove({})
  .then(data => {
    console.log(data);

  })
  .catch(err => {
    console.error(err);

  });
