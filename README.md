# Servicehub

Simple little app which is easy to configure, shows services in a neat grid-formation and lets you know whether they are available.

Docker image: https://hub.docker.com/r/mastermindzh/servicehub/
Demo: https://mastermindzh.github.io/servicehub/

## Example image

![example image](https://github.com/Mastermindzh/servicehub/blob/master/example.png?raw=true)

## Configuration

The entire configuration of this app can be done through a single .json file located in the `data` directory.

The JSON looks like this:

```json
{
  "footerText": "Text for the footer",
  "headerText": "Text for the header",
  "icons": [
    {
        "link": "https://facebook.com/rickvanlieshoutt",
        "code": "fa-facebook"
    }
  ],
  "items": [
    {
      "title": "Jackett",
      "background": "#fff",
      "image": "images/jackett.png",
      "link": "https://github.com/Jackett/Jackett",
      "size": 4
    }
  ]
}
```

The icons array takes icon objects with a link and a code. The code will be in Font awesome format.

The items object consists of the following key/value pairs:

| Key        | Value                                                         |
|------------|---------------------------------------------------------------|
| title      | Searchable title for the service                              |
| background | css notation of a background color (or image, gradient, etc.) |
| image      | path to an image to show on the card                          |
| link       | The URL to which the card should point                        |
| size       | size of the card - ranges from 1 through 12                   |

Make changes as you see fit and refresh the page to render the new items.

## Run as docker
Running as a docker in incredibly simple, you can execute the following command to run the test image:

`docker run -d -p 80:80 mastermindzh/servicehub`

To insert your data simply mount the config file using a volume mount:

`-v /full/path/to/file:/usr/share/nginx/html/data/data.json`

You can do the same thing with the images folder to provide your own images (if you don't want to use public images):

`-v path/to/images/folder:/usr/share/nginx/html/images/`

The entire command would be:

`docker run -d -p 80:80 -v $("pwd")/data.json:/usr/share/nginx/html/data/data.json -v $("pwd")/images:/usr/share/nginx/html/images mastermindzh/servicehub`

### Updating a live instance
In order to update a live instance you have to create a data folder with a data.json file in it and mount that instead of the data.json file.

The command would look like this:
```
docker run -d -p 80:80 -v $("pwd")/data:/usr/share/nginx/html/data/ mastermindzh/servicehub
```

