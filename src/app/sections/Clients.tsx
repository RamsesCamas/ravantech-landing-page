import ClientOnly from "@/components/BrowserOnly";
import ModelViewer from "@/components/ModelViewer";

export const Clients = () => {
  return (
    <main className="container mx-auto">
      <ClientOnly>
        <ModelViewer
          src="/models/VR_Headset.glb"
          height={200}
          className=""
        />
      </ClientOnly>

      <ClientOnly>
        <ModelViewer
          src="/models/WebsiteBrain.glb"
          height={200}
          className=""
        />
      </ClientOnly>

      <ClientOnly>
        <ModelViewer
          src="/models/WebsiteController.glb"
          height={200}
          className=""
        />
      </ClientOnly>
    </main>
  );
};