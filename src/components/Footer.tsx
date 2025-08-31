export const Footer = () => {
  return (
    <footer className="bg-main-purple font-nunito-sans text-white px-[21px] pt-[35px] pb-[30px] xl:pt-[50px]">
      <div className="flex flex-row justify-center gap-[50px] xl:gap-[150px] mb-[35px]">
        <div className="w-[20%]">
          <img
            src="/icons/ravantech-white.svg"
            alt="RavanTech logo"
            width={132.3}
            height={35}
            className="xl:w-auto xl:h-[50px] mb-[20px]"
          />
          <p className="font-light text-[11px] xl:text-[14px]">
            Permitanos ser su socio de confianza en el camino hacia un futuro exitoso.
          </p>
        </div>

        <div className="w-[25%] text-[11px] xl:text-[14px]">
          <div className="mb-[20px]">
            <h4 className="font-bold">
              Dirección
            </h4>
            <p className="font-light">
              Calle 12A Pte. Nte. 16, El Magueyito, 29038 <br/> Tuxtla Gutiérrez, Chiapas
            </p>
          </div>

          <div>
            <h4 className="font-bold">
              Correo
            </h4>
            <p className="font-light">
              contact@ravantech.com.mx
            </p>
          </div>
        </div>

        <div className="w-[15%] text-[11px] xl:text-[14px]">
          <div>
            <h4 className="font-bold">
              Teléfono
            </h4>
            <p className="font-light">
              (+52) 961 460 2777
            </p>
          </div>

          <div className="flex gap-x-[30px] pt-[20px] xl:pt-[30px]">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/facebook.svg"
                alt="Facebook icon"
                width={30}
                height={30}
              />
            </a>
            <a href="https://www.instagram.com/ravantech.xr/" target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/instagram.svg"
                alt="Instagram icon"
                width={30}
                height={30}
              />
            </a>
            <a href="https://www.linkedin.com/company/ravan-tech/" target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/linkedin.svg"
                alt="LinkedIn icon"
                width={30}
                height={30}
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