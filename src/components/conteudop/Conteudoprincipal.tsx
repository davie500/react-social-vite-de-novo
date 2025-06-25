import style from "./conteudoprincipal.module.css"
import image from "./imagem/image.png"

export const ConteudoPrincipal = ()=>{
    return (
            <div className={style.tudo}>
                <div className={style.info}>
                    <div className={style.infoPrincipal}>
                        <div className={style.imagem}>
                            <img src={image} alt="Imagem de um gay" />
                        </div>
                        <div className={style.numero_scripts}>
                            <p>52</p>
                            <p>Scripts</p>
                        </div>
                        <div className={style.seguidores}>
                            <p>24.5k</p>
                            <p>Seguidores</p>
                        </div>
                        <div className={style.seguindo}>
                            <p>1.386</p>
                            <p>Seguindo</p>
                        </div>
                        <div className={style.nome}>
                            <h3>Juliana Souza</h3>
                            <p>@juu_librarian</p>
                        </div>
                        <div className={style.sobre}>
                            <span><p>Sobre</p></span>
                            <p>Oii, sou a Juliana e gosto de escrever crônicas sobre temas do meu dia
                                a dia. Lugares abertos são fertilizantes para minha criatividade,
                                adoro deitar na grama e observar o céu.
                            </p>
                        </div>
                    </div>
                    <div className={style.scripts}>
                        <p><span>Scripts recentes</span></p>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
    )
}