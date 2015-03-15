#!/usr/bin/env bash

# You need to have bower and lessc for this script to work.


# Make sure the current working directory is the root folder of the project.
cd "$(dirname "$0")"

# Download the latest version of bootstrap.
bower install bootstrap

# Remove the print.less file from the bootstrap build as it alters a lot of visual effects when printing.
sed -i '/print.less/d' ./bower_components/bootstrap/less/bootstrap.less

# Make sure all what's done for screens is also done when printing.
sed -i 's/@media /@media print, /g' ./bower_components/bootstrap/less/*.less

# Compile our version of bootstrap customized for our printing requirements.
lessc ./bower_components/bootstrap/less/bootstrap.less > printable-bootstrap.css

# Remove the previously downloaded bootstrap library.
rm -r bower_components
