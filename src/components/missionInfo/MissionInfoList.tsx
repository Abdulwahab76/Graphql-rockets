
import * as React from "react";
import { LaunchListQuery } from "../../generated/graphql";
import "./st.css";

interface Props {
  data: any;
  Id: any;
}

const MissionInfoList: React.FC<Props> = ({ data, Id }) => {
  console.log(data.launches);
  return (
    <div className="text-center py-4 margin" style={{margin:'20px'}}>
      <ol
        className="list-group text-center"
        style={{ overflowY: "auto", height: "250px" }}
        id="olh"
      >
        <li className="list-group-item list-group-item-action">
          {" "}
          <h3 style={{ color: "#282c34" }}>ALL MISSION OF SPACEX</h3>
        </li>
        {!!data.launches &&
          data.launches.map(
            (launch: any) =>
              !!launch && (
                <li 
                  onClick={() => {
                    Id[1](`${launch.flight_number}`);
                  }}
                  className="list-group-item list-group-item-action listing"
                >
                  {launch.mission_name}({launch.launch_year}
                  {/* {<button 
          onClick={()=>{Id[1](`${launch.flight_number}`)}}>{launch.mission_name} 
          ({launch.launch_year}</button>}
                  ) */}
                </li>
              )
          )}
      </ol>
    </div>
  );
};

export default MissionInfoList;
