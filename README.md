# PetStore

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/pets_typescript.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/pets_typescript/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/productionize-sdks/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README
<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/pets_typescript
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/pets_typescript
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [pet](docs/sdks/pet/README.md)

* [addPetJson](docs/sdks/pet/README.md#addpetjson) - Add a new pet to the store
* [addPetRaw](docs/sdks/pet/README.md#addpetraw) - Add a new pet to the store
* [deletePet](docs/sdks/pet/README.md#deletepet) - Deletes a pet
* [findPetsByStatus](docs/sdks/pet/README.md#findpetsbystatus) - Finds Pets by status
* [~~findPetsByTags~~](docs/sdks/pet/README.md#findpetsbytags) - Finds Pets by tags :warning: **Deprecated**
* [getPetById](docs/sdks/pet/README.md#getpetbyid) - Find pet by ID
* [updatePetWithForm](docs/sdks/pet/README.md#updatepetwithform) - Updates a pet in the store with form data
* [updatePetJson](docs/sdks/pet/README.md#updatepetjson) - Update an existing pet
* [updatePetRaw](docs/sdks/pet/README.md#updatepetraw) - Update an existing pet
* [uploadFile](docs/sdks/pet/README.md#uploadfile) - uploads an image

### [store](docs/sdks/store/README.md)

* [deleteOrder](docs/sdks/store/README.md#deleteorder) - Delete purchase order by ID
* [getInventory](docs/sdks/store/README.md#getinventory) - Returns pet inventories by status
* [getOrderById](docs/sdks/store/README.md#getorderbyid) - Find purchase order by ID
* [placeOrder](docs/sdks/store/README.md#placeorder) - Place an order for a pet

### [user](docs/sdks/user/README.md)

* [createUser](docs/sdks/user/README.md#createuser) - Create user
* [createUsersWithArrayInput](docs/sdks/user/README.md#createuserswitharrayinput) - Creates list of users with given input array
* [createUsersWithListInput](docs/sdks/user/README.md#createuserswithlistinput) - Creates list of users with given input array
* [deleteUser](docs/sdks/user/README.md#deleteuser) - Delete user
* [getUserByName](docs/sdks/user/README.md#getuserbyname) - Get user by user name
* [loginUser](docs/sdks/user/README.md#loginuser) - Logs user into the system
* [logoutUser](docs/sdks/user/README.md#logoutuser) - Logs out current logged in user session
* [updateUser](docs/sdks/user/README.md#updateuser) - Updated user
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Example

```typescript
import { PetStore } from "PetStore";
import { PetStatus } from "PetStore/dist/sdk/models/shared";

async function run() {
    const sdk = new PetStore({
        petstoreAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    });

    let res;
    try {
        res = await sdk.pet.addPetJson({
            category: {},
            name: "doggie",
            photoUrls: ["<value>"],
            tags: [{}],
        });
    } catch (err) {
        if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://virtserver.swaggerhub.com/apple313/Petstore-Example/1.0.0` | None |
| 1 | `https://petstore.swagger.io/v2` | None |

#### Example

```typescript
import { PetStore } from "PetStore";
import { PetStatus } from "PetStore/dist/sdk/models/shared";

async function run() {
    const sdk = new PetStore({
        serverIdx: 1,
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


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { PetStore } from "PetStore";
import { PetStatus } from "PetStore/dist/sdk/models/shared";

async function run() {
    const sdk = new PetStore({
        serverURL: "https://virtserver.swaggerhub.com/apple313/Petstore-Example/1.0.0",
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
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { PetStore } from "PetStore";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new PetStore({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name           | Type           | Scheme         |
| -------------- | -------------- | -------------- |
| `petstoreAuth` | oauth2         | OAuth2 token   |

To authenticate with the API the `petstoreAuth` parameter must be set when initializing the SDK client instance. For example:
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

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { PetStore } from "PetStore";
import { GetPetByIdSecurity } from "PetStore/dist/sdk/models/operations";

async function run() {
    const sdk = new PetStore();
    const operationSecurity: GetPetByIdSecurity = "<YOUR_API_KEY_HERE>";

    const res = await sdk.pet.getPetById(
        {
            petId: 504151,
        },
        operationSecurity
    );

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
