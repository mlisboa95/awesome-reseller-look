import useScrollAnimation from "@/hooks/useScrollAnimation";
import veeam from "@/assets/partners/veeam.jpg";
import checkpoint from "@/assets/partners/checkpoint.jpg";
import extreme from "@/assets/partners/extreme.jpg";
import arista from "@/assets/partners/arista.jpg";
import hpe from "@/assets/partners/hpe.jpg";
import nutanix from "@/assets/partners/nutanix.jpg";
import trend from "@/assets/partners/trend.jpg";
import exagrid from "@/assets/partners/exagrid.jpg";
import gigamon from "@/assets/partners/gigamon.jpg";
import riverbed from "@/assets/partners/riverbed.jpg";

const vendors = [
  { name: "Veeam", logo: veeam },
  { name: "Check Point", logo: checkpoint },
  { name: "Extreme Networks", logo: extreme },
  { name: "Arista", logo: arista },
  { name: "HPE", logo: hpe },
  { name: "Nutanix", logo: nutanix },
  { name: "Trend Micro", logo: trend },
  { name: "ExaGrid", logo: exagrid },
  { name: "Gigamon", logo: gigamon },
  { name: "Riverbed", logo: riverbed },
];

const TechnologiesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="technologies" className="py-14 md:py-20 bg-gray-50 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className={`max-w-3xl mb-10 scroll-fade-up ${isVisible ? "visible" : ""}`}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Technologies
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-gray-900 leading-[1.1]">
            Key vendors we work <span className="text-primary">with.</span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 leading-relaxed mt-4 max-w-2xl">
            A selection of the platforms we design, deploy, and operate for our clients.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
          {vendors.map((v) => (
            <div
              key={v.name}
              className="bg-white h-28 flex items-center justify-center p-6"
              title={v.name}
            >
              <img
                src={v.logo}
                alt={v.name}
                className="max-h-12 w-auto object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;