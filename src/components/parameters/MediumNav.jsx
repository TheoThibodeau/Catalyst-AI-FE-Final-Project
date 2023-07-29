const MediumNav = ({ navData }) => {
  console.log(navData);

  return (
    <>
      <div className={["flex flex-row bg-green-900 w-full space-x-3 text-sm pr-4"].join(" ")}>
        {navData.map((datum) => (
          <div
            key={`${datum.title}-${datum.isActive}`}
            className={[
              datum.isActive ? "text-slate-700" : "text-white",
            ].join(" ")}
          >
            {datum.title}
          </div>
        ))}
      </div>
    </>
  );
};
export default MediumNav;
