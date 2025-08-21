const router = require('express').Router();
const { requireAuth, requireRole } = require('../middleware/auth.middleware');
router.get('/profile', requireAuth, (req, res) => {
    res.json({ message: `Hello user ${req.user.id}`, role: req.user.role });
});

router.get('/admin/health', requireAuth, requireRole('admin'), (req, res) => {
    res.json({ message: 'Admin endpoint OK' });
});
module.exports = router;