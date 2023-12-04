//REQUIRE ALL FILES/PACKAGES  //

const express = require('express')
const cors = require('cors')

// CONFIGUR THE SERVER //
const app = express() //create the express server
app.use(express.json()) // server will send and receive info in json
app.use(cors()) //allow req/res from other ports on my machines



const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk']
/// END POINTS ///
app.get('/api/inventory', (req, res) => {
    if(req.query.item) {
        const filteredItems = inventory.filter((item) => {
            return item.toLowerCase().includes(req.query.item.toLowerCase())
        })
        res.status(200).send(filteredItems)
    } else {
        res.status(200).send(inventory)
    }
})

app.get('/api/inventory/:index', (req, res) => {
    let index = +req.params.index
    res.status(200).send(inventory[index])
})

//// LISTEN ////
app.listen(5050, () => console.log('Server running on port 5050!'))
