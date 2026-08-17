import { Routes, Route } from "react-router-dom";

import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import EntryPage from "./pages/EntryPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import IssuesPage from "./pages/IssuesPage.jsx";
import SingleIssuePage from "./pages/SingleIssuePage.jsx";
import GamesPage from "./pages/GamesPage.jsx";
import SingleGamePage from "./pages/SingleGamePage.jsx";

import MainLayout from "./layouts/MainLayout.jsx";

function App() {
    return (
        <Routes>

            {/* Entry */}
            <Route
                path="/"
                element={<EntryPage />}
            />

            {/* Main application */}
            <Route element={<MainLayout />}>

                <Route
                    path="/home"
                    element={
                        <>
                            <HomePage />
                            <About />
                            <Contact />
                        </>
                    }
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />

                <Route
                    path="/issues"
                    element={<IssuesPage />}
                />

                <Route
                    path="/issues/:id"
                    element={<SingleIssuePage />}
                />

                <Route
                    path="/games"
                    element={<GamesPage />}
                />

                <Route
                    path="/games/:id"
                    element={<SingleGamePage />}
                />

            </Route>

        </Routes>
    );
}

export default App;