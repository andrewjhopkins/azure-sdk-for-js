/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { InvoicesDownloadByBillingSubscriptionOptionalParams } from "@azure/arm-billing";
import { BillingManagementClient } from "@azure/arm-billing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a URL to download an invoice by billing subscription. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * @summary Gets a URL to download an invoice by billing subscription. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/invoicesDownloadByBillingSubscription.json
 */
async function invoicesDownloadByBillingSubscription(): Promise<void> {
  const subscriptionId =
    process.env["BILLING_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const invoiceName = "E123456789";
  const documentName = "12345678";
  const options: InvoicesDownloadByBillingSubscriptionOptionalParams = {
    documentName,
  };
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential, subscriptionId);
  const result = await client.invoices.beginDownloadByBillingSubscriptionAndWait(
    invoiceName,
    options,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await invoicesDownloadByBillingSubscription();
}

main().catch(console.error);
