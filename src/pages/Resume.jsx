import { resumeItems } from "../data/About";

const Resume = () => {
  const { samary, education, professionalExperience } = resumeItems;
  return (
    <section className="pt-[96px] pb-5 md:pb-[96px]">
      <div className="mx-auto  px-4 sm:px-5 md:px-8 lg:px-12">
        <div className="text-center pb-[30px]">
          <h2 className="section-title-h2">Resume</h2>
          <p className="mb-0">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className=" md:grid md:grid-cols-2 md:gap-4">
          <div>
            <h3 className="text-[26px] font-normal my-[20px] text-[#222222]">
              Samary
            </h3>
            <div className="resume-item pb-0">
              <h4 className="text-[18px] font-semibold mb-[10px] text-[#2d685f]">
                {samary.title}
              </h4>
              <p>
                <em>{samary.content}</em>
              </p>
              <ul className="list-disc pl-[20px]">
                <li className="pb-[10px]">{samary.address}</li>
                <li className="pb-[10px]">{samary.phone}</li>
                <li className="pb-[10px]">{samary.email}</li>
              </ul>
            </div>

            <h3 className="text-[26px] font-normal my-[20px] text-[#222222]">
              Education
            </h3>
            {education.map((edufield, index) => {
              return (
                <div key={index} className="resume-item">
                  <h4 className="text-[18px] font-semibold mb-[10px] text-[#2d685f]">
                    {edufield.title}
                  </h4>
                  <h5 className="text-[16px] bg-[#effbf9] px-2 py-1 inline-block font-semibold mb-[10px] text-th-primary">
                    {edufield.period}
                  </h5>
                  <p>
                    <em className="font-bold text-sm">{edufield.location}</em>
                  </p>
                  <p>{edufield.comment}</p>
                </div>
              );
            })}
          </div>
          <div className="col-lg-6">
            <h3 className="text-[26px] font-normal my-[20px] text-[#222222]">
              Professional Experience
            </h3>
            {professionalExperience.map((profField, index) => {
              return (
                <div key={index} className="resume-item">
                  <h4 className="text-[18px] font-semibold mb-[10px] text-[#2d685f]">
                    {profField.title}
                  </h4>
                  <h5 className="text-[16px] bg-[#effbf9] px-2 py-1 inline-block font-semibold mb-[10px] text-th-primary">
                    {profField.period}
                  </h5>
                  <p>
                    <em className="font-bold text-sm">{profField.location} </em>
                  </p>
                  <ul className="pl-[20px] list-disc">
                    {profField.work.map((workItem, index) => {
                      return (
                        <li key={index} className="pb-[10px]">
                          <p>{workItem}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style>
        {`
          .resume-item {
            padding: 0 0 20px 20px;
            margin-top: -2px;
            border-left: 2px solid #34b7a7;
            position: relative;
          }
          
          .resume-item::before {
            content: "";
            position: absolute;
            width: 16px;
            height: 16px;
            border-radius: 50px;
            left: -9px;
            top: 0;
            background: #fff;
            border: 2px solid #34b7a7;
          }
        `}
      </style>
    </section>
  );
};

export default Resume;
