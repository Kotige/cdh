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
    const recent = sortedStories.slice(1, 4);

    return (
        <main className="home bg-bg-main text-text-main">
            <Navbar />
            <Hero />

            <section className="home-content">
                <article className="home-main">
                    <FeaturedPost story={featured} />
                </article>

                <aside className="home-sidebar">
                    <Sidebar recent={recent} />
                </aside>
            </section>

            <Footer />
        </main>
    );
}
