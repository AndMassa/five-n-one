import React from 'react'
import {connect} from 'react-redux'
import fetch from 'isomorphic-fetch'
import {Link} from 'react-router-dom'
import { map } from 'ramda'

function li (b) {
  return(
    <li key={b.id}>{b.name}</li>
  )
}

const buzzwords = props => {
  return(
    <div>
      <h1> Buzz Words </h1>
        <Link to="/buzzwords/new">Add New Buzzword</Link>
        <ul>
          {map(li, props.buzzwords)}
        </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return({
    buzzwords: state.setBuzzWords
  })
}

const connector = connect(mapStateToProps)

export default connector(buzzwords)
