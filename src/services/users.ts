import http from "./http";
import { ref } from "vue";

export default function userService() {
  const avenger = ref({});
  const avengers = ref({});

  async function assembleAvengers(page = 1) {
    return http.get(`/api/users?page=${page}`).then((res: any) => {
      avengers.value = res.data;
      return res.data;
    });
  }

  async function searchAvengers(s: any) {
    return http.get(`/api/users?s=${s}`).then((res: any) => {
      avengers.value = res.data;
      return res.data;
    });
  }

  async function createAvenger(data: {}) {
    return http.post(`/api/users`, data).then((res: any) => {
      avenger.value = res.data.user;
      return res.data;
    });
  }

  async function findAvenger(id: number) {
    return http.post(`/api/users/${id}`).then((res: any) => {
      avenger.value = res.data.user;
      return res.data.user;
    });
  }

  async function updateAvenger(data: any) {
    http.put(`/api/users/${data.id}`, data).then((res: any) => {
      avenger.value = res.data.user;
      return res.data.user;
    });
  }

  async function deleteAvenger(data: any) {
    return http.delete(`/api/users/${data.id}`, data).then((res: any) => {
      return res;
    });
  }

  return {
    avenger,
    avengers,
    assembleAvengers,
    searchAvengers,
    createAvenger,
    findAvenger,
    updateAvenger,
    deleteAvenger
  };
}
