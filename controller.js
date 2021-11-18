const express = require('express');
const data = require('./sampleData')
  
  const controller = {
    
    
     getRestaurants(){
        const restaurantData = data.restaurants.restaurants //array of restaurants where every singe restaurant is an an object with all the info
        const restaurants = [] //save just the name of all the restaurants
        for(let i = 0; i< restaurantData.length; i++){
           const restaurant = restaurantData[i] //one restaurant from array with all information 
           const name = restaurant.name //getting the name of restaurant
           restaurants.push(name)
        }  
      
        return restaurants;
    }
  }
    module.exports = controller;
  
  
  