import React from "react"
import { useLaunchListQuery } from '../../generated/graphql';
import MissionInfoList from "./MissionInfoList"
interface Props {
  Id:any;
}
export const MissionInfoContainer: React.FC<Props> =({Id})=>{
 

  const { data, error, loading } = useLaunchListQuery();
    if(loading)
    return(<div>loading</div>)
    console.log('here',data)
    return(
      <>

<MissionInfoList data={data} Id={Id}  />

      </>
    )
}