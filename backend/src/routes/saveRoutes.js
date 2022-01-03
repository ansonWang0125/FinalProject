import express from 'express'
import Player from '../models/player'

const router = express.Router()

router.post('/api/save-game', async (req, res) => {
    try {
        const player = new Player({
            name: req.body.name,
            points: req.body.point
        })
        await player.save()
            .then(() => {
                res.send({ message: 'game saved' })
            })
    }
    catch (e) {
        res.send({ message: 'Game saving error' })
    }
})

export default router