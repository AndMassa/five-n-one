import React from 'react'
import Form from '../../components/form'
import {connect} from 'react-redux'
import {addBuzzword, chgBuzzword} from '../../action-creators/buzzwords'

const BuzzwordForm = props => {
  return (
    <div>
      <h1>{props.formTitle}</h1>
      <Form
        onChange={props.onChange}
        onSubmit={e => props.onSubmit(props.history, props.currentBuzzword)}
        {...props.currentBuzzword}
        cancelUrl={"/buzzwords"}
      />

    </div>
  )
}

function mapStateToProps (state) {
  return{
    currentBuzzword: state.currentBuzzword
  }
}

const mapActionsToProps = dispatch => {
  return{
    onChange:  (field, value) => {
      dispatch(chgBuzzword(field, value))

    },

    onSubmit:  (history, buzzword) => e => {
      e.preventDefault()
      dispatch(addBuzzword(buzzword, history))

    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(BuzzwordForm)
