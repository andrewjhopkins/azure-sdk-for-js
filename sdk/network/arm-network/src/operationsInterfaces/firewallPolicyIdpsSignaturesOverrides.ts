/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  SignaturesOverrides,
  FirewallPolicyIdpsSignaturesOverridesPatchOptionalParams,
  FirewallPolicyIdpsSignaturesOverridesPatchResponse,
  FirewallPolicyIdpsSignaturesOverridesPutOptionalParams,
  FirewallPolicyIdpsSignaturesOverridesPutResponse,
  FirewallPolicyIdpsSignaturesOverridesGetOptionalParams,
  FirewallPolicyIdpsSignaturesOverridesGetResponse,
  FirewallPolicyIdpsSignaturesOverridesListOptionalParams,
  FirewallPolicyIdpsSignaturesOverridesListResponse,
} from "../models/index.js";

/** Interface representing a FirewallPolicyIdpsSignaturesOverrides. */
export interface FirewallPolicyIdpsSignaturesOverrides {
  /**
   * Will update the status of policy's signature overrides for IDPS
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param parameters Will contain all properties of the object to put
   * @param options The options parameters.
   */
  patch(
    resourceGroupName: string,
    firewallPolicyName: string,
    parameters: SignaturesOverrides,
    options?: FirewallPolicyIdpsSignaturesOverridesPatchOptionalParams,
  ): Promise<FirewallPolicyIdpsSignaturesOverridesPatchResponse>;
  /**
   * Will override/create a new signature overrides for the policy's IDPS
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param parameters Will contain all properties of the object to put
   * @param options The options parameters.
   */
  put(
    resourceGroupName: string,
    firewallPolicyName: string,
    parameters: SignaturesOverrides,
    options?: FirewallPolicyIdpsSignaturesOverridesPutOptionalParams,
  ): Promise<FirewallPolicyIdpsSignaturesOverridesPutResponse>;
  /**
   * Returns all signatures overrides for a specific policy.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    firewallPolicyName: string,
    options?: FirewallPolicyIdpsSignaturesOverridesGetOptionalParams,
  ): Promise<FirewallPolicyIdpsSignaturesOverridesGetResponse>;
  /**
   * Returns all signatures overrides objects for a specific policy as a list containing a single value.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    firewallPolicyName: string,
    options?: FirewallPolicyIdpsSignaturesOverridesListOptionalParams,
  ): Promise<FirewallPolicyIdpsSignaturesOverridesListResponse>;
}
