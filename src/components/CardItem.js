import React from 'react'
import {Link} from 'react-router-dom'

function CardItem() {
    return (
        <>
            <li className="cards__item"> 
            <Link className="cards__item__list">
                <figure className="cards__item__pic-wrap">
                    
                </figure>
            </Link>
            </li>
        </>
    )
}

export default CardItem
