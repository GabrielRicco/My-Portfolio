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
        <Card className="flex flex-col w-[350px] gap-5">
            <img className="w-full h-48 rounded-xl border-2" src={props.photo} alt="Foto do projeto" />
            <div className="flex flex-col justify-between p-5 h-full">
                <CardTitle className="text-xl text-blue-600">{props.name}</CardTitle>
                <CardDescription className="font-bold">{props.description}</CardDescription>
                <a target="_blank" href={props.code}><Button variant="secondary">Ver código</Button></a>
            </div>
        </Card>
    )
}