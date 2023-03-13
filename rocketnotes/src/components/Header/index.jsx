import { Container, Profile } from './style'

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
    </Container>
  )
}