import React from 'react'
import { connect } from 'react-redux'
import Hexagon from './Hexagon'
import PropTypes from 'prop-types'

const BattleField = ({ hexagon }) => (
  <>
    {hexagon.map((data, i) =>
      <Hexagon key={i} {...data} />
    )}
  </>
)

BattleField.propTypes = {
  hexagon: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = state => ({
  hexagon: state.field.hexagon
})

export default connect(mapStateToProps, null)(BattleField)