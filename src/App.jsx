
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

import './App.css';

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <section className="hero" id="home">
          <div className="hero-text">
            <p className="hello">ПРИВЕТ, МЕНЯ ЗОВУТ</p>

            <h1>
              Байзырахманов <span>Искак</span>
            </h1>

            <h2>Начинающий Frontend-разработчик</h2>

            <p className="hero-description">
              Студент 2 курса Кыргызско-Германского
              института прикладной информатики.
              Изучаю современные веб-технологии,
              программирование и создание
              удобных пользовательских интерфейсов.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary">
                Мои проекты
              </a>

              <a href="#contacts" className="btn secondary">
                Связаться со мной
              </a>
            </div>
          </div>

          <div className="avatar-wrapper">
            <div className="avatar">БИ</div>
            <p>Frontend Developer</p>
          </div>
        </section>

        <About />
        <Skills />
        <Projects />
        <Contacts />
      </main>

      <footer className="footer">
        <p>
          © 2026 Байзырахманов Искак.
          Создано с помощью React.
        </p>
      </footer>
    </>
  );
}

export default App;
