export const resolvers = {
  Query: {
    getGenres: async (_, { token }, { dataSources }) => {
      return dataSources.spotifyAPI.getGenres(token);
    },
    getCurrentUser: async (_, { token }, { dataSources }) => {
      return dataSources.spotifyAPI.getCurrentUser(token);
    },
    getTopItems: async (_, { token, itemType, timeRange }, { dataSources }) => {
      return dataSources.spotifyAPI.getTopItems(token, itemType, timeRange);
    }
  },
  TopItem: {
    __resolveType(item, contextValue, info) {
      if (item.type == 'track') {
        return 'Track'
      }
      if (item.type == 'artist') {
        return 'Artist'
      }
    }
  }
}