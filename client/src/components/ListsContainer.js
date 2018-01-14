import React, { Component } from 'react';
import axios from 'axios';
import List from './List';

class ListsContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            lists: []
        }
        this.addNewList = this.addNewList.bind(this)
    }

    componentDidMount() {
        axios.get('api/v1/lists')
        .then(response => {
            console.log(response)
            this.setState({
                lists: response.data
            })
        })
        .catch(error => console.log(error))
    }

    addNewList() {
        axios.post('/api/v1/lists', {
            list: {
                title: 'New List',
                excerpt: 'New Excerpt'
            }
        })
        .then(response => {
            console.log(response)
            const lists = [ ...this.state.lists, response.data ]
            this.setState({lists})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <div className="lists-container">
                {this.state.lists.map( list => {
                    return (<List list={list} key={list.id} />)
                })}

                <button className="new-list-item" 
                    onClick={this.addNewList}>
                        New List
                </button>    
            </div>
        )
    }
}

export default ListsContainer;