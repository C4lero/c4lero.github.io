// Cada proyecto es un objeto. Para anadir uno, copia un bloque y cambia los datos.
// - featured (opcional): el proyecto destacado que se ve en grande en la estanteria.
// - stats (opcional): cifras clave que se ven en la tarjeta destacada.
// - dialogue: lo que digo yo (en primera persona) al pasar el raton por encima o al abrirlo.
// - details (opcional): texto HTML que se ve al abrir el proyecto.
// - external (opcional): si existe, la tarjeta abre ese enlace en vez del panel.
// - kind: tipo de proyecto (game | jam | misc): sale en la franja vertical de color de cada banner.
const projects = [
    {
        id: 'dorothy', kind: 'game', year: '2025', title: "Dorothy's Job", featured: true,
        banner: 'assets/images/dorothy-banner.jpg', logo: 'assets/images/dorothy-logo.png',
        tags: ['Game', 'Twin-stick Shooter', 'Unreal Engine 5'],
        role: 'Mechanics Designer & Producer',
        stats: [['84%', 'positive reviews'], ['40', 'people team']],
        summary: 'Try to beat every level on the clock as Dorothy, the buff maid in this frenetic game mixing cleaning and combat!',
        dialogue: "My pièce de résistance, my most valuable project... (so far). It's out on Steam, and I'm really proud of what we built!",
        youtube: 'LgurwsG-pxo',   // id del trailer en YouTube (lo que va despues de "watch?v=")
        screenshots: ['assets/dorothy/final-1.jpg', 'assets/dorothy/final-2.jpg', 'assets/dorothy/final-3.jpg', 'assets/dorothy/final-4.jpg'],
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
            ['Steam launch', '34,600+ units distributed · 550+ wishlists in a 4-week pre-launch campaign'],
            ['Reviews', '84% positive on Steam']
        ],
        about: "Dorothy's Job is a fast-paced isometric twin-stick shooter starring Dorothy, a buff maid tasked with maintaining a Dark Lord's mansion. Master a high-stakes gameplay loop that forces you to balance heavy-duty cleaning with intense combat, all while racing against time. The game uses procedural level generation to keep every run different.<br><br>It is <b>the first game made by Bola 13 Studios</b>, and we took it the whole way: from the selection process where the idea was chosen among several pitches, through pre-production and a 10-month development, to its final launch on Steam.",
        // contributions: lo que hice en cada rol
        contributions: [
            {
                role: 'Mechanics Designer',
                points: [
                    'Designed and iterated the core loop as part of a 6-person design team: a twin-stick shooter where <b>cleaning the mansion matters as much as fighting</b>.',
                    "Set the key design rule: <b>Dorothy cleans, she doesn't destroy</b>. Classic twin-stick tropes like breaking props into debris were discarded, and every mechanic was built around her.",
                    'Kept the GDD as the single source of truth for art and programming, so systems were implemented as designed.'
                ],
                // images: capturas del desarrollo que ilustran este rol (se ven debajo de los puntos)
                images: [
                    { src: "assets/dorothy/dev-dirt-trail.jpg", caption: "Cleaning loop: Dorothy leaves a dirt trail until she reaches a cleaning station." },
                    { src: "assets/dorothy/dev-alpha-room.jpg", caption: "Alpha build: testing the dirtiness meter and the mop charge in a single room." },
                    { src: "assets/dorothy/dev-procedural.jpg", caption: "Procedurally generated rooms during development." }
                ],
                highlights: [
                    ['Procedural generation', 'Balanced the procedurally generated levels together with programming, with backup plans in case the feature failed.'],
                    ['Visual clarity', 'Tuned the two dirt types, bullets, status effects and UI to stay readable in the middle of combat.']
                ],
                // cut: mecanicas descartadas (se ven en un desplegable "Cut mechanics" dentro de este rol)
                cut: [
                    {
                        title: 'Room gimmicks',
                        what: "Each room type had its own special challenge that changed how you played it: a dusty fireplace that kept spawning Dust Bunnies until you cleaned it, a cursed cauldron summoning Oozers until you defeated the marked cultists, or spore bulbs that made Dorothy stink if she stayed too close. General props could also be hit to clean, damage or disorient everything around them.",
                        how: 'Documented every gimmick down to its tunable parameters and the full list of props, animations, VFX and SFX it needed, ready for production.',
                        why: "The concept never got clear enough to fit the core loop organically, it clashed with the procedural generation, and players couldn't tell why some props were interactive and others weren't. With the deadline approaching, we cut it.",
                        kept: 'Some props designed for the gimmicks, like the fireplace and the cauldron, stayed in the final rooms as set dressing.',
                        images: [
                            { src: 'assets/dorothy/cut-fireplace.jpg', caption: 'The fireplace: it was meant to spawn Dust Bunnies until Dorothy cleaned it.' },
                            { src: 'assets/dorothy/cut-cauldron.jpg', caption: 'The cauldron: it was meant to summon Oozers during a ritual.' }
                        ]
                    },
                    {
                        title: 'Weapon modules',
                        what: 'Each weapon could equip modules that changed how it shot or cleaned and modified its effects: different fire rates, burst patterns, area shapes and debuffs, from stacking slows and stuns to floors that stayed clean for a few seconds.',
                        how: 'Defined fire rates, debuff stacking rules, durations and area-of-effect shapes for every module, with tunable values for balancing and audio mock-ups of how each fire rate should feel.',
                        why: "Weapon customization wasn't a core pillar of the game, and with limited time, keeping the four weapons balanced against each other was already a challenge. Multiplying that by modules wasn't worth it.",
                        kept: 'We picked the module we liked most for each weapon and turned it into its final shooting or cleaning mode.',
                        images: [
                            { src: 'assets/dorothy/cut-weapon-concepts.jpg', caption: 'Mop concept: its modules changed the style and range of the melee swing, from a wide greatsword sweep to a long spear thrust.' }
                        ]
                    }
                ]
            },
            {
                role: 'Game Producer',
                points: [
                    'Coordinated a core team of 20 developers that <b>grew to 40 in critical phases</b> over a 10-month development cycle, leading the weekly cross-departmental meetings to unblock the team.',
                    'Built the <b>monthly planning</b> following an Agile methodology: broke every feature down into tasks and pipelines, assigned them and tracked their progress end to end with <b>Notion databases</b>.',
                    'Ran the Steam launch: store page, Steamworks setup and a 4-week pre-launch campaign with <b>550+ wishlists</b>, leading to <b>34,600+ units distributed and 84% positive reviews</b>.'
                ],
                highlights: [
                    ['Team scaling', 'Set up communication pipelines so the team could double in size without losing alignment.'],
                    ['Risk mitigation', 'Planned backup solutions for critical technical features, like procedural generation, to protect the deadlines.']
                ]
            },
            {
                role: 'UI Artist',
                points: [
                    "Designed the game's <b>HUD, menus and visual feedback</b> in Procreate and Illustrator, with an arcade, comic-book feel.",
                    'Created <b>high-contrast icons and graphic assets</b> that stay readable during fast, chaotic combat.',
                    'Iterated on the UI layouts based on <b>playtest feedback</b> to maximise clarity.'
                ],
                // groups: galerias con titulo. tiles: true = piezas sueltas en miniatura (sin recortar, sobre fondo oscuro)
                groups: [
                    {
                        title: 'HUD evolution',
                        images: [
                            { src: "assets/dorothy/ui-hud-sketches.jpg", caption: "<b>1 · Sketches.</b> First ideas for health, timer, dirtiness meter and weapon cooldown." },
                            { src: "assets/dorothy/dev-hud.jpg", caption: "<b>2 · First HUD concept.</b> Early in-engine version: hearts, timer, room minimap and consumables." },
                            { src: "assets/dorothy/ui-final-hud.jpg", caption: "<b>3 · Final HUD.</b> Released version: Dorothy's portrait and energy bar, ornate minimap and timer." }
                        ]
                    },
                    {
                        title: 'Final UI art',
                        tiles: true,
                        images: [
                            { src: "assets/dorothy/ui-asset-dirtiness.png", caption: 'Dirtiness bar' },
                            { src: "assets/dorothy/ui-asset-timer-frame.png", caption: 'Timer frame' },
                            { src: "assets/dorothy/ui-asset-loadout-frame.png", caption: 'Loadout frame' },
                            { src: "assets/dorothy/ui-ach-1.png", caption: 'Achievement icon' },
                            { src: "assets/dorothy/ui-ach-51.png", caption: 'Achievement icon' }
                        ]
                    },
                    {
                        title: 'Screens',
                        images: [
                            { src: "assets/dorothy/ui-level-select.jpg", caption: 'Level select: grade seals, stars and locked levels.' },
                            { src: "assets/dorothy/ui-loadout-chest.jpg", caption: 'Final weapon selection screen: the cleaning chest with attack, clean and special slots.' },
                            { src: "assets/dorothy/ui-dialogue-layout.jpg", caption: 'Dialogue box layout and positioning reference.' },
                            { src: "assets/dorothy/dev-item-pickup.jpg", caption: 'Early version of the new weapon screen, before the final chest.' },
                            { src: "assets/dorothy/ui-results-sketches-1.jpg", caption: 'Results screen: first layout sketches.' },
                            { src: "assets/dorothy/ui-results-sketches-2.jpg", caption: 'Results screen: iterations for good and bad grades.' }
                        ]
                    }
                ],
                highlights: [
                    ['HUD readability', 'Balanced the cleaning meters, health and timer so they stay clear at high speed.'],
                    ['Style cohesion', "Custom pop-art UI components matching the game's comic-book look."]
                ]
            }
        ]
    },
    {
        id: 'diescend', kind: 'jam', year: '2026', title: 'Diescend',
        banner: 'assets/images/diescend-banner.png', logo: 'assets/images/diescend-logo.png',
        heroLogo: 'assets/diescend/brand-logo.png',   // logo grande (con la torre de dados) solo para la cabecera de la ficha
        // mismo esquema de etiquetas que Dorothy's Job: tipo de proyecto · genero · motor
        tags: ['Roguelike Dice Strategy', 'Godot'],   // sin etiqueta de jam: ya lo indica el sello amarillo
        jam: 'GMTK Game Jam 2026',   // proyecto de jam: sale un sello en la ficha y "JAM" en los banners
        summary: 'Descend the tower betting on dice battles and beating members of your old mafia gang.',
        dialogue: "Dice, a tower and an old mafia gang. I made it for GMTK Jam and it got into the top 1000 of 10.6k entries!",
        links: [
            { text: 'Play on itch.io', url: 'https://c4lipo.itch.io/diescend' }
        ],
        facts: [
            ['Jam', 'GMTK Game Jam 2026 · Theme: "Count Down"'],
            ['Result', 'Top 1000 out of 10,600+ entries'],
            ['Game jam time', '96 hours (July 22 – 26, 2026)'],
            ['Team', '7 people: programming, 3D art, 2D art, music and design'],
            ['My role', 'Game Designer & Producer'],
            ['Platform', 'PC (itch.io)']
        ],
        about: "Diescend is a roguelike dice duel built around the jam's theme, <b>Count Down</b>. You play a former high-ranking member of a mafia that burned down your house and your family, and you return to their tower months later, very much alive.<br><br>Floor by floor you descend, facing your old comrades at the table: before each clash you bet on whether your die will win or lose, and every successful bet counts your dice down. The first to run out of dice wins. Major Arcana tarot cards twist the rules of every match, a revolver settles the disputes and, as the mafia's motto goes, <i>\"Fortune is a sore loser\"</i>.",
        // proyecto de jam: un solo bloque con lo que hice, sin separar por roles
        youtube: 'g-0P1xMQ0z0', youtubeLabel: 'Development: from prototype to final build',   // video largo (columna derecha)
        contributions: [
            {
                role: 'What we did',
                intro: "We built the whole game around the theme, <b>Count Down</b>, on two levels. In every clash both dice lose value at the same time, <b>counting down</b> until only one is left standing, and that is how each round is scored. And the whole run is a countdown of floors: you <b>descend the tower from floor 10 to the exit at floor 0</b>, with every floor harder than the last.<br><br>As the team's designer and producer, my part of it was:",
                points: [
                    '<b>Produced the project</b>: scope, task planning in Trello and coordination of a 7-person team during the jam.',
                    'Designed the <b>core dice duel</b> and the phases of every round.',
                    '<b>Balanced the progression</b> floor by floor: dice per match, dice per round, number of Arcana and probability tables for dice faces and special marks.',
                    'Designed the <b>Major Arcana modifiers</b>, the tutorial flow and the full game flowchart, from the main menu to the ending.',
                    'Defined the <b>table layout and its interactions</b>: hover and click states for dice, tarot cards and the revolver.',
                    'Co-created the <b>lore</b> of the tower and its characters, and made the <b>logo, 2D pieces and itch.io page art</b>.'
                ],
                // video del desarrollo: del prototipo a la version final (se ve dentro del bloque, sin autoplay)
                video: { id: 'PdDLwc49NnU', title: 'Presentation trailer', caption: 'The short presentation trailer of the game. You can see the dice counting down as they clash.' },
                groups: [
                    {
                        // fit: true = cada imagen entera, con su proporcion (r = ancho / alto), sin recortes
                        title: 'Design on Miro',
                        fit: true,
                        images: [
                            { src: 'assets/diescend/miro-overview.jpg', r: 3.1, caption: 'Theme, core dice mechanics and the Arcana modifiers.' },
                            { src: 'assets/diescend/miro-dice-generation.jpg', r: 1.52, caption: 'Dice generation: probability of each die and mark, floor by floor.' }
                        ]
                    },
                    {
                        title: 'Branding',
                        tiles: true,
                        images: [
                            { src: 'assets/diescend/brand-logo.png', caption: 'Logo' },
                            { src: 'assets/diescend/brand-title.png', caption: 'Title' },
                            { src: 'assets/diescend/brand-tower.png', caption: 'Tower icon' },
                            { src: 'assets/diescend/brand-dice-icon.png', caption: 'Dice icon' },
                            { src: 'assets/diescend/brand-ornament-top.png', caption: 'Page ornament' },
                            { src: 'assets/diescend/brand-ornament-bottom.png', caption: 'Closing ornament' }
                        ]
                    },
                    {
                        title: 'itch.io page',
                        fit: true,
                        images: [
                            { src: 'assets/diescend/itch-cover.jpg', r: 1.26, caption: 'Cover with the game logo.' },
                            { src: 'assets/diescend/itch-thumbnail.png', r: 1.26, caption: 'Thumbnail.' },
                            { src: 'assets/diescend/cast-banner.jpg', r: 3.48, caption: 'Cast banner.' }
                        ]
                    },
                    {
                        // light: miniaturas sobre fondo claro (los personajes estan dibujados sobre blanco)
                        title: 'The cast · art by the team',
                        tiles: true,
                        light: true,
                        images: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => ({ src: `assets/diescend/char-${n}.jpg` }))
                    }
                ],
                note: 'The characters were drawn by the 2D and 3D artists of the team; I composed them into the banners and the itch.io page.'
            }
        ],
        screenshots: ['assets/diescend/final-1.jpg', 'assets/diescend/final-2.jpg', 'assets/diescend/final-3.jpg'],
        shotsFirst: true   // las capturas finales van justo despues de la lista, antes del video y del Miro
    },
    {
        id: 'guard-my-hive', kind: 'game', year: '2026', title: 'Guard My Hive',
        // BORRADOR: proyecto sin revelar. Solo se ensena lo basico (sin presupuesto, nombres, calendario ni lista de fichas)
        banner: 'assets/images/guard-my-hive-banner.png', logo: 'assets/guard-my-hive/logo.png', squareLogo: true,
        tags: ['Game (In development)', 'Tower Defense with Auto-chess mechanics', 'Unity'],
        summary: 'Defend Queen Beeatriz from waves of wasps: buy, merge and place your pieces on a hexagonal hive, then watch them fight.',
        dialogue: "Fresh stock, I haven't even released it yet! Tower defense with auto-chess... and bees. Bzz!",
        links: [
            { text: 'Visit the project page', url: 'https://mochuelogames.github.io/Hive' }
        ],
        facts: [
            ['Studio', 'Mochuelo Games'],
            ['Status', 'In development · playable prototype'],
            ['Team', '8 people'],
            ['Roles', 'Producer · UX Designer & UI Artist · Game Designer'],
            ['Platform', 'PC'],
            ['Engine', 'Unity']
        ],
        about: "Guard My Hive is a PvE tower defense with auto-chess mechanics. You protect <b>Queen Beeatriz</b> from hordes of wasps from a hive made of hexagonal cells, and if the queen falls, you lose.<br><br>Every round has two phases: in <b>planning</b> you buy, merge and place your pieces, and in <b>combat</b> the pieces you placed defend the hive on their own. Honey is the currency for everything, merging two equal pieces levels them up, and class synergies reward thinking about where each piece goes, not just which ones you own.",
        contributions: [
            // BORRADOR: mismos roles que en Dorothy's Job pero mas cortos (textos provisionales, pendientes de las preguntas)
            {
                role: 'Game Producer',
                points: [
                    '<b>Produce the project</b>: production planning, task breakdown and scheduling for a part-time team of 8.',
                    'Plan the <b>open playtest</b> to validate the design with around 200 players.'
                ]
            },
            {
                role: 'UX Designer & UI Artist',
                points: [
                    'Design and draw the <b>interface</b>: shop, synergy indicators and HUD.',
                    'Lead <b>accessibility</b>: a self-assessment based on the Fundación ONCE accessibility white paper, plus colour-blind mode and a repositionable HUD.'
                ]
            },
            {
                role: 'Game Designer',
                points: [
                    'Support the design of the <b>core systems</b>: the shop and reroll economy, merging and the class synergies.'
                ],
                groups: [
                    {
                        title: 'Key art',
                        fit: true,
                        images: [ { src: 'assets/guard-my-hive/keyart.jpg', r: 1.75, caption: 'Key art concept: Queen Beeatriz and the wasps.' } ]
                    },
                    {
                        title: 'Characters & pieces · art by the team',
                        tiles: true,
                        images: [
                            { src: 'assets/guard-my-hive/queen.png', caption: 'Queen Beeatriz' },
                            { src: 'assets/guard-my-hive/enemy.png', caption: 'Base enemy' },
                            { src: 'assets/guard-my-hive/tower-forge.png', caption: 'Forge' },
                            { src: 'assets/guard-my-hive/tower-honey-cannon.png', caption: 'Honey Cannon' },
                            { src: 'assets/guard-my-hive/tower-telescope.png', caption: 'Telescope' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        // Nacio de mi TFG y ahora se desarrolla con la URJC. Sin "banner": se pinta un fondo de trama.
        // Texto provisional sacado de la memoria del TFG (pendiente de revisar).
        id: 'crisis-sim', kind: 'game', year: '2026 (In development)', title: 'Crisis Sim Game',
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
        id: 'steadicam', kind: 'jam', year: '2025', title: 'Ready, Steadicam!',
        banner: 'assets/images/steadicam-banner.png', logo: 'assets/images/steadicam-logo.png',
        tags: ['Hackathon 11 · 2nd best game award', 'Local Coop Experience', 'Godot'],
        summary: 'Local coop mini game experience about sightseeing and taking photos!',
        dialogue: "A local co-op photo adventure. My team won 2nd best game at Madrid Hackathon 11 with it!",
        details: ''
    },
    {
        id: 'walking-time', kind: 'game', year: '2024', title: 'Walking Time',
        banner: 'assets/images/walking-time-banner.png', logo: 'assets/images/walking-time-logo.png',
        tags: ['Game', 'Educational & Resource management', 'Unity'],
        summary: 'Educational strategic puzzle game about excentric characters exploring an island!',
        dialogue: "An educational puzzle game full of eccentric island explorers. A classic of the shop!",
        details: ''
    },
    {
        // Cosas sueltas que no son un unico proyecto. Sin "banner": se pinta un fondo de trama.
        id: 'misc', kind: 'misc', year: '2024', title: 'Miscellaneous',
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
        image: 'assets/dorothy/final-1.jpg',
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
        image: 'assets/dorothy/final-3.jpg',
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
