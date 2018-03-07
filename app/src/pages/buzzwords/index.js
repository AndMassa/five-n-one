import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

const li = buzzWords => {
  return(
    <li key={buzzWords.id} style={{ buzzWords: buzzWords.value }}>
    {buzzWords.value}
    </li>
  )
}

class BuzzWords extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buzzWords: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:5000/buzzwords')
      .then(res => res.json())
      .then(buzzWords => this.setState({buzzWords}))
      .catch(err => ('ERROR!', err))
  }

  render() {
    return (
      <div>
        <h1>BuzzWords</h1>
        <ul>{map(li, this.state.buzzWords)}</ul>
      </div>
    )
  }
}

export default BuzzWords
