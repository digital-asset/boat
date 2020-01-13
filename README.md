# Yachts in DAML

This is a tutorial example, mostly spelled out in `daml/Main.daml`, of how one might represent the manufacture, ownership, custody, and oversight of a yacht. 

The participants on a `Boat` contract are:
1. Manufacturer: the party which produced the boat.
2. Owner: the party who owns the boat.
3. Custodian: the party who currently has posession of the boat.
4. Coast Guard: has access to all Boat contracts, but they have neither rights nor responsibilities.

All of these parties are signatories on the Boat contract, as they all have some sort of liability or responsibility for the boat. 

The manufacturer of the boat may not change. The owner may, in case it is purchased or given away. The custodian may change as well, going from the manufacturer, to a shipping company, to the owner. 

## Deploying to the Sandbox

`cd` into the project directory (where the `daml.yaml` resides) and then 
```bash
daml start
```
This will compile the code, and start up the daml navigator. You'll be able to log in as any of the four parties above. 

To initiate the workflow, log in as the Manufacturer. Select Templates, and create a `Boat` contract. Specify "Feadship" as the manufacturer, the owner, and the custodian; "USCG" ought to be the coast-guard. This represents the fact the Feadship manufactured, owns, and has the boat. The US Coast guard is aware of the boat.

Once the contract is created, select Contracts on the left and select the `Boat` contract that was just created. You can exercise two choices on this contract; you can change the ownership, or change the custodian. You'll need to log in as either "Larry" or the "Shipper" to accept the responsibility for the boat.

To add more parties, modify the `daml.yaml` file, and restart the sandbox.
