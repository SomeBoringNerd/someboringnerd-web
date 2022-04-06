# this script will update the website by moving 
# the content of html to the root of the website,
# over-writting older file.

# you have execute that as root
cp html/* /var/www/html/ -rf

# required by Nginx for file upload for exemple.
# without it, stuff might break.
chown -R www-data /var/www/html/