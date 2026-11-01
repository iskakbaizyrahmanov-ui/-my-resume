
function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">
        Обо <span>мне</span>
      </h2>

      <div className="about-card">
        <h3>Немного обо мне</h3>

        <p>
          Меня зовут Байзырахманов Искак.
          Я студент второго курса Кыргызско-Германского
          института прикладной информатики.
          Интересуюсь информационными технологиями,
          программированием и веб-разработкой.
        </p>

        <p>
          Сейчас я развиваю навыки создания
          веб-приложений, изучаю JavaScript и React,
          практикуюсь в HTML и CSS.
          Также знаком с Python, Java и SQL.
        </p>

        <p>
          Моя цель — стать квалифицированным
          Frontend-разработчиком, научиться создавать
          удобные и функциональные веб-приложения
          и постоянно совершенствовать свои знания.
        </p>

        <div className="about-info">
          <div>
            <span>Имя и фамилия</span>
            <strong>Байзырахманов Искак</strong>
          </div>

          <div>
            <span>Город</span>
            <strong>Бишкек, Кыргызстан</strong>
          </div>

          <div>
            <span>Учебное заведение</span>
            <strong>
              Кыргызско-Германский институт
              прикладной информатики
            </strong>
          </div>

          <div>
            <span>Курс</span>
            <strong>2 курс</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
