

---

# Next.js Project with Image Resizing & Manipulation for Lottery

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). In this project, users can upload and download images, while the backend automatically resizes and manipulates the images to meet specific requirements for lottery image submissions.

## Features

- **Image Resizing and Manipulation:**  
  - Images must be in a square aspect ratio (height and width are equal).
  - The head in the image must be between 1 inch and 1 3/8 inches (22 mm to 35 mm) tall, or 50% to 69% of the image's total height.
  - Minimum dimensions: 600 x 600 pixels.
  - Maximum file size: 240 KB.
  - Supported file format: JPEG.
  
  The backend will handle all resizing, cropping, and format conversion according to these specifications.

- **User Functionality:**  
  - Users can upload and download images that are processed to meet the specified criteria.
  
## Screenshots

Here are some screenshots from the current build of the project:

![Screenshot 1](public/Imagesx/Screenshot%202024-10-14%20124629.png)  
![Screenshot 2](public/Imagesx/Screenshot%202024-10-14%20124640.png)  
![Screenshot 3](public/Imagesx/Screenshot%202024-10-14%20124654.png)
![Screenshot 4](public/Imagesx/Screenshot%202024-10-14%20124720.png)
![Screenshot 3](public/Imagesx/Screenshot%202024-10-14%20124729.png)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
  
You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---
