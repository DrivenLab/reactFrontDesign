export default {
  async get(url, parseJson = true) {
    try {
      let req = await fetch(url);
      let json = await req.json();
      return parseJson ? JSON.parse(json) : json;
    } catch (err) {
      console.log("http get method err", err);
      throw Error(err);
    }
  },

  async post(url, body, convertToJson = true) {
    try {
      let req = await fetch(url, {
        method: "POST",
        body: convertToJson ? JSON.stringify(body) : body
      });
      let json = await req.json();
      return json;
    } catch (err) {
      console.log("http post method err", err);
      throw Error(err);
    }
  }
};
