import Image from "next/image";

export const Hero = () => {
  return (
    <section className="bg-main-purple h-[calc(100vh-60px)] xl:h-[calc(100vh-85px)] px-[40px] md:px-[60px] xl:px-[130px] 2xl:px-[200px] flex flex-col md:flex-row justify-center items-center text-center md:text-left">
      <article className="text-white md:w-[50%] md:pr-[35px]">
        <header className="font-sora font-bold">
          <h1 className="text-4xl xl:text-6xl 2xl:text-7xl">
            Bienvenidos a
            <p className="text-secondary-purple">
              RavanTech
            </p>
          </h1>
        </header>

        <p className="font-nunito-sans font-regular text-lg xl:text-2xl 2xl:text-3xl mt-[15px] xl:mt-[30px] mb-[40px] xl:mb-[50px]">
          Desarrollamos soluciones innovadoras con realidad virtual, mixta, aumentada, videojuegos e inteligencia artificial para transformar tu empresa.
        </p>

        <a className="bg-secondary-purple py-[15px] px-[20px] rounded-xl cursor-pointer font-sora font-bold text-base xl:text-[22px] hover:brightness-97">
          Contáctanos
        </a>
      </article>

      <Image
        src="/images/hero.jpg"
        alt="Imagen de portada"
        width={537}
        height={358}
        priority
        sizes="(max-width: 699px) 275px,
             (max-width: 1199px) 350px,
             (max-width: 1399px) 450px,
             537px"
        className="h-auto w-[275px] md:w-[350px] xl:w-[450px] min-[1400px]:w-[537px] rounded-[20px] mt-[45px] md:mt-[0]"
      />
    </section>
  );
};