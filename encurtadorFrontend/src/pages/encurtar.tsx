import Header from '@/components/header'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import LinkCard from '@/components/linkCard'
interface Link{

    newUrl:string
    url:string
    cliques:number
    data: string


}

interface EncurtarProps {

    Links: Link[]


}

export default function Encurtar({Links}: EncurtarProps) {

    return (
        <>

            <Header/>
            <div className="flex flex-col gap-6">
                <div className="w-full flex flex-col items-center justify-center py-10">
                    <h1 className=" 2xl:text-5xl text-4xl  text-text-color-1 font-bold ">Encurte seus links</h1>
                    <h2 className="text-text-color-3 text-sm 2xl:text-lg">Cole uma URL longa e crie um link curto e fácil de compartilhar</h2>
                </div>
                <Card className="flex flex-col rounded-3xl border-border-1 shadow-header-shadow mx-auto 2xl:w-5xl w-3xl gap-2 2xl:gap-6 px-2">
                    <CardContent>
                        <form action="" className="flex flex-col gap-3 2xl:gap-6">

                                <div >
                                    <Label className="py-2 text-text-color-5 font-bold ">
                                        Url para encurtar
                                    </Label>
                                    <Input
                                        className="2xl:h-13 2xl:rounded-xl"
                                        id='url'
                                        name='url'
                                        type='text'
                                        placeholder='https://exemplo.com/sua-url-muito-longa'
                                    />
                                </div>

                            <Button type="submit" className="2xl:h-13 2xl:text-lg 2xl:rounded-xl" >
                                Criar link
                            </Button>

                        </form>
                    </CardContent>
                </Card>
                <div className="flex flex-col items-start justify-center py-4 mx-auto 2xl:w-5xl w-3xl ">
                    <h3 className="text-text-color-1 font-bold text-xl 2xl:text-2xl">Seus Links</h3>
                    <div className="flex flex-col items-center gap-3 justify-center py-4">
                        {Links.map((link) => (

                            <LinkCard newUrl={link.newUrl} url={link.url} cliques={link.cliques} data={link.data} />

                        ))}
                    </div>
                </div>



            </div>
        </>
    )
}