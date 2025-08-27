import Image from "next/image";

export const About = () => {
  return (
    <section className="px-[10%] md:px-[70px] xl:px-[163px] 2xl:px-[300px] my-[40px] xl:my-[50px]">
      <h2 className="font-sora font-extrabold text-[22px] md:text-[24px] xl:text-[32px] text-center mb-[20px] md:mb-[35px] xl:mb-[50px]">
        Sobre&nbsp;
        <p className="text-secondary-purple inline">
          Nosotros
        </p>
      </h2>

      <div className="flex flex-col-reverse md:flex-row justify-center items-center"> 
        <div className="md:flex md:justify-center md:w-[50%]">
          <Image
            src="/images/about.jpg"
            alt="Imagen de portada"
            width={400}
            height={285}
            priority
            sizes="(max-width: 699px) 375px,
                (max-width: 1199px) 350px,
                (max-width: 1399px) 400px,
                400px"
            className="h-auto w-[375px] md:w-[350px] xl:w-[400px] rounded-[20px]"
          />
        </div>

        <div className="font-nunito-sans font-regular text-[16px] xl:text-[22px] text-center md:text-left md:w-[50%] md:ml-[30px] xl:ml-[75px]">
          <p className="mb-[15px] md:mb-[20px] xl:mb-[35px]">
            Somos una empresa de tecnologías creativas que fusiona IA y animación 3D para convertir ideas en sistemas inteligentes.
          </p>
          <p className="mb-[25px] md:mb-[0]">
            Ayudamos a empresas de distintos sectores a innovar mediante soluciones digitales personalizadas que combinan software inteligente, visualización avanzada y entornos virtuales interactivos.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row text-center mt-[25px] md:mt-[30px] xl:mt-[50px]">
        <div className="md:w-[50%]">
          <h3 className="font-sora font-extrabold text-[18px] xl:text-[24px] mb-[10px] xl:mb-[15px]">
            Misión
          </h3>
          <p className="font-nunito-sans font-regular text-[16px] xl:text-[22px]">
            Acelerar la transformación digital mediante soluciones inteligentes, visuales y centradas en el usuario.
          </p>
        </div>
        <div className="md:w-[50%] md:ml-[30px] xl:ml-[75px]">
          <h3 className="font-sora font-extrabold text-[18px] xl:text-[24px] mb-[10px] xl:mb-[15px] mt-[20px] md:mt-[0]">
            Visión
          </h3>
          <p className="font-nunito-sans font-regular text-[16px] xl:text-[22px]">
            Ser líderes en Latinoamérica en el desarrollo de soluciones que integren IA, interacción humana y simulación avanzada.
          </p>
        </div>
      </div>
    </section>
  );
};