import React from 'react'
import '../styles/floor.css'
import { Fade } from 'react-awesome-reveal'

import Fireworks from './Fireworks'
import Lama from './Lama'
import Turtle from './Turtle'


const Floor = () => {
  return (
    <div className='bod' >

        <div className='first__line' >
            <div className='bar' />

            <div className='first__shape__case' >
                <div className='first__shape1' />
                <div className='first__shape2' />
            </div>

            <div className='mobile__top' />
            <div className='mobile__top2' />

            <div className='stuff' >
                <div className='top__turtle__case' >
                    <Turtle />
                </div>
                <div className='text__glow' />
                <div className='mobile__heading' >
                    <Fade
                    >
                        <h1 className='title' >Happy Birthday Mom</h1>
                    </Fade>
                </div>

                <div className='lama__body' >
                    <Lama />
                </div>
            </div>




                <div className='fireworks__body' >
                    <div className='fireworks__case' >
                        <Fireworks />
                    </div>
                    <div className='fireworks__case' >
                        <Fireworks />
                    </div>
                </div>
  
        </div>        

        <div className='second__line' >

            <div className='second__mobile__spacing' />
            <Fade>
                <div className='second__case' >
                    <div className='img__back' />
                    <img 
                    src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' 
                    alt='images'
                    className='for__img' />
                    <h2 className='second__text' >A Mother</h2>
                </div>

                <div className='second__case' >
                    <div className='img__back' />
                    <img
                    alt='images' 
                    src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                    className='for__img' />
                    <h2 className='second__text' >A Wife</h2>
                </div>

                <div className='second__case' >
                    <div className='img__back' />
                    <img 
                    alt='images'
                    src='https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' 
                    className='for__img' />
                    <h2 className='second__text' >A Daughter</h2>
                </div>

            </Fade>

        </div>

        <div className='third__line' >
            <Fade>
                <div>
                    <div className='third__back__shape1' >
                        <div className='text__c' >
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            <h3>placeholder</h3>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='third__back__shape2' >
                        <div className='text__c' >
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
                            <h3>something</h3>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='third__back__shape3' >
                        <div className='text__c' >
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            <h3>namey</h3>
                        </div>
                    </div>
                </div>

            </Fade>

            <div className='bottom__turtle__case' >
                <Turtle />
            </div>

        </div>

        <div className='foot' >
            <h2 className='foot__text' >We Love You 😘</h2>
        </div>
    </div>
  )
}

export default Floor