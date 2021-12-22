import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    box-sizing: border-box;
    width: 30%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 0;
    background-image: url('../../images/gallery/fulls/01.jpg');
    img{
        margin: 0 auto;
        border-radius: 7px;
        max-width: 90%;
        max-height: 200px;
    }
    .details {
        width: 90%;
        color: '#313639';
        margin: 0 auto;
        padding: 0;
    }
`

export default function Plant(props){
    // Plant must have these properties:
    const {
        // destructuring
        id,
        nickname,
        species,
        h2oFrequency,
        image, //optional
    } = props;
    return (
        <StyledDiv className='plant container' id={id}>
            {
                image && <img src={image} alt={nickname} />
            }
            <div className='plant details'>
                <h3>{nickname}</h3>
                <div className='species'>{species}</div>
                <div className='water-info'>
                    <p>Water me in {h2oFrequency} day(s)</p>
                </div>
            </div>
        </StyledDiv>
    )
}