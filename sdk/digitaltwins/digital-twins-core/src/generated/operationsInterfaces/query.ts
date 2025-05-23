/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  QuerySpecification,
  QueryQueryTwinsOptionalParams,
  QueryQueryTwinsResponse,
} from "../models/index.js";

/** Interface representing a Query. */
export interface Query {
  /**
   * Executes a query that allows traversing relationships and filtering by property values.
   * Status codes:
   * * 200 OK
   * * 400 Bad Request
   *   * BadRequest - The continuation token is invalid.
   *   * SqlQueryError - The query contains some errors.
   *   * TimeoutError - The query execution timed out after 60 seconds. Try simplifying the query or
   * adding conditions to reduce the result size.
   *  * 429 Too Many Requests
   *   * QuotaReachedError - The maximum query rate limit has been reached.
   * @param querySpecification The query specification to execute.
   * @param options The options parameters.
   */
  queryTwins(
    querySpecification: QuerySpecification,
    options?: QueryQueryTwinsOptionalParams,
  ): Promise<QueryQueryTwinsResponse>;
}
