import AllLearningTechs from '../icons/AllLearnTechs';
import AnimationContainer from '../utils/AnimationContainer';

const CurrentLearning = () => {
  return (
    <AnimationContainer>
      <div className="flex flex-col justify-center items-center lg:items-start mb-16 mx-auto lg:mx-0">
        <div className="">
          <AllLearningTechs />
        </div>
      </div>
    </AnimationContainer>
  );
};

export default CurrentLearning;
