import React from 'react'
import ReactDOM from 'react-dom'

export default class TodoApp extends React.Component{
 
    render(){
        return(
            <div>
                <h3>Todo App</h3>
            </div>
        )
    }
}


ReactDOM.render(<TodoApp />, document.getElementById('root'))
