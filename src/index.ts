import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { SpotifyAPI } from './spotify-api.js';
import { resolvers } from './resolvers.js';
import { readFileSync } from 'fs';

export interface ContextValue {
  dataSources: {
    spotifyAPI: SpotifyAPI;
  };
}

const typeDefs = readFileSync('src/schema.graphql', { encoding: 'utf-8' });

const server = new ApolloServer<ContextValue>({
  typeDefs,
  resolvers
});

const spotifyGQL = startStandaloneServer(server, {
  context: async () => {
    const { cache } = server;

    return {
      dataSources: {
        spotifyAPI: new SpotifyAPI({ cache })
      },
    };
  }
});

spotifyGQL.then((response) => console.log(`Server ready at ${response.url}`));
