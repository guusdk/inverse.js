# This Vagrant script can be used to create a virtual machine that runs the software project.
#
# To use this script, you'll need to have installed on your computer:
# - Vagrant - https://www.vagrantup.com
# - At least one VM provider, with VirtualBox being the go-to default - https://www.virtualbox.org
#
# To run the script, execute:
#
# $ vagrant up
#
# The first time that this is done, it will download quite a bit of software, and will provision a new
# virtual machine. This will take some time.
#
# When the command completes, you can open a shell into your new virtual machine by executing:
#
# $ vagrant ssh
#
# The source code of this project will be available in /vagrant/. It's content is mapped to the directory
# on the host computer in which you executed the 'vagrant up' command. To exit the shell, type 'exit', as
# you'd ordinarily do with SSH shells.
#
# To stop the running virtual machine:
#
# $ vagrant halt
#
# To destroy the virtual machine:
#
# $ vagrant destroy
#
Vagrant.configure("2") do |config|

  # This is the 'base box', a virtual machine image that provides the operating system of your VM.
  config.vm.box = "bento/ubuntu-16.04"

  # A provisioning script that runs as the default user, executed when starting the VM for the first time.
  config.vm.provision "shell", privileged: false, inline: <<-SHELL
    # Installs ruby, which is used by the Makefile for this project.
    apt-get intall -y ruby

    # Installs 'nvm', which is used to manage the installation of Node.js
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

    # Use 'nvm' to install Node.js version 6
    nvm install v6

    # Finally, install the project dependencies.
    cd /vagrant/
    make dev
  SHELL

end
