import  { makers,reviews } from "../db.js"
export const Game = {
    maker:(parent,args)=>{
      return makers.find(maker=> maker.name==parent.maker)
    },
    reviews:(parent,args)=>{
        return reviews.filter(review=>review.gameId==parent.id)
    }
}