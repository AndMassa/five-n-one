import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

const li = color => {
  return (
    <li key={color.id} style={{ color: color.value }}>
      {color.name}
    </li>
  )
}

class Colors extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: []
    }
  }
  
  componentDidMount() {
   fetch('http://localhost:5000/colors')
     .then(res => res.json())
     .then(colors => this.setState({colors}))
     .catch(err => ('ERROR!', err))
  }

  render() {
    return (
      <div>
        <h1>Colors</h1>
        <ul>{map(li, this.state.colors)}</ul>
      </div>
    )

  }
}

export default Colors
