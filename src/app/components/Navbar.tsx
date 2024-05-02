'use client';
import Link from "next/link";

export default function Navbar() {
    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section?.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <nav className="w-full fixed top-0 left-0 bg-transparent text-white z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex justify-between items-center w-full">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href='/' className="font-bold text-xl">
                                Mi blog
                            </Link>
                        </div>

                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <button
                            className="px-3 py-2 rounded-md text-sm font-medium"
                            onClick={(() => handleScroll('home')) || (location.href = '/')}
                            >Home</button>
                            <button 
                            className="px-3 py-2 rounded-md text-sm font-medium"
                            onClick={() => handleScroll('about')}
                            >About</button>
                            <Link href='/news' className="px-3 py-2 rounded-md text-sm font-medium">News</Link>
                            <Link href='/blog' className="px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}