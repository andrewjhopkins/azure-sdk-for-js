// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { ServiceTagInformationListParameters } from "@azure-rest/arm-network";
import createNetworkManagementClient, { paginate } from "@azure-rest/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a list of service tag information resources with pagination.
 *
 * @summary Gets a list of service tag information resources with pagination.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/ServiceTagInformationListResult.json
 */
async function getListOfServiceTags(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = createNetworkManagementClient(credential);
  const subscriptionId = "";
  const location = "westeurope";
  const options: ServiceTagInformationListParameters = {
    queryParameters: { "api-version": "2022-05-01" },
  };
  const initialResponse = await client
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/serviceTagDetails",
      subscriptionId,
      location,
    )
    .get(options);
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

getListOfServiceTags().catch(console.error);
/**
 * This sample demonstrates how to Gets a list of service tag information resources with pagination.
 *
 * @summary Gets a list of service tag information resources with pagination.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/ServiceTagInformationListResultWithNoAddressPrefixes.json
 */
async function getListOfServiceTagsWithNoAddressPrefixes(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = createNetworkManagementClient(credential);
  const subscriptionId = "";
  const location = "westeurope";
  const options: ServiceTagInformationListParameters = {
    queryParameters: { "api-version": "2022-05-01", noAddressPrefixes: true },
  };
  const initialResponse = await client
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/serviceTagDetails",
      subscriptionId,
      location,
    )
    .get(options);
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

getListOfServiceTagsWithNoAddressPrefixes().catch(console.error);
/**
 * This sample demonstrates how to Gets a list of service tag information resources with pagination.
 *
 * @summary Gets a list of service tag information resources with pagination.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/ServiceTagInformationListResultWithTagname.json
 */
async function getListOfServiceTagsWithTagName(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = createNetworkManagementClient(credential);
  const subscriptionId = "";
  const location = "westeurope";
  const options: ServiceTagInformationListParameters = {
    queryParameters: { "api-version": "2022-05-01", tagName: "ApiManagement" },
  };
  const initialResponse = await client
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/serviceTagDetails",
      subscriptionId,
      location,
    )
    .get(options);
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

getListOfServiceTagsWithTagName().catch(console.error);
