# stables
Social dog sitting exchange platform, providing community-driven alternatives to an expensive status quo.

# TO DO
- Set up redux store, actions, reducers
- Set up CSS pallete for dark and light mode
- Set up frontend, backend, and db services
    - Frontend and backend should have their own package.json
- Set up Jest test cases
    - Frontend and backend should have their own package.json
- Set up env file
    - Frontend and backend should have their own .env
- Set up docker file
    - Frontend and backend should have their own docker files
- Set up ESLint and prettier
- Set up webpack
    - Frontend and backend should have their own webpack
- Set up sonarqube
- Set up typescript
    - Frontend and backend should have their own webpack
- Set up AWS and GHA
- Set up OAuth

- Folder Structure (potentially something like this)
project-root/
│
├── frontend/
│   ├── Dockerfile
│   ├── jest.config.js
│   ├── tsconfig.json
│   ├── webpack.config.js
│   ├── .env.development
│   ├── .env.staging
│   ├── .env.production
│   ├── public/
│   │   ├── index.html
│   │   └── ...
│   ├── src/
│   │   ├── components/
│   │   │   ├── Component1/
│   │   │   │   ├── Component1.tsx
│   │   │   │   ├── Component1.css
│   │   │   │   └── ...
│   │   │   └── ...
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── ...
│   ├── package.json
│   ├── package-lock.json
│   └── ...
│
├── backend/
│   ├── Dockerfile
│   ├── jest.config.js
│   ├── tsconfig.json
│   ├── .env.development
│   ├── .env.staging
│   ├── .env.production
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── Controller1.ts
│   │   │   └── ...
│   │   ├── models/
│   │   │   ├── Model1.ts
│   │   │   └── ...
│   │   ├── routes/
│   │   │   ├── apiRoutes.ts
│   │   │   └── ...
│   │   ├── app.ts
│   │   └── ...
│   ├── package.json
│   ├── package-lock.json
│   └── ...
│
├── nginx/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── ...
│
├── .env.development
├── .env.staging
├── .env.production
├── .eslintignore
├── .eslintrc.js
├── .prettierrc
├── docker-compose.yml
└── ...

