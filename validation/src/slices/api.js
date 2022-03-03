import axios from "axios";


const api = axios.create();

api.interceptors.request.use(
    (config) => {
        if (localStorage.getItem("access_token")) {
            config.headers.authorization = `Bearer ${localStorage.getItem(
                "access_token"
            )}`;
        }
        return config;
    },
    (error) => {
        if (error.response.status === 401) {
            return 'Unauthorized'
        }
    }
);
api.interceptors.response.use(
    (config) => {
        if (localStorage.getItem("access_token")) {
            config.headers.authorization = `Bearer ${localStorage.getItem(
                "access_token"
            )}`;
            return config;
        }
    },
    (error) => {
        if (error.response.data.message === "Token is expired") {
            return axios
                .post(
                    "http://127.0.0.1:8000/api/auth/refresh",
                    {},
                    {
                        headers: {
                            authorization: `Bearer ${localStorage.getItem(
                                "access_token"
                            )}`,
                        },
                    }
                )
                .then((res) => {
                    localStorage.setItem("access_token", res.data.access_token);

                    error.config.headers.authorization = `Bearer ${res.data.access_token}`;

                    return api.request(error.config)
                });
        }
    }
);
export default api;