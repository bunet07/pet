import React, { useState } from 'react';
import './App.css';
 
function App() {
 
  const [corPelagem, setCorPelagem] = useState('');
  const [especificacoes, setEspecificacoes] = useState('');
  const [urlImagem, setUrlImagem] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [resultados, setResultados] = useState([]);
 
  const cadastrar = () => {
    const novoCadastro = {
      corPelagem,
      especificacoes,
      urlImagem,
      localizacao,
    };
 
    setResultados([...resultados, novoCadastro]);
 
    setCorPelagem('');
    setEspecificacoes('');
    setUrlImagem('');
    setLocalizacao('');
  };
 
  return (
    <>
      <div className='app'>
        <h1 className='localizar'>LOCALIZAR</h1>
        <p className='COR'>COR DA PELAGEM:</p>
        <input
          type="text"
          className='busca'
          placeholder="Informe as cores de pelagem"
          value={corPelagem}
          onChange={(e) => setCorPelagem(e.target.value)}
        />
        <p className='ESPECIFICAÇÕES'>ESPECIFICAÇÕES:</p>
        <input
          type="text"
          className='busca2'
          placeholder="Informe as especificações"
          value={especificacoes}
          onChange={(e) => setEspecificacoes(e.target.value)}
        />
        <p className='url'>URL IMAGEM DO ANIMAL:</p>
        <input
          type="text"
          className='busca4'
          placeholder="Informe o URL"
          value={urlImagem}
          onChange={(e) => setUrlImagem(e.target.value)}
        />
        <p className='LOCALIZAÇÃO'>LOCALIZAÇÃO:</p>
        <input
          type="text"
          className='busca3'
          placeholder="Informe a localização"
          value={localizacao}
          onChange={(e) => setLocalizacao(e.target.value)}
        />
        <button className='botao' onClick={cadastrar}>
          ➜
        </button>
      </div>
      <div className='resultados'>
        {resultados.map((cadastro, index) => (
          <div key={index}>
            <p>COR DA PELAGEM: {cadastro.corPelagem}</p>
            <p>ESPECIFICAÇÕES: {cadastro.especificacoes}</p>
            <p>URL IMAGEM DO ANIMAL: {cadastro.urlImagem}</p>
            <p>LOCALIZAÇÃO: {cadastro.localizacao}</p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}
 
export default App;