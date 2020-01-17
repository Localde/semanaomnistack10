import React, { useState, useEffect } from 'react';
import api from './sevices/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    ) 
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
    
    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    })
    console.log(response.data);
  }

  return (
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <form onSubmit={handleAddDev}>
            <div className="input-block">
              <label htmlFor="github_username">Usuário do GitHub</label>
              <input 
                name="github_username" 
                id="github_username" 
                required
                value={github_username}
                onChange={e => setGithubUsername(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="techs">Technologias</label>
              <input 
                name="techs" 
                id="techs" 
                required
                value={techs}
                onChange={e => setTechs(e.target.value)}
                />
            </div>

            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input 
                  type="number" 
                  name="latitude" 
                  id="latitude" 
                  required 
                  value={latitude}
                  onChange={e => setLatitude(e.target.value)}
                />
              </div>
              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input
                 type="number" 
                 name="longitude" 
                 id="longitude" 
                 required 
                 value={longitude}
                 onChange={e => setLongitude(e.target.value)}
                 />
              </div>
            </div>
            <button type="submit">Salvar</button>
          </form>
        </aside>
        <main>
          <ul>
            <li className="dev-item">
              <header>
                <img src="https://avatars0.githubusercontent.com/u/32994385?s=400&u=060152207e08b4c3ec0429d664f5f02f58a59fb1&v=4" alt="Ollywer Dyego"/>
                <div className="user-info">
                  <strong>Ollywer Dyego</strong>
                  <span>Python</span>
                </div>
              </header>
              <p>Nada a declarar</p>
              <a href="https://github.com/localde">Acessar perfil no Github</a>
            </li>
            <li className="dev-item">
              <header>
                <img src="https://avatars0.githubusercontent.com/u/32994385?s=400&u=060152207e08b4c3ec0429d664f5f02f58a59fb1&v=4" alt="Ollywer Dyego"/>
                <div className="user-info">
                  <strong>Ollywer Dyego</strong>
                  <span>Python</span>
                </div>
              </header>
              <p>Nada a declarar</p>
              <a href="https://github.com/localde">Acessar perfil no Github</a>
            </li>
            <li className="dev-item">
              <header>
                <img src="https://avatars0.githubusercontent.com/u/32994385?s=400&u=060152207e08b4c3ec0429d664f5f02f58a59fb1&v=4" alt="Ollywer Dyego"/>
                <div className="user-info">
                  <strong>Ollywer Dyego</strong>
                  <span>Python</span>
                </div>
              </header>
              <p>Nada a declarar</p>
              <a href="https://github.com/localde">Acessar perfil no Github</a>
            </li>
            <li className="dev-item">
              <header>
                <img src="https://avatars0.githubusercontent.com/u/32994385?s=400&u=060152207e08b4c3ec0429d664f5f02f58a59fb1&v=4" alt="Ollywer Dyego"/>
                <div className="user-info">
                  <strong>Ollywer Dyego</strong>
                  <span>Python</span>
                </div>
              </header>
              <p>Nada a declarar</p>
              <a href="https://github.com/localde">Acessar perfil no Github</a>
            </li>
          </ul>
        </main>
      </div>
    );
}

export default App;
