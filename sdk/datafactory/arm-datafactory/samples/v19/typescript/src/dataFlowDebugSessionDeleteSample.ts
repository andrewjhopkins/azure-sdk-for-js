/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  DeleteDataFlowDebugSessionRequest,
  DataFactoryManagementClient,
} from "@azure/arm-datafactory";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Deletes a data flow debug session.
 *
 * @summary Deletes a data flow debug session.
 * x-ms-original-file: specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/examples/DataFlowDebugSession_Delete.json
 */
async function dataFlowDebugSessionDelete(): Promise<void> {
  const subscriptionId =
    process.env["DATAFACTORY_SUBSCRIPTION_ID"] ||
    "12345678-1234-1234-1234-12345678abc";
  const resourceGroupName =
    process.env["DATAFACTORY_RESOURCE_GROUP"] || "exampleResourceGroup";
  const factoryName = "exampleFactoryName";
  const request: DeleteDataFlowDebugSessionRequest = {
    sessionId: "91fb57e0-8292-47be-89ff-c8f2d2bb2a7e",
  };
  const credential = new DefaultAzureCredential();
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  const result = await client.dataFlowDebugSession.delete(
    resourceGroupName,
    factoryName,
    request,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await dataFlowDebugSessionDelete();
}

main().catch(console.error);
