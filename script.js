// Initialize Lucide icons
lucide.createIcons();

// Data
const journeyData = [
    { year: 2020, title: "Senior Developer @ Tech Corp", description: "Led development of enterprise applications and mentored junior developers" },
    { year: 2021, title: "Tech Lead @ Innovation Inc", description: "Spearheaded digital transformation initiatives and cloud migration" },
    { year: 2022, title: "Principal Engineer @ Future Tech", description: "Architected scalable solutions and established technical standards" },
    { year: 2023, title: "CTO @ Tech Startup", description: "Leading technical strategy and building innovative products" }
];

const projectsData = [
    {
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with React and Node.js",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
        tech: ["React", "Node.js", "MongoDB"],
        github: "https://github.com/onkar/ecommerce-platform"
    },
    {
        title: "AI Chat Application",
        description: "Real-time chat app with AI integration",
        image: "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80&w=800",
        tech: ["Python", "TensorFlow", "WebSocket"],
        github: "https://github.com/onkar/ai-chat-app"
    },
    {
        title: "Blockchain Explorer",
        description: "Cryptocurrency blockchain explorer with real-time updates",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
        tech: ["Web3.js", "React", "GraphQL"],
        github: "https://github.com/onkar/blockchain-explorer"
    }
];

const skillsData = [
    { name: "Frontend Development", icon: "layout", level: 90 },
    { name: "Backend Development", icon: "server", level: 85 },
    { name: "Database Management", icon: "database", level: 80 },
    { name: "DevOps", icon: "terminal", level: 75 },
    { name: "Web3 Development", icon: "globe", level: 70 }
];

// Populate sections
function populateJourney() {
    const timeline = document.getElementById('journey-timeline');
    journeyData.forEach(item => {
        timeline.innerHTML += `
            <div class="flex items-start space-x-4">
                <div class="w-24 flex-shrink-0 text-blue-400 font-bold">${item.year}</div>
                <div class="flex-grow p-6 bg-gray-800 rounded-lg transform hover:scale-102 transition-transform">
                    <h3 class="text-xl font-semibold mb-2">${item.title}</h3>
                    <p class="text-gray-400">${item.description}</p>
                </div>
            </div>
        `;
    });
}

function populateProjects() {
    const grid = document.getElementById('projects-grid');
    projectsData.forEach(project => {
        grid.innerHTML += `
            <div class="project-card bg-gray-900 rounded-lg overflow-hidden">
                <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
                    <p class="text-gray-400 mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.tech.map(tech => `
                            <span class="px-3 py-1 bg-blue-900 rounded-full text-sm">${tech}</span>
                        `).join('')}
                    </div>
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" 
                       class="inline-flex items-center text-blue-400 hover:text-blue-300">
                        <i data-lucide="github" class="w-4 h-4 mr-2"></i>
                        View on GitHub
                    </a>
                </div>
            </div>
        `;
    });
    lucide.createIcons();
}

function populateSkills() {
    const grid = document.getElementById('skills-grid');
    skillsData.forEach(skill => {
        grid.innerHTML += `
            <div class="bg-gray-800 p-6 rounded-lg">
                <div class="flex items-center mb-4">
                    <i data-lucide="${skill.icon}" class="w-6 h-6"></i>
                    <h3 class="text-xl font-semibold ml-3">${skill.name}</h3>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2.5">
                    <div class="skill-bar bg-blue-500 h-2.5 rounded-full"
                         data-width="${skill.level}%"></div>
                </div>
            </div>
        `;
    });
    lucide.createIcons();
}

// Intersection Observer for animations
const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
        }
    })
}