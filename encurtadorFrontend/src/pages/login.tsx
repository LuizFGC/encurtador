import AuthCard from '@/components/AuthCard';
import AuthHeader from '@/components/AuthHeader'
import {Toaster} from '@/components/ui/sonner'
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {toast} from "sonner";
import axios from "axios";

interface ValidationErrors {
    name?: string[];
    email?: string[];
    password?: string[];
}

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const [auth, setAuth] = useState(false);
    const [errors, setErrors] = useState<ValidationErrors>({});

    useEffect(() => {
        if (location.state?.message) {
            toast.success(location.state.message);

            navigate(location.pathname, { replace: true });
        }
    }, []);


   function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setErrors({});

        const data = {
            email: email,
            password: password,
        };

        axios({
            method: 'POST',
            url: 'http://localhost:8000/api/login',
            data: data,
        })
            .then((res) => {

                if (res.status === 200) {
                    setAuth(true);
                    navigate("/dashboard" );

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
        <div className="flex flex-col gap-4 items-center  w-full h-screen py-10 ">
            <Toaster position={"top-right"}  richColors />
            <AuthHeader subtitle="Encurte URLs com simplicidade"/>
            <AuthCard submit={handleLogin} title="Entrar"  subtitle="Acesse sua conta" buttonLabel="Entrar" footerText="Não tem conta? " linkText="Criar conta" link="/registro" campos={[
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
                }
            ]} />
        </div>
        </>
    )
}