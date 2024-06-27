//2
import {Router} from "express"
import { registerUser } from "./user.controller";

const router = Router()

//4{
router.route("/register").post(registerUser);

//}4


export default router //you can use different name in the file where you have imported it

