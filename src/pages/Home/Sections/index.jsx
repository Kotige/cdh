import "./styles.scss";
import FeaturedPost from "./FeaturedPost";

export default function Sections() {
    return (
        <div className="home-sections">
            {/* Coluna esquerda */}
            <div className="column left-column">
                <div className="content">
                    <FeaturedPost
                        title={"O estranho mundo da programação"}
                        date={"16 de Setembro"}
                        author={"Vítor Barra"}
                        excerpt={
                            <>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis assumenda labore esse dignissimos, quia fugit ratione iste a nisi vel fugiat provident, harum ab quod, non quisquam aut vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti natus non autem unde amet. Nobis, neque. Magni in amet consectetur error dolorum ducimus, repudiandae, suscipit delectus molestias deserunt voluptatum debitis!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis assumenda labore esse dignissimos, quia fugit ratione iste a nisi vel fugiat provident, harum ab quod, non quisquam aut vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti natus non autem unde amet. Nobis, neque. Magni in amet consectetur error dolorum ducimus, repudiandae, suscipit delectus molestias deserunt voluptatum debitis!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis assumenda labore esse dignissimos, quia fugit ratione iste a nisi vel fugiat provident, harum ab quod, non quisquam aut vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti natus non autem unde amet. Nobis, neque. Magni in amet consectetur error dolorum ducimus, repudiandae, suscipit delectus molestias deserunt voluptatum debitis!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis assumenda labore esse dignissimos, quia fugit ratione iste a nisi vel fugiat provident, harum ab quod, non quisquam aut vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti natus non autem unde amet. Nobis, neque. Magni in amet consectetur error dolorum ducimus, repudiandae, suscipit delectus molestias deserunt voluptatum debitis!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis assumenda labore esse dignissimos, quia fugit ratione iste a nisi vel fugiat provident, harum ab quod, non quisquam aut vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti natus non autem unde amet. Nobis, neque. Magni in amet consectetur error dolorum ducimus, repudiandae, suscipit delectus molestias deserunt voluptatum debitis!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis assumenda labore esse dignissimos, quia fugit ratione iste a nisi vel fugiat provident, harum ab quod, non quisquam aut vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti natus non autem unde amet. Nobis, neque. Magni in amet consectetur error dolorum ducimus, repudiandae, suscipit delectus molestias deserunt voluptatum debitis!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis assumenda labore esse dignissimos, quia fugit ratione iste a nisi vel fugiat provident, harum ab quod, non quisquam aut vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti natus non autem unde amet. Nobis, neque. Magni in amet consectetur error dolorum ducimus, repudiandae, suscipit delectus molestias deserunt voluptatum debitis!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis assumenda labore esse dignissimos, quia fugit ratione iste a nisi vel fugiat provident, harum ab quod, non quisquam aut vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti natus non autem unde amet. Nobis, neque. Magni in amet consectetur error dolorum ducimus, repudiandae, suscipit delectus molestias deserunt voluptatum debitis!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis assumenda labore esse dignissimos, quia fugit ratione iste a nisi vel fugiat provident, harum ab quod, non quisquam aut vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti natus non autem unde amet. Nobis, neque. Magni in amet consectetur error dolorum ducimus, repudiandae, suscipit delectus molestias deserunt voluptatum debitis!</p>
                            </>
                        }
                        link={"algum link"}
                    />
                </div>
            </div>

            {/* Coluna direita */}
            <div className="column right-column">
                <div className="top-right">Parte Superior da Coluna Direita</div>
                <div className="bottom-right">Parte Inferior da Coluna Direita</div>
            </div>
        </div>
    );
}
