import AnimationContainer from '../utils/AnimationContainer';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <div className="w-full mb-16">
        <h2 className="font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start">
          About me
        </h2>

        <p className="text-base text-gray-400 leading-relaxed">
          I specialize in photovoltaic plant projects and electrical design,
          bringing expertise in cloud security and cybersecurity infrastructure
          for the gas industry. My technical background combines renewable
          energy systems with modern security practices to deliver robust
          solutions.
        </p>
      </div>
    </AnimationContainer>
  );
};

export default AboutMe;
