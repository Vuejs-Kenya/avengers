import http from "./http"
import { ref, reactive, computed } from "vue"
export default function userService() {
    const avengers = ref({});

    function assembleAvengers() {
        http.get("/api/users").then((res) => {
            avengers.value = res.data;
        });
    }


    return { avengers, assembleAvengers }
}