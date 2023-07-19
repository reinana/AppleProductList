import React from 'react'
import Category from './Category';
import styled from 'styled-components';

const StyledH1 = styled.h1
`
    text-align: center;
`
const ItemPage = () => {
    const itemList = [
        { 
            category : "Mac",
            itemName : "M1チップ搭載 13インチMacBook Air",
            price: 134800,
            image : "images/macbook-air.png"           
        },
        { 
            category : "Mac",
            itemName : "13インチMacBook Pro",
            price: 178800,
            image : "images/mbp-digitalmat-gallery-1-202206.png"           
        },
        { 
            category : "Mac",
            itemName : "24インチiMac",
            price: 174800,
            image : "images/imac24.png"           
        },
        { 
            category : "Mac",
            itemName : "Mac mini",
            price: 84800,
            image : "images/mac-mini-digitalmat-gallery-4-202301.png"           
        },
        { 
            category : "iPhone",
            itemName : "iPhone 14 Pro Max",
            price: 164800,
            image : "images/iphone14promax-digitalmat-gallery-5-202209.png"           
        },
        { 
            category : "iPhone",
            itemName : "iPhone 14 Pro",
            price: 149800,
            image : "images/iphone14pro-digitalmat-gallery-5-202209.png"           
        },
        { 
            category : "iPhone",
            itemName : "iPhone 14",
            price: 119800,
            image : "images/iphone14-digitalmat-gallery-3-202209.png"           
        },
        { 
            category : "iPhone",
            itemName : "iPhone 14 Plus",
            price: 134800,
            image : "images/iphone14plus-digitalmat-gallery-3-202209.png"           
        },
        { 
            category : "iPad",
            itemName : "11インチiPad Pro",
            price: 124800,
            image : "images/ipadpro11-digitalmat-gallery-1-202210.png"           
        },
        { 
            category : "iPad",
            itemName : "iPad Air",
            price: 92800,
            image : "images/ipadair-digitalmat-gallery-1-202203.png"           
        },
        { 
            category : "iPad",
            itemName : "iPad（第10世代）",
            price: 63800,
            image : "images/ipad-digitalmat-gallery-1-202210.png"           
        },
        { 
            category : "Apple Watch",
            itemName : "Apple Watch Ultra",
            price: 124800,
            image : "images/watch-ultra-digitalmat-gallery-3-202209_GEO_JP.png"           
        },
        { 
            category : "Apple Watch",
            itemName : "Apple Watch Series 8",
            price: 59800,
            image : "images/watch-s8-digitalmat-gallery-3-202303_GEO_JP.png"           
        },
        { 
            category : "Apple Watch",
            itemName : "Apple Watch SE",
            price: 37800,
            image : "images/watch-se-digitalmat-gallery-1-202303_GEO_JP.png"           
        },

    ]
    const categoryList = Array.from(new Set(itemList.map(item => item.category)));
    return (
        <>
            <StyledH1>Product List</StyledH1>
            {categoryList
                .map((categoryName, index)=>{
                return (
                    <div key={index}>
                        <h2>{categoryName}</h2>
                        <Category items={itemList.filter(item=>item.category === categoryName)}/>
                    </div>
                )
            })}
        </>
    )
}

export default ItemPage