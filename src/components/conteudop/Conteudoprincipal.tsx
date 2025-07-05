import { Iconify } from "../header/iconify/Iconify"
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
                            <div className={style.numeros}>
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
                            <div className={style.simbolos}>
                                <div className={style.simbolo_c}>
                                    C
                                </div>
                                <div className={style.simbolo_h}>
                                    H
                                </div>
                                <div className={style.simbolo_p}>
                                    P
                                </div>
                                <div className={style.simbolo_mais}>
                                    +
                                </div>
                            </div>
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
                    <div className={style.scriptsContainer}>
                        <div className={style.scripts}>
                            <Iconify icon="fontisto:quote-left" color="gray" width={30} className={style.pensador}/>
                            <p>
                            A continuação do 
                        "O Busto Escarlate"
                        finalmente saiuuu!!

                        As luzes fracas faziam a
                        ambientação da casa, o
                        mistério era reforçado
                        e eu não sei o resrto.
                            </p>
                        </div>
                        <div className={style.scripts}>
                            <Iconify icon="fontisto:quote-left" color="gray" width={30} className={style.pensador}/>
                            <p>
                            vrhfbhwbycbewicw
                            </p>
                        </div>
                        <div className={style.scripts}>
                            <Iconify icon="fontisto:quote-left" color="gray" width={30} className={style.pensador}/>
                            <p>
                            eqejnfdsbhbdsh vvyuvyi
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}