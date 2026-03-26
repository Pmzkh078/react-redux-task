import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "./todoSlice";

const TodoPage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((s) => s.todos);

  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  return (
    <div className="container mt-4">
      <h3>Total: {items.length}</h3>

      <div className="input-group mb-3">
        <input
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch(addTodo(text));
            setText("");
          }}
        >
          Add
        </button>
      </div>

      <ul className="list-group">
        {items.map((t) => (
          <li
            key={t.id}
            className="list-group-item d-flex justify-content-between"
          >
            {editId === t.id ? (
              <input
                defaultValue={t.text}
                onBlur={(e) => {
                  dispatch(updateTodo({ id: t.id, text: e.target.value }));
                  setEditId(null);
                }}
              />
            ) : (
              <span>{t.text}</span>
            )}

            <div>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => setEditId(t.id)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => dispatch(removeTodo(t.id))}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;