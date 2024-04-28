import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login        from './Pages/login/login';
import Cadastrar    from './Pages/cadastro/cadastro';
import NovaSenha    from './Pages/nova_senha/nova_senha';
import Verificar    from './Pages/verificacao/verificacao';
import Redefinir    from './Pages/redefinir/redefinir';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/login"          component={Login} />
                <Route exact path="/cadastro"       component={Cadastrar} />
                <Route exact path="/nova_senha"     component={NovaSenha} />
                <Route exact path="/verificacao"    component={Verificar} />
                <Route exact path="/redefinir"      component={Redefinir} />
             </Switch>        
        </BrowserRouter>   
    )
}

export default Routes;