import * as Express from "express";
//import RepositoryInterface from "../repository/repository.interface";
//import { RepType, RepositoryFactory } from "../repository/repository.factory";
import * as Repository from "../../repository/repository";

const router = Express.Router();

const userRep: Repository.Interface = Repository.Factory.create(Repository.Type.USER);

router.get(
    '/',
    (req: Express.Request, res: Express.Response) => {
        console.log("================ IN USER ROUTER ========================");

        let users = userRep.read();

        res.send(users);
    }
);

router.delete(
    '/:userId',
    (req: Express.Request, res: Express.Response) => {

        let { userId } = req.params;

        console.log("Received request to delete user with id: " + userId)

        userRep.delete(userId);

        // TODO catch and send back error?
        // TODO what should we send back in this case?
        res.send("Deleted a resource");
    }
);

export default router;
