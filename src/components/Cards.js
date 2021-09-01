import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1> Check out some of my Projects!</h1>
            <div className='cards__container'> 
                <div className='cards__wrapper'> 
                    <ul className='cards__items'>
                        <CardItem
                            src=''/*TO DO: PUT SS*/
                            text='The makings of this very own website!'
                            label='Web Development'
                            path='/Projects/Website'
                        />
                        <CardItem
                            src=''/*TO DO: PUT SS*/
                            text='Implementation of Tensorflow for Machine Learning!'
                            label='Machine Learning'
                            path='/Projects/Machine-Learning'
                        />
                        <CardItem
                            src=''/*TO DO: PUT SS*/
                            text='My Own Take on a JS13K Game!'
                            label='Web Development'
                            path='/Projects/JS-Game'
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards

