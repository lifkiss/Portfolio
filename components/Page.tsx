'use client'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


export default function Page() {
return (
<div className="min-h-screen bg-gradient-to-br from-[#f7f7fb] via-[#f0eef8] to-[#f7f9ff] text-slate-900">
<Navbar />
<main>
<Hero />
<About />
<Skills />
<Projects />
<Contact />
</main>
<Footer />
</div>
)
}