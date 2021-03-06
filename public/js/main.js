function showSnippetForm() {
  event.preventDefault();
  let form = document.getElementById("createSnippetForm");
  let container = document.getElementById("home-container");
  if (form.style.display == "block") {
    form.style.display = "none";
    container.style.filter = "none";
  } else {
    form.style.display = "block";
    container.style.filter = "blur(5px)";
  }
}
function showFullSnippet() {
  let viewSnippet = event.target;
  let viewSnippetID = viewSnippet.getAttribute("data-id");
  console.log(viewSnippetID);
  let snippet = document.getElementById("item_" + viewSnippetID);
  let cover = document.getElementById("cover_" + viewSnippetID);
  console.log(snippet);

  if (snippet.style.height !== "100%") {
    snippet.style.height = "100%";
    viewSnippet.textContent = "Hide Snippet";
    cover.style.display = "none";
  } else {
    snippet.style.height = "20em";
    viewSnippet.textContent = "View Full Snippet";
    cover.style.display = "block";
  }
}
