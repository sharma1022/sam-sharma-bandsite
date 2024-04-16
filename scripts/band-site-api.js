export class BandSiteApi{
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    }

    async getComments() {
        try{
            const response = await axios.get(`${this.baseUrl}comments?api_key=${this.apiKey}`);
            const comments = response.data;

            return comments;
        } catch(e){
            console.log(e);
        }
    }
    async postComment(commentObj) {
        try{
            const response = await axios.post(`${this.baseUrl}comments?api_key=${this.apiKey}`, commentObj, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(response.data);
            return response.data;
        } catch(e){
            console.log(e);
        }
    }
}