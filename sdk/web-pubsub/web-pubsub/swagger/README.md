# Azure Web PubSub Protocol Layer

> see https://aka.ms/autorest

## Configuration

```yaml
package-name: "@azure/web-pubsub"
title: GeneratedClient
description: Web PubSub Client
generate-metadata: false
license-header: MICROSOFT_MIT_NO_VERSION
output-folder: ../
source-code-folder-path: ./src/generated
input-file: https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/webpubsub/data-plane/WebPubSub/stable/2024-12-01/webpubsub.json
add-credentials: false
package-version: 1.2.0
v3: true
hide-clients: true
use-core-v2: true
module-kind: esm
use-extension:
  "@autorest/typescript": "6.0.34"
```

## Customizations for Track 2 Generator

See the [AutoRest samples](https://github.com/Azure/autorest/tree/master/Samples/3b-custom-transformations)
for more about how we're customizing things.

### Rename maxresults -> maxPageSize

```yaml
directive:
  - from: swagger-document
    where: $["paths"]["/api/hubs/{hub}/:generateToken"]["post"]["parameters"]
    transform: >
      if($) {
        for(let i = 0; i < $.length; i++) {
          if ($[i] &&  $[i]["name"] == "role") {
            $[i]["x-ms-client-name"] = "roles";
          }
          if ($[i] &&  $[i]["name"] == "group") {
            $[i]["x-ms-client-name"] = "groups";
          }
          if ($[i] &&  $[i]["name"] == "minutesToExpire") {
            $[i]["x-ms-client-name"] = "expirationTimeInMinutes";
          }
        }
      }
  - from: swagger-document
    where: $["paths"]["/api/hubs/{hub}/:send"]["post"]["parameters"]
    transform: >
      if($) {
        for(let i = 0; i < $.length; i++) {
          if ($[i] &&  $[i]["name"] == "excluded") {
            $[i]["x-ms-client-name"] = "excludedConnections";
          }
        }
      }
  - from: swagger-document
    where: $["paths"]["/api/hubs/{hub}/groups/{group}/:send"]["post"]["parameters"]
    transform: >
      if($) {
        for(let i = 0; i < $.length; i++) {
          if ($[i] &&  $[i]["name"] == "excluded") {
            $[i]["x-ms-client-name"] = "excludedConnections";
          }
        }
      }
  - from: swagger-document
    where: $["paths"]["/api/hubs/{hub}/groups/{group}/:send"]["post"]["parameters"]
    transform: >
      if($) {
        for(let i = 0; i < $.length; i++) {
          if ($[i] &&  $[i]["name"] == "excluded") {
            $[i]["x-ms-client-name"] = "excludedConnections";
          }
        }
      }
```

### Rename "maxpagesize" to camel case
```yaml
directive:
  from: swagger-document
  where: '$.paths["/api/hubs/{hub}/groups/{group}/connections"].get.parameters[2]'
  transform: >
    $["x-ms-client-name"] = "maxPageSize";
```

### Rename "GroupMember" to "WebPubSubGroupMember"
```yaml
directive:
  from: swagger-document
  where: "$.definitions.GroupMember"
  transform: >
    $["x-ms-client-name"] = "WebPubSubGroupMember";
```
