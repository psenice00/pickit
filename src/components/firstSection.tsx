import team from '../assets/images/team.webp'
import bottomBg from '../assets/images/bottom_bg.webp'
import topBg from '../assets/images/top_bg.webp'
import React from 'react';
import { BlurElipse2 } from './utils/blurElipse';


export const FirstSection = () => {

    return (
        <>
            <img src={topBg} alt="pozadí" className='w-100' />
            <section id="firstSection" className='light-background position-relative pt-1' >
                <BlurElipse2 />
                <div className="container row mx-auto d-flex align-items-center  p-0 py-1">
                    <div data-aos="fade-right" className="col-12 col-lg-5 p-0 mx-auto text-center text-md-start">
                        <img className='w-75' src={team} alt="ilustrace" />

                    </div>
                    <div className="col-12 col-lg-7 text-center text-md-start">
                        <div>
                            <h2 data-aos="fade-up" className='bold-text increase-headline-size dark-color'>
                                Chytrá lednice - benefit pro zaměstnance
                            </h2>
                            <p data-aos="fade-up" className='grey-color pe-0 pe-lg-5  mt-4'>
                                Nabídněte svým zaměstnancům nápoje, svačiny, ovoce nebo jiné chlazené produkty z lednice, které jim zpříjemní pracovní prostředí a den. Online přehled o odběrech a skladových zásobách zase ulehčí práci zamestnavateli.
                            </p>
                            <hr className='hr-gradient' />
                            <h2 data-aos="fade-up" className='bold-text increase-headline-size mt-4 dark-color'>
                                Umožněte automatizovaný výdej nebo prodej svých produktů 24/7
                            </h2>
                            <p data-aos="fade-up" className='grey-color pe-0 pe-lg-5 mt-4'>
                                Ať jste farmář, lokální výrobce potravin nebo firma jistě oceníte možnost rozšířit povědomí o svých produktech pomocí chytrých lednic k výdeji či prodejit svých produktů kdykoli a kdekoli. Mějte online přehled o odběrech a prodejích produktů z lednice, o skladových zásobách a stavu lednic.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <img src={bottomBg} className='w-100' alt="pozadí" />
        </>
    )
}