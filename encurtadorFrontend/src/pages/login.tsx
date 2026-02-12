import AuthCard from '@/components/AuthCard';
import AuthHeader from '@/components/AuthHeader'

export default function Login() {

    return (
        <>
        <div className="flex flex-col gap-4 items-center  w-full h-screen py-10 ">
            <AuthHeader subtitle="Encurte URLs com simplicidade"/>
            <AuthCard title="Entrar"  subtitle="Acesse sua conta" buttonLabel="Entrar" footerText="Não tem conta? " linkText="Criar conta" link="ss" campos={[
                {
                    name: 'email',
                    type: 'email',
                    label: 'E-mail',
                    placeholder: 'voce@exemplo.com',

                },
                {
                    name: 'senha',
                    type: 'password',
                    label: 'Senha',
                    placeholder: '******',
                }
            ]} />
        </div>
        </>
    )
}