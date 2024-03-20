<!-- Start SDK Example Usage [usage] -->
```typescript
import { PetStore } from "PetStore";
import { PetStatus } from "PetStore/dist/sdk/models/shared";

async function run() {
    const sdk = new PetStore({
        petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    });

    const res = await sdk.pet.addPetJson({
        category: {},
        name: "doggie",
        photoUrls: ["<value>"],
        tags: [{}],
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->