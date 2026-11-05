import React, { useEffect } from 'react';
import { ArrowLeft, Printer, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { experiences } from './Experience';
import { projects } from './Projects';
import { skillCategories } from './Skills';
import { education } from './Education';

const achievements = [
    "Award-winning project in an IEEE Hackathon.",
    "Runner-Up at IEEE Bangalore Section Rapid Innovation Challenge, CMRIT University, Bengaluru."
];

const Section = ({ title, children }) => (
    <section className="mt-8 break-inside-avoid-page">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 border-b border-slate-200 pb-2 mb-4">
            {title}
        </h2>
        {children}
    </section>
);

const Entry = ({ title, subtitle, meta, children }) => (
    <div className="mb-5 last:mb-0 break-inside-avoid">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="font-semibold text-slate-900">{title}</h3>
            {meta && <span className="text-sm text-slate-500 shrink-0">{meta}</span>}
        </div>
        {subtitle && <p className="text-sm text-slate-600">{subtitle}</p>}
        {children}
    </div>
);

const Bullets = ({ items }) => (
    <ul className="mt-2 space-y-1 list-disc pl-5 text-sm text-slate-700 leading-relaxed marker:text-slate-400">
        {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
);

const Resume = () => {
    useEffect(() => {
        document.title = 'Resume | Josh Swaroop Vegi';
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 py-8 sm:py-12 px-4 print:bg-white print:p-0">
            <div className="max-w-[850px] mx-auto mb-6 flex items-center justify-between print:hidden">
                <a href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
                    <ArrowLeft size={16} /> Back to portfolio
                </a>
                <button
                    onClick={() => window.print()}
                    className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-full transition-colors flex items-center gap-2 text-sm cursor-pointer"
                >
                    <Printer size={16} /> Download PDF
                </button>
            </div>

            <article className="max-w-[850px] mx-auto bg-white text-slate-800 rounded-2xl shadow-2xl p-8 sm:p-12 print:shadow-none print:rounded-none print:p-0 print:max-w-none [color-scheme:light]">
                <header>
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Josh Swaroop Vegi</h1>
                    <p className="text-cyan-700 font-medium mt-1">Computer Science Engineering Student</p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 mt-4 text-sm text-slate-600">
                        <a href="mailto:joshswaroop04@gmail.com" className="flex items-center gap-1.5 hover:text-cyan-700"><Mail size={14} />joshswaroop04@gmail.com</a>
                        <a href="tel:+917989094798" className="flex items-center gap-1.5 hover:text-cyan-700"><Phone size={14} />+91-7989094798</a>
                        <span className="flex items-center gap-1.5"><MapPin size={14} />Visakhapatnam, India</span>
                        <a href="https://linkedin.com/in/josh-swaroop-3787252b2" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-cyan-700"><Linkedin size={14} />linkedin.com/in/josh-swaroop-3787252b2</a>
                        <a href="https://github.com/josh2210200404" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-cyan-700"><Github size={14} />github.com/josh2210200404</a>
                    </div>
                </header>

                <Section title="Summary">
                    <p className="text-sm text-slate-700 leading-relaxed">
                        Motivated and innovative Computer Science Engineering student with a robust foundation in software development, AI/ML, and web technologies, focused on building intelligent, data-driven solutions using modern frameworks.
                    </p>
                </Section>

                <Section title="Experience">
                    {experiences.map((exp, i) => (
                        <Entry
                            key={i}
                            title={exp.title}
                            subtitle={`${exp.company} · ${exp.location}`}
                            meta={exp.date}
                        >
                            <Bullets items={exp.description} />
                        </Entry>
                    ))}
                </Section>

                <Section title="Projects">
                    {projects.map((p, i) => (
                        <Entry key={i} title={p.title} subtitle={p.tags.join(' · ')} meta={p.date}>
                            <Bullets items={p.points} />
                        </Entry>
                    ))}
                </Section>

                <Section title="Skills">
                    <dl className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-x-4 gap-y-2 text-sm">
                        {skillCategories.map((c, i) => (
                            <React.Fragment key={i}>
                                <dt className="font-semibold text-slate-900">{c.name}</dt>
                                <dd className="text-slate-700">{c.skills.join(', ')}</dd>
                            </React.Fragment>
                        ))}
                    </dl>
                </Section>

                <Section title="Education">
                    {education.map((edu, i) => (
                        <Entry key={i} title={edu.degree} subtitle={edu.school} meta={edu.date} />
                    ))}
                </Section>

                <Section title="Achievements">
                    <Bullets items={achievements} />
                </Section>
            </article>
        </div>
    );
};

export default Resume;
