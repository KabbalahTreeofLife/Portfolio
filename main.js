document.addEventListener('DOMContentLoaded', () => {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 90, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#cba6f7" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#cba6f7", "opacity": 0.3, "width": 1.5 },
            "move": { "enable": true, "speed": 1.2 }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "grab" } },
            "modes": { "grab": { "distance": 200, "line_linked": { "opacity": 0.6 } } }
        }
    });

    window.addEventListener('scroll', () => {
        const nav = document.getElementById('main-nav');
        if (nav) {
            nav.style.padding = window.scrollY > 50 ? '15px 0' : '20px 0';
            nav.style.background = window.scrollY > 50 ? 'rgba(11, 11, 16, 0.95)' : 'rgba(11, 11, 16, 0.8)';
        }
    });

    document.querySelectorAll('.smooth-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });

    fetchRepos();
});

async function fetchRepos() {
    const username = 'KabbalahTreeofLife';
    const grid = document.getElementById('repo-grid');
    if (!grid) return;

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        let repos = await response.json();

        repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

        const finalDisplay = repos.slice(0, 6);

        grid.innerHTML = '';
        finalDisplay.forEach((repo, index) => {
            const card = document.createElement('a');
            card.href = repo.html_url;
            card.target = "_blank";
            card.className = 'repo-card';
            card.style.animation = `fadeIn 0.6s ease forwards ${index * 0.1}s`;
            card.innerHTML = `
                <div>
                    <span class="repo-name">◈ ${repo.name}</span>
                    <p class="repo-desc">${repo.description || "Project artifacts currently being cataloged."}</p>
                </div>
                <div class="repo-meta">
                    <span style="color:var(--blue)">${repo.language || "Secret"}</span>
                    <span>★ ${repo.stargazers_count}</span>
                </div>`;
            grid.appendChild(card);
        });
    } catch (e) {
        grid.innerHTML = '<p>The archives are currently sealed.</p>';
    }
}
