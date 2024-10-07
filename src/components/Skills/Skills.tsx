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
                        Au cours de mes formations, j'ai pu acquérir une solide base dans la création
                        d'interfaces utilisateur modernes et réactives. J'ai appris à maîtriser les concepts
                        essentiels du développement web, notamment l'utilisation de bibliothèques et de frameworks
                        comme React, ainsi que les bonnes pratiques pour structurer des projets front-end efficaces.
                        Ces compétences me permettent de concevoir des applications web performantes, intuitives
                        et adaptées aux besoins des utilisateurs.
                    </Typography>
                    <div className="flex md:align-center flex-wrap md:flex-nowrap">
                        <div className="md:w-1/2 me-12">
                            <Typography variant="h4" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                Ma stack technique
                            </Typography>
                            <Typography variant="h5" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                <img src="../../icons/react.svg" alt="React" className="inline-block w-10 h-10 align-middle me-2" />
                                React
                            </Typography>
                            <Typography variant="paragraph" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                                J'ai pu apprendre à développer en React lors de ma formation chez Alt, en réalisant le front de mon projet
                                d'étude, l'application TravelMates. Je me suis rapidement senti à l'aise avec ce framework et ces fonctionnalités, au
                                point d'en devenir mon framework par défaut lors de la création de nouveaux projets web.
                            </Typography>
                            <Typography variant="h5" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                <img src="../../icons/blazor.svg" alt="Blazor" className="inline-block w-10 h-10 align-middle me-2" 
                                style={{
                                    filter: darkMode ? 'invert(100%)' : 'invert(0%)',
                                }} />
                                Blazor
                            </Typography>
                            <Typography variant="paragraph" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                                J'ai découvert ce framework lors de mon apprentissage du C#, que j'ai réalisé en autodidacte. Il s'agit d'un framework
                                permettant de développer des applications single-page, tout comme React mais en C#. J'ai pu utiliser Blazor pour la
                                réalisation de mon blog de lecture, afin de développer l'entièreté de l'application en utilisant le langage C#.
                            </Typography>
                            <Typography variant="h5" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                <img src="../../icons/html.svg" alt="HTML" className="inline-block w-10 h-10 me-2" />
                                <img src="../../icons/css.svg" alt="CSS" className="inline-block w-10 h-10 me-2" />
                                <img src="../../icons/js.svg" alt="JavaScript" className="inline-block w-10 h-10 me-2" />
                                HTML / CSS / JavaScript
                            </Typography>
                            <Typography variant="paragraph" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                                Au début de ma reconversion en développeur web, j'ai appris les langages HTML / CSS et JavaScript qui
                                sont essentiels pour le développement front-end.
                            </Typography>
                        </div>
                        <div className="md:ms-12 md:w-1/2">
                            <Typography variant="h4" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                Mes outils de développement
                            </Typography>
                            <Typography variant="h5" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                <img src="../../icons/figma.svg" alt="Figma" className="inline-block w-10 h-10 align-middle me-2" />
                                Figma
                            </Typography>
                            <Typography variant="paragraph" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                                J'ai appris à réaliser le maquettage de mes applications en utilisant l'application Figma. Ses fonctionnalités
                                de création de composants réutilisables et la possibilité de créer des prototypes sont pour moi des atouts majeurs
                                lorsque je me lance dans un nouveau projet. 
                            </Typography>
                            <Typography variant="h5" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                <img src="../../icons/tailwind.svg" alt="Tailwind" className="inline-block w-10 h-10 align-middle me-2" />
                                Tailwind CSS et Material Tailwind
                            </Typography>
                            <Typography variant="paragraph" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                                J'ai découvert cette librairie lors de ma formation chez Alt, et je l'ai beaucoup utilisée pour la création
                                de mon application TravelMates ainsi que pour ce CV. L'utilisation de composants Material Tailwind dans React
                                permet un développement plus rapide du front-end avec un design sobre mais efficace. 
                            </Typography>
                            <Typography variant="h5" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-6">
                                <img src="../../icons/bootstrap.svg" alt="Bootstrap" className="inline-block w-10 h-10 align-middle me-2" />
                                Bootstrap
                            </Typography>
                            <Typography variant="paragraph" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-2">
                                J'ai beaucoup utilisé Bootstrap lors de ma formation chez STUDI, et pour réaliser des projets comme mon 
                                application Garage Parrot et mon jeu de dés. 
                            </Typography>
                        </div>
                    </div>
                </>,
        },
        {
            label: "Back-end",
            value: "back-end",
            icon: ServerStackIcon,
            desc: `Because it's about motivating the doers. Because I'm here
            to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Soft Skills",
            value: "soft-skills",
            icon: AcademicCapIcon,
            desc: `<a>We're not always in the position that we want to be at.
            We're constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.</a>`,
        },
    ];

    return (
        <>
            <Title title="Mes compétences" />
            <div className="flex justify-center">
                <div className="w-4/5">
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