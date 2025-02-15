import Image from 'next/image';
import AnimationContainer from '../utils/AnimationContainer';

const Hero = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-between w-full lg:flex-row">
      <AnimationContainer>
        <div className="flex flex-col items-center justify-between lg:items-start p-0 lg:pr-8">
          <h1 className="mx-auto mb-3 text-3xl font-bold tracking-tight text-center text-white lg:text-5xl lg:text-start lg:mx-0">
            Chanthawat Kiriyadee
          </h1>
        </div>

        <h2 className="flex items-center gap-2 mx-auto mb-8 text-gray-200 text-1xl lg:text-1xl lg:mx-0">
          <span className="font-semibold">ComEng</span>Student
        </h2>
      </AnimationContainer>

      <AnimationContainer>
        <div className="w-[80px] sm:w-[176px] relative mb-6 lg:mb-0">
          <Image
            alt="Chanthawat Kiriyadee"
            height={176}
            width={176}
            src="/profile.jpeg"
            sizes="30vw"
            priority
            className="rounded-[8px] filter grayscale hover:grayscale-0 transition ease"
          />
        </div>
      </AnimationContainer>
    </div>
  );
};

export default Hero;
