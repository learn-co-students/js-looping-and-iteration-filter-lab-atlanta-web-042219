function findMatching(arr, name) {
    return arr.filter(function(driverName) {
        return driverName.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch(arr, partialName) {
    let nameLength = partialName.length
    return arr.filter(function(driverName) {
        return driverName.slice(0, nameLength) === partialName
    })
}

function matchName(arr, name) {
    return arr.filter(function (driver) {
        return driver.name.toLowerCase() === name.toLowerCase();
    });
}