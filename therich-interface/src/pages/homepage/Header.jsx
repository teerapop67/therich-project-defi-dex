import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion/dist/framer-motion'
// ` `

// Green = #CAD315
// Purple = #7900FF
// Red = #C70A80
// Dark purple = #262A53

// Yellow = #FFEF82

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  justify-content: center;
  align-items: center;
  /* background-image: linear-gradient(225deg, #ff3cac 0%, #784ba0 50%, #2b86c5 100%); */
  @media screen and (max-width: 1040px) {
    flex-direction: column;
    height: auto;
    margin-top: 80px;
  }
`

export const HeaderInfo = styled.div`
  width: 45%;
  height: 400px;
  padding: 0 20px;

  @media screen and (max-width: 1040px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const animateLogo = keyframes`
  from { transform: rotateY(0)}
  to { transform: rotateY(360deg)}
`

export const HeaderInfo2 = styled.div`
  display: flex;
  padding: 0 20px;
  width: 45%;
  height: 400px;
  justify-content: center;
  align-items: start;
  text-align: center;
  margin-bottom: 1rem;

  @media screen and (max-width: 1040px) {
    width: 100%;
  }

  & > img {
    object-fit: cover;
    animation: ${animateLogo} 1s infinite alternate;
  }
`

export const HeaderA = styled.a`
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  width: 100px;
  background-color: black;
  text-decoration: none;
  color: white;
  padding: 0.5rem 1rem;
`
export const HeadText = styled.h1`
  font-size: 3em;
`

export const HeadGreen = styled.h1`
  color: #cad315;
  transition: color 0.8s ease;
  &:hover {
    color: #c70a80;
  }
`

export const HeadPurple = styled.h1`
  color: #00c897;
  font-size: 3em;
  letter-spacing: 5px;
  transition: text-shadow 0.8s ease;
  &:hover {
    text-shadow: #00c897 0.5px 0 30px;
  }
`

export const HeadH2 = styled.h2`
  color: white;
  transition: color 0.5s ease;
  &:hover {
    color: #c70a80;
  }
`

export const HeadTextGradient = styled(motion.h1)`
  font-size: 2.5em;
  font-family: 'Press Start 2P';
  letter-spacing: 5px;
  display: flex;
  flex-wrap: wrap;
`

const animateText = keyframes`
  0% { text-shadow: none }
  100% { text-shadow: #f10086 0 12px 80px }
  
  /* to {
    text-shadow: 0 0 1px goldenrod, 0 0 2px goldenrod, 0 0 3px goldenrod, 0 0 4px goldenrod, 0 0 5px goldenrod, 0 0 6px goldenrod, 0 0 7px goldenrod;
  } */

`

export const HeadTextGradient2 = styled(motion.h1)`
  font-size: 2.5em;
  color: #f10086;
  letter-spacing: 5px;
  transition: text-shadow 0.5s ease;
  animation: ${animateText} 1s infinite alternate;
`

export const HeadTextP = styled(motion.p)`
  font-size: 1.1em;
  line-height: 1.75rem;
  font-weight: medium;
  color: #d1d1d1;
  transition: color 0.5s ease;
  &:hover {
    color: #d1d1d1;
  }
`

export const Button = styled.button`
    background-color : white;
    margin-top : 1rem;
    margin-right : 1rem;
    width : 150px
    color : black;
    text-decoration : none;
    text-align : center;
    font-size : 20px;
    cursor : pointer;
    padding: 10px 25px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    transition : background-color 0.3s ease;
    transition :  color 0.4s ease;
    transition :  width 0.4s ease;
    transition : box-shadow 0.5s ease;
    &:hover {
        box-shadow: rgba(1, 255 , 146, 0.4) 5px 5px, rgba(1, 255 , 146, 0.3) 10px 10px, rgba(1, 255 , 146, 0.2) 15px 15px, rgba(1, 255 , 146, 0.1) 20px 20px, rgba(1, 255 , 146, 0.05) 25px 25px;
    }
`

export const Button2 = styled.button`
    background-color : goldenrod;
    z-index: 5;
    margin-top : 1rem;
    width : 350px
    margin-right : 1rem;
    color : black;
    text-decoration : none;
    text-align : center;
    font-size : 20px;
    cursor : pointer;
    padding: 10px 25px;
    border: none;
    transition : background-color 0.3s ease;
    transition :  color 0.4s ease;
    transition :  width 0.4s ease;
    &:hover {

        width : 400px;
    }
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

export const Button3 = styled.button`
    background-color : transparent;
    z-index: 5;
    border: 2px solid #999;
    margin-top : 1rem;
    width : 350px
    margin-right : 1rem;
    color : #D1D1D1;
    text-decoration : none;
    text-align : center;
    font-size : 20px;
    cursor : pointer;
    padding: 10px 25px;
    transition : background-color 0.3s ease;
    transition :  color 0.4s ease;
    transition :  width 0.4s ease;
    &:hover {

        width : 400px;
    }
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

export const Img = styled.img``
