import { Card, CardHeader, CardBody, Typography } from '@material-tailwind/react';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { DarkModeContext } from '../../contexts/DarkModeProvider';
import Title from '../Title/Title';

interface ProjectProps {
    title: string;
    description: React.ReactNode;
    imageSrc: string;
    technologies: string[];
    githubLink?: string;
    isCompleted: boolean;
    additionalNote?: React.ReactNode;
}

export default function Project({ title, description, imageSrc, technologies, githubLink, isCompleted, additionalNote }: ProjectProps) {

    const { darkMode } = useContext(DarkModeContext)

    return (
        <Card className={`bg-${darkMode ? 'dark-gray' : 'white'} mx-auto mt-12 rounded-lg`}>
            <CardHeader
                floated={false}
                shadow={false}
                className="w-full bg-gray-100 mx-auto my-auto"
            >
                <Title title={title} />
                <div className='flex items-center'>
                    <img
                        src={imageSrc}
                        alt={title}
                        className='object-cover md:object-contain w-full max-h-[60vh] min-h-[40vh] my-2 mx-auto'
                    />
                </div>
            </CardHeader>
            <CardBody className='w-full'>
                <Typography variant="lead" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-3 font-normal">
                    {description}
                </Typography>
                <Typography variant='h5' className='mt-3' color={`${darkMode ? 'white' : 'blue-gray'}`}>
                    Technologies utilisées:
                    <div className="flex justify-start mt-3 gap-4">
                        {technologies.map((tech: string, index: number) => (
                            <img src={tech} alt="technologie" className="md:max-w-[48px] max-w-[36px]" key={index} />
                        ))}
                    </div>
                </Typography>
                {additionalNote && (
                    additionalNote
                )}

                {isCompleted ? (
                    <Typography
                        className='mt-5'
                        variant="lead"
                        color={`${darkMode ? 'white' : 'blue-gray'}`}>
                        Visitez la page GitHub de ce projet :
                        <a href={githubLink}>
                            <FontAwesomeIcon icon={faSquareGithub} size='3x' color={`${darkMode ? 'white' : 'blue-gray'}`} className='ms-3 inline-block align-middle' />
                        </a>
                    </Typography>
                ) : <Typography className='mt-5'
                    variant="lead"
                    color={`${darkMode ? 'white' : 'blue-gray'}`}>Ce projet sera bientôt disponible sur ma page GitHub</Typography>}
            </CardBody>
        </Card>

    )
}