import React, { Component } from 'react';
import axios from 'axios';

class EditListForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.list.id,
            title: this.props.list.title,
            excerpt: this.props.list.excerpt
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        axios.put( '/api/v1/lists/' + this.state.id, { 
            list: {
                title: this.state.title, 
                excerpt: this.state.excerpt
            } 
        })
        .then(response => {console.log(response)})
        .catch(error => console.log(error));
        this.props.onEditDone(this.state)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <input  name="title"
                    type="text"
                    placeholder="Title..."
                    value={this.state.title}
                    onChange={this.handleChange} />
            <input  name="excerpt"
                    type="text"
                    placeholder="Excerpt..."
                    value={this.state.excerpt}
                    onChange={this.handleChange} />
            <button>Update List</button>
        </form>  
        )
    }
}

export default EditListForm;