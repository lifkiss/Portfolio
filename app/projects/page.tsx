import ProjectCard from '../../components/ProjectCard'
import { projects } from '../../data/projects'
import { projects } from '../../data/projects'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#120b18] text-[#f1eaf5]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">Projects</h1>

        <div className="grid md:grid-cols-2 gap-6">
         {projects.map(p => (
  <ProjectCard key={p.id} project={p} />
))}
        </div>
      </div>
    </div>
  )
}
