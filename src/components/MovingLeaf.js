import styled from 'styled-components'
import BigLeaf from '../image/bigleaf.png'


const MovingLeaf = styled.div`
  position: absolute;
  width: 40%;
  padding-top: 30%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${BigLeaf});
  animation-duration: 10s;
  animation-delay: 2000ms;
  animation-iteration-count: infinite;
`


export default MovingLeaf;