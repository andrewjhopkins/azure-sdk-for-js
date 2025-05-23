/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ImportCollector,
  ImportCollectorsOperationsListByAssessmentProjectOptionalParams,
  ImportCollectorsOperationsGetOptionalParams,
  ImportCollectorsOperationsGetResponse,
  ImportCollectorsOperationsCreateOptionalParams,
  ImportCollectorsOperationsCreateResponse,
  ImportCollectorsOperationsDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ImportCollectorsOperations. */
export interface ImportCollectorsOperations {
  /**
   * List ImportCollector resources by AssessmentProject
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param options The options parameters.
   */
  listByAssessmentProject(
    resourceGroupName: string,
    projectName: string,
    options?: ImportCollectorsOperationsListByAssessmentProjectOptionalParams,
  ): PagedAsyncIterableIterator<ImportCollector>;
  /**
   * Get a ImportCollector
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param importCollectorName Import collector ARM name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    projectName: string,
    importCollectorName: string,
    options?: ImportCollectorsOperationsGetOptionalParams,
  ): Promise<ImportCollectorsOperationsGetResponse>;
  /**
   * Create a ImportCollector
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param importCollectorName Import collector ARM name
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    projectName: string,
    importCollectorName: string,
    resource: ImportCollector,
    options?: ImportCollectorsOperationsCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ImportCollectorsOperationsCreateResponse>,
      ImportCollectorsOperationsCreateResponse
    >
  >;
  /**
   * Create a ImportCollector
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param importCollectorName Import collector ARM name
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    projectName: string,
    importCollectorName: string,
    resource: ImportCollector,
    options?: ImportCollectorsOperationsCreateOptionalParams,
  ): Promise<ImportCollectorsOperationsCreateResponse>;
  /**
   * Delete a ImportCollector
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param importCollectorName Import collector ARM name
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    projectName: string,
    importCollectorName: string,
    options?: ImportCollectorsOperationsDeleteOptionalParams,
  ): Promise<void>;
}
