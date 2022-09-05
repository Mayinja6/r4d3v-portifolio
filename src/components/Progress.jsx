export const ProgressBar = ({ completed }) => {
  return (
    <div
      className="relative bg-th-header-bg"
      style={{ transition: "width 1s ease-in-out" }}
    >
      <div
        className="h-[10px] bg-th-primary"
        style={{ width: `${completed}%` }}
      ></div>
    </div>
  );
};

const Progress = ({ skillLevel, skillname }) => {
  return (
    <div className="h-[60px] relative block bg-none p-3">
      <span className="py-[10px] px-0 mx-0 mt-0 mb-[6px] uppercase block font-semibold text-[#222222]">
        {skillname} <i className="not-italic float-right">{skillLevel}%</i>
      </span>
      <ProgressBar completed={skillLevel} />
    </div>
  );
};

export default Progress;
