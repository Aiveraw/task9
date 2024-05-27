function addAttribute() {
    const str1 = $("a").attr("href");
    const isHrefContainHttp = str1.startsWith("https://");
    if (isHrefContainHttp) {
      $("a").attr("target", "_blank");
    }
  }
  addAttribute();
  