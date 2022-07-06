import React, { useEffect, useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import stylesHeader from '../../styles/Header.module.css'

export default function Header() {

    const [isSticky, setIsSticky] = useState(false)
    const [isShir, setIsShir] = useState(true)
    // showSettings(event) {
    //     event.preventDefault();
    // }

    useEffect(() => {
        const listener = () => {
            if (window.scrollY > 72 || window.innerWidth < 1000) {
                setIsSticky(true)
            }
            else { setIsSticky(false) }
        }
        window.addEventListener('scroll', listener)

        return () => {
            window.removeEventListener('scroll', listener)
        }
    })

    useEffect(() => {
        if (window.innerWidth<1000){
            setIsShir(false)
        }
        else {setIsShir(true)}
    })



    if (isShir) return (
        <>
            <div className={isSticky ? stylesHeader.headerLittle : stylesHeader.headerBig} id='header'>
                <div className={stylesHeader.logo} onClick={() => window.scrollTo(0, 0)}>
                    FLORIARTY
                </div>
                <div className={stylesHeader.menu}>
                    <p className={stylesHeader.menuItem} onClick={() => document.getElementById('secondSection').scrollIntoView({ block: 'center' })}>    обо мне</p>
                    <p className={stylesHeader.menuItem} onClick={() => document.getElementById('carouselPaintSection').scrollIntoView({ block: 'center' })}>    картины</p>
                    <p className={stylesHeader.menuItem} onClick={() => document.getElementById('thirdSection').scrollIntoView({ block: 'center' })}>    роспись стен</p>

                    <p className={stylesHeader.menuItem} onClick={() => document.getElementById('fourthSection').scrollIntoView({ block: 'center' })}>    цены</p>
                    <p className={stylesHeader.menuItem} onClick={() => document.getElementById('backSection').scrollIntoView({ block: 'center' })}>    как заказать</p>
                    <p className={stylesHeader.menuItem} onClick={() => document.getElementById('secondSection').scrollIntoView({ block: 'center' })}>    контакты</p>

                </div>
            </div>
        </>
    )
    else return (
        <div className={stylesHeader.headerLittle} id='header'>
            <div className={stylesHeader.logo} onClick={() => window.scrollTo(0, 0)}>
                FLORIARTY
            </div>
            {/* <Menu>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
            </Menu> */}
        </div>
    )
}