/* request object

req.url -> /users?name=john' -> represent the url of incoming request
req.method -> get,post,put,delete -> HTTP methods used in the request
req.headers -> Content-Type, Authorization -> key-value pairs of header information as Object
req.query -> /search?query=books -> Parameters used in URL, usually after '?' in a GET request
req.body -> JSON data '{"name":"john"}' -> Data sent in the body of the request, usually used in the POST request
req.params -> /users/:id -> URL parameters, usually used in route paths mostly after ':' 
req.cookies -> sesssionId=abc123 -> Data sent by the client stored as cookies, they are also sent in the headers


*/

/* app methods
  
  app.param(name, callback) -> execute if there's params in url (/users/:name)
  app.set(name, value) -> used to set various settings in Express application
              app.set('view engine', 'ejs');   This sets the view engine to EJS, which allows you to render .ejs templates.
              app.set('title', 'My Express App');   This sets a custom variable that you can access later using app.get('title').
              app.set('views', path.join(__dirname, 'views'));  This sets the directory where your view templates are located.
  app.get()    -> to define a route handler for get requests to a specific path
  app.post()   -> to define a route handler for post requests to a specific path
  app.put()    -> to define a route handler for put requests to a specific path
  app.delete() -> to define a route handler for delete requests to a specific path
  app.use(path, callback) -> used to put middlewares at a path             
  app.listen(PORT, callback) -> to listen for connections on the specified host and port
  app.engine()
  app.route() -> to create chainable routes handlers 
*/
