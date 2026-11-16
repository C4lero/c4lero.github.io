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

// Articulos: se ven en el bloque Writings y se leen en la propia pagina.
// - topic: la tematica en UNA palabra (es lo que se ve en la lista corta junto al titulo y el tiempo de lectura).
// - thumb (opcional): imagen cuadrada para la miniatura de la lista. Si no la pones, se usa un recorte de 'image'.
// - content: el texto del articulo en HTML. Usa <h3> para subtitulos, <p> para parrafos,
//   <blockquote> para citas y <figure><img src="..."><figcaption>...</figcaption></figure> para imagenes.
const articles = [
    {
        title: '"Her Story" and the Power of Non-linear Narrative',
        image: 'assets/banner-article-herstory.png',
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

            <figure><img src="assets/article-herstory-image1.png" alt="My handwritten notes while playing Her Story"><figcaption>My sheet of notes after finishing the game.</figcaption></figure>

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
        image: 'assets/banner-project1.png',
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
const profile = {
    name: 'Juan A. Calero',
    title: 'Game Designer & Producer',
    // lo que digo al pasar el raton por el CV
    dialogue: "So, you need someone to design your game... or to keep your team and your project on track? Well, that's exactly what I do!",
    pitch: "I design core loops and mechanics starting from a game concept, and as a producer I coordinate teams, roadmaps and scope so projects actually ship!",
    roles: [
        { name: 'Game Designer', points: ['Core & game loops', 'Mechanics & balancing', 'Combat & level flow'] },
        { name: 'Game Producer', points: ['Roadmaps & milestones', 'Scope & risk control', 'Scrum / Kanban teams'] }
    ],
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

// Lo que digo al abrir el Project Vault (todos los proyectos juntos)
const vault = {
    dialogue: "Ah yes, the vault. Everything I've worked on is stored here. Start with the first one, it's my favourite!"
};
