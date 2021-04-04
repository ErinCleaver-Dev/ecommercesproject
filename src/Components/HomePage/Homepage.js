import React from 'react'
import MenuItem from './MenuItem'
import styled from 'styled-components'
import ProductCategories from '../../Data/productCategories.json'


const Homepage = () => {
    return (
        <Container>
            <MenuDirectory>
            {
                ProductCategories.Categories.map((category) => (
                    <MenuItem title = {category.title}>
                    </MenuItem>
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