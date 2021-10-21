import React from 'react'


class TodoForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {name: '', note_text: '', creation_date: '', update_date: '', user: 0}
    }

    handleChange(event){
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    handleSubmit(event){
        this.props.createTodo(this.state.name, this.state.note_text, this.state.creation_date, this.state.update_date, this.state.user)
        event.preventDefault()
    }

    render(){
        return(
            <form onSubmit={(event)=> this.handleSubmit(event)}>
                <div className="form-group">
                <label for="text">name</label>
                    <input type="text" className="form-control" name="name" value={this.state.name} onChange={(event)=>this.handleChange(event)}/>
                </div>
            <div className="form-group">
                <label for="note_text">note text</label>
                <input type="text" className="form-control" name="note_text" value={this.state.note_text} onChange={(event)=>this.handleChange(event)}/>
                </div>
            <div className="form-group">
                <label for="creation_date">creation date</label>
                <input type="date" className="form-control" name="creation_date" value={this.state.creation_date} onChange={(event)=>this.handleChange(event)}/>
                </div>
            <div className="form-group">
                <label for="update_date">update date</label>
                <input type="date" className="form-control" name="update_date" value={this.state.update_date} onChange={(event)=>this.handleChange(event)}/>
                </div>
            <div className="form-group">
                <label for="user">user</label>
                <input type="number" className="form-control" name="user" value={this.state.user} onChange={(event)=>this.handleChange(event)}/>
                </div>
                <input type="submit" className="btn btn-primary" value="Save"/>
            </form>
        );
    }
}

export default TodoForm