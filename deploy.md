## ngnix

### 安装

```
yum install nginx
```

### 启动

```
systemctl start nginx
```

### 配置

```
vim /etc/nginx/nginx.conf
```

```
server {
    listen       80;
    server_name  localhost;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location / {
        root   html;
        index  index.html index.htm;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504 /50x.html;
    location = /50x.html {
        root   html;
    }
}
```
    
### 重启

```
systemctl restart nginx
```

### 访问

```
http://192.168.1.100/
```

### 卸载

```
systemctl stop nginx
yum remove nginx
rm -rf /usr/local/nginx
```

### 配置文件

```
/etc/nginx/nginx.conf
```

### 配置文件

```
/etc/nginx/nginx.conf
```

```
server {
    listen       80;
    server_name  localhost;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location / {
        root   html;
        index  index.html index.htm;
    }

    #error_page  404              /404.html;
`

## tomcat



### 安装

```
yum install tomcat
```

### 启动

```
systemctl start tomcat
```

### 配置

```
vim /etc/tomcat/server.xml
```

```
<Connector port="8080" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443" />
```

### 重启

```
systemctl restart tomcat
```

### 访问

```
http://192.168.1.100:8080/
```

### 部署

```
cp -r /usr/local/tomcat/webapps/ROOT /usr/local/tomcat/webapps/ROOT_bak
cp -r /home/www/ROOT /usr/local/tomcat/webapps/ROOT
```
    
### 卸载

```
systemctl stop tomcat
yum remove tomcat
rm -rf /usr/local/tomcat
```

### 配置文件

```
/etc/tomcat/server.xml
/etc/tomcat/tomcat-users.xml
/etc/tomcat/catalina.policy
/etc/tomcat/catalina.properties
/etc/tomcat/context.xml
/etc/tomcat/logging.properties
/etc/tomcat/tomcat-users.xml
/etc/tomcat/web.xml
```

## docker


### 安装

```
yum install docker
```

### 启动

```
systemctl start docker
```

### 配置

```
vim /etc/docker/daemon.json
```

```
{
    "registry-mirrors": ["https://registry.docker-cn.com"]
}
```

### 重启

```
systemctl restart docker
```

### 访问

```
http://192.168.1.100:8080/
```

### 部署

```
docker pull tomcat
docker run -d -p 8080:8080 --name tomcat tomcat
```

### 卸载

```
systemctl stop docker
yum remove docker
rm -rf /usr/local/docker
```
