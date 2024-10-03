# pv2 — Portfolio for Photographer Pavel Veter

Welcome to the GitHub repository for **pv2**, the official portfolio website of photographer **Pavel Veter**. The site is live at [pavelveter.com](https://www.pavelveter.com/), showcasing Pavel’s stunning photography across various genres, from tasty food to breathtaking reports.

## Project Overview

This project is built to provide a sleek and minimalistic online presence for Pavel Veter's photography portfolio. It is designed to be fast, responsive, and visually engaging, offering a platform where visitors can explore the photographer's work in a seamless and intuitive way.

## Key Features

- **Dynamic Photo Galleries**: Display galleries of photos organized by theme, ensuring visitors have an easy way to browse collections.
- **Mobile-First Design**: The website is fully responsive, ensuring an optimal user experience on any device — from mobile phones to large desktop screens.
- **High-Performance Optimization**: The site leverages advanced caching, lazy loading, and static export techniques to ensure fast loading times and minimal delays, even with high-quality images.
- **SEO Optimized**: The site is structured to be search-engine friendly, helping to ensure that Pavel’s photography reaches a wide audience.
- **Direct Links**: Custom redirect links to external services (like cloud storage) for sharing photos with clients and collaborators.

## Technologies Used

- **Next.js**: React framework used for rendering the site server-side and generating static pages for optimized performance.
- **PNPM**: Efficient package manager, ensuring fast installs and managing dependencies across the project.
- **Styled Components**: For seamless, component-based styling of the site.
- **Vercel**: Deployment and hosting platform providing the infrastructure to serve the website globally with high speed and reliability.

## Installation and Setup

To set up the project locally, follow these steps:

1. Clone the repository:

```bash
   git clone https://github.com/pavelveter/pv2.git
   cd pv2
```

2. Install dependencies using pnpm:

```bash
pnpm install
```

3. Run the development server:

```
pnpm dev
```

4. Open http://localhost:3000 to view the site locally.

## Scripts

### `jpg_2000px_1mb.py`

This script is designed to resize JPG/JPEG photos. It goes through all the files in the specified directory, changing their sizes so that the width or height does not exceed 2000 pixels. If the image already meets these requirements, it is left unchanged. Additionally, the script compresses the images so that their size does not exceed 1 MB. The `Pillow` library and the `jpegoptim` utility are required for operation.

### `make_array.sh`

This script generates information about photos for use in the `photos.tsx` file. It extracts image dimensions using the `exiftool` utility and collects data about the original images and their reduced versions. If the photo has reduced copies (for example, with dimensions `*_200x300`), they are added to the `srcSet` array. The data is formed as objects with the fields `src`, `width`, `height` and `srcSet`, which are used in the `photos.tsx` component.

## License

This project is licensed under the MIT License.

Explore the stunning work of Pavel Veter at [pavelveter.com](https://www.pavelveter.com/) and stay connected with his latest projects through this open-source portfolio platform.
