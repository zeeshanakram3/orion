/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/anonymous-auth": {
    /** @description Authenticate as an anonymous user, either using an existing user identifier or creating a new one. */
    post: operations["anonymousAuth"];
  };
  "/login": {
    /** @description Login to user's account by providing a message signed by the associated blockchain account. */
    post: operations["login"];
  };
  "/artifacts": {
    /** @description Get wallet seed encryption artifacts. */
    get: operations["getArtifacts"];
  };
  "/session-artifacts": {
    /** @description Get wallet seed encryption artifacts for the current session. */
    get: operations["getSessionArtifacts"];
    /** @description Save wallet seed encryption artifacts for the current session on the server. */
    post: operations["postSessionArtifacts"];
  };
  "/account": {
    /** @description Create a new Gateway account. Requires anonymousAuth to be performed first. */
    post: operations["createAccount"];
  };
  "/request-email-confirmation-token": {
    /** @description Request a token to be sent to e-mail address (as the first step of signup process), which will allow confirming the ownership of the e-mail by the user. */
    post: operations["requestEmailConfirmationToken"];
  };
  "/change-account": {
    /** @description Change the blockchain (Joystream) account associated with the Gateway account. Delete the old account's encryption artifacts and optionally set new ones. */
    post: operations["changeAccount"];
  };
  "/logout": {
    /** @description Terminate the current session. */
    post: operations["logout"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    ActionExecutionPayload: {
      joystreamAccountId: string;
      gatewayName: string;
      timestamp: number;
      action: string;
    };
    ActionExecutionRequestData: {
      signature: string;
      payload: components["schemas"]["ActionExecutionPayload"];
    };
    AnonymousUserAuthRequestData: {
      userId?: string;
    };
    AnonymousUserAuthResponseData: components["schemas"]["GenericOkResponseData"] & {
      userId: string;
    };
    LoginRequestData: components["schemas"]["ActionExecutionRequestData"] & ({
      payload?: components["schemas"]["ActionExecutionPayload"] & {
        /** @enum {string} */
        action?: "login";
      };
    });
    LoginResponseData: {
      accountId: string;
    };
    CreateAccountRequestData: components["schemas"]["ActionExecutionRequestData"] & ({
      payload?: components["schemas"]["ActionExecutionPayload"] & {
        /** @enum {string} */
        action?: "createAccount";
        email: string;
        emailConfirmationToken?: string;
        encryptionArtifacts?: components["schemas"]["EncryptionArtifacts"];
      };
    });
    ChangeAccountRequestData: components["schemas"]["ActionExecutionRequestData"] & ({
      payload?: components["schemas"]["ActionExecutionPayload"] & {
        /** @enum {string} */
        action?: "changeAccount";
        gatewayAccountId: string;
        newArtifacts?: components["schemas"]["EncryptionArtifacts"];
      };
    });
    RequestTokenRequestData: {
      /** @description User's e-mail address. */
      email: string;
    };
    GenericErrorResponseData: {
      message?: string;
      errors?: string[];
    };
    GenericOkResponseData: {
      success: boolean;
    };
    EncryptionArtifacts: {
      id: string;
      encryptedSeed: string;
      cipherIv: string;
    };
    SessionEncryptionArtifacts: {
      cipherKey: string;
      cipherIv: string;
    };
  };
  responses: {
    /** @description Ok */
    AnonymousUserAuthOkResponse: {
      content: {
        "application/json": components["schemas"]["AnonymousUserAuthResponseData"];
      };
    };
    /** @description Invalid request data */
    GenericBadRequestResponse: {
      content: {
        "application/json": components["schemas"]["GenericErrorResponseData"];
      };
    };
    /** @description Internal server error */
    GenericInternalServerErrorResponse: {
      content: {
        "application/json": components["schemas"]["GenericErrorResponseData"];
      };
    };
    /** @description Anonymous user id not recognized */
    UnauthorizedAnonymousUserResponse: {
      content: {
        "application/json": components["schemas"]["GenericErrorResponseData"];
      };
    };
    /** @description Logged in */
    LoginOkResponse: {
      content: {
        "application/json": components["schemas"]["LoginResponseData"];
      };
    };
    /** @description Account not found by provided address or the address cannot be used to login. */
    LoginUnauthorizedResponse: {
      content: {
        "application/json": components["schemas"]["GenericErrorResponseData"];
      };
    };
    /** @description Cannot create user account with the provided credentials */
    CreateAccountBadRequestResponse: {
      content: {
        "application/json": components["schemas"]["GenericErrorResponseData"];
      };
    };
    /** @description Ok */
    GenericOkResponse: {
      content: {
        "application/json": components["schemas"]["GenericOkResponseData"];
      };
    };
    /** @description Access token (session id) is missing or invalid. */
    GenericUnauthorizedResponse: {
      content: {
        "application/json": components["schemas"]["GenericErrorResponseData"];
      };
    };
    /** @description Request is malformatted or provided e-mail address is not valid. */
    RequestTokenBadRequestResponse: {
      content: {
        "application/json": components["schemas"]["GenericErrorResponseData"];
      };
    };
    /** @description Too many requests for a new token sent within a given timeframe. */
    RequestTokenTooManyRequestsResponse: {
      content: {
        "application/json": components["schemas"]["GenericErrorResponseData"];
      };
    };
    /** @description Too many requests sent within a given timeframe. */
    GenericTooManyRequestsResponse: {
      content: {
        "application/json": components["schemas"]["GenericErrorResponseData"];
      };
    };
    /** @description Encryption artifacts found and provided in the response. */
    GetArtifactsResponse: {
      content: {
        "application/json": components["schemas"]["EncryptionArtifacts"];
      };
    };
    /** @description Encryption artifacts not found by the provided lookup key. */
    GetArtifactsNotFoundResponse: {
      content: {
        "application/json": components["schemas"]["GenericErrorResponseData"];
      };
    };
    /** @description No artifacts associated with the current session found. */
    GetSessionArtifactsNotFoundResponse: {
      content: {
        "application/json": components["schemas"]["GenericErrorResponseData"];
      };
    };
    /** @description Account with the provided e-mail address already exists. */
    CreateAccountConflictResponse: {
      content: {
        "application/json": components["schemas"]["GenericErrorResponseData"];
      };
    };
    /** @description Session encryption artifacts for the current session already saved. */
    PostSessionArtifactsConflictResponse: {
      content: {
        "application/json": components["schemas"]["GenericErrorResponseData"];
      };
    };
    /** @description Provided blockchain (Joystream) account is already assigned to another user account. */
    ChangeAccountConflictResponse: {
      content: {
        "application/json": components["schemas"]["GenericErrorResponseData"];
      };
    };
    /** @description On-chain membership not found by the provided memberId. */
    CreateAccountNotFoundResponse: {
      content: {
        "application/json": components["schemas"]["GenericErrorResponseData"];
      };
    };
  };
  parameters: never;
  requestBodies: {
    AnonymousUserAuthRequestBody?: {
      content: {
        "application/json": components["schemas"]["AnonymousUserAuthRequestData"];
      };
    };
    LoginRequestBody?: {
      content: {
        "application/json": components["schemas"]["LoginRequestData"];
      };
    };
    CreateAccountRequestBody?: {
      content: {
        "application/json": components["schemas"]["CreateAccountRequestData"];
      };
    };
    RequestTokenRequestBody?: {
      content: {
        "application/json": components["schemas"]["RequestTokenRequestData"];
      };
    };
    PostSessionArtifactsRequestBody?: {
      content: {
        "application/json": components["schemas"]["SessionEncryptionArtifacts"];
      };
    };
    ChangeAccountRequestBody?: {
      content: {
        "application/json": components["schemas"]["ChangeAccountRequestData"];
      };
    };
  };
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /** @description Authenticate as an anonymous user, either using an existing user identifier or creating a new one. */
  anonymousAuth: {
    requestBody: components["requestBodies"]["AnonymousUserAuthRequestBody"];
    responses: {
      200: components["responses"]["AnonymousUserAuthOkResponse"];
      400: components["responses"]["GenericBadRequestResponse"];
      401: components["responses"]["UnauthorizedAnonymousUserResponse"];
      429: components["responses"]["GenericTooManyRequestsResponse"];
      default: components["responses"]["GenericInternalServerErrorResponse"];
    };
  };
  /** @description Login to user's account by providing a message signed by the associated blockchain account. */
  login: {
    requestBody: components["requestBodies"]["LoginRequestBody"];
    responses: {
      200: components["responses"]["LoginOkResponse"];
      400: components["responses"]["GenericBadRequestResponse"];
      401: components["responses"]["LoginUnauthorizedResponse"];
      429: components["responses"]["GenericTooManyRequestsResponse"];
      default: components["responses"]["GenericInternalServerErrorResponse"];
    };
  };
  /** @description Get wallet seed encryption artifacts. */
  getArtifacts: {
    parameters: {
      query: {
        /** @description The lookup key derived from user's credentials. */
        id: string;
        /** @description The user's email address. */
        email: string;
      };
    };
    responses: {
      200: components["responses"]["GetArtifactsResponse"];
      400: components["responses"]["GenericBadRequestResponse"];
      404: components["responses"]["GetArtifactsNotFoundResponse"];
      429: components["responses"]["GenericTooManyRequestsResponse"];
      default: components["responses"]["GenericInternalServerErrorResponse"];
    };
  };
  /** @description Get wallet seed encryption artifacts for the current session. */
  getSessionArtifacts: {
    responses: {
      200: components["responses"]["GetArtifactsResponse"];
      401: components["responses"]["GenericUnauthorizedResponse"];
      404: components["responses"]["GetSessionArtifactsNotFoundResponse"];
      429: components["responses"]["GenericTooManyRequestsResponse"];
      default: components["responses"]["GenericInternalServerErrorResponse"];
    };
  };
  /** @description Save wallet seed encryption artifacts for the current session on the server. */
  postSessionArtifacts: {
    requestBody: components["requestBodies"]["PostSessionArtifactsRequestBody"];
    responses: {
      200: components["responses"]["GenericOkResponse"];
      400: components["responses"]["GenericBadRequestResponse"];
      401: components["responses"]["GenericUnauthorizedResponse"];
      409: components["responses"]["PostSessionArtifactsConflictResponse"];
      429: components["responses"]["GenericTooManyRequestsResponse"];
      default: components["responses"]["GenericInternalServerErrorResponse"];
    };
  };
  /** @description Create a new Gateway account. Requires anonymousAuth to be performed first. */
  createAccount: {
    requestBody: components["requestBodies"]["CreateAccountRequestBody"];
    responses: {
      200: components["responses"]["GenericOkResponse"];
      400: components["responses"]["CreateAccountBadRequestResponse"];
      401: components["responses"]["GenericUnauthorizedResponse"];
      404: components["responses"]["CreateAccountNotFoundResponse"];
      409: components["responses"]["CreateAccountConflictResponse"];
      429: components["responses"]["GenericTooManyRequestsResponse"];
      default: components["responses"]["GenericInternalServerErrorResponse"];
    };
  };
  /** @description Request a token to be sent to e-mail address (as the first step of signup process), which will allow confirming the ownership of the e-mail by the user. */
  requestEmailConfirmationToken: {
    requestBody: components["requestBodies"]["RequestTokenRequestBody"];
    responses: {
      200: components["responses"]["GenericOkResponse"];
      400: components["responses"]["RequestTokenBadRequestResponse"];
      429: components["responses"]["RequestTokenTooManyRequestsResponse"];
      default: components["responses"]["GenericInternalServerErrorResponse"];
    };
  };
  /** @description Change the blockchain (Joystream) account associated with the Gateway account. Delete the old account's encryption artifacts and optionally set new ones. */
  changeAccount: {
    requestBody: components["requestBodies"]["ChangeAccountRequestBody"];
    responses: {
      200: components["responses"]["GenericOkResponse"];
      400: components["responses"]["GenericBadRequestResponse"];
      401: components["responses"]["GenericUnauthorizedResponse"];
      409: components["responses"]["ChangeAccountConflictResponse"];
      429: components["responses"]["GenericTooManyRequestsResponse"];
      default: components["responses"]["GenericInternalServerErrorResponse"];
    };
  };
  /** @description Terminate the current session. */
  logout: {
    responses: {
      200: components["responses"]["GenericOkResponse"];
      401: components["responses"]["GenericUnauthorizedResponse"];
      429: components["responses"]["GenericTooManyRequestsResponse"];
      default: components["responses"]["GenericInternalServerErrorResponse"];
    };
  };
}
