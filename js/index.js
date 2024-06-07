// When embedding this, use type="module" on the scrip tag
// e.g: <script type="module" src="script.js"></script>

import { initLessonNav } from "./lesson-nav"

// in-lesson JS
;(() => {
	console.log("JS initiated...")
	window.addEventListener("load", initLessonNav)
})()
