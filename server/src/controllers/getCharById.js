const axios = require('axios')

const url = 'https://rym2-production.up.railway.app/api/character/'

const apiKey = '?key=henrym-alexisporcelano'

// async / await => 

const getCharById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await axios.get(url + id + apiKey);
        const { data } = response;

        if (data) {
            const { name, gender, species, origin, image, status } = data;

            const character = {
                id: id,
                name: name,
                gender: gender,
                species: species,
                origin: origin,
                image: image,
                status: status,
            }

            res.status(200).json(character);
        } else {
            res.status(404).json({ message: 'not found' });
        }
    } catch (error) {
        console.log(`ERROR RETRIEVING DATA: ${error.message}`);
        res.status(401).json({ message: error.message });
    }
};


// PROMISES => 

// const getCharById = (req, res) => {

//     const {id} = req.params

//         axios.get(url + id + apiKey)
//     .then(response => {
//         const { data } = response;

//         if (data){
//         const { name, gender, species, origin, image, status } = data; 
        
//         const character = {
//           id: id,
//           name: name,
//           gender: gender,
//           species: species,
//           origin: origin,
//           image: image,
//           status: status,
//         }

//         res.status(200).json(character)
//     } else {
//         res.status(404).json({message: 'not found'})
//     }
//     })
//     .catch(error => {
//         console.log(`ERROR RETRIEVING DATA: ${error.message}`)
//         res.status(401).json({message: error.message})
//     })
// }

    
// EXPRESS => 

// const getCharById = (res, id) => {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => {
//         const { data } = response; 
//         const { name, gender, species, origin, image, status } = data; 
        
//         const character = {
//           id: id,
//           name: name,
//           gender: gender,
//           species: species,
//           origin: origin,
//           image: image,
//           status: status,
//         }
//         console.log(`RETRIEVED DATA: ${JSON.stringify(character)}`)
//         res.writeHead(200, {'Content-Type' : 'application/json'})
//         res.end(JSON.stringify(character))
//     })
//     .catch(error => {
//         console.log(`ERROR RETRIEVING DATA: ${error.message}`)
//         res.writeHead(500, {'Content-Type' : 'text/plain'})
//         res.end(error.message)
//     })
// }

module.exports = getCharById