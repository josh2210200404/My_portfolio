import React from 'react';
import { ArrowRight, FileText, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center space-x-2 text-cyan-400 font-medium mb-4">
                        <span className="h-px w-8 bg-cyan-400"></span>
                        <span>Computer Science Engineering Student</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Hi, I'm <span className="text-gradient">Josh Swaroop Vegi</span>
                    </h1>

                    <p className="text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed">
                        I am a motivated and innovative Computer Science Engineering student with a robust foundation in software development, AI/ML, and web technologies. My skills lie in building intelligent, data-driven solutions using modern frameworks.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-12">
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-full transition-colors flex items-center gap-2"
                        >
                            Contact Me <ArrowRight size={18} />
                        </a>
                        <a
                            href="/resume"
                            className="px-8 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium rounded-full transition-all flex items-center gap-2"
                        >
                            View Resume <FileText size={18} />
                        </a>
                    </div>

                    <div className="flex items-center gap-6 text-slate-500 text-sm border-t border-slate-800 pt-8">
                        <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            Visakhapatnam, Andhra Pradesh, India
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            Open to Opportunities
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
