const checkboxes = $("input[type='checkbox']");
const maxNumOfActiveCheckboxes = 3;
checkboxes.change(function () {
  let checkedCheckboxes = checkboxes.filter(":checked");
  if (checkedCheckboxes.length >= maxNumOfActiveCheckboxes) {
    checkboxes.prop("disabled", true);
  }
});

