import React, { useEffect, useState } from 'react'
import stylesHeader from '../../styles/Header.module.css'

export default function Header() {

    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const listener = () => {
            if (window.scrollY > 72 || window.innerWidth < 500) {
                setIsSticky(true)
            }
            else { setIsSticky(false) }
        }
        window.addEventListener('scroll', listener)

        return () => {
            window.removeEventListener('scroll', listener)
        }
    })



    return (
        <>
            <div className={isSticky ? stylesHeader.headerLittle : stylesHeader.headerBig} id='header'>
                <div className={stylesHeader.logo}>
                    FLORIARTY
                </div>
                <div className={stylesHeader.menu}>
                    <p className={stylesHeader.menuItem}>    картины</p>
                    <p className={stylesHeader.menuItem}>    роспись стен</p>
                    <p className={stylesHeader.menuItem}>    обо мне</p>
                    <p className={stylesHeader.menuItem}>    цены</p>
                    <p className={stylesHeader.menuItem}>    как заказать</p>
                    <p className={stylesHeader.menuItem}>    контакты</p>

                </div>
            </div>
        </>
    )
}