import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20">
            <div className="glass-card p-8 md:p-12 rounded-3xl text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 -z-10" />

                <h2 className="text-4xl font-bold text-white mb-6">Let's Work Together</h2>
                <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <a href="mailto:joshswaroop04@gmail.com" className="flex flex-col items-center gap-4 p-6 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors group">
                        <div className="p-4 bg-cyan-500/10 rounded-full text-cyan-400 group-hover:scale-110 transition-transform">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-1">Email</h3>
                            <p className="text-slate-400 text-sm">joshswaroop04@gmail.com</p>
                        </div>
                    </a>

                    <a href="tel:+917989094798" className="flex flex-col items-center gap-4 p-6 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors group">
                        <div className="p-4 bg-indigo-500/10 rounded-full text-indigo-400 group-hover:scale-110 transition-transform">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-1">Phone</h3>
                            <p className="text-slate-400 text-sm">+91-7989094798</p>
                        </div>
                    </a>

                    <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors group">
                        <div className="p-4 bg-purple-500/10 rounded-full text-purple-400 group-hover:scale-110 transition-transform">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-1">Location</h3>
                            <p className="text-slate-400 text-sm">Visakhapatnam, India</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-6">
                    <a
                        href="https://linkedin.com/in/josh-swaroop-3787252b2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-cyan-500 transition-all"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="https://github.com/josh2210200404"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                    >
                        <Github size={24} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
