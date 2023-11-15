import styled from 'styled-components';
import { Container } from './container'; 
import { Form } from './form';

const LoginBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    margin: 20px auto;
    transform: translate(-50%, -55%);
    background: rgba(0,0,0,.9);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0,0,0,.6);
    border-radius: 10px;
`;
const AuthStatus = styled.p`
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 1px;
`
const SwitchAuth = styled.p`
    color: #aaa;
    font-size: 14px;
`
const LinkAuth = styled.a`
    color: #fff;
    text-decoration: none;
    &:hover {
        background: transparent;
        cursor: pointer;
        color: #aaa;
        border-radius: 5px;
    }
`

export const Auth= () => {
    return (
        <Container>
            <LoginBox>
                <AuthStatus>Login</AuthStatus>
                <Form />
                <SwitchAuth>Don't have an account? <LinkAuth>Sign up!</LinkAuth></SwitchAuth>
            </LoginBox> 
        </Container>  
    ) 
}