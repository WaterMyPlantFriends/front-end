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
        top: 1%;
        left: 45%;
        transform: translate(-50%, -50%);
        background-color: '#60ffd5';
    }
`
export default function SignUpBanner(){
    return (
        <StyledDiv>
            <img src='../../images/gallery/thumbs/01.jpg' alt='desk with plants' />

            <div className='login-text'>
                <p>lorem banana chocolate pecans udon seeds</p>
            </div>
        </StyledDiv>
    )
}
