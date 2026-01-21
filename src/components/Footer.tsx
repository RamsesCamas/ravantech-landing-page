import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-main-purple font-nunito text-white px-[21px] min-[450px]:px-[12.5%] pt-[35px] pb-[30px] xl:pt-[50px]">
      <div className="
        grid grid-cols-2 gap-[20px]
        md:grid-cols-none md:flex md:flex-row md:flex-nowrap md:justify-evenly xl:justify-center md:gap-[50px] xl:gap-[150px]
        mb-[35px]
      ">
        <div className="col-span-1 md:col-span-1 md:w-[20%]">
          <Image
            src="/icons/ravantech-white.svg"
            alt="RavanTech logo"
            width={132.3}
            height={35}
            loading="lazy"
            decoding="async"
            className="xl:w-auto xl:h-[50px] mb-[20px]"
          />
          <p className="font-regular text-[12px] xl:text-[14px]">
            Permitanos ser su socio de confianza en el camino hacia un futuro exitoso.
          </p>
        </div>

        <div className="col-span-1 md:col-span-1 md:w-[27.5%] xl:w-[25%] text-[12px] xl:text-[14px]">
          <div>
            <h4 className="font-bold">Correo</h4>
            <p className="font-light">contact@ravantech.com.mx</p>
          </div>
        </div>

        <div className="col-span-2 md:col-span-1 md:w-[22.5%] xl:w-[17.5%] text-[12px] xl:text-[14px] text-center md:text-left">
          <div>
            <h4 className="font-bold">Teléfono</h4>
            <p className="font-light">(+52) 961 460 2777</p>
          </div>

          <div className="flex justify-center md:justify-start gap-x-[30px] pt-[20px] xl:pt-[30px]">
            <a href="https://www.instagram.com/ravantech.xr/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <Image
                src="/icons/instagram.svg"
                alt="Instagram icon"
                width={20}
                height={20}
                loading="lazy"
                decoding="async"
                className="xl:w-auto xl:h-[30px]"
              />
            </a>
            <a href="https://www.linkedin.com/company/ravan-tech/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn icon"
                width={20}
                height={20}
                loading="lazy"
                decoding="async"
                className="xl:w-auto xl:h-[30px]"
              />
            </a>
          </div>
        </div>
      </div>

      <small className="block font-light text-[9px] xl:text-[11px] text-center">
        © <time dateTime="2025">2025</time> RavanTech. Todos los derechos reservados
      </small>
    </footer>
  );
};