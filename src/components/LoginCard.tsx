import Input from "./Input";

export default function LoginCard() {
  const background =
    "bg-black w-full h-screen flex items-center justify-center flex-col";
  const cardContainer =
    "bg-white w-3/5 h-4/5 flex items-center justify-center flex-col";
  const btn = "bg-sky-400 text-white pl-3 pr-3 pt-2 pb-2 rounded-full ";

  return (
    <>
      <div className={background}>
        <form className={cardContainer}>
          <h1 className="text-2xl mb-2">Digite seu email</h1>
          <Input type={"email"} />
          <button type="submit" className={btn}>
            Proximo
          </button>
        </form>
      </div>
    </>
  );
}
