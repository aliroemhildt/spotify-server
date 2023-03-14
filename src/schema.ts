export const typeDefs = `#graphql
  type Query {
    getGenres(token: String!): Genres
    getCurrentUser(token: String!): CurrentUser
    getTopArtists(token: String!): TopArtists
  }

  # get a list of all available spotify genres
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

  # union TopItem = Artist | Track

  type TopArtists {
    href: String
    limit: Int
    next: String
    offset: Int
    previous: String
    total: Int
    items: [Artist]
  }

  # get the current user's top artists or tracks
  # QUERY VARIABLES:
    # limit: integer
      # max number of items to return
      # default: 20, min: 1, max: 50
    # offset: integer
      # index of the first item to return
      # default: 0
    # time range: string
      # over what time frame data is calculated from
      # default: medium_term
      # VALID VALUES:
        # long_term: from several years of data including new data
        # medium_term: approximately last 6 months
        # short_term: approximately last 4 weeks
  # type TopItems {
  #   # api endpoint, full result of request
  #   href: String
  #   # max number of items in response (set in query)
  #   limit: Int
  #   # api endpoint, next page of items
  #   next: String
  #   # offset of items returned (set in query)
  #   offset: Int
  #   # api endpoint, previous page of items (null if none)
  #   previous: String
  #   # total number of items available to return
  #   total: Int
  #   # this list can include Artist and Track types
  #   items: [TopItem]
  # }
`;