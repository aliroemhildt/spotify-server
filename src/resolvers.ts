export const resolvers = {
  Query: {
    getGenres: async (_, { token }, { dataSources }) => {
      return dataSources.spotifyAPI.getGenres(token);
    },
    getCurrentUser: async (_, { token }, { dataSources }) => {
      return dataSources.spotifyAPI.getCurrentUser(token);
    },
    getTopArtists: async (_, { token }, { dataSources }) => {
      return dataSources.spotifyAPI.getTopArtists(token);
    }
  }
}