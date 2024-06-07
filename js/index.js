// When embedding this, use type="module" on the scrip tag
// e.g: <script type="module" src="script.js"></script>

// lesson-nav functions (can't use multiple files because of CORS policy)
function scrollToCurrentLesson() {
	const currentLessonTitle = document.querySelector(
		".main-sidebar .product-outline-post.active"
	)

	if (currentLessonTitle) {
		currentLessonTitle.scrollIntoView({
			block: "center",
		})
	}

	return
}

function initLessonNav() {
	if (document.readyState === "complete") {
		scrollToCurrentLesson()
	} else {
		window.addEventListener("load", scrollToCurrentLesson)
	}
}

function createSkipLink() {
	// Create the skip link element
	const skipLink = document.createElement("a")

	const isMainWebsite = document.querySelector("main")
	const skipLinkTarget = isMainWebsite ? "main" : ".main-content"
	console.log(skipLinkTarget)

	skipLink.href = "#"
	skipLink.textContent = "Skip to main content"
	skipLink.className = "skip-link"

	// Insert the skip link at the beginning of the body
	document.body.insertBefore(skipLink, document.body.firstChild)

	// Add click event listener to move focus to main content
	skipLink.addEventListener("click", function (event) {
		event.preventDefault()

		const mainContent = document.querySelector(skipLinkTarget)
		console.log(mainContent)
		if (mainContent) {
			mainContent.setAttribute("tabindex", "-1")
			mainContent.focus({ preventScroll: true })
			window.scrollTo(0, mainContent.offsetTop)
		}
	})

	return
}

// init
;(() => {
	window.addEventListener("load", initLessonNav)
	window.addEventListener("load", createSkipLink)
})()
