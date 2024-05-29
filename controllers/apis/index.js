const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/blogs', blogRoutes);
router.use('/comments', commentRoutes);

module.exports = router;

