import { Typography } from '@material-tailwind/react'
import './Header.css'

export default function Header() {

    return (
        <header className='mt-5'>
            <Typography variant='h1' className='mb-1 md:text-4xl text-2xl mb-2'>Mickaël DESCLAUX-ARRAMOND</Typography>
            <Typography variant='h2' className='mb-2 md:text-3xl text-xl underline'>Développeur Web Back-End</Typography>
            <div className='flex justify-center flex-row gap-4 mt-2'>
                <img className='md:max-w-[48px] max-w-[36px]' src="../../icons/java.svg" alt="Java" />
                <img className='md:max-w-[48px] max-w-[36px]' src="../../icons/spring-boot.png" alt="Spring Boot" />
                <img className='md:max-w-[48px] max-w-[36px]' src="../../icons/ts.svg" alt="TypeScript" />
                <img className='md:max-w-[48px] max-w-[36px]' src="../../icons/nest.svg" alt="NestJS" />
                <img className='md:max-w-[48px] max-w-[36px]' src="../../icons/express.svg" alt="ExpressJS" />
                <img className='md:max-w-[48px] max-w-[36px]' src="../../icons/react.svg" alt="ReactJS" />
                <img className='md:max-w-[48px] max-w-[36px]' src="../../icons/docker.svg" alt="Docker" />
            </div>
        </header>
    )
}