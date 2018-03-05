$(document).ready(function(){

  $(".hs-chart-progress").each(function() {
    var dataProgress = $(this).attr("stroke-dashoffset");
    $(this).attr("stroke-dashoffset", "100");
    $(this).animate({
      "stroke-dashoffset": dataProgress
    },1000)
  })

  var chartTipPos = function(event) {
    w=$('.chartTip').attr('style').split(';')[0].replace(/\D/g,'');
    var tooltipX = event.pageX - 8 - (Math.floor(w/2));
    var tooltipY = event.pageY + 8;
    $('div.chartTip').css({top: tooltipY, left: tooltipX});
  };

  var showChartTip = function(event) {
    $('div.chartTip').remove();
    $(this).css({'stroke-width':'10'}, {'stroke-opacity':'1'});

    ctText = $(this).attr('chart-tip')
    ctColor = $(this).attr('stroke')

    width=(ctText.length * 5) + 50;
    $('<div class="chartTip" style="min-width:'+width+'px"><span style="color: '+ctColor+';">&#9724;</span> '+ctText+' </div>')
    .appendTo('body');
    chartTipPos(event);
  };

  var hideChartTip = function() {
    $('div.chartTip').remove();
    $(this).css({'stroke-width':'8'}, {'stroke-opacity':'.8'});
  };

  $(".hs-chart-progress").bind({
    mouseover: chartTipPos,
    mousehover: showChartTip,
    mouseon: hideChartTip
  });
});
