const CookiePopup = ({ isPopUp, setPopUp }) => {
  return (
    <div
      className={`z-10 sticky bottom-0 flex justify-center bg-[#081120] w-full ${isPopUp} `}
    >
      <div className="flex items-center text-white px-4 py-6 ">
        <p className="text-left md:text-center text-base font-paragraph">
          We use cookies to improve your experience on our site. If you continue
          to use this site we will assume that you are happy with it.
        </p>
        <button
          onClick={() => setPopUp("hidden")}
          className="bg-white text-[#081120] py-1 px-3 font-semibold text-lg rounded-md ml-6"
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default CookiePopup;
