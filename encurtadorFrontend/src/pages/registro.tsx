import AuthCard from '@/components/AuthCard';
import AuthHeader from '@/components/AuthHeader'

export default function Registro() {





    return (
        <>
        <div className="flex flex-col 2xl:gap-4 gap-0 items-center  w-full h-screen 2xl:py-10  ">
            <AuthHeader subtitle="Crie sua conta gratuitamente"/>
            <AuthCard title="Criar Conta"  subtitle="Preencha seus dados abaixo" buttonLabel="Criar conta" footerText="Já tem uma conta? " linkText="Entrar" link="ss" campos={[
                {
                    name: 'nome',
                    type: 'text',
                    label: 'Nome completo',
                    placeholder: 'Joao Silva',

                },
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
                },
                {
                    name: 'Confirmasenha',
                    type: 'password',
                    label: 'Confirmar Senha',
                    placeholder: '******',
                }
            ]} />
        </div>
        </>
    )
}