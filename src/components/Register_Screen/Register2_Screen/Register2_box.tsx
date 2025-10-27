import React from 'react';
import styled from "styled-components";

const Box = styled.div`
  background-color: #ffffff;
  text-align: center;
  margin-left: 16rem;
  height: 36.5rem;
  width: 38rem;
  border-radius: 2rem;
`;


const BoxContent = styled.div`
  position: relative;
  padding: 3rem;
`;

const LoginTitle = styled.span`
    font-size: 48px;
    font-weight: bold;
    color: #000000;
`;

const Form = styled.form`
  padding: 1rem 0rem  0rem 3rem; 


`

const InputSection = styled.section`
    margin-left: 2rem;
    
    
`;
const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1rem; 
`;

const Icon = styled.img`
position: absolute;
left: 1rem;
height: 1rem;

`;

  const Input = styled.input`
   border-radius: 1rem;
  border: 1px solid #3A30A0;
  padding: 1.4rem 0 1.4rem 3rem;
  width: 24rem;
  height: 4rem;
  font-size: 16px;
`;

 const Pipe = styled.span`
 fontSize: "30px";
 color: "#585C68";
 marginBottom: "px" ;
 `;

const RegisterUser = styled.a`
    display: flex;
    font-size: 0.9rem;
    color: #000000;
    margin-left: 12rem;
    margin-top: -0.5rem; 
    margin-bottom: 1rem; 
    
`;

  const Label = styled.label`
    display: flex;
    font-weight: bold;
    height: 1.5rem;
    color: #a2a9c2;
`;

const LoginInputButton= styled.input`
   display: flex;
    margin: 2rem 0rem 0rem 6.5rem;
    border-radius: 2rem;
    background-color: #FEE000;
    width: 12.5rem;
   height: 3.2rem;
   border: none;
   font-size: 1rem;
   font-weight: bold;
   cursor: pointer;
   color: #515CD5;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

`;

const OtherLoginMethods = styled.div`
  display: flex;
  margin-left: 3.4rem;

`

const FacebookLoginInput= styled.input`
   display: flex;
    margin: 0rem 0rem 0rem 0rem;
    border-radius: 2rem;
    background-color: #1877F2;
    width: 7.8rem;
   height: 2.9rem;
   border: none;
   font-size: 1rem;
   font-weight: bold;
   cursor: pointer;
   color: #ffffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

`;

const GoogleLoginInput= styled.input`
   display: flex;
    margin: 0rem 1rem 0rem 2rem;
    border-radius: 2rem;
    background-color: #ffffffff;
    width: 7rem;
   height: 2.9rem;
   border: none;
   font-size: 1rem;
   font-weight: bold;
   cursor: pointer;
   color: #504E4E;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

`;


const OrSection = styled.div`
    
      margin: 1rem 3rem 1rem 0rem;

      span {
      color: #000000;
      font-weight: bold;
      
      }

`;
const HorizontalLine = styled.img`

  margin-bottom: 0.175rem;

`;

interface Register2BoxProps {
 password: string;
 setPassword: (password:string) => void;
 onFormSubmit: () => void;
}

export default function RegisterBox({password, setPassword, onFormSubmit} : Register2BoxProps) {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onFormSubmit()
  }

  return (
    <Box>
      <BoxContent>
        <LoginTitle>Entrar</LoginTitle>

        <Form onSubmit={handleSubmit}>
        <InputSection>
          <Label htmlFor="fPassword">Senha:</Label>
            <InputWrapper>
            <Icon src="./tela_login/lock-password.svg" alt="" />
            <Input
              type="password"
              id="fPassword"
              placeholder="Digite aqui a sua senha"
            />
          </InputWrapper>

          <Label htmlFor="fPassword2">Confirme a sua senha:</Label>
          <InputWrapper>
            <Icon src="./tela_login/lock-password.svg" alt="" />
            <Input
              type="password"
              id="fPassword2"
              placeholder="Digite aqui a sua senha novamente"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputWrapper>
        </InputSection>
                    <RegisterUser href="/#/login">
            Já tem uma conta?   <strong>Conecte-se</strong>
          </RegisterUser>
      
          <LoginInputButton type="submit" value="Cadastrar-se"/>
          <OrSection>
          <HorizontalLine src="./tela_login/Line.svg" alt="" />
          <span> OU </span>
          <HorizontalLine src="./tela_login/Line.svg" alt="" />
          </OrSection>

          <OtherLoginMethods>
          <GoogleLoginInput type="submit" value="Google"/>
          <FacebookLoginInput type="submit" value="Facebook"/>
         
          </OtherLoginMethods>
        </Form>

      </BoxContent>
    </Box>
  );
}
