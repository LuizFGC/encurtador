import {Badge} from '@/components/ui/badge'
import Icon from '@/components/ui/icon'
import {Link as LinkIcon} from 'lucide-react'

interface AuthHeaderProps {
    subtitle: string
}
export default function AuthHeader({subtitle}:AuthHeaderProps) {


    return (

        <div className="flex flex-col items-center 2xl:gap-4 gap-2 py-4">
            <Badge className="bg-bg-purple 2xl:rounded-2xl rounded-xl 2xl:w-20 2xl:h-20 py-2 shadow-badge-shadow ">
                <Icon  className="text-white w-8 h-8 2xl:w-12 2xl:h-12 "   iconNode={LinkIcon}/>
            </Badge>

            <h1 className=" 2xl:text-4xl text-2xl  text-text-color-1 font-bold ">Linko</h1>
            <h2 className="text-text-color-3 text-sm 2xl:text-lg">{subtitle}</h2>
        </div>
    )

}