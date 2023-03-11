// vai conter a estrutura do nosso botão

import { Container } from './style'

export function Button({title, loading = false, ...rest}){
// caso o loading não seja informado em uma propriedade, o seu valor será false (valor padrão)
  return (
    <Container 
    type='button'
    disabled={loading}
    {...rest}>
    
    {/* adicionando o if ternário */}

    {loading ? "Carregando..." : title}
    </Container>
    )
}