import { Button } from "./ui/button";
import { Card, CardDescription, CardTitle } from "./ui/card";

interface ProjectProps {
    name: string
    description: string
    photo: string,
    code: string
}

export function Project(props: ProjectProps) {
    return (
        <Card className="flex w-[700px] gap-5 p-8">
            <img className="w-72 h-36 rounded-xl border-2" src={props.photo} alt="Foto do projeto" />
            <div className="flex flex-col justify-between">
                <CardTitle>{props.name}</CardTitle>
                <CardDescription>{props.description}</CardDescription>
                <a target="_blank" href={props.code}><Button>Ver código</Button></a>
            </div>
        </Card>
    )
}