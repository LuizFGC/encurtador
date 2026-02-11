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

}

export default function LinkCard({newUrl, url, cliques}:LinkCardProps){

    return(
        <Card className="border-border-1 shadow-header-shadow mx-auto w-5xl">
            <CardHeader className="text-bg-purple flex items-center justify-between  " >
                <CardTitle >
                    <div className="flex gap-2 text-lg items-center py-2">
                        {newUrl} <Icon iconNode={SquareArrowOutUpRight} size={15} />

                    </div>
                    <div className="text-text-color-3 text-sm font-light ">
                        {url}
                    </div>
                </CardTitle>
                <Button className=" flex justify-between text-text-color-5 bg-white border shadow-header-shadow border-border-1 w-25 text-sm">
                    <Icon iconNode={Copy} size={20} />
                    Copiar
                </Button>
            </CardHeader>
            <CardContent className="flex">
                <Badge className="text-text-color-6 bg-cliques-badge gap-2" >
                    <Icon iconNode={TrendingUp} size={15}/>
                    <p> {cliques}  Cliques</p>
                </Badge>
                <Badge>
                    06/01/9092
                </Badge>
            </CardContent>
        </Card>
    )
}