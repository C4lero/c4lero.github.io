// Cada proyecto es un objeto. Para anadir uno, copia un bloque y cambia los datos.
// - featured (opcional): el proyecto destacado que se ve en grande en la estanteria.
// - stats (opcional): cifras clave que se ven en la tarjeta destacada.
// - dialogue: lo que digo yo (en primera persona) al pasar el raton por encima o al abrirlo.
// - details (opcional): texto HTML que se ve al abrir el proyecto.
// - external (opcional): si existe, la tarjeta abre ese enlace en vez del panel.
const projects = [
    {
        id: 'dorothy', year: '2025', title: "Dorothy's Job", featured: true,
        banner: 'assets/images/dorothy-banner.jpg', logo: 'assets/images/dorothy-logo.png',
        tags: ['Game', 'Twin-stick Shooter', 'Unreal Engine 5'],
        role: 'Mechanics Designer & Producer',
        stats: [['84%', 'positive reviews'], ['40', 'people team']],
        summary: 'Try to beat every level on the clock as Dorothy, the buff maid in this frenetic game mixing cleaning and combat!',
        dialogue: "My pièce de résistance, my most valuable project... (so far). It's out on Steam, and I produced the whole thing!",
        video: 'assets/dorothy/DorothyTrailer.mp4',
        screenshots: ['assets/dorothy/screenshot-dorothy-1.png', 'assets/dorothy/screenshot-dorothy-2.png', 'assets/dorothy/screenshot-dorothy-3.png', 'assets/dorothy/screenshot-dorothy-4.png'],
        links: [
            { text: 'Check on Steam', url: 'https://store.steampowered.com/app/3926730/Dorothys_Job/' }
            // Cuando subas el PDF a assets/dorothy/, descomenta esta linea:
            // , { text: 'Game Design Document', url: 'assets/dorothy/DorothysJob_GDD.pdf' }
        ],
        // --- Ficha completa (se ve al abrir el proyecto, en la propia pagina) ---
        // facts: datos rapidos de la columna lateral
        facts: [
            ['Roles', 'Mechanics Designer · Producer · UI Artist'],
            ['Platform', 'PC (Steam)'],
            ['Development', '10 months'],
            ['Team size', '20 to 40 members'],
            ['Steam launch', '34,600+ units · 550+ wishlists in a 4-week pre-launch campaign'],
            ['Reviews', '84% positive on Steam']
        ],
        about: "Dorothy's Job is a fast-paced isometric twin-stick shooter starring Dorothy, a buff maid tasked with maintaining a Dark Lord's mansion. Master a high-stakes gameplay loop that forces you to balance heavy-duty cleaning with intense combat, all while racing against time. The game uses procedural level generation to keep every run different.",
        // contributions: lo que hice en cada rol
        contributions: [
            {
                role: 'Mechanics Designer',
                points: [
                    'Designed and iterated the core gameplay loop combining active combat with cleaning mechanics.',
                    'Collaborated with art and programming teams to implement systems aligned with design intent.',
                    'Maintained clear design documentation (GDD) to ensure cross-departmental alignment.'
                ],
                note: "As part of a 6-person design core, my main focus was creating mechanics that blended cleaning and combat. Key constraint: standard twin-stick tropes (like breaking props into debris) were discarded. Dorothy is meant to clean the mansion, not destroy it.",
                highlights: [
                    ['Procedural generation', 'Procedurally generated levels were the key programming feature, so we worked closely to keep them balanced and had backup plans in case something failed.'],
                    ['Visual clarity', 'Adjusted the two floor dirt types, bullets, status effects and UI to stay readable throughout gameplay.'],
                    ['A game built around a character', 'Mechanics, systems and visuals were designed around Dorothy herself, which drove many gameplay decisions.']
                ]
            },
            {
                role: 'Game Producer',
                points: [
                    'Coordinated cross-departmental workflows for a team scaling up to 40 members.',
                    'Managed production roadmaps, sprint planning, milestones and scope; led weekly meetings.',
                    'Managed the Steamworks page, configuration and the publishing process.'
                ],
                note: 'I served as the bridge between design expectations and technical execution, keeping the team aligned while mitigating production risks.',
                highlights: [
                    ['Team scaling', 'Structured communication pipelines as the team grew from 20 to 40 members.'],
                    ['Risk mitigation', 'Set up backup plans for critical technical features to guarantee deadlines.']
                ]
            },
            {
                role: 'UI Artist',
                points: [
                    'Designed HUD elements, menus and visual feedback for an arcade feel.',
                    'Created high-contrast graphic assets and iconography tailored for fast gameplay.',
                    'Iterated on UI layouts based on playtest feedback to maximise clarity.'
                ],
                note: "A stylised, high-contrast interface that complements the game's comic-book look without cluttering the screen during chaotic combat.",
                highlights: [
                    ['HUD readability', 'Balanced cleaning meters and health UI to stay clear in high-speed gameplay.'],
                    ['Style cohesion', "Custom pop-art UI components matching the game's comic-book aesthetic."]
                ]
            }
        ]
    },
    {
        id: 'diescend', year: '2026', title: 'Diescend',
        banner: 'assets/images/diescend-banner.png', logo: 'assets/images/diescend-logo.png',
        tags: ['GMTK 26 Jam Submission', 'Strategy with Rogue-like Mechanics', 'Godot'],
        summary: 'Descend the tower betting on dice battles and beating members of your old mafia gang.',
        dialogue: "Dice, a tower and an old mafia gang. I made it for GMTK Jam and it got into the top 1000 of 10.6k entries!",
        details: ''
    },
    {
        id: 'guard-my-hive', year: '2026 (Coming soon)', title: 'Guard My Hive',
        banner: 'assets/images/guard-my-hive-banner.png',
        tags: ['Game (Unreleased)', 'Tower Defense with Auto-chess mechanics', 'Unity'],
        summary: 'A game about defending a bee colony. Bzz!!',
        dialogue: "Fresh stock, I haven't even released it yet! Tower defense with auto-chess... and bees. Bzz!",
        details: ''
    },
    {
        // Nacio de mi TFG y ahora se desarrolla con la URJC. Sin "banner": se pinta un fondo de trama.
        // Texto provisional sacado de la memoria del TFG (pendiente de revisar).
        id: 'crisis-sim', year: '2026 (In development)', title: 'Crisis Sim Game',
        tags: ['Serious Game (In development)', '2.5D Crisis Management Simulation', 'Unreal Engine 5'],
        role: 'Game Designer & Developer',
        summary: 'A 2.5D serious game that puts you in charge of a crisis cabinet: gather fragmented reports, race the clock and make the calls that decide how the crisis ends.',
        dialogue: "This one started as my Final Degree Project, got Honours... and now it's being developed together with URJC!",
        facts: [
            ['Status', 'In development with URJC'],
            ['Origin', 'My Final Degree Project · URJC, Madrid (2025–26)'],
            ['Genre', 'Serious game · Crisis management simulation · 2.5D'],
            ['Engine', 'Unreal Engine 5 (Blueprints) · Twine prototype'],
            ['Validation', 'Survey with 113 participants'],
            ['Award', 'Honours (Matrícula de Honor)']
        ],
        about: "A serious game about making critical decisions under pressure. You play the Head of Communications of a crisis cabinet: the information comes in fragmented through different characters, each one with their own way of facing the risk, and you have to weigh it all and decide before the deadline hits. There are no strictly right answers, only trade-offs: helping on one front means hurting another, so the goal is not to fix everything but to mitigate the damage.<br><br>The first case study is a music festival on its opening day: hundreds of fake tickets bought on a scam website collapse the entrance turnstiles, and a crowd full of families builds up outside the venue. It was born as my Final Degree Project, which received Honours (Matrícula de Honor), and it is now being developed further together with Universidad Rey Juan Carlos (URJC).",
        contributions: [
            {
                role: 'Game Design',
                points: [
                    'Designed a reusable crisis framework: three hidden resources, characters that act as pressure points and a narrative split into milestones of detection, decision and resolution.',
                    'Built a time system where every conversation costs time and the clock never goes back, so the player can never hear every version of the story.',
                    'Designed a crisis control meter that reacts slightly to every answer and strongly to key decisions, giving constant feedback and leading to different endings.',
                    'Wrote three opposed character doctrines (pragmatic, humanist and corporate) and a notebook that automatically stores the key information the player uncovers.',
                    'Mapped and tested the decision trees in a low-fidelity Twine prototype before production.'
                ]
            },
            {
                role: 'Development · Unreal Engine 5',
                points: [
                    'Implemented a decoupled Blueprint architecture with the global game state centralized in a GameInstance.',
                    'Set up player input with the Enhanced Input System and 2D character animation state machines with PaperZD, in 3D environments lit with Lumen.',
                    'Externalized the dialogue system so new crises can be written without touching the game logic.'
                ]
            },
            {
                role: 'Research & validation',
                points: [
                    'Analysed crisis management in institutional simulators and commercial games such as Papers, Please, The Republia Times and Headliner: NoviNews.',
                    'Validated the approach with a survey answered by 113 participants of different ages and gaming habits.'
                ]
            }
        ]
    },
    {
        id: 'steadicam', year: '2025', title: 'Ready, Steadicam!',
        banner: 'assets/images/steadicam-banner.png', logo: 'assets/images/steadicam-logo.png',
        tags: ['HackJam 11 MiG 2nd best game award', 'Local Coop Experience', 'Godot'],
        summary: 'Local coop mini game experience about sightseeing and taking photos!',
        dialogue: "A local co-op photo adventure. My team won 2nd best game at Madrid Hackathon 11 with it!",
        details: ''
    },
    {
        id: 'walking-time', year: '2024', title: 'Walking Time',
        banner: 'assets/images/walking-time-banner.png', logo: 'assets/images/walking-time-logo.png',
        tags: ['Game', 'Educational & Resource management', 'Unity'],
        summary: 'Educational strategic puzzle game about excentric characters exploring an island!',
        dialogue: "An educational puzzle game full of eccentric island explorers. A classic of the shop!",
        details: ''
    },
    {
        // Cosas sueltas que no son un unico proyecto. Sin "banner": se pinta un fondo de trama.
        id: 'misc', year: '2024', title: 'Miscellaneous',
        tags: ['Various works', 'UI/UX & game concepts', 'Kumiho Esports'],
        role: 'Game Designer & UI Designer | 2D Artist',
        summary: 'Smaller works that are not a single project: interfaces, HUDs and game concepts.',
        dialogue: "A bit of everything: interfaces, HUDs and game concepts I've worked on outside my main projects.",
        facts: [
            ['Studio', 'Kumiho Esports'],
            ['Dates', 'Jun 2024 – Sep 2024'],
            ['Roles', 'Game Designer · UI Designer · 2D Artist'],
            ['Location', 'Madrid, on-site']
        ],
        aboutTitle: 'About',
        about: "A collection of the smaller pieces of work I've done that don't belong to a single project: complete interface systems, early game concepts and design documentation.",
        contributions: [
            {
                role: 'Nexus Legends · UI/UX Designer',
                points: [
                    'Designed, created and implemented the complete user interface, HUD and user experience of this educational quiz game.',
                    'Shaped every screen around gameplay usability.'
                ]
            },
            {
                role: 'Nine Tails · Game Designer',
                points: [
                    'Planned and documented the game from its initial concept: core gameplay, mechanics and game loop.',
                    'Carried out a study of the scope and the resources needed for the whole project.'
                ]
            }
        ]
    },
    {
        id: 'itch', year: '2025', title: 'My Itch.io',
        banner: 'assets/images/itch-banner.png',
        tags: ['The rest of my Jam Projects'],
        summary: 'Link to my itch.io profile, where all my little projects and jams are stored.',
        dialogue: "Looking for the small stuff? All my jam games live on my itch.io page.",
        external: 'https://c4lipo.itch.io'
    }
];

