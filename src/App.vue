<template>
	<div class="container">
		<header class="d-block">
			<nav class="navbar navbar-dark text-dark">
				<a class="navbar-brand" href="/">Avengers</a>
				<button
					class="navbar-toggler"
					data-toggle="collapse"
					data-target="mainNav"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="mainNav">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item">
							<router-link to="/">Home</router-link>
						</li>
						<li class="nav-item">
							<router-link to="/team">Team</router-link>
						</li>
						<li class="nav-item">
							<router-link to="/powers">Powers</router-link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
		<main>
			<router-view />
		</main>
		<footer class="footer mt-4">
			<p>&copy; 2020 Avengers</p>
		</footer>
	</div>
</template>
