import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
} from "./config";
import axios from "axios";

const defaultConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};
const deleteConfig = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
};

class ApiCalls {
  constructor() {
    this.session_id = "";
    this.account_id = "";
  }

  async fetchMovies(searchTerm, page) {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  }
  async fetchMovie(movieId) {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  }
  async fetchCredits(movieId) {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  }
  async getRequestToken() {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();
    return reqToken.request_token;
  }

  async authenticate(requestToken, username, password) {
    const bodyData = {
      username,
      password,
      request_token: requestToken,
    };
    // First authenticate the requestToken
    const data = await (
      await fetch(LOGIN_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData),
      })
    ).json();
    // Then get the sessionId with the requestToken
    if (data.success) {
      const sessionId = await (
        await fetch(SESSION_ID_URL, {
          ...defaultConfig,
          body: JSON.stringify({ request_token: requestToken }),
        })
      ).json();
      console.log(sessionId.session_id);
      this.session_id = sessionId.session_id;
      localStorage.setItem("movie_tracker_session_id", this.session_id);
      return sessionId;
    }
  }
  async getAccountDetails() {
    console.log(this.session_id, API_KEY);
    const ACCOUNT_DETAILS_URL = `https://api.themoviedb.org/3/account?api_key=${API_KEY}&session_id=${localStorage.getItem(
      "movie_tracker_session_id"
    )}`;
    console.log(ACCOUNT_DETAILS_URL);
    const userAccountDetails = await (await fetch(ACCOUNT_DETAILS_URL)).json();
    console.log(userAccountDetails);
    const userAccountPayload = {
      account_id: userAccountDetails.id,
      username: userAccountDetails.username,
    };
    console.log(userAccountPayload);
    this.account_id = userAccountPayload.account_id;
    return userAccountPayload;
  }

  async logOut() {
    const LOGOUT_URL = `https://api.themoviedb.org/3/authentication/session?api_key=${API_KEY}`;

    const deleteData = {
      session_id: this.session_id,
    };

    console.log(LOGOUT_URL);
    const logOutResponse = await (
      await fetch(LOGOUT_URL, {
        ...deleteConfig,
        body: JSON.stringify(deleteData),
      })
    ).json();
    console.log(logOutResponse);
    localStorage.removeItem("movie_tracker_session_id");
    return logOutResponse;
  }

  async getFavoriteTvShows() {
    const GET_FAVORITE_URL = `https://api.themoviedb.org/3/account/${this.account_id}/favorite/tv?api_key=${API_KEY}&language=en-US&sort_by=created_at.asc&page=1&session_id=${this.session_id}`;
    const favoriteTvShowData = await (await fetch(GET_FAVORITE_URL)).json();
    return favoriteTvShowData;
  }

  async markAsFavorites(media_type, media_id, favorite) {
    const MARK_AS_FAVORITES_URL = `https://api.themoviedb.org/3/account/${this.account_id}/favorite?api_key=${API_KEY}&session_id=${this.session_id}`;
    console.log(MARK_AS_FAVORITES_URL);
    const bodyData = {
      media_type,
      media_id,
      favorite,
    };

    const data = await (
      await fetch(MARK_AS_FAVORITES_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData),
      })
    ).json();
    console.log(`added successfully`);
    console.log(data.success);
    return data;
  }

  async addToWatchList(media_type, media_id, watchlist) {
    const ADD_TO_WATCH_LIST_URL = `https://api.themoviedb.org/3/account/${this.account_id}/watchlist?api_key=${API_KEY}&session_id=${this.session_id}`;
    console.log(ADD_TO_WATCH_LIST_URL);
    const bodyData = {
      media_type,
      media_id,
      watchlist,
    };
    const data = await (
      await fetch(ADD_TO_WATCH_LIST_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData),
      })
    ).json();
    console.log(`added successfully`);
    console.log(data.success);
    return data;
  }

  async getWatchList() {
    const WATCH_LIST_URL = `https://api.themoviedb.org/3/account/${this.account_id}/watchlist/tv?api_key=${API_KEY}&language=en-US&sort_by=created_at.asc&page=1&session_id=${this.session_id}`;
    const result = await (await fetch(WATCH_LIST_URL)).json();
    return result;
  }

  async rateMovie(sessionId, movieId, value) {
    const endpoint = `${API_URL}movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;

    const rating = await (
      await fetch(endpoint, {
        ...defaultConfig,
        body: JSON.stringify({ value }),
      })
    ).json();

    return rating;
  }
}

const apipoints = new ApiCalls();
apipoints.authenticate();

export default apipoints;
