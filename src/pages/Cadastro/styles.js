import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 50px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
`

export const Title = styled.h2`
    font-family:'Open sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #ffffff;
`
export const TitleCadastro = styled.p`
    font-family:'Open sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`
export const SubTitleCadastro = styled.p`
    font-family:'Open sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`


export const Wrapper = styled.div`
    max-width: 300px;

    span {
        color: #23dd7a;
    }
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`