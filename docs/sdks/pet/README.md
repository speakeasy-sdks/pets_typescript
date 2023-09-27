# Pet
(*pet*)

## Overview

Everything about your Pets

Find out more
<http://swagger.io>
### Available Operations

* [addPetJson](#addpetjson) - Add a new pet to the store
* [addPetRaw](#addpetraw) - Add a new pet to the store
* [deletePet](#deletepet) - Deletes a pet
* [findPetsByStatus](#findpetsbystatus) - Finds Pets by status
* [~~findPetsByTags~~](#findpetsbytags) - Finds Pets by tags :warning: **Deprecated**
* [getPetById](#getpetbyid) - Find pet by ID
* [updatePetWithForm](#updatepetwithform) - Updates a pet in the store with form data
* [updatePetJson](#updatepetjson) - Update an existing pet
* [updatePetRaw](#updatepetraw) - Update an existing pet
* [uploadFile](#uploadfile) - uploads an image

## addPetJson

Add a new pet to the store

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { AddPetJsonResponse } from "PetStore/dist/sdk/models/operations";
import { PetStatus } from "PetStore/dist/sdk/models/shared";

const sdk = new PetStore({
  security: {
    petstoreAuth: "",
  },
});

sdk.pet.addPetJson({
  category: {
    id: 20218,
    name: "Estelle Will",
  },
  id: 870013,
  name: "doggie",
  photoUrls: [
    "at",
  ],
  status: PetStatus.Sold,
  tags: [
    {
      id: 473608,
      name: "Forrest Koepp",
    },
  ],
}).then((res: AddPetJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Pet](../../models/shared/pet.md)                     | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.AddPetJsonResponse](../../models/operations/addpetjsonresponse.md)>**


## addPetRaw

Add a new pet to the store

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { AddPetRawResponse } from "PetStore/dist/sdk/models/operations";
import { PetStatus } from "PetStore/dist/sdk/models/shared";

const sdk = new PetStore({
  security: {
    petstoreAuth: "",
  },
});

sdk.pet.addPetRaw("dolorum".encode()).then((res: AddPetRawResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [Uint8Array](../../models//.md)                              | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.AddPetRawResponse](../../models/operations/addpetrawresponse.md)>**


## deletePet

Deletes a pet

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { DeletePetResponse } from "PetStore/dist/sdk/models/operations";

const sdk = new PetStore({
  security: {
    petstoreAuth: "",
  },
});

sdk.pet.deletePet({
  apiKey: "dicta",
  petId: 720633,
}).then((res: DeletePetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.DeletePetRequest](../../models/operations/deletepetrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.DeletePetResponse](../../models/operations/deletepetresponse.md)>**


## findPetsByStatus

Multiple status values can be provided with comma separated strings

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { FindPetsByStatusResponse, FindPetsByStatusStatus } from "PetStore/dist/sdk/models/operations";

const sdk = new PetStore({
  security: {
    petstoreAuth: "",
  },
});

sdk.pet.findPetsByStatus({
  status: [
    FindPetsByStatusStatus.Pending,
  ],
}).then((res: FindPetsByStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.FindPetsByStatusRequest](../../models/operations/findpetsbystatusrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.FindPetsByStatusResponse](../../models/operations/findpetsbystatusresponse.md)>**


## ~~findPetsByTags~~

Muliple tags can be provided with comma separated strings. Use\ \ tag1, tag2, tag3 for testing.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { FindPetsByTagsResponse } from "PetStore/dist/sdk/models/operations";

const sdk = new PetStore({
  security: {
    petstoreAuth: "",
  },
});

sdk.pet.findPetsByTags({
  tags: [
    "occaecati",
  ],
}).then((res: FindPetsByTagsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.FindPetsByTagsRequest](../../models/operations/findpetsbytagsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.FindPetsByTagsResponse](../../models/operations/findpetsbytagsresponse.md)>**


## getPetById

Returns a single pet

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { GetPetByIdResponse, GetPetByIdSecurity } from "PetStore/dist/sdk/models/operations";

const sdk = new PetStore();
const operationSecurity: GetPetByIdSecurity = {
  apiKey: "",
};

sdk.pet.getPetById({
  petId: 143353,
}, operationSecurity).then((res: GetPetByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetPetByIdRequest](../../models/operations/getpetbyidrequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.GetPetByIdSecurity](../../models/operations/getpetbyidsecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetPetByIdResponse](../../models/operations/getpetbyidresponse.md)>**


## updatePetWithForm

Updates a pet in the store with form data

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { UpdatePetWithFormResponse } from "PetStore/dist/sdk/models/operations";

const sdk = new PetStore({
  security: {
    petstoreAuth: "",
  },
});

sdk.pet.updatePetWithForm({
  petId: 537373,
  petPetIdBody: {
    name: "Ms. Earnest Lebsack",
    status: "modi",
  },
}).then((res: UpdatePetWithFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdatePetWithFormRequest](../../models/operations/updatepetwithformrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdatePetWithFormResponse](../../models/operations/updatepetwithformresponse.md)>**


## updatePetJson

Update an existing pet

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { UpdatePetJsonResponse } from "PetStore/dist/sdk/models/operations";
import { PetStatus } from "PetStore/dist/sdk/models/shared";

const sdk = new PetStore({
  security: {
    petstoreAuth: "",
  },
});

sdk.pet.updatePetJson({
  category: {
    id: 186332,
    name: "Jonathon Klocko",
  },
  id: 135218,
  name: "doggie",
  photoUrls: [
    "perferendis",
  ],
  status: PetStatus.Available,
  tags: [
    {
      id: 617636,
      name: "Sheryl Fadel",
    },
  ],
}).then((res: UpdatePetJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Pet](../../models/shared/pet.md)                     | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UpdatePetJsonResponse](../../models/operations/updatepetjsonresponse.md)>**


## updatePetRaw

Update an existing pet

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { UpdatePetRawResponse } from "PetStore/dist/sdk/models/operations";
import { PetStatus } from "PetStore/dist/sdk/models/shared";

const sdk = new PetStore({
  security: {
    petstoreAuth: "",
  },
});

sdk.pet.updatePetRaw("hic".encode()).then((res: UpdatePetRawResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [Uint8Array](../../models//.md)                              | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UpdatePetRawResponse](../../models/operations/updatepetrawresponse.md)>**


## uploadFile

uploads an image

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { UploadFileResponse } from "PetStore/dist/sdk/models/operations";

const sdk = new PetStore({
  security: {
    petstoreAuth: "",
  },
});

sdk.pet.uploadFile({
  requestBody: "saepe".encode(),
  petId: 681820,
}).then((res: UploadFileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.UploadFileRequest](../../models/operations/uploadfilerequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.UploadFileResponse](../../models/operations/uploadfileresponse.md)>**

