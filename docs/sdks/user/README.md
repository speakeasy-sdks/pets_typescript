# User

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
  email: "Manuela.OHara21@hotmail.com",
  firstName: "Florian",
  id: 128926,
  lastName: "Rolfson",
  password: "enim",
  phone: "(435) 246-9916 x2619",
  userStatus: 653108,
  username: "Kristina.Fritsch",
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
    email: "Deion33@yahoo.com",
    firstName: "Bernie",
    id: 674752,
    lastName: "O'Kon",
    password: "enim",
    phone: "1-819-468-0068",
    userStatus: 673660,
    username: "Austyn_Witting46",
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
    email: "Whitney.Bednar@yahoo.com",
    firstName: "Myrtis",
    id: 19987,
    lastName: "Batz",
    password: "reprehenderit",
    phone: "913-441-6384 x902",
    userStatus: 692472,
    username: "Kennedi.Mante50",
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
  username: "Judah92",
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
  username: "Kira.Boehm31",
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
  password: "consequatur",
  username: "Marc64",
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
    email: "Ron18@hotmail.com",
    firstName: "Grant",
    id: 586513,
    lastName: "Lueilwitz",
    password: "perferendis",
    phone: "1-830-365-2772",
    userStatus: 962189,
    username: "Horacio_Franey39",
  },
  username: "Laron_Tremblay",
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

