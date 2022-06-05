const asyncHandler = require('express-async-handler');
// @desc    Get goals
// @route   GET /api/goals
// @access  Private

const getGoals = asyncHandler( async (req,res)=>{
    res.status(200).json({message:"Get Goals"});
})

// @desc    Set goal
// @route   POST /api/goals
// @access  Private

const postGoals = asyncHandler( async(req,res)=>{
    
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
      }
    res.status(200).json({message:"Set Goal"});
})

// @desc    update goal
// @route   PUT /api/goals
// @access  Private
const updateGoals = asyncHandler( async(req,res)=>{
    res.status(200).json({message:`update goal id is ${req.params.id}`});
})

// @desc    delete goal
// @route   DELETE /api/goals
// @access  Private
const deleteGoals = asyncHandler( async(req,res)=>{
    res.status(200).json({message:`delete goal id is ${req.params.id}`});
})

module.exports = {
    getGoals,
    postGoals,
    updateGoals,
    deleteGoals
}