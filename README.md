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
|-- .github
|-- .husky
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

# FEATURES
- MVP
    - Authentication and Authorization via Auth0
        - Sign in
        - Register
        - Logout
        - OAuth
    - Support Multi-tenancy
    - Landing Page
        - Pricing
        - Features
        - 404 page
        - Documentation (very brief how to connect)
    - Dashboard
        - List logs (real time and historical)
            - Each row has the following at a minimum:
                - Level
                - Container
                - Date
                - Description
                - Organization/Project ID (this is mainly for the system and not much benefit to the user)
        - Metrics:
            - Number of logs per level
    - Aggregate logs from containers via Docker logging driver plugin or container TBD (for integration with Wingfoot web app)
    - CI/CD pipeline
        - Testing (test coverage does not need to be 100%, can be low to start with)
        - Automated deployment
        - Formatting
        - Security
    - IaC AWS
        - DB for web app
        - nginx for web server
        - Docker on EC2
        - ELK pipeline and stack
    
- +1
    - Search logs
    - Filter logs
    - MFA
- +2
    - Archive logs
    - Team management
        - Add/invite teammate
        - Remove teammate
        - Teammate roles
- +3
    - Notifications for errors
    - Export logs table to csv
- +4
    - Trace/timeline visualization of logs
    - Manage integrations
NOTE: Refactor for a week between each iteration