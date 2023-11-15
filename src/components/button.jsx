import styled from 'styled-components';

export const Button = styled.button`
    padding: 10px 20px;
    font-weight: bold;
    color: #fff;
    background:#212121;
    font-size: 12px;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    letter-spacing: 3px;
    cursor: pointer;
    &:hover {
        background: #fff;
        color: #272727;
        border-radius: 5px;
    }
`