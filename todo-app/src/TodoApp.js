import React from 'react'
import ReactDOM from 'react-dom'

export default class TodoApp extends React.Component{
    constructor(props) {
        super(props)
        this.state = { items: [], text: ''}
    }
    render(){
        return(
            <div>
                <h3>Todo App</h3>
                <form >
                    <label htmlFor="new-todo">
                        New task to do? 
                    </label>
                    <input id="new-todo" />
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<TodoApp />, document.getElementById('root'))
