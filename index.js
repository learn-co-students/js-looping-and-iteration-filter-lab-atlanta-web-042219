function findMatching(arr, term) {
	return arr.filter(ele => ele.toLowerCase() === term.toLowerCase())
}

function fuzzyMatch(arr, term) {
	return arr.filter(ele => ele.slice(0,term.length) === term)
}

function matchName(obj_arr, term) {
	return obj_arr.filter(obj => obj.name === term)
}
