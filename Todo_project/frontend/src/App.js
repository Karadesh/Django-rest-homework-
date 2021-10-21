import React from 'react';
import axios from 'axios';
import './App.css';
import UserList from './components/Users';
import MenuList from './components/Menu'
import FooterList from './components/Footer';
import TodoList from './components/Todo';
import ProjectList from './components/Project';
import {BrowserRouter, Switch, Redirect, HashRouter, Route, Link} from 'react-router-dom'
import LoginForm from './components/LoginForm';
import ProjectForm from './components/ProjectForm';
import TodoForm from './components/Todoform';

const NotFound404 = ({location}) => {
    return(
        <div>
            <h1>page on adress '{location.pathname}' is not found</h1>
        </div>
    )
}

class App extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           'users': [],
           'footers':[],
           'menus': [],
           'project': [],
           'todos': [],
           'token': ''
       }
   }

   getToken(login, password){
    axios.post('http://127.0.0.1:8000/api-token-auth/', {"username": login, "password": password})
    .then(response => {
        localStorage.setItem('token', response.data)
        console.log(response.data.token)
        this.setState({'token': response.data.token}, this.LoadData)
        
    })
    .catch(error => alert('Incorrect password'))
   } 

   logout(){
    localStorage.setItem('token','')
    this.setState({'token': ''}, this.LoadData)
   }

   isAuthenticated(){
    return !!this.state.token
   }

   getHeaders(){
       if (this.isAuthenticated()){
            return {'Authorisation': 'Token' + this.state.token}
       }
       return {}
    }

    deleteProject(id){
        const headers = this.getHeaders()
        axios.delete(`http://127.0.0.1:8000/api/Project/${id}`, {headers})
            .then(response => {
                this.setState({project: this.state.project.filter((item)=>item.id !==id) 
                })
            }).catch(error=> console.log(error))
    }


    deleteTodo(id){
        const headers = this.getHeaders()
        axios.delete(`http://127.0.0.1:8000/api/Todo/${id}`, {headers})
            .then(response => {
                this.setState({todos: this.state.todos.filter((todovar)=>todovar.id !==id) 
                })
            }).catch(error=> console.log(error))
    }

    createProject(name, users, repo_link){
        const headers = this.getHeaders()
        const data = {name: name, users: users, repo_link: repo_link}
        axios.post(`http://127.0.0.1:8000/api/Project`, data, {headers})
            .then(response =>{
                let new_project = response.data
                const users = this.state.users.filter((item)=> item.id === new_project.users)[0]
                new_project.users = users
                this.setState({project: [...this.state.project, new_project]})
            }).catch(error=> console.log(error))
    }


    createTodo(name, note_text, creation_date, update_date, user){
        const headers = this.getHeaders()
        const data = {name: name, note_text: note_text, creation_date: creation_date, update_date: update_date, user: user}
        axios.post(`http://127.0.0.1:8000/api/Todo`, data, {headers})
            .then(response => {
                let new_todo = response.data
                const user = this.state.users.filter((item) => item.id === new_todo.user)[0]
                new_todo.user = user
                this.setState({todos: [...this.state.todos, new_todo]})
            }).catch(error=> console.log(error))
    }

    LoadData(){
        const headers = this.getHeaders()
        axios.get('http://127.0.0.1:8000/api/ListUsers/', {headers})
        .then(response => {
            const users = response.data
                this.setState(
                {
                    'users': users
                }
                )

     
        }).catch(error =>{
            this.setState({
                'users':[]
            })
            console.log(error)
        })
        axios.get('http://127.0.0.1:8000/api/Todo/', {headers})
        .then(response => {
            const todos = response.data
                this.setState(
                {
                    'todos': todos
                }
            )

     
        }).catch(error =>{
            this.setState({
                'todos':[]
            })
        console.log(error)
        })

        axios.get('http://127.0.0.1:8000/api/Project/', {headers})
        .then(response => {
            const projects = response.data
                this.setState(
                {
                 'project': projects
                }
                )

     
        }).catch(error =>{
            this.setState({
                'project':[]
            })
        console.log(error)
        })

        const footers = [
         {
         'main': <a href ='http://localhost:3000'>'main'</a>,
         'api': 'api',
         'info': 'this is my first rest site! Hope you Enjoy!',
         'contacts':'127.0.0.1, internet, Russia'
         }
        ]
        this.setState(
            {
             'footers': footers
            }
        )
        const menus = [
            {
            'main': <a href ='http://localhost:3000'>'main'</a>,
            'api': <a href ='http://127.0.0.1:8000/api/'>'api'</a>
            }
        ]
        this.setState(
            {
             'menus': menus
            }
        )

   }

   componentDidMount() {
        const token = localStorage.getItem('token')
        console.log(token)
        this.setState({'token': token}, this.LoadData)
       
   }
          
    
   
   render () {
       return (
           <div className="App">
                <div>
                    <MenuList menus={this.state.menus}/>
                </div>
                <HashRouter>
                    <nav>
                        <ul>

                            <li><Link to='/'>Users</Link></li>
                            <li><Link to='/todo'>Todo</Link></li>
                            <li><Link to='/project'>Project</Link></li>
                            <li>
                                {this.isAuthenticated() ?
                                    <button onClick={()=>this.logout()}>logout</button> :
                                    <Link to='/login'>login</Link>
                                }
                            </li>
                        </ul>
                    </nav> 
                    <Route path='/' exact component={()=><UserList users={this.state.users}/>}/>     
                    <Route path='/todo/create' exact component={()=><TodoForm createTodo={(name, note_text, creation_date, update_date, user)=> this.createTodo(name, note_text, creation_date, update_date, user)}/>}/>
                    <Route path='/todo' exact component={()=><TodoList todovars={this.state.todos} deleteTodo={(id)=>this.deleteTodo(id)}/>}/>  
                    <Route path='/login' exact component={()=><LoginForm getToken={(login, password)=> this.getToken(login, password)}/>}/>  
                    <Route path='/project/create' exact component={()=><ProjectForm createProject={(name, users, repo_link)=>this.createProject(name, users, repo_link)}/>}/>
                    <Route path='/project' exact component={()=><ProjectList items={this.state.project} deleteProject={(id)=>this.deleteProject(id)}/>}/>
                </HashRouter>
                <div>
                    <FooterList footers={this.state.footers}/>
                </div>
           </div>
       )
   }
}

export default App;

