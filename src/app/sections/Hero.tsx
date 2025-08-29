import Image from "next/image";

export const Hero = () => {
  return (
    <section className="bg-main-purple h-[calc(100vh-25px)] md:h-[calc(60vh)] xl:h-[calc(100vh-85px)] px-[10%] md:px-[40px] xl:px-[130px] 2xl:px-[200px] flex flex-col md:flex-row justify-center 2xl:justify-evenly items-center text-center md:text-left md:gap-x-5">
      <div className="text-white md:w-[50%] lg:w-[47.5%] 2xl:w-[45%]">
        <div className="font-sora font-bold">
          <h1 className="text-[33px] min-[515px]:text-[39px] xl:text-[60px] 2xl:text-[69px]">
            Bienvenidos a
            <p className="text-secondary-purple">
              RavanTech
            </p>
          </h1>
        </div>

        <p className="font-nunito-sans font-regular text-[20px] xl:text-[24px] 2xl:text-[30px] mt-[15px] xl:mt-[30px] mb-[40px] xl:mb-[50px]">
          Desarrollamos soluciones innovadoras con realidad virtual, mixta, aumentada, videojuegos e inteligencia artificial para transformar tu empresa.
        </p>

        <a className="bg-[#D3C1FE] py-[16px] px-[22px] rounded-xl cursor-pointer font-sora font-bold text-[16px] text-[#372466] xl:text-[20px] hover:brightness-97">
          Contáctanos
        </a>
      </div>

      <div className="flex justify-center md:w-[50%]">
        <Image
          src="/images/hero.jpg"
          alt="Imagen de portada"
          width={537}
          height={358}
          priority
          sizes="(max-width: 699px) 400px,
              (max-width: 1199px) 310px,
              (max-width: 1399px) 450px,
              537px"
          className="h-auto w-[400px] md:w-[310px] min-[850px]:w-[400px] xl:w-[450px] min-[1400px]:w-[537px] rounded-[20px] mt-[60px] md:mt-[0]"
        />
      </div>
    </section>
  );
};