# loopStudiosTraining

[![en](https://img.shields.io/badge/lang-en-red.svg?style=flat-square)](https://github.com/nothingnothings/loopStudiosTraining)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg?style=flat-square)](https://github.com/nothingnothings/loopStudiosTraining/blob/master/README.pt-br.md)

This README provides an overview of the `index.html` file for the LoopStudiosTraining project, focusing on the Tailwind CSS classes and functionality used throughout the document. The file is structured into several key sections, each utilizing various Tailwind utilities to create a responsive and visually appealing layout.

![screenshot2](screenshot2.png)

## Table of Contents
1. [Hero Section](#hero-section)
2. [Features Section](#features-section)
3. [Creations Section](#creations-section)
4. [Footer Section](#footer-section)

## Hero Section

The hero section serves as the introduction to the page, featuring a navigation bar and a prominent call-to-action.

### Key Tailwind Classes:
- **Container**: `max-w-6xl mx-auto px-6 py-12 md:px-0` - Centers the content and applies padding.
- **Flexbox Utilities**: `flex justify-between items-center` - Aligns navigation items horizontally.
- **Text Styling**: `font-bold text-white` - Applies bold font and white text color.
- **Responsive Visibility**: `hidden md:flex` - Hides elements on small screens and displays them on medium and larger screens.
- **Hamburger Menu**: `block hamburger md:hidden` - Shows the hamburger icon only on mobile devices.

## Features Section

This section highlights the core features of the product with an image and accompanying text.

### Key Tailwind Classes:
- **Flex Layout**: `flex flex-col md:flex-row` - Arranges items in a column on small screens and in a row on medium and larger screens.
- **Text Centering**: `text-center md:text-left` - Centers text on small screens and aligns it left on larger screens.
- **Spacing Utilities**: `my-32 px-6` - Adds vertical margins and horizontal padding.

## Creations Section

The creations section showcases various projects with images and descriptions.

### Key Tailwind Classes:
- **Grid System**: `flex justify-center mb-20 md:justify-between` - Centers the header and adjusts layout based on screen size.
- **Image Scaling**: `hidden w-full duration-200 md:block group-hover:scale-110` - Hides mobile images on larger screens and applies a scale effect on hover.
- **Group Hover Effects**: `group-hover:border-b group-hover:border-blue-50` - Creates an interactive hover effect on navigation links.

## Footer Section

The footer concludes the page with additional navigation and social media links.

### Key Tailwind Classes:
- **Background Color**: `bg-black` - Sets the footer background color to black.
- **Flex Utilities**: `flex flex-col md:flex-row` - Allows the footer content to stack vertically on small screens and horizontally on larger screens.
- **Text Color**: `text-gray-500` - Applies a light gray color to the text.

