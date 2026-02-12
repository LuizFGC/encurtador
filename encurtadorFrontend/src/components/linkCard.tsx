import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import {Copy, SquareArrowOutUpRight, TrendingUp} from 'lucide-react'
import {Badge} from '@/components/ui/badge'
interface LinkCardProps{
    newUrl: string
    url: string
    cliques: number
    data: string
}

export default function LinkCard({newUrl, url, cliques, data}:LinkCardProps){

    return(
        <Card className="border-border-1 shadow-header-shadow mx-auto 2xl:w-5xl w-3xl ">
            <CardHeader className="text-bg-purple flex items-center justify-between " >
                <CardTitle >
                    <div className=" 2xl:text-lg text-md  ">
                        <a href="" className="flex gap-2 items-center py-2">{newUrl} <Icon iconNode={SquareArrowOutUpRight} size={"15"} /> </a>
                    </div>
                    <div className="text-text-color-3 2xl:text-sm text-xs font-light ">
                        {url}
                    </div>
                </CardTitle>
                <Button className=" flex justify-between text-text-color-5 bg-white border shadow-header-shadow border-border-1 w-25 2xl:text-sm text-xs ">
                    <Icon iconNode={Copy} className='2xl:w-6 2xl:h-6  w-5 h-5' />
                    <div> Copiar</div>

                </Button>
            </CardHeader>
            <CardContent className="flex">
                <Badge className="text-text-color-6 bg-cliques-badge gap-2" >
                    <Icon iconNode={TrendingUp} size={15}/>
                    <p> {cliques}  Cliques</p>
                </Badge>
                <Badge>
                    {data}
                </Badge>
            </CardContent>
        </Card>
    )
}