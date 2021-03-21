import { useEffect } from 'react'
import { connect } from 'react-redux'
import { changeStatus } from '../actions/changeStatus'
import PropTypes from 'prop-types'

function Status({ status, hexagon, setStatus }) {

  const isNeighbors = (a, b) => key =>
    (a[key] === b[key] || a[key] === b[key] - 1 || a[key] === b[key] + 1)

  useEffect(() => {
    let statusString =
      hexagon.reduce((acc, val, i, arr) => {
        let n = arr.filter(x => {
          let atKey = isNeighbors(x, val)
          return atKey('x')
            && atKey('y')
            && atKey('z')
            && (atKey('value') || x.value === 0)
        })
        return n.length > 1 ? acc + 1 : acc
      }, 0)
    setStatus(statusString > 0 ? 'playing' : 'game-over')
  })

  let color = status === 'playing' ? 'green' : 'red'
  return (
    <>
      <div>Game Status: <span data-status={status} style={{ color }}>{status}</span></div>
      <h3>Use q, w, e, a, s, d keys for move</h3>
    </>
  )
}

Status.propTypes = {
  status: PropTypes.string.isRequired,
  hexagon: PropTypes.arrayOf(PropTypes.object).isRequired,
  setStatus: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  status: state.info.status,
  hexagon: state.field.hexagon
})

const mapDispatchToProps = dispatch => ({
  setStatus: status => dispatch(changeStatus(status))
})

export default connect(mapStateToProps, mapDispatchToProps)(Status)