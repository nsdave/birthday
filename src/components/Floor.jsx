import React from 'react'
import '../styles/floor.css'
import { Fade } from 'react-awesome-reveal'

import Fireworks from './Fireworks'
import Lama from './Lama'
import Turtle from './Turtle'
import mother from '../assets/m1.jpeg'
import wife from '../assets/m2.jpeg'
import daughter from '../assets/m4.jpeg'



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
                <div className='text__glow' >
                <h1 className='title' >Happy Birthday Mom</h1>
                <h1 className='cake' >🎂</h1>
                </div>
                <div className='mobile__heading' >
                    <Fade
                    >
                        <h1 className='m__title' >Happy Birthday Mom</h1>
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
                    src={mother} 
                    alt='images'
                    className='for__img' />
                    <h2 className='second__text' >A Mother</h2>
                </div>

                <div className='second__case' >
                    <div className='img__back' />
                    <img
                    alt='images' 
                    src={wife}
                    className='for__img' />
                    <h2 className='second__text' >A Wife</h2>
                </div>

                <div className='second__case' >
                    <div className='img__back' />
                    <img 
                    alt='images'
                    src={daughter}
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
                            <p>
                            Mummy, I love you so much 
                            You have done so much for me, You have been there for me during my most challenging times, Whenever I did something wrong and didn't know you would call me personally and tell me it was wrong 
                            I love you so much that there is no way I can repay you for all the things you have done for me
                            </p>
                            <h3 className='text__c1' >Gabrielle</h3>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='third__back__shape2' >
                        <div className='text__c' >
                            <p>
                            Dear mummy, 
                            I want to wish you a very happy birthday on a special day because I am so happy that you are finally doing a lot of things that make you happy, 
                            I am so grateful to God that you are my mum and I love you soo much 
                            </p>
                            <h3>Shawnice</h3>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='third__back__shape3' >
                        <div className='text__c' >
                            <p>
                            Mummy, I love you so much and I wish you a happy birthday and many more years to come I always thank God for all the grateful things he has said and done for you and all of us, I love you 
                            mummy so much and you are the best coach, mum, wife and friend anyone can ever had.
                            </p>
                            <h3>Michelle</h3>
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