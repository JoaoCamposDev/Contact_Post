import React, { useState } from 'react';
import Login     from './Pages/login/login';
import Cadastrar from './Pages/cadastro/cadastro';
import Verificar from './Pages/verificacao/verificacao';
import Redefinir from './Pages/redefinir/redefinir';
import NovaSenha from './Pages/nova_senha/nova_senha';
import Contatos  from './Pages/contatos/contatos';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [animationClass, setAnimationClass] = useState('page-fade-in');

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login goToContatos={() => changePage('contatos')} goToSignUp={() => changePage('cadastro')} goToForgotPassword={() => changePage('redefinir')} />;
      case 'cadastro':
        return <Cadastrar goToVerificar={() => changePage('verificacao')} />;
      case 'verificacao':
        return <Verificar goToSignIn={() => changePage('login')} />;
      case 'redefinir':
        return <Redefinir goToSignIn={() => changePage('login')} goToNovaSenha={() => changePage('nova_senha')} />;
      case 'nova_senha':
        return <NovaSenha goToSignIn={() => changePage('login')} />;
      default:
        return null;
    }
  };

  const changePage = (goToSignUp) => {
    setAnimationClass('page-fade-out');
    setTimeout(() => {
      setCurrentPage(goToSignUp);
      setAnimationClass('page-fade-in');
    }, 500);
  };

  return (
    <div className={`page-container ${animationClass}`}>
      {renderPage()}
    </div>
  );
}

export default App;
