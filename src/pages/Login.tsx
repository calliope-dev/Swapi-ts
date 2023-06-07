import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";

// test

const loginSchema = z.object({
  name: z.string(),
  email: z.string()
    .nonempty('Email é obrigatório')
    .email("Email inválido"),
  password: z.string()
    .min(6, 'Precisa ser no mínimo 6 caracteres'),
})

type loginFormData = z.infer<typeof loginSchema>

const Login = () => {
  const [submitData, setData] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<loginFormData>({
    resolver: zodResolver(loginSchema)
  });

  const onClickFunction = (data: any) => {
    setData(JSON.stringify(data, null, 2))
  };

  return (
    <main
      className=" h-screen bg-zinc-900 flex items-center justify-center"
    >
      <form
        className="flex flex-col gap-4 w-xs text-white"
        onSubmit={handleSubmit(onClickFunction)}
      >
        <div
          className="flex flex-col gap-1"
        >
          <label htmlFor="name">Nome</label>
          <input
            className="text-black"
            type="text"
            {...register('name')}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div
          className="flex flex-col gap-1"
        >
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="text-black"
            {...register('email')}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div
          className="flex flex-col gap-1"
        >
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            className="text-black"
            {...register('password')}
          />
        </div>
        <button
          type="submit"
          name="confirm-button"
        >
          Confirmar
        </button>
      </form>
      <pre>{submitData}</pre>
    </main >
  )
}

export default Login;