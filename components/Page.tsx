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
<div className="min-h-screen bg-gradient-to-br from-[#faf5fb] via-[#f2e8f3] to-[#f8f7ff] text-slate-900">
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