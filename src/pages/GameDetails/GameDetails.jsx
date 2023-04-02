import { useContext } from "react";
import { GameDetailsContext } from "../../context/GameDetailsContext";
import Details from "../../components/Details/Details";

function GameDetails() {
    const {
        doneFetchGameDetails,
        gameDetails,
        doneFetchGameScreenshots,
        gameScreenshots,
    } = useContext(GameDetailsContext);
    return (
        <div>
            {doneFetchGameDetails && gameDetails ? (
                <div>
                    <Details
                        gameDetails={gameDetails}
                        gameScreenshots={gameScreenshots}
                        doneFetchGameScreenshots={doneFetchGameScreenshots}
                    />
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}
export default GameDetails