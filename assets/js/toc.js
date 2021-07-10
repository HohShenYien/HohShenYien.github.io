var getSiblings = function (elem) {
  // Setup siblings array and get the first sibling
  var siblings = [];
  var sibling = elem.parentNode.firstChild;

  // Loop through each sibling and push to the array
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }

  return siblings;
};

// Get ToC div
let toc = document.getElementById("ToC"); //Add a header
let headers = document.getElementsByTagName("h2");
let tocHeader = document.createElement("h3");
tocHeader.innerText = "Table of contents";
toc.appendChild(tocHeader); // Get the h2 tags — ToC entries
let tocList = document.createElement("ul");
// For each h2
for (i = 0; i < headers.length; i++) {
  // Create an id
  let the_name = "h" + i;
  headers[i].id = the_name;

  // a list item for the entry
  let tocListItem = document.createElement("li");

  // a link for the h2
  let tocEntry = document.createElement("a");
  let siblings = getSiblings(headers[i]);
  // sublist for h2's children
  let sublist = document.createElement("ul");
  let ind = 1;
  for (let sibling of siblings) {
    for (let div of sibling.children) {
        for (let child of div.children) {
          if (child.tagName == "H3") {
            child.id = "h" + i + "-" + ind;
            let sublistItem = document.createElement("li");
            let sublistEntry = document.createElement("a");
            sublistEntry.setAttribute("href", "#" + child.id);
            sublistEntry.innerText = child.innerText;
            ind++;
            sublistItem.appendChild(sublistEntry);
            sublist.appendChild(sublistItem);
          }
        }
    }
  }
  tocEntry.setAttribute("href", "#" + the_name);
  tocEntry.innerText = headers[i].innerText;
  tocListItem.appendChild(tocEntry);
  if (ind != 1) {
    tocListItem.appendChild(sublist);
  }
  tocList.appendChild(tocListItem);
}
toc.appendChild(tocList);
