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
                            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-300 ease-in-out"
                            onClick={
                                // if user in path `/` then scroll to `Home` section, else redirect to `/`
                                () => handleScroll(window.location.pathname === '/' ? 'home' : location.href = '/')
                            }
                            >Home</button>
                            <button 
                            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-300 ease-in-out"
                            onClick={
                                // if user in path `/` then scroll to `About` section, else redirect to `/about`
                                () => handleScroll(window.location.pathname === '/' ? 'about' : location.href = '/')
                            }
                            >About</button>
                            <button
                            className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 cursor-not-allowed"
                            disabled
                            >Blog</button>
                            <button
                            className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 cursor-not-allowed"
                            disabled
                            >News</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}