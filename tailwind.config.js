/** @type {import('tailwindcss').Config} */
export default {
<<<<<<< HEAD
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {},
    },
    // eslint-disable-next-line no-undef
    plugins: ['prettier-plugin-tailwindcss', require('flowbite/plugin')],
=======
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: ['prettier-plugin-tailwindcss'],
>>>>>>> bbe35762337c35be39c9398f0d81ea830b40fe09
};
