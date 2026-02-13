import {Badge} from '@/components/ui/badge'
import {Link as LinkIcon, User, LogIn} from 'lucide-react'
import { NavLink } from "react-router-dom";
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
            <nav className="flex gap-3 items-center">

                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `flex items-center gap-2 2xl:text-sm text-xs text-text-color-2 p-2 rounded-xl
           ${isActive ? "bg-bg-purple text-white 2xl:text-sm text-xs shadow-badge-shadow" : "hover:bg-bg-purple hover:text-white  2xl:text-sm text-xs hover:shadow-badge-shadow"}`
                    }
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/perfil"
                    className={({ isActive }) =>
                        `flex items-center gap-2 2xl:text-sm text-xs text-text-color-2 p-2 rounded-xl
           ${isActive ? "bg-bg-purple text-white  2xl:text-sm text-xs shadow-badge-shadow" : "hover:bg-bg-purple hover:text-white  2xl:text-sm text-xs hover:shadow-badge-shadow"}`
                    }
                >
                    <Icon iconNode={User} className='w-4 h-4 2xl:w-5 2xl:h-5'   />
                    Perfil
                </NavLink>

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `flex items-center gap-2 2xl:text-sm text-xs text-text-color-2 p-2 rounded-xl
           ${isActive ? "hover:bg-bg-purple hover:text-white  2xl:text-sm text-xs hover:shadow-badge-shadow" : "hover:bg-bg-purple hover:text-white   2xl:text-sm text-xs hover:shadow-badge-shadow"}`
                    }
                >
                    <Icon iconNode={LogIn} className='w-4 h-4 2xl:w-5 2xl:h-5'   />
                    Sair
                </NavLink>

            </nav>
        </div>
    )



}