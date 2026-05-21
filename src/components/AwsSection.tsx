import useScrollAnimation from "@/hooks/useScrollAnimation";
import awsLogo from "@/assets/partners/aws.svg";

const AwsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="aws" className="py-14 md:py-20 relative z-10 bg-white border-y border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10 md:gap-14 items-center scroll-fade-up ${isVisible ? "visible" : ""}`}
        >
          <div className="flex items-center justify-center md:justify-start">
            <img
              src={awsLogo}
              alt="Amazon Web Services"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
              AWS Partnership
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold tracking-tight text-gray-900 leading-[1.15] mb-4">
              AWS Partner and AWS Marketplace Channel Partner.
            </h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-3xl">
              Mahvla is an AWS Partner and an AWS Marketplace Channel Partner. We help clients
              procure software through AWS Marketplace via Channel Partner Private Offers (CPPO)
              and design, deploy, and manage their workloads on AWS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwsSection;