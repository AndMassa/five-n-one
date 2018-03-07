import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

const li = emoji => {
  return (
    <li key={emoji.id} style={{ emoji: emoji.value}}>
      {emoji.name}
    </li>
  )
}

class Emojis extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emoji: []
    }
  }

componentDidMount() {
  fetch('http://localhost:5000/emojis')
    .then(res => res.json())
    .then(emoji => this.setState({emoji}))
    .catch(err => ('ERROR!', err))
}

  render() {
    return (
      <div>
        <h1>Emojis</h1>
          <ul>{map(li, this.state.emoji)}</ul>
      </div>
    )
  }
}

export default Emojis
