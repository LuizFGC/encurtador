import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
} from "@/components/ui/avatar"
import Icon from '@/components/ui/icon'
import {Mail} from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    Field,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

interface ProfileFormProps {
    UserName: string
    UserEmail: string
}

export default function ProfileForm({UserName, UserEmail}:ProfileFormProps) {

    return (
        <Card className="flex flex-col items-center mx-auto max-w-4xl px-10 pt-10 pb-[1px] border border-border-1 shadow-header-shadow
  ">
            <CardHeader className="flex items-center gap-3 w-full gap-4 ">
                <div>
                    <Avatar className="bg-bg-purple w-18 h-18">
                        <AvatarFallback className="text-white text-xl">
                            LF
                        </AvatarFallback>
                    </Avatar>
                </div>
                <div>
                    <CardTitle className="text-2xl text-text-color-1"> {UserName}</CardTitle>
                    <CardDescription className="flex items-center gap-1 text-xs text-text-color-3">
                        <Icon iconNode={Mail} className="w-4 h-4"/>
                        {UserEmail}
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent className="w-full ">
                <div >
                    <form >
                        <FieldGroup >
                            <FieldSet>
                                <FieldLegend className="font-bold">Informações pessoais</FieldLegend>
                                <FieldGroup>
                                    <div className="flex items-center gap-2 ">
                                        <Field>
                                            <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                                                Nome
                                            </FieldLabel>
                                            <Input
                                                id="checkout-7j9-card-name-43j"
                                                placeholder="Evil Rabbit"
                                                required
                                            />
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                                                E-mail
                                            </FieldLabel>
                                            <Input
                                                id="checkout-7j9-card-number-uw1"
                                                placeholder="1234 5678 9012 3456"
                                                required
                                            />
                                        </Field>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <Field>
                                            <FieldLabel htmlFor="checkout-exp-month-ts6">
                                                Membro desde
                                            </FieldLabel>
                                            <Input
                                                id="checkout-7j9-card-number-uw1"
                                                placeholder="1234 5678 9012 3456"
                                                required
                                            />
                                        </Field>

                                    </div>
                                    <FieldSeparator className="border-b border-border-1 h-1" />
                                    <Field>
                                        <FieldLabel className="font-bold" htmlFor="checkout-7j9-cvv">Segurança</FieldLabel>
                                        <Button type="button"  className="bg-white text-black shadow-header-shadow border border-border-1 max-w-30 text-xs">
                                            Alterar Senha
                                        </Button>
                                    </Field>
                                </FieldGroup>
                            </FieldSet>
                            <Field orientation="horizontal" className="flex pb-6 justify-end w-full ">
                                <Button type="button" className="bg-white text-black shadow-header-shadow border border-border-1">
                                    Cancel
                                </Button>
                                <Button type="submit">Salvar</Button>
                            </Field>
                        </FieldGroup>
                    </form>
                </div>
            </CardContent>
        </Card>
    )

}


