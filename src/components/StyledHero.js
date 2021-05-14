import styled from 'styled-components';
import defaultImg from '../images/room-1.jpeg';

const StyledHero = styled.div`
    min-height: 60vh;
    background: url(${props => props.bckImg ? props.bckImg : defaultImg}) no-repeat center center;
    background-size: cover; /* cover full page*/
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default StyledHero