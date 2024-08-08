import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from './LoginForm';
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../Api";
import Error from "../../Helper/Error";


const LoginPasswordLost = () => {
    const login = useForm();
    const {data,loading,error,request} = useFetch();

    async function handleSubmit(e){
        e.preventDefault();
        if(login.validate()){
            const {url, options} = PASSWORD_LOST({
                login: login.value,
                url: window.location.href.replace('perdeu','resetar'),
            });
            const {json} =  await request(url,options);
            console.log(json);
        }
    }

    return (
        <section >
            <h1 className="title"> Perdeu a senha? </h1>
            {data ? (
                <p style={{color:'#4c1'}}> {data} </p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <Input 
                        label="Email / Usuário"
                        type="text"
                        name="email"
                        {...login} />

                    {loading ? (
                        <Button disabled > Enviando...</Button>
                    ) : (
                        <Button>Enviar Email</Button>
                    )}
                </form>
            )}
            <Error error={error} />
        </section>
    )
}

export default LoginPasswordLost;
