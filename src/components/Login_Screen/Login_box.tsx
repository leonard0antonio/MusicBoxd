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
  padding: 10rem;

  .loginTitle {
    font-size: 48px;
    font-weight: bold;
    color: #000000;
  }

  .input {
    display: flex;
    border-radius: 1rem;

    padding: 1.4rem 6rem;
  }

  .inputTextEmail {
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    bottom: 50.5%;
    left: 29%;
    pointer-events: none;

    img {
      height: 1.2rem;
      margin-right: 0.3rem;
    }
  }

  .inputTextSenha {
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    bottom: 36.5%;
    left: 29%;
    pointer-events: none;

    img {
      height: 1.2rem;
      margin-right: 0.3rem;
    }
  }

  .placeholder {
    position: relative;
    display: flex;
    color: #817f7f;
    left: 4%;
  }

  .placeholderSenha {
    position: relative;
    display: flex;
    color: #817f7f;
    left: 4%;
  }

  label {
    display: flex;
    color: #a2a9c2;
  }
`;
{
  /*#TODO: ESTILIZAR BOX*/
}
export default function LoginBox() {
  return (
    <Box>
      <BoxContent>
        <span className="loginTitle">Entrar</span>
        <form>
          <label htmlFor="fEmail">Email</label>
          <input className="input" type="text" id="fEmail" />
          <div className="inputTextEmail">
            <img src="./arrouba.svg" alt="" />
            <span
              style={{ fontSize: "30px", color: "#585C68", marginBottom: "px" }}
            >
              |
            </span>
            <span className="placeholder">
              Digite aqui seu Email cadastrado
            </span>
          </div>
          <label htmlFor="fPassword">Senha</label>
          <input className="input" type="text" id="fPassword" />
          <div className="inputTextSenha">
            <img src="./arrouba.svg" alt="" />
            <span
              style={{ fontSize: "30px", color: "#585C68", marginBottom: "px" }}
            >
              |
            </span>
            <span className="placeholderSenha">Digite aqui sua senha</span>
          </div>
          <a href="">
            Não tem uma conta? <strong>Cadastrar-se</strong>
          </a>
          <input type="submit" value="Entrar" />
          <input type="submit" value="google" />
          <input type="submit" value="facebook" />
        </form>
      </BoxContent>
    </Box>
  );
}
