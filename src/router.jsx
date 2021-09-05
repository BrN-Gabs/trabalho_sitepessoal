import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Header, Footer} from './components/Main'
import {Home} from './pages/Home'
import {Jogos} from './pages/Jogos'
import {Animes} from './pages/Animes'
import {Musicas} from './pages/Musicas'
import {Contato} from './pages/Contato'
import {Sobre} from './pages/Sobre'

export const Router = () => {
    return (
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route path={['/', '/home']} exact component={Home}></Route>
                <Route path='/jogos' component={Jogos}></Route>
                <Route path='/animes' component={Animes}></Route>
                <Route path='/musicas' component={Musicas}></Route>
                <Route path='/contato' component={Contato}></Route>
                <Route path='/sobre' component={Sobre}></Route>
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
    )
}