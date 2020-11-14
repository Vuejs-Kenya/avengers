<template>
	<div class="container">
		<div class="card">
			<div class="card-header">
				Add Avenger
			</div>
			<div class="card-body">
				<form class="form">
					<div class="form-group">
						<label>Given Name</label>
						<input class="form-control" type="text" />
					</div>
				</form>
			</div>
		</div>

		<div class="card mt-4">
			<div class="card-header">
				All Avengers
			</div>
			<div class="card-body">
				<table class="table">
					<thead>
						<th>Name</th>
						<th>Username</th>
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
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, onMounted } from "vue";
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
