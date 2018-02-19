var data = [
    {
        value: 20,
        color: "#46BFBD",
        highlight: "#80dddb",
        label: "PHP"
    },
    {
        value: 15,
        color: "#FDB45C",
        highlight: "#fdc786",
        label: "Database Design"
    },
    {
        value: 10,
        color: "#949FB1",
        highlight: "#b4c2d7",
        label: "JavaScript"
    },
    {
        value: 20,
        color: "#F7464A",
        highlight: "#f97c7f",
        label: "Application Architect"
    },
    {
        value: 10,
        color:"#BF6464",
        highlight: "#d47a7a",
        label: "Mentoring"
    },
    {
        value: 15,
        color: "#A61E1E",
        highlight: "#b94e4e",
        label: "Research and Development"
    },
    {
        value: 10,
        color: "#4D5360",
        highlight: "#727989",
        label: "HTML/CSS"
    },
];

$(document).ready(function() {
    homeHeroImage();

    // $('#slides').superslides({
    //     hashchange: false
    // });
    var $container = $('.isotope');
    // init
    $container.isotope({
    // options
    itemSelector: '.item',
    layoutMode: 'fitRows'
    });

    // filter items on button click
    $('#filters > li > a').on( 'click', function(event) {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
        event.preventDefault();
    });

    var ctx = document.getElementById("chart-area").getContext("2d");
    var myDoughnutChart = new Chart(ctx).Doughnut(data, {responsive : true, animationEasing : "easeOutExpo", tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>%",});

    $('#chart_legend').html( myDoughnutChart.generateLegend() );

    $('.nav > li > a').on('click', function(event) {
        var attr = $(this).attr('href');
        var offset = $(attr).offset();
        TweenLite.to(window, 1.3, {scrollTo:{y:offset.top, x:0}, ease:Expo.easeInOut});
        event.preventDefault();
    });

    // $('#contact').on("submit", "form[data-contact-me]" , function(e) {
    //     var form = $(this);
    //     //console.log('ok');
    //     $.ajax('/', {
    //         type: "POST",
    //         data: form.serialize(),
    //         success: function(data) {
    //             //console.log(data);
    //             //clearing the search input field

    //         }
    //     });

    //     e.preventDefault();
    // });

});
$(window).on('resize', function() {
    homeHeroImage();
});

function homeHeroImage() {
    var e = $('#hero'), h = 0, w = 0, o = 0;
    if( e ) {
        w = $(window).width();
        if(w >= 1200 ) {
            // o = 30;
        } else if(w >= 992) {
            // o = 30;
        } else if(w >= 768) {
            // o = 30;
        } else {
            // o = 30;
        }

        h = $(window).height() - o;

        e.css('height', h);
    }
}
