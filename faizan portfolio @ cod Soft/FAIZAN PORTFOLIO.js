var typed = new Typed(".text", {
  strings: ["Frontend Developer"], 
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

const projects = [
{
    title: "Project Title 1",
    description: "Brief description of Project 1.",
    icon: "🛠️",
    imgSrc: "project1.jpg",
    link: "#"
},
{
    title: "Project Title 2",
    description: "Brief description of Project 2.",
    icon: "🔧",
    imgSrc: "project2.jpg",
    link: "#"
},
{
    title: "Project Title 3",
    description: "Brief description of Project 3.",
    icon: "⚙️",
    imgSrc: "project3.jpg",
    link: "#"
}
];

function createProjectBox(project) {
return `
    <div class="project-box">
        <div class="project-overlay">
            <a href="${project.link}">View More</a>
        </div>
        <img src="${project.imgSrc}" alt="${project.title}">
        <div class="project-content">
            <i class="icon">${project.icon}</i>
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <a href="${project.link}" class="read">Read More</a>
        </div>
    </div>
`;
}

function populateProjects() {
const projectList = document.getElementById('project-list');
projectList.innerHTML = projects.map(createProjectBox).join('');
}

document.addEventListener('DOMContentLoaded', populateProjects);

document.addEventListener('DOMContentLoaded', () => {
const technicalBars = document.querySelectorAll('.progress-line');
const radialBars = document.querySelectorAll('.radial-bars');

const animateProgressBars = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            technicalBars.forEach(bar => {
                bar.classList.add('animate');
            });
            
            radialBars.forEach(radial => {
                const paths = radial.querySelectorAll('.path');
                paths.forEach(path => {
                    const radius = path.r.baseVal.value;
                    const circumference = 2 * Math.PI * radius;
                    path.style.strokeDasharray = `${circumference}px`;
                    path.style.strokeDashoffset = `${circumference}px`;
                    
                    setTimeout(() => {
                        path.style.strokeDashoffset = '0';
                    }, 100);
                });
            });

            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(animateProgressBars, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
});

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    observer.observe(skillsSection);
}
});

document.addEventListener('DOMContentLoaded', () => {
const technicalBars = document.querySelectorAll('.progress-line');

const animateProgressBars = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            technicalBars.forEach(bar => {
                bar.classList.add('animate');
            });
            
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(animateProgressBars, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
});

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    observer.observe(skillsSection);
}
});

document.addEventListener("DOMContentLoaded", function() {
const progressBars = document.querySelectorAll(".progress");

progressBars.forEach(progress => {
    const percentage = progress.getAttribute("data-percentage");

    if (percentage) {
        const barSpan = progress.querySelector(".bar span");
        barSpan.style.width = percentage;
        barSpan.textContent = percentage;
    }
});
});
