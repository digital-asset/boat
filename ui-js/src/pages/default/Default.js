import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useQuery } from "@daml/react";
import { Boat } from "@daml2ts/boat-0.0.1/lib/Main";

export default function Default() {

  const assets = useQuery(Boat);

  return (<Contracts contracts={assets.contracts} />);
}
