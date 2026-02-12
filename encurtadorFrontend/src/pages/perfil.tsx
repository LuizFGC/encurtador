import Header from '@/components/header'
import DashboardCard from '@/components/dashboardCard'
import ProfileForm from '@/components/profileForm'

interface User {
    nome: string
    email: string
    dataMembro: string
}

interface PerfilProps {
    links: number
    cliques:number
    User:User
}

export default function Perfil({links, cliques, User}: PerfilProps) {

    const media = links > 0 ? Number((cliques / links).toFixed(0)) : 0


    const cards = [
        {
            title: 'Links criados',
            number: links | 0,
        },
        {
            title: 'Total de cliques',
            number: cliques | 0,
        },
        {
            title: 'Média por link',
            number: media,
        },
    ]


    return (
        <>
            <Header/>
            <div>
                <div className="w-full flex flex-col items-center justify-center py-10">
                    <h1 className=" 2xl:text-5xl text-4xl  text-text-color-1 font-bold ">Perfil</h1>
                    <h2 className="text-text-color-3 text-sm 2xl:text-lg">Gerencie suas informações</h2>
                </div>

                <div className="flex  items-center justify-center py-2 gap-4">
                    {cards.map((card) =>(

                        <DashboardCard cardText={card.title} NumInfo={card.number} />
                    ))}
                </div>
                <div className="py-4">
                    <ProfileForm UserEmail={User.email} UserName={User.nome} />
                </div>
            </div>
        </>
    )
}