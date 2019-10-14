import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { idToLink, checkID } from "./data/idToLink";

const onChange = (text) => {
	if (checkID(text)) {
		window.location.href = idToLink(text);
	}
};

function App() {
	return (
		<div className="App">
			<h1>Universität Osnabrück</h1>
			<h1>Lageplan Navigation</h1>
			<input onChange={(evt) => onChange(evt.target.value)} />
		</div>
	);
}

export default App;
