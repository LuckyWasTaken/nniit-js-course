import React, { useState } from 'react';
function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');
  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      setTodos([...todos, {
        text: todoText,
        completed: false
      }]);
      setTodoText('');
    }
  };
  const handleToggleTodo = index => {
    setTodos(todos.map((todo, i) => i === index ? {
      ...todo,
      completed: !todo.completed
    } : todo));
  };
  const handleDeleteTodo = index => {
    setTodos(todos.filter((todo, i) => i !== index));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h1", null, "Todo App"), /*#__PURE__*/React.createElement("div", {
    className: "todo-form"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Add a new todo",
    value: todoText,
    onChange: e => setTodoText(e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    onClick: handleAddTodo
  }, "Add")), /*#__PURE__*/React.createElement("ul", {
    className: "todo-list"
  }, todos.map((todo, index) => /*#__PURE__*/React.createElement("li", {
    key: index,
    className: `todo-item ${todo.completed ? 'completed' : ''}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: todo.completed,
    onChange: () => handleToggleTodo(index)
  }), /*#__PURE__*/React.createElement("span", null, todo.text), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleDeleteTodo(index)
  }, "Delete")))));
}
export default App;