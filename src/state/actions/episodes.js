import { createAsyncThunk } from '@reduxjs/toolkit';
import types from '../types/episodes';
import service from '../../services/podcasts';

export const getEpisodes = createAsyncThunk(
  types.GET_EPISODES,
  async (podcastId) => {
    try {
      const r = await service.getPodcast(podcastId);
      const url = r.results[0].feedUrl;

      const response = await service.getFeed(url);
      console.log('episodes', response.rss.channel.item);
      const episodes = response.rss.channel.item
      .map((episode, index) => {
        const dateObj = new Date(episode["pubDate"]["#text"]["#text"]);

        //console.log('episode ------', episode["itunes:episode"]["#text"]["#text"]);
        return {
            id: index + 1/*episode["itunes:episode"]["#text"]["#text"]*/,
            title: episode["title"]["#text"]["#text"],
            duration: episode["itunes:duration"]["#text"]["#text"],
            description: (((episode["description"] || {})["#text"] || {})["#text"]) || "Without description",
            date: `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`,
            raw: episode["enclosure"]["@attributes"],
        };
      });

      const item = {}
      item[podcastId] = {
        episodes,
        podcastId,
        date: new Date().toLocaleString(),
      };

      console.log('mi:', { ...item });
      return { ...item };
    } catch (error) {
      console.log('eRROR: ', error);
      throw error;
    }
  }
);

export default {
    getEpisodes,
};