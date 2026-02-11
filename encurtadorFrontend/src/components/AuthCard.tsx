import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardFooter,
    CardTitle,
} from "@/components/ui/card"
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"

interface Field {
        name: string;
        label: string;
        type?: React.HTMLInputTypeAttribute;
        placeholder?: string;

}
interface AuthCardProps{
    title?: string,
    subtitle?: string
    campos: Field[]
    buttonLabel: string
    footerText?: string
    linkText?: string
    link?: string
}

export default function AuthCard({title, subtitle, campos, buttonLabel,linkText,link, footerText}:AuthCardProps){

    return(

            <Card className="flex flex-col  border-border-1 shadow-header-shadow mx-auto w-md gap-6 px-2">
                <CardHeader>
                    <CardTitle className="text-xl" >{title}</CardTitle>
                    <CardDescription className="text-text-color-3">{subtitle}</CardDescription>
                </CardHeader>
                <CardContent >
                    <form action="" className="flex flex-col gap-3">
                        {campos.map((campo) => (

                            <div key={campo.name} >
                                <Label className="py-2 text-text-color-5">

                                    {campo.label}
                                </Label>
                                <Input
                                    id={campo.name}
                                    name={campo.name}
                                    type={campo.type}
                                    placeholder={campo.placeholder}
                                />
                            </div>

                        ))}

                        <Button type="submit" >
                            {buttonLabel}
                        </Button>

                    </form>
                    <CardFooter className="flex text-sm  justify-center gap-2 py-2 ">
                        <p className="text-text-color-3">{footerText} </p><a href={link} className="text-bg-purple">{linkText}</a>
                    </CardFooter>
                </CardContent>

            </Card>

    )
}