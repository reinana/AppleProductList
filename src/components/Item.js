import React from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div
`
    width: 20%;
    padding: 1rem;
    border-radius: 10px;
    background: #ffffff;
    box-shadow:  20px 20px 60px #d9d9d9,
                 -20px -20px 60px #ffffff;
`
const StyledImg = styled.img
`
    width: 100%;
`
const StyledP = styled.p
`
    text-align: end;
`
const Item = ({item}) => {
    console.log(item)
    return (
        <StyledDiv>
            <StyledImg src={item.image} alt='MacBook Air'/>
            <h3>{item.itemName}</h3>
            <StyledP>{item.price}円</StyledP>
        </StyledDiv>
    )
}

export default Item