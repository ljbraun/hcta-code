function scrollToCurrentLesson() {
	const currentLessonTitle = document.querySelector(
		".main-sidebar product-outline-post.active"
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
