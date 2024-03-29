import React, { useEffect } from 'react'
import { serverURL } from '../config'
import PropTypes from 'prop-types'
import { changeServer } from '../actions/changeServer'
import { clearField } from '../actions/clearField'
import { createField } from '../actions/createField'
import { loadHexagon } from '../actions/loadHexagon'
import { connect } from 'react-redux'

const Select = ({ changeServer, clearField, createField, loadHexagon, server }) => {

  const selectHandle = e => {
    changeServer(e.target.options[e.target.selectedIndex].value)
  }

  useEffect(() => {
    clearField()
    createField()
    loadHexagon()
  }, [server, clearField, createField, loadHexagon])

  return (
    <div>
      <select id="url-server" onChange={selectHandle} value={server}>
        <option id="remote" value={serverURL.remote}>Remote server</option>
        <option id="localhost" value={serverURL.local}>Local server</option>
      </select>
      <hr />
    </div>
  )
}

Select.propTypes = {
  changeServer: PropTypes.func.isRequired,
  loadHexagon: PropTypes.func.isRequired,
  createField: PropTypes.func.isRequired,
  clearField: PropTypes.func.isRequired,
}

const mapDispatcToProps = dispatch => ({
  changeServer: server => dispatch(changeServer(server)),
  createField: () => dispatch(createField()),
  loadHexagon: () => dispatch(loadHexagon()),
  clearField: () => dispatch(clearField())
})

export default connect(state => ({ server: state.info.server }), mapDispatcToProps)(Select)