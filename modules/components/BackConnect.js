import React, { useState, useEffect } from 'react'
import stylesPages from '../../styles/Pages.module.css'
import stylesBack from '../../styles/Back.module.css'
import { useDispatch, useSelector } from 'react-redux'
import '@popperjs/core'


export default function BackConnect() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [messageAbout, setMessageAbout] = useState('')
    const [data, setData] = useState('')
    const [drop, setDrop] = useState('')

    const dispatch = useDispatch()
    const choose = useSelector(state => state.choose.choose)
    console.log(choose);
    const simpleDispatch = (choose) => {
        dispatch({ type: 'SIMPLE' })
    }
    const minimalDispatch = (choose) => {
        dispatch({ type: 'MINIMAL' })
    }
    const artDispatch = (choose) => {
        dispatch({ type: 'ART' })
    }

    useEffect(() => {
        setDrop(choose)
        // console.log(drop);
    })

    useEffect(() => {
        switch (drop) {
            case 'Простые формы': {
                simpleDispatch()
                break
            }
            case 'Минимализм в тренде': {
                minimalDispatch()
                break
            }
            case 'Это Арт': {
                artDispatch()
                break
            }
            default: console.log(drop);
        }
    }, [drop])

    // const [createObjURL, setCreateObjURL] = useState(null)
    // useEffect(() => {
    //     setData(JSON.stringify({ email, name, phone, messageAbout, drop }))
    // }, [email, name, phone, messageAbout, drop])

    async function dataRequest() {
        const res = await fetch('/api/sendMailApi', {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify({ email, name, phone, messageAbout, drop })
        }).then(async resp => {
            console.log(await resp.json());
        })
        // console.log(await res.json());
        // if (res.status === 200) {
        //     fileRequest()
        // }
    }

    // async function fileRequest() {
    //     // setData(JSON.stringify({ name, phone, email, messageAbout }))
    //     console.log(data);
    //     console.log(image);
    //     const jsonData = new FormData()
    //     jsonData.append('json', data)
    //     setImage(image+jsonData)
    //     console.log(image);
    //     const res = await fetch('/api/hello', {
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         method: 'POST',
    //         body: data,

    //     })
    //     console.log(res);
    //     console.log(await res.json());
    // }

    // async function uploadToClient(e) {
    //     if (e.target.files) {
    //         const files = new FormData()
    //         for (let index = 0; index < e.target.files.length; index++) {
    //             files.append('file', e.target.files[index])
    //             // console.log(index);
    //         }
    //         setImage(files)
    //     }
    // }

    return (
        <>
            <div className={stylesPages.mainFrame} id='backSection'>
                <div className='container'>
                    <div className='row'>
                        {/* <div className={stylesBack.card}> */}
                        <div className={stylesBack.card}>
                            <p className={stylesPages.nameBlock}>Рассчитать стоимость росписи БЕСПЛАТНО!</p>
                            <input type='email' className={stylesBack.superField} placeholder='Введите Ваш email' required onChange={e => setEmail(e.target.value)} />
                            <input type='text' className={stylesBack.superField} placeholder='Введите Ваше имя' required onChange={e => setName(e.target.value)} />
                            <input type='number' className={stylesBack.superField} maxLength={11} placeholder='Введите Ваш номер телефона (необязательно)' onChange={e => setPhone(e.target.value)} />
                            <textarea className={stylesBack.superField} placeholder='Опишите Ваши ожидания' style={{ height: '169px' }} required onChange={e => setMessageAbout(e.target.value)} />
                            {/* <p className={stylesPages.textFrame20} style={{ margin: 0 }}>Присылайте фото Ваших предпочтений</p> */}
                            <p className={stylesPages.textFrame20} style={{ margin: '0 0 16px 16px', alignSelf: 'start' }}>Выберите подходящий стиль:</p>
                            <div className="dropdown" style={{ alignSelf: 'start', margin: '0 0 16px 16px', width: '300px' }}>
                                <button className="btn dropdown-toggle btn-warning" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#AFE3F0', border: 'none' }}>
                                    {/* {drop === 'simple' ? 'Простые формы' : drop === 'minimal' ? 'Минимализм' : 'Это Арт'} */}
                                    {drop}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" onClick={() => setDrop('Простые формы')}>Простые формы</a></li>
                                    <li><a className="dropdown-item" onClick={() => setDrop('Минимализм в тренде')}>Минимализм</a></li>
                                    <li><a className="dropdown-item" onClick={() => setDrop('Это Арт')}>Это Арт</a></li>
                                </ul>
                            </div>
                            {/* <input type='file' multiple className={stylesPages.button} style={{ margin: '8px 0 0 0', width: '233px', backgroundColor: '#787878', color: '#FFFFFF' }} onChange={e => uploadToClient(e)} /> */}

                            <div className={stylesPages.button} style={{ margin: '8px 0 0 0', width: '233px', backgroundColor: '#AFE3F0' }} onClick={e => dataRequest(e)}>Отправить</div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}