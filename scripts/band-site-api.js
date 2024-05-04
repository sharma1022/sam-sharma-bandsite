export class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
  }

  async getComments() {
    try {
      const { data } = await axios.get(
        `${this.baseUrl}comments?api_key=${this.apiKey}`
      );
      const comments = data;
      comments.sort((a, b) => b.timestamp - a.timestamp);
      return comments;
    } catch (e) {
      console.log(e);
    }
  }

  async postComment(commentObj) {
    try {
      const { data } = await axios.post(
        `${this.baseUrl}comments?api_key=${this.apiKey}`,
        commentObj,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async getShows() {
    try {
      const { data } = await axios.get(
        `${this.baseUrl}showdates?api_key=${this.apiKey}`
      );
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async likeComment(commentId) {
    try {
      const { data } = await axios.put(
        `${this.baseUrl}comments/${commentId}/like?api_key=${this.apiKey}`
      );
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async deleteComment(commentId) {
    try {
      const { data } = await axios.delete(
        `${this.baseUrl}comments/${commentId}/?api_key=${this.apiKey}`
      );
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
