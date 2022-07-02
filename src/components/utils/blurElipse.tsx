import React from "react"

export const BlurElipse1 = () => {
    return (
        <BlurElipse width={'697.81px'} height={'745.87px'} left={'-426px'} top={'-539.3px'} bottom={undefined} color={"#1AC7FF"} transform={"matrix(1, -0.04, 0.04, 1, 0, 0)"} right={undefined} />
    )
}

export const BlurElipse2 = () => {
    return (
        <BlurElipse width={'842px'} height={'886px'} left={undefined} top={'0'} bottom={undefined} color={"rgba(7, 210, 251, 0.5)"} transform={"rotate(65.64deg)"} right={'0px'} />
    )
}

export const BlurElipse3 = () => {
    return (
        <BlurElipse width={'481.09px'} height={'514.23px'} left={undefined} top={'200.38px'} bottom={undefined} color={"#1AC7FF"} transform={"matrix(1, -0.04, 0.04, 1, 0, 0)"} right={'-300px'} />
    )
}

export const BlurElipse4 = () => {
    return (
        <BlurElipse width={'697.81px'} height={'745.87px'} left={'-500px'} top={'-500px'} bottom={undefined} color={"#1AC7FF"} transform={"matrix(1, -0.04, 0.04, 1, 0, 0)"} right={undefined} />
    )
}

export const BlurElipse5 = () => {
    return (
        <BlurElipse width={'697.81px'} height={'745.87px'} left={undefined} top={undefined} bottom={'-500px'} color={"#1AC7FF"} transform={"matrix(1, -0.04, 0.04, 1, 0, 0)"} right={'-500px'} />

    )
}

export const BlurElipse6 = () => {
    return (
        <BlurElipse width={'697.81px'} height={'745.87px'} left={'-700px'} top={'300px'} bottom={undefined} color={"#1AC7FF"} transform={"matrix(1, -0.04, 0.04, 1, 0, 0)"} right={undefined} />

    )
}

const BlurElipse = (props: {
    width: string,
    height: string,
    left: string | undefined,
    top: string | undefined,
    right: string | undefined,
    bottom: string | undefined,
    color: string,
    transform: string
}) => {
    return (
        <div style={{
            zIndex: -1,
            position: 'absolute',
            width: props.width,
            height: props.height,
            left: props.left,
            top: props.top,
            bottom: props.bottom,
            right: props.right,
            filter: 'blur(120px)',
            opacity: 0.5,
            backgroundColor: props.color,
            transform: props.transform,
        }} />)
}