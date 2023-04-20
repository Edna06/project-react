import {useState} from 'react'

import {FiArrowLeft, FiUser, FiMail,FiLock, FiCamera} from 'react-icons/fi'

import { useAuth } from '../../hooks/auth.jsx'

import {api} from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg' // importando a imagem de placeholder || caso o usuário não tenha uma foto

import { Container, Form, Avatar } from './styles'
import {Input} from '../../components/Input/index'
import {Button} from '../../components/Button/index'
import { useNavigate } from 'react-router-dom'

export function Profile(){
 const {user, updateProfile } = useAuth()


 //nossos estados
  const [name, setName] = useState(user.name) //pegando o valor inicial que está armazenado no nosso contexto
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()


  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl) //se o usuário já tiver avatar, eu vou colocar aqui o avatar
  const [avatarFile, setAvatarFile] = useState(null) //usado exclusivamente para carregar um novo avatar
  //vai começar como null => sem avatar

  const navigate = useNavigate()

  function handleBack(){
    navigate(-1) //voltar na rota anterior 
  }

  async function handleUpdate(){
      const user = {
        name,
        email,
        password: passwordNew, //enviando a nova senha
        old_password: passwordOld //enviando a senha antiga
      }
      await updateProfile({ user, avatarFile }) //avatarFile -> o arquivo selecionado de fato pelo usuário (pois tenho que salvar no meu banco de dados)
    }

  function handleChangeAvatar(event){
    const file = event.target.files[0]
    setAvatarFile(file)

    // para exibir o avatar de fato
    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)

    //a partir de agora, a imagem será carregada na nossa aplicação, porém sumirá se eu recarregar a página
  }

  return(
    <Container>
      <header>
        <button type='button' onClick={handleBack}>
          <FiArrowLeft/>
        </button>
      </header>


      <Form action="">
        <Avatar>
          <img
            src= {avatar}
            alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera/>

            <input
              id='avatar'
              type='file'
              onChange={handleChangeAvatar}
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