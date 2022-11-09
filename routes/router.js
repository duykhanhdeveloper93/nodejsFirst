const express = require('express');

const router = express();

router.use(require('./admin').routerAdmin);
router.use(require('./content1').routerContent1);
router.use(require('./content2').routerContent2);

module.exports.router = router;