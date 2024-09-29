variable "region" {
  description = "AWS region to launch resources in"
  type        = string
  default     = "us-east-1"
}

variable "access_key" {
  description = "AWS Access Key"
  type        = string
}

variable "secret_key" {
  description = "AWS Secret Key"
  type        = string
  sensitive   = true
}

variable "key_name" {
  description = "Name of the key pair"
  type        = string
}

variable "ami" {
  description = "AMI ID for EC2 instance"
  type        = string
  default     = "ami-0e86e20dae9224db8"  # Example AMI ID
}

variable "instance_type" {
  description = "Type of EC2 instance"
  type        = string
  default     = "t2.micro"
}

variable "volume_size" {
  description = "Size of the root volume for the EC2 instance"
  type        = number
  default     = 30
}
