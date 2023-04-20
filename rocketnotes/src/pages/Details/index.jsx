import { Container, Links, Content } from './styles'

import { useParams, useNavigate } from 'react-router-dom' //busca pelos parâmetros que existem na rota
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

import {Button} from '../../components/Button/index'
import {Header} from '../../components/Header/index'
import {ButtonText} from '../../components/ButtonText/index'
import {Section} from '../../components/Section/index'
import {Tag} from '../../components/Tags/index'


export function Details(){
  const [data, setData] = useState(null) //vai iniciar sem conteúdo

  const params = useParams()

  const navigate = useNavigate()

  function handleBack() {
  navigate(-1) // volta para a rota anterior (lembrar da fatia de bolo com camadas)
  }

  async function handleRemove() {
    const confirm = window.confirm('Deseja realmente remover a nota?')

    if(confirm){
     await api.delete(`/notes/${params.id}`)
     handleBack()
    }
  }

  //agora, usando o effect para buscar o conteúdo da nota
  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

return (
  <Container>

    <Header/>

    { data &&

      <main>
        <Content>

        <ButtonText
        title="Excluir nota"
        onClick={handleRemove}
        />

      <h1>
        {data.title}
      </h1>
      <br />
    <p>
      {data.description}
    </p>

    {
      data.links &&
        <Section title="Links úteis">
         <Links>
          {
            data.links.map(link => (
          <li key={String(link.id)}>
            <a href={link.url} target='_blank'>
              {link.url}
            </a>
          </li>
            ))
          }

       </Links>
    </Section>
    }


    {
      data.tags &&
    <Section title= "Marcadores">
        { data.tags.map(tag => (
          <Tag
           key={String(tag.id)}
           title={tag.name}
          />
          ))
        }
    </Section>
  }

  <Button title="Voltar" onClick={handleBack}/>

  </Content>
  </main>
  }
  </Container>

  )
}