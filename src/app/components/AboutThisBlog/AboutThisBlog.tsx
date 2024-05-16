import TechSection from "./TechSection";

export default function AboutThisBlog() {
    return (
        <section
            className="flex justify-center items-center h-screen bg-transparent text-white relative"
            id="aboutBlog"
        >
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-12">Tecnologías usadas para este blog</h2>
                <TechSection />
            </div>
        </section>
    );
}