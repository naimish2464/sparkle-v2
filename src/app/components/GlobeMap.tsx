import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

export default function GlobeMap({ locations }: { locations: { lat: number; lng: number; name: string }[] }) {
  const globeEl = useRef<any>();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      globeEl.current.pointOfView({ lat: 20, lng: 78, altitude: 2 });
    }
  }, []);

  const arcsData = locations.flatMap((source) => 
    locations.filter(target => target.name !== source.name).map(target => ({
      startLat: source.lat,
      startLng: source.lng,
      endLat: target.lat,
      endLng: target.lng,
      color: ['#60a5fa', '#1e40af']
    }))
  );

  return (
    <div ref={containerRef} className="w-full h-full min-h-[500px]">
      {dimensions.width > 0 && (
        <Globe
          ref={globeEl}
          width={dimensions.width}
          height={dimensions.height}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundColor="rgba(0,0,0,0)"
          pointsData={locations}
          pointLat="lat"
          pointLng="lng"
          pointColor={() => "#60a5fa"}
          pointAltitude={0.1}
          pointRadius={0.5}
          pointsMerge={false}
          arcsData={arcsData}
          arcStartLat="startLat"
          arcStartLng="startLng"
          arcEndLat="endLat"
          arcEndLng="endLng"
          arcColor="color"
          arcDashLength={0.4}
          arcDashGap={0.2}
          arcDashAnimateTime={2000}
          arcAltitude={0.2}
          labelsData={locations}
          labelLat="lat"
          labelLng="lng"
          labelLabel="name"
          labelColor={() => "white"}
          labelSize={1.5}
          labelDotRadius={0.5}
          labelAltitude={0.1}
        />
      )}
    </div>
  );
}
