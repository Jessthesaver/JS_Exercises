//run with json-server --watch db.json
let async = {
  getAll: async function (urlArray, callback) {
    let results = [];
    for (const url of urlArray) {
      results.push(
        fetch(url, {
          method: "GET",
        }).then((response) => response.json())
      );
    }

    await Promise.allSettled(results).then((responses) => {
      let context = {};

      for (let response in responses) {
        context[parseInt(response) + 1] = responses[response];
      }
      callback.call(context);
    });
    return results;
  },
};

const urls = [
  "http://localhost:3000/posts",
  "http://localhost:3000/comments",
  "http://localhost:3000/profile",
];
function cbck() {
  console.log(this);
}

let result = async.getAll(urls, cbck);

//now this should work better
