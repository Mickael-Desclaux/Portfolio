import AboutMe from "../../components/AboutMe/AboutMe";
import Header from "../../components/Header/Header";
import Skills from "../../components/Skills/Skills";

export default function HomePage() {

    return (
        <>
            <Header />
            <div className="mt-12">
                <AboutMe />
            </div>
            <div className="mt-12">
                <Skills />
            </div>
        </>
    )
}