import { Container, Form, Avatar } from './styles'
import {FiArrowLeft, FiUser, FiMail,FiLock, FiCamera} from 'react-icons/fi'
import {Input} from '../../components/Input/index'
import {Button} from '../../components/Button/index'

export function Profile(){
  return(
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft/>
        </a>
      </header>


      <Form action="">
        <Avatar>
          <img 
            src="https://www.github.com/Edna06.png" 
            alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera/>

            <input
              id='avatar'
              type='file' //botão de upload de imagens
            />
          </label>
        </Avatar>


        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha atual"
          type="Password"
          icon={FiLock}
        />

        <Input
          placeholder="Nova Senha"
          type="Password"
          icon={FiLock}
        />

        <Button title='Salvar'/>
      </Form>

    </Container>
  )
}