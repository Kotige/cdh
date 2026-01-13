import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import FeaturedPost from "../../components/FeaturedPost";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

import { stories } from "../../data/stories";

import "./styles.scss";

export default function Home() {
    const sortedStories = [...stories].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    const featured = sortedStories[0];
    const recent = sortedStories.slice(1,4);

    return (
        <main className=" mx-auto ">
            <Navbar />
            <Hero />
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-4 lg:px-20 py-12">
                {/* Coluna principal  */}
                <article className="lg:col-span-2">
                    <FeaturedPost story={featured} />
                </article>
                {/* Sidebar  */}
                <aside>
                    <Sidebar recent={recent}/>
                </aside>
            </section>
            <Footer />
        </main>
    );
}
