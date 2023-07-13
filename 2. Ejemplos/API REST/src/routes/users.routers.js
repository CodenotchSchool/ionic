const {Router} = require ("express")
const router = Router();
const usersCtrl = require("../controller/users.controller")

router.get("/usuarios", usersCtrl.getUser);

router.get("/usuarios/:id", usersCtrl.getUser2);
        
router.post("/usuarios", usersCtrl.postUser);
        
router.put("/usuarios", usersCtrl.putUser);
        
router.delete("/usuarios", usersCtrl.deleteUser); 

module.exports = router;

