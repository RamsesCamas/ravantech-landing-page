import InfiniteSlider from "@/components/InfiniteSlider";
import { ALLIANCES } from "@/constants/alliances";

export const Alliances = () => {
  return (
    <section className="bg-white py-[40px] xl:py-[55px]">
      <h2 className="font-sora font-extrabold text-[22px] md:text-[24px] xl:text-[32px] text-center mb-[30px] md:mb-[35px] xl:mb-[50px]">
        Certificados y Alianzas
      </h2>

      <InfiniteSlider
        images={ALLIANCES}
        speedSec={35}
        direction="left"
        heightPx={65}
        gapPx={28}
        pauseOnHover={false}
      />
    </section>
  );
};