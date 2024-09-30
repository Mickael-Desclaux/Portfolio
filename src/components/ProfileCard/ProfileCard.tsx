import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";

export default function ProfileCard() {

    return (
        <Card className="w-96" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <CardHeader floated={false} className="h-80" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <img src="../../profile-card/pdp1.jpg" alt="profile-picture" className="w-full h-full object-cover" />
            </CardHeader>
            <CardBody className="text-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <Typography variant="h4" color="blue-gray" className="mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Mickaël Desclaux-Arramond
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Développeur web fullstack
                </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-1" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <Tooltip content="Github">
                    <Typography
                        as="a"
                        href="https://github.com/Mickael-Desclaux"
                        variant="lead"
                        color="blue"
                        textGradient placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                        <FontAwesomeIcon icon={faSquareGithub} size='2x' color='black' />
                    </Typography>
                </Tooltip>
                <Tooltip content="Linkedin">
                    <Typography
                        as="a"
                        href="https://www.linkedin.com/in/micka%C3%ABl-desclaux-arramond-933a4a181/"
                        variant="lead"
                        color="light-blue"
                        textGradient placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                        <FontAwesomeIcon icon={faLinkedin} size='2x' color='#0072B1' />
                    </Typography>
                </Tooltip>
            </CardFooter>
        </Card>
    )
}