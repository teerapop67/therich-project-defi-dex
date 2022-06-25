import styled from 'styled-components'
import { motion } from 'framer-motion/dist/framer-motion'
// ` `

export const Content = styled.div`
  display: flex;
  width: 90%;
  height: 400px;
  justify-content: center;
  align-items: center;
`

export const ContentBox1 = styled(motion.div)`
  width: 40%;
  height: 300px;
  justify-content: center;
  align-items: center;
`
export const ContentBox2 = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50%;
  height: auto;
  background-color: #262a53;

  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: background-color 0.5s ease;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  transition: background-color 0.8s ease;
  transition: width 0.8s ease;
  transition: box-shadow 0.5s ease;
  &:hover {
    box-shadow: rgba(1, 214, 255, 0.4) 5px 5px, rgba(1, 214, 255, 0.3) 10px 10px, rgba(1, 214, 255, 0.2) 15px 15px,
      rgba(1, 214, 255, 0.1) 20px 20px, rgba(1, 214, 255, 0.05) 25px 25px;
  }
`

export const Box2Items = styled.div`
  text-align: center;
  color: white;
  background-color: #262a53;
`

export const Box2ItemsRed = styled.div`
  text-align: center;
  color: white;
`

export const Box2ItemsPurple = styled.div`
  text-align: center;
  color: white;
`

export const ContentLi = styled.li`
  margin: 20px 0;
  font-size: 1.1em;
  text-decoration: none;
  color: #f2f2f2;
`
