import { TbArrowUpRight } from "react-icons/tb";

export default function ContactSection() {
    return (
        <div className="bg-gradient-to-br from-zinc-100 to-stone-200 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00000010_0%,transparent_70%)]" />

            <div className="container relative py-20 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6 text-left">
                        <div className="relative inline-block">
                            <span className="text-lg font-medium text-amber-600 uppercase tracking-widest">
                                Let &apos s Collaborate
                            </span>
                            <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-amber-600 animate-line-expand" />
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent">
                            Ready to Transform Your Space?
                        </h1>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-end">
                        <a 
                            href="#"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-medium rounded-full transition-all duration-300 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                        >
                            <span className="text-white tracking-wider">
                                Start Your Project Now
                            </span>
                            <TbArrowUpRight className="text-2xl text-amber-100 transition-transform group-hover:rotate-45" />
                            <div className="absolute inset-0 rounded-full border-2 border-white/20 transition-all duration-300 group-hover:border-white/40 group-hover:scale-110" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}