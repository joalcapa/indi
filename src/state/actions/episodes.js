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

      console.log('EPISODIOS --- 1');
      console.log(response.rss.channel.item);
      console.log('EPISODIOS --- 2');
      const episodes = response.rss.channel.item
        .map((episode, index) => {
          const dateObj = new Date(episode["pubDate"]["#text"]["#text"]);

          return {
            id: index + 1,
            title: ((episode["title"] || {})["#text"] || {})["#text"] || "Without title",
            duration: ((episode["itunes:duration"] || {})["#text"] || {})["#text"] || "Without duration",
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

      return { ...item };
    } catch (error) {
      console.log("Error: ", error);
      throw error;
    }
  }
);

export default {
    getEpisodes,
};