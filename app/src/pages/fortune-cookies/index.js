import React from 'react'
import {connect} from 'react-redux'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

function li (f) {
  return(
    <li key={f.id}>{f.name}</li>
  )
}

const fortuneCookies = props => {
  return(
    <div>
      <h1> Fortune Cookies </h1>
        <ul>
          {map(li, props.fortuneCookies)}
        </ul>
      </div>
  )
}

const mapStateToProps = state => {
  return({
    fortuneCookies: state.setFortuneCookies
  })
}

const connector = connect(mapStateToProps)

export default connector(fortuneCookies)
//
// const li = fortunecookies => {
//   return (
//     <li key={fortunecookies.id} style={{ fortunecookies: fortunecookies.value}}>
//     {fortunecookies.name}
//     </li>
//   )
// }
//
// class FortuneCookies extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       fortunecookies: []
//     }
//   }
//
// componentDidMount() {
//   fetch('http://localhost:5000/fortune-cookie')
//     .then(res => res.json())
//     .then(fortunecookies => this.setState({fortunecookies}))
//     .catch(err => ('ERROR!', err))
// }
//
//   render() {
//     return (
//       <div>
//         <h1>Fortune Cookies</h1>
//           <ul>{map(li, this.state.fortunecookies)}</ul>
//       </div>
//     )
//   }
// }
//
// export default FortuneCookies
