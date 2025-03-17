variable "aws_region" {
  description = "AWS region where resources will be provisioned"
  default     = "us-east-1"
}

variable "ami_id" {
  description = "AMI ID for the EC2 instance"
  default     = "ami-04b4f1a9cf54c11d0"
}

variable "instance_type_master" {
  description = "Instance type for the EC2 instance"
  default     = "t2.small"
}

variable "instance_type_worker" {
  description = "Instance type for the EC2 instance"
  default     = "t2.micro"
}
