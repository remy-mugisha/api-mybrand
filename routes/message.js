const router=require('express').Router();
const MessageController=require('../controllers/messageController');
const auth=require('../middleware/auth');

router.post('/create',MessageController.creatMessage);
//Get
router.get('/:id',auth.verifyTokenAndRole,MessageController.gettOne)
//GetAll
router.get('/',auth.verifyTokenAndRole,MessageController.gettAll)
//delete
router.delete('/delete/:id',auth.verifyTokenAndRole,MessageController.delete);

module.exports=router;
