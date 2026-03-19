import { Routes } from "./assets/components/Routes/Routes"
import { Layout } from "./assets/components/Layout/Layout"
import { GlobalStyle } from "./assets/styles/GlobalStyle"

function App() {
  return (
    <>
    <GlobalStyle></GlobalStyle>
    {/* Todo se encuentra contenido dentro del Layout, y es ahí donde estoy aplicando 
    el useEffect para que en cada cambio del path, la aplicación navegue al usuario al comienzo
    automáticamente */}
    <Layout>
      <Routes></Routes>
    </Layout>
    </>
  )
}

export default App
