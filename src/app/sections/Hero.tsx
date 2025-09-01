import Image from "next/image";

export const Hero = () => {
  return (
    <section className="bg-main-purple h-[calc(100vh+75px)] md:h-[calc(70vh)] xl:h-screen px-[10%] md:px-[60px] xl:px-[130px] 2xl:px-[250px] flex flex-col md:flex-row justify-center items-center text-center md:text-left md:gap-x-[35px] xl:gap-x-[70px]">
      <div className="text-white md:w-[50%] lg:w-[47.5%] 2xl:w-[45%]">
        <div className="font-sora font-bold">
          <h1 className="text-[32px] min-[425px]:text-[40px] md:text-[32px] min-[1050px]:text-[50px] 2xl:text-[55px]">
            Bienvenidos a
            <p className="text-secondary-purple">
              RavanTech
            </p>
          </h1>
        </div>

        <p className="font-nunito font-regular text-[16px] min-[1050px]:text-[20px] 2xl:text-[25px] mt-[15px] xl:mt-[30px] mb-[45px]">
          Desarrollamos soluciones innovadoras con realidad virtual, mixta, aumentada, videojuegos e inteligencia artificial para transformar tu empresa.
        </p>

        <a className="bg-[#D3C1FE] py-[15px] px-[20px] rounded-xl cursor-pointer font-sora font-bold text-[#372466] text-[16px] xl:text-[20px] hover:brightness-97" href="#contact">
          Contáctanos
        </a>
      </div>

      <div className="flex">
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
          className="h-auto w-[400px] md:w-[310px] min-[850px]:w-[400px] xl:w-[450px] min-[1400px]:w-[537px] rounded-[20px] mt-[50px] md:mt-[0]"
        />
      </div>
    </section>
  );
};