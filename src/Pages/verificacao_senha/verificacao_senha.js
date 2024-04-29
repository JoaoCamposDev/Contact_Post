import React from 'react';
import './verificacao_senha.css';

function VerificarSenha({goToNovaSenha}){
    return(
            <div className='fundoVerificarSenha'>

                <div className='elementosVerificarSenha'>
                        <h1>Contact Post</h1>
                        <p className='subtitulo'>Um código de verificação foi enviado para o seu E-mail</p>
                    <div className='verificarSenha'>
                        <p>Código de Verificação</p>
                        <input className='inputCodVerificacao' type='text'></input>
                    </div>
                    
                    <button className='btnProsseguir' onClick={goToNovaSenha} >Prosseguir</button>
                    
                </div>


            </div>
    );
}

export default VerificarSenha;