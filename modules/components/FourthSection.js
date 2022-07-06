import React from 'react'
import styles from '../../styles/Pages.module.css'
import { useDispatch, useSelector } from 'react-redux'

export default function FourthSection() {

    const dispatch = useDispatch()
    const choose = useSelector(state => state.choose.choose)
    const simpleDispatch = (choose) => {
        dispatch({type: 'SIMPLE'})
    }
    const minimalDispatch = (choose) => {
        dispatch({type: 'MINIMAL'})
    }
    const artDispatch = (choose) => {
        dispatch({type: 'ART'})
    }

    return (
        <>
            <div className={styles.mainFrame} id='fourthSection'>
                <div className={styles.nameBlock}>
                    Стоимость росписи
                </div>
                <div className={styles.cardFrame}>
                    <div className={`${styles.card} ${styles.cardSimple}`} onClick={()=>simpleDispatch()}>
                        <p className={styles.textBold31}>Простые формы</p>
                        <p className={styles.textBold31}>От 1500 руб/кв.м</p>
                    </div>
                    <div className={`${styles.card} ${styles.cardMini}`} style={{ backgroundColor: '#C8E8F0' }} onClick={()=>minimalDispatch()}>
                        <p className={styles.textBold31}>Минимализм в тренде</p>
                        <p className={styles.textFrame20}>Сюжеты с объектами, стилизированными образами, буквами, цветовыми заливками</p>
                        <p className={styles.textBold31}>От 4000 руб/кв.м</p>
                    </div>
                    <div className={`${styles.card} ${styles.cardArt}`} style={{ backgroundColor: '#FAD6E5' }} onClick={()=>artDispatch()}>
                        <p className={styles.textBold31}>Это Арт</p>
                        <p className={styles.textFrame20}>Сложные сюжеты, реалистичность образов</p>
                        <p className={styles.textBold31}>От 7000 руб/кв.м</p>
                    </div>

                </div>
            </div>
        </>
    )
}