const filterCountriesNames = (array) => {
    let newArray = [];
    array.map((val) => {
        newArray.push(val.name)
    })
    return newArray
}

export {
    filterCountriesNames
}