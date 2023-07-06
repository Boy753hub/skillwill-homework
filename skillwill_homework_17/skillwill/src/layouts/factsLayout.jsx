import React from 'react'
import { Link , Outlet} from 'react-router-dom'
import styles from '../styles/App.module.css'

const factsLayout = () => {
  return (
    <div>
    <div className={styles.links}>
    <Link to={'/facts/1'}>1</Link>
    <Link to={'/facts/2'}>2</Link>
    <Link to={'/facts/3'}>3</Link>
    <Link to={'/facts/4'}>4</Link>
    <Link to={'/facts/5'}>5</Link>
    <Link to={'/facts/6'}>6</Link>
    <Link to={'/facts/7'}>7</Link>
    <Link to={'/facts/8'}>8</Link>
    <Link to={'/facts/9'}>9</Link>
    <Link to={'/facts/10'}>10</Link>
    </div>

         <Outlet/>
    </div>
  )
}

export default factsLayout