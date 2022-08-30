import { useState } from 'react'
import DropDown from './DropDown'
import styles from './FiltersHomePageScreen.module.scss'


export default function FiltersHomePageScreen() {
    const [change, setChange] = useState(false)
    const onHandleChange = () => {
        setChange(!change)
    }

    return (
        <div className={styles.filtersContainer} >
           <DropDown />
           <DropDown/>
           <DropDown/>
               <button>На карте</button>

        </div>
    )
} 