import  styled, {css} from 'styled-components'; 

export const ButtonContainer = styled.button`
    background-color: #565656;
    border-radius: 22px;
    position: relative;
    margin: 8px;
    color: #fff;
    padding: 2px 12px;
    min-width:120px;
    width:100%;
    border: none;

    
    font-family: 'Open Sans';
    font-size: 18px;
    font-weight: 400;

    ${({variant}) => variant !== "primary" && css`
        border: 2px solid #565656;
        text-transform: uppercase;
        &: hover {
        opacity: 0.6;
        cursor: pointer;  
        transition: 1s;
        background-color: #E4105D;
        border: 2px solid #e4105d;
        
        }

    `
    }
`