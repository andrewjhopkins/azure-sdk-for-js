// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createTracingClient } from "@azure/core-tracing";
import { SDK_VERSION } from "./constants.js";

/** @internal */
export const tracingClient = createTracingClient({
  namespace: "Microsoft.ContainerRegistry",
  packageName: "@azure/container-registry",
  packageVersion: SDK_VERSION,
});
