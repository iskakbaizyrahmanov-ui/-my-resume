
const projects = [
  {
    id: 1,
    number: '01',
    title: 'To-Do List',
    description:
      'Веб-приложение для управления задачами. ' +
      'Позволяет добавлять задачи, отмечать их ' +
      'выполненными и удалять из списка.',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 2,
    number: '02',
    title: 'Личное резюме',
    description:
      'Персональный сайт-портфолио на React. ' +
      'Содержит информацию обо мне, навыки, ' +
      'учебные проекты и контакты.',
    technologies: ['React', 'CSS']
  }
];

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">
        Мои <span>проекты</span>
      </h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className="project-card"
            key={project.id}
          >
            <span className="project-number">
              {project.number}
            </span>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-list">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
