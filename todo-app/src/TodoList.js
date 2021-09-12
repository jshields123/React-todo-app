import React from 'react'


export default class TodoList extends React.Component {
    render(){
        return (
          <ul>
              {this.props.items.map(items => (
                  <li key={items.id}>{items.text}</li>
              ))}
          </ul>
        )
    }
}
