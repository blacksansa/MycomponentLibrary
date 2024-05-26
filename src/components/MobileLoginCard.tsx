export default function MobileLoginCard() {
  return (
    <div className="flex justify-center items-center h-full ">
      <form className="w-11/12 h-10/12  h-full flex flex-col">
        <label className="text-lg mt-10 mb-4">
          <b>Email</b>
        </label>
        <input
          placeholder="example@email.com"
          type="email"
          className="bg-stone-950 border border-gray-400 p-2 rounded-lg"
        />
        <label className="text-lg mt-6 mb-4">
          <b>Password</b>
        </label>
        <input
          placeholder="Digite sua senha"
          type="password"
          className="bg-stone-950 border border-gray-400 p-2 rounded-lg"
        />
        <div className="mt-6 text-right w-full  text-gray-200">
          Esqueceu sua senha
        </div>
        <button type="submit" className="bg-gray-500 rounded-lg p-2 mt-20">
          Login
        </button>
      </form>
    </div>
  );
}
