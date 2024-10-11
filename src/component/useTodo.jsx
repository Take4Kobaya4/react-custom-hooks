import { useState } from "react";

const useTodo = () => {
    // Todoの初期値は空
    const [todos, setTodos] = useState('');
    // 検索の値の初期値は空
    const [searchTerm, setSearchTerm] = useState('');
    // todoの追加
    const addTodo = (title) => {
        const newTodo = {id: Date.now(), title};
        setTodos([...todos, newTodo]);
    }
    // todoの削除(指定されたIDより)
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    // 検索バーの中にTodoのタイトルを入れたときに、検索
    const filteredTodo = (todo) => {
        todo =>
            todo.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return {
        todos: 
        addTodo,
        deleteTodo,
        searchTerm,
        setSearchTerm,
        filteredTodo
    };
}

export default useTodo;