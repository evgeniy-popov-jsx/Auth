import { useState } from 'react';

import styled from 'styled-components';
import { LiaEyeSlashSolid, LiaEyeSolid  } from "react-icons/lia";


const FormBox = styled.form``
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
const Btn = styled.button`
    padding: 10px 20px;
    font-weight: bold;
    color: #fff;
    background:#212121;
    font-size: 16px;
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

export const Form = () => {
    const [value, setValue] = useState('password');
    
    return (
        <FormBox>
            <UserBox>
                <Input name={'Email'} />
                <Label>Email</Label>
            </UserBox> 
            <UserBox>
                <Input name={'Password'} type={value}/>
                <Label>Password</Label> 
            </UserBox> 
            <ExtraBox>
                <Btn>submit</Btn>
                {value === "password"                    
                    ? <LiaEyeSlashSolid size={'24px'} color={'white'} cursor={'pointer'} onClick={()=>{setValue('text')}}/>
                    : <LiaEyeSolid size={'24px'} color={'white'} cursor={'pointer'} onClick={()=>{setValue('password')}}/>
                }
            </ExtraBox>
        </FormBox>
    )      
}