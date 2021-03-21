import { store } from './store'
import { LOAD_HEXAGON_SUCCESS } from './actions/types'
import { loadHexagon } from './actions/loadHexagon'

export function moveTo(key) {
  switch (key) {
    case 'q':
      keyHandle('z', 'x', false)
      break
    case 'w':
      keyHandle('x', 'y', true)
      break
    case 'e':
      keyHandle('y', 'z', false)
      break
    case 'a':
      keyHandle('y', 'z', true)
      break
    case 's':
      keyHandle('x', 'y', false)
      break
    case 'd':
      keyHandle('z', 'x', true)
      break
    default: break
  }

  function keyHandle(axis, arrow, isUp) {
    const rad = store.getState().info.radius
    let result = []

    for (let i = rad - 1; i >= -rad + 1; i--) {
      let lineHex = store.getState().field.hexagon
        .filter(data => i === data[axis])
        .sort((a, b) => {
          if (a[arrow] < b[arrow]) {
            return isUp ? 1 : -1;
          }
          if (a[arrow] > b[arrow]) {
            return isUp ? -1 : 1;
          }
          return 0;
        })

      let nums = lineHex.map(x => x.value)
        .filter(y => y > 0)
        .reduce((acc, x) => { let c = acc[acc.length - 1] === x ? x + acc.pop() : x; return [...acc, c] }, [])
        .reverse()

      result.push(...lineHex.map(x => (
        { ...x, value: nums.pop() || 0 }
      )))
    }
    let tmp = JSON.stringify(store.getState().field.hexagon)
    store.dispatch({
      type: LOAD_HEXAGON_SUCCESS,
      payload: result
    })

    if (JSON.stringify(result) !== tmp)

      store.dispatch(loadHexagon())
  }
}