import styled from 'styled-components'
import BigLeaf from '../image/bigleaf.png'


const MovingLeaf = styled.div`
  width: 40%;
  margin: 0;
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