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
                <div className={stylesHeader.logo} onClick={()=>window.scrollTo(0,0)}>
                    FLORIARTY
                </div>
                <div className={stylesHeader.menu}>
                    <p className={stylesHeader.menuItem} onClick={()=>document.getElementById('secondSection').scrollIntoView({block:'center'})}>    обо мне</p>
                    <p className={stylesHeader.menuItem} onClick={()=>document.getElementById('carouselPaintSection').scrollIntoView({block:'center'})}>    картины</p>
                    <p className={stylesHeader.menuItem} onClick={()=>document.getElementById('thirdSection').scrollIntoView({block:'center'})}>    роспись стен</p>

                    <p className={stylesHeader.menuItem} onClick={()=>document.getElementById('fourthSection').scrollIntoView({block:'center'})}>    цены</p>
                    <p className={stylesHeader.menuItem} onClick={()=>document.getElementById('backSection').scrollIntoView({block:'center'})}>    как заказать</p>
                    <p className={stylesHeader.menuItem} onClick={()=>document.getElementById('secondSection').scrollIntoView({block:'center'})}>    контакты</p>

                </div>
            </div>
        </>
    )
}