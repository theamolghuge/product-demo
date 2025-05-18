Front End Interview code project:
We’d like you to showcase your code organization and thoughtful component design to
create a React application written in TypeScript for displaying data that is retrieved via a
network call to a given API. Please spend approximately 1 hour to work through
creating the following small UI application. During the in-person interview we will ask
that you walk through your code and explain the choices you made. We may then ask
further questions about how you could support new features and changes to the initial
requirements.

Create a route in the application at /home that is a simple landing page with a link to a
separate /product-list route. The product-list page has the following high-level
requirements:

1. use the https://fakestoreapi.com/products API to retrieve a list of products
2. display the title, price, image and rating of the product in a grid, where each product
   should have its own card on the page
3. add a UI element to allow the user to toggle the view between the grid view (above
   #2) and a table view where each property of the product is listed in a column
4. make filter buttons at the top of the page that will allow the user to sort by price
   (highest to lowest and lowest to highest), this should work for both views (grid from #2,
   table from #3) and sort should be maintained when the user toggles the view

Extras: test coverage, reasonable styles, handling page width changes, accessibility
concerns
