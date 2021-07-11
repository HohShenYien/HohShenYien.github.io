function prepareToC() {
  // Get ToC div
  let toc = document.getElementById("ToC"); //Add a header
  var elems = document.body.getElementsByTagName("*");
  let tocHeader = document.createElement("h3");
  tocHeader.innerText = "Table of contents";
  toc.appendChild(tocHeader); // Get the h2 tags — ToC entries
  let tocList = document.createElement("ul");
  let ind = 0, subInd = 1;
  let the_name = "h" + ind;
  // a list item for the entry
  let tocListItem = document.createElement("li");
  // a link for the h2
  let tocEntry = document.createElement("a");
  // sublist for h2's children
  let sublist = document.createElement("ul");
  let subListItem = null;
  let subListEntry = null;
  for (let elem of elems) {
    if (elem.tagName == "H2") {
      ind++;
      if (subInd != 1) {
        tocListItem.appendChild(sublist);
        subInd = 1;
      }
      if (ind != 1) {
        tocList.appendChild(tocListItem);
      }
      tocListItem = document.createElement("li");
      tocEntry = document.createElement("a");
      sublist = document.createElement("ul")
      the_name = "h" + ind;
      elem.id = the_name
      tocEntry.setAttribute("href", "#" + the_name);
      tocEntry.innerText = elem.innerText;
      tocListItem.appendChild(tocEntry);
    } else if (elem.tagName == "H3") {
      if (elem.classList.contains("page__comments-title")) {
        break;  
      }
      subListItem = document.createElement("li");
      subListEntry = document.createElement("a");

      the_name = "h" + ind + "-" + subInd;
      elem.id = the_name;
      subListEntry.setAttribute("href", "#" + the_name);
      subListEntry.innerText = elem.innerText;
      subListItem.appendChild(subListEntry);
      sublist.appendChild(subListItem);
      subInd++;
    }
  }
  if (subInd != 1) {
    tocListItem.appendChild(sublist);
  }
  tocList.appendChild(tocListItem);
  toc.appendChild(tocList);
}

document.addEventListener("DOMContentLoaded", function(event) {
  prepareToC();
});
