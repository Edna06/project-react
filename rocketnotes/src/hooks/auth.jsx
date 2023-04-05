//arquivo de contexto de autenticação

import { createContext, useContext} from 'react' 

export const AuthContext = createContext({})

function AuthProvider({ children }) { 
  return (
    <AuthContext.Provider
      value={{ name: 'edna maria', email: 'edna.maria887@gmail.com' }}
    >
      {children}
    </AuthContext.Provider> 
  )
}

function useAuth(){ 
  const context = useContext(AuthContext) 

  return context
}


export {AuthProvider, useAuth}


//agora eu tenho um hook personalizado e, dentro dele, eu centralizei a lógica de utilização desse contexto, para compartilhar os dados do meu usuário com toda a minha aplicação 