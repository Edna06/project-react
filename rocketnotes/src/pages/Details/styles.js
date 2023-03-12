import styled from 'styled-components'


export const Container = styled.div`
width: 100%;
height: 100vh;

display: grid;
/* definindo duas linhas. A primeira terá o tamanho de 105px e as demais terão o tamanho automático */
grid-template-rows: 105px auto;
/* definindo  nomes para as minhas linhas*/
grid-template-areas: 
"header"
"content";
`



