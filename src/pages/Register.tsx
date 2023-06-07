const Register = () => {
	return (
		<main
			className=" h-screen bg-zinc-900 flex items-center justify-center"
		>
			<form
				className="flex flex-col gap-4 w-xs text-white"
			>
				<div
					className="flex flex-col gap-1"
				>
					<label htmlFor="name">Nome</label>
					<input
						type="text"
					/>
				</div>
				<div
					className="flex flex-col gap-1"
				>
					<label htmlFor="email">Email</label>
					<input
						type="text"
					/>
				</div>
				<div
					className="flex flex-col gap-1"
				>
					<label htmlFor="password">Password</label>
					<input
						type="password"
					/>
				</div>
				<button>Registrar</button>
			</form>
		</main>
	);
};

export default Register;