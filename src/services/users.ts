import http from "./http"
import { ref } from "vue";

export default function userService() {
    const avenger = ref({});
    const avengers = ref({});

    function assembleAvengers(page = 1) {
        http.get(`/api/users?page=${page}`).then((res) => {
            avengers.value = res.data;
            return res.data
        });
    }

    function searchAvengers(s: any) {
        http.get(`/api/users?s=${s}`).then((res) => {
            avengers.value = res.data;
            return res.data
        });
    }

    function createAvenger(data: any) {
        http.post(`/api/users`, data).then((res: any) => {
            avenger.value = res.data.user;
            return res.data.user
        });
    }

    function findAvenger(id: number) {
        http.post(`/api/users/${id}`).then((res: any) => {
            avenger.value = res.data.user;
            return res.data.user
        });
    }

    function updateAvenger(data: any) {
        http.put(`/api/users/${data.id}`, data).then((res: any) => {
            avenger.value = res.data.user;
            return res.data.user
        });
    }

    function deleteAvenger(data: any) {
        http.delete(`/api/users/${data.id}`, data).then((res: any) => {
            return res
        });
    }

    return { avenger, avengers, assembleAvengers, createAvenger, findAvenger, updateAvenger, deleteAvenger }
}