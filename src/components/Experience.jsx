import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: "Android Application Developer",
            company: "Bharath Heavy Electricals Limited (BHEL)",
            date: "05/2024 - 06/2024",
            location: "India",
            type: "Manufacturing / Core",
            description: [
                "Developed a PIN Code Validator Android Application using Kotlin and Jetpack Compose, integrating real-time validation features.",
                "Applied modern Android development practices including declarative UI with Jetpack Compose and clean architecture principles.",
                "Gained exposure to industry workflow, software development lifecycle (SDLC), and project documentation within a large-scale organization."
            ]
        },
        {
            title: "AIML Internship",
            company: "Internpe",
            date: "06/2024",
            location: "Online",
            type: "Startup company",
            description: [
                "Specialized in training machine learning models and optimizing algorithms to enhance model accuracy, reduce computational cost, and improve overall system performance.",
                "Experienced in developing and deploying deep learning models using TensorFlow and PyTorch for complex classification and regression tasks, including data preprocessing, model training, evaluation, and optimization."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
                <Briefcase className="text-cyan-400" />
                <span className="text-gradient">Experience</span>
            </h2>

            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <div key={index} className="glass-card p-8 rounded-2xl hover-card-effect relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                                <h4 className="text-lg text-cyan-400 font-medium">{exp.company}</h4>
                            </div>
                            <div className="flex flex-col gap-2 text-sm text-slate-400">
                                <div className="flex items-center gap-2">
                                    <Calendar size={14} />
                                    {exp.date}
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin size={14} />
                                    {exp.location}
                                </div>
                            </div>
                        </div>

                        <p className="text-sm text-slate-500 mb-4 font-medium uppercase tracking-wider">{exp.type}</p>

                        <ul className="space-y-2">
                            {exp.description.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 leading-relaxed">
                                    <span className="mt-2 w-1.5 h-1.5 bg-indigo-400 rounded-full flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
