data "aws_key_pair" "deployer" {
	key_name = "kepkp"
}

resource "aws_default_vpc" "default" {

}

resource "aws_security_group" "allow_ssh_connect_master" {
	name = "allow_SSH"
	description = "Allow users to connect"
	vpc_id      = aws_default_vpc.default.id
	ingress {
		description = "port 22 allow"
		from_port   = 22
		to_port     = 22
		protocol    = "tcp"
		cidr_blocks = ["0.0.0.0/0"]
	}
	
	egress {
		description = " allow all outgoing traffic "
    		from_port   = 0
    		to_port     = 0
    		protocol    = "-1"
    		cidr_blocks = ["0.0.0.0/0"]
  	}

	ingress {
		description = " port 443 allow"
		from_port   = 443
		to_port     = 443
		protocol    = "tcp"
		cidr_blocks = ["0.0.0.0/0"]
	}

	ingress {
   		description = "port 80 allow"
    		from_port   = 80
   		to_port     = 80
    		protocol    = "tcp"
    		cidr_blocks = ["0.0.0.0/0"]
  	}

	ingress {
    		description = "port 8080 allow"
    		from_port   = 8080
    		to_port     = 8080
    		protocol    = "tcp"
    		cidr_blocks = ["0.0.0.0/0"]
  	}

	tags = {
		Name = "mysecurity_master"
	}
}



resource "aws_security_group" "allow_ssh_connect_worker" {
        name = "allow_SSH_worker"
        description = "Allow users to connect"
        vpc_id      = aws_default_vpc.default.id
        ingress {
                description = "port 22 allow"
                from_port   = 22
                to_port     = 22
                protocol    = "tcp"
                cidr_blocks = ["0.0.0.0/0"]
        }

        egress {
                description = " allow all outgoing traffic "
                from_port   = 0
                to_port     = 0
                protocol    = "-1"
                cidr_blocks = ["0.0.0.0/0"]
        }

        ingress {
                description = " port 443 allow"
                from_port   = 443
                to_port     = 443
                protocol    = "tcp"
                cidr_blocks = ["0.0.0.0/0"]
        }

        ingress {
                description = "port 80 allow"
                from_port   = 80
                to_port     = 80
                protocol    = "tcp"
                cidr_blocks = ["0.0.0.0/0"]
        }

        ingress {
                description = "port 3000 allow"
                from_port   = 3000
                to_port     = 3000
                protocol    = "tcp"
                cidr_blocks = ["0.0.0.0/0"]
        }

	ingress {
    		description = "port 5000 allow"
    		from_port   = 5000
    		to_port     = 5000
    		protocol    = "tcp"
    		cidr_blocks = ["0.0.0.0/0"]
  	}

        tags = {
                Name = "mysecurity_worker"
 
	}

}
resource "aws_instance" "test-master-instance"{
	ami			= var.ami_id
	instance_type   	= var.instance_type_master
	key_name		= data.aws_key_pair.deployer.key_name
	vpc_security_group_ids 	= [aws_security_group.allow_ssh_connect_master.id]
	tags = {
		Name = "Automate-master"
	}
	root_block_device {
	volume_size = 30
	volume_type = "gp3" 	
	}
}

resource "aws_instance" "test-worker-instance"{
        ami             	 = var.ami_id
        instance_type   	 = var.instance_type_worker
        key_name       		 = data.aws_key_pair.deployer.key_name
       	vpc_security_group_ids 	 = [aws_security_group.allow_ssh_connect_worker.id]
        tags = {
                Name = "Automate-worker"
        }
}
