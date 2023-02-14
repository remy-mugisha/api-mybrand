const router=require('express').Router();
const UserController=require('../controllers/userController');
const auth=require('../middleware/auth');

router.put('/update/:id',auth.verifyTokenAndRole,UserController.updatUser);
router.delete('/delete/:id',auth.verifyTokenAndRole,UserController.deletUser);
router.get('/:id',auth.verifyTokenAndRole,UserController.gettUser);
router.get('/',auth.verifyTokenAndRole,UserController.gettAll);
module.exports=router;