import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider} from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

import { MyContext } from './myContext' 

import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
       <GlobalStyles/>

      <MyContext.Provider value={{name: "edna maria", email: "edna.maria887@gmail.com"}}> 
      {/* provendo um valor de todo o meu contexto  */}
       <Routes/>
      </MyContext.Provider> 
      {/* agora todas as minhas rotas tem acesso ao meu contexto */}

    </ThemeProvider>
  </React.StrictMode>,
)
