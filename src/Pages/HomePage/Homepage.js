import React from 'react'
import MenuItem from '../../Components/MenuItem/MenuItem'
import styled from 'styled-components'
import ProductCategories from '../../Data/productCategories.json'


const Homepage = () => {
    return (
        <Container>
            <MenuDirectory>
            {
                ProductCategories.Categories.map(({id,title, imageUrl, size, linkUrl}) => (
                    <MenuItem 
                    key = {id}
                    title = {title}
                    imageUrl = {imageUrl}
                    size = {size}
                    />
                ))
            }      
            </MenuDirectory>
        </Container>
    );
}

export default Homepage

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
`
const MenuDirectory = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`