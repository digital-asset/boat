import React from "react";
import Contracts from "../../components/Contracts/Contracts";
import { useStreamQuery, useExercise } from "@daml/react";
import { ManufacturerRole } from "@daml2ts/boat-0.0.1/lib/Main";

export default function Manufacturer() {

  const role = useStreamQuery(ManufacturerRole);
  const exerciseManufacture = useExercise(ManufacturerRole.Manufacture);

  return (
    <>
      <Contracts
        contracts={role.contracts}
        columns={[
          ["ContractId", "contractId"],
          ["Manufacturer", "payload.manufacturer"],
          ["Coast Guard", "payload.coastGuard"],
        ]}
        actions={[
          ["Manufacture", (c, name) => { exerciseManufacture(c.contractId, { name: name }); }, "Name"],
        ]}
      />
    </>
  );
}
