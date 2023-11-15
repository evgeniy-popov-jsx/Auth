import { Auth } from '../components/auth-form';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
import { useNavigate  } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleLogin = (email, password) => {
        const auth = getAuth();  
        signInWithEmailAndPassword(auth, email, password)
            .then(({user})=>{
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/')
            })
            .catch(()=> alert("Invalid user!"))
    }
    return (
        <>
            <Auth  
                title="login"
                handleClick={handleLogin}
                name={"Login"}
            />
        </>
    )

}

export default LoginPage;
