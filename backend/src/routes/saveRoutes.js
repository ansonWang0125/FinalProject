import express from 'express'
import ScoreCard from './models/player'

const router = express.Router()

router.post('/api/save-game', async (req, res) => {
    try {
        const scoreCard = new ScoreCard({
            name: req.body.name,
            points: req.body.points
        })
        await scoreCard.save()
            .then(() => {
                res.send({ message: 'game saved' })
            })
    }
    catch (e) {
        res.send({ message: 'Game saving error' })
    }
})

export default router