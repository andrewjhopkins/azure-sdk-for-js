// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { ContainerDefinition } from "./ContainerDefinition.js";
import type { PartitionKeyDefinition } from "../../documents/index.js";
import type { VerboseOmit } from "../../utils/types.js";

export interface ContainerRequest extends VerboseOmit<ContainerDefinition, "partitionKey"> {
  /* Throughput for this container. Cannot use with maxThroughput */
  throughput?: number;
  /* Max throughput for this container. Specify to use Autoscale*/
  maxThroughput?: number;
  /* Autoscale scaling defined by throughput increment percent */
  autoUpgradePolicy?: {
    throughputPolicy: {
      incrementPercent: number;
    };
  };
  partitionKey?: string | PartitionKeyDefinition;
}
