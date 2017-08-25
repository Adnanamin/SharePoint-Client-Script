//The function detail is added on MSTechTalk
function hideFieldsFromViewForm() {
    var arrFields = ["PercentComplete", "SPBookmark_PercentComplete", "SPBookmark_Predecessors", "SPBookmark_Priority", "SPBookmark_TaskOutcome"];
    for (var i = 0; i < arrFields.length; i++) {
        try {
            var element = "";
            $('a[name=' + arrFields[i] + ']').closest('tr').hide();
        }
        catch (err) {
            Console.log(err.message)
        }
    }
    $("a[id*='add_related_items']").each(function (i, el) {
        try {
            $(this).parent().hide()
        }
        catch (err) {
            Console.log(err.message)
        }
    });
}
//call the funciton on form load
//window.onload = hideFieldsFromViewForm;