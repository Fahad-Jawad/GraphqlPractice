
const gameQuries={
    getGames: `query getGames {
        games {
          id
          title
          price
          reviews{
            rating
          }
        }
      }`
    }
export default gameQuries 