import ProjectCard from '../../components/ProjectCard'


export default function ProjectsPage() {
const projects = [
{ id: 1, title: 'Terminal Web (Replica)', desc: 'Interactive terminal-style web app.', img: '/images/project1.jpg', tech: ['React','Next.js','Tailwind'] },
{ id: 2, title: 'E-Commerce Mini', desc: 'CRUD e-commerce simulation.', img: '/images/project2.jpg', tech: ['Next.js','Tailwind','MySQL'] },
{ id: 3, title: 'Chatbot NLP', desc: 'Simple NLP Q&A chatbot demo.', img: '/images/project3.jpg', tech: ['Python','Flask'] },
]


return (
<div className="min-h-screen bg-[#0B1020] text-white">
<div className="max-w-6xl mx-auto px-6 py-12">
<h1 className="text-4xl font-bold mb-6">Projects</h1>
<div className="grid md:grid-cols-2 gap-6">
{projects.map(p => <ProjectCard key={p.id} project={p} />)}
</div>
</div>
</div>
)
}