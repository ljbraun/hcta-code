// When embedding this, use type="module" on the scrip tag
// e.g: <script type="module" src="script.js"></script>

// lesson-nav functions (can't use multiple files because of CORS policy)
function scrollToCurrentLesson() {
	const currentLessonTitle = document.querySelector(
		".main-sidebar .product-outline-post.active"
	)

	if (currentLessonTitle) {
		currentLessonTitle.scrollIntoView({
			behavior: "smooth",
			block: "center",
		})
	}

	return
}

export function initLessonNav() {
	if (document.readyState === "complete") {
		scrollToCurrentLesson()
	} else {
		window.addEventListener("load", scrollToCurrentLesson)
	}
}

// init
;(() => {
	window.addEventListener("load", initLessonNav)
})()
