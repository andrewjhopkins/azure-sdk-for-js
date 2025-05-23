/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Portal } from "@azure/arm-portal";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Deletes the Dashboard.
 *
 * @summary Deletes the Dashboard.
 * x-ms-original-file: specification/portal/resource-manager/Microsoft.Portal/preview/2020-09-01-preview/examples/deleteDashboard.json
 */
async function deleteADashboard(): Promise<void> {
  const subscriptionId =
    process.env["PORTAL_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["PORTAL_RESOURCE_GROUP"] || "testRG";
  const dashboardName = "testDashboard";
  const credential = new DefaultAzureCredential();
  const client = new Portal(credential, subscriptionId);
  const result = await client.dashboards.delete(
    resourceGroupName,
    dashboardName
  );
  console.log(result);
}

async function main(): Promise<void> {
  deleteADashboard();
}

main().catch(console.error);
