import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useExercise } from "@daml/react";
import { Boat } from "@daml2ts/boat-0.0.1/lib/Main";

export default function Report() {

  const boats = useStreamQuery(Boat);
  const exerciseTransferOwnership = useExercise(Boat.TransferOwnership);

  return (
    <>
      <Contracts
        contracts={boats.contracts}
        columns={[
          ["ContractId", "contractId"],
          ["Name", "payload.name"],
          ["Manufacturer", "payload.manufacturer"],
          ["Owner", "payload.owner"],
          ["Custodian", "payload.custodian"],
        ]}
        actions={[["Give", (c, newOwner) => { exerciseTransferOwnership(c.contractId, { newOwner: newOwner }); }, "New Owner"]]}
      />
    </>
  );
}
