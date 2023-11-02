// Anything exported from this file is importable by other in-browser modules.

import { navigateToUrl } from "single-spa";
const  basePath : string = `/vivienda`;
export function navigate(path) {

    navigateToUrl(`${basePath}/${path}`);
}

