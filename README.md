## How to run

To run the backend, first navigate to the backend directory:

```
cd backend
```

Then build the docker image:

```
docker build -t backend-image .
```

Then run the docker image:

```
docker run -d --name backend-container -p 8888:8888 backend-image
```

To run the frontend, first navigate to the frontend directory:

```
cd frontend
```

Then install the dependencies:

```
npm install
```

Then run the frontend:

```
npm run dev
```

## Notes

Due to time constraints, and the small scope of the project, I kept the structure very simple and opted against including too many third party libraries, instead focusing on functionality.
If this were a larger project or there were more time I would have included some of the following:

-   TailwindCSS or a component library to make styling easier
-   A React framework, such as Next.js or Remix, to allow for better route handling, better loading of data, etc...
-   A caching server side to avoid having to make a request to the API every time the page is loaded
