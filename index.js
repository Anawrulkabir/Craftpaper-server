const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

//middlewire
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('My craft server is working fine')
})

app.listen(port, () => {
  console.log(`My craft server is working on port : ${port}`)
})

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster2.eifdalf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2`
// const uri = 'mongodb://localhost:27017'

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect()
    //
    //
    //
    // ********* all_public_data ********** ////

    const all_public_data = client
      .db('Craft_House')
      .collection('all_public_data')

    // post all_public_data into server
    app.post('/items', async (req, res) => {
      const item = req.body
      console.log(item)
      const result = await all_public_data.insertOne(item)
      res.send(result)
    })

    // get all_public_data
    app.get('/items', async (req, res) => {
      const cursor = all_public_data.find()
      const result = await cursor.toArray()
      res.send(result)
    })

    // get individual all_item_data by id
    app.get('/items/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) }

      const result = await all_public_data.findOne(query)
      res.send(result)
    })

    //

    //
    //
    //

    //
    //
    //
    //
    //
    //
    //
    //
    //

    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 })
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    )
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close()
  }
}
run().catch(console.dir)
