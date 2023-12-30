import axios from "axios";

import FlashNotification from "../../components/FlashNotify";
import { signOut } from "../../redux/actions";
import store from "../../redux/store";
import { showSnackbar } from "../../utilities/anim";
import { getUserAccessToken } from "../../utilities/storage";

const apiRequest = axios.create({
    baseURL: "https://api.giphy.com/v1",
    responseType: 'json',
    headers: { 'Content-Type': 'application/json' },
});

apiRequest.interceptors.request.use(
    config => {
        const userToken = getUserAccessToken();
        if (userToken) {
            config.headers.Authorization = `Bearer ${userToken}`;
        }
        console.log('Request Config:', config);
        return config;
    },
    error => {
        console.error('Request Error:', error);
        return Promise.reject(error);
    },
);

apiRequest.interceptors.response.use(
    response => {
        return Promise.resolve(response.data);
    },
    error => {
        console.error('Response Error:', error);
        return interceptingErrors(error);
    })

const interceptingErrors = error => {
    if (!error.response) {
        if (error?.message === 'Network Error') {
            showSnackbar(
                'No connectivity! Please check your internet connection and try again.'
            );
            return Promise.reject(error?.message);
        } else {
            FlashNotification.show('Oops, Something went wrong!.', 'error');
            return Promise.reject(error?.message);
        }
    } else if (
        error.response.status === 401 &&
        error.response.data.code === 401
    ) {
        store.dispatch(signOut())
        showSnackbar('Session Expired, Please Login Again.');
        return Promise.reject(error.response);
    }

    else if (error.response.status === 404) {
        return Promise.reject(error.message);
    }
    else if (error.response.status === 400) {
        return Promise.reject(error.message);
    }
    else {
        return Promise.reject(error.message);
    }
};

export { apiRequest };
