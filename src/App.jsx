import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GamesContextProvider from './context/GamesContext';
import GamesDetailsContextProvider from './context/GameDetailsContext';
import GenresContextProvider from './context/GenresContext';
import GenreDetailContextProvider from './context/GenreDetailContext';
import PlatformsContextProvider from './context/PlatformsContext';
import PlatformDetailContextProvider from './context/PlatformDetailContext'
import PublishersContextProvider from './context/PublishersContext';
import PublisherDetailContextProvider from './context/PublisherDetailContext'
import Home from './pages/Home/Home';
import AOS from 'aos';
// import Header from './components/Header/Header';
import GameDetails from './pages/GameDetails/GameDetails';
import Genres from './pages/Genres/Genres';
import GenreDetail from './pages/GenreDetail/GenreDetail';
import Platforms from './pages/Platforms/Platforms';
import PlatformDetail from './pages/PlatformDetail/PlatformDetail';
import Publishers from './pages/Publishers/Publishers';
import PublisherDetail from './pages/PublisherDetail/PublisherDetail';
import Header from './components/Header/Header';
import SearchedGames from './pages/SearchedGames/SearchedGames';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
// import Footer from './components/Footer/Footer';
// import Test from './components/Test/Test';

function App() {
    useEffect(() => {
        AOS.init();
      }, [])

    
    return (
        <div>
            <Router>
                <Header />

                <div>
                    <Routes>
                        <Route
                            exact path='/'
                            element={
                                <GamesContextProvider>
                                    <Home />
                                </GamesContextProvider>
                            } />

                        <Route
                            path='/games/details/:id'
                            element={
                                <GamesDetailsContextProvider>
                                    <GameDetails />
                                </GamesDetailsContextProvider>
                            } />

                        <Route
                            exact path='/genres'
                            element={
                                <GenresContextProvider>
                                    <Genres />
                                </GenresContextProvider>
                            } />

                        <Route
                            path='/genres/:id'
                            element={
                                <GenreDetailContextProvider>
                                    <GenreDetail />
                                </GenreDetailContextProvider>
                            } />

                        <Route
                            exact path='/platforms'
                            element={
                                <PlatformsContextProvider>
                                    <Platforms />
                                </PlatformsContextProvider>
                            } />

                        <Route
                            path='/platforms/:id'
                            element={
                                <PlatformDetailContextProvider>
                                    <PlatformDetail />
                                </PlatformDetailContextProvider>
                            } />

                        <Route
                            exact path='/publishers'
                            element={
                                <PublishersContextProvider>
                                    <Publishers />
                                </PublishersContextProvider>
                            } />

                        <Route
                            path='/publishers/:id'
                            element={
                                <PublisherDetailContextProvider>
                                    <PublisherDetail />
                                </PublisherDetailContextProvider>
                            } />
                        <Route
                            path='/search'
                            element={
                                <SearchedGames />
                            } />
                    </Routes>
                </div>
                {/* <Footer /> */}
            </Router>
        </div>
    )
}
export default App