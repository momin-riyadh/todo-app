const asyncHandler = require('express-async-handler');
const Todo = require('../models/todoModel');

// GET Todos List
const getTodos = asyncHandler(async (req, res) => {
    const todos = await Todo.find({});
    res.status(200).json(todos);
});


//POST Todos Items
const setTodo = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400).json({message: 'Please add text field'});
        return;
    }
    const todo = await Todo.create({
        text: req.body.text,
    });

    res.status(200).json(todo);
});


//Update Todos items
const updateTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
        res.status(400);
        throw new Error('Todo not found');
    }

    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(200).json(updatedTodo);
})


//DELETE Todos Items
const deleteTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
        res.status(400);
        throw new Error('Todo not found');
    }
})

module.exports = {
    getTodos, setTodo, updateTodo, deleteTodo
}
