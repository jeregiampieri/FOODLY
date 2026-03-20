import { Routes } from "./assets/components/Routes/Routes"
import { Layout } from "./assets/components/Layout/Layout"
import { GlobalStyle } from "./assets/styles/GlobalStyle"
import { Navbar } from "./assets/components/Navbar/Navbar"

function App() {
  return (
    <>
    <GlobalStyle></GlobalStyle>
    {/* Todo se encuentra contenido dentro del Layout, y es ahí donde estoy aplicando 
    el useEffect para que en cada cambio del path, la aplicación navegue al usuario al comienzo
    automáticamente */}
    <Layout>
      <Navbar></Navbar>
      <Routes></Routes>
    </Layout>
    </>
  )
}

export default App
