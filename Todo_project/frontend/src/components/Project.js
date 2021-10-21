import React from 'react'
import { Link } from 'react-router-dom'


const ProjectItem = ({item, deleteProject}) => {
    return(
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.repo_link}</td>
            <td>{item.users}</td>
            <td><button onClick={()=>deleteProject(item.id)} type='button'>Delete</button></td>
        </tr>
    )
}

const ProjectList = ({items, deleteProject}) => {
    return (
        <div>
        <table>
            <tr>
                <th>
                    Name
                </th>
                <th>
                    repo_link
                </th>
                <th>
                    users
                </th>
                <th></th>
            </tr>
            {items.map((item)=><ProjectItem item={item} deleteProject={deleteProject}/>)}
        </table>
        <Link to='Project/create'>create</Link>
        </div>
    )
 }
 
 
 export default ProjectList