import React from 'react';
import { FolderGit2, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Automated Marine Oil Spill Detection",
            date: "03/2023 - 06/2023",
            location: "India",
            description: "Automated Marine Oil Spill Detection Using AIS Dataset and Satellite Images",
            points: [
                "Developed an AI model to detect ship movement anomalies and predict potential oil spills using AIS and satellite data.",
                "Applied anomaly detection algorithms with Python for maritime safety analysis."
            ],
            tags: ["Python", "AI/ML", "Satellite Data"]
        },
        {
            title: "AI-Powered Job Matching Platform",
            date: "05/2023 - 08/2023",
            location: "India",
            description: "AI-Powered Job Matching Platform",
            points: [
                "Created an intelligent job search website integrating AI chatbot support for personalized guidance.",
                "Implemented frontend with React and backend using Node.js for dynamic user interaction."
            ],
            tags: ["React", "Node.js", "AI Chatbot"],
            link: "https://github.com/PremSaiBollamoni/CenSkillConnect"
        },
        {
            title: "Weather Forecast App",
            date: "2024",
            location: "Online",
            description: "Flutter-based cross-platform weather application",
            points: [
                "Developed a cross-platform app showing real-time weather and 5-day forecasts with dynamic backgrounds based on conditions.",
                "Implemented fast city search with autocomplete and detailed weather metrics using WeatherAPI.com and MobX for state management.",
                "Designed a modern, responsive UI supporting light/dark themes for mobile, web, and desktop platforms."
            ],
            tags: ["Flutter", "Dart", "MobX", "WeatherAPI"],
            link: "https://github.com/josh2210200404/Figma-Weather-app-layout"
        },
        {
            title: "Intelligent Video Surveillance System",
            date: "09/2023 - 12/2023",
            location: "India",
            description: "Intelligent Video Surveillance System",
            points: [
                "Developed an AI-driven real-time video surveillance application for automated detection of violence, theft, and abnormal activities.",
                "Engineered and deployed deep learning models using TensorFlow and OpenCV for live video analytics and intelligent event recognition."
            ],
            tags: ["TensorFlow", "OpenCV", "Deep Learning"]
        }
    ];

    return (
        <section id="projects" className="py-20">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
                <FolderGit2 className="text-cyan-400" />
                <span className="text-gradient">Projects</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="glass-card p-6 rounded-2xl hover-card-effect flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                                <FolderGit2 size={24} />
                            </div>
                            <div className="text-xs text-slate-500 flex items-center gap-1">
                                <Calendar size={12} />
                                {project.date}
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>

                        <ul className="space-y-2 mb-6">
                            {project.points.map((point, i) => (
                                <li key={i} className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                                    • {point}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto space-y-4">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-2 bg-slate-800 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 rounded-lg transition-all border border-cyan-500/30 hover:border-cyan-500/50 font-medium text-sm"
                                >
                                    Open Project <ExternalLink size={16} />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
