import { Card, CardHeader, CardBody, Typography, Tooltip } from '@material-tailwind/react';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ProjectProps {
    title: string;
    description: string;
    imageSrc: string;
    technologies: string[];
    githubLink: string;
}

export default function Project({ title, description, imageSrc, technologies, githubLink }: ProjectProps) {

    return (
        <Card className="m-12 max-w[32rem] flex flex-col md:flex-row">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none md:w-1/3"
            >
                <img
                    src={imageSrc}
                    alt={title}
                    className='object-cover w-full h-full rounded-lg'
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h4" color="blue-gray">
                    {title}
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                    {description}
                </Typography>
                <Typography variant='h5' className='mt-3'>Technologies utilisées:
                    <div className="tech-icons flex justify-evenly mt-3">
                        {technologies.map((tech: string, index: number) => (
                            <img src={tech} alt="technologie" className="icon" key={index} />
                        ))}
                    </div>
                </Typography>
                <Tooltip content="Page GitHub">
                    <Typography
                        className='flex align-center mt-10'
                        as="a"
                        href={githubLink}
                        variant="lead"
                        color="blue-gray"
                        textGradient>
                        Visitez la page GitHub de ce projet :
                        <FontAwesomeIcon icon={faSquareGithub} size='2x' color='black' className='ms-3' />
                    </Typography>
                </Tooltip>
            </CardBody>
        </Card>
    )
}