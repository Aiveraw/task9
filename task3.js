$("h3").each(function () {
  const $div = $(this).next("div");
  $(this).before($div);
});
