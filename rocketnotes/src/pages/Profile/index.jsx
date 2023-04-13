import {useState} from 'react'

import {FiArrowLeft, FiUser, FiMail,FiLock, FiCamera} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth.jsx'

import { Container, Form, Avatar } from './styles'
import {Input} from '../../components/Input/index'
import {Button} from '../../components/Button/index'

export function Profile(){
 const {user, updateProfile } = useAuth() 


 //nossos estados
  const [name, setName] = useState(user.name) //pegando o valor inicial que está armazenado no nosso contexto
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  async function handleUpdate(){
      const user = {
        name,
        email,
        password: passwordNew, //enviando a nova senha 
        old_password: passwordOld //enviando a senha antiga
      }
      await updateProfile({ user })  
    }
  

  return(
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft/>
        </Link>
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
          value={name}
          onChange = {e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange = {e => setEmail(e.target.value)}

        />

        <Input
          placeholder="Senha atual"
          type="Password"
          icon={FiLock}
          onChange = {e => setPasswordOld(e.target.value)}//funções que atualizam as informações do usuário
        />

        <Input
          placeholder="Nova Senha"
          type="Password"
          icon={FiLock}
          onChange = {e => setPasswordNew(e.target.value)}
        />

        <Button title='Salvar' onClick={handleUpdate}/>
      </Form>

    </Container>
  )
}