const Login = () => {
  return (
    <main>
      <form>
        <div>
          <label htmlFor="name-input">Nome</label>
          <input
            type="text"
            name="name-input"
          />
        </div>
        <div>
          <label htmlFor="email-input">Email</label>
          <input
            type="text"
            name="email-input"
          />
        </div>
        <div>
          <label htmlFor="password-input">Senha</label>
          <input
            type="password"
            name="password-input"
          />
        </div>
        <button
          type="button"
          name="confirm-button"
        >
          Confirmar
        </button>
      </form>
    </main>
  )
}

export default Login;