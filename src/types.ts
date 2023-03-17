// can try using codegen to make these

interface Image {
  url: String
  height: Number
  width: Number
}

export interface Genres {
  genres: String[]
}

interface Artist {
  genres: [String]
  href: String
  id: String
  images: [Image]
  name: String
  popularity: Number
  type: String
  uri: String
}

interface Track {
  artists: [Artist]
  id: String
  name: String
}

export interface TopItems {
  href: String
  limit: Number
  next: String
  offset: Number
  previous: String
  total: Number
  items: (Artist | Track)[]
}

export interface CurrentUser {
    display_name: String
    email: String
    href: String
    id: String
    images: Image[]
    product: String
    type: String
    uri: String
}