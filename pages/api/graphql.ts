// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer } from 'apollo-server'
import md5 from 'js-md5'
import axios from 'axios'

import { typeDefs } from './typeDefs'
import type { MarvelApiCharacterResponse } from './typeDefs'

interface searchCharacterArgs {
  nameStartsWith: string
}

const resolvers = {
  Query: {
    searchCharacter: async(args: searchCharacterArgs) => {
      const timestamp = Number(new Date()), hash = md5.create()
      
      const response = await axios.get('https://gateway.marvel.com/v1/public/characters', {
        params: {
          nameStartsWith: args.nameStartsWith,
          ts: timestamp,
          hash: hash.hex(),
          orderBy: 'name',
          limit: 10,
          apikey: process.env.PUBLIC_KEY
        }
      })
      
      const data: unknown = await response.data
      return data as MarvelApiCharacterResponse
    },
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀 Server ready at ${url}`);
})

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const content: unknown = { content: 'This is a Apollo Server' }
  res.status(200).json(content as Data)
}
