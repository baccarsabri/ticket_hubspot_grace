import DateSearch from "../common/DateSearch";
import LocationSearch from "./LocationSearch";

const MainFilterSearchBox = () => {
  return (
    <>
      <div className="mainSearch -col-2 bg-white px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-4 mt-30">
        <div className="button-grid items-center">
          <LocationSearch />
          {/* End Location */}

         
          {/* End check-in-out */}

          <div className="button-item">
            <button className="mainSearch__submit button -dark-1 py-20 px-40 col-12 rounded-4 bg-blue-1 text-white">
              <i className="icon-search text-20 mr-10" />
              Search
            </button>
          </div>
          {/* End search button_item */}
        </div>
      </div>
    </>
  );
};

export default MainFilterSearchBox;
