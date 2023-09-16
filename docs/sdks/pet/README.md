# Pet

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
import { AddPetJsonResponse, AddPetJsonSecurity } from "PetStore/dist/sdk/models/operations";
import { PetStatus } from "PetStore/dist/sdk/models/shared";

const sdk = new PetStore();
const operationSecurity: AddPetJsonSecurity = {
  petstoreAuth: "",
};

sdk.pet.addPetJson({
  category: {
    id: 56713,
    name: "Ricky Hoppe",
  },
  id: 812169,
  name: "doggie",
  photoUrls: [
    "voluptatum",
  ],
  status: PetStatus.Pending,
  tags: [
    {
      id: 568045,
      name: "Mrs. Sophie Smith MD",
    },
  ],
}, operationSecurity).then((res: AddPetJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.Pet](../../models/shared/pet.md)                                       | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.AddPetJsonSecurity](../../models/operations/addpetjsonsecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.AddPetJsonResponse](../../models/operations/addpetjsonresponse.md)>**


## addPetRaw

Add a new pet to the store

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { AddPetRawResponse, AddPetRawSecurity } from "PetStore/dist/sdk/models/operations";
import { PetStatus } from "PetStore/dist/sdk/models/shared";

const sdk = new PetStore();
const operationSecurity: AddPetRawSecurity = {
  petstoreAuth: "",
};

sdk.pet.addPetRaw("perferendis".encode(), operationSecurity).then((res: AddPetRawResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [Uint8Array](../../models//.md)                                              | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `security`                                                                   | [operations.AddPetRawSecurity](../../models/operations/addpetrawsecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.AddPetRawResponse](../../models/operations/addpetrawresponse.md)>**


## deletePet

Deletes a pet

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { DeletePetResponse, DeletePetSecurity } from "PetStore/dist/sdk/models/operations";

const sdk = new PetStore();
const operationSecurity: DeletePetSecurity = {
  petstoreAuth: "",
};

sdk.pet.deletePet({
  apiKey: "ipsam",
  petId: 832620,
}, operationSecurity).then((res: DeletePetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.DeletePetRequest](../../models/operations/deletepetrequest.md)   | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `security`                                                                   | [operations.DeletePetSecurity](../../models/operations/deletepetsecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.DeletePetResponse](../../models/operations/deletepetresponse.md)>**


## findPetsByStatus

Multiple status values can be provided with comma separated strings

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { FindPetsByStatusResponse, FindPetsByStatusSecurity, FindPetsByStatusStatus } from "PetStore/dist/sdk/models/operations";

const sdk = new PetStore();
const operationSecurity: FindPetsByStatusSecurity = {
  petstoreAuth: "",
};

sdk.pet.findPetsByStatus({
  status: [
    FindPetsByStatusStatus.Sold,
  ],
}, operationSecurity).then((res: FindPetsByStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.FindPetsByStatusRequest](../../models/operations/findpetsbystatusrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.FindPetsByStatusSecurity](../../models/operations/findpetsbystatussecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.FindPetsByStatusResponse](../../models/operations/findpetsbystatusresponse.md)>**


## ~~findPetsByTags~~

Muliple tags can be provided with comma separated strings. Use\ \ tag1, tag2, tag3 for testing.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { FindPetsByTagsResponse, FindPetsByTagsSecurity } from "PetStore/dist/sdk/models/operations";

const sdk = new PetStore();
const operationSecurity: FindPetsByTagsSecurity = {
  petstoreAuth: "",
};

sdk.pet.findPetsByTags({
  tags: [
    "quo",
  ],
}, operationSecurity).then((res: FindPetsByTagsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.FindPetsByTagsRequest](../../models/operations/findpetsbytagsrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.FindPetsByTagsSecurity](../../models/operations/findpetsbytagssecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


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
  petId: 140350,
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
import { UpdatePetWithFormResponse, UpdatePetWithFormSecurity } from "PetStore/dist/sdk/models/operations";

const sdk = new PetStore();
const operationSecurity: UpdatePetWithFormSecurity = {
  petstoreAuth: "",
};

sdk.pet.updatePetWithForm({
  petId: 870013,
  petPetIdBody: {
    name: "Emilio Krajcik",
    status: "esse",
  },
}, operationSecurity).then((res: UpdatePetWithFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdatePetWithFormRequest](../../models/operations/updatepetwithformrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.UpdatePetWithFormSecurity](../../models/operations/updatepetwithformsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdatePetWithFormResponse](../../models/operations/updatepetwithformresponse.md)>**


## updatePetJson

Update an existing pet

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { UpdatePetJsonResponse, UpdatePetJsonSecurity } from "PetStore/dist/sdk/models/operations";
import { PetStatus } from "PetStore/dist/sdk/models/shared";

const sdk = new PetStore();
const operationSecurity: UpdatePetJsonSecurity = {
  petstoreAuth: "",
};

sdk.pet.updatePetJson({
  category: {
    id: 520478,
    name: "Omar Carroll",
  },
  id: 582020,
  name: "doggie",
  photoUrls: [
    "fugit",
  ],
  status: PetStatus.Pending,
  tags: [
    {
      id: 944669,
      name: "Everett Breitenberg",
    },
  ],
}, operationSecurity).then((res: UpdatePetJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.Pet](../../models/shared/pet.md)                                             | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.UpdatePetJsonSecurity](../../models/operations/updatepetjsonsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdatePetJsonResponse](../../models/operations/updatepetjsonresponse.md)>**


## updatePetRaw

Update an existing pet

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { UpdatePetRawResponse, UpdatePetRawSecurity } from "PetStore/dist/sdk/models/operations";
import { PetStatus } from "PetStore/dist/sdk/models/shared";

const sdk = new PetStore();
const operationSecurity: UpdatePetRawSecurity = {
  petstoreAuth: "",
};

sdk.pet.updatePetRaw("modi".encode(), operationSecurity).then((res: UpdatePetRawResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [Uint8Array](../../models//.md)                                                    | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.UpdatePetRawSecurity](../../models/operations/updatepetrawsecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdatePetRawResponse](../../models/operations/updatepetrawresponse.md)>**


## uploadFile

uploads an image

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { UploadFileResponse, UploadFileSecurity } from "PetStore/dist/sdk/models/operations";

const sdk = new PetStore();
const operationSecurity: UploadFileSecurity = {
  petstoreAuth: "",
};

sdk.pet.uploadFile({
  requestBody: "qui".encode(),
  petId: 774234,
}, operationSecurity).then((res: UploadFileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.UploadFileRequest](../../models/operations/uploadfilerequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.UploadFileSecurity](../../models/operations/uploadfilesecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.UploadFileResponse](../../models/operations/uploadfileresponse.md)>**

