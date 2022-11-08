import { plugins } from "pretty-format"
import React, {useState} from "react"

function Tile({hog}) {
  const [clicked, setClicked] = useState("Unclicked")

  function moreHogInfo(hog) {
    return (
      <>
        <h2>{hog.specialty}</h2>
        <h2>{hog.weight}</h2>
        <h2>{hog.greased}</h2>
        <h2>{hog["highest medal achieved"]}</h2>
        <h2>{hog.specialty}</h2>
      </>
    )
  }

	return (
		<div
    className = "pigTile"
    onClick = {(e) => {
      clicked === "Unclicked"
      ? setClicked("Clicked")
      : setClicked("Unclicked")
    }
    }
    >
      <img src = {hog.image}></img>
      <h1>{hog.name}</h1>
      {
        clicked === "Clicked"
        ? moreHogInfo(hog)
        : null
      }

      
		</div>
	)
}

export default Tile