import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useExercise } from "@daml/react";
import { Boat } from "@daml2ts/boat-0.0.1/lib/Main";

export default function Boats() {

  const boats = useStreamQuery(Boat);
  const exerciseTransferOwnership = useExercise(Boat.TransferOwnership);
  const exerciseTransferCustody = useExercise(Boat.TransferCustody);
  const exerciseClaimDelivery = useExercise(Boat.ClaimDelivery);
  const exerciseRename = useExercise(Boat.Rename);

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
        actions={[
          ["Give", (c, newOwner) => { exerciseTransferOwnership(c.contractId, { newOwner: newOwner }); }, "New Owner"],
          ["GiveCustody", (c, newOwner) => { exerciseTransferCustody(c.contractId, { newCustodian: newOwner }); }, "Custodian"],
          ["Rename", (c, newName) => { exerciseRename(c.contractId, { newName: newName }); }, "New Name"],
          ["Deliver to Owner", (c, newOwner) => { exerciseClaimDelivery(c.contractId, {  }); }, "N/A"],
        ]}
      />
    </>
  );
}
