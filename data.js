// Cada proyecto es un objeto. Para anadir uno, copia un bloque y cambia los datos.
// - details (opcional): texto HTML que se ve al abrir el proyecto.
// - external (opcional): si existe, la tarjeta abre ese enlace en vez del panel.
const projects = [
    {
        id: 'dorothy', year: '2025', title: "Dorothy's Job",
        banner: 'assets/banner-project5.png', logo: 'assets/banner-project5-logo.png',
        tags: ['Game', 'Twin-stick Shooter', 'Unreal Engine 5'],
        summary: 'Try to beat every level on the clock as Dorothy, the buff maid in this frenetic game mixing cleaning and combat!',
        dialogue: "Ah sure, the pièce de résistance, his most valuable project... (yet)",
        video: 'assets/dorothy/DorothyTrailer.mp4',
        screenshots: ['assets/dorothy/screenshot-dorothy-1.png', 'assets/dorothy/screenshot-dorothy-2.png', 'assets/dorothy/screenshot-dorothy-3.png', 'assets/dorothy/screenshot-dorothy-4.png'],
        links: [
            { text: 'Check on Steam', url: 'https://store.steampowered.com/app/3926730/Dorothys_Job/' },
            { text: 'Game Design Document', url: 'assets/dorothy/DorothysJob_GDD.pdf' },
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
        details: ''
    },
    {
        id: 'guard-my-hive', year: '2026 (Coming soon)', title: 'Guard My Hive',
        banner: 'assets/banner-project2.png',
        tags: ['Game (Unreleased)', 'Tower Defense with Auto-chess mechanics', 'Unity'],
        summary: 'A game about defending a bee colony. Bzz!!',
        details: ''
    },
    {
        id: 'steadicam', year: '2025', title: 'Ready, Steadicam!',
        banner: 'assets/banner-project3.png', logo: 'assets/banner-project3-logo.png',
        tags: ['HackJam 11 MiG 2nd best game award', 'Local Coop Experience', 'Godot'],
        summary: 'Local coop mini game experience about sightseeing and taking photos!',
        details: ''
    },
    {
        id: 'walking-time', year: '2024', title: 'Walking Time',
        banner: 'assets/banner-project4.png', logo: 'assets/banner-project4-logo.png',
        tags: ['Game', 'Educational & Resource management', 'Unity'],
        summary: 'Educational strategic puzzle game about excentric characters exploring an island!',
        details: ''
    },
    {
        id: 'itch', year: '2025', title: 'My Itch.io',
        banner: 'assets/banner-project6.png',
        tags: ['The rest of my Jam Projects'],
        summary: 'Link to my itch.io profile, where all my little projects and jams are stored.',
        external: 'https://c4lipo.itch.io'
    }
];

const shopItems = {
            'developer-profile': {
        category: 'Profile Information',
        title: 'Game Designer | Game Producer',
        imgSrc: 'assets/item-profile.png',
        dialogue: "So, you need someone to design your game... Or maybe to help organize your team? Or project? In that case, I know a guy...",
        hideBuyButton: true,
        description: `
                            <p class="text-base">Hi, I'm Juan A. <strong>Calero</strong>. I have taken roles in projects as both Game Designer, creating full core loops and game loops from game concept ideas, as well as a Game Producer, coordinating teams and adjusting pipelines, schedules and roadmaps to ensure feasibility of the projects I take part in!</p>
                            <p class="font-black text-[#F2A766] mt-4 mb-3 uppercase text-lg tracking-wider">My roles (click to open):</p>
                            <div class="flex flex-col gap-3 mt-2">
                                <details class="rpg-article-item rounded-xl p-3 group">
                                    <summary class="flex items-center gap-3 cursor-pointer list-none">
                                        <img src="assets/item-designer.png" alt="Game Designer" class="item-sprite-idle w-16 h-16 object-contain">
                                        <span class="flex-1"><span class="font-ui font-black text-sm uppercase tracking-wider text-[#F2A766] block">Game Designer</span><span class="text-xs text-slate-300">Systems, balancing and flow</span></span>
                                        <i class="fa-solid fa-chevron-down text-[#F2CD5C] transition group-open:rotate-180"></i>
                                    </summary>
                                    <ul class="mt-3 space-y-2 text-sm text-slate-200">
                                        <li>• Core loops and game loops built from a game concept.</li>
                                        <li>• Mechanics design, balancing and iteration with programmers and artists.</li>
                                        <li>• Combat, progression and level-flow design.</li>
                                    </ul>
                                </details>
                                <details class="rpg-article-item rounded-xl p-3 group">
                                    <summary class="flex items-center gap-3 cursor-pointer list-none">
                                        <img src="assets/item-producer.png" alt="Game Producer" class="item-sprite-idle w-16 h-16 object-contain">
                                        <span class="flex-1"><span class="font-ui font-black text-sm uppercase tracking-wider text-[#F2A766] block">Game Producer</span><span class="text-xs text-slate-300">Agile, roadmaps and delivery</span></span>
                                        <i class="fa-solid fa-chevron-down text-[#F2CD5C] transition group-open:rotate-180"></i>
                                    </summary>
                                    <ul class="mt-3 space-y-2 text-sm text-slate-200">
                                        <li>• Milestone planning and production roadmaps.</li>
                                        <li>• Risk control and scope management.</li>
                                        <li>• Coordination of art, programming and audio teams (Scrum / Kanban).</li>
                                        <li>• <strong>Tools:</strong> Jira, Trello, Notion, GitHub, PlasticSCM.</li>
                                    </ul>
                                </details>
                            </div>
                            <br>
                            <p class="font-black text-[#F2A766] mt-4 mb-3 uppercase text-lg tracking-wider">General information:</p>
                            <p class="text-base">Currently based in Madrid (Spain) but open to realocation as well as full remote work.<br>
                            <br>
                            <strong>Education:</strong><br>
                            • Master's in Game Design, UTAD. Madrid.<br>
                            • Bachelor's Degree in Videogame Design and Development, URJC. Madrid.<br>
                            <br>
                            <strong>Languages:</strong><br>
                            • Spanish (Native)<br>
                            • English (Advanced C1)<br>
                            • German (Basic)<br>
                            <br>
                            <strong>Honors & Awards:</strong><br>
                            • Finalist for best university game at BIG Conference 2025 for "Dorothy's Job".<br>
                            • 2nd best game at Madrid Hackathon 11 for "Ready, Steadicam!".<br>
                            • Awarded with honors for my final degree project "Design and Development of a Prototype videogame focused in crisis management envirnments".<br>
                            • Top 1000 rank from 10.6k entries in GMTK26 game jam for “Diescend”.<br>
                            </p>

                        `
    },
            'projects-log': {
                category: 'All my projects and games together',
                title: 'Project Vault',
                imgSrc: 'assets/item-projectvault.png',
                dialogue: "Ah yes, the vault. Everything Calero worked on is stored here. Start with the first one, it's his favourite!",
                hideBuyButton: true,
                get description() { return renderProjectList(); }
            },
            'articles': {
        category: 'Publications',
        title: 'Article Library',
        imgSrc: 'assets/item-articles.png',
        dialogue: "Here I store all the writings about videogames. Have a look, they're a good read!",
        hideBuyButton: true,
        description: `
                            <div class="flex flex-col gap-3 mt-2">
                               <a href="article-herstory.html" class="rpg-article-item rounded-xl p-3 flex items-center gap-3 group cursor-pointer no-underline relative overflow-hidden">
                                    <div class="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 bg-black/60 border-2 border-black rounded-lg p-1 flex items-center justify-center">
                                        <img src="assets/item-article.png" alt="Her Story" class="item-sprite-idle max-h-full max-w-full object-contain group-hover:scale-110 transition">
                                    </div>
                                    <div class="flex-1 min-w-0">

                                        <div class="flex items-center justify-between gap-2 mb-1">
                                            <span class="font-ui font-black text-xs sm:text-sm text-[#F2CD5C] uppercase tracking-wider truncate">"Her Story" and the Power of Non-linear Narrative</span>

                                            <span class="text-[9px] font-bold text-[#D94179] bg-black px-1.5 py-0.5 border border-black rounded uppercase flex-shrink-0">5 min read</span>

                                        </div>
                                        <div class="flex items-center gap-2 my-1 text-[10px] font-bold">
                                            <span class="bg-[#F2A766] text-white px-2 py-0.5 rounded border border-black uppercase tracking-wider">Game Analysis</span>
                                        </div>
                                        <p class="text-[11px] sm:text-xs text-slate-300 line-clamp-2 leading-relaxed">
                                            An in-depth analysis of Sam Barlow's FMV masterpiece. Exploring non-linear storytelling, mechanic-narrative integration, and dynamic player engagement.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        `
    }
};
