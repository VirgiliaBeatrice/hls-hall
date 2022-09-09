# HLS Hall Page

This project is a streaming hall for hls.

### Build

Modify URL to deployment configuration.

1. `public/index.html`
2. URLs in `Page.tsx`
3. VideoPlayer props in `Page.tsx`

Run `npm run build` to build the static files.

### Deployment on Linux with Nginx 
Copy build files to `/var/www/html/hall`.

```
server {
    listen 80 default_server;
    root /var/www/html;
    index index.html;
    server_name {ip address};
    location /hall {
        try_files %uri $uri/ =404;
    }
}
```

### References
[https://dev.classmethod.jp/articles/run-a-production-built-react-app-in-a-local-environment/]
