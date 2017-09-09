function TennisGame() {
    const scoreString = ['Love', 'Fifteen', 'Thirty', 'Forthy']
    let playerAScore = 0
    let playerBScore = 0

    this.reset = () => {
        playerAScore = 0
        playerBScore = 0
    }

    this.echo = () => {
        return `${scoreString[playerAScore]} - ${scoreString[playerBScore]}`
    }

    this.playerAGetScore = () => {
        playerAScore++
    }

    this.playerBGetScore = () => {
        playerBScore++
    }
}
module.exports=TennisGame
