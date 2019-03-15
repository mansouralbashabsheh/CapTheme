
$(function () {
    $('input[name="daterange"]').daterangepicker({
        opens: 'left'
    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});

$(document).ready(function () {
    if ($('.dataTable').length > 0) {
    $('.dataTable').DataTable({
        dom: 'Bfrtip',
        buttons: [
         { extend: 'excel', text: '<i class="fa fa-file-excel-o"></i>', className: 'btn btn-ddtable btn-default', exportOptions: { columns: [0, ':visible'] } },
          {extend: 'print', text: '<i class="fa fa-print"></i>',  className: 'btn btn-ddtable btn-default',exportOptions: {columns: [ 0, ':visible' ]}},
        ],
        searching: false
    });
    }


});



if ($('.value').length > 0) {

    $('.value').counterUp({
        delay: 10,
        time: 1000
    });
}



