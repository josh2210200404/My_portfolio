import React from 'react';
import { Trophy, Award } from 'lucide-react';

const Achievements = () => {
    return (
        <section id="achievements" className="py-20">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
                <Trophy className="text-cyan-400" />
                <span className="text-gradient">Key Achievements</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card p-8 rounded-2xl hover-card-effect border-l-4 border-cyan-400">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-400">
                            <Trophy size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Award-Winning Project in IEEE Hackathon</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Recognized as an award-winning project in an IEEE Hackathon, demonstrating innovation and technical excellence.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="glass-card p-8 rounded-2xl hover-card-effect border-l-4 border-indigo-400">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-indigo-500/10 rounded-full text-indigo-400">
                            <Award size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Runner-Up at IEEE Competition</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Runner-Up at IEEE Bangalore Section Rapid Innovation Challenge held at CMRIT University, Bengaluru.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
