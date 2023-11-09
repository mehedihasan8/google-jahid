

const Progress = ({rating, val}) => {
    return (
        <div className="flex items-center justify-between text-xl leading-[30px] mb-3">
            <div className="flex items-center justify-between md:justify-normal w-[40px] md:w-fit"><span>{rating}</span>
            <svg className="md:ml-4" width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.83426 0.548934C7.04381 -0.095983 7.95619 -0.0959817 8.16574 0.548936L9.25121 3.88967C9.34492 4.17808 9.61369 4.37336 9.91695 4.37336L13.4296 4.37336C14.1077 4.37336 14.3897 5.24109 13.8411 5.63967L10.9993 7.70435C10.7539 7.8826 10.6513 8.19856 10.745 8.48698L11.8304 11.8277C12.04 12.4726 11.3018 13.0089 10.7532 12.6103L7.91145 10.5456C7.66611 10.3674 7.33389 10.3674 7.08855 10.5456L4.24675 12.6103C3.69815 13.0089 2.96002 12.4726 3.16956 11.8277L4.25503 8.48698C4.34875 8.19856 4.24609 7.8826 4.00074 7.70435L1.15895 5.63967C0.610348 5.24109 0.892291 4.37336 1.5704 4.37336L5.08305 4.37336C5.38631 4.37336 5.65508 4.17808 5.74879 3.88967L6.83426 0.548934Z" fill="#FAAF00" />
            </svg></div>
            <progress className="progress progress-warning  md:w-[332px] w-7/12" value={isNaN(val) ? 0 : val} max="100"></progress>
            <span className="md:w-[55px] w-[51px]">{isNaN(val) ? 0 : val}%</span>
        </div>
    );
};

export default Progress;