import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'


TodoList.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
    })).isRequired,
    title: PropTypes.string
};

TodoList.defaultProps = {
    todoList: [
        {
            id:1,
            title: 'eatEE'
        },
        {
            id:2,
            title: 'sleepSS'
        },
        {
            id:3,
            title: 'codeDD'
        }
    ],
    title: 'Default Title'
}

function TodoList(props) {
    const { todoList, title } = props;
    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {todoList.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;