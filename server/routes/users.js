const express = require('express');
const router = express.Router();

// Mock data for demo purposes
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
];

// Get user profile by ID
router.get('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// Update user profile
router.put('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) {
        const { name, email } = req.body;
        user.name = name;
        user.email = email;
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// Retrieve all users
router.get('/', (req, res) => {
    res.json(users);
});

module.exports = router;