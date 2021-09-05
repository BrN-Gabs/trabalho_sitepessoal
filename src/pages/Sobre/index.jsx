import {Banner} from '../../components/Main'

export const Sobre = () => {
    return(
        <>
            <Banner titulo="Sobre o Bruno" imagem="images/sobre.png"></Banner>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-4 mb-4">
                        <img src="images/bruno.png" alt="Bruno Gabriel da Silva" className="w-100"/>
                    </div>
                    <div className="col-8 mt-4">
                        <h4>Olá! Meu nome completo é Bruno Gabriel da Silva.</h4>
                        <p>Sou aluno do curso de Sistemas para Internet da Faculdade Alfa em Umuarama.</p>
                
                        <p>Atuo hoje como Auxiliar de Cadastro na empresa da Gazin na cidade de Douradina no Paraná.</p>

                        <p>Atualmente estou cursando o quarto período da faculdade na parte noturna do dia e na parte da manhã e a tarde estou trabalhando.</p>

                        <p>Meus Hobbies em períodos livres são: jogar com meus amigos, assitir algumas séries e animes e ouvir umas boas músicas.</p>
                    </div>
                </div>
            </div>
        </>
    )
}