import { Auth } from '../components/auth-form';
import { useNavigate  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleRegister = (email, password) => {
        const auth = getAuth();  
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user})=>{
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/')
            })
            .catch(console.error)
    }

    return (
        <>
            <Auth 
                title="register"
                handleClick={handleRegister}
                name={"Register"}
            />
        </>
    )

}

export default RegisterPage;
