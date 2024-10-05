import { Typography } from '@material-tailwind/react';
import ProfileCard from '../ProfileCard/ProfileCard';
import Title from '../Title/Title';

export default function AboutMe() {
    return (
        <div>
            <Title title="À propos de moi"/>
            
            <div className="flex flex-col md:flex-row justify-center items-start w-full">
                <div className="md:w-1/2">
                    <Typography className='m-5' variant='lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet felis eget ante auctor ultrices. 
                        Vivamus finibus dolor nunc, vel efficitur nisi luctus a. Integer auctor accumsan risus, id consectetur dui 
                        tempus quis. Donec porta odio a felis laoreet ullamcorper. Integer fringilla eros eget sem lacinia, quis 
                        ultrices eros condimentum. Morbi congue nulla nec neque vulputate, id ultrices erat vestibulum. Nullam ultricies 
                        maximus sapien at volutpat. Vestibulum fermentum aliquet arcu, in lobortis ipsum maximus vitae. Sed malesuada mollis 
                        tortor, non consectetur sapien consectetur condimentum. Suspendisse potenti. Integer eget nisl a augue sagittis congue. 
                        Etiam pharetra consequat libero nec pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada 
                        fames ac turpis egestas. Duis pellentesque, turpis sed posuere ultricies, eros sem sollicitudin nunc, aliquet cursus 
                        orci leo vitae dolor. Fusce congue laoreet diam, id feugiat ipsum ultrices et. Donec semper leo non volutpat pretium.</Typography>
                </div>
                <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center w-full">
                    <ProfileCard />
                </div>
            </div>
        </div>
    );
}
