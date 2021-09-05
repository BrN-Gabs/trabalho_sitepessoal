import {Banner, Anime} from '../../components/Main'

export const Animes = () => {
    return (
        <>
            <div>
                <Banner titulo="Animes" imagem="images/animes.png"></Banner>
                <h1 className="text-center">Animes Favoritos:</h1>
            </div>
            <br/>
            <div className="container">
                <div className="row">
                    <Anime></Anime>
                </div>
            </div>
            <br/>
        </>
    )
}