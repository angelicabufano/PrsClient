import { Vendor } from "./Vendor";
import { BASE_URL, checkStatus, delay, parseJSON } from "../utility/fetchUtilities";

const url = `${BASE_URL}/Vendor`

export const vendorAPI = {
    list(): Promise<Vendor[]> {
        return fetch(url).then(checkStatus).then(delay(200)).then(parseJSON);
    }


}