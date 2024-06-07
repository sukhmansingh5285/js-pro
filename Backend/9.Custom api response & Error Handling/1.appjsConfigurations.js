// To connect frontend and backend
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials : true,
  })
);
// to use json data coming from client
app.use(express.json({limit: "16kb"}))
// to use url data coming from client
app.use(express.urlencoded({extended: true, limit:"16kb"})) // we can use nested objects if we write extended
// to store some files like-> pdf, images in my own folders (on server) 
app.use(express.static("public"))// public is the name of folder on the server

