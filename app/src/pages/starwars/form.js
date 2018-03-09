import React from 'react'
import Form from '../../components/form'
import {connect} from 'react-redux'
import {addStarWarsCharacter, chgStarWarsCharacter} from '../../action-creators/starwars'

const StarWarsForm = props => {

  return (
    <div>
      <h1>{props.formTitle}</h1>
      <Form
        cancelUrl='/starwars'
        onChange={props.onChange}
        onSubmit={e => props.onSubmit(props.currentStarWarsCharacter, props.history)}
        {...props.currentStarWarsCharacter}
        />
    </div>
  )
}

function mapStateToProps (state) {
  return {
    currentStarWarsCharacter: state.currentStarWarsCharacter
  }
}

function mapActionToProps (dispatch) {
  return {
    onChange: (field, value) => dispatch(chgStarWarsCharacter(field, value)),
    onSubmit: (character, history) => e => {
      e.preventDefault()
      dispatch(addStarWarsCharacter(character, history))
    }
  }
}

const connector = connect(mapStateToProps, mapActionToProps)

export default connector(StarWarsForm)
