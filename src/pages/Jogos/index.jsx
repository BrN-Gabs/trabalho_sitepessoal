import {Banner, Jogo} from '../../components/Main'

export const Jogos = () => {
    return (
        <>
            <div>
                <Banner titulo="Jogos" imagem="images/jogos.png"></Banner>
                <h1 className="text-center">Jogos Favoritos:</h1>
            </div>
            <br/>
            <div className="container">
                <div className="row">
                    <Jogo></Jogo>
                </div>
            </div>
            <br/>
        </>
    )
}