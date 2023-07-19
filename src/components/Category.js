import React from 'react'
import { useState } from 'react';
import Item from './Item';
import styled from 'styled-components';

const StyledDiv = styled.div
`
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 1rem;

`
const Category = ({items}) => {
    return (
        <StyledDiv>
            {items.map(item=>{
                return (
                    <Item item={item}/>
                )
            })}
        </StyledDiv>
    )
}

export default Category