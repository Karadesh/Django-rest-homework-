import React from 'react';
import axios from 'axios';
import './App.css';
import UserList from './components/Users';
import MenuList from './components/Menu'
import FooterList from './components/Footer';
import TodoList from './components/Todo';
import ProjectList from './components/Project';
import {HashRouter, Route, Link} from 'react-router-dom'



class App extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           'users': [],
           'footers':[],
           'menus': [],
           'project': [],
           'todos': []
       }
   }


   componentDidMount() {
       axios.get('http://127.0.0.1:8000/api/ListUsers/')
        .then(response => {
            const users = response.data
                this.setState(
                {
                    'users': users
                }
            )

        
        }).catch(error => console.log(error))
        axios.get('http://127.0.0.1:8000/api/Todo/')
        .then(response => {
            const todos = response.data
                this.setState(
                {
                    'todos': todos
                }
            )

        
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/Project/')
        .then(response => {
            const projects = response.data
                this.setState(
                {
                    'project': projects
                }
            )

        
        }).catch(error => console.log(error))

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
                        </ul>
                    </nav> 
                    <Route path='/' exact component={()=><UserList users={this.state.users}/>}/>     
                    <Route path='/todo' exact component={()=><TodoList todovars={this.state.todos}/>}/>  
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

