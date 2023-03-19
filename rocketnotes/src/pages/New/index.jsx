import {Textarea} from '../../components/Textarea/index'
import {NoteItem} from '../../components/NoteItem/index'
import {Section} from '../../components/Section/index'
import {Button} from '../../components/Button/index'
import {Header} from '../../components/Header/index'
import {Input} from '../../components/Input/index'

import { Container, Form} from './styles'


export function New(){
  return (
    
    <Container>
      <Header/>

      <main>
        <Form>
        <header>
          <h1>Criar nota</h1>
          <a href="/">Voltar</a>
        </header>
        
        <Input placeholder='Titulo'/>
        <Textarea placeholder='Observações '/>

        <Section title="Links úteis">
          <NoteItem value="https://www.rocketseat.com.br"/>
          <NoteItem isNew placeholder="Novo link"/>
        </Section>


        <Section title="Marcadores">
          <div className="tags">
          <NoteItem value='React'/>
          <NoteItem isNew placeholder='Nova tag'/>
          </div>
        </Section>

        <Button title='Salvar'/>
        </Form>
      </main>

    </Container>

  )
}