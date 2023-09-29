# User
(*user*)

## Overview

Operations about user

Find out more about our store
<http://swagger.io>
### Available Operations

* [createUser](#createuser) - Create user
* [createUsersWithArrayInput](#createuserswitharrayinput) - Creates list of users with given input array
* [createUsersWithListInput](#createuserswithlistinput) - Creates list of users with given input array
* [deleteUser](#deleteuser) - Delete user
* [getUserByName](#getuserbyname) - Get user by user name
* [loginUser](#loginuser) - Logs user into the system
* [logoutUser](#logoutuser) - Logs out current logged in user session
* [updateUser](#updateuser) - Updated user

## createUser

This can only be done by the logged in user.

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { CreateUserResponse } from "PetStore/dist/sdk/models/operations";

const sdk = new PetStore({
  security: {
    petstoreAuth: "",
  },
});

sdk.user.createUser({
  email: "Hailey.Effertz62@yahoo.com",
  firstName: "Jessyca",
  id: 129521,
  lastName: "Champlin",
  password: "d4wq13VrTPEl8BU",
  phone: "1-425-712-5008 x0720",
  userStatus: 521529,
  username: "Malika_Tillman",
}).then((res: CreateUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.User](../../models/shared/user.md)                   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateUserResponse](../../models/operations/createuserresponse.md)>**


## createUsersWithArrayInput

Creates list of users with given input array

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { CreateUsersWithArrayInputResponse } from "PetStore/dist/sdk/models/operations";

const sdk = new PetStore({
  security: {
    petstoreAuth: "",
  },
});

sdk.user.createUsersWithArrayInput([
  {
    email: "Frederick_Gutkowski25@hotmail.com",
    firstName: "Jayde",
    id: 204694,
    lastName: "Cormier",
    password: "YpyWm0TGTt3ROOC",
    phone: "808-874-2020 x885",
    userStatus: 607956,
    username: "Estel_Abbott",
  },
]).then((res: CreateUsersWithArrayInputResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.User[]](../../models//.md)                           | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateUsersWithArrayInputResponse](../../models/operations/createuserswitharrayinputresponse.md)>**


## createUsersWithListInput

Creates list of users with given input array

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { CreateUsersWithListInputResponse } from "PetStore/dist/sdk/models/operations";

const sdk = new PetStore({
  security: {
    petstoreAuth: "",
  },
});

sdk.user.createUsersWithListInput([
  {
    email: "Vella2@gmail.com",
    firstName: "Cleve",
    id: 536832,
    lastName: "Cassin",
    password: "Awi6IUy4yun5w8C",
    phone: "1-799-675-3600",
    userStatus: 29515,
    username: "Avery.Beier",
  },
]).then((res: CreateUsersWithListInputResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.User[]](../../models//.md)                           | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateUsersWithListInputResponse](../../models/operations/createuserswithlistinputresponse.md)>**


## deleteUser

This can only be done by the logged in user.

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { DeleteUserResponse } from "PetStore/dist/sdk/models/operations";

const sdk = new PetStore({
  security: {
    petstoreAuth: "",
  },
});

sdk.user.deleteUser({
  username: "Demetris_Torphy",
}).then((res: DeleteUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.DeleteUserRequest](../../models/operations/deleteuserrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.DeleteUserResponse](../../models/operations/deleteuserresponse.md)>**


## getUserByName

Get user by user name

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { GetUserByNameResponse } from "PetStore/dist/sdk/models/operations";

const sdk = new PetStore({
  security: {
    petstoreAuth: "",
  },
});

sdk.user.getUserByName({
  username: "Zachery_Schneider",
}).then((res: GetUserByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetUserByNameRequest](../../models/operations/getuserbynamerequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetUserByNameResponse](../../models/operations/getuserbynameresponse.md)>**


## loginUser

Logs user into the system

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { LoginUserResponse } from "PetStore/dist/sdk/models/operations";

const sdk = new PetStore({
  security: {
    petstoreAuth: "",
  },
});

sdk.user.loginUser({
  password: "ksPrq3dzBQkU6Le",
  username: "Edwin_Gleason",
}).then((res: LoginUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.LoginUserRequest](../../models/operations/loginuserrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.LoginUserResponse](../../models/operations/loginuserresponse.md)>**


## logoutUser

Logs out current logged in user session

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { LogoutUserResponse } from "PetStore/dist/sdk/models/operations";

const sdk = new PetStore({
  security: {
    petstoreAuth: "",
  },
});

sdk.user.logoutUser().then((res: LogoutUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.LogoutUserResponse](../../models/operations/logoutuserresponse.md)>**


## updateUser

This can only be done by the logged in user.

### Example Usage

```typescript
import { PetStore } from "PetStore";
import { UpdateUserResponse } from "PetStore/dist/sdk/models/operations";

const sdk = new PetStore({
  security: {
    petstoreAuth: "",
  },
});

sdk.user.updateUser({
  user: {
    email: "Haleigh32@gmail.com",
    firstName: "Hanna",
    id: 862649,
    lastName: "Douglas",
    password: "H49FCgfg9V8cnk2",
    phone: "215-385-9787",
    userStatus: 465034,
    username: "Eldon.Wolff",
  },
  username: "Kyleigh.Abbott",
}).then((res: UpdateUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.UpdateUserRequest](../../models/operations/updateuserrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.UpdateUserResponse](../../models/operations/updateuserresponse.md)>**

