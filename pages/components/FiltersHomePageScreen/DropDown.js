import styles from './FiltersHomePageScreen.module.scss'
import React, { useState } from 'react'

export default function DropDown({ }) {

    const [change, setChange] = useState(false)
    const onHandleChange = () => {
        setChange(!change)
    }

    return (
        <div>
            <label
                for={'rooms'}
                className={styles.filtersContainer__dropdown}
                onClick={() => onHandleChange()}
            >
                <p>Количество комнат</p>
                <div className={styles.filtersContainer__dropdown__valueText}>
                    <p>Любая</p>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L13 1" stroke="#01A743" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>

            </label>
            <div
                className={styles.dropdown}
                style={{ display: change === true ? 'block' : 'none' }}
            >
                <ul>
                    <li>hyguyguyg</li>
                    <li>hyguyguyg</li>
                    <li>hyguyguyg</li>
                </ul>

            </div>
        </div>
    )
}