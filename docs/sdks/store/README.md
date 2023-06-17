# store

## Overview

Access to Petstore orders

### Available Operations

* [deleteOrder](#deleteorder) - Delete purchase order by ID
* [getInventory](#getinventory) - Returns pet inventories by status
* [getOrderById](#getorderbyid) - Find purchase order by ID
* [placeOrder](#placeorder) - Place an order for a pet

## deleteOrder

For valid response try integer IDs with positive integer value.\ \ Negative or non-integer values will generate API errors

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { DeleteOrderResponse } from "PetStore/dist/sdk/models/operations";

const sdk = new PetStore();

sdk.store.deleteOrder({
  orderId: 653108,
}).then((res: DeleteOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.DeleteOrderRequest](../../models/operations/deleteorderrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.DeleteOrderResponse](../../models/operations/deleteorderresponse.md)>**


## getInventory

Returns a map of status codes to quantities

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { GetInventoryResponse } from "PetStore/dist/sdk/models/operations";

const sdk = new PetStore();

sdk.store.getInventory({
  apiKey: "",
}).then((res: GetInventoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `security`                                                                         | [operations.GetInventorySecurity](../../models/operations/getinventorysecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetInventoryResponse](../../models/operations/getinventoryresponse.md)>**


## getOrderById

For valid response try integer IDs with value >= 1 and <= 10.\ \ Other values will generated exceptions

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { GetOrderByIdResponse } from "PetStore/dist/sdk/models/operations";
import { OrderStatus } from "PetStore/dist/sdk/models/shared";

const sdk = new PetStore();

sdk.store.getOrderById({
  orderId: 581850,
}).then((res: GetOrderByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetOrderByIdRequest](../../models/operations/getorderbyidrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetOrderByIdResponse](../../models/operations/getorderbyidresponse.md)>**


## placeOrder

Place an order for a pet

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { PlaceOrderResponse } from "PetStore/dist/sdk/models/operations";
import { OrderStatus } from "PetStore/dist/sdk/models/shared";

const sdk = new PetStore();

sdk.store.placeOrder({
  complete: false,
  id: 253291,
  petId: 414369,
  quantity: 466311,
  shipDate: new Date("2022-10-03T18:49:53.900Z"),
  status: OrderStatus.Approved,
}).then((res: PlaceOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Order](../../models/shared/order.md)                 | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PlaceOrderResponse](../../models/operations/placeorderresponse.md)>**

