import {Badge} from '@/components/ui/badge'
import {Link as LinkIcon, User, LogIn} from 'lucide-react'
import Icon from '@/components/ui/icon'
export default function Header(){

    return (
        <div className="flex w-full border border-border-1 shadow-header-shadow items-center justify-between px-14  ">
            <div className="flex items-center gap-2 py-4">
                <Badge className="bg-bg-purple 2xl:rounded-2xl rounded-xl  py-2 shadow-badge-shadow ">
                    <Icon  className="text-white w-4 h-4 2xl:w-6 2xl:h-6 "   iconNode={LinkIcon}/>
                </Badge>

                <h1 className=" 2xl:text-2xl text-xl text-text-color-1 font-bold ">Linko</h1>
            </div>
            <div>
                <ul className="flex gap-3 items-center">
                    <li>
                        <a href="">
                         <Badge className="bg-bg-purple text-white rounded-md  2xl:text-sm text-xs shadow-badge-shadow" >
                            Dashboard
                         </Badge>
                        </a>
                    </li>
                    <li>
                        <a href="" className="flex items-center gap-2 2xl:text-sm text-xs text-text-color-2 ">
                                <Icon iconNode={User} className='w-4 h-4 2xl:w-5 2xl:h-5'   />
                                Perfil
                        </a>
                    </li>
                    <li>
                        <a href="" className="flex items-center gap-2 2xl:text-sm text-xs text-text-color-2 ">
                            <Icon iconNode={LogIn} className='w-4 h-4 2xl:w-5 2xl:h-5'   />
                            Sair
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )



}