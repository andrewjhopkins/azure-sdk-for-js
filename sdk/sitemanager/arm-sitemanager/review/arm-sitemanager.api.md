## API Report File for "@azure/arm-sitemanager"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AbortSignalLike } from '@azure/abort-controller';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { OperationState } from '@azure/core-lro';
import { PathUncheckedResponse } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { PollerLike } from '@azure/core-lro';
import { TokenCredential } from '@azure/core-auth';

// @public
export type ContinuablePage<TElement, TPage = TElement[]> = TPage & {
    continuationToken?: string;
};

// @public
export type CreatedByType = string;

// @public (undocumented)
export class EdgeClient {
    constructor(credential: TokenCredential, subscriptionId: string, options?: EdgeClientOptionalParams);
    readonly pipeline: Pipeline;
    readonly sites: SitesOperations;
    readonly sitesByServiceGroup: SitesByServiceGroupOperations;
    readonly sitesBySubscription: SitesBySubscriptionOperations;
}

// @public
export interface EdgeClientOptionalParams extends ClientOptions {
    apiVersion?: string;
}

// @public
export interface ErrorAdditionalInfo {
    readonly info?: Record<string, any>;
    readonly type?: string;
}

// @public
export interface ErrorDetail {
    readonly additionalInfo?: ErrorAdditionalInfo[];
    readonly code?: string;
    readonly details?: ErrorDetail[];
    readonly message?: string;
    readonly target?: string;
}

// @public
export interface ErrorResponse {
    error?: ErrorDetail;
}

// @public
export enum KnownCreatedByType {
    Application = "Application",
    Key = "Key",
    ManagedIdentity = "ManagedIdentity",
    User = "User"
}

// @public
export enum KnownResourceProvisioningState {
    Canceled = "Canceled",
    Failed = "Failed",
    Succeeded = "Succeeded"
}

// @public
export enum KnownVersions {
    V20240201Preview = "2024-02-01-preview",
    V20250301Preview = "2025-03-01-preview"
}

// @public
export interface PagedAsyncIterableIterator<TElement, TPage = TElement[], TPageSettings extends PageSettings = PageSettings> {
    [Symbol.asyncIterator](): PagedAsyncIterableIterator<TElement, TPage, TPageSettings>;
    byPage: (settings?: TPageSettings) => AsyncIterableIterator<ContinuablePage<TElement, TPage>>;
    next(): Promise<IteratorResult<TElement>>;
}

// @public
export interface PageSettings {
    continuationToken?: string;
}

// @public
export interface ProxyResource extends Resource {
}

// @public
export interface Resource {
    readonly id?: string;
    readonly name?: string;
    readonly systemData?: SystemData;
    readonly type?: string;
}

// @public
export type ResourceProvisioningState = string;

// @public
export function restorePoller<TResponse extends PathUncheckedResponse, TResult>(client: EdgeClient, serializedState: string, sourceOperation: (...args: any[]) => PollerLike<OperationState<TResult>, TResult>, options?: RestorePollerOptions<TResult>): PollerLike<OperationState<TResult>, TResult>;

// @public (undocumented)
export interface RestorePollerOptions<TResult, TResponse extends PathUncheckedResponse = PathUncheckedResponse> extends OperationOptions {
    abortSignal?: AbortSignalLike;
    processResponseBody?: (result: TResponse) => Promise<TResult>;
    updateIntervalInMs?: number;
}

// @public
export interface Site extends ProxyResource {
    properties?: SiteProperties;
}

// @public
export interface SiteAddressProperties {
    city?: string;
    country?: string;
    postalCode?: string;
    stateOrProvince?: string;
    streetAddress1?: string;
    streetAddress2?: string;
}

// @public
export interface SiteProperties {
    description?: string;
    displayName?: string;
    labels?: Record<string, string>;
    readonly provisioningState?: ResourceProvisioningState;
    siteAddress?: SiteAddressProperties;
}

// @public
export interface SitesByServiceGroupCreateOrUpdateOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

