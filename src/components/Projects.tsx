import { projects } from '../../public/data'
import { Project } from './Project'

export function Projects() {
    return (
        <div className='flex items-center justify-center pb-28'>
            <div className='grid grid-cols-3 gap-10 mt-10 max-md:grid-cols-1 max-xl:grid-cols-2'>
                {projects.map((project) => (
                    <Project key={project.name} name={project.name} description={project.description} photo={project.photo} code={project.code} />
                ))}
            </div>
        </div>
    )
}