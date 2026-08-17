import games from "./games.json";

import mysteryData from "./Mystery/data.json";
import spotDifferenceData from "./SpotDifference/data.json";
import wordSearchPuzzleData from "./WordSearchPuzzle/data.json";


export async function getGames() {

    return [...games].sort(
        (a, b) => b.gameID - a.gameID
    );
}


export async function getGame(gameID) {

    const allGames = await getGames();

    const game = allGames.find(
        game => game.gameID === Number(gameID)
    );


    if (!game) {
        return null;
    }


    let gameData;


    switch (game.gameType) {

        case "Mystery":

            gameData = mysteryData.find(
                item => item.gameID === game.gameID
            );

            break;


        case "SpotDifference":

            gameData = spotDifferenceData.find(
                item => item.gameID === game.gameID
            );

            break;


        case "WordSearchPuzzle":

            gameData = wordSearchPuzzleData.find(
                item => item.gameID === game.gameID
            );

            break;


        default:

            gameData = null;

            break;
    }


    return {
        ...game,
        ...gameData
    };
}