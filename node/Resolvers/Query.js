import  { games,makers,reviews } from "../db.js"
export const Query={
    games: () => {return games},
    makers: () => {return makers},
    reviews: () => {return reviews},
    getGame: (parent,args) => {
      console.log(args)
      return games.find(game=>game.id==args.id)},
  }