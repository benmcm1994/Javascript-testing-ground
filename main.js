let signals = '';

console.log(signals);

$.ajax({
    type: 'GET',
    url: 'https://5cee893b1c2baf00142cc096.mockapi.io/signalstarter/api/signal',
    success: function (response) {

        signals = response;

        console.log(signals)

        $('#dashboard-history-pagination').pagination({
            dataSource: signals,
            totalNumber: signals.length,
            pageSize: 20,
            ajax: {
                beforeSend: function () {
                    $('#dashboard-history-placeholder').html('Loading data...');
                }
            },
            callback: function (data, pagination) {

                var html = template(data)

                // template method of yourself

                $('#dashboard-history-placeholder').html(html);
            }
        });

    }
});

function template(data) {

    var html = '';

    $.each(data, function (index, item) {
        html += '<p>' + item.name + '</p>';
    })

    return html;
}