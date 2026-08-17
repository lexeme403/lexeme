import Mystery from "./Mystery.jsx";
import SpotDifference from "./SpotDifference.jsx";
import WordSearchPuzzle from "./WordSearchPuzzle.jsx";


function SingleGame({ game }) {

   switch (game.gameType) {

      case "Mystery":

         return (
            <Mystery
               game={game}
            />
         );


      case "SpotDifference":

         return (
            <SpotDifference
               game={game}
            />
         );

      case "WordSearchPuzzle":

         return (
            <WordSearchPuzzle
               game={game}
            />
         );

      default:

         return (
            <h1>
               Game is not supported.
            </h1>
         );
   }
}


export default SingleGame;