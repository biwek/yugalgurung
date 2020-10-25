// google chart

var drawOrgChart = function() {
  var chart, data, options;
  data = new google.visualization.DataTable;
  data.addColumn('string', 'Name');
  data.addColumn('string', 'Parent');
  data.addRows([
    [
      {
        'v': 'funds',
        'f': 'Rs <span class="counter">3,46,473</span><div><small class="text-bold">funds raised</small></div>'
      }, ''
    ], [
      {
        'v': 'hiteri',
        'f': '<h6 class="text-bold">Hiteri</h6><small>Rs 40,000</small>'
      }, 'funds'
    ], [
      {
        'v': 'vcn',
        'f': '<h6 class="text-bold">Volunteer Corps Nepal</h6><small>Rs 2,86,473</small>'
      }, 'funds'
    ], [
      {
        'v': 'kat',
        'f': '<h6 class="text-bold">KAT Centre</h6><small>Rs 20,000</small>'
      }, 'funds'
    ], [
      {
        'v': 'hiteri-2',
        'f': '<span class="text-bold">Areas</span><div><small>Mahalaxmisthan temple<br>Lagankhel<br>Patan Sundhara<br>Talchikhel<br>Tutepani</small></div>'
      }, 'hiteri'
    ], [
      {
        'v': 'vcn-2',
        'f': '<span class="text-bold">Areas</span><div><small>Ward 3, Haripur Municipality, Sarlahi district of Nepal to Musahar community, consisting 200 Households</small></div>'
      }, 'vcn'
    ], [
      {
        'v': 'kat-2',
        'f': '<span class="text-bold">Areas</span><div><small>Rescuing, treating and feeding stray dogs and cats in and around Kathmandu valley</small></div>'
      }, 'kat'
    ], [
      {
        'v': 'hiteri-3',
        'f': '<span class="text-bold">Estimations</span><div><small>10 days of 45 meals plus water can be allocated to above places.</small></div>'
      }, 'hiteri-2'
    ], [
      {
        'v': 'vcn-3',
        'f': '<span class="text-bold">Estimations</span><div><small>1000 beneficiaries would directly be supported, with the assumption that 1 household has 5 members</small></div>'
      }, 'vcn-2'
    ], [
      {
        'v': 'kat-3',
        'f': '<a href="#" class="text-bold open-gallery chart-link" data-gallery="kat">View Gallery</a>'
      }, 'kat-2'
    ], [
      {
        'v': 'hiteri-4',
        'f': '<a href="#" class="text-bold open-gallery chart-link" data-gallery="hiteri">View Gallery</a>'
      }, 'hiteri-3'
    ], [
      {
        'v': 'vcn-4',
        'f': '<span class="text-bold">Items</span><div><small>Rice, cereals, oil, salt, potatoes, soya chunks and soap, that should last over 10 days</small></div>'
      }, 'vcn-3'
    ], [
      {
        'v': 'vcn-5',
        'f': '<a href="#" class="text-bold open-gallery chart-link" data-gallery="vcn">View Gallery</a>'
      }, 'vcn-4'
    ]
  ]);
  options = {
    allowHtml: true,
    nodeClass: "orgChartNode",
    selectedNodeClass: "orgChartNode"
  };
  chart = new google.visualization.OrgChart(document.getElementById("chart_div"));
  google.visualization.events.addListener(chart, 'ready', afterDrawOrgChart);
  chart.draw(data, options);
};

var afterDrawOrgChart = function() {
  $(".counter").counterUp({
    delay: 10,
    time: 1000
  });
  return $("a.open-gallery").click(function(ev) {
    ev.preventDefault();
    console.log($(this).data("gallery"));
    return openGallery($(this).data("gallery"));
  });
};

// photoswipe

var initPhotoswipe = function(items) {
  var gallery, options, pswpElement;
  pswpElement = document.querySelectorAll(".pswp")[0];
  options = {
    captionEl: false,
    closeOnScroll: false,
    shareEl: false
  };
  gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};

