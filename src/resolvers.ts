import { ContextValue } from './index.js';
import { TopItem } from './__generated__/types.js';

export const resolvers = {
  Query: {
    getGenres: async (_, { token }, contextValue: ContextValue) => {
      return contextValue.dataSources.spotifyAPI.getGenres(token);
    },
    getCurrentUser: async (_, { token }, contextValue: ContextValue) => {
      return contextValue.dataSources.spotifyAPI.getCurrentUser(token);
    },
    getTopItems: async (_, { token, itemType, timeRange }, contextValue: ContextValue) => {
      return contextValue.dataSources.spotifyAPI.getTopItems(token, itemType, timeRange);
    }
  },
  TopItem: {
    __resolveType(item: TopItem, contextValue: ContextValue, info) {
      if (item.type === 'track') {
        return 'Track'
      }
      if (item.type === 'artist') {
        return 'Artist'
      }
    }
  }
}