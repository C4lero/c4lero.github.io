// Cada proyecto es un objeto. Para anadir uno, copia un bloque y cambia los datos.
// - featured (opcional): el proyecto destacado que se ve en grande en la estanteria.
// - stats (opcional): cifras clave que se ven en la tarjeta destacada.
// - dialogue: lo que digo yo (en primera persona) al pasar el raton por encima o al abrirlo.
// - details (opcional): texto HTML que se ve al abrir el proyecto.
// - external (opcional): si existe, la tarjeta abre ese enlace en vez del panel.
const projects = [
    {
        id: 'dorothy', year: '2025', title: "Dorothy's Job", featured: true,
        banner: 'assets/banner-project5.png', logo: 'assets/banner-project5-logo.png',
        tags: ['Game', 'Twin-stick Shooter', 'Unreal Engine 5'],
        role: 'Mechanics Designer & Producer',
        stats: [['34.6K+', 'units on Steam'], ['84%', 'positive reviews'], ['40', 'people team']],
        summary: 'Try to beat every level on the clock as Dorothy, the buff maid in this frenetic game mixing cleaning and combat!',
        dialogue: "My pièce de résistance, my most valuable project... (so far). It's out on Steam, and I produced the whole thing!",
        video: 'assets/dorothy/DorothyTrailer.mp4',
        screenshots: ['assets/dorothy/screenshot-dorothy-1.png', 'assets/dorothy/screenshot-dorothy-2.png', 'assets/dorothy/screenshot-dorothy-3.png', 'assets/dorothy/screenshot-dorothy-4.png'],
        links: [
            { text: 'Check on Steam', url: 'https://store.steampowered.com/app/3926730/Dorothys_Job/' },
            // Cuando subas el PDF a assets/dorothy/, descomenta esta linea:
            // { text: 'Game Design Document', url: 'assets/dorothy/DorothysJob_GDD.pdf' },
            { text: 'Full project page', url: 'project-detail-dorothy.html' }
        ],
        details: `<p class="mt-2"><strong>Dorothy's Job</strong> is a 3D game that uses fast-paced combat, procedural level generation and the distinct cleaning mechanic to create a unique gameplay loop.<br>

                            <p class="font-black text-[#D94179]"><strong>Roles: </strong> Mechanics Designer & Game Producer</p>
                            <br>
                            🎮 As a <strong>Mechanics Designer</strong>, I designed and iterated on the game's core gameplay, balance and combat-cleaning loop collaborating closely with programmers and artists to integrate systems consistently with the design vision and create a great experience!<br>
                            <br>
                            🎮 As a <strong>Game Producer</strong>, I coordinated the project workflow for a 20 person core team, which grew to 40 on peak development. I created the game's roadmap, led weekly meetings, managed milestones and scope, supervised documentation and maintained clear communication, ensuring team coordination.</p>
                            I also managed the Steamworks page, configuration and game publishment process.<br>
                            Check out more information about the game clicking the project page or check out the Steam page!
                            <div class="p-4 border-2 border-black bg-black mt-3 space-y-2 text-xs md:text-sm">
                                <p>⭐ <strong>Development:</strong> 10-month development cycle.</p>
                                <p>⭐ <strong>Steam launch:</strong> 34.600+ total units/licenses distributed and over 550 wishlists managed on a 4-week pre-launch campaign.</p>
                                <p>⭐ <strong>Game acceptance:</strong> 84% positive reviews on Steam.</p>
                            </div>`
    },
    {
        id: 'diescend', year: '2026', title: 'Diescend',
        banner: 'assets/banner-project1.png', logo: 'assets/banner-project1-logo.png',
        tags: ['GMTK 26 Jam Submission', 'Strategy with Rogue-like Mechanics', 'Godot'],
        summary: 'Descend the tower betting on dice battles and beating members of your old mafia gang.',
        dialogue: "Dice, a tower and an old mafia gang. I made it for GMTK Jam and it got into the top 1000 of 10.6k entries!",
        details: ''
    },
    {
        id: 'guard-my-hive', year: '2026 (Coming soon)', title: 'Guard My Hive',
        banner: 'assets/banner-project2.png',
        tags: ['Game (Unreleased)', 'Tower Defense with Auto-chess mechanics', 'Unity'],
        summary: 'A game about defending a bee colony. Bzz!!',
        dialogue: "Fresh stock, I haven't even released it yet! Tower defense with auto-chess... and bees. Bzz!",
        details: ''
    },
    {
        id: 'steadicam', year: '2025', title: 'Ready, Steadicam!',
        banner: 'assets/banner-project3.png', logo: 'assets/banner-project3-logo.png',
        tags: ['HackJam 11 MiG 2nd best game award', 'Local Coop Experience', 'Godot'],
        summary: 'Local coop mini game experience about sightseeing and taking photos!',
        dialogue: "A local co-op photo adventure. My team won 2nd best game at Madrid Hackathon 11 with it!",
        details: ''
    },
    {
        id: 'walking-time', year: '2024', title: 'Walking Time',
        banner: 'assets/banner-project4.png', logo: 'assets/banner-project4-logo.png',
        tags: ['Game', 'Educational & Resource management', 'Unity'],
        summary: 'Educational strategic puzzle game about excentric characters exploring an island!',
        dialogue: "An educational puzzle game full of eccentric island explorers. A classic of the shop!",
        details: ''
    },
    {
        id: 'itch', year: '2025', title: 'My Itch.io',
        banner: 'assets/banner-project6.png',
        tags: ['The rest of my Jam Projects'],
        summary: 'Link to my itch.io profile, where all my little projects and jams are stored.',
        dialogue: "Looking for the small stuff? All my jam games live on my itch.io page.",
        external: 'https://c4lipo.itch.io'
    }
];

