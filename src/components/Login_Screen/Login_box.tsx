import styled from "styled-components";

const Box = styled.div`

    background-color: #FFFFFF;
    text-align: center;
    margin-left: 16rem;
    height: 36.5rem;
    width: 38rem;
    border-radius: 2rem;
    


    
   

`

export default function LoginBox(){

    {/*#TODO: ESTILIZAR BOX*/}
    return(
    <Box>
        <span className='loginBox'>Logar</span>
        <form>
            <label htmlFor="fEmail">Email</label>
            <input type="text" id="fEmail" placeholder="Digite aqui seu Email cadastrado"/><br/>
            <label htmlFor="fPassword">Senha</label>
             <input type="text" id="fPassword" placeholder="Digite aqui sua senha" /><br/>
             <a href="">Não tem uma conta? <strong>Cadastrar-se</strong></a>
            <input type="submit" value="Entrar"/>
            <input type="submit" value="google"/>
            <input type="submit" value="facebook"/>
        </form>
    </Box>
    )
}