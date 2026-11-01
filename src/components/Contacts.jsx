
function Contacts() {
  return (
    <section id="contacts" className="section">
      <h2 className="section-title">
        Мои <span>контакты</span>
      </h2>

      <div className="contact-card">
        <h3>Давайте сотрудничать!</h3>

        <p>
          Я открыт к новым знаниям, учебным проектам
          и возможностям для профессионального роста.
        </p>

        <div className="contact-links">
          <a href="mailto:iskakbaizyrahmanov@gmail.com">
            <span>✉️</span>
            iskakbaizyrahmanov@gmail.com
          </a>

          <a
            href="https://github.com/iskakbaizyrahmanov-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>💻</span>
            github.com/iskakbaizyrahmanov-ui
          </a>

          <div className="contact-location">
            <span>📍</span>
            Бишкек, Кыргызстан
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
