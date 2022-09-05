import { skills } from "../data/About";
import Progress from "./Progress";

const Skills = () => {
  return (
    <section className="my-10 p-3 sm:p-10">
      <div className="px-4" data-aos="fade-up">
        <div className="section-title">
          <h2 className="text-center section-title-h2">Skills</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="md:grid md:grid-cols-2">
          <div>
            {skills[0].map((skill, index) => {
              const { skillLevel, skillname } = skill;
              return (
                <Progress
                  key={index}
                  skillLevel={skillLevel}
                  skillname={skillname}
                />
              );
            })}
          </div>

          <div>
            {skills[1].map((skill, index) => {
              const { skillLevel, skillname } = skill;
              return (
                <Progress
                  key={index}
                  skillLevel={skillLevel}
                  skillname={skillname}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
