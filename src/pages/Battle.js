import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { deleteAssem } from "../actions/assemble";
import Form from "../components/Form/Form";
import Assemble from "../Assembles/Assemble/Assemble";
import Result from "../Assembles/Assemble/Result";

function Battle(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [assemble, setAssemble] = useState( JSON.parse(localStorage.getItem("localstore")) );
  const user = JSON.parse(localStorage.getItem("profile"));
  const id = props.match.params.id;
  const [main, changeMain] = props.functions;
  const [win, changeWin] = useState("");
  const [randomCard] = props.rando;
  changeMain("battle-main");
  //save player card standalone variable
  //find the player card to show
  const assembled =
    assemble instanceof Array
      ? assemble.find((singleAssemble) => {
          return singleAssemble._id === id;
        })
      : null;
    console.log(assembled.health)

  
  //array of synonyms
  const slickMoves = [ "adeptly", "skillfully", "slickly", "deftly", "wonderfully", "dexterously", "neatly", "nimbly", "easily", "masterfully", "simply", ];
  const weakMoves = [ "amateurishly", "artlessly", "clumsily", "awkwardly", "inefficiently", "barely", "poorly", "unskillfully", ];
  //random number min
  const randomNum = (mult, min) => Math.floor(Math.random() * mult + min);
  const victoryMessage = (player, champ) => {
    console.log("\n\n" + player + ` has won  playing as ${champ}!!!`);
  };
  assembled.hit = (opponent) => {
    if (assembled.health == 0) {
      return;
    }
    //defense equation makes damage variable, set below so max defense is 10
    const damageDealt = Math.floor(
      assembled.attack * (1 - randomNum(opponent.defense, 1) / 10)
    );
    const damageBlocked = assembled.attack - damageDealt;
    opponent.health -= damageDealt;
    if (opponent.health <= 0) {
      opponent.health = 0;
      changeWin("heck");
      victoryMessage(assembled.name, assembled.title);
      return;
    }
    let adjective = "";
    if (damageBlocked < 0.45 * assembled.attack) {
      adjective = weakMoves[randomNum(weakMoves.length, 0)];
    } else if (damageBlocked < 0.55 * assembled.attack) {
      adjective = "";
    } else {
      adjective = slickMoves[randomNum(slickMoves.length, 0)];
    }
    //attack message
    // console.log( `\n` + assembled.title + ` attacked attempting to deal ${assembled.attack} damage!\n` + opponent.name + ` ${adjective} blocked ${damageBlocked} damage!\n${opponent.name} takes ${damageDealt} damage.` );
  };
  randomCard.hit = (opponent) => {
    if (randomCard.health === 0) {
      return;
    }
    //defense equation makes damage variable, set below so max defense is 10
    const damageDealt = Math.floor(
      randomCard.attack * (1 - randomNum(opponent.defense, 1) / 10)
    );
    const damageBlocked = randomCard.attack - damageDealt;
    opponent.health -= damageDealt;
    if (opponent.health <= 0) {
      opponent.health = 0;
      changeWin("gdi");
      victoryMessage(randomCard.name, randomCard.title);
      return;
    }
    let adjective = "";
    if (damageBlocked < 0.45 * randomCard.attack) {
      adjective = weakMoves[randomNum(weakMoves.length, 0)];
    } else if (damageBlocked < 0.55 * randomCard.attack) {
      adjective = "";
    } else {
      adjective = slickMoves[randomNum(slickMoves.length, 0)];
    }

    //attack message
    // console.log( `\n` + randomCard.title + ` attacked attempting to deal ${randomCard.attack} damage!\n` + opponent.name + ` ${adjective} blocked ${damageBlocked} damage!\n${opponent.name} takes ${damageDealt} damage.` );
  };

  // console.log(assembled);
  // console.log(randomCard);

  const fightFunction = () => {
    console.log("Player 1 has chosen", assembled.title, "\nStats:");
    // console.log(assembled);
    console.log("Player 2 has chosen", randomCard.title, "\nStats:");
    // console.log(randomCard);
    while (assembled.health > 1 && randomCard.health > 1) {
      assembled.hit(randomCard);
      randomCard.hit(assembled);
      // console.log("P1 Health ", assembled.health);
      // console.log("P2 Health ", randomCard.health + "\n");
    }
  };
  useEffect(() => {
    fightFunction();
    }, []);
  console.log(win)

  return (
    <>
      <fieldset key={assembled._id} className="assembled">
        <Assemble assembled={assembled} />
      </fieldset>
      <h1 style={{ color: "white" }}>VS</h1>
      <fieldset key={randomCard._id} className="assembled">
        <Assemble assembled={randomCard} />
      </fieldset>

      {win == "heck" ? (
        <fieldset key="3" className="assembled">
          <Result assembled={assembled} message={"CONGRATS, YOU WON!!!"} />
        </fieldset>
      ) : (
        <fieldset key="3" className="assembled">
          <Result assembled={assembled} message={"YOU LOST SHITTER!!!"} />
        </fieldset>
      )}
    </>
  );
}

export default Battle;


{/* <fieldset key={assembled._id} className="assembled"> */}
        // <Result assembled/>
        {/* to have winning card appear  */}
        {/* <Result assembled={randomCard} /> */}
      {/* </fieldset> */}