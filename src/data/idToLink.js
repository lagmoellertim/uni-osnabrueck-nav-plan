import navMap from "./navMap";

const checkID = (id) => {
	return id in navMap;
};

const idToLink = (id) => {
	return "https://www.google.com/maps/dir//" + encodeURIComponent(navMap[id] + " Osnabrück");
};

export { idToLink, checkID };
