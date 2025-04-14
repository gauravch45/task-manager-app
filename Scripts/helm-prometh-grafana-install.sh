#
#helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
#helm repo update
#
#kubectl create namespace monitoring
#
#helm install prometheus-stack prometheus-community/kube-prometheus-stack --namespace monitoring
#
#This will install:
#1. Prometheus
#2. Grafana
#3. Exporters
#4. Dashboards
#5. Alerts
#
#kubectl port-forward svc/prometheus-stack-grafana -n monitoring 3000:80
