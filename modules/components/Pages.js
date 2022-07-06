import React, {useState} from 'react'
import CarouselPaint from './CarouselPaint'
import CarouselWall from './CarouselWall'
import FirstSection from './FirstSection'
import FourthSection from './FourthSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import styles from '../../styles/Pages.module.css'
import BackConnect from './BackConnect'
import FAQ from './FAQ'

export default function Pages() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <FirstSection /></div>
                <div className='row'>
                    <SecondSection /></div>
            </div>
            <CarouselPaint />
            <div className='container'>
                <div className='row'>
                    <ThirdSection /></div>
                <div className='row'></div>
            </div>

            <CarouselWall />

            <div className='container'>
                <div className='row'><FourthSection /></div>
                <div className='row'><BackConnect /></div>
                <div className='row'><FAQ/></div>
            </div>
        </>
    )
}