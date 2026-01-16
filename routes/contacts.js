const express = require('express');
const router = express.Router();
// const database = require('../data/database');

// router.get('/contacts', async (req, res) => {
//     let client;
//     try{
//         client = await database.initDb();
//         const db = client.db('cse341-project');
//         const collection = db.collection('contacts');
//         const data = await collection.find({}).toArray();
//         res.json(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).send('An error occured while fetching data');
//     } finally {
//         if(client) {
//             await client.close();
//         }
//     }
// });

// module.exports = router;

const contactsController = require('../controllers/contacts');
router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getSingle);

module.exports = router;