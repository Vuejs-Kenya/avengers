<template>
	<div class="container">
		<div class="row">
			<div class="col-md-8">
				<div class="card mb-4">
					<div class="card-header">
						All Avengers

						<div class="float-right">
							<input
								type="text"
								class="form-control form-control-sm"
								placeholder="Type to search"
								v-model="search"
								@keydown="searchAvengers(search)"
							/>
						</div>
					</div>
					<div class="card-body">
						<div class="text-center text-secondary d-none">
							<div class="spinner-border">
								<span class="sr-only">Loading...</span>
							</div>
							<p>Fetching data...</p>
						</div>

						<table class="table table-striped table-hover">
							<thead class="thead-dark">
								<th></th>
								<th>Actual Name</th>
								<th>Hero Name</th>
								<th>Logo</th>
							</thead>
							<tbody>
								<tr v-for="a in avengers.data" :key="a.id">
									<td>
										<input type="checkbox" />
									</td>
									<td v-html="a.name"></td>
									<td v-html="a.nickname"></td>
									<td>
										<img
											:src="a.avatar"
											:alt="a.name"
											class="avatar"
										/>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div class="card-footer text-center">
						<nav class="justify-content-end">
							<paginate
								:data="avengers"
								@changed="assembleAvengers"
								class="align-middle"
							/>
						</nav>
					</div>
				</div>
			</div>

			<div class="col-md-4">
				<div class="card">
					<div class="card-header">
						<span v-if="user.nickname"
							>Adding {{ user.nickname }}</span
						>
						<span v-else>Add Avenger</span>
					</div>
					<div class="card-body">
						<div
							class="alert alert-success text-center"
							v-if="success"
						>
							{{ successMsg }}
						</div>
						<div
							class="alert alert-danger text-center"
							v-if="error"
						>
							{{ errorMsg }}
						</div>
						<form class="form" @submit.prevent="saveUser">
							<div class="form-group">
								<label>Given Name</label>
								<input
									class="form-control"
									type="text"
									v-model="user.name"
								/>
							</div>
							<div class="form-group">
								<label>Nickname</label>
								<input
									class="form-control"
									type="text"
									v-model="user.nickname"
								/>
							</div>
							<div class="form-group">
								<label>Logo</label>
								<input
									class="form-control"
									type="text"
									v-model="user.avatar"
								/>
							</div>
							<div class="form-group">
								<label>Description</label>
								<textarea
									class="form-control"
									v-model="user.descriptionr"
								/>
							</div>
							<div class="form-group">
								<button
									type="submit"
									class="btn btn-dark btn-block"
								>
									Save
									<span v-if="user.nickname"
										>{{ user.nickname }}&nbsp;</span
									>Details
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, onMounted, reactive, ref } from "vue";
	import userService from "../services/users";

	export default defineComponent({
		setup() {
			const search = ref("");
			const success = ref(false);
			const successMsg = ref("");
			const error = ref(false);
			const errorMsg = ref("");

			const user = reactive({
				name: "",
				nickname: "",
				avatar: "",
				description: ""
			});

			const {
				avenger,
				avengers,
				assembleAvengers,
				searchAvengers,
				createAvenger,
				findAvenger,
				updateAvenger,
				deleteAvenger,
			} = userService();

			function saveUser() {
				createAvenger(user).then((res) => {
					if (res.record) {
						success.value = true;
						successMsg.value = `${res.record.name} is now an Avenger!`;

						user.name = "";
						user.nickname = "";
						user.avatar = "";
						const description = ""

						assembleAvengers();
					} else {
						error.value = true;
						errorMsg.value = `Could not create account for ${user.name}`;
					}
				});
			}

			onMounted(() => {
				assembleAvengers();
			});

			return {
				user,
				search,
				avenger,
				avengers,
				assembleAvengers,
				searchAvengers,
				createAvenger,
				findAvenger,
				updateAvenger,
				deleteAvenger,
				saveUser,
				success,
				successMsg,
				error,
				errorMsg,
			};
		},
	});
</script>
