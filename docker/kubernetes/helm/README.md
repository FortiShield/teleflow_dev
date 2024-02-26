<!--- app-name: Keycloak -->

# Teleflow Helm Chart

Teleflow provides a unified API that makes it simple to send notifications through multiple channels, including In-App, Push, Email, SMS, and Chat. With Teleflow, you can create custom workflows and define conditions for each channel, ensuring that your notifications are delivered in the most effective way possible.

[Overview of Teleflow](https://teleflow.khulnasoft.com/)

## TL;DR

```console
helm install my-teleflow ./ --set store.encryptionKey=$(openssl rand -base64 32)
```

## Introduction

This Helm chart is inspired by Bitnami charts and make use of Bitnami charts for its dependencies.

This chart bootstraps a [Teleflow](https://github.com/khulnasoft/teleflow) deployment on a [Kubernetes](https://kubernetes.io) cluster using the [Helm](https://helm.sh) package manager.

## Prerequisites

- Kubernetes 1.19+
- Helm 3.2.0+

## Installing the Chart

To install the chart with the release name `my-teleflow`:

```console
helm install my-teleflow ./ --set store.encryptionKey=$(openssl rand -base64 32)
```

These commands deploy a Keycloak application on the Kubernetes cluster in the default configuration.

> **Tip**: List all releases using `helm list`

## Uninstalling the Chart

To uninstall/delete the `my-release` deployment:

```console
helm delete my-teleflow
```

The command removes all the Kubernetes components associated with the chart and deletes the release.

## Parameters

### Global parameters

| Name                      | Description                                     | Value |
| ------------------------- | ----------------------------------------------- | ----- |
| `global.imageRegistry`    | Global Docker image registry                    | `""`  |
| `global.imagePullSecrets` | Global Docker registry secret names as an array | `[]`  |
| `global.storageClass`     | Global StorageClass for Persistent Volume(s)    | `""`  |

### Common parameters

| Name                     | Description                                                                             | Value           |
| ------------------------ | --------------------------------------------------------------------------------------- | --------------- |
| `kubeVersion`            | Override Kubernetes version                                                             | `""`            |
| `nameOverride`           | String to partially override common.names.name                                          | `""`            |
| `fullnameOverride`       | String to fully override common.names.fullname                                          | `""`            |
| `namespaceOverride`      | String to fully override common.names.namespace                                         | `""`            |
| `commonLabels`           | Labels to add to all deployed objects                                                   | `{}`            |
| `commonAnnotations`      | Annotations to add to all deployed objects                                              | `{}`            |
| `clusterDomain`          | Kubernetes cluster domain name                                                          | `cluster.local` |
| `extraDeploy`            | Array of extra objects to deploy with the release                                       | `[]`            |
| `diagnosticMode.enabled` | Enable diagnostic mode (all probes will be disabled and the command will be overridden) | `false`         |
| `diagnosticMode.command` | Command to override all containers in the deployment                                    | `["sleep"]`     |
| `diagnosticMode.args`    | Args to override all containers in the deployment                                       | `["infinity"]`  |

### Teleflow API Parameters

| Name                                                  | Description                                                                                                                                     | Value                    |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `api.image.registry`                                  | Teleflow image registry                                                                                                                             | `ghcr.io`                |
| `api.image.repository`                                | Teleflow image repository                                                                                                                           | `khulnasoft/teleflow/api`        |
| `api.image.tag`                                       | Teleflow image tag (immutable tags are recommended)                                                                                                 | `0.15.0`                 |
| `api.image.digest`                                    | Teleflow image digest in the way sha256:aa.... Please note this parameter, if set, will override the tag image tag (immutable tags are recommended) | `""`                     |
| `api.image.pullPolicy`                                | Teleflow image pull policy                                                                                                                          | `IfNotPresent`           |
| `api.image.pullSecrets`                               | Teleflow image pull secrets                                                                                                                         | `[]`                     |
| `api.image.debug`                                     | Enable Teleflow image debug mode                                                                                                                    | `false`                  |
| `api.replicaCount`                                    | Number of teleflow api replicas to deploy                                                                                                           | `1`                      |
| `api.containerPorts.http`                             | teleflow api HTTP container port                                                                                                                    | `3000`                   |
| `api.livenessProbe.enabled`                           | Enable livenessProbe on teleflow api containers                                                                                                     | `true`                   |
| `api.livenessProbe.initialDelaySeconds`               | Initial delay seconds for livenessProbe                                                                                                         | `30`                     |
| `api.livenessProbe.periodSeconds`                     | Period seconds for livenessProbe                                                                                                                | `10`                     |
| `api.livenessProbe.timeoutSeconds`                    | Timeout seconds for livenessProbe                                                                                                               | `5`                      |
| `api.livenessProbe.failureThreshold`                  | Failure threshold for livenessProbe                                                                                                             | `6`                      |
| `api.livenessProbe.successThreshold`                  | Success threshold for livenessProbe                                                                                                             | `1`                      |
| `api.readinessProbe.enabled`                          | Enable readinessProbe on teleflow api containers                                                                                                    | `true`                   |
| `api.readinessProbe.initialDelaySeconds`              | Initial delay seconds for readinessProbe                                                                                                        | `30`                     |
| `api.readinessProbe.periodSeconds`                    | Period seconds for readinessProbe                                                                                                               | `10`                     |
| `api.readinessProbe.timeoutSeconds`                   | Timeout seconds for readinessProbe                                                                                                              | `5`                      |
| `api.readinessProbe.failureThreshold`                 | Failure threshold for readinessProbe                                                                                                            | `6`                      |
| `api.readinessProbe.successThreshold`                 | Success threshold for readinessProbe                                                                                                            | `1`                      |
| `api.startupProbe.enabled`                            | Enable startupProbe on teleflow api containers                                                                                                      | `false`                  |
| `api.startupProbe.initialDelaySeconds`                | Initial delay seconds for startupProbe                                                                                                          | `30`                     |
| `api.startupProbe.periodSeconds`                      | Period seconds for startupProbe                                                                                                                 | `10`                     |
| `api.startupProbe.timeoutSeconds`                     | Timeout seconds for startupProbe                                                                                                                | `5`                      |
| `api.startupProbe.failureThreshold`                   | Failure threshold for startupProbe                                                                                                              | `6`                      |
| `api.startupProbe.successThreshold`                   | Success threshold for startupProbe                                                                                                              | `1`                      |
| `api.customLivenessProbe`                             | Custom livenessProbe that overrides the default one                                                                                             | `{}`                     |
| `api.customReadinessProbe`                            | Custom readinessProbe that overrides the default one                                                                                            | `{}`                     |
| `api.customStartupProbe`                              | Custom startupProbe that overrides the default one                                                                                              | `{}`                     |
| `api.resources.limits`                                | The resources limits for the teleflow api containers                                                                                                | `{}`                     |
| `api.resources.requests`                              | The requested resources for the teleflow api containers                                                                                             | `{}`                     |
| `api.podSecurityContext.enabled`                      | Enabled teleflow api pods' Security Context                                                                                                         | `false`                  |
| `api.podSecurityContext.fsGroup`                      | Set teleflow api pod's Security Context fsGroup                                                                                                     | `1001`                   |
| `api.containerSecurityContext.enabled`                | Enabled teleflow api containers' Security Context                                                                                                   | `false`                  |
| `api.containerSecurityContext.runAsUser`              | Set teleflow api containers' Security Context runAsUser                                                                                             | `1001`                   |
| `api.containerSecurityContext.runAsNonRoot`           | Set teleflow api containers' Security Context runAsNonRoot                                                                                          | `true`                   |
| `api.containerSecurityContext.readOnlyRootFilesystem` | Set teleflow api containers' Security Context runAsNonRoot                                                                                          | `false`                  |
| `api.existingConfigmap`                               | The name of an existing ConfigMap with your custom configuration for teleflow api                                                                   | `nil`                    |
| `api.command`                                         | Override default container command (useful when using custom images)                                                                            | `[]`                     |
| `api.args`                                            | Override default container args (useful when using custom images)                                                                               | `[]`                     |
| `api.hostAliases`                                     | teleflow api pods host aliases                                                                                                                      | `[]`                     |
| `api.podLabels`                                       | Extra labels for teleflow api pods                                                                                                                  | `{}`                     |
| `api.podAnnotations`                                  | Annotations for teleflow api pods                                                                                                                   | `{}`                     |
| `api.podAffinityPreset`                               | Pod affinity preset. Ignored if `api.affinity` is set. Allowed values: `soft` or `hard`                                                         | `""`                     |
| `api.podAntiAffinityPreset`                           | Pod anti-affinity preset. Ignored if `api.affinity` is set. Allowed values: `soft` or `hard`                                                    | `soft`                   |
| `api.pdb.create`                                      | Enable/disable a Pod Disruption Budget creation                                                                                                 | `false`                  |
| `api.pdb.minAvailable`                                | Minimum number/percentage of pods that should remain scheduled                                                                                  | `1`                      |
| `api.pdb.maxUnavailable`                              | Maximum number/percentage of pods that may be made unavailable                                                                                  | `""`                     |
| `api.autoscaling.enabled`                             | Enable autoscaling for api                                                                                                                      | `false`                  |
| `api.autoscaling.minReplicas`                         | Minimum number of api replicas                                                                                                                  | `""`                     |
| `api.autoscaling.maxReplicas`                         | Maximum number of api replicas                                                                                                                  | `""`                     |
| `api.autoscaling.targetCPU`                           | Target CPU utilization percentage                                                                                                               | `""`                     |
| `api.autoscaling.targetMemory`                        | Target Memory utilization percentage                                                                                                            | `""`                     |
| `api.nodeAffinityPreset.type`                         | Node affinity preset type. Ignored if `api.affinity` is set. Allowed values: `soft` or `hard`                                                   | `""`                     |
| `api.nodeAffinityPreset.key`                          | Node label key to match. Ignored if `api.affinity` is set                                                                                       | `""`                     |
| `api.nodeAffinityPreset.values`                       | Node label values to match. Ignored if `api.affinity` is set                                                                                    | `[]`                     |
| `api.affinity`                                        | Affinity for teleflow api pods assignment                                                                                                           | `{}`                     |
| `api.nodeSelector`                                    | Node labels for teleflow api pods assignment                                                                                                        | `{}`                     |
| `api.tolerations`                                     | Tolerations for teleflow api pods assignment                                                                                                        | `[]`                     |
| `api.updateStrategy.type`                             | teleflow api statefulset strategy type                                                                                                              | `RollingUpdate`          |
| `api.podManagementPolicy`                             | Statefulset Pod management policy, it needs to be Parallel to be able to complete the cluster join                                              | `OrderedReady`           |
| `api.priorityClassName`                               | teleflow api pods' priorityClassName                                                                                                                | `""`                     |
| `api.topologySpreadConstraints`                       | Topology Spread Constraints for pod assignment spread across your cluster among failure-domains. Evaluated as a template                        | `[]`                     |
| `api.schedulerName`                                   | Name of the k8s scheduler (other than default) for teleflow api pods                                                                                | `""`                     |
| `api.terminationGracePeriodSeconds`                   | Seconds Redmine pod needs to terminate gracefully                                                                                               | `""`                     |
| `api.lifecycleHooks`                                  | for the teleflow api container(s) to automate configuration before or after startup                                                                 | `{}`                     |
| `api.extraEnvVars`                                    | Array with extra environment variables to add to teleflow api nodes                                                                                 | `[]`                     |
| `api.extraEnvVarsCM`                                  | Name of existing ConfigMap containing extra env vars for teleflow api nodes                                                                         | `""`                     |
| `api.extraEnvVarsSecret`                              | Name of existing Secret containing extra env vars for teleflow api nodes                                                                            | `""`                     |
| `api.extraVolumes`                                    | Optionally specify extra list of additional volumes for the teleflow api pod(s)                                                                     | `[]`                     |
| `api.extraVolumeMounts`                               | Optionally specify extra list of additional volumeMounts for the teleflow api container(s)                                                          | `[]`                     |
| `api.sidecars`                                        | Add additional sidecar containers to the teleflow api pod(s)                                                                                        | `[]`                     |
| `api.initContainers`                                  | Add additional init containers to the teleflow api pod(s)                                                                                           | `[]`                     |
| `api.service.annotations`                             | Additional custom annotations for api service                                                                                                   | `{}`                     |
| `api.service.extraPorts`                              | Extra port to expose on api service                                                                                                             | `[]`                     |
| `api.port`                                            | The port on which the API backend should listen on                                                                                              | `3000`                   |
| `api.env.NODE_ENV`                                    | The environment of the app.                                                                                                                     | `production`             |
| `api.env.API_ROOT_URL`                                | Define the required env for teleflow                                                                                                                | `http://teleflow-api:3000`   |
| `api.env.DISABLE_USER_REGISTRATION`                   | If users should not be able to create new accounts. Possible values are: true, false                                                            | `true`                   |
| `api.env.FRONT_BASE_URL`                              | The base url on which your frontend is accessible for the user. (e.g. web.teleflow.khulnasoft.com)                                                              | `http://teleflow-web:4200`   |
| `api.env.MONGO_MIN_POOL_SIZE`                         | The min pool size of the MongoDB connection                                                                                                     | `10`                     |
| `api.env.MONGO_MAX_POOL_SIZE`                         | The max pool size of the MongoDB connection                                                                                                     | `50`                     |
| `api.ingress.enabled`                                 | Enable ingress record generation for teleflow api                                                                                                   | `false`                  |
| `api.ingress.pathType`                                | Ingress path type                                                                                                                               | `ImplementationSpecific` |
| `api.ingress.apiVersion`                              | Force Ingress API version (automatically detected if not set)                                                                                   | `""`                     |
| `api.ingress.hostname`                                | Default host for the ingress record                                                                                                             | `teleflow-api.local`         |
| `api.ingress.ingressClassName`                        | IngressClass that will be be used to implement the Ingress (Kubernetes 1.18+)                                                                   | `""`                     |
| `api.ingress.path`                                    | Default path for the ingress record                                                                                                             | `/`                      |
| `api.ingress.annotations`                             | Additional annotations for the Ingress resource. To enable certificate autogeneration, place here your cert-manager annotations.                | `{}`                     |
| `api.ingress.tls`                                     | Enable TLS configuration for the host defined at `api.ingress.hostname` parameter                                                               | `false`                  |
| `api.ingress.selfSigned`                              | Create a TLS secret for this ingress record using self-signed certificates generated by Helm                                                    | `false`                  |
| `api.ingress.extraHosts`                              | An array with additional hostname(s) to be covered with the ingress record                                                                      | `[]`                     |
| `api.ingress.extraPaths`                              | An array with additional arbitrary paths that may need to be added to the ingress under the main host                                           | `[]`                     |
| `api.ingress.extraTls`                                | TLS configuration for additional hostname(s) to be covered with this ingress record                                                             | `[]`                     |
| `api.ingress.secrets`                                 | Custom TLS certificates as secrets                                                                                                              | `[]`                     |
| `api.ingress.extraRules`                              | Additional rules to be covered with this ingress record                                                                                         | `[]`                     |

### Teleflow Worker Parameters

| Name                                                     | Description                                                                                                                                     | Value                |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| `worker.image.registry`                                  | Teleflow image registry                                                                                                                             | `ghcr.io`            |
| `worker.image.repository`                                | Teleflow image repository                                                                                                                           | `khulnasoft/teleflow/worker` |
| `worker.image.tag`                                       | Teleflow image tag (immutable tags are recommended)                                                                                                 | `0.15.0`             |
| `worker.image.digest`                                    | Teleflow image digest in the way sha256:aa.... Please note this parameter, if set, will override the tag image tag (immutable tags are recommended) | `""`                 |
| `worker.image.pullPolicy`                                | Teleflow image pull policy                                                                                                                          | `IfNotPresent`       |
| `worker.image.pullSecrets`                               | Teleflow image pull secrets                                                                                                                         | `[]`                 |
| `worker.image.debug`                                     | Enable Teleflow image debug mode                                                                                                                    | `false`              |
| `worker.replicaCount`                                    | Number of teleflow worker replicas to deploy                                                                                                        | `1`                  |
| `worker.containerPorts.http`                             | teleflow worker HTTP container port                                                                                                                 | `80`                 |
| `worker.containerPorts.https`                            | teleflow worker HTTPS container port                                                                                                                | `443`                |
| `worker.livenessProbe.enabled`                           | Enable livenessProbe on teleflow worker containers                                                                                                  | `true`               |
| `worker.livenessProbe.initialDelaySeconds`               | Initial delay seconds for livenessProbe                                                                                                         | `30`                 |
| `worker.livenessProbe.periodSeconds`                     | Period seconds for livenessProbe                                                                                                                | `10`                 |
| `worker.livenessProbe.timeoutSeconds`                    | Timeout seconds for livenessProbe                                                                                                               | `5`                  |
| `worker.livenessProbe.failureThreshold`                  | Failure threshold for livenessProbe                                                                                                             | `6`                  |
| `worker.livenessProbe.successThreshold`                  | Success threshold for livenessProbe                                                                                                             | `1`                  |
| `worker.readinessProbe.enabled`                          | Enable readinessProbe on teleflow worker containers                                                                                                 | `true`               |
| `worker.readinessProbe.initialDelaySeconds`              | Initial delay seconds for readinessProbe                                                                                                        | `30`                 |
| `worker.readinessProbe.periodSeconds`                    | Period seconds for readinessProbe                                                                                                               | `10`                 |
| `worker.readinessProbe.timeoutSeconds`                   | Timeout seconds for readinessProbe                                                                                                              | `5`                  |
| `worker.readinessProbe.failureThreshold`                 | Failure threshold for readinessProbe                                                                                                            | `6`                  |
| `worker.readinessProbe.successThreshold`                 | Success threshold for readinessProbe                                                                                                            | `1`                  |
| `worker.startupProbe.enabled`                            | Enable startupProbe on teleflow worker containers                                                                                                   | `false`              |
| `worker.startupProbe.initialDelaySeconds`                | Initial delay seconds for startupProbe                                                                                                          | `30`                 |
| `worker.startupProbe.periodSeconds`                      | Period seconds for startupProbe                                                                                                                 | `10`                 |
| `worker.startupProbe.timeoutSeconds`                     | Timeout seconds for startupProbe                                                                                                                | `5`                  |
| `worker.startupProbe.failureThreshold`                   | Failure threshold for startupProbe                                                                                                              | `6`                  |
| `worker.startupProbe.successThreshold`                   | Success threshold for startupProbe                                                                                                              | `1`                  |
| `worker.customLivenessProbe`                             | Custom livenessProbe that overrides the default one                                                                                             | `{}`                 |
| `worker.customReadinessProbe`                            | Custom readinessProbe that overrides the default one                                                                                            | `{}`                 |
| `worker.customStartupProbe`                              | Custom startupProbe that overrides the default one                                                                                              | `{}`                 |
| `worker.resources.limits`                                | The resources limits for the teleflow worker containers                                                                                             | `{}`                 |
| `worker.resources.requests`                              | The requested resources for the teleflow worker containers                                                                                          | `{}`                 |
| `worker.podSecurityContext.enabled`                      | Enabled teleflow worker pods' Security Context                                                                                                      | `false`              |
| `worker.podSecurityContext.fsGroup`                      | Set teleflow worker pod's Security Context fsGroup                                                                                                  | `1001`               |
| `worker.containerSecurityContext.enabled`                | Enabled teleflow worker containers' Security Context                                                                                                | `false`              |
| `worker.containerSecurityContext.runAsUser`              | Set teleflow worker containers' Security Context runAsUser                                                                                          | `1001`               |
| `worker.containerSecurityContext.runAsNonRoot`           | Set teleflow worker containers' Security Context runAsNonRoot                                                                                       | `true`               |
| `worker.containerSecurityContext.readOnlyRootFilesystem` | Set teleflow worker containers' Security Context runAsNonRoot                                                                                       | `false`              |
| `worker.existingConfigmap`                               | The name of an existing ConfigMap with your custom configuration for teleflow worker                                                                | `nil`                |
| `worker.command`                                         | Override default container command (useful when using custom images)                                                                            | `[]`                 |
| `worker.args`                                            | Override default container args (useful when using custom images)                                                                               | `[]`                 |
| `worker.hostAliases`                                     | teleflow worker pods host aliases                                                                                                                   | `[]`                 |
| `worker.podLabels`                                       | Extra labels for teleflow worker pods                                                                                                               | `{}`                 |
| `worker.podAnnotations`                                  | Annotations for teleflow worker pods                                                                                                                | `{}`                 |
| `worker.podAffinityPreset`                               | Pod affinity preset. Ignored if `worker.affinity` is set. Allowed values: `soft` or `hard`                                                      | `""`                 |
| `worker.podAntiAffinityPreset`                           | Pod anti-affinity preset. Ignored if `worker.affinity` is set. Allowed values: `soft` or `hard`                                                 | `soft`               |
| `worker.pdb.create`                                      | Enable/disable a Pod Disruption Budget creation                                                                                                 | `false`              |
| `worker.pdb.minAvailable`                                | Minimum number/percentage of pods that should remain scheduled                                                                                  | `1`                  |
| `worker.pdb.maxUnavailable`                              | Maximum number/percentage of pods that may be made unavailable                                                                                  | `""`                 |
| `worker.autoscaling.enabled`                             | Enable autoscaling for worker                                                                                                                   | `false`              |
| `worker.autoscaling.minReplicas`                         | Minimum number of worker replicas                                                                                                               | `""`                 |
| `worker.autoscaling.maxReplicas`                         | Maximum number of worker replicas                                                                                                               | `""`                 |
| `worker.autoscaling.targetCPU`                           | Target CPU utilization percentage                                                                                                               | `""`                 |
| `worker.autoscaling.targetMemory`                        | Target Memory utilization percentage                                                                                                            | `""`                 |
| `worker.nodeAffinityPreset.type`                         | Node affinity preset type. Ignored if `worker.affinity` is set. Allowed values: `soft` or `hard`                                                | `""`                 |
| `worker.nodeAffinityPreset.key`                          | Node label key to match. Ignored if `worker.affinity` is set                                                                                    | `""`                 |
| `worker.nodeAffinityPreset.values`                       | Node label values to match. Ignored if `worker.affinity` is set                                                                                 | `[]`                 |
| `worker.affinity`                                        | Affinity for teleflow worker pods assignment                                                                                                        | `{}`                 |
| `worker.nodeSelector`                                    | Node labels for teleflow worker pods assignment                                                                                                     | `{}`                 |
| `worker.tolerations`                                     | Tolerations for teleflow worker pods assignment                                                                                                     | `[]`                 |
| `worker.updateStrategy.type`                             | teleflow worker statefulset strategy type                                                                                                           | `RollingUpdate`      |
| `worker.podManagementPolicy`                             | Statefulset Pod management policy, it needs to be Parallel to be able to complete the cluster join                                              | `OrderedReady`       |
| `worker.priorityClassName`                               | teleflow worker pods' priorityClassName                                                                                                             | `""`                 |
| `worker.topologySpreadConstraints`                       | Topology Spread Constraints for pod assignment spread across your cluster among failure-domains. Evaluated as a template                        | `[]`                 |
| `worker.schedulerName`                                   | Name of the k8s scheduler (other than default) for teleflow worker pods                                                                             | `""`                 |
| `worker.terminationGracePeriodSeconds`                   | Seconds Redmine pod needs to terminate gracefully                                                                                               | `""`                 |
| `worker.lifecycleHooks`                                  | for the teleflow worker container(s) to automate configuration before or after startup                                                              | `{}`                 |
| `worker.extraEnvVars`                                    | Array with extra environment variables to add to teleflow worker nodes                                                                              | `[]`                 |
| `worker.extraEnvVarsCM`                                  | Name of existing ConfigMap containing extra env vars for teleflow worker nodes                                                                      | `""`                 |
| `worker.extraEnvVarsSecret`                              | Name of existing Secret containing extra env vars for teleflow worker nodes                                                                         | `""`                 |
| `worker.extraVolumes`                                    | Optionally specify extra list of additional volumes for the teleflow worker pod(s)                                                                  | `[]`                 |
| `worker.extraVolumeMounts`                               | Optionally specify extra list of additional volumeMounts for the teleflow worker container(s)                                                       | `[]`                 |
| `worker.sidecars`                                        | Add additional sidecar containers to the teleflow worker pod(s)                                                                                     | `[]`                 |
| `worker.initContainers`                                  | Add additional init containers to the teleflow worker pod(s)                                                                                        | `[]`                 |
| `worker.service.annotations`                             | Additional custom annotations for worker service                                                                                                | `{}`                 |
| `worker.service.extraPorts`                              | Extra port to expose on worker service                                                                                                          | `[]`                 |
| `worker.port`                                            | The port on which the Worker app should listen on                                                                                               | `3004`               |

### Teleflow Websocket Parameters

| Name                                                 | Description                                                                                                                                     | Value                    |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `ws.image.registry`                                  | Teleflow image registry                                                                                                                             | `ghcr.io`                |
| `ws.image.repository`                                | Teleflow image repository                                                                                                                           | `khulnasoft/teleflow/ws`         |
| `ws.image.tag`                                       | Teleflow image tag (immutable tags are recommended)                                                                                                 | `0.15.0`                 |
| `ws.image.digest`                                    | Teleflow image digest in the way sha256:aa.... Please note this parameter, if set, will override the tag image tag (immutable tags are recommended) | `""`                     |
| `ws.image.pullPolicy`                                | Teleflow image pull policy                                                                                                                          | `IfNotPresent`           |
| `ws.image.pullSecrets`                               | Teleflow image pull secrets                                                                                                                         | `[]`                     |
| `ws.image.debug`                                     | Enable Teleflow image debug mode                                                                                                                    | `false`                  |
| `ws.replicaCount`                                    | Number of teleflow ws replicas to deploy                                                                                                            | `1`                      |
| `ws.containerPorts.http`                             | teleflow ws HTTP container port                                                                                                                     | `80`                     |
| `ws.containerPorts.https`                            | teleflow ws HTTPS container port                                                                                                                    | `443`                    |
| `ws.livenessProbe.enabled`                           | Enable livenessProbe on teleflow ws containers                                                                                                      | `true`                   |
| `ws.livenessProbe.initialDelaySeconds`               | Initial delay seconds for livenessProbe                                                                                                         | `30`                     |
| `ws.livenessProbe.periodSeconds`                     | Period seconds for livenessProbe                                                                                                                | `10`                     |
| `ws.livenessProbe.timeoutSeconds`                    | Timeout seconds for livenessProbe                                                                                                               | `5`                      |
| `ws.livenessProbe.failureThreshold`                  | Failure threshold for livenessProbe                                                                                                             | `6`                      |
| `ws.livenessProbe.successThreshold`                  | Success threshold for livenessProbe                                                                                                             | `1`                      |
| `ws.readinessProbe.enabled`                          | Enable readinessProbe on teleflow ws containers                                                                                                     | `true`                   |
| `ws.readinessProbe.initialDelaySeconds`              | Initial delay seconds for readinessProbe                                                                                                        | `30`                     |
| `ws.readinessProbe.periodSeconds`                    | Period seconds for readinessProbe                                                                                                               | `10`                     |
| `ws.readinessProbe.timeoutSeconds`                   | Timeout seconds for readinessProbe                                                                                                              | `5`                      |
| `ws.readinessProbe.failureThreshold`                 | Failure threshold for readinessProbe                                                                                                            | `6`                      |
| `ws.readinessProbe.successThreshold`                 | Success threshold for readinessProbe                                                                                                            | `1`                      |
| `ws.startupProbe.enabled`                            | Enable startupProbe on teleflow ws containers                                                                                                       | `false`                  |
| `ws.startupProbe.initialDelaySeconds`                | Initial delay seconds for startupProbe                                                                                                          | `30`                     |
| `ws.startupProbe.periodSeconds`                      | Period seconds for startupProbe                                                                                                                 | `10`                     |
| `ws.startupProbe.timeoutSeconds`                     | Timeout seconds for startupProbe                                                                                                                | `5`                      |
| `ws.startupProbe.failureThreshold`                   | Failure threshold for startupProbe                                                                                                              | `6`                      |
| `ws.startupProbe.successThreshold`                   | Success threshold for startupProbe                                                                                                              | `1`                      |
| `ws.customLivenessProbe`                             | Custom livenessProbe that overrides the default one                                                                                             | `{}`                     |
| `ws.customReadinessProbe`                            | Custom readinessProbe that overrides the default one                                                                                            | `{}`                     |
| `ws.customStartupProbe`                              | Custom startupProbe that overrides the default one                                                                                              | `{}`                     |
| `ws.resources.limits`                                | The resources limits for the teleflow ws containers                                                                                                 | `{}`                     |
| `ws.resources.requests`                              | The requested resources for the teleflow ws containers                                                                                              | `{}`                     |
| `ws.podSecurityContext.enabled`                      | Enabled teleflow ws pods' Security Context                                                                                                          | `false`                  |
| `ws.podSecurityContext.fsGroup`                      | Set teleflow ws pod's Security Context fsGroup                                                                                                      | `1001`                   |
| `ws.containerSecurityContext.enabled`                | Enabled teleflow ws containers' Security Context                                                                                                    | `false`                  |
| `ws.containerSecurityContext.runAsUser`              | Set teleflow ws containers' Security Context runAsUser                                                                                              | `1001`                   |
| `ws.containerSecurityContext.runAsNonRoot`           | Set teleflow ws containers' Security Context runAsNonRoot                                                                                           | `true`                   |
| `ws.containerSecurityContext.readOnlyRootFilesystem` | Set teleflow ws containers' Security Context runAsNonRoot                                                                                           | `false`                  |
| `ws.existingConfigmap`                               | The name of an existing ConfigMap with your custom configuration for teleflow ws                                                                    | `nil`                    |
| `ws.command`                                         | Override default container command (useful when using custom images)                                                                            | `[]`                     |
| `ws.args`                                            | Override default container args (useful when using custom images)                                                                               | `[]`                     |
| `ws.hostAliases`                                     | teleflow ws pods host aliases                                                                                                                       | `[]`                     |
| `ws.podLabels`                                       | Extra labels for teleflow ws pods                                                                                                                   | `{}`                     |
| `ws.podAnnotations`                                  | Annotations for teleflow ws pods                                                                                                                    | `{}`                     |
| `ws.podAffinityPreset`                               | Pod affinity preset. Ignored if `ws.affinity` is set. Allowed values: `soft` or `hard`                                                          | `""`                     |
| `ws.podAntiAffinityPreset`                           | Pod anti-affinity preset. Ignored if `ws.affinity` is set. Allowed values: `soft` or `hard`                                                     | `soft`                   |
| `ws.pdb.create`                                      | Enable/disable a Pod Disruption Budget creation                                                                                                 | `false`                  |
| `ws.pdb.minAvailable`                                | Minimum number/percentage of pods that should remain scheduled                                                                                  | `1`                      |
| `ws.pdb.maxUnavailable`                              | Maximum number/percentage of pods that may be made unavailable                                                                                  | `""`                     |
| `ws.autoscaling.enabled`                             | Enable autoscaling for ws                                                                                                                       | `false`                  |
| `ws.autoscaling.minReplicas`                         | Minimum number of ws replicas                                                                                                                   | `""`                     |
| `ws.autoscaling.maxReplicas`                         | Maximum number of ws replicas                                                                                                                   | `""`                     |
| `ws.autoscaling.targetCPU`                           | Target CPU utilization percentage                                                                                                               | `""`                     |
| `ws.autoscaling.targetMemory`                        | Target Memory utilization percentage                                                                                                            | `""`                     |
| `ws.nodeAffinityPreset.type`                         | Node affinity preset type. Ignored if `ws.affinity` is set. Allowed values: `soft` or `hard`                                                    | `""`                     |
| `ws.nodeAffinityPreset.key`                          | Node label key to match. Ignored if `ws.affinity` is set                                                                                        | `""`                     |
| `ws.nodeAffinityPreset.values`                       | Node label values to match. Ignored if `ws.affinity` is set                                                                                     | `[]`                     |
| `ws.affinity`                                        | Affinity for teleflow ws pods assignment                                                                                                            | `{}`                     |
| `ws.nodeSelector`                                    | Node labels for teleflow ws pods assignment                                                                                                         | `{}`                     |
| `ws.tolerations`                                     | Tolerations for teleflow ws pods assignment                                                                                                         | `[]`                     |
| `ws.updateStrategy.type`                             | teleflow ws statefulset strategy type                                                                                                               | `RollingUpdate`          |
| `ws.podManagementPolicy`                             | Statefulset Pod management policy, it needs to be Parallel to be able to complete the cluster join                                              | `OrderedReady`           |
| `ws.priorityClassName`                               | teleflow ws pods' priorityClassName                                                                                                                 | `""`                     |
| `ws.topologySpreadConstraints`                       | Topology Spread Constraints for pod assignment spread across your cluster among failure-domains. Evaluated as a template                        | `[]`                     |
| `ws.schedulerName`                                   | Name of the k8s scheduler (other than default) for teleflow ws pods                                                                                 | `""`                     |
| `ws.terminationGracePeriodSeconds`                   | Seconds Redmine pod needs to terminate gracefully                                                                                               | `""`                     |
| `ws.lifecycleHooks`                                  | for the teleflow ws container(s) to automate configuration before or after startup                                                                  | `{}`                     |
| `ws.extraEnvVars`                                    | Array with extra environment variables to add to teleflow ws nodes                                                                                  | `[]`                     |
| `ws.extraEnvVarsCM`                                  | Name of existing ConfigMap containing extra env vars for teleflow ws nodes                                                                          | `""`                     |
| `ws.extraEnvVarsSecret`                              | Name of existing Secret containing extra env vars for teleflow ws nodes                                                                             | `""`                     |
| `ws.extraVolumes`                                    | Optionally specify extra list of additional volumes for the teleflow ws pod(s)                                                                      | `[]`                     |
| `ws.extraVolumeMounts`                               | Optionally specify extra list of additional volumeMounts for the teleflow ws container(s)                                                           | `[]`                     |
| `ws.sidecars`                                        | Add additional sidecar containers to the teleflow ws pod(s)                                                                                         | `[]`                     |
| `ws.initContainers`                                  | Add additional init containers to the teleflow ws pod(s)                                                                                            | `[]`                     |
| `ws.service.annotations`                             | Additional custom annotations for ws service                                                                                                    | `{}`                     |
| `ws.service.extraPorts`                              | Extra port to expose on ws service                                                                                                              | `[]`                     |
| `ws.ingress.enabled`                                 | Enable ingress record generation for teleflow api                                                                                                   | `false`                  |
| `ws.ingress.pathType`                                | Ingress path type                                                                                                                               | `ImplementationSpecific` |
| `ws.ingress.apiVersion`                              | Force Ingress API version (automatically detected if not set)                                                                                   | `""`                     |
| `ws.ingress.hostname`                                | Default host for the ingress record                                                                                                             | `teleflow-ws.local`          |
| `ws.ingress.ingressClassName`                        | IngressClass that will be be used to implement the Ingress (Kubernetes 1.18+)                                                                   | `""`                     |
| `ws.ingress.path`                                    | Default path for the ingress record                                                                                                             | `/`                      |
| `ws.ingress.annotations`                             | Additional annotations for the Ingress resource. To enable certificate autogeneration, place here your cert-manager annotations.                | `{}`                     |
| `ws.ingress.tls`                                     | Enable TLS configuration for the host defined at `ws.ingress.hostname` parameter                                                                | `false`                  |
| `ws.ingress.selfSigned`                              | Create a TLS secret for this ingress record using self-signed certificates generated by Helm                                                    | `false`                  |
| `ws.ingress.extraHosts`                              | An array with additional hostname(s) to be covered with the ingress record                                                                      | `[]`                     |
| `ws.ingress.extraPaths`                              | An array with additional arbitrary paths that may need to be added to the ingress under the main host                                           | `[]`                     |
| `ws.ingress.extraTls`                                | TLS configuration for additional hostname(s) to be covered with this ingress record                                                             | `[]`                     |
| `ws.ingress.secrets`                                 | Custom TLS certificates as secrets                                                                                                              | `[]`                     |
| `ws.ingress.extraRules`                              | Additional rules to be covered with this ingress record                                                                                         | `[]`                     |
| `ws.port`                                            | The port on which the Websocket app should listen on                                                                                            | `3002`                   |

### Teleflow Web Parameters

| Name                                                  | Description                                                                                                                                     | Value                    |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `web.image.registry`                                  | Teleflow image registry                                                                                                                             | `ghcr.io`                |
| `web.image.repository`                                | Teleflow image repository                                                                                                                           | `khulnasoft/teleflow/web`        |
| `web.image.tag`                                       | Teleflow image tag (immutable tags are recommended)                                                                                                 | `0.15.0`                 |
| `web.image.digest`                                    | Teleflow image digest in the way sha256:aa.... Please note this parameter, if set, will override the tag image tag (immutable tags are recommended) | `""`                     |
| `web.image.pullPolicy`                                | Teleflow image pull policy                                                                                                                          | `IfNotPresent`           |
| `web.image.pullSecrets`                               | Teleflow image pull secrets                                                                                                                         | `[]`                     |
| `web.image.debug`                                     | Enable Teleflow image debug mode                                                                                                                    | `false`                  |
| `web.replicaCount`                                    | Number of teleflow web replicas to deploy                                                                                                           | `1`                      |
| `web.livenessProbe.enabled`                           | Enable livenessProbe on teleflow web containers                                                                                                     | `true`                   |
| `web.livenessProbe.initialDelaySeconds`               | Initial delay seconds for livenessProbe                                                                                                         | `30`                     |
| `web.livenessProbe.periodSeconds`                     | Period seconds for livenessProbe                                                                                                                | `10`                     |
| `web.livenessProbe.timeoutSeconds`                    | Timeout seconds for livenessProbe                                                                                                               | `5`                      |
| `web.livenessProbe.failureThreshold`                  | Failure threshold for livenessProbe                                                                                                             | `6`                      |
| `web.livenessProbe.successThreshold`                  | Success threshold for livenessProbe                                                                                                             | `1`                      |
| `web.readinessProbe.enabled`                          | Enable readinessProbe on teleflow web containers                                                                                                    | `true`                   |
| `web.readinessProbe.initialDelaySeconds`              | Initial delay seconds for readinessProbe                                                                                                        | `30`                     |
| `web.readinessProbe.periodSeconds`                    | Period seconds for readinessProbe                                                                                                               | `10`                     |
| `web.readinessProbe.timeoutSeconds`                   | Timeout seconds for readinessProbe                                                                                                              | `5`                      |
| `web.readinessProbe.failureThreshold`                 | Failure threshold for readinessProbe                                                                                                            | `6`                      |
| `web.readinessProbe.successThreshold`                 | Success threshold for readinessProbe                                                                                                            | `1`                      |
| `web.startupProbe.enabled`                            | Enable startupProbe on teleflow web containers                                                                                                      | `false`                  |
| `web.startupProbe.initialDelaySeconds`                | Initial delay seconds for startupProbe                                                                                                          | `30`                     |
| `web.startupProbe.periodSeconds`                      | Period seconds for startupProbe                                                                                                                 | `10`                     |
| `web.startupProbe.timeoutSeconds`                     | Timeout seconds for startupProbe                                                                                                                | `5`                      |
| `web.startupProbe.failureThreshold`                   | Failure threshold for startupProbe                                                                                                              | `6`                      |
| `web.startupProbe.successThreshold`                   | Success threshold for startupProbe                                                                                                              | `1`                      |
| `web.customLivenessProbe`                             | Custom livenessProbe that overrides the default one                                                                                             | `{}`                     |
| `web.customReadinessProbe`                            | Custom readinessProbe that overrides the default one                                                                                            | `{}`                     |
| `web.customStartupProbe`                              | Custom startupProbe that overrides the default one                                                                                              | `{}`                     |
| `web.resources.limits`                                | The resources limits for the teleflow web containers                                                                                                | `{}`                     |
| `web.resources.requests`                              | The requested resources for the teleflow web containers                                                                                             | `{}`                     |
| `web.podSecurityContext.enabled`                      | Enabled teleflow web pods' Security Context                                                                                                         | `false`                  |
| `web.podSecurityContext.fsGroup`                      | Set teleflow web pod's Security Context fsGroup                                                                                                     | `1001`                   |
| `web.containerSecurityContext.enabled`                | Enabled teleflow web containers' Security Context                                                                                                   | `false`                  |
| `web.containerSecurityContext.runAsUser`              | Set teleflow web containers' Security Context runAsUser                                                                                             | `1001`                   |
| `web.containerSecurityContext.runAsNonRoot`           | Set teleflow web containers' Security Context runAsNonRoot                                                                                          | `true`                   |
| `web.containerSecurityContext.readOnlyRootFilesystem` | Set teleflow web containers' Security Context runAsNonRoot                                                                                          | `false`                  |
| `web.existingConfigmap`                               | The name of an existing ConfigMap with your custom configuration for teleflow web                                                                   | `nil`                    |
| `web.command`                                         | Override default container command (useful when using custom images)                                                                            | `[]`                     |
| `web.args`                                            | Override default container args (useful when using custom images)                                                                               | `[]`                     |
| `web.hostAliases`                                     | teleflow web pods host aliases                                                                                                                      | `[]`                     |
| `web.podLabels`                                       | Extra labels for teleflow web pods                                                                                                                  | `{}`                     |
| `web.podAnnotations`                                  | Annotations for teleflow web pods                                                                                                                   | `{}`                     |
| `web.podAffinityPreset`                               | Pod affinity preset. Ignored if `web.affinity` is set. Allowed values: `soft` or `hard`                                                         | `""`                     |
| `web.podAntiAffinityPreset`                           | Pod anti-affinity preset. Ignored if `web.affinity` is set. Allowed values: `soft` or `hard`                                                    | `soft`                   |
| `web.pdb.create`                                      | Enable/disable a Pod Disruption Budget creation                                                                                                 | `false`                  |
| `web.pdb.minAvailable`                                | Minimum number/percentage of pods that should remain scheduled                                                                                  | `1`                      |
| `web.pdb.maxUnavailable`                              | Maximum number/percentage of pods that may be made unavailable                                                                                  | `""`                     |
| `web.autoscaling.enabled`                             | Enable autoscaling for web                                                                                                                      | `false`                  |
| `web.autoscaling.minReplicas`                         | Minimum number of web replicas                                                                                                                  | `""`                     |
| `web.autoscaling.maxReplicas`                         | Maximum number of web replicas                                                                                                                  | `""`                     |
| `web.autoscaling.targetCPU`                           | Target CPU utilization percentage                                                                                                               | `""`                     |
| `web.autoscaling.targetMemory`                        | Target Memory utilization percentage                                                                                                            | `""`                     |
| `web.nodeAffinityPreset.type`                         | Node affinity preset type. Ignored if `web.affinity` is set. Allowed values: `soft` or `hard`                                                   | `""`                     |
| `web.nodeAffinityPreset.key`                          | Node label key to match. Ignored if `web.affinity` is set                                                                                       | `""`                     |
| `web.nodeAffinityPreset.values`                       | Node label values to match. Ignored if `web.affinity` is set                                                                                    | `[]`                     |
| `web.affinity`                                        | Affinity for teleflow web pods assignment                                                                                                           | `{}`                     |
| `web.nodeSelector`                                    | Node labels for teleflow web pods assignment                                                                                                        | `{}`                     |
| `web.tolerations`                                     | Tolerations for teleflow web pods assignment                                                                                                        | `[]`                     |
| `web.updateStrategy.type`                             | teleflow web statefulset strategy type                                                                                                              | `RollingUpdate`          |
| `web.podManagementPolicy`                             | Statefulset Pod management policy, it needs to be Parallel to be able to complete the cluster join                                              | `OrderedReady`           |
| `web.priorityClassName`                               | teleflow web pods' priorityClassName                                                                                                                | `""`                     |
| `web.topologySpreadConstraints`                       | Topology Spread Constraints for pod assignment spread across your cluster among failure-domains. Evaluated as a template                        | `[]`                     |
| `web.schedulerName`                                   | Name of the k8s scheduler (other than default) for teleflow web pods                                                                                | `""`                     |
| `web.terminationGracePeriodSeconds`                   | Seconds Redmine pod needs to terminate gracefully                                                                                               | `""`                     |
| `web.lifecycleHooks`                                  | for the teleflow web container(s) to automate configuration before or after startup                                                                 | `{}`                     |
| `web.extraEnvVars`                                    | Array with extra environment variables to add to teleflow web nodes                                                                                 | `[]`                     |
| `web.extraEnvVarsCM`                                  | Name of existing ConfigMap containing extra env vars for teleflow web nodes                                                                         | `""`                     |
| `web.extraEnvVarsSecret`                              | Name of existing Secret containing extra env vars for teleflow web nodes                                                                            | `""`                     |
| `web.extraVolumes`                                    | Optionally specify extra list of additional volumes for the teleflow web pod(s)                                                                     | `[]`                     |
| `web.extraVolumeMounts`                               | Optionally specify extra list of additional volumeMounts for the teleflow web container(s)                                                          | `[]`                     |
| `web.sidecars`                                        | Add additional sidecar containers to the teleflow web pod(s)                                                                                        | `[]`                     |
| `web.initContainers`                                  | Add additional init containers to the teleflow web pod(s)                                                                                           | `[]`                     |
| `web.service.annotations`                             | Additional custom annotations for web service                                                                                                   | `{}`                     |
| `web.service.extraPorts`                              | Extra port to expose on web service                                                                                                             | `[]`                     |
| `web.ingress.enabled`                                 | Enable ingress record generation for teleflow api                                                                                                   | `false`                  |
| `web.ingress.pathType`                                | Ingress path type                                                                                                                               | `ImplementationSpecific` |
| `web.ingress.apiVersion`                              | Force Ingress API version (automatically detected if not set)                                                                                   | `""`                     |
| `web.ingress.hostname`                                | Default host for the ingress record                                                                                                             | `teleflow-web.local`         |
| `web.ingress.ingressClassName`                        | IngressClass that will be be used to implement the Ingress (Kubernetes 1.18+)                                                                   | `""`                     |
| `web.ingress.path`                                    | Default path for the ingress record                                                                                                             | `/`                      |
| `web.ingress.annotations`                             | Additional annotations for the Ingress resource. To enable certificate autogeneration, place here your cert-manager annotations.                | `{}`                     |
| `web.ingress.tls`                                     | Enable TLS configuration for the host defined at `web.ingress.hostname` parameter                                                               | `false`                  |
| `web.ingress.selfSigned`                              | Create a TLS secret for this ingress record using self-signed certificates generated by Helm                                                    | `false`                  |
| `web.ingress.extraHosts`                              | An array with additional hostname(s) to be covered with the ingress record                                                                      | `[]`                     |
| `web.ingress.extraPaths`                              | An array with additional arbitrary paths that may need to be added to the ingress under the main host                                           | `[]`                     |
| `web.ingress.extraTls`                                | TLS configuration for additional hostname(s) to be covered with this ingress record                                                             | `[]`                     |
| `web.ingress.secrets`                                 | Custom TLS certificates as secrets                                                                                                              | `[]`                     |
| `web.ingress.extraRules`                              | Additional rules to be covered with this ingress record                                                                                         | `[]`                     |
| `web.port`                                            | The port on which the Web app should listen on                                                                                                  | `4200`                   |

### Persistence Parameters

| Name                                          | Description                                                                                             | Value               |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------- |
| `persistence.enabled`                         | Enable persistence using Persistent Volume Claims                                                       | `true`              |
| `persistence.mountPath`                       | Path to mount the volume at.                                                                            | `/teleflow/data`        |
| `persistence.subPath`                         | The subdirectory of the volume to mount to, useful in dev environments and one PV for multiple services | `""`                |
| `persistence.storageClass`                    | Storage class of backing PVC                                                                            | `""`                |
| `persistence.annotations`                     | Persistent Volume Claim annotations                                                                     | `{}`                |
| `persistence.accessModes`                     | Persistent Volume Access Modes                                                                          | `["ReadWriteOnce"]` |
| `persistence.size`                            | Size of data volume                                                                                     | `8Gi`               |
| `persistence.existingClaim`                   | The name of an existing PVC to use for persistence                                                      | `""`                |
| `persistence.selector`                        | Selector to match an existing Persistent Volume for WordPress data PVC                                  | `{}`                |
| `persistence.dataSource`                      | Custom PVC data source                                                                                  | `{}`                |
| `serviceAccount.create`                       | Specifies whether a ServiceAccount should be created                                                    | `true`              |
| `serviceAccount.name`                         | The name of the ServiceAccount to use.                                                                  | `""`                |
| `serviceAccount.annotations`                  | Additional Service Account annotations (evaluated as a template)                                        | `{}`                |
| `serviceAccount.automountServiceAccountToken` | Automount service account token for the server service account                                          | `true`              |
| `metrics.enabled`                             | Enable the export of Prometheus metrics                                                                 | `false`             |
| `metrics.serviceMonitor.enabled`              | if `true`, creates a Prometheus Operator ServiceMonitor (also requires `metrics.enabled` to be `true`)  | `false`             |
| `metrics.serviceMonitor.namespace`            | Namespace in which Prometheus is running                                                                | `""`                |
| `metrics.serviceMonitor.annotations`          | Additional custom annotations for the ServiceMonitor                                                    | `{}`                |
| `metrics.serviceMonitor.labels`               | Extra labels for the ServiceMonitor                                                                     | `{}`                |
| `metrics.serviceMonitor.jobLabel`             | The name of the label on the target service to use as the job name in Prometheus                        | `""`                |
| `metrics.serviceMonitor.honorLabels`          | honorLabels chooses the metric's labels on collisions with target labels                                | `false`             |
| `metrics.serviceMonitor.interval`             | Interval at which metrics should be scraped.                                                            | `""`                |
| `metrics.serviceMonitor.scrapeTimeout`        | Timeout after which the scrape is ended                                                                 | `""`                |
| `metrics.serviceMonitor.metricRelabelings`    | Specify additional relabeling of metrics                                                                | `[]`                |
| `metrics.serviceMonitor.relabelings`          | Specify general relabeling                                                                              | `[]`                |
| `metrics.serviceMonitor.selector`             | Prometheus instance selector labels                                                                     | `{}`                |

### Secrets definition

| Name                   | Description                                                                               | Value                              |
| ---------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------- |
| `jwt.secret`           | The secret keybase which is used to encrypt / verify the tokens issued for authentication | `your-secret`                      |
| `store.encryption-key` | The encryption key used to encrypt/decrypt provider credentials                           | `ekwUKf9yLjGPLOz939Y1GM0nJckVoVyF` |

### Mongodb configuration

| Name                     | Description                                          | Value               |
| ------------------------ | ---------------------------------------------------- | ------------------- |
| `mongodb.enabled`        | Switch to enable or disable the MongoDB helm chart   | `false`             |
| `mongodb.auth.enabled`   | Enable auth for mongodb database                     | `true`              |
| `mongodb.auth.usernames` | Array of Name for custom users to create             | `["teleflow_user"]`     |
| `mongodb.auth.passwords` | Array of Password for custom users to create         | `["teleflow_password"]` |
| `mongodb.auth.databases` | Array of Name for custom databases to create         | `["teleflow_db"]`       |
| `mongodb.architecture`   | mongodb architecture (`standalone` or `replication`) | `standalone`        |

### Redis configuration

| Name                  | Description                                        | Value           |
| --------------------- | -------------------------------------------------- | --------------- |
| `redis.enabled`       | Switch to enable or disable the redis helm chart   | `false`         |
| `redis.auth.enabled`  | Enable auth for redis database                     | `true`          |
| `redis.auth.password` | password for redis database                        | `teleflow_password` |
| `redis.architecture`  | redis architecture (`standalone` or `replication`) | `standalone`    |

### Localstack (S3) configuration

| Name                       | Description                                                 | Value   |
| -------------------------- | ----------------------------------------------------------- | ------- |
| `localstack.enabled`       | Switch to enable or disable the localstack helm chart       | `false` |
| `localstack.startServices` | List of comma separated services to start in the localstack | `s3`    |
| `localstack.image.tag`     | the version of localstack docker image to use               | `2.1.0` |

### External mongoDB database configuration

| Name                        | Description                                 | Value           |
| --------------------------- | ------------------------------------------- | --------------- |
| `externalDatabase.host`     | Host for external mongoDB database          | `mongodb.local` |
| `externalDatabase.port`     | Port for external mongoDB database          | `27017`         |
| `externalDatabase.username` | Username for external mongoDB database      | `teleflow`          |
| `externalDatabase.password` | Password for external mongoDB database      | `""`            |
| `externalDatabase.database` | Database name for external mongoDB database | `teleflow-db`       |

### External redis configuration

| Name                     | Description                          | Value   |
| ------------------------ | ------------------------------------ | ------- |
| `externalRedis.host`     | Host for external Redis database     | `redis` |
| `externalRedis.port`     | Port for external Redis database     | `6379`  |
| `externalRedis.password` | Password for external Redis database | `""`    |

### External s3 configuration

| Name                    | Description                                | Value                    |
| ----------------------- | ------------------------------------------ | ------------------------ |
| `externalS3.endpoint`   | Endpoint for external S3 storage access    | `http://localstack:4566` |
| `externalS3.bucketName` | Bucket name for external S3 storage access | `teleflow-local`             |
| `externalS3.region`     | Region name for external S3 storage access | `us-east-1`              |
| `externalS3.accessKey`  | access Key for external S3 storage access  | `test`                   |
| `externalS3.secretKey`  | secret Key for external S3 storage access  | `test`                   |
