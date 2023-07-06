import React from 'react'
import { Link , Outlet} from 'react-router-dom'
import styles from '../styles/App.module.css'

const linkLayouts = () => {
  return (
    <div>
        <div className={styles.links}>
         <Link to={'/'}>Main</Link>
         <Link to={'about'}>About</Link>
         <Link to={'facts/'}>Facts</Link>
        </div>

         <Outlet/>
    </div>
  )
}

export default linkLayouts