var openGallery = function(code) {
  var galleryItems;
  galleryItems = {
    "hiteri": [
      {
        src: "https://bit.ly/2KRJDU3",
        w: 880,
        h: 1172
      }, {
        src: "https://bit.ly/3bY1vIU",
        w: 880,
        h: 1172
      }, {
        src: "https://bit.ly/2VU4RXQ",
        w: 1280,
        h: 960
      }, {
        src: "https://bit.ly/2KSEdZ1",
        w: 1280,
        h: 960
      }, {
        src: "https://bit.ly/2KVapLb",
        w: 1280,
        h: 960
      }, {
        src: "https://bit.ly/3fewOB1",
        w: 880,
        h: 1172
      }, {
        src: "https://bit.ly/3eSRrmn",
        w: 960,
        h: 720
      }, {
        src: "https://bit.ly/356J2Hk",
        w: 960,
        h: 720
      }, {
        src: "https://bit.ly/3aBnTWR",
        w: 960,
        h: 720
      }, {
        src: "https://bit.ly/2Y9GZkA",
        w: 720,
        h: 960
      }, {
        src: "https://bit.ly/2ztIvU5",
        w: 720,
        h: 960
      }, {
        src: "https://bit.ly/2S8fXGs",
        w: 720,
        h: 960
      }, {
        src: "https://bit.ly/3bHfYc5",
        w: 720,
        h: 960
      }
    ],
    "vcn": [
      {
        src: "https://bit.ly/2Z83OFD",
        w: 905,
        h: 640
      }, {
        src: "https://bit.ly/2Wa1wDW",
        w: 853,
        h: 640
      }, {
        src: "https://bit.ly/2WdOKV7",
        w: 960,
        h: 720
      }, {
        src: "https://bit.ly/2A5Aaq1",
        w: 853,
        h: 640
      }, {
        src: "https://bit.ly/3fps389",
        w: 960,
        h: 720
      }, {
        src: "https://bit.ly/3aXrI9h",
        w: 864,
        h: 1222
      }, {
        src: "https://bit.ly/3bX65He",
        w: 720,
        h: 960
      }, {
        src: "https://bit.ly/2VXuffj",
        w: 720,
        h: 960
      }, {
        src: "https://bit.ly/2YrYHzR",
        w: 960,
        h: 720
      }, {
        src: "https://bit.ly/3b1nGMS",
        w: 960,
        h: 720
      }, {
        src: "https://bit.ly/2YrYMn9",
        w: 960,
        h: 720
      }, {
        src: "https://bit.ly/2KGibsg",
        w: 960,
        h: 720
      }, {
        src: "https://bit.ly/3cSbOOO",
        w: 720,
        h: 960
      }, {
        src: "https://bit.ly/2yQlYQZ",
        w: 960,
        h: 720
      }, {
        src: "https://bit.ly/3eXcMv1",
        w: 960,
        h: 720
      }, {
        src: "https://bit.ly/2SbKXoS",
        w: 960,
        h: 720
      }, {
        src: "https://bit.ly/3bGlyva",
        w: 480,
        h: 640
      }, {
        src: "https://bit.ly/2YgFyAV",
        w: 853,
        h: 640
      }, {
        src: "https://bit.ly/2xVBOKm",
        w: 960,
        h: 720
      }, {
        src: "https://bit.ly/2KFN00a",
        w: 480,
        h: 640
      }
    ],
    "kat": [
      {
        src: "https://bit.ly/2Z1nriP",
        w: 1040,
        h: 585
      }, {
        src: "https://bit.ly/35JWi5d",
        w: 1040,
        h: 585
      }, {
        src: "https://bit.ly/2xO61uz",
        w: 1040,
        h: 585
      }, {
        src: "https://bit.ly/2LfSX4n",
        w: 1040,
        h: 585
      }, {
        src: "https://bit.ly/2zufcRe",
        w: 1040,
        h: 585
      }, {
        src: "https://bit.ly/2AaagBr",
        w: 585,
        h: 1040
      }
    ]
  };
  initPhotoswipe(galleryItems[code]);
};

$(document).ready(function() {
  $("#chart_div").each(function() {
    google.charts.load("current", {
      "packages": ["orgchart"]
    });
    google.charts.setOnLoadCallback(drawOrgChart);
  });
});
