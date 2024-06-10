import { projects } from '../../public/data'
import { Project } from './Project'

export function Projects() {
    return (
        <div className='grid grid-cols-2 gap-4 mt-10'>
            {projects.map((project) => (
                <Project key={project.name} name={project.name} description={project.description} photo={project.photo} code={project.code} />
            ))}
        </div>
    )
}