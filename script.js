// Colores para el degradado dinámico
const pastelColors = ['#f598bf', '#fcc7de', '#f32880'];

// Rotar el gradiente
function changeGradient() {
    pastelColors.push(pastelColors.shift());
    document.body.style.background = `linear-gradient(45deg, ${pastelColors[0]}, ${pastelColors[1]}, ${pastelColors[2]})`;
}

// Habilidades
const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Python', 'Diseño Responsivo', 'Git'];

// Proyectos
const projects = [
    {
        title: 'Librería',
        description: 'Gestión de reservas y devoluciones de libros.',
        repo: 'https://github.com/Adalinee/Libreria',
        technologies: ['PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL']
    },
    {
        title: 'Encriptador de Texto',
        description: 'Herramienta para encriptar y desencriptar texto.',
        repo: 'https://github.com/Adalinee/encriptadorDeTexto2024',
        technologies: ['JavaScript', 'HTML', 'CSS']
    },
    {
        title: 'Inventario de Supermercado',
        description: 'CRUD para gestionar inventarios de comida.',
        repo: 'https://github.com/Adalinee/Inventario-CRUD',
        technologies: ['Vue', 'PHP', 'JavaScript', 'HTML']
    }
];

// Renderizar habilidades como carrusel
function renderSkills() {
    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = skills.map(skill =>
        `<span>${skill}</span>`
    ).join('');

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // Configurar desplazamiento
    let scrollPosition = 0;

    // Función para desplazar hacia la izquierda
    prevBtn.addEventListener('click', () => {
        scrollPosition -= 170; // Ajusta según el tamaño de las cartas
        if (scrollPosition < 0) scrollPosition = 0; // No desplazarse más allá del inicio
        skillsContainer.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    });

    // Función para desplazar hacia la derecha
    nextBtn.addEventListener('click', () => {
        scrollPosition += 170;
        if (scrollPosition > skillsContainer.scrollWidth - skillsContainer.offsetWidth) {
            scrollPosition = skillsContainer.scrollWidth - skillsContainer.offsetWidth; // No desplazarse más allá del final
        }
        skillsContainer.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    });

    // Desplazamiento automático
    setInterval(() => {
        scrollPosition += 170;
        if (scrollPosition >= skillsContainer.scrollWidth - skillsContainer.offsetWidth) {
            scrollPosition = 0;
        }
        skillsContainer.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }, 2000);
}


// Renderizar proyectos
function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = projects.map(project => `
        <div class="project">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <strong>Tecnologías:</strong> ${project.technologies.join(', ')}
            <p><a href="${project.repo}" target="_blank">Ver repositorio</a></p>
        </div>
    `).join('');
}

// Inicializar página
function initPage() {
    renderSkills();
    renderProjects();
    setInterval(changeGradient, 15000); // Cambiar gradiente cada 15 segundos
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', initPage);
