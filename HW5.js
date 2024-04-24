$(function() {
    $(".delete").on("click", fDeleteRow);
    $(".delete").on("mouseover", fMousePointer);
    $("#even, #odd").on("change", fAlternateRow);
    fAlternateRow();
    // initialize the rows to given colors
});

function fAlternateRow() {
    $("table tr:odd").css("background-color", $("#odd").val());
    $("table tr:even").css("background-color", $("#even").val());
    // get rows for odd or seven and set
}

function fMousePointer() {
    $(this).css("cursor", "pointer");
    // mouseover condition
}

function fDeleteRow() {
    let tr = $(this).closest("tr").fadeOut(2000, function(){
        tr.remove("tr");
        fAlternateRow();
        // remove deleted row element and change colors
    });
}