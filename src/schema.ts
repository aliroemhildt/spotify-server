export const typeDefs = `#graphql
  type Query {
    getGenres(token: String!): Genres
    getCurrentUser(token: String!): CurrentUser
    getTopArtists(token: String!): TopArtists
  }

  type Genres {
    genres: [String]
  }

  type CurrentUser {
    display_name: String
    email: String
    href: String
    id: String
    images: [Image]
    product: String
    type: String
    uri: String
  }

  type Image {
    url: String
    height: Int
    width: Int
  }

  type Artist {
    genres: [String]
    href: String
    id: String
    images: [Image]
    name: String
    popularity: Int
    type: String
    uri: String
  }
  
  type Album {
    album_type: String
    href: String
    id: String
    images: [Image]
    name: String
    release_date: String
    type: String
    uri: String
    genres: [String]
    popularity: Int
    artists: [Artist]
  }

  type Tracks {
    href: String
    limit: Int
    next: String
    offset: Int
    previous: String
    total: Int
  }

  type Track {
    album: Album
    artists: [Artist]
    href: String
    id: String
    name: String
    popularity: Int
    preview_url: String
    track_number: Int
    type: String 
    uri: String
  }

  type TopArtists {
    href: String
    limit: Int
    next: String
    offset: Int
    previous: String
    total: Int
    items: [Artist]
  }
`;