import { Container } from "./styles";

//eu nõa vou poder utilizar o Icon com a inicial minúscula(de acordo com os parâmetros, deve ser escrito com a inicial maiúscula). Por isso, faço a conversão para receber a propriedade 
export function Input({icon: Icon, ...rest}){
return(

  <Container>
    {Icon && <Icon size={20} />}
    {/* só irá mostrar o ícone se ele de fato existir(vou utilizar essa propriedade porque não são todas as telas que utilizam ícone no input) */}
      <input {...rest}/>
  </Container>
)
}