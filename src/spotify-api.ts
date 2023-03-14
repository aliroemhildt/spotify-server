import { RESTDataSource } from '@apollo/datasource-rest';
import { Genres, CurrentUser, TopArtists } from './types.js';

export class SpotifyAPI extends RESTDataSource {
  override baseURL = 'https://api.spotify.com/v1/';

  async getGenres(token: string): Promise<Genres> {
    const headers = {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }

    return this.get<Genres>('recommendations/available-genre-seeds', { headers });
  }

  async getCurrentUser(token: string): Promise<CurrentUser> {
    const headers = {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }

    return this.get<CurrentUser>('me', { headers });
  }

  async getTopArtists(token: string): Promise<TopArtists> {
    const headers = {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }

    return this.get<TopArtists>('me/top/artists', { headers });
  }
}