const viewMoreButton = document.getElementById('view-more')
const hiddenEl = document.querySelectorAll('.hidden')
const viewMoreEl = document.getElementById('view-more-el')

viewMoreButton.addEventListener("click", function () {
    hiddenEl.forEach(item => {
        item.classList.remove("hidden")
        item.classList.add("show")
    })
    viewMoreButton.style.display = "none"
    viewMoreEl.innerHTML = `
    <div class="container view-more">
        <span id="view-more"><a style="color: #000; text-decoration: none;" href="#header">Go Back to top</a></span>
    </div>
    `
})