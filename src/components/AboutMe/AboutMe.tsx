import { Typography } from '@material-tailwind/react';
import ProfileCard from '../ProfileCard/ProfileCard';
import Title from '../Title/Title';

export default function AboutMe() {
    return (
        <div>
            <Title title="À propos de moi" />

            <div className="flex flex-col md:flex-row w-full justify-center mt-4">
                <div className="md:w-1/2">
                    <Typography className='m-6' variant='lead'>
                        🚀 Titulaire d’un BAC +2 en Développement Web et Web Mobile, suivi d’un BAC +3/4 en Conception et Développement d’Applications,
                        j’ai acquis des compétences solides et variées dans le domaine du développement web, tout en affinant ma spécialisation en backend.<br /><br />

                        💻 Mon objectif est de me concentrer sur le développement backend en Java, un domaine qui me passionne pour sa logique, sa gestion
                        des données et la sécurité des applications. Cette spécialisation reflète mon désir de créer des solutions robustes, performantes
                        et sécurisées, tout en garantissant une architecture propre et maintenable.<br /><br />

                        📚 Ce parcours m’a permis de développer une grande motivation et une capacité d’apprentissage continue. Je suis convaincu qu'un profil
                        junior, bien qu'en début de carrière, peut apporter une perspective nouvelle et une forte capacité d'adaptation. Ma curiosité et mon goût 
                        du challenge m’ont toujours poussé à aller au-delà de mes connaissances pour apprendre, évoluer et relever des défis techniques. Je suis 
                        prêt à m'investir pleinement dans des projets ambitieux et à grandir aux côtés d’équipes expérimentées.<br /><br />

                        🤝 Je vous invite à découvrir mes projets et à échanger avec moi si vous êtes à la recherche d'un développeur junior passionné, motivé
                        et en constante évolution !
                    </Typography>
                </div>

                <div className="md:w-1/3 mt-6 flex justify-center w-full">
                    <ProfileCard />
                </div>
            </div>
        </div>
    );
}
