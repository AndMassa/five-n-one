import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

const li = starwars => {
  return (
    <li key={starwars.id} style={{ starwars: starwars.value}}>
    {starwars.name}
    </li>
  )
}

class StarWars extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      starwars: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/starwars')
      .then(res => res.json())
      .then(starwars => this.setState({starwars}))
      .catch(err => ('ERROR!', err))
  }

  render() {
    return (
      <div>
        <h1>Star Wars</h1>
        <ul>{map(li, this.state.starwars)}</ul>
      </div>
    )
  }
}

export default StarWars
