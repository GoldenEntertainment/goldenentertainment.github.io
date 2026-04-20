  // server.js
    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(express.static('public'));

    // MongoDB Connection
    mongoose.connect('mongodb://localhost:27017/food-truck', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    // Menu Schema
    const menuSchema = new mongoose.Schema({
        name: String,
        description: String,
        price: Number,
        image: String
    });

    // Event Schema
    const eventSchema = new mongoose.Schema({
        name: String,
        location: String,
        date: String,
        time: String
    });

    const MenuItem = mongoose.model('MenuItem', menuSchema);
    const Event = mongoose.model('Event', eventSchema);

    // Routes
    app.get('/api/v1/menu', async (req, res) => {
        const items = await MenuItem.find();
        res.json(items);
    });

    app.get('/api/v1/menu/:id', async (req, res) => {
        const item = await MenuItem.findById(req.params.id);
        res.json(item || {});
    });

    app.post('/api/v1/menu', async (req, res) => {
        const newItem = new MenuItem(req.body);
        await newItem.save();
        res.json(newItem);
    });

    app.get('/api/v1/events', async (req, res) => {
        const allEvents = await Event.find();
        res.json(allEvents);
    });

    app.get('/api/v1/events/:id', async (req, res) => {
        const event = await Event.findById(req.params.id);
        res.json(event || {});
    });

    app.post('/api/v1/events', async (req, res) => {
        const newEvent = new Event(req.body);
        await newEvent.save();
        res.json(newEvent);
    });

    app.listen(3000, () => console.log('Server running on port 3000'));