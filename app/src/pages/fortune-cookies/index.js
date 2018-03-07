import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

const li = fortunecookies => {
  return (
    <li key={fortunecookies.id} style={{ fortunecookies: fortunecookies.value}}>
    {fortunecookies.name}
    </li>
  )
}

class FortuneCookies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fortunecookies: []
    }
  }

componentDidMount() {
  fetch('http://localhost:5000/fortune-cookie')
    .then(res => res.json())
    .then(fortunecookies => this.setState({fortunecookies}))
    .catch(err => ('ERROR!', err))
}

  render() {
    return (
      <div>
        <h1>Fortune Cookies</h1>
          <ul>{map(li, this.state.fortunecookies)}</ul>
      </div>
    )
  }
}

export default FortuneCookies
