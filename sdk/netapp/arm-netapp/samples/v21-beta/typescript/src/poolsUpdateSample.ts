/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CapacityPoolPatch, NetAppManagementClient } from "@azure/arm-netapp";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Patch the specified capacity pool
 *
 * @summary Patch the specified capacity pool
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/preview/2024-07-01-preview/examples/Pools_Update.json
 */
async function poolsUpdate(): Promise<void> {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] ||
    "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = process.env["NETAPP_RESOURCE_GROUP"] || "myRG";
  const accountName = "account1";
  const poolName = "pool1";
  const body: CapacityPoolPatch = {};
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.pools.beginUpdateAndWait(
    resourceGroupName,
    accountName,
    poolName,
    body,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Patch the specified capacity pool
 *
 * @summary Patch the specified capacity pool
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/preview/2024-07-01-preview/examples/Pools_Update_CustomThroughput.json
 */
async function poolsUpdateCustomThroughput(): Promise<void> {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] ||
    "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = process.env["NETAPP_RESOURCE_GROUP"] || "myRG";
  const accountName = "account1";
  const poolName = "customPool1";
  const body: CapacityPoolPatch = {};
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.pools.beginUpdateAndWait(
    resourceGroupName,
    accountName,
    poolName,
    body,
  );
  console.log(result);
}

async function main(): Promise<void> {
  poolsUpdate();
  poolsUpdateCustomThroughput();
}

main().catch(console.error);
