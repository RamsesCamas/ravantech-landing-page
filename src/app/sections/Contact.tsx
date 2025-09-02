"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

export const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const honeypot = String(formData.get("company") || "");

    if (honeypot) {
      setStatus("success");
      form.reset();
      toast.success("¡Gracias! Tu mensaje se envió correctamente.");
      return;
    }

    if (!name || !email || !message) {
      toast.error("Por favor completa todos los campos obligatorios.");
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      toast.error("Ingresa un correo válido.");
      return;
    }

    try {
      setStatus("loading");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });

      if (!res.ok) throw new Error("Solicitud fallida");

      setStatus("success");
      form.reset();
      toast.success("¡Gracias! Tu mensaje se envió correctamente.");
    } catch (err) {
      setStatus("error");
      toast.error("Ocurrió un error al enviar. Inténtalo de nuevo.");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <section id="contact" className="bg-white px-[10%] md:px-[45px] xl:px-[83px] 2xl:px-[203px] py-[40px] xl:pt-[55px] xl:pb-[75px] scroll-mt-[65px]">
      <div className="mx-auto max-w-[550px]">
        <div className="text-center mb-[25px] md:mb-[35px] xl:mb-[45px]">
          <h2 className="font-sora font-extrabold text-[20px] md:text-[24px] xl:text-[30px] text-center mb-[20px]">
            Contacto
          </h2>
          <h3 className="font-nunito font-medium text-[#5B16FE] text-[16px] md:text-[18px] xl:text-[22px] text-center">
            ¿Tienes un proyecto en mente?&nbsp;
            <span className="inline text-night">
              Escríbenos y hablemos de innovación.
            </span>
          </h3>
          
        </div>

        <form onSubmit={onSubmit} noValidate className="bg-alt-white grid gap-[15px] md:gap-[25px] xl:gap-[30px] rounded-2xl border border-gray-border p-8">
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid gap-2">
            <label htmlFor="name" className="font-nunito font-bold text-[14px] xl:text-[18px]">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Nombre completo"
              className="bg-white w-full rounded-xl border border-gray-border px-3 py-2 text-base outline-none transition focus-visible:ring-3 focus-visible:ring-blue-500/30 focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="email" className="font-nunito font-bold text-[14px] xl:text-[18px]">
              Correo
            </label>
            <input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              placeholder="nombre@correo.com"
              className="bg-white w-full rounded-xl border border-gray-border px-3 py-2 text-base outline-none transition focus-visible:ring-3 focus-visible:ring-blue-500/30 focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="message" className="font-nunito font-bold text-[14px] xl:text-[18px]">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Cuéntanos brevemente tu necesidad, tiempos y alcance."
              className="bg-white w-full rounded-xl border border-gray-border px-3 py-2 text-base outline-none transition focus-visible:ring-3 focus-visible:ring-blue-500/30 focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center rounded-xl cursor-pointer bg-[#6340B5] px-[25px] py-[15px] font-sora font-bold text-[12px] xl:text-[15px] text-white transition hover:brightness-97 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500/30 disabled:opacity-50"
            >
              {status === "loading" ? (
                <span className="inline-flex items-center gap-2">
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                  Enviando…
                </span>
              ) : (
                "Enviar mensaje"
              )}
            </button>
          </div>
        </form>
      </div>

      <ToastContainer
        toastClassName={() =>
          "relative flex items-center p-6 mb-4 font-nunito text-[#757575] bg-white rounded-lg border border-gray-border"
        }
      />
    </section>
  );
};