<php

Options -MultiViews
RewriteEngine On

#I think this sets the base url of the site?
RewriteBase /~caiuscitiriga/mvc/public

#What does this mean??
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f

#AND THIS?!
RewriteRule ^(.+)$ index.php?url=$1 [QSA,L]