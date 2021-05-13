import React from 'react'
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'

const MenuItem = ({title, imageUrl, size, history}) => {
    return (
        <Container className = {size} onClick={() =>history.push()}>
        <Image className="background-image"  style={{
            backgroundImage: `url(${imageUrl})`
            }} />
        <Content className="content" >
            <ProductInfo>
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop Now</span>
            </ProductInfo>
        </Content>
        </Container>
    );
}

export default withRouter(MenuItem);

const Container = styled.div`
    
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

   

    &.large {
        height: 380px;
    }

    &:first-child {
    margin-right: 7.5px;
    }

    &:last-child {
    margin-left: 7.5px;
    }
     &:hover {
        cursor: pointer;

        & .background-image {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)
        }
        & .content {
            opacity: 0.9;
        }
    }

`
const Image = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
`

const Content = styled.div`
    background-color: white;
    opacity: 0.7;
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    position: absolute;

`

const ProductInfo = styled.div`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
`