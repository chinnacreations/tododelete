import './index.css'

const TodoItem = props => {
  const {TodoLists, deleteTodo} = props
  const {id, title} = TodoLists

  const DeleteTodos = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-con">
      <p className="text">{title}</p>
      <button className="btn" type="button" onClick={DeleteTodos}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
