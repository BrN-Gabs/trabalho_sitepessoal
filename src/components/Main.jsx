import {Link} from "react-router-dom"
import animes from '../dados/animes'
import videos from '../dados/videos'
import jogos from '../dados/jogos'
import icones from '../dados/icones'



export const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-black">
                <Link to={'/'} className="navbar-brand">
                    <img height="60" width="100%" src="images/logo.png" alt="Bruno Gabriel" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon" />
                </button>

                <div id="menu" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={'/home'} className="nav-link">Home</Link>  
                        </li>
                        <li className="nav-item">
                            <Link to={'/jogos'} className="nav-link">Jogos</Link>  
                        </li>
                        <li className="nav-item">
                            <Link to={'/animes'} className="nav-link">Animes</Link>  
                        </li>
                        <li className="nav-item">
                            <Link to={'/musicas'} className="nav-link">Músicas</Link>  
                        </li>
                        <li className="nav-item">
                            <Link to={'/sobre'} className="nav-link">Sobre</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/contato'} className="nav-link">Contato</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export const Footer = () => {
    return (
        <>
            <footer className="text-center bg-black">
                <img src="images/.png" alt="" />
                <p>Desenvolvido por Bruno Gabriel da Silva</p>
            </footer>
        </>
    )
}

export const Banner = props => {
    return(
        <>
            <div id="banner">
                <img src={props.imagem} alt={props.titulo} title={props.titulo} className="w-100" height="100%" />
            </div>
        </>
    )
}

export const Video = () => {
    return(
        <>
            {getVideos(videos)}
        </>
    )
}

export const Anime = () => {
    return(
        <>
            {getImagens(animes)}
        </>
    )
}

export const Jogo = () => {
    return(
        <>
            {getImagens(jogos)}
        </>
    )
}    

export const IconesHome = () => {
    return(
        <>
            {getIconesHome(icones)}
        </>
    )
}    
    

function getVideos(videos) {
    return videos.map(dados=>{
        return <div className="col-12 col-md-4">
            <div className="card">
                <iframe width="100%" height="320" src={`https://youtube.com/embed/${dados.codigo}`}></iframe>
                <div className="card-body">
                    <h3>{dados.nome}</h3>
                </div>
            </div>
        </div>
    })
}

function getImagens(imagens) {
    return imagens.map(dados=>{
        return <div className="col-12 col-md-4">
            <div className="card imagens">
                <a href={dados.link} target="_blank"><img width="100%" height="320" src={dados.imagem}></img></a>
                <div className="card-body">
                    <a href={dados.link}><h3 className="text-center">{dados.nome}</h3></a>
                </div>
            </div>
        </div>
    })
}  

function getIconesHome(icones) {
    return icones.map(dados=>{
        return <div className="col-12 col-md-4">
            <div className="card icones">
                <a href={dados.link} target="_blank" className="text-center nameIcone">{dados.icone}<br/>{dados.nome}</a>
                <div className="card-body iconesText">
                    <p className="text-center">{dados.texto}</p>
                </div>
            </div>
        </div>
    })
}  
