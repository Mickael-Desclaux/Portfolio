import { Typography } from '@material-tailwind/react'
import './Title.css'

interface TitleProps {
    title: string
}

export default function Title({title}: TitleProps) {

    return (
        <Typography variant='h3' color='white' className='title flex justify-center'>{title}</Typography>
    )
}