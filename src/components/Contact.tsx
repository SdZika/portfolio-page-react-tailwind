import React, { FC, useState, FormEvent } from "react";
import supabase from "../config/supabaseClient";

export const Contact: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidEmail = (email: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !email || !message || !isValidEmail(email)) {
      setFormError("Please fill in all fields correctly.");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("contacts")
        .insert([{ name, message, email }]);

      if (error) {
        console.log("Error inserting data:", error);
        setFormError(
          "There was an issue submitting the form. Please try again."
        );
      }

      if (data) {
        console.log("Form submission successful:", data);
        setFormError(null);
        setName("");
        setEmail("");
        setMessage("");
        alert("Thank you for your message! We will back to you soon!");
      }
    } catch (err) {
      console.error("Network error:", err);
      setFormError(
        "Network error. Please check your connection or try again later."
      );
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id="contact">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight primary-color">
          Contact me
        </h2>
      </div>

      <div className="max-w-[800px] mx-auto">
        <div className="mt-6 bg-[#161616] rounded-xl">
          <div className="p-10">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      placeholder="Your Name"
                      onChange={(e) => setName(e.target.value)}
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                    />
                  </div>
                </div>

                <div>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      placeholder="Your Email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      value={message}
                      placeholder="Your Message"
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                    ></textarea>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md"
                  >
                    Send
                  </button>
                </div>
              </div>
              {formError && <p className="text-red-500 mt-4">{formError}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
