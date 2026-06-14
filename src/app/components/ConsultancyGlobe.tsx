import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

const HUB_LOCATIONS = [
  { name: "India", lat: 20.5937, lng: 78.9629 },
  { name: "New York", lat: 40.7128, lng: -74.006 },
  { name: "Hong Kong", lat: 22.3193, lng: 114.1694 },
  { name: "China", lat: 35.8617, lng: 104.1954 },
];

const TRADE_ROUTES = HUB_LOCATIONS.flatMap((source) =>
  HUB_LOCATIONS.filter((target) => target.name !== source.name).map((target) => ({
    startLat: source.lat,
    startLng: source.lng,
    endLat: target.lat,
    endLng: target.lng,
    color: ["rgba(148, 163, 184, 0.08)", "rgba(226, 232, 240, 0.45)"],
  }))
);

type ConsultancyGlobeProps = {
  className?: string;
};

export default function ConsultancyGlobe({ className = "" }: ConsultancyGlobeProps) {
  const globeEl = useRef<{ controls: () => { autoRotate: boolean; autoRotateSpeed: number; enableZoom: boolean }; pointOfView: (pov: { lat: number; lng: number; altitude: number }, ms?: number) => void } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current) return;
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (!globeEl.current) return;
    const controls = globeEl.current.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.35;
    controls.enableZoom = false;
    globeEl.current.pointOfView({ lat: 22, lng: 95, altitude: 1.85 }, 0);
  }, [dimensions.width]);

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`}>
      {dimensions.width > 0 && (
        <Globe
          ref={globeEl}
          width={dimensions.width}
          height={dimensions.height}
          globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundColor="rgba(0,0,0,0)"
          atmosphereColor="#94a3b8"
          atmosphereAltitude={0.12}
          pointsData={HUB_LOCATIONS}
          pointLat="lat"
          pointLng="lng"
          pointColor={() => "rgba(226, 232, 240, 0.95)"}
          pointAltitude={0.04}
          pointRadius={0.35}
          pointsMerge={false}
          ringsData={HUB_LOCATIONS}
          ringLat="lat"
          ringLng="lng"
          ringColor={() => (t: number) => `rgba(203, 213, 225, ${(1 - t) * 0.55})`}
          ringMaxRadius={2.8}
          ringPropagationSpeed={1.8}
          ringRepeatPeriod={1400}
          arcsData={TRADE_ROUTES}
          arcStartLat="startLat"
          arcStartLng="startLng"
          arcEndLat="endLat"
          arcEndLng="endLng"
          arcColor="color"
          arcDashLength={0.45}
          arcDashGap={0.25}
          arcDashAnimateTime={2800}
          arcAltitude={0.18}
          arcStroke={0.35}
          labelsData={HUB_LOCATIONS}
          labelLat="lat"
          labelLng="lng"
          labelText="name"
          labelColor={() => "rgba(226, 232, 240, 0.75)"}
          labelSize={0.9}
          labelDotRadius={0.25}
          labelAltitude={0.06}
          labelResolution={2}
        />
      )}
    </div>
  );
}
