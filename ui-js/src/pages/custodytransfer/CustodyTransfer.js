import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useExercise } from "@daml/react";
import { CustodyProposal } from "@daml2ts/boat-0.0.1/lib/Main";

export default function CustodyProposals() {

  const custodyProposals = useStreamQuery(CustodyProposal);
  const exerciseAccept = useExercise(CustodyProposal.AcceptCustody);
  const exerciseReject = useExercise(CustodyProposal.RejectCustody);

  return (
    <>
      <Contracts
        contracts={custodyProposals.contracts}
        columns={[
          ["ContractId", "contractId"],
          ["Name", "payload.boat.name"],
          ["Manufacturer", "payload.boat.manufacturer"],
          ["Owner", "payload.boat.owner"],
          ["Current custodian", "payload.boat.custodian"],
          ["New Custodian", "payload.newCustodian"]
        ]}
        actions={[
          ["Accept", (c, newOwner) => { exerciseAccept(c.contractId, { }); }, "N/A"],
          ["Reject", (c, newOwner) => { exerciseReject(c.contractId, { }); }, "N/A"],
        ]}
      />
    </>
  );
}
