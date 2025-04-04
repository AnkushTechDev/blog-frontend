provider "aws" {
  region = "us-east-1"
}

# Create an ECR repository for the frontend
resource "aws_ecr_repository" "frontend_repo" {
  name = "frontend-repo"
}

# Create an EKS Cluster for the frontend
resource "aws_eks_cluster" "frontend_cluster" {
  name     = "frontend-cluster"
  role_arn = aws_iam_role.eks_cluster_role.arn

  vpc_config {
    subnet_ids = aws_subnet.frontend_subnet.*.id
  }
}

# IAM Role for EKS Cluster
resource "aws_iam_role" "eks_cluster_role" {
  name = "frontend-eks-cluster-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = "sts:AssumeRole",
        Effect = "Allow",
        Principal = {
          Service = "eks.amazonaws.com"
        }
      }
    ]
  })
}

# Create Subnets
resource "aws_subnet" "frontend_subnet" {
  count = 2
  vpc_id     = aws_vpc.frontend_vpc.id
  cidr_block = "10.1.${count.index + 1}.0/24"
  availability_zone = element(data.aws_availability_zones.available.names, count.index)
}

# VPC for Frontend
resource "aws_vpc" "frontend_vpc" {
  cidr_block = "10.1.0.0/16"
}

# Output the ECR URL
output "frontend_ecr_url" {
  value = aws_ecr_repository.frontend_repo.repository_url
}
