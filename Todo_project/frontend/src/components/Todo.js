import React from 'react'


const TodoItem = ({todovar}) => {
    return(
        <tr>
            <td>{todovar.id}</td>
            <td>{todovar.name}</td>
            <td>{todovar.note_text}</td>
            <td>{todovar.creation_date}</td>
            <td>{todovar.update_date}</td>
            <td>{todovar.user}</td>
            <td>{todovar.is_active}</td>
        </tr>
    )
}

const TodoList = ({todovars}) => {
    return (
        <table>
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
            {Array(todovars).map((todovar) => <TodoItem todovar={todovar} />)}
        </table>
    )
 }
 
 
 export default TodoList