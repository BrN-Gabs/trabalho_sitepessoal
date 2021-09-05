import {Banner, Video} from '../../components/Main'

export const Musicas = () => {
    return (
        <>
            <div>
                <Banner titulo="Músicas" imagem="images/music.png"></Banner>
                <h1 className="text-center">Músicas Favoritas do Momento:</h1>
            </div>
            <br/>
            <div className="container">
                <div className="row">
                    <Video></Video>
                </div>
            </div>
            <br/>
        </>
    )
}