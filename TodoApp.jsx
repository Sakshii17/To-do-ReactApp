import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (input.trim() === "") return;

        const newTodo = {
            id: Date.now(),
            text: input,
            completed: false,
        };

        setTodos([newTodo, ...todos]);
        setInput("");
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-5 bg-gray-100 rounded-xl shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
            <form onSubmit={handleAddTodo} className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter a task..."
                    className="flex-1 px-4 py-2 rounded border border-gray-400"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Add
                </button>
            </form>
            <ul>
                {todos.length === 0 ? (
                    <p className="text-center text-gray-600">No tasks yet.</p>
                ) : (
                    todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}
                        />
                    ))
                )}
            </ul>
        </div>
    );
};

export default TodoApp;
