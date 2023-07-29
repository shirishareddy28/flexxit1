const mongoose = require("mongoose");

const user=  mongoose.model("user ", 
    {
        name:String,
        trendingMovies:String,
        topRatedMovies: String,
        movieDetail:String ,
        movieVideoSource: String,
        searchResults: String,
      });
 
      module.exports = user;cd