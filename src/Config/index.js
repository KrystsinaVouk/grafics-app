import axios from "axios";

export const headers = {
    Accept: "application/json",
    "x-api-key": "3c7d0410-1f13-4655-973b-9bebe2517069",
    "Content-Type": "application/json; charset=utf-8",
};

class Http {
    instance = null;

    get http() {
        return this.instance != null
            ? this.instance
            : this.initHttp();
    }

    initHttp() {
        const http = axios.create({
            baseURL: `https://api.thecatapi.com/v1`,
            headers,
        });

        this.instance = http;
        return http;
    }

    get(url, params) {
        return this.http.get(url, {
            params: params,
        });
    }

    post(url, data) {
        return this.http.post(url, data);
    }

    delete(url, params) {
        return this.http.delete(url, {
            params: params,
        });
    }
}

export const http = new Http();
