import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <li className="flex justify-between items-center py-2 border-b">
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                />
                <span className={todo.completed ? "line-through text-gray-500" : ""}>
                    {todo.text}
                </span>
            </div>
            <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-600 hover:text-red-800"
            >
                Delete
            </button>
        </li>
    );
};

export default TodoItem;
