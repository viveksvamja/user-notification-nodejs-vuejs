const fs = require('fs');
var path = require('path');
class Notification {
    /**
     * Get notifications
     * @param {*} req
     * @param {*} res
     */
     index(req, res) {
        try {
            let jsonPath = path.join(__dirname, '..', 'database', 'invitations.json');
            let notifications = JSON.parse(fs.readFileSync(jsonPath)).invites;
            notifications = notifications.filter(element => element.user_id == req.params.id)
            res.status(200).send({invites: notifications});
        } catch (e) {
            res.status(500).send(e)
        }
    }

    /**
     * Get updated notifications
     * @param {*} req
     * @param {*} res
     */
     get_updated_notifications(req, res) {
        try {
            let jsonPath = path.join(__dirname, '..', 'database', 'invitations_update.json');
            let notifications = JSON.parse(fs.readFileSync(jsonPath)).invites;
            notifications = notifications.filter(element => element.user_id == req.params.id)
            res.status(200).send({invites: notifications});
        } catch (e) {
            res.status(500).send(e)
        }
    }
}

module.exports = Notification