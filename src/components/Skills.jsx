import React from 'react';
import { Cpu, Code2, Database, Globe } from 'lucide-react';

export const skillCategories = [
    {
        name: "Languages",
        icon: <Code2 className="text-cyan-400" />,
        skills: ["Python", "C/C++", "Java", "Kotlin"]
    },
    {
        name: "Web & Mobile",
        icon: <Globe className="text-indigo-400" />,
        skills: ["React", "Node.js", "Android", "Flutter", "Streamlit"]
    },
    {
        name: "Data & AI",
        icon: <Cpu className="text-purple-400" />,
        skills: ["Deep Learning", "TensorFlow", "PyTorch", "OpenCV"]
    },
    {
        name: "Tools & Database",
        icon: <Database className="text-emerald-400" />,
        skills: ["MongoDB", "Firebase", "Postman", "GitHub", "Data Structures"]
    }
];

const Skills = () => {

    return (
        <section id="skills" className="py-20 bg-slate-900/50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
                    <Cpu className="text-cyan-400" />
                    <span className="text-gradient">Skills</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="glass-card p-6 rounded-2xl hover-card-effect">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-slate-800 rounded-lg">
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white">{category.name}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm rounded-lg transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
