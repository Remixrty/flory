import React, { useState, useEffect } from 'react'
import stylesPages from '../../styles/Pages.module.css'
import stylesBack from '../../styles/Back.module.css'

export default function BackConnect() {

    return (
        <>
            <div className={stylesPages.mainFrame}>
                <div className='container'>
                    <div className='row'>
                        {/* <div className={stylesBack.card}> */}
                        <form className={stylesBack.card}>
                            <p className={stylesPages.nameBlock}>Рассчитать стоимость росписи БЕСПЛАТНО!</p>
                            <input type='email' className={stylesBack.superField} placeholder='Введите Ваш email' />
                            <input type='text' className={stylesBack.superField} placeholder='Введите Ваше имя' />
                            <input type='text' className={stylesBack.superField} placeholder='Ваше имя' />
                            <textarea className={stylesBack.superField} placeholder='Опишите Ваши ожидания' style={{ height: '169px' }} />
                            <div className={stylesPages.button} style={{ margin: '8px 0 0 0', width: '233px',backgroundColor: '#787878', color: '#FFFFFF' }}>Выбрать файл</div>
                            <div className={stylesPages.button} style={{ margin: '8px 0 0 0', width: '233px',backgroundColor: '#AFE3F0'}}>Отправить</div>
                        </form>
                        {/* </div> */}
                    </div>

                </div>
            </div>
        </>
    )
}