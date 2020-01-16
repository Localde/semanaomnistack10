import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <form>
            <div class="input-block">
              <label htmlFor="github_username">Usuário do GitHub</label>
              <input name="github_username" id="github_username" required/>
            </div>

            <div class="input-block">
              <label htmlFor="techs">Technologias</label>
              <input name="techs" id="techs" required/>
            </div>

            <div className="input-group">
              <div class="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input name="latitude" id="latitude" required/>
              </div>
              <div class="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input name="longitude" id="longitude" required/>
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
