import {IoMdAdd} from "react-icons/io";
import {IconesHome} from "../../components/Main"

export const Home = () => {
    return(
        <>  
            <div id="bannerHome">
                <div className="container">
                    <div className="row">
                        <div className="col-6 tituloHome">
                            <h1>Aluno e Desenvolvedor Junior</h1>
                            <br/>
                            <p>
                                <a href="/sobre" title="Sobre" className="btn btn-info btnsobre">
                                    <IoMdAdd size="40"></IoMdAdd>
                                    Sobre o Bruno Gabriel
                                </a>
                            </p>
                        </div>
                        <div className="col-6 note">
                            <img src="images/notebook.png" alt="Notebook" width="100%" height="420"/>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <h3 className="text-center">Linguagens Favoritas:</h3>
            <div className="container mt-5">
                <div className="row">
                    <IconesHome></IconesHome>
                </div>
            </div>
        </>
    )
}