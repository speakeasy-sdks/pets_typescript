# user

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

const sdk = new PetStore();

sdk.user.createUser({
  email: "Eugene_Brown31@gmail.com",
  firstName: "Britney",
  id: 778346,
  lastName: "Dietrich",
  password: "tenetur",
  phone: "(780) 268-6099 x845",
  userStatus: 976762,
  username: "Ana_Moen",
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

const sdk = new PetStore();

sdk.user.createUsersWithArrayInput([
  {
    email: "Iliana.Grady35@gmail.com",
    firstName: "Elena",
    id: 480894,
    lastName: "Carter",
    password: "harum",
    phone: "(949) 226-5582 x559",
    userStatus: 93940,
    username: "Thelma92",
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

const sdk = new PetStore();

sdk.user.createUsersWithListInput([
  {
    email: "Adele.Orn64@gmail.com",
    firstName: "Michelle",
    id: 841386,
    lastName: "Green",
    password: "modi",
    phone: "1-555-218-3016",
    userStatus: 569618,
    username: "Dominique.Prosacco96",
  },
  {
    email: "Delores.Roob@yahoo.com",
    firstName: "Laron",
    id: 896039,
    lastName: "Marquardt",
    password: "officia",
    phone: "996.548.9612",
    userStatus: 767024,
    username: "Raquel_Jenkins",
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

const sdk = new PetStore();

sdk.user.deleteUser({
  username: "Shaniya.Friesen",
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

const sdk = new PetStore();

sdk.user.getUserByName({
  username: "Shannon_Wintheiser72",
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

const sdk = new PetStore();

sdk.user.loginUser({
  password: "id",
  username: "Jewell.Lesch64",
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

const sdk = new PetStore();

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

const sdk = new PetStore();

sdk.user.updateUser({
  user: {
    email: "Henry.Mosciski@yahoo.com",
    firstName: "Aileen",
    id: 470132,
    lastName: "Gutkowski",
    password: "distinctio",
    phone: "1-423-674-8112 x0535",
    userStatus: 551816,
    username: "Kiley_Bartoletti",
  },
  username: "Mack.Hammes",
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

