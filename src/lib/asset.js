// Prefix public-folder paths with Vite's base URL so assets resolve
// both locally and on GitHub Pages (served from /JimFazioGolf/).
export const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, "");
