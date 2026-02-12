import Perfil from '@/pages/perfil'

export default function App() {

  return (
    <>
        <Perfil
            User={
                {
                    nome: 'Luiz Filipe',
                    email: 'user.email.com',
                    dataMembro: new Date().toString(),
                }
            }
            links={34}
            cliques={876} />
    </>
  )
}


