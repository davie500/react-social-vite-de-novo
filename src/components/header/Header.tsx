import style from "./header.module.css"
import { Iconify } from "./iconify/Iconify"

export const Header = ()=>{
    return <header className={style.header}>   
    <h1 className={style.titulo}>The Script</h1>
    <Iconify color="gray" icon="ri:search-line" className={style.lupa}/>
    <input className={style.pesquisa} type="text" placeholder="Procurar..."/>
    <div className={style.botoes}>
        <div>
            <button className={style.criar}>
            <Iconify color="white" icon="ic:round-plus" height={21} width={22}/>
            </button>
            <p>Criar</p>
        </div>
        <div>
            <button className={style.criar}>
            <Iconify color="blue" icon="ix:user-profile-filled"  height={25} width={24} backgroundColor={"white"}/>
            </button>
            <p>Perfil</p>
        </div>
        <div>
            <button className={style.criar}>
            <Iconify color="white" icon="mdi:email"  height={21} width={22}/>
            </button>
            <p>Mensagens</p>
        </div>
       <div>
            <button className={style.criar}>
            <Iconify color="white" icon="ooui:settings"  height={21} width={22}/>
            </button>
            <p>Configurações</p>
       </div>
    </div>
    </header>
}