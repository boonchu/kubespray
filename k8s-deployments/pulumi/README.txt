kubectl config set-context \
    kubernetes-admin@cluster.local \
    --cluster cluster.local --user kubernetes-admin

pulumi config set kubernetes:context  \
    kubernetes-admin@cluster.local 