import Project from '../Project/Project'
import Title from '../Title/Title'
import './MyProjects.css'

export default function MyProjects() {
    return (
        <div>
            <Title title="Mes réalisations" />
            <div className='projects-list'>
            <Project
                title="TravelMates"
                imageSrc="../../projects/dice-roll.jpg"
                description="Application open source réalisée en méthode AGILE : équipe de 3 développeurs + lead dev"
                technologies={[
                    "../../icons/react.svg",
                    "../../icons/nest.svg",
                    "../../icons/node.svg",
                    "../../icons/express.svg",
                    "../../icons/tailwind.svg",
                    "../../icons/mysql.svg"
                ]}
                githubLink="https://github.com/Mickael-Desclaux/Evaluation-JavaScript"
            />
            <Project
                title="Garage Parrot"
                imageSrc="../../projects/dice-roll.jpg"
                description="Lorem ipsum dolor sit amet"
                technologies={[
                    "../../icons/symfony.svg",
                    "../../icons/bootstrap.svg",
                    "../../icons/js.svg",
                    "../../icons/postgresql.svg"]}
                githubLink="https://github.com/Mickael-Desclaux/Garage_Parrot"
            />
            <Project
                title="Blog de lecture"
                imageSrc="../../projects/dice-roll.jpg"
                description="Blog de mes lectures en anglais"
                technologies={[
                    "../../icons/ts.svg",
                    "../../icons/react.svg",
                    "../../icons/c-sharp.svg",
                    "../../icons/postgresql.svg",
                    
                ]}
                githubLink="https://github.com/Mickael-Desclaux/MyBlog"
            />
            <Project
                title="Jeu de dés"
                imageSrc="../../projects/dice-roll.jpg"
                description="Jeu de dés en JS"
                technologies={[
                    "../../icons/html.svg",
                    "../../icons/css.svg",
                    "../../icons/js.svg",
                    "../../icons/bootstrap.svg"
                ]}
                githubLink="https://github.com/Mickael-Desclaux/Evaluation-JavaScript"
            />
            </div>
        </div>
    )
}
