import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './TodoList'

export default class TodoApp extends React.Component{
    constructor(props) {
        super(props)
        this.state = { items: [], text: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    render(){
        return(
            <div>
                <h3>Todo App</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        New task to do? 
                    </label>
                    <input 
                    id="new-todo"
                    onChange={this.handleChange}
                    value={this.state.text}
                     />
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        )
    }

        handleChange(e){
            this.setState({ text: e.target.value })
        }

        handleSubmit(e){
            e.preventDefault()
            if (this.state.text.length === 0){
                return
            }
            const newItem = {
                text: this.state.text,
                id: Date.now()
            }
            this.setState(state => ({
                items: this.state.items.concat(newItem),
                text: ''
            }))
        }
    }

    



ReactDOM.render(<TodoApp />, document.getElementById('root'))
