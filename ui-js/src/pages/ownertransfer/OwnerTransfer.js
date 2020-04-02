import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useExercise } from "@daml/react";
import { TransferProposal } from "@daml2ts/boat-0.0.1/lib/Main";

export default function OwnerProposals() {

  const transferProposals = useStreamQuery(TransferProposal);
  const exerciseAccept = useExercise(TransferProposal.AcceptOwnership);
  const exerciseReject = useExercise(TransferProposal.RejectOwnership);

  return (
    <>
      <Contracts
        contracts={transferProposals.contracts}
        columns={[
          ["ContractId", "contractId"],
          ["Name", "payload.boat.name"],
          ["Manufacturer", "payload.boat.manufacturer"],
          ["Current Owner", "payload.boat.owner"],
          ["Custodian", "payload.boat.custodian"],
          ["New Owner", "payload.newOwner"]
        ]}
        actions={[
          ["Accept", (c, newOwner) => { exerciseAccept(c.contractId, { }); }, "N/A"],
          ["Reject", (c, newOwner) => { exerciseReject(c.contractId, { }); }, "N/A"],
        ]}
      />
    </>
  );
}
