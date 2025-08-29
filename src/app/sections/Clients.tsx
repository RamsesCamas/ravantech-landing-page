import InfiniteSlider from "@/components/InfiniteSlider";
import { CLIENTS } from "@/constants/clients";

export const Clients = () => {
  return (
    <section className="py-[40px] xl:py-[55px]">
      <h2 className="font-sora font-extrabold text-[22px] md:text-[24px] xl:text-[32px] text-center mb-[30px] md:mb-[35px] xl:mb-[50px]">
        Nuestros&nbsp;
        <p className="text-secondary-purple inline">
          Clientes
        </p>
      </h2>

      <InfiniteSlider
        images={CLIENTS}
        speedSec={50}
        direction="left"
        heightPx={80}
        gapPx={28}
        pauseOnHover={false}
      />
    </section>
  );
};