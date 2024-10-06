import AboutMe from "../../components/AboutMe/AboutMe";
import Header from "../../components/Header/Header";

export default function HomePage() {

    return (
        <>
            <Header />
            <div className="mt-12">
                <AboutMe />
            </div>

        </>
    )
}