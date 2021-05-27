import React from "react";
import { useLaunchProfileQuery } from "../../generated/graphql";
import SingleMissionInfo from "./SingleMissionInfo";
import MissionInfoList from './../missionInfo/MissionInfoList'
import { resolveTypeReferenceDirective } from "typescript";
// import ProfileImg from './ProfileImg';
interface Props {
  Id: string;
  // data: any
}
export const MissionContainer: React.FC<Props> = (Id) => {
  console.log(Id.Id, "kkk");
  const { data, error, loading } = useLaunchProfileQuery({
    variables: { id: `${Id.Id}` },
  });
console.log(data?.launch?.flight_number);
let name = data?.launch?.flight_number

  if (loading) return <div>loading</div>;
  console.log(data, "yehprofiledata");
  return (
  <>
  <SingleMissionInfo data={data} Id={Id} />

   

   </>)
};
