import style from './RadiusButton.module.css'
import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { loadHexagon } from '../actions/loadHexagon'
import { changeRadius } from '../actions/changeRadius'
import { createField } from '../actions/createField'
import { clearField } from '../actions/clearField'
import PropTypes from 'prop-types'

const Button = ({ value, radius, changeRadius, loadHexagon, createField, clearField }) => {
  let ref = useRef(null)

  useEffect(() => {
    ref.current.checked = radius === value
  })

  const clickHandle = () => {
    clearField()
    changeRadius(value)
    createField()
    loadHexagon()
  }

  return (
    <div className={style.radioButton} >

      <input id={`radio-${value}`}
        type="radio" name="radius"
        value={value}
        ref={ref}
        onClick={clickHandle}
      />
      <label htmlFor={`radio-${value}`}>{value}</label>
    </div>
  )
}

Button.propTypes = {
  value: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  changeRadius: PropTypes.func.isRequired,
  loadHexagon: PropTypes.func.isRequired,
  createField: PropTypes.func.isRequired,
  clearField: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  radius: state.info.radius
})

const mapDispatchToProps = dispatch => ({
  changeRadius: radius =>
    dispatch(changeRadius(radius)),
  createField: () =>
    dispatch(createField()),
  loadHexagon: () =>
    dispatch(loadHexagon()),
  clearField: () =>
    dispatch(clearField())
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)