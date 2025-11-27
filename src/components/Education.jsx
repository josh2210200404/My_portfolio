import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: "B.Tech. - Computer Science & Engineering",
            school: "Centurion University of Technology and Management",
            date: "08/2022 - 05/2026",
            location: "Vishakhapatnam, Andhra Pradesh, India"
        },
        {
            degree: "12th",
            school: "Narayana Junior College, Visakhapatnam",
            date: "06/2020 - 05/2022",
            location: "Visakhapatnam, Andhra Pradesh, India"
        },
        {
            degree: "10th",
            school: "Narayana Group of Schools, Visakhapatnam",
            date: "06/2019 - 05/2020",
            location: "Visakhapatnam, Andhra Pradesh, India"
        }
    ];

    return (
        <section id="education" className="py-20">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
                <GraduationCap className="text-cyan-400" />
                <span className="text-gradient">Education</span>
            </h2>

            <div className="relative border-l border-slate-800 ml-3 space-y-12">
                {education.map((edu, index) => (
                    <div key={index} className="relative pl-8">
                        <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-cyan-500 rounded-full border border-slate-900 shadow-[0_0_0_4px_rgba(34,211,238,0.2)]" />

                        <div className="glass-card p-6 rounded-2xl hover-card-effect">
                            <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                            <h4 className="text-lg text-cyan-400 font-medium mb-4">{edu.school}</h4>

                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-slate-400">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} />
                                    {edu.date}
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin size={16} />
                                    {edu.location}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
