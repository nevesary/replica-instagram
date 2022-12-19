import {useRef, useState} from 'react'
import "./style.css";


function Main() {
  const [show, setShow]=useState('password')
  const inputElement = useRef();
  
  const handleShowPassword = () => {
    inputElement.current.type='text';
    setShow('text')
  }
  const handleHidePassword = () => {
    inputElement.current.type='password'
    setShow('password')
  }

  return (
    <div className="containers">
      <div className="container">
        <div className="Container-itens">
          <div className="titulo">
            <img
              className="imglogo"
              src="../../../img/logo.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="divs">
            <div className="divcamp">
              <input
                className="camp"
                type="email"
                name="email"
                id="placeholder-email"
                placeholder="Telefone, nome de usuário ou email"
              />
            </div>
            <div className="divcamp">
              <input
                className="camp"
                type="password"
                name="password"
                id="placeholder-password"
                placeholder="Senha"
                ref={inputElement}
              />
              {
                show == 'password' 
                  ? <span className="btnmostrar" onClick={handleShowPassword}>mostrar</span>
                  : <span className="btnmostrar" onClick={handleHidePassword}>ocultar</span>


              }

            </div>
          </div>
          <button>Entrar</button>
          <div className="linhas">
            <div className="linha"></div>
            <span className="ou">ou</span>
            <div className="linha"></div>
          </div>
          <div className="linksfaceb" >
            <img src="../../../img/logofacebook_files" alt="" srcset="" />
            <a className="entrarcomf" href="http://">Entrar com o Facebook</a>
          </div>
          <div className="esqsenha">
            <a className="esqsenha" href="">Esqueceu a senha ?</a>
          </div>
        </div>
      </div>
      <div className="container2">
        <div>
          Não tem uma conta ?
          <a className="dif" href="http://">
            {" "}
            <strong>Cadastre-se</strong>{" "}
          </a>
        </div>
      </div>
      <div>
        <h2 className="titulo2">Obtenha o Aplicativo.</h2>
      </div>
      <div className="footer">
        <div className="baixeinst">
          <img src="../../../img/appstore.png" alt="" srcset="" />
          <img src="../../../img/googleplay.png" alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}

export default Main;
