/*
 * GET users listing.
 */
import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    console.log("================ IN USER ROUTER ========================")
    res.send("respond with a resource");
});

router.delete('/', (req: express.Request, res: express.Response) => {
    console.log("================ IN USER ROUTER ========================")
    res.send("delete a resource");
});

export default router;
