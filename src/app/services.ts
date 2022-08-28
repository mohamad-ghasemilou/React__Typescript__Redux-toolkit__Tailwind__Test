import axios, {HeadersDefaults} from 'axios'
import { setupCache } from 'axios-cache-adapter'

//todo: put max age and base url in env

const cache = setupCache({
    maxAge: 15 * 60 * 1000,
    exclude: {
        query: false
    }
})

interface CommonHeaderProperties extends HeadersDefaults {
    // 'Authorization': string;
    // 'Content-Type': string;
    // 'Accept': string;
    // "Accept": string;
    // "Accept-Encoding": string;
    // "Accept-Language": string;
}

const instance = axios.create({
    adapter: cache.adapter,
    // baseURL: process.env.BASE_URL,
    baseURL: 'https://fakestoreapi.com',
});

// instance.defaults.headers = {
// "Cache-Control": "no-cache, no-store, max-age=0, must-revalidate"
// 'Authorization': `Bearer authToken`,
// 'Content-Type': 'application/json',
// 'Accept': 'application/json'
// "Accept": "*/*",
// "Accept-Encoding": "gzip, deflate, br",
// "Accept-Language": "en-US,en;q=0.9,fa;q=0.8,ur;q=0.7",
// } as CommonHeaderProperties;

export const get = (url: string) => instance.get(url);
export const post = (url:string, data:any) => instance.post(url, data);
export const put = (url:string, data:any) => instance.put(url, data);
export const remove = (url:string) => instance.delete(url);

// res.setHeader(
//     'Cache-Control',
//     'public, s-maxage=10, stale-while-revalidate=59'
// );
