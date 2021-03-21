import React from 'react'
import RadiusButton from './RadiusButton'
import PropTypes from 'prop-types'

const RadiusButtons = ({ amount }) =>
  <>
    <span>Select Radius: </span>
    {Array.from({ length: amount }, (_, x) => x + 2)
      .map(value =>
        <RadiusButton key={value} value={value} />)}
  </>
RadiusButtons.propTypes = {
  amount: PropTypes.number.isRequired
}

export default RadiusButtons