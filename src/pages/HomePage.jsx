import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/use-auth';
import { removeUser } from '../store/slices/userSlice';

import { Container } from '../components/container'; 
import { Button } from '../components/button';

const Welcome = styled.div`
    text-align: center;
    color: #171616;
    background:#7abc64;
    font-size: 12px;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    letter-spacing: 3px;
    padding: 10px;
    margin-bottom: 20px;
`
const Wrapper = styled.div`
    display: flex;
    border-radius: 5px;
    justify-content: center;
`

const HomePage = () => {
    const dispatch = useDispatch();
    const { isAuth, email } = useAuth();

    return isAuth ? (
            <>
                <Container>
                    <Welcome>Поздравляю вы успешно авторизовались!<br/>Ваша почта: {email}</Welcome>
                    <Wrapper>
                        <Button onClick={()=>dispatch(removeUser())}>Разлогиниться</Button>
                    </Wrapper>
                </Container>  
            </>    
        ) : (
        <Navigate raplace to="/login" />
    )

}

export default HomePage;
