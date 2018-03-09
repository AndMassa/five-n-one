import React from 'react'
import {connect} from 'react-redux'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'
import {Link} from 'react-router-dom'


function li (c) {
  return(
  <li className="pa2 blue dim" key={c.id}>{c.name}</li>
      )
  }

const StarWars = props => {

  return (
    <div>
      <h1> Star Wars Character Names </h1>
      <Link to="/starwars/new">Add Character</Link>
      <ul>
      {map(li, props.starwars)}
      </ul>
    </div>

  )
}

function mapStateToProps(state) {

  return {starwars: state.starWarsCharacters}
}

const connector = connect(mapStateToProps)

export default connector(StarWars)

//
// const li = starwars => {
//   return (
//     <li key={starwars.id} style={{ starwars: starwars.value}}>
//     {starwars.name}
//     </li>
//   )
// }
//
// class StarWars extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       starwars: []
//     }
//   }
//
//   componentDidMount() {
//     fetch('http://localhost:5000/starwars')
//       .then(res => res.json())
//       .then(starwars => this.setState({starwars}))
//       .catch(err => ('ERROR!', err))
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>Star Wars</h1>
//         <ul>{map(li, this.state.starwars)}</ul>
//       </div>
//     )
//   }
// }
//
// export default StarWars
