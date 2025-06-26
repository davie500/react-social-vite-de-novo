import style from "./conteudoprincipal.module.css"
import image from "./imagem/image.png"

export const ConteudoPrincipal = ()=>{
    return (
            <div className={style.tudo}>
                <div className={style.info}>
                    <section>
                        <div className={style.imagem}>
                            <img src={image} alt="Imagem de um gay" />
                        </div>
                        <div className={style.infoPrincipal}>
                            <div className={style.numero_scripts}>
                                <h3>52</h3>
                                <p>Scripts</p>
                            </div>
                            <div className={style.seguidores}>
                                <h3>24.5k</h3>
                                <p>Seguidores</p>
                            </div>
                            <div className={style.seguindo}>
                                <h3>1.386</h3>
                                <p>Seguindo</p>
                            </div>
                        </div>
                        <div className={style.nome}>
                            <h3>Juliana Souza</h3>
                            <p>@juu_librarian</p>
                        </div>
                    </section>
                    <div className={style.sobre}>
                        <h3>Sobre</h3>
                        <p>Oii, sou a Juliana e gosto de escrever crônicas sobre temas do meu dia a dia.
                           Lugares abertos são fertilizantes para minha criatividade, adoro deitar na 
                           grama e observar o céu.
                        </p>
                    </div>
                    <div className={style.recentes}>
                        <p><strong>Scripts recentes</strong></p>
                    </div>
                    <div className={style.scripts}>
                        husgycbwceyggqg7yqgucwq
                    </div>
                    <div className={style.scripts}>
                        vrhfbhwbycbewicw
                    </div>
                    <div className={style.scripts}>
                        eqejnfdsbhbdsh vvyuvyi
                    </div>
                </div>
            </div>
    )
}