import React from 'react'
import {connect} from 'react-redux'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

function li (e) {
  return(
    <li key={e.id}>{e.name}</li>
  )
}

const emojis = props => {
  return(
    <div>
      <h1> Emojis </h1>
        <ul>
          {map(li, props.emojis)}
        </ul>
      </div>
  )
}

const mapStateToProps = state => {
  return({
    emojis: state.setEmojis
  })
}

const connector = connect(mapStateToProps)

export default connector(emojis)

//
// const li = emoji => {
//   return (
//     <li key={emoji.id} style={{ emoji: emoji.value}}>
//       {emoji.name}
//     </li>
//   )
// }
//
// class Emojis extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       emoji: []
//     }
//   }
//
// componentDidMount() {
//   fetch('http://localhost:5000/emojis')
//     .then(res => res.json())
//     .then(emoji => this.setState({emoji}))
//     .catch(err => ('ERROR!', err))
// }
//
//   render() {
//     return (
//       <div>
//         <h1>Emojis</h1>
//           <ul>{map(li, this.state.emoji)}</ul>
//       </div>
//     )
//   }
// }
//
// export default Emojis
