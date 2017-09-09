const TennisGame = require('./tennis')


describe('echo()',()=> {
  let app

  beforeEach(()=>{
     app = new TennisGame()
     app.reset()
  })
  test('Echo "Love - Love" when game start',()=>{
    //Arrange
    //Act
    let result =app.echo()

    //Assert
    expect(result).toBe('Love - Love')
  })

  test('Echo "Fifteen - Love" when playerA get first score', () => {
      // Arrange
      app.playerAGetScore()

      // Act
      let result = app.echo()

      // Assert
      expect(result).toBe('Fifteen - Love')
  })

  test('Echo "Love - Fifteen" when playerB get first score', () => {
      app.playerBGetScore()

      let result = app.echo()

      expect(result).toBe('Love - Fifteen')
  })

  test('Echo "Thirty - Love" when playerA get second score',()=>{

    app.playerAGetScore()
  app.playerAGetScore()
    let result = app.echo()
    expect(result).toBe('Thirty - Love')
  })

  test('Echo "Love - Thirty" when playerB get second score',()=>{

    app.playerBGetScore()
    app.playerBGetScore()


    let result = app.echo()
    expect(result).toBe('Love - Thirty')

  })
  test('Echo "Thirty - Fifteen" when playerA get Third score and playerB get firt score',()=>{
    app.playerAGetScore()
  app.playerAGetScore()
    app.playerBGetScore()

    let result = app.echo()
    expect(result).toBe('Thirty - Fifteen')
  })

  test('Echo "Thirty - Fifteen" when playerA get first score and playerB get Thirdscore',()=>{

    app.playerAGetScore()
  app.playerBGetScore()
    app.playerBGetScore()

    let result = app.echo()
    expect(result).toBe('Fifteen - Thirty')
  })

  test('Echo "Fifteen - Fifteen" when playerAGetScore and playerBGetScore tie score',()=>{

    app.playerAGetScore()
    app.playerBGetScore()

    let result =app.echo()
    expect(result).toBe('Fifteen - Fifteen')
  })
  test('Echo "Thirty - Fifteen" when playerA get secound score and playerB get firt score ',()=>{

    app.playerAGetScore()
    app.playerAGetScore()
    app.playerBGetScore()

    let result =app.echo()
    expect(result).toBe('Thirty - Fifteen')
  })
  test('Echo "Fifteen- Thirty" when  playerB get first score and playerB get secound score',()=>{

    app.playerAGetScore()
    app.playerBGetScore()
    app.playerBGetScore()

    let result =app.echo()
    expect(result).toBe('Fifteen - Thirty')
  })
  test('Echo "Thirty - Thirty" when playerAGetScore and playerBGetScore tie score',()=>{

    app.playerAGetScore()
    app.playerAGetScore()
    app.playerBGetScore()
    app.playerBGetScore()

    let result =app.echo()
    expect(result).toBe('Thirty - Thirty')
  })
  test('Echo "Forthy- Love" when  playerA get Third score and playerB cant get score',()=>{

    app.playerAGetScore()
    app.playerAGetScore()
    app.playerAGetScore()


    let result =app.echo()
    expect(result).toBe('Forthy - Love')
  })
  test('Echo "Love- Forthy" when  playerA cant get score  and playerB Third score ',()=>{

    app.playerBGetScore()
    app.playerBGetScore()
    app.playerBGetScore()

    let result =app.echo()
    expect(result).toBe('Love - Forthy')
  })

  test('Echo "Forthy - Fifteen" when  playerA get forth score and playerB  get first score',()=>{

    app.playerAGetScore()
    app.playerAGetScore()
    app.playerAGetScore()
    app.playerBGetScore()

    let result =app.echo()
    expect(result).toBe('Forthy - Fifteen')
  })

  test('Echo "Forthy - Thirty" when  playerA get forst score and playerB  get secound score',()=>{

    app.playerAGetScore()
    app.playerAGetScore()
    app.playerAGetScore()
    app.playerBGetScore()
    app.playerBGetScore()


    let result =app.echo()
    expect(result).toBe('Forthy - Thirty')
  })


test('Echo "Thirty - Forthy" when  playerA get Third score and playerB  get forst score',()=>{


  app.playerAGetScore()
  app.playerAGetScore()
  app.playerBGetScore()
  app.playerBGetScore()
  app.playerBGetScore()


  let result =app.echo()
  expect(result).toBe('Thirty - Forthy')
})
})
