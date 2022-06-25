import React, { useState, useEffect } from 'react'
import {
  Header,
  HeaderInfo,
  Img,
  HeaderInfo2,
  HeadText,
  Button,
  Button2,
  Button3,
  HeadTextP,
  HeadGreen,
  HeadPurple,
  HeadTextGradient,
  HeadTextGradient2
} from './Header'
import { Items } from './ContentBar'
import { Content, ContentBox1, ContentBox2, Box2Items } from './Content'
import { Footer } from './Footer'
import { FooterContent, FooterBox } from './FooterContent'
import { LastPage, LastRight, LastLeft } from './Lastpage'
import { MeetTeam } from './MeetTeam'
import { Link } from 'react-router-dom'
import TextScroller from './TextScroller'
import './bitcoin.css'
import { motion, AnimatePresence } from 'framer-motion/dist/framer-motion'
// import Logo from '../../assets/images/Logonew.png'

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 }
}

const variants = {
  visible: i => ({
    opacity: 1,
    y: 100,
    transition: {
      delay: i * 0.3,
      yoyo: Infinity,
      duration: 1
    }
  }),
  hidden: { opacity: 0, y: -50 }
}

const itemsSlide = [{ value: 'DEV' }, { value: 'EATH' }, { value: 'JUPYTER' }, { value: 'RICH' }, { value: 'VENUS' }]
const bitcoinList = [0, 1, 2]

// <Img src="https://cdn-icons-png.flaticon.com/512/5149/5149086.png" width="400" height="400" alt="aave"></Img>
const Homepage = () => {
  const [animateState, setAnimateState] = useState({ ourMission: false, education: false })

  const handleAnimate = () => {
    if (window.scrollY >= 300) {
      setAnimateState(prvAnimate => ({
        ...prvAnimate,
        ourMission: true
      }))
    }
    if (window.scrollY >= 1300) {
      setAnimateState(prvAnimate => ({
        ...prvAnimate,
        education: true
      }))
    }
  }

  useEffect(() => {
    console.log(window.scrollY)
    if (animateState.ourMission && animateState.education) return
    window.addEventListener('scroll', handleAnimate, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleAnimate)
    }
  }, [handleAnimate])

  const renderLanding = () => {
    return (
      <>
        <HeaderInfo>
          <HeadTextGradient
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            The Rich
          </HeadTextGradient>
          <HeadTextGradient2
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Decentralized Exchange
          </HeadTextGradient2>
          <HeadTextP initial={{ opacity: 0, x: -150 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
            Swap and Earn Liquidity with us on MoonBeam Chain.
          </HeadTextP>
          <Link to="/swap">
            <Button>Luanch</Button>
          </Link>

          <Button>Documents</Button>
        </HeaderInfo>
      </>
    )
  }

  const renderOurMission = () => {
    return (
      <>
        <Content>
          <ContentBox1>
            <HeadTextGradient2>Our Mission</HeadTextGradient2>

            <HeadTextP
              variants={item}
              initial="hidden"
              animate={animateState.ourMission && 'visible'}
              transition={{ duration: 0.7 }}
            >
              This is a project for education. From Bangkok University <br /> Thank you for testing our DeFi project.
              <br />
              Connect Metamask and enjoy our application <br />
              Cristiano Ronaldo Haaland Nunez
            </HeadTextP>
          </ContentBox1>
          <ContentBox2>
            <Box2Items>
              <HeadGreen>80 Billion+ </HeadGreen>
              <HeadTextP>Over 8000 Transaction This Month</HeadTextP>
            </Box2Items>
            <Box2Items>
              <HeadGreen>2 Million+</HeadGreen>
              <HeadTextP>Total Users</HeadTextP>
            </Box2Items>
            <Box2Items>
              <HeadGreen>20 Million+</HeadGreen>
              <HeadTextP>Sharing Swap Fees For Providers</HeadTextP>
            </Box2Items>
          </ContentBox2>
        </Content>
      </>
    )
  }

  const renderFooter = () => {
    return (
      <>
        <Footer>
          <HeadPurple>Enjoy With The Rich Benefit</HeadPurple>
        </Footer>
        <FooterContent>
          <FooterBox>
            <HeadGreen>Provided Liquidity</HeadGreen>
            <HeadTextP>We provided more rewards for liquidity providers.</HeadTextP>
          </FooterBox>
          <FooterBox>
            <HeadGreen>Super Fair Swap Fees</HeadGreen>
            <HeadTextP>Never charge you but just raw fees.</HeadTextP>
          </FooterBox>
          <FooterBox>
            <HeadGreen>Rapid and Robust</HeadGreen>
            <HeadTextP>We are the one and forever.</HeadTextP>
          </FooterBox>
          <FooterBox>
            <HeadGreen>Community Leading</HeadGreen>
            <HeadTextP>We are the one and forever.</HeadTextP>
          </FooterBox>
        </FooterContent>
      </>
    )
  }

  return (
    <AnimatePresence>
      <Header>
        {renderLanding()}
        <HeaderInfo2>
          {/* <Img src={Logo} width="200" height="200" alt="aave"></Img> */}
          {bitcoinList.map((items, index) => (
            <motion.div
              custom={index}
              initial="hidden"
              animate="visible"
              variants={variants}
              key={index}
              style={{ width: '80%', height: '100%', zIndex: 1 }}
            >
              <div className="bitcoin"></div>
            </motion.div>
          ))}
        </HeaderInfo2>
      </Header>

      {/*Slider Text*/}
      <TextScroller>
        {itemsSlide.map(items => (
          <Items key={items.value}>
            <h3>{items.value}</h3>
            <p></p>
          </Items>
        ))}
      </TextScroller>

      {/*OUR MISSION*/}
      {renderOurMission()}
      {/*FOOTER CONTENT*/}
      {renderFooter()}
      <LastPage>
        <LastRight>
          <HeadText>This Is For Educational Purpose</HeadText>
          <HeadTextP
            variants={item}
            initial="hidden"
            animate={animateState.education && 'visible'}
            transition={{ duration: 0.7 }}
          >
            The Rich is develop for educational purpose <br />
            And we are non-profit project, Blah Blaw Bha <br />
            Click the button below to see more about Moonbeam
          </HeadTextP>
          <Button2>Join Discord Community</Button2>
          <Button3>Join Github Repository</Button3>
        </LastRight>
        <LastLeft>
          <Img
            src="https://cdn-icons-png.flaticon.com/512/5149/5149097.png"
            width="400"
            height="400"
            alt="wizard"
          ></Img>
        </LastLeft>
      </LastPage>
      <MeetTeam></MeetTeam>
    </AnimatePresence>
  )
}

export default Homepage
