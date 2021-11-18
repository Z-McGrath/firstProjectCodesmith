const data = {
    hotels: {
        city: 'Nirobi',
        hotels: [
          {
          name: "skyline",
          address: "1234 east 74th st",
          price: "$$"
          },
          {
           name: "lalaLand",
           address: "445 west 146 st"
          }
        ]
        
    },
    restaurants:  {
      city: "NewYork",
      restaurants: [ 
        {
          name: "someRestaurant",
          type: "middle eastern",
          menu: "link a file ",
          location: "someLocation",
          hours: {
            monday: "MondHours",
            tuesday: "TuesHours"
          },
          reviews: [{},{},{}],
        }, 
        {
          name: "someOtherRestaurant",
          type:  "american",
          menu: "link a file ",
          location: "someOtherLocation",
          hours: {
            monday: "MondHours",
            tuesday: "TuesHours"
          },
          placesToVisit: {
               
          },
          reviews: [{},{},{}],
        }]
    }
}

module.exports = data;