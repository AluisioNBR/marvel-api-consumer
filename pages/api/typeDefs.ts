import { gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    searchCharacter: MarvelApiCharacterResponse!
  }

  type MarvelApiCharacterResponse {
    code: Number
    status: String
    copyright: String
    attributionText: String
    attributionHTML: String!
    etag: String
    data: ApiCharacterData
  }

  type ApiCharacterData {
    offset: Number
    limit: Number
    total: Number
    count: Number
    results: [Character!]!
  }

  type Character {
    id: ID
    name: String!
    description: String!
    modified: String
    thumbnail: Thumbnail!
    resourceURI: String!
    comics: CharacterComicsOrSeriesOrEvents!
    series: CharacterComicsOrSeriesOrEvents!
    stories: CharacterStories!
    events: CharacterComicsOrSeriesOrEvents!
    urls: [CharacterLink!]!
  }

  type Thumbnail {
    path: String!
    extension: String!
  }

  type CharacterComicsOrSeriesOrEvents {
    available: Number!
    collectionURI: String
    items: [CharacterComicsOrSeriesOrEventsItems!]!
    returned: Number!
  }

  type CharacterComicsOrSeriesOrEventsItems {
    resourceURI: String
    name: String!
  }

  type CharacterStories {
    available: Number!
    collectionURI: String
    items: [CharacterStoriesItems!]!
    returned: Number!
  }

  type CharacterStoriesItems {
    resourceURI: String
    name: String!
    type: String

  }

  type CharacterLink {
    type: String!
    url: String!
  }
`

interface MarvelApiCharacterResponse {
  "code": number,
  "status": string,
  "copyright": string,
  "attributionText": string,
  "attributionHTML": string,
  "etag": string,
  "data": ApiCharacterData
}

interface ApiCharacterData {
  "offset": number,
  "limit": number,
  "total": number,
  "count": number,
  "results": Character[]
}

interface Character {
  "id": number,
  "name": string,
  "description": string,
  "modified": string,
  "thumbnail": Thumbnail,
  "resourceURI": string,
  "comics": CharacterComicsOrSeriesOrEvents,
  "series": CharacterComicsOrSeriesOrEvents,
  "stories": CharacterStories,
  "events": CharacterComicsOrSeriesOrEvents,
  "urls": CharacterLink[]
}

interface Thumbnail {
  "path": string,
  "extension": string
}

interface CharacterComicsOrSeriesOrEvents {
  "available": number,
  "collectionURI": string,
  "items": CharacterComicsOrSeriesOrEventsItems[],
  "returned": number
}

interface CharacterComicsOrSeriesOrEventsItems {
  "resourceURI": string,
  "name": string
}

interface CharacterStories {
  "available": number,
  "collectionURI": string,
  "items": CharacterStoriesItems[],
  "returned": number
}

interface CharacterStoriesItems {
  "resourceURI": string,
  "name": string,
  "type": string
}

interface CharacterLink {
  "type": string,
  "url": string
}

export { typeDefs }
export type { MarvelApiCharacterResponse, Character }