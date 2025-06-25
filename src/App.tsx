import "./App.css"
import { ConteudoPrincipal } from "./components/conteudop/Conteudoprincipal"
import { ConteudoReserva } from "./components/conteudor/Conteudoreserva"
import { Header } from "./components/header/Header"

function App() {

 return <>
 <Header />

      <main className="fundo">

      <ConteudoPrincipal />
      <ConteudoReserva />
      </main>
  
  
 </>
}

export default App