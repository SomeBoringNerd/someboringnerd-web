# someboringnerd.xyz
Repo for my website.

https://someboringnerd.xyz

# First Build

This website use docker for deployement, make sure the port 1234 & 1235 are free.

If you are on a clean debian install (which i'm going to assume !), you just need to install node 20 (unless you already have it) :

```
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo apt-get install -y nodejs
```

after that, just run `./scripts/createFirstDocker`, it will build the website and generate the docker image (and start it too !)

secondly, check the nginx part : 

# Nginx

My nginx config for the website look like this : 

```
upstream alternative_site {
	server localhost:1235;
}


server {
	listen 80 default_server;
	listen [::]:80 default_server;

	server_name someboringnerd.xyz;

	location / {
		proxy_pass http://localhost:1234;
	}

    error_page 502 503 504 = @alternative_site;
    location @alternative_site {
        proxy_pass http://alternative_site;
    }	
}
```

It allows to run two instances of the website, which you'll see why I do so there :

# Update

I use Github's action to automatically update the website, if you want to do it manually (or use another CI tool),

run `./scripts/updateWebsite`

this script does 4 things : 

1) actually update the site

2) Start a secondary docker image on the port 1235 with the updated website, so the website dont show any errors to the end user that may be on your website while it is updating

3) restart the docker image of the primary website

4) stop and delete the temporary website

and all of this is entirely seemless and the user will be none the wiser ~!