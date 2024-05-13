export default function LoginCard() {
  const background =
    "bg-black w-full h-screen flex items-center justify-center flex-col";
  const cardContainer =
    "bg-white w-3/5 h-4/5 flex items-center justify-center flex-col";
  const btn = "bg-sky-400 text-white pl-3 pr-3 pt-2 pb-2 rounded-full ";
  const inputStyles =
    "border-gray-400 border-solid border rounded-full pl-6 pr-6 pb-2 pt-2 outline-none mt-2 mb-5 ";

  return (
    <>
      <div className={background}>
        <form className={cardContainer}>
          <h1 className="text-2xl mb-2">Digite seu email</h1>
          <input type="text" className={inputStyles} />
          <button type="submit" className={btn}>
            Proximo
          </button>
        </form>
      </div>
    </>
  );
}
