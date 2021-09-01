import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'> 
                <section className='closing'> 
                    <div className='closing-wrap'>
                        <small className='website-rights'> Lachlan 2021</small>
                        <div className='contact'> 
                            <Link
                                className='icon'
                                to={{pathname: 'https://www.linkedin.com/in/lachlan-ting/'}}
                                target='_blank'
                                aria-label='Linkedin'
                            >
                            <i class="fab fa-linkedin"/>
                            </Link>
                            <Link
                                className='icon'
                                to={{pathname: 'https://github.com/lting0804'}}
                                target='_blank'
                                aria-label='Github'
                            >
                            <i class="fab fa-github"></i>
                            </Link>
                            <Link
                                className='icon'
                                to=''
                                target='_blank'
                                aria-label='Email'
                            >
                            <i class="fas fa-envelope-open-text"></i>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Footer
