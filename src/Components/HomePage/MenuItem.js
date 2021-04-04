import React from 'react'
import styled from 'styled-components'

const MenuItem = ({title, url}) => {
    return (
        <Container>
        <Content>
            <ProductInfo>
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop Now</span>
            </ProductInfo>
        </Content>
        </Container>
    );
}

export default MenuItem

const Container = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;

    &:first-child {
    margin-right: 7.5px;
    }

    &:last-child {
    margin-left: 7.5px;
    }

`
const Content = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
`

const ProductInfo = styled.div`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
`