// Articulos: se ven en el bloque Writings y se leen en la propia pagina.
// - topic: la tematica en UNA palabra (es lo que se ve en la lista corta junto al titulo y el tiempo de lectura).
// - thumb (opcional): imagen cuadrada para la miniatura de la lista. Si no la pones, se usa un recorte de 'image'.
// - content: el texto del articulo en HTML. Usa <h3> para subtitulos, <p> para parrafos,
//   <blockquote> para citas y <figure><img src="..."><figcaption>...</figcaption></figure> para imagenes.
const articles = [
    {
        title: '"Her Story" and the Power of Non-linear Narrative',
        image: 'assets/images/herstory-banner.png',
        tag: 'Game Analysis', topic: 'Narrative', readTime: '5 min read', date: '14 Nov 2024',
        summary: "An in-depth analysis of Sam Barlow's FMV masterpiece. Exploring non-linear storytelling, mechanic-narrative integration, and dynamic player engagement.",
        dialogue: "My deep dive into Her Story and non-linear narrative. Five minutes, I promise!",
        content: `
            <h3>A story told in pieces</h3>
            <p><em>Her Story</em> is a story told in pieces. The game is presented to the player as a police search engine, in which you have access to lots of short videos representing unorganised pieces of some interrogations of a woman about a murder. Depending on the search terms you introduce, some videos are shown to you. That's the key point: the story is given to you in pieces, and it's your job to put it all together and assemble the story in your head.</p>

            <h3>Dozens and dozens of videos without an apparent order</h3>
            <p>Sincerely, I started playing <em>Her Story</em> because I'm such a fan of narrative games and this was sold to me as one. What I did not expect was to find that the main gameplay was based around watching videos. Dozens and dozens of videos without an apparent order or sense.</p>
            <p>The truth is that I started to watch the videos as they appeared, without any particular order. Names, dates and places that I did not know, and that did not tell me anything about anything, were mentioned. That's when the search function came into play. I decided to pick up a sheet of paper and write down all the names that seemed more relevant to me when I heard them in the videos (pure <em>Do Not Feed the Monkeys</em> style): the ones which seemed more important to the story or were repeated many times.</p>
            <p>In my head, I thought it was logical that if a word was repeated a lot it would be key to the story... but what if it wasn't? I wrote down all the unresolved questions next to each of the names, making notes and writing words down so I didn't forget to search them later in the video searcher.</p>

            <blockquote>That was the most magical part of <em>Her Story</em> to me: when you are the one who makes up the story, so what you think about it is correct for you.</blockquote>

            <h3>Nonlinear storytelling based on ambiguity</h3>
            <p>That was the most magical part of <em>Her Story</em> to me, and what constitutes nonlinear storytelling based on ambiguity: nobody confirms or denies if you are on the right path to a conclusion, if what you are thinking is correct or not, or if you have misunderstood a video. Maybe a quote you thought meant nothing suddenly gains new meaning when you later watch a video that opens up a new possibility.</p>
            <p>Even after all the conclusions you may reach, nobody will tell you if they are correct or not. Maybe you have already watched all the videos and still haven't figured out the whole story and the resolution of the murder, and that's when this type of narrative comes to shine: when you are the one who makes up the story, so what you think about it is correct for you.</p>

            <figure><img src="assets/images/herstory-notes.png" alt="My handwritten notes while playing Her Story"><figcaption>My sheet of notes after finishing the game.</figcaption></figure>

            <h3>I felt like a true detective</h3>
            <p>Little by little, my sheet of paper filled up with notes until it ended up as seen in the photo above, and when I noticed I couldn't help but think about the experience I'd had during the two hours it took me to play it. It was something that had never happened to me before. I felt like a true detective, who considered the case closed when I could think of a story that, for me, made sense.</p>
            <p>Afterwards I searched the web for videos and articles about the game and its ending, and found out that the story doesn't even have an official resolution. That was when I catalogued <em>Her Story</em> as one of the best examples of immersion and nonlinear storytelling I have ever played.</p>`
    },
    {
        // ARTICULO DE EJEMPLO: cambia el titulo, los datos y el content por tu articulo real
        title: "Cleaning Meets Combat: Designing Dorothy's Job Core Loop",
        image: 'assets/dorothy/screenshot-dorothy-1.png',
        tag: 'Design Postmortem', topic: 'Design', readTime: '7 min read', date: 'Coming soon',
        summary: "How we merged a cleaning mechanic with twin-stick combat, what broke during playtests and how iteration shaped the final loop.",
        dialogue: "This one's a behind-the-scenes look at how I designed Dorothy's Job core loop. Coming soon!",
        content: `
            <p><strong>This article is an example placeholder.</strong> Replace this text in <code>data.js</code> with the real postmortem.</p>
            <h3>The starting point</h3>
            <p>What the core loop had to achieve, and the constraints we started from.</p>
            <h3>What broke in playtests</h3>
            <p>The problems players ran into and what the data told us.</p>
            <h3>How iteration shaped the final loop</h3>
            <p>The changes we made, why, and what we learned along the way.</p>`
    },
    {
        // ARTICULO DE EJEMPLO
        title: 'Producing a Student Game: From 20 to 40 People',
        image: 'assets/dorothy/screenshot-dorothy-3.png',
        tag: 'Production', topic: 'Production', readTime: '6 min read', date: 'Coming soon',
        summary: "What changes when a team doubles mid-project: communication pipelines, roadmaps, scope and the backup plans that saved our deadlines.",
        dialogue: "The producer side of Dorothy's Job: how we kept 40 people moving in the same direction. Coming soon!",
        content: `
            <p><strong>This article is an example placeholder.</strong> Replace this text in <code>data.js</code> with the real article.</p>
            <h3>Starting small</h3>
            <p>How the project was organised with the first 20 people.</p>
            <h3>Scaling up</h3>
            <p>What broke when the team grew, and the pipelines we built to fix it.</p>
            <h3>Shipping on Steam</h3>
            <p>Milestones, scope cuts and the pre-launch campaign.</p>`
    },
    {
        // ARTICULO DE EJEMPLO
        title: '48 Hours, One Die: Lessons from GMTK Jam',
        image: 'assets/images/diescend-banner.png',
        tag: 'Game Jam', topic: 'Jams', readTime: '4 min read', date: 'Coming soon',
        summary: "Designing Diescend in a weekend: picking a core mechanic fast, cutting features without mercy and what a top 1000 finish taught me.",
        dialogue: "Game jams are my favourite design gym. Here's what Diescend taught me. Coming soon!",
        content: `
            <p><strong>This article is an example placeholder.</strong> Replace this text in <code>data.js</code> with the real article.</p>
            <h3>Finding the hook</h3>
            <p>How the theme turned into the dice-betting mechanic.</p>
            <h3>Cutting scope</h3>
            <p>What we dropped to finish on time, and why.</p>
            <h3>What the ranking taught me</h3>
            <p>Feedback from players and what I would do differently.</p>`
    }
];

