function App() {
	return (
		<div className="container">
			<h1 className="text-center">Hello, PicoCSS!</h1>
			<article>
				<header>Je souhaite m'inscrire</header>
				<form>
					<fieldset>
						<label>
							First name
							<input
								name="first_name"
								placeholder="First name"
								autocomplete="given-name"
							/>
						</label>
						<label>
							Email
							<input
								type="email"
								name="email"
								placeholder="Email"
								autocomplete="email"
							/>
						</label>
					</fieldset>

					<input type="submit" value="Subscribe" />
				</form>
				<footer>Je suis le footer</footer>
			</article>
			<h2>Les loaders</h2>
			<section className="grid">
				<button aria-busy="true" aria-label="Please wait…" />
				<button
					aria-busy="true"
					aria-label="Please wait…"
					class="secondary"
				/>
				<button
					aria-busy="true"
					aria-label="Please wait…"
					class="contrast"
				/>
				<button aria-busy="true" class="outline">
					Please wait…
				</button>
				<button aria-busy="true" class="outline secondary">
					Please wait…
				</button>
				<button aria-busy="true" class="outline contrast">
					Please wait…
				</button>
			</section>
		</div>
	);
}

export default App;
