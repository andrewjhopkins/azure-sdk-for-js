/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { StorageTasks } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { StorageActionsManagementClient } from "../storageActionsManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  StorageTask,
  StorageTasksListBySubscriptionNextOptionalParams,
  StorageTasksListBySubscriptionOptionalParams,
  StorageTasksListBySubscriptionResponse,
  StorageTasksListByResourceGroupNextOptionalParams,
  StorageTasksListByResourceGroupOptionalParams,
  StorageTasksListByResourceGroupResponse,
  StorageTasksCreateOptionalParams,
  StorageTasksCreateResponse,
  StorageTasksDeleteOptionalParams,
  StorageTasksDeleteResponse,
  StorageTasksGetOptionalParams,
  StorageTasksGetResponse,
  StorageTaskUpdateParameters,
  StorageTasksUpdateOptionalParams,
  StorageTasksUpdateResponse,
  StorageTaskPreviewAction,
  StorageTasksPreviewActionsOptionalParams,
  StorageTasksPreviewActionsResponse,
  StorageTasksListBySubscriptionNextResponse,
  StorageTasksListByResourceGroupNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing StorageTasks operations. */
export class StorageTasksImpl implements StorageTasks {
  private readonly client: StorageActionsManagementClient;

  /**
   * Initialize a new instance of the class StorageTasks class.
   * @param client Reference to the service client
   */
  constructor(client: StorageActionsManagementClient) {
    this.client = client;
  }

