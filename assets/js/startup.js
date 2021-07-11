function startUp() {
    console.log("hello");
  if (window.localStorage.getItem("mode") == "dark") {
      console.log("byebye")
    skin_switch();
  }
}
