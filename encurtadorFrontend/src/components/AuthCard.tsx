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
        value: string;
        onChange:  React.ChangeEventHandler<HTMLInputElement>;
        error?: string[];

}
interface AuthCardProps{
    title?: string,
    subtitle?: string
    campos: Field[]
    buttonLabel: string
    footerText?: string
    linkText?: string
    link?: string
    submit: React.FormEventHandler<HTMLFormElement>
}

export default function AuthCard({title, subtitle, campos, buttonLabel,linkText,link, footerText, submit,}:AuthCardProps){

    return(

            <Card className="flex flex-col rounded-3xl border-border-1 shadow-header-shadow mx-auto 2xl:w-xl  w-md gap-2 2xl:gap-6 px-2">
                <CardHeader>
                    <CardTitle className="text-xl 2xl:text-2xl" >{title}</CardTitle>
                    <CardDescription className="text-text-color-3 2xl:text-md">{subtitle}</CardDescription>
                </CardHeader>
                <CardContent >
                    <form onSubmit={submit} className="flex flex-col gap-3 2xl:gap-6">
                        {campos.map((campo) => (

                            <div key={campo.name} >
                                <Label className="py-2 text-text-color-5 ">

                                    {campo.label}
                                </Label>
                                <Input
                                    className="2xl:h-13 2xl:rounded-xl"
                                    id={campo.name}
                                    name={campo.name}
                                    type={campo.type}
                                    placeholder={campo.placeholder}
                                    value={campo.value}
                                    onChange={campo.onChange}
                                />
                                {campo.error && (
                                    <p className="text-red-500 text-xs">
                                        {campo.error[0]}
                                    </p>
                                )}
                            </div>

                        ))}

                        <Button type="submit" className="2xl:h-13 2xl:text-lg 2xl:rounded-xl" >
                            {buttonLabel}
                        </Button>

                    </form>
                    <CardFooter className="flex text-sm justify-center gap-2 py-2 ">
                        <p className="text-text-color-3">{footerText} </p><a href={link} className="text-bg-purple">{linkText}</a>
                    </CardFooter>
                </CardContent>

            </Card>

    )
}