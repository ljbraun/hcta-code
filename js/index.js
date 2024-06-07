// When embedding this, use type="module" on the scrip tag
// e.g: <script type="module" src="script.js"></script>

import { initLessonNav } from "./lesson-nav"

// in-lesson JS
;(() => {
	window.addEventListener("load", initLessonNav)
})()
