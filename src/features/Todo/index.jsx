import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';


function TodoFeature(props) {
    const  todoList = [
        {
            id:1,
            title: 'eat'
        },
        {
            id:2,
            title: 'sleep'
        },
        {
            id:3,
            title: 'code'
        }
    ];
    const title = 'Todo list';
    return (
        <div> 
            <h2>Không được truyền props</h2>        
            <TodoList></TodoList>
            <h2>Được truyền props</h2>
            <TodoList todoList = {todoList} title = {title} ></TodoList>
        </div>
    );
}

export default TodoFeature;