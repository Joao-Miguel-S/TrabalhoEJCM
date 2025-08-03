
import{Route, BrowserRouter as Router, Routes} from "react-router-dom"

import Login from '../pages/login'
import Cadastro from '../pages/cadastro'
import ErroPesquisa from '../pages/erroPesquisa'
import Home from "../pages/home"



export default function AppRoutes(){


    return(
        <Router>
            <Routes>
                <Route element={<Login></Login>} path="/"></Route>
                <Route element={<Cadastro></Cadastro>} path="/cadastro"></Route>
                <Route element={<ErroPesquisa></ErroPesquisa>}path="*"></Route>
                <Route element={<Home></Home>} path="/home"></Route>
            </Routes>
        </Router>
    )
}