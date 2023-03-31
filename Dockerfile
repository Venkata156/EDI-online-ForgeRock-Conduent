# build environment
#FROM {{ACRName}}.azurecr.io/edi-modernization/nodejs:20230103192403 as build
#WORKDIR /app

#ENV PATH /app/node_modules/.bin:$PATH
#COPY package.json /app/package.json
#RUN npm install --silent
#RUN npm config set unsafe-perm true #https://stackoverflow.com/questions/52196518/could-not-get-uid-gid-when-building-node-docker
#RUN npm install react-scripts@3.0.1 -g --silent
#COPY . /app
#RUN npm run build

# production environment
FROM {{ACRName}}.azurecr.io/edi-modernization/nginx:20230103193033
COPY /build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 4200 80
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
ENTRYPOINT ["nginx", "-g", "daemon off;"]