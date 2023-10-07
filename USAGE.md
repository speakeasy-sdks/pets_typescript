<!-- Start SDK Example Usage -->


```typescript
import { PetStore } from "PetStore";
import { PetStatus } from "PetStore/dist/sdk/models/shared";

(async() => {
  const sdk = new PetStore({
    security: {
      petstoreAuth: "",
    },
  });

  const res = await sdk.pet.addPetJson({
    category: {},
    name: "doggie",
    photoUrls: [
      "male",
    ],
    tags: [
      {},
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```
<!-- End SDK Example Usage -->