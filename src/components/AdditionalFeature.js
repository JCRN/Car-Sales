import React from 'react'
import connect from 'react-redux'
import { addFeature } from '../actions'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={props.addFeature}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  )
}

const mapStateToProps = state => {
  return {
    feature: state.car.features
  }
}

export default connect(
  mapStateToProps,
  { addFeature }
)(AdditionalFeature)
