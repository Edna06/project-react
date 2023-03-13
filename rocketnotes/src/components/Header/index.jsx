import { Container, Profile, Logout } from './style'
import { RiShutDownLine } from 'react-icons/ri' 


export function Header(){
  return(
    <Container>
      <Profile>
        <img src="https://github.com/Edna06.png" 
        alt="foto do usuário" />

      <div>
        <span>Bem-vindo,</span>
        <strong>Edna Maria</strong>
      </div>
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}