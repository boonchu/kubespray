import { Provider } from "@pulumi/kubernetes";
import { Deployment } from "@pulumi/kubernetes/apps/v1";
import { Output, provider } from "@pulumi/pulumi";

interface Cluster {
    name: string,
    provider: Provider,
    staticAppIP?: Output<string>;
};

const clusters: Cluster[] = [
    { name: "local", provider: new Provider("local", {}) },
];

const appLabels = { app: "nginx" };
const deployment = new Deployment("nginx", {
    spec: {
        selector: { matchLabels: appLabels },
        replicas: 1,
        template: {
            metadata: { labels: appLabels },
            spec: { containers: [{ name: "nginx", image: "nginx" }] }
        }
    }
});
export const name = deployment.metadata.name;
