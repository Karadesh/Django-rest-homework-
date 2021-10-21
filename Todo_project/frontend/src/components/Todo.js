import React from 'react'
import { Link } from 'react-router-dom'


const TodoItem = ({todovar, deleteTodo}) => {
    return(
        <tr>
            <td>{todovar.id}</td>
            <td>{todovar.name}</td>
            <td>{todovar.note_text}</td>
            <td>{todovar.creation_date}</td>
            <td>{todovar.update_date}</td>
            <td>{todovar.user}</td>
            <td>{todovar.is_active}</td>
            <td><button onClick={()=>deleteTodo(todovar.id)} type='button'>Delete</button></td>
        </tr>
    )
}

const TodoList = ({todovars, deleteTodo}) => {
    return (
        <div>
        <table>
            <tr>
                <th>
                    Id
                </th>
                <th>
                    Name
                </th>
                <th>
                    Note_text
                </th>
                <th>
                    creation_date
                </th>
                <th>
                    update_date
                </th>
                <th>
                    user
                </th>
                <th>
                    is_active
                </th>
                <th></th>
            {todovars.map((todovar) => <TodoItem todovar={todovar} deleteTodo={deleteTodo} />)}
            </tr>
        </table>
        <Link to='/Todo/create'>create</Link>
        </div>
    )
 }
 
 
 export default TodoList