<!-- Start SDK Example Usage -->


```typescript
import { PetStore } from "PetStore";
import { AddPetJsonResponse, AddPetJsonSecurity } from "PetStore/dist/sdk/models/operations";
import { PetStatus } from "PetStore/dist/sdk/models/shared";

const sdk = new PetStore();
const operationSecurity: AddPetJsonSecurity = {
  petstoreAuth: "",
};

sdk.pet.addPetJson({
  category: {
    id: 548814,
    name: "Kelvin Sporer",
  },
  id: 544883,
  name: "doggie",
  photoUrls: [
    "illum",
  ],
  status: PetStatus.Pending,
  tags: [
    {
      id: 623564,
      name: "Rick Kertzmann",
    },
  ],
}, operationSecurity).then((res: AddPetJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->