  /**
   * Lists all the storage tasks available under the subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: StorageTasksListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<StorageTask> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listBySubscriptionPagingPage(options, settings);
      },
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: StorageTasksListBySubscriptionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<StorageTask[]> {
    let result: StorageTasksListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: StorageTasksListBySubscriptionOptionalParams,
  ): AsyncIterableIterator<StorageTask> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists all the storage tasks available under the given resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: StorageTasksListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<StorageTask> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: StorageTasksListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<StorageTask[]> {
    let result: StorageTasksListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: StorageTasksListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<StorageTask> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Asynchronously creates a new storage task resource with the specified parameters. If a storage task
   * is already created and a subsequent create request is issued with different properties, the storage
   * task properties will be updated. If a storage task is already created and a subsequent create or
   * update request is issued with the exact same set of properties, the request will succeed.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageTaskName The name of the storage task within the specified resource group. Storage
   *                        task names must be between 3 and 18 characters in length and use numbers and lower-case letters
   *                        only.
   * @param parameters The parameters to create a Storage Task.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    storageTaskName: string,
    parameters: StorageTask,
    options?: StorageTasksCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<StorageTasksCreateResponse>,
      StorageTasksCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<StorageTasksCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, storageTaskName, parameters, options },
      spec: createOperationSpec,
    });
    const poller = await createHttpPoller<
      StorageTasksCreateResponse,
      OperationState<StorageTasksCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Asynchronously creates a new storage task resource with the specified parameters. If a storage task
   * is already created and a subsequent create request is issued with different properties, the storage
   * task properties will be updated. If a storage task is already created and a subsequent create or
   * update request is issued with the exact same set of properties, the request will succeed.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageTaskName The name of the storage task within the specified resource group. Storage
   *                        task names must be between 3 and 18 characters in length and use numbers and lower-case letters
   *                        only.
   * @param parameters The parameters to create a Storage Task.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    storageTaskName: string,
    parameters: StorageTask,
    options?: StorageTasksCreateOptionalParams,
  ): Promise<StorageTasksCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      storageTaskName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete the storage task resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageTaskName The name of the storage task within the specified resource group. Storage
   *                        task names must be between 3 and 18 characters in length and use numbers and lower-case letters
   *                        only.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    storageTaskName: string,
    options?: StorageTasksDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<StorageTasksDeleteResponse>,
      StorageTasksDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<StorageTasksDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, storageTaskName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<
      StorageTasksDeleteResponse,
      OperationState<StorageTasksDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete the storage task resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageTaskName The name of the storage task within the specified resource group. Storage
   *                        task names must be between 3 and 18 characters in length and use numbers and lower-case letters
   *                        only.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    storageTaskName: string,
    options?: StorageTasksDeleteOptionalParams,
  ): Promise<StorageTasksDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      storageTaskName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Get the storage task properties
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageTaskName The name of the storage task within the specified resource group. Storage
   *                        task names must be between 3 and 18 characters in length and use numbers and lower-case letters
   *                        only.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    storageTaskName: string,
    options?: StorageTasksGetOptionalParams,
  ): Promise<StorageTasksGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, storageTaskName, options },
      getOperationSpec,
    );
  }

  /**
   * Update storage task properties
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageTaskName The name of the storage task within the specified resource group. Storage
   *                        task names must be between 3 and 18 characters in length and use numbers and lower-case letters
   *                        only.
   * @param parameters The parameters to provide to update the storage task resource.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    storageTaskName: string,
    parameters: StorageTaskUpdateParameters,
    options?: StorageTasksUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<StorageTasksUpdateResponse>,
      StorageTasksUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<StorageTasksUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, storageTaskName, parameters, options },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      StorageTasksUpdateResponse,
      OperationState<StorageTasksUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update storage task properties
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageTaskName The name of the storage task within the specified resource group. Storage
   *                        task names must be between 3 and 18 characters in length and use numbers and lower-case letters
   *                        only.
   * @param parameters The parameters to provide to update the storage task resource.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    storageTaskName: string,
    parameters: StorageTaskUpdateParameters,
    options?: StorageTasksUpdateOptionalParams,
  ): Promise<StorageTasksUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      storageTaskName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists all the storage tasks available under the subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: StorageTasksListBySubscriptionOptionalParams,
  ): Promise<StorageTasksListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec,
    );
  }

  /**
   * Lists all the storage tasks available under the given resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: StorageTasksListByResourceGroupOptionalParams,
  ): Promise<StorageTasksListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * Runs the input conditions against input object metadata properties and designates matched objects in
   * response.
   * @param location The location to perform preview of the actions.
   * @param parameters The parameters to preview action condition.
   * @param options The options parameters.
   */
  previewActions(
    location: string,
    parameters: StorageTaskPreviewAction,
    options?: StorageTasksPreviewActionsOptionalParams,
  ): Promise<StorageTasksPreviewActionsResponse> {
    return this.client.sendOperationRequest(
      { location, parameters, options },
      previewActionsOperationSpec,
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: StorageTasksListBySubscriptionNextOptionalParams,
  ): Promise<StorageTasksListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec,
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: StorageTasksListByResourceGroupNextOptionalParams,
  ): Promise<StorageTasksListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageActions/storageTasks/{storageTaskName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.StorageTask,
    },
    201: {
      bodyMapper: Mappers.StorageTask,
    },
    202: {
      bodyMapper: Mappers.StorageTask,
    },
    204: {
      bodyMapper: Mappers.StorageTask,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.storageTaskName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageActions/storageTasks/{storageTaskName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.StorageTasksDeleteHeaders,
    },
    201: {
      headersMapper: Mappers.StorageTasksDeleteHeaders,
    },
    202: {
      headersMapper: Mappers.StorageTasksDeleteHeaders,
    },
    204: {
      headersMapper: Mappers.StorageTasksDeleteHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.storageTaskName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageActions/storageTasks/{storageTaskName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageTask,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.storageTaskName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageActions/storageTasks/{storageTaskName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.StorageTask,
    },
    201: {
      bodyMapper: Mappers.StorageTask,
    },
    202: {
      bodyMapper: Mappers.StorageTask,
    },
    204: {
      bodyMapper: Mappers.StorageTask,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.storageTaskName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.StorageActions/storageTasks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageTasksListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageActions/storageTasks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageTasksListResult,
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
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const previewActionsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.StorageActions/locations/{location}/previewActions",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.StorageTaskPreviewAction,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageTasksListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageTasksListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
