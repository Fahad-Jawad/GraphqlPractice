export const typeDefs=`#graphql

type Game{
id:ID,
title:String,
price:Int,
description:String,
maker:Maker
reviews:[Review]
}

type Maker{
    id:ID,
    name:String,
    makerGames:[Game]
}

type Review{
    id:ID,
    gameId:ID,
    description:String,
    rating:Int
}

type Query{
    games:[Game],
    makers:[Maker],
    reviews:[Review],
    getGame(id:ID):Game,
}

`

