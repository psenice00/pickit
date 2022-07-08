import { SectionItem } from "./sectionItem"
import howItWorks1 from "../../assets/images/howItWorks1.png"
import howItWorks2 from "../../assets/images/howItWorks2.png"
import howItWorks3 from "../../assets/images/howItWorks3.png"
import React from 'react';
import { BlurElipse5 } from "../utils/blurElipse";


export const ThirdSection = () => {

    return (
        <section id="thirdSection" className='mt-5 container pt-5 mb-5 pb-5 position-relative'>
            <BlurElipse5 />
            <h1 className="intro-text-color text-center">
                Jak chytrá lednice funguje
            </h1>
            <div className="row mx-4 d-flex align-items-start  p-0 py-5 ">
                <SectionItem
                    number={"1"}
                    imgSrc={howItWorks1}
                    headline={"Výběr"}
                    delay={0}
                    text={"Na lednici si vyberete si z nabídky dostupných produktů"}
                    imgAlt={"jak to funguje - výber"} />
                <SectionItem
                    number={"2"}
                    imgSrc={howItWorks2}
                    headline={"Platba"}
                    delay={200}
                    text={"bankovní kartou, službou Apple nebo Google pay nebo v hotovosti"}
                    imgAlt={"jak to funguje - platba"} />
                <SectionItem
                    number={"3"}
                    imgSrc={howItWorks3}
                    headline={"Získejte zboží"}
                    delay={400}
                    text={"Po zaplacení nebo identifikaci uživatele se lednice otevřete"}
                    imgAlt={"jak to funguje - získejte zboží"} />
            </div>
        </section>
    )
}