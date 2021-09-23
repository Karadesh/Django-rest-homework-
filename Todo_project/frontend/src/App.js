import React from 'react';
import './App.css';
import UserList from './components/Users';



class App extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           'users': []
       }
   }


   componentDidMount() {
        const users = [
            {
                'first_name': 'Kart',
                'last_name': 'Thadar'
            },
            {
                'first_name': 'Genshin',
                'last_name': 'Impact'
            },
        ]
        this.setState(
            {
                'users': users
            },
        )
    }


        
   render () {
       return (
           <div>
               <UserList users={this.state.users} />
           </div>
       )
   }
}

export default App;

