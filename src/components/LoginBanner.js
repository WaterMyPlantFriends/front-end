import styled from 'styled-components';

const StyledDiv = styled.div`
    margin: 0 auto;
    position: relative;
    img {
        height: 175px;
        width: 90vw;
        opacity: 0.7;
        object-fit: cover;
        border-radius: 7px;
    }
    .login-text p{
        position: absolute;
        font-size: 1.8rem;
        font-style: italic;
        top: 30%;
        left: 65%;
        transform: translate(-50%, -50%);
        color: '#003829';
        background-color: '#60ffd5';
    }
`
export default function LoginBanner(){
    return (
        <StyledDiv>
            <img src='../../images/gallery/thumbs/04.jpg' alt='plants' />

            <div className='login-text'>
                <p>lorem lentils red amazon pepper muffins apple green</p>
            </div>
        </StyledDiv>
    )
}
