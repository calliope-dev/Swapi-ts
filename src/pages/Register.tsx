import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const registerSchema = z.object({
  name: z.string()
    .nonempty('Nome de usuário obrigatório')
    .transform(name => {
      return name.trim().split(' ').map(word => {
        return word[0].toLocaleUpperCase().concat(word.substring(1));
      }).join(' ');
    }),
  email: z.string()
    .nonempty('Email é obrigatório')
    .email('Email inválido'),
  password: z.string()
    .nonempty('Senha obrigatória')
    .min(6, 'Precisa ser no mínimo 6 caracteres'),
});

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