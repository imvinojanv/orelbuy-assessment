<a name="readme-top"></a>

# OrelBuy : Assessment Application for OREL IT

<img width="1920" alt="OrelBuy-HomePage" src="https://github.com/imvinojanv/orelbuy-assessment/assets/48822560/efbaaaab-c587-41d9-8e96-82c5c5919057">
<br /><br />

- 🔒 Secure authentication (Token-based)
- 📋 Protected routes.
- 📱 Standard User interface with Responsiveness.
- ♻️ Used Reusable components.
- 🪄 Infinite scroll products section.
- ⚙️ Maintained the Clean code architecture and Best practices.
- 🗃️ Follow well-structured architecture
- 🚀 Used the best HPPT client of Axios
- ⚠️ Exceptions and Error Handling
- 🌐 Used GIT flow with Staging, Branching and Versioning

## Build with
[![Next][Next.js]][Next-url] [![React][React.js]][React-url] [![TypeScript][TypeScript]][TypeScript-url] [![JWT][JWT]][JWT-url] [![Planetscale][Planetscale-db]][Planetscale-url] [![MySQL][MySQL-db]][MySQL-url] [![Prisma][Prisma-orm]][Prisma-url] [![ShadcnUI][Shadcn-ui]][Shadcn-url] [![TailwindCSS][Tailwind-css]][Tailwind-url]

## Getting Started 🎉
To get a local copy up and running on your machine, follow these simple steps.

### Installation
1.  Clone the repository
   ```sh
   git clone https://github.com/imvinojanv/orelbuy-assessment.git
   ```
2.  Install NPM packages
   ```sh
   npm install
   ```
3.  Create .env file with keys
4.  Run the application
   ```sh
   npm run dev
   ```

### Sample .env file
```js
JWT_SECRET=      // generate and paste your key here
NODE_ENV=development

DATABASE_URL=      // planetscale db url
 ```

<p align="right"><a href="#readme-top">back to top ☝️</a></p>

## Database Structure 🛢️

| Schema Model | Field Name (Type) |
| --- | --- |
| **User** | - `id` (int)<br>- `email` (string)<br>- `username` (string)<br>- `password` (string)<br>- `createdAt` (date)<br>- `updatedAt` (date) |
| **Product** | - `id` (string)<br>- `name` (string)<br>- `image_url` (string)<br>- `description` (string)<br>- `tagline` (string) |

<p align="right"><a href="#readme-top">back to top ☝️</a></p>

© [imvinojanv](https://github.com/imvinojanv)

<!-- BUILD WITH URLs -->
[Next.js]: https://img.shields.io/badge/next_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript]: https://img.shields.io/badge/Typescript-007acc?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/ 
[JWT]: https://img.shields.io/badge/JSON_Web_Tokens-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=00b9f1
[JWT-url]: https://jwt.io/
[Clerk-auth]: https://img.shields.io/badge/Clerk-1f0157?style=for-the-badge&logo=clerk&logoColor=24acfd
[Clerk-url]: https://clerk.com/
[Shadcn-ui]: https://img.shields.io/badge/Shadcn-09090b?style=for-the-badge&logo=shadcnui&logoColor=white
[Shadcn-url]: https://ui.shadcn.com/
[Planetscale-db]: https://img.shields.io/badge/Planetscale-000000?style=for-the-badge&logo=planetscale&logoColor=white
[Planetscale-url]: https://planetscale.com/
[Tailwind-css]: https://img.shields.io/badge/Tailwind-161d2d?style=for-the-badge&logo=tailwindcss&logoColor=38bdf8
[Tailwind-url]: https://tailwindcss.com/
[MySQL-db]: https://img.shields.io/badge/MySQL-04303c?style=for-the-badge&logo=mysql&logoColor=e97b00
[MySQL-url]: https://www.mysql.com/
[Prisma-orm]: https://img.shields.io/badge/Prisma_ORM-1a202c?style=for-the-badge&logo=prisma&logoColor=white
[Prisma-url]: https://www.prisma.io/
