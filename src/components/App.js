import React, {useState} from "react";
import Nav from "./Nav";
import Tile from "./Tile"

import hogs from "../porkers_data";

console.log(hogs)



function App() {
	const [hogFilter, setHogFilter] = useState("All")
	const [sort, setSort] = useState("All")

	const displayedHogs = hogs
	.filter((hog) => hogFilter === "All" || hog.greased === hogFilter)

	return (
		<div className="App">
			<Nav />
			<button
			onClick = {(e) => {
				hogFilter === "All"
				? setHogFilter(true)
				: setHogFilter("All")
			}}
			>Greased</button>
			<div>
				{displayedHogs.map((hog) => {
					return (
						<Tile key = {hog.name} hog = {hog} />
					)
			})}
			</div>
		</div>
	);
}

export default App;
