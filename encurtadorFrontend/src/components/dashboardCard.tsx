import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface DashboardCardProps{
    NumInfo: number
    cardText: string
}
export default function DashboardCard({NumInfo, cardText}:DashboardCardProps){

    return(
        <Card className='flex flex-col items-start border-border-1 shadow-header-shadow gap-2 '>
            <CardHeader className='flex items-center justify-center w-full  '>
                <CardTitle className='text-bg-purple 2xl:text-lg text-md '>
                    {NumInfo}
                </CardTitle>
            </CardHeader>
            <CardContent className='text-text-color-3 2xl:text-sm text-xs py-0 px-10'>
                <p>{cardText}</p>
            </CardContent>
        </Card>
    )

}