import useFetch from "@/src/hooks/useFetch";
import { ADHERENT_URL } from "@/src/utils/_constants";
import { AdherentCard } from ".";
import AdherentAddBtn from "./adherentAddBtn";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAdherents } from "@/src/store/slices/adherent.slice";
import { useGetAdherentsQuery } from "../services";

const adherentList = () => {
  // const {
  //   data: adherents,
  //   setData: setAdherent,
  //   isLoading,
  //   error,
  // } = useFetch(ADHERENT_URL);

  // const dispatch = useDispatch();
  // const adherentList = useSelector((state: any) => state.adherentList);
  const dispatch = useDispatch();

  const {
    data: adherents,
    isFetching: isLoading,
    isError: error,
  } = useGetAdherentsQuery();

  useEffect(() => {
    if (adherents && adherents.length) {
      dispatch(setAdherents(adherents));
    }
  }, [adherents]);

  const { adherentList } = useSelector((state: any) => {
    return state.adherent;
  });

  if (isLoading) return <p>En cours de chargement ...</p>;
  if (error) return <p> Une erreur s'est produite</p>;

  return (
    <>
      <div className="flex justify-end mb-4">
        <AdherentAddBtn />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {adherentList.length > 0 &&
          adherentList.map((adherent: Adherent) => (
            <AdherentCard key={adherent.id} adherent={adherent} />
          ))}
      </div>
    </>
  );
};

export default adherentList;
