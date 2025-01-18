import { AcademicCapIcon, CodeBracketIcon, ServerStackIcon } from "@heroicons/react/16/solid";
import Title from "../Title/Title";
import { Tabs, TabsHeader, Tab, TabsBody, TabPanel, Typography } from "@material-tailwind/react";
import React, { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeProvider";

export default function Skills() {

    const { darkMode } = useContext(DarkModeContext)

    const data = [
        {
            label: "Front-end",
            value: "front-end",
            icon: CodeBracketIcon,
            desc:
                <>
                    <Typography variant="lead" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                        En tant que développeur front-end, je maîtrise les technologies essentielles pour créer des interfaces web modernes
                        et performantes. De HTML, CSS et JavaScript aux frameworks comme React, je suis capable de concevoir des expériences
                        utilisateur interactives et responsives. Mon expertise s'étend également à des outils comme Tailwind et Material Tailwind,
                        me permettant de créer des designs esthétiques et fonctionnels. Mon approche est axée sur la simplicité, la réactivité et la
                        qualité du code, afin d’offrir des applications web fluides et accessibles.
                    </Typography>
                    <div className="flex md:align-center flex-wrap md:flex-nowrap">
                        <div className="md:w-1/2">
                            <Typography variant="h4" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                Ma stack technique
                            </Typography>
                            <Typography variant="h5" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                <img src="../../icons/react.svg" alt="React" className="inline-block w-10 h-10 align-middle me-2" />
                                React
                            </Typography>
                            <Typography variant="paragraph" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                                J’utilise React pour développer des interfaces utilisateurs interactives et dynamiques. Grâce à son approche basée
                                sur les composants, React m’a permis de construire des applications modulaires et réutilisables, tout en optimisant
                                les performances avec son système de gestion d’état et de rendu efficace. J’apprécie particulièrement la flexibilité de
                                React, qui me permet d'intégrer facilement des bibliothèques externes et d’organiser le code de manière claire et maintenable,
                                tout en offrant une expérience utilisateur fluide et réactive.
                            </Typography>
                            <Typography variant="h5" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                <img src="../../icons/html.svg" alt="HTML" className="inline-block w-10 h-10 me-2" />
                                <img src="../../icons/css.svg" alt="CSS" className="inline-block w-10 h-10 me-2" />
                                <img src="../../icons/js.svg" alt="JavaScript" className="inline-block w-10 h-10 me-2" />
                                HTML / CSS / JavaScript
                            </Typography>
                            <Typography variant="paragraph" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                                J’ai une solide maîtrise de HTML, CSS et JavaScript, les bases fondamentales du développement web. HTML me permet
                                de structurer efficacement le contenu, CSS de créer des designs modernes et responsives, tandis que JavaScript me
                                permet d’ajouter de l’interactivité et des fonctionnalités dynamiques. Ces technologies sont au cœur de mes projets web,
                                et je les utilise pour créer des interfaces utilisateurs intuitives et performantes, tout en m’assurant que mes applications
                                sont accessibles et optimisées pour tous les types de dispositifs.
                            </Typography>
                        </div>
                        <div className="md:ms-12 md:w-1/2">
                            <Typography variant="h4" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                Mes outils de développement
                            </Typography>
                            <Typography variant="h5" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                <img src="../../icons/cypress.svg" alt="Cypress" className="inline-block w-10 h-10 align-middle me-2"
                                    style={{
                                        filter: darkMode ? 'invert(100%)' : 'invert(0%)',
                                    }} />
                                Cypress
                            </Typography>
                            <Typography variant="paragraph" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                                J’utilise Cypress pour réaliser des tests end-to-end sur mes applications web. Cet outil puissant m’a permis d'automatiser
                                la validation des flux utilisateurs, en simulant des interactions réelles avec l'interface. Grâce à Cypress, j’ai
                                pu tester de manière fluide et efficace des scénarios complets, garantissant ainsi que l’application fonctionne
                                correctement de bout en bout. Son intégration facile et ses rapports détaillés m’ont permis de rapidement identifier
                                et corriger les erreurs, tout en améliorant la fiabilité globale des projets.
                            </Typography>
                            <Typography variant="h5" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                <img src="../../icons/figma.svg" alt="Figma" className="inline-block w-10 h-10 align-middle me-2" />
                                Figma
                            </Typography>
                            <Typography variant="paragraph" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                                J’utilise Figma pour la conception et le prototypage d’interfaces utilisateur. Cet outil m’a permis de collaborer facilement avec
                                des designers et des développeurs, tout en créant des maquettes interactives et des prototypes fonctionnels. Grâce à sa
                                flexibilité et à ses fonctionnalités de collaboration en temps réel, Figma a facilité la communication entre les équipes et
                                m’a permis de transformer rapidement des idées en designs visuels clairs et adaptés aux besoins des utilisateurs.
                            </Typography>
                            <Typography variant="h5" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                <img src="../../icons/tailwind.svg" alt="Tailwind" className="inline-block w-10 h-10 align-middle me-2" />
                                Tailwind CSS et Material Tailwind
                            </Typography>
                            <Typography variant="paragraph" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                                J'ai utilisé Tailwind CSS et Material Tailwind pour concevoir des interfaces utilisateur modernes et réactives. Tailwind m’a
                                permis de personnaliser facilement les styles avec une approche utilitaire, offrant une grande flexibilité tout en gardant le
                                code propre et maintenable. En utilisant Material Tailwind, j’ai pu intégrer des composants React basés sur le design
                                system de Material Design, ce qui a simplifié la création d'interfaces cohérentes et esthétiques. Ces outils m'ont permis de
                                gagner en productivité tout en offrant des solutions visuelles de haute qualité adaptées aux besoins de mes projets.
                            </Typography>
                            <Typography variant="h5" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                <img src="../../icons/bootstrap.svg" alt="Bootstrap" className="inline-block w-10 h-10 align-middle me-2" />
                                Bootstrap
                            </Typography>
                            <Typography variant="paragraph" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                                J'ai utilisé Bootstrap lors de mes premiers projets web pour accélérer le processus de création d'interfaces utilisateurs réactives et
                                modernes. Grâce à ses composants préconçus et à son système de grille flexible, Bootstrap m’a permis de développer rapidement des pages
                                web bien structurées et adaptées à différents écrans. Cet outil m’a également permis de me familiariser avec les bonnes pratiques du
                                design responsive, tout en offrant une base solide pour personnaliser l'apparence de mes projets selon mes besoins.
                            </Typography>
                        </div>
                    </div>
                </>,
        },
        {
            label: "Back-end",
            value: "back-end",
            icon: ServerStackIcon,
            desc:
                <>
                    <Typography variant="lead" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                        Passionné par la logique et la sécurité, je souhaite me spécialiser dans le développement backend. J'ai acquis une
                        solide maîtrise de technologies telles que Java, Spring Boot, NestJS et des SGBDR comme PostgreSQL et MySQL. Ce domaine
                        me fascine pour sa capacité à gérer la logique métier, les bases de données et la sécurité des applications. Mon objectif
                        est de créer des solutions backend robustes et performantes, tout en garantissant une gestion optimale des données et une
                        protection des systèmes contre les vulnérabilités.
                    </Typography>
                    <div className="flex md:align-center flex-wrap md:flex-nowrap">
                        <div className="md:w-1/2">
                            <Typography variant="h4" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                Ma stack technique
                            </Typography>
                            <Typography variant="h5" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                <img src="../../icons/java.svg" alt="Java" className="inline-block w-10 h-10 me-2" />
                                <img src="../../icons/spring-boot.png" alt="Spring Boot" className="inline-block w-10 h-10 me-2" />
                                Java / Spring Boot
                            </Typography>
                            <Typography variant="paragraph" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                                J’ai débuté Java à la fin de l'année dernière, en me plongeant dans le développement backend avec Spring Boot. Ce framework m’a rapidement
                                séduit par sa simplicité d’utilisation et ses nombreuses fonctionnalités prêtes à l’emploi, comme la gestion des dépendances et la
                                sécurité. Aujourd'hui, Java est devenu mon langage backend préféré pour mes projets personnels, car il offre une grande robustesse, une
                                excellente performance et une forte communauté. J’apprécie particulièrement sa structure claire et ses outils puissants pour créer des
                                applications fiables et scalables.
                            </Typography>
                            <Typography variant="h5" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                <img src="../../icons/nest.svg" alt="Nest" className="inline-block w-10 h-10 align-middle me-2" />
                                <img src="../../icons/express.svg" alt="Express" className="inline-block w-10 h-10 align-middle me-2" />
                                NestJS / Express
                            </Typography>
                            <Typography variant="paragraph" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                                J’ai utilisé NestJS pour développer l’API de TravelMates, ce qui m’a permis de structurer efficacement l’application backend
                                en suivant une architecture modulaire et scalable. Grâce à son utilisation de TypeScript et à son approche basée sur les
                                décorateurs et les modules, NestJS m’a offert un cadre robuste pour créer des fonctionnalités complexes tout en assurant une
                                excellente maintenabilité et lisibilité du code. Ce framework m’a également permis d’intégrer facilement des outils comme les
                                contrôleurs, les services et les middlewares, optimisant ainsi le développement de l'API.
                            </Typography>
                            <Typography variant="h5" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                <img src="../../icons/symfony.svg" alt="Symfony" className="inline-block w-10 h-10 me-2" />
                                Symfony
                            </Typography>
                            <Typography variant="paragraph" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                                J'ai réalisé mes premières applications comportant du back-end en utilisant ce framework PHP, notamment mon projet de
                                garage automobile (garage Parrot). La documentation Symfony étant très complète, j'ai rapidement appris à utiliser 
                                ce framework et à développer des applications monolithiques simples et sécurisées.
                            </Typography>
                            <Typography variant="h5" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                <img src="../../icons/postgresql.svg" alt="PostgreSQL" className="inline-block w-10 h-10 me-2" />
                                <img src="../../icons/mysql.svg" alt="MySQL" className="inline-block w-10 h-10 me-2" />
                                PostgreSQL / MySQL
                            </Typography>
                            <Typography variant="paragraph" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                                J’ai travaillé avec PostgreSQL et MySQL pour gérer les bases de données de mes projets. PostgreSQL m’a permis de bénéficier
                                d’une gestion avancée des données, notamment avec des requêtes complexes et des transactions fiables, tout en offrant une grande
                                flexibilité pour la modélisation des données. D’un autre côté, MySQL m’a offert une solution légère et performante pour des applications
                                nécessitant des requêtes rapides et une gestion simple des données. Ces deux SGBDR m’ont permis d’acquérir une solide maîtrise de
                                la gestion de bases de données relationnelles et de choisir l'outil le plus adapté en fonction des besoins du projet.
                            </Typography>
                        </div>
                        <div className="md:ms-12 md:w-1/2">
                            <Typography variant="h4" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                Mes outils de développement
                            </Typography>
                            <Typography variant="h5" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                <img src="../../icons/postman.svg" alt="Postman" className="inline-block w-10 h-10 align-middle me-2" />
                                Postman
                            </Typography>
                            <Typography variant="paragraph" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                                J’utilise Postman dans tous mes projets d'API backend pour tester, déboguer et valider mes endpoints. Cet outil me permet de simuler
                                des requêtes HTTP, d'analyser les réponses et de m'assurer que chaque fonctionnalité fonctionne correctement avant de passer à l’étape
                                suivante. Grâce à Postman, je peux rapidement détecter des erreurs, améliorer la qualité de mes APIs et garantir une communication fluide
                                entre le frontend et le backend.
                            </Typography>
                            <Typography variant="h5" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                <img src="../../icons/docker.svg" alt="Docker" className="inline-block w-10 h-10 align-middle me-2" />
                                Docker
                            </Typography>
                            <Typography variant="paragraph" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                                Docker est un outil extrêmement intéressant pour le déploiement d'applications et l'intégration continue dans le cadre du DevOps.
                                Découvert lors de ma formation chez Alt, il permet de créer, déployer et exécuter des applications à l'aide de conteneurs. Ces conteneurs sont
                                légers, portables et assurent une isolation efficace des environnements, ce qui simplifie la gestion des dépendances et garantit une meilleure cohérence
                                entre les environnements de développement, de test et de production.
                            </Typography>
                            <Typography variant="h5" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                <img src="../../icons/heroku.svg" alt="Heroku" className="inline-block w-10 h-10 align-middle me-2" />
                                Heroku
                            </Typography>
                            <Typography variant="paragraph" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                                J’ai utilisé Heroku pour déployer ma première application fullstack, une expérience qui m’a permis de découvrir les aspects essentiels du 
                                déploiement en production. Grâce à sa simplicité et à ses fonctionnalités prêtes à l’emploi, j’ai pu configurer mon environnement, connecter mon 
                                API et mon frontend, et rendre l’application accessible en ligne. Cette étape m’a non seulement familiarisé avec le déploiement cloud, mais m’a 
                                également donné une vision plus concrète du cycle de vie complet d’une application.
                            </Typography>
                            <Typography variant="h5" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                <img src="../../icons/prisma.svg" alt="Prisma" className="inline-block w-10 h-10 align-middle me-2"
                                    style={{
                                        filter: darkMode ? 'invert(100%)' : 'invert(0%)',
                                    }} />
                                Prisma
                            </Typography>
                            <Typography variant="paragraph" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                                Pour l’API TravelMates, j’ai utilisé Prisma comme ORM afin de simplifier la gestion de la base de données. Cet outil m’a permis de travailler
                                efficacement avec des modèles de données tout en profitant d’une abstraction puissante pour les requêtes. Grâce à Prisma, j’ai pu structurer
                                et optimiser l’interaction entre l’API et la base de données, tout en assurant une grande lisibilité et maintenabilité du code.
                            </Typography>
                            <Typography variant="h5" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                <img src="../../icons/jest.svg" alt="Jest" className="inline-block w-10 h-10 align-middle me-2"/>
                                Jest
                            </Typography>
                            <Typography variant="paragraph" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                                Lors du développement de mon API TravelMates, j’ai utilisé Jest pour effectuer des tests unitaires. Cet outil m’a permis de garantir la fiabilité et
                                la robustesse des différentes fonctionnalités de l’API en détectant rapidement les erreurs et en validant le comportement attendu de chaque composant.
                                Grâce à Jest, j’ai pu améliorer la qualité globale du code tout en renforçant ma maîtrise des tests automatisés.
                            </Typography>
                        </div>
                    </div>
                </>,
        },
        {
            label: "Soft Skills",
            value: "soft-skills",
            icon: AcademicCapIcon,
            desc:
                <>
                    <Typography variant="lead" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                        Tout au long de mon parcours, j’ai mis un accent particulier sur le développement de mes compétences interpersonnelles et ma
                        capacité à évoluer dans des environnements dynamiques. J’ai appris à aborder les défis avec une attitude positive, à rester
                        adaptable face aux imprévus et à travailler de manière collaborative pour obtenir des résultats de qualité. Mon approche repose
                        sur une combinaison de curiosité, de rigueur et de communication, ce qui me permet de contribuer efficacement à des projets
                        complexes tout en continuant à grandir tant sur le plan professionnel que personnel.
                    </Typography>
                    <div className="md:grid grid-rows-2 grid-cols-2 gap-6">
                        <div>
                            <Typography variant="h5" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                <img src="../../icons/study.svg" alt="Apprentissage" className="inline-block w-12 h-12 align-middle me-2" />
                                Goût de l'apprentissage
                            </Typography>
                            <Typography variant="paragraph" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                                J’ai une soif constante d’apprendre et d’élargir mes compétences. Dans un domaine aussi évolutif que le développement, je prends plaisir à explorer de
                                nouvelles technologies, frameworks ou méthodologies, et à rester à jour sur les dernières tendances. Que ce soit en autodidacte ou à travers des formations,
                                chaque nouvelle connaissance est une opportunité de me surpasser et d’améliorer mes projets. Cette curiosité me permet de m’adapter rapidement aux
                                nouveautés et de continuer à progresser dans ma carrière de développeur.
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="h5" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                <img src="../../icons/idea.svg" alt="Pensée Analytique" className="inline-block w-12 h-12 align-middle me-2" />
                                Pensée analytique
                            </Typography>
                            <Typography variant="paragraph" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                                Ma pensée analytique est l'un de mes atouts majeurs dans le développement. J’aime décomposer des problèmes complexes en éléments plus simples afin de mieux les
                                comprendre et d’identifier les solutions les plus adaptées. Cette capacité me permet d’aborder les défis de manière méthodique, que ce soit pour optimiser une
                                application, corriger un bug ou concevoir une architecture logicielle. J’ai également un souci du détail qui m’aide à anticiper les éventuelles difficultés et à
                                créer des solutions robustes et efficaces. Pour moi, l’analyse est au cœur d’un développement de qualité.
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="h5" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                <img src="../../icons/trophy.svg" alt="Challenge" className="inline-block w-12 h-12 me-2" />
                                Goût du challenge
                            </Typography>
                            <Typography variant="paragraph" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                                J’ai un véritable goût pour les défis techniques et les projets ambitieux. J’apprécie particulièrement me lancer dans des initiatives complexes, même lorsque
                                je ne maîtrise pas encore tous les outils nécessaires. Chaque obstacle rencontré devient une opportunité d’apprentissage, et cette approche me permet de
                                développer de nouvelles compétences tout en renforçant ma capacité à résoudre des problèmes. Pour moi, la curiosité et la persévérance sont essentielles pour
                                évoluer en tant que développeur et créer des solutions innovantes.
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="h5" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                <img src="../../icons/teamwork.svg" alt="Travail d'équipe" className="inline-block w-12 h-12 align-middle me-2" />
                                Travail d'équipe
                            </Typography>
                            <Typography variant="paragraph" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                                J’apprécie le travail d’équipe, car il permet de combiner les forces et les idées de chacun pour atteindre des objectifs communs. Collaborer avec d’autres développeurs
                                me pousse à partager mes connaissances, à apprendre des autres et à m’adapter à différentes façons de penser. Je sais écouter, communiquer efficacement et contribuer
                                activement à la dynamique du groupe, car je suis convaincu que les meilleures solutions naissent d’un effort collectif. Pour moi, un bon esprit d’équipe est essentiel
                                pour réussir dans le développement de projets ambitieux.
                            </Typography>
                        </div>
                    </div>
                </>,
        },
    ];

    return (
        <>
            <Title title="Mes compétences" />
            <div className="flex justify-center pb-12">
                <div className="w-full m-4 md:w-4/5">
                    <Tabs value="front-end">
                        <TabsHeader>
                            {data.map(({ label, value, icon }) => (
                                <Tab key={value} value={value}>
                                    <div className="flex items-center gap-2">
                                        {React.createElement(icon, { className: "w-5 h-5" })}
                                        {label}
                                    </div>
                                </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody>
                            {data.map(({ value, desc }) => (
                                <TabPanel key={value} value={value}>
                                    {desc}
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>
                </div>
            </div>
        </>
    )
}