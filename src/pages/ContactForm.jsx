import Toast from "../Components/Toast/Toast";
import TransitionComponent from "../Components/Transition/Transition";
import { contactOptions } from "../assets/data";
import { ContactButton } from "./ContactButton";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit=(data)=>{
    console.log(data,"data")
  }
  return (
    <TransitionComponent>
      <div className="max-w-4xl my-6 mx-auto p-4 lg:px-4 ">
        <h1 className="text-zinc-200 text-3xl font-semibold text-center">
          Let&apos;s Connect
        </h1>
        <p className="text-md text-zinc-300 my-4 text-wrap max-w-2xl text-center mx-auto">
          I&apos;M always open to new opportunities. If you&apos;re intrested in
          hiring me, just want to chat or if you have any ideas, feel free to
          reach out we can start conversation.
        </p>

        <form className="max-w-sm mx-auto my-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light"
              placeholder="example Binod ..."
              {...register("name", { required: true })}
              required
            />
          </div>
          <label
            htmlFor="email-address-icon"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Email
          </label>
          <div className="relative mb-5">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full ps-10 p-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
              placeholder="name@example.com"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
              placeholder="Leave a comment..."
              {...register("message", { required: true })}
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 w-full"
          >
            Register new account
          </button>
        </form>

        <section className="py-8">
          <p className="text-lg text-zinc-400 my-2 text-center max-w-sm mx-auto">
            Or reach me out through these platforms :
          </p>
            <div className="flex gap-4 justify-center mt-4">
              {contactOptions.map((option) => (
                <ContactButton key={option.label} {...option} />
              ))}
            </div>
        </section>
      </div>
      <Toast message="Message sent successfully!" 
      type="success"
      />

    </TransitionComponent>
  );
};

export default ContactForm;
