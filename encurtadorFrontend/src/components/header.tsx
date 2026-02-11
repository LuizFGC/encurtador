import {Badge} from '@/components/ui/badge'
import {Link as LinkIcon, User, LogIn} from 'lucide-react'
import Icon from '@/components/ui/icon'
export default function Header(){

    return (
        <div className="flex w-full border border-border-1 shadow-header-shadow items-center justify-between px-14 ">
            <div className="flex items-center gap-2 py-4">
                <Badge className="bg-bg-purple rounded-2xl py-2 shadow-badge-shadow ">
                    <Icon  className="text-white " size={24}  iconNode={LinkIcon}/>
                </Badge>

                <h1 className=" text-2xl text-text-color-1 font-bold ">Linko</h1>
            </div>
            <div>
                <ul className="flex gap-3 items-center">
                    <li>
                        <a href="">
                         <Badge className="bg-bg-purple text-white rounded-md  text-sm shadow-badge-shadow" >
                            Dashboard
                         </Badge>
                        </a>
                    </li>
                    <li>
                        <a href="" className="flex items-center gap-2 text-sm text-text-color-2 ">
                                <Icon iconNode={User} size={15}  />
                                Perfil
                        </a>
                    </li>
                    <li>
                        <a href="" className="flex items-center gap-2 text-sm text-text-color-2 ">
                            <Icon iconNode={LogIn} size={15}  />
                            Sair
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )



}