// Ficha de personaje (el bloque CV). Edita aqui tus datos.
// Contenido sacado de tus dos CV (pdf/CV_..._Game_Designer.pdf y pdf/CV_..._Game_Producer.pdf).
const profile = {
    name: 'Juan A. Calero',
    title: 'Game Designer & Producer',
    // etiqueta junto al titulo; dejala vacia ('') para ocultarla
    availability: 'Open to work',
    // etiqueta de ubicacion, al lado de "Open to work"
    location: 'Madrid, Spain · Open to relocation & remote',
    // lo que digo al pasar el raton por el CV
    dialogue: "So, you need someone to design your game... or to keep your team and your project on track? Well, that's exactly what I do!",
    // presentacion corta: es lo que se ve en el bloque CV sin ampliar
    pitch: "Hi! I'm a game designer who thrives on designing, prototyping and documenting core mechanics and game concepts for a living, mostly in Unreal Engine 5, Unity and Godot.<br>I'm also a game producer specialized in coordinating development teams and getting games finished, from first concept to launch!",
    // los dos CV descargables (boton de la cabecera y CV ampliado)
    cvs: [
        { label: 'Game Designer CV', file: 'pdf/CV_Juan_Antonio_Calero_EN_Game_Designer.pdf' },
        { label: 'Game Producer CV', file: 'pdf/CV_Juan_Antonio_Calero_EN_Game_Producer.pdf' }
    ],
    // experiencia: de lo mas reciente a lo mas antiguo
    // - projectId: la linea del juego abre esa ficha de Projects  |  - url: la linea del juego abre esa web
    // - logo: imagen del estudio (en assets/logos)  |  - logoIcon: un icono en su lugar (p. ej. itch.io)
    experience: [
        {
            role: 'Game Designer & Game Producer', company: 'Mochuelo Games', logo: 'assets/logos/mochuelo.png', place: 'Remote',
            project: 'Guard My Hive (unreleased) · Unity', projectId: 'guard-my-hive', dates: 'Sep 2025 – Present',
            points: [
                'Co-designed the core mechanics, game structure and systems to shape the game concept.',
                'Set up the development roadmap, aligning production milestones with launch strategy and market opportunities.',
                'Coordinate a cross-departmental team of 10 with an adaptable workflow from pre-production onwards.',
                'Balance the game loop and keep feature scope in check to protect the viability of the project.',
                'Run sprint planning, task tracking and team communication; write GDDs and pitch documentation.'
            ]
        },
        {
            role: 'Associate Game Producer & Game / UI/UX Designer', company: 'Bola 13 Studios', logo: 'assets/logos/bola13.png', place: 'Madrid, on-site',
            project: "Dorothy's Job · Unreal Engine 5", projectId: 'dorothy', dates: 'Jan 2025 – Feb 2026',
            points: [
                'Designed and iterated the main game loop around the synergy between simultaneous combat and cleaning.',
                'Built a progression across 10 procedurally generated levels.',
                'Created four distinct weapons (melee and ranged), consumables and a reward system tied to rooms and the timer.',
                'Coordinated a core team of 20 developers that grew to 40 in critical phases, over a 10-month cycle.',
                'Ran cross-departmental meetings, resolved blockers, and managed documentation, backlog and sprints in Notion and ClickUp.',
                "Designed the game's interfaces and HUD with Procreate and Illustrator."
            ]
        },
        {
            role: 'Game Designer & UI Designer | 2D Artist', company: 'Kumiho Esports', logo: 'assets/logos/kumiho.png', place: 'Madrid, on-site',
            project: 'Nexus Legends & Nine Tails', projectId: 'misc', dates: 'Jun 2024 – Sep 2024',
            points: [
                'Planned and documented "Nine Tails" from its initial concept: core gameplay, mechanics and game loop, plus a scope and resources study.',
                'Designed, created and implemented the complete UI, HUD and user experience of the educational quiz game "Nexus Legends".'
            ]
        },
        {
            role: 'Freelance Game Designer', company: 'itch.io', logoIcon: 'fa-brands fa-itch-io', place: 'Remote',
            project: 'Game jams & personal projects', url: 'https://c4lipo.itch.io', dates: '2023 – Present',
            points: [
                'Took part in several game jams as a designer.',
                'Prototyped mechanics in Unreal Engine 5 and Unity, defined game loops and built branching narrative structures.',
                'Designed an educational game to prepare people for crisis-management situations.'
            ]
        }
    ],
    // herramientas agrupadas
    skills: [
        ['Engines', ['Unreal Engine 5', 'Unity', 'Godot', 'Twine']],
        ['Art & UI', ['Photoshop', 'Illustrator', 'Procreate']],
        ['Production', ['Notion', 'ClickUp', 'Asana', 'Miro', 'Trello', 'GitHub', 'Agile / Scrum']]
    ],
    facts: [
        { icon: 'fa-graduation-cap', text: "Master's in Game Design · UTAD, Madrid (2025)" },
        { icon: 'fa-graduation-cap', text: "Bachelor's in Video Game Design & Development · URJC, Madrid (2024)" },
        { icon: 'fa-language', text: 'Spanish (native) · English (C1, professional) · German (basic)' }
    ],
    awards: [
        { text: 'Finalist, Best University Game · BIG Conference 2025', note: "Dorothy's Job", projectId: 'dorothy' },
        { text: '2nd best game · Madrid Hackathon 11', note: 'Ready, Steadicam!', projectId: 'steadicam' },
        { text: 'Top 1000 out of 10,600 entries · GMTK Game Jam 2026', note: 'Diescend', projectId: 'diescend' },
        { text: 'Honours (Matrícula de Honor) for my Final Degree Project', note: 'Crisis Sim Game', projectId: 'crisis-sim' }
    ]
};

// Lo que digo al abrir el Project Vault (todos los proyectos juntos)
const vault = {
    dialogue: "Ah yes, the vault. Everything I've worked on is stored here. Start with the first one, it's my favourite!"
};
