terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

# EKS Cluster for Microservices
module "eks" {
  source          = "terraform-aws-modules/eks/aws"
  cluster_name    = "nexus-production-cluster"
  cluster_version = "1.29"
  vpc_id          = module.vpc.vpc_id
  subnet_ids      = module.vpc.private_subnets

  eks_managed_node_groups = {
    standard = {
      instance_types = ["t3.large"]
      min_size     = 3
      max_size     = 10
      desired_size = 5
    }
  }
}

# RDS Aurora PostgreSQL for main database
module "aurora" {
  source  = "terraform-aws-modules/rds-aurora/aws"
  name    = "nexus-aurora-postgres"
  engine  = "aurora-postgresql"
  engine_version = "15.4"
  instance_class = "db.r6g.large"
  instances = {
    1 = {}
    2 = {} # Read replica
  }
  vpc_id  = module.vpc.vpc_id
  subnets = module.vpc.database_subnets
}

# ElastiCache Redis for pub/sub & caching
resource "aws_elasticache_cluster" "redis" {
  cluster_id           = "nexus-redis-cluster"
  engine               = "redis"
  node_type            = "cache.m5.large"
  num_cache_nodes      = 2
  parameter_group_name = "default.redis7"
  engine_version       = "7.1"
  port                 = 6379
}
