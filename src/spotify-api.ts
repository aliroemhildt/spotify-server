import { RESTDataSource } from '@apollo/datasource-rest';
import { Genres, CurrentUser, TopItems } from './__generated__/types';

export class SpotifyAPI extends RESTDataSource {
  override baseURL = 'https://api.spotify.com/v1/';

  async getGenres(token: String): Promise<Genres> {
    const headers = {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }

    return this.get<Genres>('recommendations/available-genre-seeds', { headers });
  }

  async getCurrentUser(token: String): Promise<CurrentUser> {
    const headers = {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }

    return this.get<CurrentUser>('me', { headers });
  }

  async getTopItems(token: String, itemType: String, timeRange: String): Promise<TopItems> {
    const headers = {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }

    return this.get<TopItems>(`me/top/${itemType}?time_range=${timeRange}`, { headers });
  }
}