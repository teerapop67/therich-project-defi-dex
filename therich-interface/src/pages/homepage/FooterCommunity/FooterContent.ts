import styled from 'styled-components'
// ` `
//    background-color  : #262A53;
export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, auto));
  width: 100%;
  justify-content: center;
  align-items: center;
  grid-gap: 30px;
  padding: 30px;
`

export const FooterBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: #262a53;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  color: white;
  padding: 1rem;

  transition: background-color 0.8s ease;
  transition: width 0.8s ease;
  transition: box-shadow 0.5s ease;
  &:hover {
    background-color: #2a2550;
    box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px,
      rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
  }
`
