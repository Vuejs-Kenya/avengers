<template>
	<table>
		<thead>
			<th>Name</th>
			<td>Username</td>
		</thead>
		<tbody>
			<tr v-for="a in avengers.data" :key="a.id">
				<td>
					{{ a.name }}
				</td>
				<td>
					{{ a.username }}
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script lang="ts">
	import { defineComponent, onMounted, ref } from "vue";
	import http from "../services/http";
	import userService from "../services/users";

	export default defineComponent({
		setup() {
			const { avengers, assembleAvengers } = userService();

			onMounted(() => {
				assembleAvengers();
			});

			return { avengers, assembleAvengers };
		},
	});
</script>
