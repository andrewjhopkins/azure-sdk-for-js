/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Workspace } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AzureQuantumManagementClient } from "../azureQuantumManagementClient.js";
import {
  CheckNameAvailabilityParameters,
  WorkspaceCheckNameAvailabilityOptionalParams,
  WorkspaceCheckNameAvailabilityResponse,
  WorkspaceListKeysOptionalParams,
  WorkspaceListKeysResponse,
  APIKeys,
  WorkspaceRegenerateKeysOptionalParams,
} from "../models/index.js";

/** Class containing Workspace operations. */
export class WorkspaceImpl implements Workspace {
  private readonly client: AzureQuantumManagementClient;

  /**
   * Initialize a new instance of the class Workspace class.
   * @param client Reference to the service client
   */
  constructor(client: AzureQuantumManagementClient) {
    this.client = client;
  }

  /**
   * Check the availability of the resource name.
   * @param locationName Location.
   * @param checkNameAvailabilityParameters The name and type of the resource.
   * @param options The options parameters.
   */
  checkNameAvailability(
    locationName: string,
    checkNameAvailabilityParameters: CheckNameAvailabilityParameters,
    options?: WorkspaceCheckNameAvailabilityOptionalParams,
  ): Promise<WorkspaceCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { locationName, checkNameAvailabilityParameters, options },
      checkNameAvailabilityOperationSpec,
    );
  }

  /**
   * Get the keys to use with the Quantum APIs. A key is used to authenticate and authorize access to the
   * Quantum REST APIs. Only one key is needed at a time; two are given to provide seamless key
   * regeneration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the quantum workspace resource.
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceListKeysOptionalParams,
  ): Promise<WorkspaceListKeysResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listKeysOperationSpec,
    );
  }

  /**
   * Regenerate either the primary or secondary key for use with the Quantum APIs. The old key will stop
   * working immediately.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the quantum workspace resource.
   * @param keySpecification Which key to regenerate:  primary or secondary.
   * @param options The options parameters.
   */
  regenerateKeys(
    resourceGroupName: string,
    workspaceName: string,
    keySpecification: APIKeys,
    options?: WorkspaceRegenerateKeysOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, keySpecification, options },
      regenerateKeysOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Quantum/locations/{locationName}/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.checkNameAvailabilityParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locationName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listKeysOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Quantum/workspaces/{workspaceName}/listKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ListKeysResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.workspaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const regenerateKeysOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Quantum/workspaces/{workspaceName}/regenerateKey",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.keySpecification,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.workspaceName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
