import React from 'react'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import {Link} from 'react-router-dom'
import { map } from 'ramda'

function li (c) {
  return(
    <li className="pa1" key={c.id} style={{ color: c.value }}>{c.name}</li>
  )
}

const colors = props => {

  return(
    <div>
      <h1> List of Colors </h1>
      <ul>
      {map(li, props.colors)}
      </ul>
    </div>
  )
}

function mapStateToProps(state) {
  return {colors: state.setColors}
}

const connector = connect(mapStateToProps)

export default connector(colors)
