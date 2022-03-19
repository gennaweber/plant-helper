import { ApiClient } from "@opendatasoft/api-client";

//this is for the V1 API
const getData = async (dataset, query) => {
  const client = new ApiClient({
    /* (Optional) authenticate through an api key */
    apiKey: process.env.REACT_APP_ODS_API,

    /* (Optional) The Opendatasoft domain identifier or url.
       If missing, in the browser, the client will use the current host. */
    domain: "pivot-data-hub" || "https://pivot-data-hub.opendatasoft.com/",

    /* (Optional) A fetch-compatible API for making a request. */
    fetch: window.fetch,

    /* (Optional) Allow you to update the request before it is send. */
    // interceptRequest: async (request) => {
    //       console.log(request);
    //       request.headers.append('x-custom', 'custom');
    //       return request;
    // },

    /* (Optional) Allow you to intercept the response before it is returned */
    interceptResponse: async (response) => {
      const apiResponse = await response.json();
      delete apiResponse["links"];
      return apiResponse;
    },
  });

  // Create the query to run.
  const fullQuery = `https://pivothub.youthfulcities.com/api/v2/catalog/datasets/${dataset}/${query}`;

  // console.log(fullQuery);
  // Now, run the query.
  return client
    .get(fullQuery)
    .then((response) => response)
    .catch((error) => console.log(error));
};

//example queries:
// "/aggregates?select=avg(value) as y,city as x&group_by=city"
// "/records?limit=10&offset=0"

export default getData;
