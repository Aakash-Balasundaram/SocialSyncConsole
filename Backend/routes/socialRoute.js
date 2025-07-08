const router = require('express').Router();
const auth = require('../middleware/auth');
const { connectAccount, listAccounts, removeAccount } = require('../controllers/socialController');

router.post('/connect', auth, connectAccount);
router.get('/accounts', auth, listAccounts);
router.delete('/:id', auth, removeAccount);

module.exports = router;
