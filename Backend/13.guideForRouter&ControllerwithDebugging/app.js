//3  routes
import userRouter from "./user.routes"

  // routes declaration, we have seperated routes file, that's why we have to use middleware to connect
app.use("/users", userRouter); // we will get to the-> http://localhost:8000/users/login