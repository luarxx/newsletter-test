import { useState } from "react";
import illustrationMobile from "../../assets/illustration-sign-up-mobile.svg";
import illustrationDesktop from "../../assets/illustration-sign-up-desktop.svg";

export function Home() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [modalOpen, setModalOpen] = useState(false); // estado que controla se o modal está aberto ou não

  const border = document.getElementById("email");

  const validateEmail = (email) => {
    // função para validar o email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regex para validar o email
    return regex.test(email); // retorna true se o email for válido e false se não for
  };

  const handleChange = (event) => {
    // função que é chamada toda vez que o valor do input muda
    const { value } = event.target; // pega o valor do input e armazena na variável value
    setEmail(value); // atualiza o estado do email com o valor de value
    if (!validateEmail(value)) {
      setEmailError("Please provide a valid email address."); // se o email não for válido, atualiza o estado do erro com a mensagem de erro
      border.style.border = "1px solid red";
    } else {
      setEmailError("");
      border.style.border = "1px solid gray";
    }
  };

  const handleSubmit = (event) => {
    // função que é chamada quando o formulário é submetido
    event.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Please provide a valid email address."); // se o email não for válido, atualiza o estado do erro com a mensagem de erro
    } else {
      setModalOpen(true); // se o email for válido, abre o modal
    }
  };

  const closeModal = () => {
    setModalOpen(false); // fecha o modal
  };

  return (
    <div className="sm:max-h-screen flex justify-center  bg-Charcoal_Grey">
      <div className="bg-white sm:flex sm:flex-row-reverse sm:rounded-xl">
        <img src={illustrationMobile} alt="" className="w-screen sm:hidden" />
        <img src={illustrationDesktop} alt="" className="hidden sm:block p-4" />
        {/* <svg className=" h-72 w-100 bg-no-repeat bg-mobile" /> */}
        <div className="m-7 sm:m-0 sm:p-10 sm:flex sm:flex-col sm:text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-5 sm:mt-20">
            Stay updated!
          </h1>
          <p className="mb-5 sm:w-96 sm:text-left">
            Join 60.000+ product managers receving monthly updates on:
          </p>
          <ul className="flex flex-col gap-3">
            <li className="flex">
              <svg className="icone w-6 h-6 mr-2 mt-px" />
              Product discovery and building what matters
            </li>
            <li className="flex">
              <svg className="icone w-6 h-6 mr-2 mt-px" />
              Measuring to ensure updates are a sucess
            </li>
            <li className="flex">
              <svg className="icone w-6 h-6 mr-2 mt-px" />
              And much more!
            </li>
          </ul>

          <form onSubmit={handleSubmit} className="mt-8 sm:text-left">
            <div className="mb-1">
              <label
                htmlFor="email"
                className="text-sm font-medium flex justify-between"
              >
                Email adress
                {<p className="text-red-500 text-right ">{emailError}</p>}
              </label>
            </div>
            <div className="mb-2">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="email@company.com"
                className="w-full border focus:outline-none border-Grey rounded-md py-3 px-3"
              />
            </div>
            <button
              type="submit"
              className="bg-Charcoal_Grey text-white mt-3 w-full py-3 px-4 rounded-md hover:bg-tomato"
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </div>

      {modalOpen && ( // se o modal estiver aberto, renderiza o modal
        <div className="fixed inset-0 flex justify-center bg-gray-900 sm:items-center ">
          <div className="bg-white p-12 rounded-3xl shadow-lg sm:w-min ">
            <span
              className="absolute top-0 right-0 text-gray-500 cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </span>
            <svg className="icone-sucesse mt-10 w-min h-16 sm:mt-0" />
            <h2 className="text-4xl text-Charcoal_Grey font-bold mb-4 mt-10">
              Thanks for subscribing!
            </h2>
            <p>
              A confirmation email has been sent to{" "}
              <span className="text-Charcoal_Grey font-extrabold ">
                {email}{"."} {/* Mostra o email na tela */}
              </span>{" "}
              Please open it and click the button inside confirm your
              subscription
            </p>
            <button
              type="reset"
              onClick={closeModal}
              className="mt-80 sm:mt-10 bg-Charcoal_Grey text-white py-3 w-full rounded-md hover:bg-tomato"
            >
              Dismiss message
            </button>
          </div>
        </div>
      )} 
    </div>
  );
}

