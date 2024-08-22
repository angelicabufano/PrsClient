import { BASE_URL, checkStatus, delay, parseJSON } from "../utility/fetchUtilities";
import { RequestLine } from "./RequestLine";

const url = `${BASE_URL}/RequestLines`;

export const requestLineAPI = {
  list(): Promise<RequestLine[]> {
    return fetch(url).then(checkStatus).then(delay(200)).then(parseJSON);
  },
  find(id: number): Promise<RequestLine> {
    return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
  },
  post(request: RequestLine) {
    return fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },
  put(requestLine: RequestLine) {
    return fetch(`${url}/${requestLine.id}`, {
      method: "PUT",
      body: JSON.stringify(requestLine),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      
  },
  delete(id: number) {
    return fetch(`${url}/${id}`, { method: "DELETE" }).then(checkStatus);
  },
};