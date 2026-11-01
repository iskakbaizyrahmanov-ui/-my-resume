
const skills = [
  {
    name: 'HTML',
    icon: '🌐',
    description: 'Структура веб-страниц'
  },
  {
    name: 'CSS',
    icon: '🎨',
    description: 'Стилизация и адаптивная вёрстка'
  },
  {
    name: 'JavaScript',
    icon: '⚡',
    description: 'Интерактивность веб-сайтов'
  },
  {
    name: 'React',
    icon: '⚛️',
    description: 'Создание компонентов интерфейса'
  },
  {
    name: 'Python',
    icon: '🐍',
    description: 'Программирование на Python'
  },
  {
    name: 'SQL',
    icon: '🗄️',
    description: 'Работа с базами данных'
  },
  {
    name: 'Java',
    icon: '☕',
    description: 'Объектно-ориентированное программирование'
  },
  {
    name: 'GitHub',
    icon: '💻',
    description: 'Хранение проектов и работа с Git'
  }
];

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">
        Мои <span>навыки</span>
      </h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.name}>
            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
