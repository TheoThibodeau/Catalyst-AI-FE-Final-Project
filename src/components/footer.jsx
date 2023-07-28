const Footer = () => {
    const handleClickBack = () => {
      console.log("Back!", handelClickBack)
    };
  
    const handleClickForward = () => {
        console.log("Forward!", handelClickForward)
    };
  
    return (
      <>
        <div className="fixed bottom-0 left-0 right-0 flex justify-between bg-slate-50 border border-slate-200 p-3">
      <div className="flex items-center">
        <button
          className="text-1xl text-slate-500"
          onClick={handleClickBack}
        >
          Back
        </button>
      </div>
      <div className="flex items-center">
        <button
          className="text-1xl text-slate-500"
          onClick={handleClickForward}
        >
          Forward
        </button>
      </div>
    </div>
      </>
    );
  };
  
  export default Footer;
  