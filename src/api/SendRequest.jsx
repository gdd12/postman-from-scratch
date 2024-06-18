import axios from "axios";

export default async function SendRequest({method, url, options = {} || undefined}) {
  const { params, headers, data } = options;

  try {
    switch (method.toUpperCase()) {
      case "GET":
        return await axios.get(url, { params, headers });
      case "POST":
        return await axios.post(url, data, { headers });
      case "PUT":
        return await axios.put(url, data, { headers });
      case "DELETE":
        return await axios.delete(url, { headers });
      default:
        throw new Error(`Unsupported method: ${method}`);
    }
  } catch (error) {
    throw new Error(`Error during ${method} request to ${url}: ${error.message}`);
  }
}
