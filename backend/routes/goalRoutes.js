const express = require('express');
const router = express.Router();
const { getGoals,
    postGoals,
    updateGoals,
    deleteGoals
} = require('../controller/goalController');
const {protect} = require('../middlewares/autthMiddleware');


router.route('/').get(protect,getGoals).post(protect,postGoals);
router.route('/:id').put(protect,updateGoals).delete(protect,deleteGoals);


module.exports = router;




// router.get('/',getGoals);
// router.post('/', postGoals);
// router.put('/:id', updateGoals);
// router.delete('/:id', deleteGoals);

