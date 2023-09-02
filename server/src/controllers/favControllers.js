let favorites = [];

const postFav = (req, res) => {

    const char = req.body;

    let added = false 

    for (let i = 0; i < favorites.length; i++) {
        if (favorites[i].id === char.id) {
            added = true
            throw new Error('character is already in the array')
        }
    }

    if (char && added === false) {


        favorites.push(char)

        res.status(200).json(favorites);

        console.log('server favorites add', favorites)

    } else {

        res.status(500).json({message: 'POST FAV ERROR'});

    }

}

const deleteFav = (req, res) => {

    console.log('server favorites remove 1', favorites)

    const {id} = req.params

    let found = false

    for (let i = 0; i < favorites.length; i++) {
        if (favorites[i].id === id) {
            found = true
        }
    }

    if (found === true){

        console.log('server favorites remove 1', favorites)

        favorites = favorites.filter((elem) => elem.id !== id)

        console.log('server favorites remove 2', favorites)

        res.status(200).json(favorites);

    } else {

        res.status(500).json({message: 'DELETE FAV ERROR'});

    }

}

module.exports = {
    postFav,
    deleteFav
}