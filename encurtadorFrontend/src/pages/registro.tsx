import AuthCard from '@/components/AuthCard';
import AuthHeader from '@/components/AuthHeader'
import React, { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Toaster} from "sonner";

interface ValidationErrors {
    name?: string[];
    email?: string[];
    password?: string[];
}

export default function Registro() {

    const [errors, setErrors] = useState<ValidationErrors>({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [nome, setNome] = useState('');
    const navigate = useNavigate();


        function handleRegistro(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
            setErrors({});

        const data = {
            name: nome,
            email: email,
            password: password,
            password_confirmation:passwordConfirm,
        };

            axios({
                method: 'POST',
                url: 'http://localhost:8000/api/registro',
                data: data,
            })
                .then((res) => {

                    if (res.status === 201) {
                       navigate("/",{
                           state: {message: "conta criado com sucesso! Faca Login"}
                       } );


                    }

                })
                .catch((error) => {
                    if (error.response?.status === 422) {
                        setErrors(error.response.data.errors);
                    }
                })


    }

    return (
        <>
        <div className="flex flex-col 2xl:gap-4 gap-0 items-center  w-full h-screen 2xl:py-10  ">
            <AuthHeader subtitle="Crie sua conta gratuitamente"/>
            <Toaster position={"top-right"}  richColors />
            <AuthCard submit={handleRegistro} title="Criar Conta"  subtitle="Preencha seus dados abaixo" buttonLabel="Criar conta" footerText="Já tem uma conta? " linkText="Entrar" link="/"
                      campos={[
                {
                    name: 'name',
                    type: 'text',
                    label: 'Nome completo',
                    placeholder: 'Joao Silva',
                    value: nome,
                    onChange: (e) => setNome(e.target.value),
                    error: errors.name

                },
                {
                    name: 'email',
                    type: 'email',
                    label: 'E-mail',
                    placeholder: 'voce@exemplo.com',
                    value: email,
                    onChange: (e) => setEmail(e.target.value),
                    error: errors.email
                },
                {
                    name: 'senha',
                    type: 'password',
                    label: 'Senha',
                    placeholder: '******',
                    value: password,
                    onChange: (e) => setPassword(e.target.value),
                    error: errors.password
                },
                {
                    name: 'passwordConfirm',
                    type: 'password',
                    label: 'Confirmar Senha',
                    placeholder: '******',
                    value: passwordConfirm,
                    onChange: (e) => setPasswordConfirm(e.target.value),
                }
            ]} />
        </div>
        </>
    )
}