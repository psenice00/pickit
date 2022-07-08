import advantages1 from '../../assets/images/advantages1.png'
import advantages2 from '../../assets/images/advantages2.png'
import advantages3 from '../../assets/images/advantages3.png'
import advantages4 from '../../assets/images/advantages4.png'
import { SectionItem } from './sectionItem'
import React from 'react';
import { BlurElipse6 } from '../utils/blurElipse'

export const SecondSection = () => {

    return (

        <section id='secondSection' className='container position-relative'>
            <BlurElipse6 />
            <h1 className="intro-text-color text-center">
                Výhody našeho řešení
            </h1>
            <div className="row mx-auto d-flex align-items-start  p-0 py-0 py-md-5">
                <SectionItem
                    imgSrc={advantages1}
                    headline={'Automatizace'}
                    text={'Chytrá lednice je víc než klasický automat na potraviny. Díky aplikaci se automaticky hlídají zásoby a dostupnost zboží s možností notifikací. Máte okamžitý přehled o odběrech a prodejích. Pomocí odběru z přednabitých kreditů je řešení ideální pro rychlý odběr na akcích, trzích a jiných veřejných místech.'}
                    extraMargin={true} isMultiline={false} imgAlt={'výhoda chytré lednice - automatizace'} />
                <SectionItem
                    imgSrc={advantages2}
                    headline={'Řízený přístup a zabezpečení'}
                    text={'Zabezpečený přístup do lednice je pomocí elektronického zámku. Přinášíme rychlou a intuitivní identifikaci a ověření uživatele.'}
                    extraMargin={false} isMultiline={true} imgAlt={'výhoda chytré lednice - řízený přístup a zabezpečení'} />
            </div>
            <div className="row mx-auto d-flex align-items-start  p-0 py-0 py-md-5">
                <SectionItem
                    imgSrc={advantages3}
                    headline={'Chytré firemní benefity'}
                    text={'Zpřístupněte chlazené nápoje a občerstvení svým zaměstnancům dostupné na jedno kliknutí. Mějte pod kontrolou přístup k produktům s přehledem zásob. V kancelářích, výrobních halách, nemocnicích nebo hotelech můžete odměnit své zaměstnance čerstvými produkty a zvýšit jejich výkon a spokojenost.'}
                    extraMargin={false} isMultiline={false} imgAlt={'výhoda chytré lednice - chytré firemní benefity'} />
                <SectionItem
                    imgSrc={advantages4}
                    headline={'Rychlý nákup a finance'}
                    text={'Rychlý nákup formou stržení přednabitých kreditů nebo s možností okamžité online platby. Přehledy nákupů a jiné reporty usnadňují práci.'}
                    extraMargin={false} isMultiline={false} imgAlt={'výhoda chytré lednice - rychlý nákup a finance'} />
            </div>

            <hr className='hr-gradient-light' />
        </section >
    )
}