import emailjs from "emailjs-com";
import {Banner} from "../../components/Main"
import { AiFillInstagram, AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";  

export function Contato() {

    function enviarEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmailMessage', 'template_8jl0cch', e.target, 'user_FxyIOIoulZf4dPssDCjE9')
        .then((result) => {
            alert("Mensagem enviada com sucesso!");
            
        }, (error) => {
            alert(error.message)
        });
        e.target.reset()
    }

    return(
        <div>
            <Banner titulo="Contato" imagem="images/contato.png"></Banner>
            <div className="container">
                <br />
                <h2 className="text-center">Entre em Contato</h2>
                <br />
                <div className="row">
                    <div className="col-12 col-md-10">
                        <form onSubmit={enviarEmail}>
                            <div className="row">
                                <div className="col-lg-8 col-sm-12 form-group mx-auto">
                                    <p className="textoEmail">Preencha o formulário abaixo ou envie um e-mail para: <a href="mailto:brunogabriel58@outlook.com" title="E-mail">brunogabriel58@outlook.com</a></p>
                                    <label>Nome:</label>
                                    <input type="text" autoFocus className="form-control" required placeholder="Digite seu nome" name="name"/>
                                </div>
                                <div className="col-lg-8 col-sm-12 form-group mx-auto">
                                    <label>E-mail:</label>
                                    <input type="email" className="form-control" required placeholder="Digite seu e-mail" name="email"/>
                                </div>
                                <div className="col-lg-8 col-sm-12 form-group mx-auto">
                                    <label>Mensagem:</label>
                                    <textarea className="form-control" cols="30" rows="8" required placeholder="Digite sua mensagem" name="message"></textarea>
                                </div>
                                <div className="col-lg-8 col-sm-12 mx-auto send">
                                    <input type="submit" className="btn btn-info" value="Enviar mensagem"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-md-2">
                        <h3>Redes Sociais:</h3>
                        <p>
                            <AiFillInstagram size="25"></AiFillInstagram>
                            <a href="https://www.instagram.com/bruninhogabs/" className="icons" title="Instagram" target="_blank">@bruninhogabs</a>
                            <br/>
                            <AiFillTwitterCircle size="25"></AiFillTwitterCircle>
                            <a href="https://twitter.com/BrNGabs" className="icons" title="Twitter" target="_blank">@BrNGabs</a>
                            <br/>
                            <AiFillGithub size="25"></AiFillGithub>
                            <a href="https://github.com/BrN-Gabs" className="icons" title="GitHub" target="_blank">@BrN-Gabs</a>
                        </p>
                    </div>    
                </div>    
                <br />
            </div>
        </div>
    )
}  


    



