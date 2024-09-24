import Image from "next/image";

// Define the type for FeatureCard props
interface FeatureCardProps {
  title: string;
  imageSrc: string;
  description: string;
}

// Define the FeatureCard component
const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  imageSrc,
  description,
}) => (
  <div className="w-2/3 lg:w-full flex-shrink-0 lg:flex-shrink flex flex-col gap-4">
    <div className="h-1 bg-green-600 bg-opacity-70" />
    <h3 className="text-white text-xl font-medium">{title}</h3>
    <Image
      width={500}
      height={417}
      className=" rounded-lg object-cover"
      src={`/png/${imageSrc}`}
      alt={title}
    />
    <p className="text-white font-light mt-3">{description}</p>
  </div>
);

// Define the type for the feature data
interface FeatureData {
  title: string;
  imageSrc: string;
  description: string;
}

// Define the Features component
const Features = ({ className }: { className: string }) => {
  // Define the features data
  const featuresData: FeatureData[] = [
    {
      title: "Accurate Matchmaking",
      imageSrc: "features1.png",
      description:
        "Our advanced algorithm pairs you with skilled professionals based on their expertise, reviews, and proximity.",
    },
    {
      title: "Instant Chat Support",
      imageSrc: "features2.png",

      description:
        "Need quick assistance? Connect instantly with our dedicated support team through our built-in chat feature.",
    },
    {
      title: "Transparent Pricing",
      imageSrc: "features3.png",

      description:
        "We guarantee upfront, transparent pricing for every job. Know exactly what you’ll pay before you hire.",
    },
    {
      title: "Secure Payments",
      imageSrc: "features4.png",

      description:
        "Your financial security is our priority. All transactions are processed through a reliable, encrypted system.",
    },
  ];

  return (
    <div
      className={
        "w-full bg-slate-800 flex flex-col justify-center items-center " +
        className
      }
    >
      {/* Main wrapper div */}
      <div className="w-full px-4">
        {/* Title section */}
        <div className="flex justify-center mb-8">
          <h2 className="text-center text-white text-3xl md:text-4xl font-medium leading-tight">
            New Chore Is Equipped With The Best Features To Enable You Find The
            Right Fit.
          </h2>
        </div>

        {/* Features section */}
        <div className="w-full flex gap-5 overflow-x-scroll lg:overflow-x-visible pb-4">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              imageSrc={feature.imageSrc}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
