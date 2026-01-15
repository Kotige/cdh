import Submenu from "../../../components/Submenu";
import "./styles.scss"

export default function Hero() {
    return (
        <section 
                id="hero" 
                className="w-full min-h-[35vh] flex items-center justify-center bg-bg-main"
        >
            <div className="text-center px-4">
                
                <h1
                    className="text-5xl md:text-7xl font-serif text-text-main tracking-tight"
                >
                    Kernel
                </h1>

                <p
                    className=" mb-12 text-sm md:text-base text-text-muted tracking-tight"
                >
                    //histórias compiladas
                </p>
                <Submenu />
            </div>
        </section>
    );
}
