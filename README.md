# Eat Da Burger

**This is a full stack app utilizing many front end and back end technologies, check it out: [link](https://burgerize-scz.herokuapp.com/)**

Created for UofR Coding Bootcamp, this app illustrates the ability to create a full stack application that is hosted on Heroku

On the front end we are have several technologies: 

1. HTML, CSS
    - for the most basic rendering of the app
  
2. Bootrstrap  
    - gives us access to modals as well as additional styling
  
3. Javascript/Jquery
    - allows us to interact with the DOM
    - pulling informtion for use on the back end
    - pushing elements to the DOM
  
4. Handlebars Templating
    - This is both a front end and a back technology.
    - Is barely needed on this app as it is a single page, but used here or exposure to the technology
  
Out back we are running additional services: 

1. Everything is running on a node.js server
    - This contains our entire app
    - The app structure is modeled after a MVC style to organize and separate the various node functionalities
    
2. MySql
    - Allows us to maintain persistent data  
    - We can update and destroy the data in our database
    
3. Custom ORM - Object Relational Mapping 
    - I have build a custom ORM which allows me to make multiple types of database queries using generic queries that can handle various parameters. This simplifies the code and keeps me from having to write multiple specific queries.
    
    
    
    

  