// Articulos: se ven directamente en la estanteria y en la Article Library.
const articles = [
    {
        title: '"Her Story" and the Power of Non-linear Narrative',
        url: 'article-herstory.html',
        image: 'assets/banner-article-herstory.png',
        tag: 'Game Analysis', readTime: '5 min read',
        summary: "An in-depth analysis of Sam Barlow's FMV masterpiece. Exploring non-linear storytelling, mechanic-narrative integration, and dynamic player engagement.",
        dialogue: "My deep dive into Her Story and non-linear narrative. Five minutes, I promise!"
    }
];

// Ficha de personaje (la usa index-v4.html). Edita aqui tus datos.
const profile = {
    name: 'Juan A. Calero',
    title: 'Game Designer & Producer',
    pitch: "I design core loops and mechanics starting from a game concept, and as a producer I coordinate teams, roadmaps and scope so projects actually ship!",
    roles: [
        { name: 'Game Designer', points: ['Core & game loops', 'Mechanics & balancing', 'Combat & level flow'] },
        { name: 'Game Producer', points: ['Roadmaps & milestones', 'Scope & risk control', 'Scrum / Kanban teams'] }
    ],
    // Los 3 datos rapidos que se ven en la ficha sin expandir: [dato grande, texto pequeno]
    highlights: [['Madrid', 'Open to remote'], ["Master's", 'Game Design · UTAD'], ['4', 'Awards & honors']],
    tools: ['Unreal 5', 'Unity', 'Godot', 'Jira', 'Trello', 'Notion', 'GitHub', 'PlasticSCM'],
    facts: [
        { icon: 'fa-location-dot', text: 'Madrid, Spain · open to relocation & remote' },
        { icon: 'fa-graduation-cap', text: "Master's in Game Design (UTAD) · Bachelor's in Videogame Design & Development (URJC)" },
        { icon: 'fa-language', text: 'Spanish (native) · English (C1) · German (basic)' }
    ],
    awards: [
        { text: 'Finalist, best university game · BIG Conference 2025', note: "Dorothy's Job" },
        { text: '2nd best game · Madrid Hackathon 11', note: 'Ready, Steadicam!' },
        { text: 'Top 1000 of 10.6k entries · GMTK Jam 2026', note: 'Diescend' },
        { text: 'Final degree project awarded with honors' }
    ]
};

function renderArticleList() {
    return `<div class="flex flex-col gap-3 mt-2">` + articles.map(a => `
        <a href="${a.url}" class="rpg-article-item rounded-xl p-3 flex items-center gap-3 group cursor-pointer no-underline relative overflow-hidden">
            <div class="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 bg-black/60 border-2 border-black rounded-lg overflow-hidden flex items-center justify-center">
                <img src="${a.image}" alt="" class="w-full h-full object-cover group-hover:scale-110 transition">
            </div>
            <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between gap-2 mb-1">
                    <span class="font-ui font-black text-xs sm:text-sm text-[#F2CD5C] uppercase tracking-wider">${a.title}</span>
                    <span class="text-[9px] font-bold text-[#D94179] bg-black px-1.5 py-0.5 border border-black rounded uppercase flex-shrink-0">${a.readTime}</span>
                </div>
                <span class="inline-block bg-[#F2A766] text-white text-[10px] font-bold px-2 py-0.5 rounded border border-black uppercase tracking-wider">${a.tag}</span>
                <p class="text-[11px] sm:text-xs text-slate-300 line-clamp-2 leading-relaxed mt-1">${a.summary}</p>
            </div>
        </a>`).join('') + `</div>`;
}

