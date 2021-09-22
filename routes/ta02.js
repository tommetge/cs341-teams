//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const Users = new Set(['Tom', 'Brent', 'Sandy', 'Drew', 'Carlos']);

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    users: Users,
    error: req.query.error
  });
});

router.post('/addUser', (req, res, next) => {
  if (Users.has(req.body.username)) {
    console.log('Duplicate user');
    res.redirect('/ta02?error=' + encodeURIComponent('DuplicateUser'));
    return res.end();
  }

  Users.add(req.body.username);
  res.redirect('/ta02/');
});

router.post('/removeUser', (req, res, next) => {
  if (!Users.has(req.body.usernameToRemove)) {
    console.log('User not found');
    res.redirect('/ta02?error=' + encodeURIComponent('UserNotFound'));
    return res.end();
  }

  Users.delete(req.body.usernameToRemove);

  res.redirect('/ta02');
});

module.exports = router;
