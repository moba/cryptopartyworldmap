var wrld = {
    map: 'world_mill_en',
//    backgroundColor: 'black',
    regionStyle: {
        hover: {
            "fill": 'red'
        }
    },
    series: {
        regions: [{
            values: activeCountries,
            scale: ['#C8EEFF', '#0071A4'],
            normalizeFunction: 'polynomial'
        }]
    },
    onRegionClick: function(event, code) {
//        window.location = 'https://' + code.toLowerCase() + '.cryptoparty.org'
        window.alert('(redirect to https://' + code.toLowerCase() + '.cryptoparty.org/)');
    },
    onRegionLabelShow: function(event, label, code) {
        label.text(label.text() + ': https://' + code.toLowerCase() + '.cryptoparty.org/');
    }
};

$(document).ready(function () {
    $('#world-map').vectorMap(wrld);
});