const shopItems = {
    'developer-profile': {
        category: 'Character sheet',
        title: 'Game Designer & Producer',
        imgSrc: 'assets/item-profile.png',
        dialogue: "So, you need someone to design your game... or to keep your team and your project on track? Well, that's exactly what I do!",
        hideBuyButton: true,
        description: `
            <p class="text-[13px] leading-snug">Hi, I'm <strong>Juan A. Calero</strong>. I design core loops and mechanics starting from a game concept, and as a producer I coordinate teams, roadmaps and scope so projects actually ship!</p>

            <div class="grid grid-cols-2 gap-2">
                <div class="rpg-article-item rounded-lg p-2">
                    <div class="flex items-center gap-1.5 mb-1"><img src="assets/item-designer.png" alt="" class="w-6 h-6 object-contain"><span class="font-ui font-black text-[11px] uppercase tracking-wider text-[#F2A766]">Designer</span></div>
                    <ul class="text-[11px] leading-snug text-slate-200 space-y-0.5"><li>• Core & game loops</li><li>• Mechanics & balancing</li><li>• Combat & level flow</li></ul>
                </div>
                <div class="rpg-article-item rounded-lg p-2">
                    <div class="flex items-center gap-1.5 mb-1"><img src="assets/item-producer.png" alt="" class="w-6 h-6 object-contain"><span class="font-ui font-black text-[11px] uppercase tracking-wider text-[#F2A766]">Producer</span></div>
                    <ul class="text-[11px] leading-snug text-slate-200 space-y-0.5"><li>• Roadmaps & milestones</li><li>• Scope & risk control</li><li>• Scrum / Kanban teams</li></ul>
                </div>
            </div>

            <div class="flex flex-wrap gap-1 text-[10px] font-bold">
                ${['Unreal 5', 'Unity', 'Godot', 'Jira', 'Trello', 'Notion', 'GitHub', 'PlasticSCM'].map(t => `<span class="bg-black/50 border border-[#6b4326] text-[#F2CD5C] px-1.5 py-0.5 rounded">${t}</span>`).join('')}
            </div>

            <ul class="text-[12px] leading-snug space-y-1.5">
                <li class="flex gap-2"><i class="fa-solid fa-location-dot text-[#F2CD5C] w-4 mt-0.5"></i><span>Madrid, Spain · open to relocation & remote</span></li>
                <li class="flex gap-2"><i class="fa-solid fa-graduation-cap text-[#F2CD5C] w-4 mt-0.5"></i><span>Master's in Game Design (UTAD) · Bachelor's in Videogame Design & Development (URJC)</span></li>
                <li class="flex gap-2"><i class="fa-solid fa-language text-[#F2CD5C] w-4 mt-0.5"></i><span>Spanish (native) · English (C1) · German (basic)</span></li>
            </ul>

            <div>
                <p class="font-ui font-black text-[#F2A766] uppercase text-[11px] tracking-wider mb-1">Honors & awards</p>
                <ul class="text-[12px] leading-snug space-y-1">
                    <li>🏆 Finalist, best university game · BIG Conference 2025 <span class="text-slate-400">(Dorothy's Job)</span></li>
                    <li>🥈 2nd best game · Madrid Hackathon 11 <span class="text-slate-400">(Ready, Steadicam!)</span></li>
                    <li>⭐ Top 1000 of 10.6k entries · GMTK Jam 2026 <span class="text-slate-400">(Diescend)</span></li>
                    <li>🎓 Final degree project awarded with honors</li>
                </ul>
            </div>
        `
    },
    'projects-log': {
        category: 'All my projects and games together',
        title: 'Project Vault',
        imgSrc: 'assets/item-projectvault.png',
        dialogue: "Ah yes, the vault. Everything I've worked on is stored here. Start with the first one, it's my favourite!",
        hideBuyButton: true,
        get description() { return renderProjectList(); }
    },
    'articles': {
        category: 'Publications',
        title: 'Article Library',
        imgSrc: 'assets/item-articles.png',
        dialogue: "Here's everything I've written about videogames. Have a look, they're a good read!",
        hideBuyButton: true,
        get description() { return renderArticleList(); }
    }
};
