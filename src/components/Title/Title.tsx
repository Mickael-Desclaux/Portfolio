import './Title.css'

interface TitleProps {
    title: string
}

export default function Title({title}: TitleProps) {

    return (
        <h3 className='title'>{title}</h3>
    )
}