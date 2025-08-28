import InfiniteSlider from "@/components/InfiniteSlider";

const IMAGES = [
  { src: "/images/clients/client1.png", alt: "Producto 1" },
  { src: "/images/clients/client2.png", alt: "Producto 2" },
  { src: "/images/clients/client3.png", alt: "Producto 3" },
  { src: "/images/clients/client4.png", alt: "Producto 4" },
  { src: "/images/clients/client5.png", alt: "Producto 5" },
];

export const Clients = () => {
  return (
    <section className="px-[10%] md:px-[45px] xl:px-[83px] 2xl:px-[203px] py-[40px] xl:py-[55px]">
      <h2 className="font-sora font-extrabold text-[22px] md:text-[24px] xl:text-[32px] text-center mb-[20px] md:mb-[35px] xl:mb-[50px]">
        Nuestros&nbsp;
        <p className="text-secondary-purple inline">
          Clientes
        </p>
      </h2>

      <div>
        <InfiniteSlider
          images={IMAGES}
          speedSec={35}          // más pequeño = más rápido
          direction="left"       // o "right"
          heightPx={84}          // alto del carrusel
          gapPx={28}             // separación entre imágenes
          pauseOnHover={false}
          // Si no configuras dominios remotos aún:
          unoptimized={true}
          className="rounded-2xl bg-gray-50/60 p-4 shadow-sm"
        />
      </div>
    </section>
  );
};