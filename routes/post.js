const PostController = require('../controllers/postController');
const router=require('express').Router();
const auth=require('../middleware/auth');
const upload=require('../helpers/multer')


//create
router.post('/',upload.upload.single('image'),auth.verifyTokenAndRole,PostController.creatPost);
//get all
router.get('/all',PostController.gettAll);
//update
router.put('/update/:id',upload.upload.single('image'),auth.verifyTokenAndRole,PostController.updatPost);
//delete
router.delete('/delete/:id',auth.verifyTokenAndRole,PostController.deletPost);
//Get by id
router.get('/:id',PostController.gettPost);

module.exports=router;