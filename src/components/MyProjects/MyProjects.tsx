import { Typography } from '@material-tailwind/react'
import Project from '../Project/Project'
import { useContext } from 'react'
import { DarkModeContext } from '../../contexts/DarkModeProvider'

export default function MyProjects() {

    const { darkMode } = useContext(DarkModeContext)

    return (
        <div className='mb-24'>
            <div className='flex justify-center'>
                <div className='md:w-[50vw]'>
                    <Project
                        title="TravelMates"
                        imageSrc="../../projects/travelmates.png"
                        description={
                            <>
                                <b>TravelMates est une application web open source, développée en cinq mois lors de ma formation de Concepteur Développeur
                                    d’Applications chez Alt Incubateur Tech. Réalisée en méthode agile avec React et une API NestJS, elle connecte les utilisateurs
                                    souhaitant voyager ensemble.</b><br /><br />

                                <b><u>Fonctionnalités principales:</u></b><br /><br />

                                <ul>
                                    <li>
                                        <b>- Authentification sécurisée:</b> Système robuste basé sur JWT pour protéger les comptes et interactions.<br />
                                    </li>
                                    <li>
                                        <b>- Trips:</b> Création de voyages avec destination, dates, description et critères pour les participants (âge, genre, etc.).<br />
                                    </li>
                                    <li>
                                        <b>- Carte interactive:</b> Basée sur Mapbox, elle permet aux utilisateurs connectés d’ajouter des marqueurs pour partager lieux et activités,
                                        enrichis par des photos, notes et commentaires.<br />
                                    </li>
                                    <li>
                                        <b>- Profils utilisateurs:</b> Pages personnalisées avec bio, activités récentes, langues parlées et photo de profil.<br />
                                    </li>
                                    <li>
                                        <b>- Communication en temps réel:</b> Messagerie sécurisée pour permettre aux participants d’un même trip de communiquer directement.<br /><br />
                                    </li>
                                </ul>
                            </>
                        }
                        technologies={[
                            "../../icons/react.svg",
                            "../../icons/nest.svg",
                            "../../icons/tailwind.svg",
                            "../../icons/mysql.svg",
                            "../../icons/jest.svg",
                            "../../icons/cypress.svg"
                        ]}
                        isCompleted={false}
                    />
                    <Project
                        title="Chess"
                        imageSrc="../../projects/chess.png"
                        description={
                            <>
                                <b>Ce projet consiste en la création d’un jeu d’échecs développé avec Java et le framework libGDX. Mon objectif principal était
                                    d’approfondir mes connaissances en Java tout en réalisant une version numérique de l’un de mes jeux favoris.</b><br /><br />

                                <b><u>Ce projet m’a permis de:</u></b><br /><br />

                                <ul>
                                    <li>
                                        <b>- Pratiquer la Programmation Orientée Objet (POO):</b> Structuration du jeu autour de concepts tels que les pièces,
                                        le plateau, et les règles spécifiques des échecs.<br />
                                    </li>
                                    <li>
                                        <b>- Explorer l’algorithmie en Java:</b> Implémentation des mouvements des pièces, détection des échecs/échecs et mat, et
                                        gestion des règles avancées (roque, promotion des pions, etc.).<br />
                                    </li>
                                    <li>
                                        <b>- Découvrir le framework libGDX:</b> Exploitation de ses fonctionnalités pour gérer l’affichage du plateau, les
                                        animations, et les interactions utilisateur.<br /><br />
                                    </li>
                                </ul>

                                <b>Ce projet a été une expérience enrichissante, combinant mes passions pour la programmation et les échecs, tout en
                                    renforçant mes compétences techniques.</b><br /><br />
                            </>

                        }
                        technologies={[
                            "../../icons/java-header.svg",
                            "../../icons/libgdx.png",
                        ]}
                        isCompleted={true}
                        githubLink="https://github.com/Mickael-Desclaux/chess"
                    />
                    <Project
                        title="Portfolio"
                        imageSrc="../../projects/portfolio.png"
                        description={
                            <>
                                <b>J'ai réalisé ce portfolio afin de me présenter plus en détail que sur un simple CV et lettre de motivation. Cela a aussi
                                    été un très bon exercice pour mettre en oeuvre mes compétences en React.</b><br /><br />

                                <b><u>Fonctionnalités principales:</u></b><br /><br />

                                <ul>
                                    <li>
                                        <b>- Présentation personnelle:</b> Page d'accueil dédiée à ma présentation ainsi que mes compétences.<br />
                                    </li>
                                    <li>
                                        <b>- Projets:</b> Page dédiée à la liste de mes projets terminés ou en cours.<br />
                                    </li>
                                    <li>
                                        <b>- Dark mode:</b> Implémentation d'un bouton permettant de switcher facilement entre le light et le dark mode.<br /><br />
                                    </li>
                                </ul>

                                <b>Ce projet m’a permis de continuer mon apprentissage de React et sa création de composants réutilisables, ainsi
                                    que de ses nombreuses fonctionnalités permettant un rendu fluide et dynamique des pages.</b><br /><br />
                            </>
                        }
                        technologies={[
                            "../../icons/react.svg",
                            "../../icons/tailwind.svg",
                        ]}
                        isCompleted={true}
                        githubLink='https://github.com/Mickael-Desclaux/CV'
                    />
                    <Project
                        title="Garage Parrot"
                        imageSrc="../../projects/garage.png"
                        description={
                            <>
                                <b>Ce projet a été réalisé dans le cadre de ma formation de Développeur Web et Web Mobile. Il s’agit d’un site web pour un garage
                                    automobile, conçu pour présenter ses prestations et fidéliser ses clients.</b><br /><br />

                                <b><u>Fonctionnalités principales:</u></b><br /><br />

                                <ul>
                                    <li>
                                        <b>- Présentation des services:</b> Une page dédiée permet de présenter les différentes prestations proposées par
                                        le garage : entretien, réparations, carrosserie et vente de véhicules d’occasion.<br />
                                    </li>
                                    <li>
                                        <b>- Annonces de véhicules d’occasion:</b> Une page avec un système de filtres dynamiques (prix, marque,
                                        kilométrage, etc.) sans rechargement pour simplifier la recherche. Chaque véhicule dispose d’une page détaillée avec
                                        ses caractéristiques, une galerie d’images et un formulaire de contact pour obtenir plus d’informations.<br />
                                    </li>
                                    <li>
                                        <b>- Gestion des avis:</b> Une section où les clients peuvent déposer des avis, modérés ensuite par les employés pour
                                        garantir leur pertinence et respect.<br />
                                    </li>
                                    <li>
                                        <b>- Rôles et gestion du contenu:</b> Les administrateurs peuvent modifier le contenu de la page d’accueil et
                                        gérer les comptes employés. Les employés, quant à eux, peuvent gérer les véhicules en vente, traiter les demandes de contact et modérer les avis des clients.<br /><br />
                                    </li>
                                </ul>

                                <b>Ce projet m’a permis de travailler sur des fonctionnalités complètes et dynamiques, tout en améliorant mes compétences
                                    en gestion de contenu et expérience utilisateur.</b><br /><br />
                            </>
                        }

                        technologies={[
                            "../../icons/php.svg",
                            "../../icons/symfony.svg",
                            "../../icons/js.svg",
                            "../../icons/bootstrap.svg",
                            "../../icons/postgresql.svg"]}
                        isCompleted={true}
                        githubLink="https://github.com/Mickael-Desclaux/Garage_Parrot"
                    />
                    <Project
                        title="Jeu de dés"
                        imageSrc="../../projects/dice-roll.jpg"
                        description={<>
                            <b>Ce projet avait pour objectif de mettre en pratique mes compétences en JavaScript en créant un jeu de dés dynamique,
                                tout en manipulant le DOM pour dynamiser mes pages web.</b><br /><br />

                            <b><u>Fonctionnalités principales :</u></b><br /><br />

                            <ul>
                                <li>
                                    <b>- Gestion des joueurs:</b> Deux joueurs peuvent jouer sur le même écran, chacun disposant d’un score temporaire
                                    (ROUND) et d’un score global (GLOBAL).<br />
                                </li>
                                <li>
                                    <b>- Lancer de dé:</b> Les joueurs peuvent lancer un dé autant de fois qu’ils le souhaitent pour accumuler des
                                    points dans leur score ROUND. Si le dé affiche un 1, le score ROUND est perdu et le tour passe à l’autre joueur.<br />
                                </li>
                                <li>
                                    <b>- Option "Hold":</b> Les joueurs peuvent à tout moment décider de transférer leur score ROUND dans leur score
                                    GLOBAL pour sécuriser leurs points et passer le tour à l’adversaire.<br />
                                </li>
                                <li>
                                    <b>- Nouvelle partie:</b> L’application permet de réinitialiser les scores et de démarrer une nouvelle partie
                                    facilement.<br />
                                </li>
                                <li>
                                    <b>- Conditions de victoire:</b> Le premier joueur atteignant 100 points dans son score GLOBAL remporte la partie.<br /><br />
                                </li>
                            </ul>

                            <b>Ce projet m’a permis de maîtriser la manipulation du DOM et de créer des fonctionnalités interactives, tout en
                                renforçant mes connaissances sur la gestion de la logique de jeu en JavaScript.</b><br /><br />
                        </>}

                        technologies={[
                            "../../icons/html.svg",
                            "../../icons/css.svg",
                            "../../icons/js.svg",
                            "../../icons/bootstrap.svg"
                        ]}
                        isCompleted={true}
                        additionalNote={
                            <>
                                <Typography
                                    variant='lead'
                                    className='mt-10'
                                    color={`${darkMode ? 'white' : 'blue-gray'}`}>Vous pouvez vous rendre sur l'application ici: <a href="https://lets-roll-game.netlify.app">
                                        <u>https://lets-roll-game.netlify.app</u></a>
                                </Typography>
                            </>
                        }
                        githubLink="https://github.com/Mickael-Desclaux/Evaluation-JavaScript"
                    />
                    <Project
                        title="Club de Tennis"
                        imageSrc="../../projects/tennis.png"
                        description={
                            <>
                                <b>Mon tout premier site statique en HTML/CSS a été conçu pour une association fictive, un club de tennis, afin de
                                    présenter ses événements et activités.</b><br /><br />

                                <b><u>Fonctionnalités principales :</u></b><br /><br />

                                <ul>
                                    <li>
                                        <b>- Page d’accueil:</b> Présentation du club de tennis avec une brève introduction et un design simple et clair.<br />
                                    </li>
                                    <li>
                                        <b>- Page des événements:</b> Liste des événements à venir, avec des informations essentielles comme les dates
                                        et lieux des matchs ou tournois.<br />
                                    </li>
                                    <li>
                                        <b>- Footer:</b> Informations de contact du club, comme le numéro de téléphone, l'adresse email ou l'adresse postale, ainsi
                                        que les liens vers les réseaux sociaux du club.
                                        <br /><br />
                                    </li>
                                </ul>

                                <b>Ce projet m’a permis d’apprendre les bases du développement web, en structurant le contenu avec HTML et en le
                                    stylisant avec CSS et Bootstrap.</b><br /><br />
                            </>
                        }

                        technologies={[
                            "../../icons/html.svg",
                            "../../icons/css.svg",
                            "../../icons/bootstrap.svg"
                        ]}
                        isCompleted={true}
                        additionalNote={
                            <>
                                <Typography
                                    variant='lead'
                                    className='mt-10'
                                    color={`${darkMode ? 'white' : 'blue-gray'}`}>Vous pouvez vous rendre sur l'application ici: <a href="https://club-tennis-mickael-desclaux-arramond.netlify.app/">
                                        <u>https://club-tennis-mickael-desclaux-arramond.netlify.app</u></a>
                                </Typography>
                            </>
                        }
                        githubLink="https://github.com/Mickael-Desclaux/Evaluation-HTML-CSS"
                    />
                </div>
            </div>
        </div>
    )
}
