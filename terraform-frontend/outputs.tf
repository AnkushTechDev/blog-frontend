output "frontend_eks_cluster_endpoint" {
  value = aws_eks_cluster.frontend_cluster.endpoint
}

output "frontend_eks_cluster_name" {
  value = aws_eks_cluster.frontend_cluster.name
}
