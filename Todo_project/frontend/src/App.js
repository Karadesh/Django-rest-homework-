import React from 'react';
import axios from 'axios';
import './App.css';
import UserList from './components/Users';
import MenuList from './components/Menu'
import FooterList from './components/Footer';
import TodoList from './components/Todo';
import ProjectList from './components/Project';
import {HashRouter, Route, Link} from 'react-router-dom'
import LoginForm from './components/LoginForm';

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
    axios.post('http://127.0.0.1:8000/api/api-token-auth/', {'username': login, 'password': password})
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
         'main': <a href ='http://localhost:8000'>'main'</a>,
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
         'main': <a href ='http://localhost:8000'>'main'</a>,
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
           <div>
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
                                {this.isAuthenticated()?
                                <button onClick={()=>this.logout()}>logout</button>:
                                <Link to='/login'>login</Link>
                                }
                            </li>
                        </ul>
                    </nav> 
                    <Route path='/' exact component={()=><UserList users={this.state.users}/>}/>     
                    <Route path='/todo' exact component={()=><TodoList todovars={this.state.todos}/>}/>  
                    <Route path='/login' exact component={()=><LoginForm getToken={(login, password)=> this.getToken(login, password)}/>}/>  
                    <Route path='/project' exact component={()=><ProjectList items={this.state.project}/>}/>
                </HashRouter>
                <div>
                    <FooterList footers={this.state.footers}/>
                </div>
           </div>
       )
   }
}

export default App;

