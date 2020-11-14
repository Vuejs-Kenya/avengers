<template>
	<header class="d-block mb-4">
		<nav
			class="navbar navbar-expand-md navbar-dark bg-dark"
		>
			<div class="container">
        <a class="navbar-brand" href="/">Avengers</a>
			<button
				class="navbar-toggler"
				data-toggle="collapse"
				data-target="mainNav"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse justify-content-end" id="mainNav">
				<ul class="navbar-nav mr-2">
					<li class="nav-item">
						<router-link class="nav-link" to="/">Home</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/team"
							>Team</router-link
						>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/powers"
							>Powers</router-link
						>
					</li>
				</ul>
			</div>
      </div>
		</nav>
	</header>
	<main>
		<router-view />
	</main>
	<footer class="footer mt-4">
		<div class="container-fluid">
      <p>&copy; 2020 Avengers</p>
    </div>
	</footer>
</template>
