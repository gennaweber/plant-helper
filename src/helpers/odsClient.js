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
    // interceptResponse: async (response) => {
    //   const apiResponse = await response.json();
    //   delete apiResponse["links"];
    //   return apiResponse;
    // },
  });

  // Create the query to run.
  const fullQuery = `https://pivothub.youthfulcities.com/api/records/1.0/search/?dataset=${dataset}&q=&rows=10&facet=topic_en&facet=indicator_en&facet=measurement_en&facet=city_cma&facet=city&${query}`;

  // console.log(fullQuery);
  // Now, run the query.
  return client
    .get(fullQuery)
    .then((response) => response)
    .catch((error) => console.error(error));
};

//example query:
// "catalog/datasets/index-2020-full/aggregates?select=avg(value) as y,city as x&group_by=city"

export default getData;
