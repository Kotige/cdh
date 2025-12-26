import "./styles.scss";
import FeaturedPost from "./FeaturedPost";
import RecentPosts from "./RecentPosts";
import ContentRotator from "./ContentRotator";
import FunctionPrompt from "./ContentRotator/FunctionPrompt";

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
            <div className="column right-column h-[90vh] flex flex-col min-h-0">
                <div className="top-right flex-[2] min-h-0">
                    <RecentPosts 

                        posts={
                            [
                                {
                                    title: "O último samurai",
                                    subtitle: "Publicado em 12 de Dezembro.",
                                    excerpt: "A história do último samurai vivo que desviveu há pouco mais de dois anos."
                                },
                                {
                                    title: "A quarta feira",
                                    subtitle: "Publicado em 17 de Dezembro.",
                                    excerpt: "Nada parecia normal naquela última quarta feira. Tudo estava fora do lugar."
                                },
                                {
                                    title: "A quarta feira",
                                    subtitle: "Publicado em 17 de Dezembro.",
                                    excerpt: "Nada parecia normal naquela última quarta feira. Tudo estava fora do lugar."
                                }
                            ]
                        }

                    />
                </div>
                <div className="bottom-right flex-1 min-h-0">
                    <ContentRotator 
                        title="Prompt do Dia"
                        items={[
                            <FunctionPrompt 
                                input={"Uma carta encontrada dentro de um livro proibido."}
                                constraints={["silêncio", "tempo", "memória"]}
                            />
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}
