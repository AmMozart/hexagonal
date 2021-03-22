import style from './Hexagonal.module.css'
import BattleField from './BattleField'
import RadiusButtons from './RadiusButtons'
import { useEffect } from 'react'
import { moveTo } from '../Keyboard'
import Status from './Status'
import { AMOUNT_RADIUS_BUTTONS } from '../config'
import Select from './Select'

function Hexagonal() {

  useEffect(() => {
    document.addEventListener('keydown', e => moveTo(e.key))
  }, [])

  return (
    <div className={style.hexagonal}>

      <header className={style.optionsGame}>
        <Select />
        <RadiusButtons amount={AMOUNT_RADIUS_BUTTONS} />
      </header>

      <div className={style.battleField}>
        <BattleField />
      </div>

      <footer className={style.statusGame}>
        <Status />
      </footer>

    </div>
  )
}

export default Hexagonal