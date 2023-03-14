import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { SpotifyAPI } from './spotify-api.js';
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';

interface ContextValue {
  dataSources: {
    spotifyAPI: SpotifyAPI;
  };
}

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
