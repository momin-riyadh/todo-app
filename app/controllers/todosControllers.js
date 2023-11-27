const getTodos = (req, res) => {
    res.status(200).json({message: 'Get todos'})
}
const setTodo = (req, res) => {
    res.status(200).json({message: 'Set todos'})
}
const updateTodo = (req, res) => {
    res.status(200).json({message: `Update todos ${req.params.id}`})
}
const deleteTodo = (req, res) => {
    res.status(200).json({message: `Delete todos ${req.params.id}`})
}

module.exports = {
    getTodos, setTodo, updateTodo, deleteTodo
}
