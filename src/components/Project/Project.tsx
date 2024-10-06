import { Card, CardHeader, CardBody, Typography } from '@material-tailwind/react';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { DarkModeContext } from '../../contexts/DarkModeProvider';

interface ProjectProps {
    title: string;
    description: string;
    imageSrc: string;
    technologies: string[];
    githubLink: string;
}

export default function Project({ title, description, imageSrc, technologies, githubLink }: ProjectProps) {

    const {darkMode} = useContext(DarkModeContext)

    return (
        <Card className={`bg-${darkMode ? 'dark-gray' : 'white'} m-10 flex flex-col md:flex-row`}>
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <img
                    src={imageSrc}
                    alt={title}
                    className='object-cover rounded-lg w-full h-full'
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h4" color={`${darkMode ? 'white' : 'blue-gray'}`}>
                    {title}
                </Typography>
                <Typography variant="lead" color={`${darkMode ? 'white' : 'blue-gray'}`} className="mt-3 font-normal">
                    {description}
                </Typography>
                <Typography variant='h5' className='mt-3' color={`${darkMode ? 'white' : 'blue-gray'}`}>Technologies utilisées:
                    <div className="flex justify-start mt-3">
                        {technologies.map((tech: string, index: number) => (
                            <img src={tech} alt="technologie" className="icon" key={index} />
                        ))}
                    </div>
                </Typography>
                <Typography
                    className='mt-10'
                    variant="lead"
                    color={`${darkMode ? 'white' : 'blue-gray'}`}>
                    Visitez la page GitHub de ce projet :
                    <a href={githubLink}><FontAwesomeIcon icon={faSquareGithub} size='3x' color={`${darkMode ? 'white' : 'blue-gray'}`} className='ms-3 inline-block align-middle'/></a>
                </Typography>
            </CardBody>
        </Card>
    )
}