// @public
export interface SitesByServiceGroupDeleteOptionalParams extends OperationOptions {
}

// @public
export interface SitesByServiceGroupGetOptionalParams extends OperationOptions {
}

// @public
export interface SitesByServiceGroupListByServiceGroupOptionalParams extends OperationOptions {
}

// @public
export interface SitesByServiceGroupOperations {
    createOrUpdate: (servicegroupName: string, siteName: string, resource: Site, options?: SitesByServiceGroupCreateOrUpdateOptionalParams) => PollerLike<OperationState<Site>, Site>;
    delete: (servicegroupName: string, siteName: string, options?: SitesByServiceGroupDeleteOptionalParams) => Promise<void>;
    get: (servicegroupName: string, siteName: string, options?: SitesByServiceGroupGetOptionalParams) => Promise<Site>;
    listByServiceGroup: (servicegroupName: string, options?: SitesByServiceGroupListByServiceGroupOptionalParams) => PagedAsyncIterableIterator<Site>;
    update: (servicegroupName: string, siteName: string, properties: SiteUpdate, options?: SitesByServiceGroupUpdateOptionalParams) => Promise<Site>;
}

// @public
export interface SitesByServiceGroupUpdateOptionalParams extends OperationOptions {
}

// @public
export interface SitesBySubscriptionCreateOrUpdateOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

// @public
export interface SitesBySubscriptionDeleteOptionalParams extends OperationOptions {
}

// @public
export interface SitesBySubscriptionGetOptionalParams extends OperationOptions {
}

// @public
export interface SitesBySubscriptionListOptionalParams extends OperationOptions {
}

// @public
export interface SitesBySubscriptionOperations {
    createOrUpdate: (siteName: string, resource: Site, options?: SitesBySubscriptionCreateOrUpdateOptionalParams) => PollerLike<OperationState<Site>, Site>;
    delete: (siteName: string, options?: SitesBySubscriptionDeleteOptionalParams) => Promise<void>;
    get: (siteName: string, options?: SitesBySubscriptionGetOptionalParams) => Promise<Site>;
    list: (options?: SitesBySubscriptionListOptionalParams) => PagedAsyncIterableIterator<Site>;
    update: (siteName: string, properties: SiteUpdate, options?: SitesBySubscriptionUpdateOptionalParams) => Promise<Site>;
}

// @public
export interface SitesBySubscriptionUpdateOptionalParams extends OperationOptions {
}

// @public
export interface SitesCreateOrUpdateOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

// @public
export interface SitesDeleteOptionalParams extends OperationOptions {
}

// @public
export interface SitesGetOptionalParams extends OperationOptions {
}

// @public
export interface SitesListByResourceGroupOptionalParams extends OperationOptions {
}

// @public
export interface SitesOperations {
    createOrUpdate: (resourceGroupName: string, siteName: string, resource: Site, options?: SitesCreateOrUpdateOptionalParams) => PollerLike<OperationState<Site>, Site>;
    delete: (resourceGroupName: string, siteName: string, options?: SitesDeleteOptionalParams) => Promise<void>;
    get: (resourceGroupName: string, siteName: string, options?: SitesGetOptionalParams) => Promise<Site>;
    listByResourceGroup: (resourceGroupName: string, options?: SitesListByResourceGroupOptionalParams) => PagedAsyncIterableIterator<Site>;
    update: (resourceGroupName: string, siteName: string, properties: SiteUpdate, options?: SitesUpdateOptionalParams) => Promise<Site>;
}

// @public
export interface SitesUpdateOptionalParams extends OperationOptions {
}

// @public
export interface SiteUpdate {
    properties?: SiteUpdateProperties;
}

// @public
export interface SiteUpdateProperties {
    description?: string;
    displayName?: string;
    labels?: Record<string, string>;
    siteAddress?: SiteAddressProperties;
}

// @public
export interface SystemData {
    createdAt?: Date;
    createdBy?: string;
    createdByType?: CreatedByType;
    lastModifiedAt?: Date;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByType;
}

// (No @packageDocumentation comment for this package)

```
