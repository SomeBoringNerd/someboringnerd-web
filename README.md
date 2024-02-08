# someboringnerd.xyz
Repo for my website.

https://someboringnerd.xyz

# Build

This website use docker for deployement, make sure the port 1234 & 1235 are free.

first, run `./scripts/createFirstDocker`, it will build the website and generate the docker image (and start it too !)

secondly, check the nginx part : 

# Nginx

In order to update the website seemlessly, I use a secondary docker image to take on the first when it's being updated

```
server {
	listen 80 default_server;
	listen [::]:80 default_server;

	server_name someboringnerd.xyz;

	location / {
		proxy_pass http://localhost:1234;
	}

    error_page 502 503 504 = @alternative_backend;
    location @alternative_backend {
        proxy_pass http://localhost:1235;
    }	
}
```

# Update

I use Github's action to automatically update the website, if you want to do it manually (or use another CI tool),

run `./scripts/updateWebsite`

this script does two things : 

1) actually update the site

2) Start a secondary docker image on the port 1235 with the updated website, so the website dont show any errors to the end user that may be on your website while it is updating

3) restart the docker image of the primary website

4) stop and delete the temporary website

and all of this is entirely seemless and the user will be none the wiser ~!