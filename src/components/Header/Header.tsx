import './Header.css'

export default function Header() {

    return (
        <header>
            <h1 id='name'>Mickaël DESCLAUX-ARRAMOND</h1>
            <h2 id='title'>Développeur Web Fullstack</h2>
            <div className='stack-icons'>
                <img className='icon' src="../../icons/ts.svg" alt="TypeScript" />
                <img className='icon' src="../../icons/express.svg" alt="ExpressJS" />
                <img className='icon' src="../../icons/react.svg" alt="ReactJS" />
                <img className='icon' src="../../icons/nest.svg" alt="NestJS" />
                <img className='icon' src="../../icons/c-sharp.svg" alt="C#" />
                <img className='icon' src="../../icons/symfony.svg" alt="Symfony" />
                <img className='icon' src="../../icons/docker.svg" alt="Docker" />
            </div>
        </header>
    )
}