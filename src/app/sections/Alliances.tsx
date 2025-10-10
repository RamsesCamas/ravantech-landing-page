import InfiniteSlider from "@/components/InfiniteSlider";
import { ALLIANCES } from "@/constants/alliances";

export const Alliances = () => {
  return (
    <section className="bg-white py-[40px] xl:py-[55px]">
      <h2 className="font-sora font-extrabold text-[20px] md:text-[24px] xl:text-[30px] text-center mb-[30px] md:mb-[35px] xl:mb-[50px]">
        Certificados y Alianzas
      </h2>

      <InfiniteSlider
        images={ALLIANCES}
        speedSec={50}
        direction="left"
        heightPx={55}
        gapPx={28}
        pauseOnHover={false}
      />
    </section>
  );
};