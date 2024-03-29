/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        "./node_modules/flowbite-react/**/*.js",
        // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
        "./node_modules/flowbite/**/*.js",
        "./pages/**/*.{ts,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx,ts,tsx}",
        "./public/**/*.html",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0066FF'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}
