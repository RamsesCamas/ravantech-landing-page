"use client"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Html, Clone } from "@react-three/drei"
import { Suspense, useLayoutEffect, useMemo, useRef, useState } from "react"
import { Box3, Vector3, Group, PerspectiveCamera } from "three"

type Props = {
  src?: string
  className?: string
  height?: number
  autoRotate?: boolean
  autoRotateSpeed?: number
  fillY?: number                        // Porcentaje de alto visible que debe ocupar el modelo (0–1). Ej: 0.9 = 90%
  align?: "center" | "bottom" | "top"   // Alineación vertical en pantalla
  gutterY?: number                      //Separación al borde (como fracción del alto visible). Ej: 0.04 = 4%
  orbit?: boolean
};

/* Ajusta escala (fillY) y coloca el modelo en pantalla según align, devolviendo el targetY */
function FittedModel({
  url,
  fillY = 0.9,
  align = "center",
  gutterY = 0.03,
  onComputedTargetY,
}: {
  url: string
  fillY?: number
  align?: "center" | "bottom" | "top"
  gutterY?: number
  onComputedTargetY?: (y: number) => void
}) {
  const { scene } = useGLTF(url) as any;

  // Orden de grupos para que la traslación NO se escale:
  // posGroup (mueve en unidades de mundo) -> scaleGroup (escala) -> centerGroup (centra)
  const posGroup = useRef<Group>(null);
  const scaleGroup = useRef<Group>(null);

  // Calculamos caja y centro del GLB original (no lo mutamos)
  const { size, center } = useMemo(() => {
    const box = new Box3().setFromObject(scene);
    const c = new Vector3();
    const s = new Vector3();
    box.getCenter(c);
    box.getSize(s);
    return { size: s, center: c };
  }, [scene]);

  // Efecto de layout: escalar y posicionar
  useLayoutEffect(() => {
    if (!posGroup.current || !scaleGroup.current) return;

    // Cámara actual (perspectiva)
    const cam = (scaleGroup.current as any).__r3f.root.getState().camera as PerspectiveCamera;
    // Distancia de la cámara al origen (giramos alrededor del origen)
    const distance = cam.position.length();
    // Alto del frustum en el plano del origen
    const vHeight = 2 * distance * Math.tan((cam.fov * Math.PI) / 360);

    // Altura base del modelo (si es muy plano en Y, usa el mayor eje)
    const baseY = size.y > 1e-4 ? size.y : Math.max(size.x, size.y, size.z) || 1;

    // Escala para que el modelo ocupe fillY * vHeight
    const scale = (fillY * vHeight) / baseY;
    scaleGroup.current.scale.setScalar(scale);

    // Queremos colocar el modelo con su centro en el origen antes de moverlo:
    // lo haremos con un subgrupo que desplaza -center (ver JSX)
    // Ahora calculamos cuánto subir/bajar en unidades de mundo (posGroup.y)
    const halfVH = vHeight / 2;
    const halfScaledY = (size.y * scale) / 2;
    const gutter = gutterY * vHeight;

    let posY = 0;
    if (align === "center") {
      posY = 0;
    } else if (align === "bottom") {
      // que el borde inferior toque el borde inferior de la pantalla (con gutter)
      // bottomScreen = -halfVH + gutter = posY - halfScaledY
      posY = -halfVH + gutter + halfScaledY;
    } else if (align === "top") {
      // que el borde superior toque el borde superior (con gutter)
      // topScreen = +halfVH - gutter = posY + halfScaledY
      posY = +halfVH - gutter - halfScaledY;
    }

    posGroup.current.position.set(0, posY, 0);
    onComputedTargetY?.(posY);
  }, [size, center, fillY, align, gutterY, onComputedTargetY]);

  // Estructura de grupos:
  // posGroup (traslada en mundo) -> scaleGroup (escala) -> group con -center (centra el modelo)
  return (
    <group ref={posGroup}>
      <group ref={scaleGroup}>
        <group position={new Vector3(-center.x, -center.y, -center.z)}>
          <Clone object={scene} />
        </group>
      </group>
    </group>
  );
};

export default function ModelViewer({
  src = "",
  className = "",
  height = 200,
  autoRotate = true,
  autoRotateSpeed = 2,
  fillY = 0.9,
  align = "center",
  gutterY = 0.03,
  orbit = true,
}: Props) {
  const [targetY, setTargetY] = useState(0);
  const [active, setActive] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ height }}>
      <Canvas
        frameloop={active ? "always" : "demand"}
        dpr={[1, 1]}
        camera={{ position: [2.2, 0, 2.2], fov: 45 }}
        gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
        style={{ background: "transparent" }}
        onCreated={(st) => st.gl.setClearAlpha(0)}
        onPointerEnter={() => setActive(true)}
        onPointerLeave={() => setActive(false)}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={1.8} />

        <Suspense fallback={
          <Html center>
            <div className="px-3 py-2 text-sm text-white/80 bg-black/50 rounded">
              Cargando modelo…
            </div>
          </Html>
        }>
          <FittedModel
            url={src}
            fillY={fillY}
            align={align}
            gutterY={gutterY}
            onComputedTargetY={setTargetY}
          />
        </Suspense>

        {orbit && (
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableDamping
            autoRotate={autoRotate}
            autoRotateSpeed={autoRotateSpeed}
            // target al centro del modelo ya colocado (evita que “bailen”)
            target={[0, targetY, 0]}
          />
        )}
      </Canvas>
    </div>
  );
};

