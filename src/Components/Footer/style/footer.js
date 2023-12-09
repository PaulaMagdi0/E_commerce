import styled from 'styled-components';

export const Container = styled.div`
    padding: 80px 60px;
    background-color : #333333;
    margin-top: auto;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 30px;
`
export const Row = styled.div`
    display: grid;
    grid-template-columns : repeat(auto-fill,minmax(170px , 1fr));
    grid-gap: 50px;

    
    @media (max-width = 992px){
        grid-template-columns : repeat(auto-fill,minmax(140px , 1fr));
    }
`

export const Title = styled.p`
    font-size: 18px;
    margin-bottom: 25px;
    color: #fff;
    font-weight: bold;
`

export const Link = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 14px;
    text-decoration: none;

    &:hover {
        color: #c9151b;
        background : none;
        transition: 200ms ease-in;
    }
`
export const Contactus = styled.p`
    color: #fff;
    margin-bottom: 10px;
    font-size: 14px;
    text-decoration: none;
`

export const Discribtion = styled.p`
    color: #c9151b;
    margin-bottom: 10px;
    font-size: 12px;
    text-decoration: none;
`
