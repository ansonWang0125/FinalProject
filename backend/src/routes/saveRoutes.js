import express from 'express'
import Game from '../models/game'

const router = express.Router()

router.post('/api/save-game', async (req, res) => {
    try {
        const newGame = new Game({
            game: req.body.playerList,
            opponent: req.body.team,
            date: Date.now()
        })
        await newGame.save()
            .then(() => {
                res.send({ message: 'game saved' })
            })
    }
    catch (e) {
        res.send({ message: 'Game saving error' })
    }
})

router.get('/api/get-game', async (req, res) => {
    await Game.find()
        .then((result) => { res.send({ message: result }) })

        .catch((e) => { console.log(e) })
})

export default router