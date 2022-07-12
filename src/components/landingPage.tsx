import React from "react"
import { FifthSection } from "./fifthSection/fifthSection"
import { FirstSection } from "./firstSection"
import { FourthSection } from "./fourthSection/fourthSection"
import { Intro } from "./intro"
import { SecondSection } from "./secondSection/secondSection"
import { ThirdSection } from "./thirdSection/thirdSection"

const LandingPage = () => {
    return (
        <>
            <Intro />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
        </>
    )
}

export default LandingPage