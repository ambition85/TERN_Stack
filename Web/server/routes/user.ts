import * as Express from "express";
import UsersController from "../controllers/users.controller";

const router = Express.Router();

router.get(
    '/',
    (req: Express.Request, res: Express.Response) => {
        console.log("================ IN USER ROUTER ========================");
        res.send("respond with a resource");
    }
);

router.delete(
    '/:userId',
    (req: Express.Request, res: Express.Response) => {

        let { userId } = req.params;

        console.log("Received request to delete user with id: " + userId)

        const userCtrl = new UsersController();

        userCtrl.delete(userId);

        res.send("Deleted a resource");
    }
);

export default router;
