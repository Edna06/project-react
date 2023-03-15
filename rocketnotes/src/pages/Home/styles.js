import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100vh;

display: grid;
grid-template-areas: 250px auto; //definindo quantas colunas eu terei
grid-template-rows: 105px 128px auto 64px; //definindo as minhas linhas
grid-template-areas: 
'brand header'
'menu search'
'menu content'
'newnote content'
;//distribuindo as minhas áreas (por linha, como foi definido anteriormente)

background: ${({theme}) => theme.COLORS.BACKGROUND_800};
`;

//agora, irei fazer o posicionamento de acordo com as áreas do nosso grid
export const Brand = styled.div`
grid-area: brand;//definindo a area que ele irá ocupar
background: red;
`; 

export const Menu = styled.ul`
grid-area: menu;
background: green;
`; 

export const Search = styled.div`
grid-area: search;
background: violet;
`; 

export const Content = styled.div`
grid-area: content;
background: blue;
`; 

export const NewNote = styled.button`
grid-area: newnote;
background: yellow;
`;