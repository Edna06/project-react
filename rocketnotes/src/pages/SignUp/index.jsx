
import { useState } from "react"
import { FiUser ,FiMail, FiLock } from "react-icons/fi"
import {Link, useNavigate} from 'react-router-dom'

//enviando informações para o backend
import {api} from "../../services/api"

import {Input} from "../../components/Input/index"
import {Button} from "../../components/Button/index"

import { Container, Form, Background } from "./styles"
import { toast } from "react-toastify";



export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

   function handleSingleUp() {
    if(!name || !email || !password) {
      return toast.warn("Preencha todos os campos!")
    }


      api.post("/users", {name, email, password})
      .then(() => {
        toast.success("Usuário cadastrado com sucesso!")
        navigate("/");
      })
      .catch(error =>{
        if(error.response){

          toast.error(error.response.data.message)
        } else {
          toast.warn("Não foi possível cadastrar.")
        }
      } )
  }

  return(
    <Container>
      <Background/>

      <Form>


        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input
       placeholder="Nome"
       type="text"
       icon={FiUser}
       onChange = {event => setName( event.target.value)}/>

       <Input
       placeholder="E-mail"
       type="text"
       icon={FiMail}
       onChange = {event => setEmail( event.target.value)}
       />

      <Input
       placeholder="Senha"
       type="password"
       icon={FiLock}
       onChange = {event => setPassword( event.target.value)}
       />

        <Button title="Cadastrar" onClick = {handleSingleUp}/>

        <Link to="/">
        Voltar para o login
        </Link>
      </Form>

    </Container>
  )
}