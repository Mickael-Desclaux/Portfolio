import Header from "../../components/Header/Header";
import MyProjects from "../../components/MyProjects/MyProjects";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Title from "../../components/Title/Title";

export default function ProjectsPage() {
    return (
        <>
            <Header />
            <div className="mt-12">
                <Title title="Mes projets" />
            </div>
            <div className="m-4">
                <MyProjects />
                <ScrollToTop />
            </div>
        </>
    )
}