import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    name: Number,
    points: Number

    //FGM, FGA, 3PM, 3PA, FTM, FTA, TO, AST, REB, ST, BLK, PF, PTS
})

const ScoreCard = mongoose.model('ScoreCard', PlayerSchema)

module.exports = ScoreCard