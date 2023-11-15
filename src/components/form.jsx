import { useState } from 'react';

import styled from 'styled-components';
import { LiaEyeSlashSolid, LiaEyeSolid  } from "react-icons/lia";
import { Button } from './button';


const FormBox = styled.div``
const UserBox = styled.div`
    position: relative;
`
const Label = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
`
const Input = styled.input.attrs((prop)=>({
    required: 'required',
    type: prop.type,
    name: prop.name,
}))`
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    border-color: #fff;
    outline: none;
    background: transparent;
    &:focus ~ ${Label} {
        top: -20px;
        left: 0;
        color: #fff;
        font-size: 12px;
    }
    &:valid ~ ${Label} {
        top: -20px;
        left: 0;
        color: #fff;
        font-size: 12px;
    }
`
const ExtraBox = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [vissiblePass, setVissiblePass] = useState('password');

    return (
        <FormBox>
            <UserBox>
                <Input 
                    name={'Email'} 
                    type={'text'} 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <Label>Email</Label>
            </UserBox> 
            <UserBox>
                <Input 
                    name={'Password'} 
                    type={vissiblePass}
                    value={pass}
                    onChange={(e)=>setPass(e.target.value)}
                />
                <Label>Password</Label> 
            </UserBox> 
            <ExtraBox>

                <Button onClick={()=>handleClick(email, pass)}>{title}</Button>
                {vissiblePass === "password"                    
                    ? <LiaEyeSlashSolid size={'24px'} color={'white'} cursor={'pointer'} onClick={()=>{setVissiblePass('text')}}/>
                    : <LiaEyeSolid size={'24px'} color={'white'} cursor={'pointer'} onClick={()=>{setVissiblePass('password')}}/>
                }

            </ExtraBox>
        </FormBox>
    )      
}
