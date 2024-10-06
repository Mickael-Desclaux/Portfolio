import Project from '../Project/Project'
import Title from '../Title/Title'

export default function MyProjects() {
    return (
        <div>
            <Title title="Mes réalisations" />
            <div className='flex justify-center'>
                <div className='md:w-4/5'>
                    <Project
                        title="TravelMates"
                        imageSrc="../../projects/dice-roll.jpg"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet felis eget ante auctor ultrices. 
                        Vivamus finibus dolor nunc, vel efficitur nisi luctus a. Integer auctor accumsan risus, id consectetur dui 
                        tempus quis. Donec porta odio a felis laoreet ullamcorper. Integer fringilla eros eget sem lacinia, quis 
                        ultrices eros condimentum. Morbi congue nulla nec neque vulputate, id ultrices erat vestibulum. Nullam ultricies 
                        maximus sapien at volutpat. Vestibulum fermentum aliquet arcu, in lobortis ipsum maximus vitae. Sed malesuada mollis 
                        tortor, non consectetur sapien consectetur condimentum. Suspendisse potenti. Integer eget nisl a augue sagittis congue. 
                        Etiam pharetra consequat libero nec pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada 
                        fames ac turpis egestas. Duis pellentesque, turpis sed posuere ultricies, eros sem sollicitudin nunc, aliquet cursus 
                        orci leo vitae dolor. Fusce congue laoreet diam, id feugiat ipsum ultrices et. Donec semper leo non volutpat pretium."
                        technologies={[
                            "../../icons/react.svg",
                            "../../icons/nest.svg",
                            "../../icons/node.svg",
                            "../../icons/express.svg",
                            "../../icons/tailwind.svg",
                            "../../icons/mysql.svg"
                        ]}
                        githubLink="https://github.com/Mickael-Desclaux/Evaluation-JavaScript"
                    />
                    <Project
                        title="Blog de lecture"
                        imageSrc="../../projects/dice-roll.jpg"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet felis eget ante auctor ultrices. 
                        Vivamus finibus dolor nunc, vel efficitur nisi luctus a. Integer auctor accumsan risus, id consectetur dui 
                        tempus quis. Donec porta odio a felis laoreet ullamcorper. Integer fringilla eros eget sem lacinia, quis 
                        ultrices eros condimentum. Morbi congue nulla nec neque vulputate, id ultrices erat vestibulum. Nullam ultricies 
                        maximus sapien at volutpat. Vestibulum fermentum aliquet arcu, in lobortis ipsum maximus vitae. Sed malesuada mollis 
                        tortor, non consectetur sapien consectetur condimentum. Suspendisse potenti. Integer eget nisl a augue sagittis congue. 
                        Etiam pharetra consequat libero nec pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada 
                        fames ac turpis egestas. Duis pellentesque, turpis sed posuere ultricies, eros sem sollicitudin nunc, aliquet cursus 
                        orci leo vitae dolor. Fusce congue laoreet diam, id feugiat ipsum ultrices et. Donec semper leo non volutpat pretium."
                        technologies={[
                            "../../icons/ts.svg",
                            "../../icons/react.svg",
                            "../../icons/c-sharp.svg",
                            "../../icons/postgresql.svg",

                        ]}
                        githubLink="https://github.com/Mickael-Desclaux/MyBlog"
                    />
                    <Project
                        title="Garage Parrot"
                        imageSrc="../../projects/dice-roll.jpg"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet felis eget ante auctor ultrices. 
                        Vivamus finibus dolor nunc, vel efficitur nisi luctus a. Integer auctor accumsan risus, id consectetur dui 
                        tempus quis. Donec porta odio a felis laoreet ullamcorper. Integer fringilla eros eget sem lacinia, quis 
                        ultrices eros condimentum. Morbi congue nulla nec neque vulputate, id ultrices erat vestibulum. Nullam ultricies 
                        maximus sapien at volutpat. Vestibulum fermentum aliquet arcu, in lobortis ipsum maximus vitae. Sed malesuada mollis 
                        tortor, non consectetur sapien consectetur condimentum. Suspendisse potenti. Integer eget nisl a augue sagittis congue. 
                        Etiam pharetra consequat libero nec pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada 
                        fames ac turpis egestas. Duis pellentesque, turpis sed posuere ultricies, eros sem sollicitudin nunc, aliquet cursus 
                        orci leo vitae dolor. Fusce congue laoreet diam, id feugiat ipsum ultrices et. Donec semper leo non volutpat pretium."
                        technologies={[
                            "../../icons/symfony.svg",
                            "../../icons/bootstrap.svg",
                            "../../icons/js.svg",
                            "../../icons/postgresql.svg"]}
                        githubLink="https://github.com/Mickael-Desclaux/Garage_Parrot"
                    />
                    <Project
                        title="Jeu de dés"
                        imageSrc="../../projects/dice-roll.jpg"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet felis eget ante auctor ultrices. 
                        Vivamus finibus dolor nunc, vel efficitur nisi luctus a. Integer auctor accumsan risus, id consectetur dui 
                        tempus quis. Donec porta odio a felis laoreet ullamcorper. Integer fringilla eros eget sem lacinia, quis 
                        ultrices eros condimentum. Morbi congue nulla nec neque vulputate, id ultrices erat vestibulum. Nullam ultricies 
                        maximus sapien at volutpat. Vestibulum fermentum aliquet arcu, in lobortis ipsum maximus vitae. Sed malesuada mollis 
                        tortor, non consectetur sapien consectetur condimentum. Suspendisse potenti. Integer eget nisl a augue sagittis congue. 
                        Etiam pharetra consequat libero nec pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada 
                        fames ac turpis egestas. Duis pellentesque, turpis sed posuere ultricies, eros sem sollicitudin nunc, aliquet cursus 
                        orci leo vitae dolor. Fusce congue laoreet diam, id feugiat ipsum ultrices et. Donec semper leo non volutpat pretium."
                        technologies={[
                            "../../icons/html.svg",
                            "../../icons/css.svg",
                            "../../icons/js.svg",
                            "../../icons/bootstrap.svg"
                        ]}
                        githubLink="https://github.com/Mickael-Desclaux/Evaluation-JavaScript"
                    />
                </div>
            </div>
        </div>
    )
}
