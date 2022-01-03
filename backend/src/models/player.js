import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    name: String,
    points: String

    //FGM, FGA, 3PM, 3PA, FTM, FTA, TO, AST, REB, ST, BLK, PF, PTS
})

const Player = mongoose.model('ScoreCard', PlayerSchema)

module.exports = Player