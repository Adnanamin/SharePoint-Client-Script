//The function detail is added on MSTechTalk
function hideFieldsEditForm() {
    var arrFields = ["PercentComplete", "StartDate", "Predecessors", "TaskOutcome"];
    for (var i = 0; i < arrFields.length; i++) {

        try {
            var element = "";
            $('#' + arrFields[i]).closest('tr').hide();
        }
        catch (err) {
            Console.log(err.message)
        }
    }
    $("select[id*='ContentTypeChoice']").each(function (i, el) {
        try {
            $(this).closest('tr').hide();
            return;
        }
        catch (err) {
            //alert(err.message)
        }

    });
}
//call the function on window load to hide the fields
//window.onload = hideFieldsEditForm;