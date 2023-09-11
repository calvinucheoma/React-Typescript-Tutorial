import './10.2 TodoList.css';

interface ToDoProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const ToDoList: React.FC<ToDoProps> = ({ items, onDeleteTodo }) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={onDeleteTodo.bind(null, todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
