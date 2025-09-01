import TeamCarousel from "@/components/TeamCarousel";
import { TEAM } from "@/constants/team";

export const Team = () => {
  return (
    <section className="px-[10%] md:px-[28px] xl:px-[63px] 2xl:px-[183px] py-[40px] xl:py-[55px]">
      <h2 className="font-sora font-extrabold text-[20px] md:text-[24px] xl:text-[30px] text-center mb-[30px] md:mb-[35px] xl:mb-[50px]">
        Conoce a &nbsp;
        <p className="text-secondary-purple inline">
          Nuestro Equipo
        </p>
      </h2>

      <TeamCarousel members={TEAM} className="mt-6" />
    </section>
  );
};