const express = require('express')
const router = express.Router()

const NotificationsController = require('./../controllers/notification.controller')
const controller = new NotificationsController()

router.get('/:id', (req, res) => controller.index(req, res))
router.get('/:id/updated', (req, res) => controller.get_updated_notifications(req, res))

module.exports = router