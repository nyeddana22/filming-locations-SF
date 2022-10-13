// https://observablehq.com/@nyeddana/ecs272-hw1@1721
import define1 from "./7764a40fe6b83ca1@427.js";

function _1(md){return(
md`# ECS272 HW1 - Movie Locations in San Francisco`
)}

function _2(md){return(
md`#### Importing libraries, data sets and preparing data sets`
)}

function _3(require){return(
require("d3@6")
)}

async function _data(d3,FileAttachment){return(
d3.csvParse(await FileAttachment("Film_Locations_in_San_Francisco@3.csv").text(), d3.autoType)
)}

function _groupBy(){return(
function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})
}
)}

function _data_loc(groupBy,data){return(
groupBy(data, 'Locations')
)}

function _7(data_loc){return(
delete data_loc[null]
)}

function _data_movie(groupBy,data){return(
groupBy(data, 'Title')
)}

function _9(data_movie){return(
delete data_movie[null]
)}

function _data_year(groupBy,data){return(
groupBy(data, 'Release Year')
)}

function _11(data_year){return(
delete data_year[null]
)}

function _data_prod(groupBy,data){return(
groupBy(data, 'Production Company')
)}

function _13(data_prod){return(
delete data_prod[null]
)}

function _margin(){return(
{top: 20, right: 30, bottom: 30, left: 40}
)}

function _width(){return(
650
)}

function _height(){return(
400
)}

function _17(md){return(
md`# Popular Locations for Movies`
)}

function _donut_chart(DonutChart,loc_arr){return(
DonutChart(loc_arr, {
  name: d => d.loc,
  value: d => d.val,
  width:1024,
  height: 400
})
)}

function _19(md){return(
md`#### The above donut chart shows the popular movie filming locations in between the years 1900-2023. The chart contains information about all locations that have atleast 10 movies filmed. As expected, Golden Gate Bridge is the most popular filming location in San Francisco given its iconic architecture and history. City Hall and Fairmont Hotel are a close second and third which I believe could be due to their unique and intricate architecture thus producing a most aesthetic movie scene.`
)}

function _20(md){return(
md`---------------------------------------------------------------------------------------------------------------------------------------`
)}

function _21(md){return(
md`# Number of Movies filmed in SF over Time`
)}

function _scatter_chart_movie(vl,mv_yr_arr){return(
vl.markPoint()
  .data(mv_yr_arr)
  .encode(
    vl.x().fieldQ("year").scale({zero: false})
          .title('Year'),
    vl.y().fieldQ("mv_count")
          .title('Number of Movies'),
    vl.tooltip().fieldQ("year"),
    vl.color().fieldQ("mv_count").title('Legend')
  )
  .width(500)
  .height(300)
  .render()
)}

function _23(md){return(
md`#### The above scatter plot depicts the number of movies filmed in San Francisco over a period of time (1900-2023). We see an erratic but a graduate increase in the movies but observe a sudden dip in 2007-2008. Upon research, it was seen that a recession occurred during that period causing the cost of living in California to go up significantly. Simultaneously, there was a decline in jobs in the movie industry. All these factors combined, may have caused production houses to move filming locations elsewhere. A lot of movies moved their filming location to Los Angeles instead. The next sharp decline was observed in 2020 which is mostly due to the COVID-19 pandemic. `
)}

function _scatter_chart_location(vl,locationArr){return(
vl.markCircle()
  .data(locationArr)
  .encode(
    vl.x().fieldQ("year").scale({zero: false})
          .title('Year'),
    vl.y().fieldN("location")
          .title('Filming Locations'),
    vl.tooltip().fieldQ("year"),
    vl.color().fieldN("location").title('Legend')
  )
  .width(500)
  .height(300)
  .render()
)}

function _25(md){return(
md`#### The above scatter plot shows the popularity of the top 8 filming locations in San Francisco over time. Based on the plot, we observe that Golden Gate, Coit Tower and Fairmont Hotel are consistently popular throughout the years (1900-2021). City Hall gained popularity from the 1970s and Treasure Island has been a significant filming spot from the late 1990s onwards.`
)}

function _26(md){return(
md`---------------------------------------------------------------------------------------------------------------------------------------`
)}

function _27(md){return(
md`# Locations Favored by Top Production Companies`
)}

function _stackedbar_chart(vl,prodlocCount){return(
vl.markBar()
  .data(prodlocCount)
  .encode(
    vl.x().fieldN("production")
          .title('Production Companies'),
    vl.y().fieldQ("count")
          .title('Frequency of Location used'),
    vl.tooltip().fieldQ("count"),
    vl.color().fieldN("location").title('Legend')
    )
  .width(600)
  .height(500)
  .render()
)}

function _29(md){return(
md`#### The above stacked bar chart shows the top 8 production companies and how often they use the top filming locations at SF (data obtained from the donut chart). The hypothesis is that well established production companies with higher budgets can choose to film movies in more locations and generally pick the most popular ones. As observed, the top two are Paramount Pictures and Warner Bros. Pictures, both of which are amongst the top production studios from a monetary and success perspective.`
)}

function _30(md){return(
md`---------------------------------------------------------------------------------------------------------------------------------------`
)}

function _31(md){return(
md`# Appendix`
)}

function _32(md){return(
md`#### Data Processing for Donut Chart`
)}

function _loc_arr(){return(
[]
)}

function _d3tip(require){return(
require("d3-tip")
)}

function _35(data_loc,loc_arr){return(
Object.keys(data_loc).forEach((key, index) => {
  var locLength = data_loc[key].length
  if (locLength >= 10) {
  let loc_obj = {
    loc: key,
    val: data_loc[key].length
  }
  loc_arr.push(loc_obj)
  }
})
)}

function _DonutChart(d3,d3tip){return(
function DonutChart(data, {
  name = ([x]) => x,  // given d in data, returns the (ordinal) label
  value = ([, y]) => y, // given d in data, returns the (quantitative) value
  title, // given d in data, returns the title text
  width = 640, // outer width, in pixels
  height = 400, // outer height, in pixels
  innerRadius = Math.min(width, height) / 3, // inner radius of pie, in pixels (non-zero for donut)
  outerRadius = Math.min(width, height) / 2, // outer radius of pie, in pixels
  labelRadius = (innerRadius + outerRadius) / 2, // center radius of labels
  format = ",", // a format specifier for values (in the label)
  names, // array of names (the domain of the color scale)
  colors, // array of colors for names
  stroke = innerRadius > 0 ? "none" : "white", // stroke separating widths
  strokeWidth = 1, // width of stroke separating wedges
  strokeLinejoin = "round", // line join of stroke separating wedges
  padAngle = stroke === "none" ? 1 / outerRadius : 0, // angular separation between wedges
} = {}) {
  // Compute values.
  const N = d3.map(data, name);
  const V = d3.map(data, value);
  const I = d3.range(N.length).filter(i => !isNaN(V[i]));

  // Unique the names.
  if (names === undefined) names = N;
  names = new d3.InternSet(names);

  // Chose a default color scheme based on cardinality.
  if (colors === undefined) colors = d3.schemeSpectral[names.size];
  if (colors === undefined) colors = d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), names.size);

  // Construct scales.
  const color = d3.scaleOrdinal(names, colors);

  const tooltip = d3tip()
    .style("background-color", "white")
    .style("padding", "0.5em")
    .style("box-shadow", "0 3px 4px rgba(0, 0, 0, 0.2)")
    .style("border-radius", "10px")
    .style("float", "left")
    .attr("class", "tooltip")
    .html(
      (event, d) => `
      <div style='float: right'>
         ${d} 
      </div>`
    );
  
  // Compute titles.
  if (title === undefined) {
    const formatValue = d3.format(format);
    title = i => `${N[i]}\n${formatValue(V[i])}`;
  } else {
    const O = d3.map(data, d => d);
    const T = title;
    title = i => T(O[i], i, data);
  }

  // Construct arcs.
  const arcs = d3.pie().padAngle(padAngle).sort(null).value(i => V[i])(I);
  const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);
  const arcLabel = d3.arc().innerRadius(labelRadius).outerRadius(labelRadius);
  
  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width*0.6, -height / 2, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;");
  svg.call(tooltip);
  svg.append("g")
      .attr("stroke", stroke)
      .attr("stroke-width", strokeWidth)
      .attr("stroke-linejoin", strokeLinejoin)
    .selectAll("path")
    .data(arcs)
    .join("path")
      .attr("fill", d => color(N[d.data]))
      .attr("d", arc)
    .append("title")
      .text(d => title(d.data));
  svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 8)
      .attr("text-anchor", "middle")
    .selectAll("text")
    .data(arcs)
    .join("text")
      .attr("transform", d => `translate(${arcLabel.centroid(d)})`)
    .selectAll("tspan")
    .data(d => {
      const lines = `${title(d.data)}`.split(/\n/);
      return (d.endAngle - d.startAngle) > 0.25 ? lines : lines.slice(0, 1);
    })
    .join("tspan")
      .attr("x", 0)
      .attr("y", (_, i) => `${i * 1.1}em`)
      .attr("font-weight", (_, i) => i ? null : "bold")
      .attr('opacity','0')
      .text(d => d)
    .on("mouseover", tooltip.show)
    .on("mouseout", tooltip.hide);

  var legend = svg.selectAll(".legend")
        .data(arcs)
        .enter()
        .append("g")
        .attr("transform", function(d,i){
            return "translate(" + (-550) + "," + (i * 15 + 30) + ")";
        })
        .attr("class", "legend");  

  legend.append("rect")
      .attr("width", 5)
      .attr("height", 10)
      .attr("fill",  function(d) { 
        console.log(title(d.data));
      return color(title(d.data)); 
      });
    
        legend.append("text")
      .text(function(d){ 
        return title(d.data).split(/\n/)[0];
      })
      .style("font-size", 12)
      .attr("y", 10)
      .attr("x", 11);
  
  
  
  return Object.assign(svg.node(), {scales: {color}});
}
)}

function _38(md){return(
md`#### Data Processing for Scatter Plot for multiple movies `
)}

function _movie_arr(){return(
[]
)}

function _mv_yr_arr(){return(
[]
)}

function _41(data_movie,movie_arr){return(
Object.keys(data_movie).forEach((key, index) => {
    let movie_obj = {
      movie: key,
      location: data_movie[key][0]['Locations'],
      year: data_movie[key][0]['Release Year'],
    }
      movie_arr.push(movie_obj)
    })
)}

function _movie_year(groupBy,movie_arr){return(
groupBy(movie_arr, 'year')
)}

function _43(movie_year,mv_yr_arr){return(
Object.keys(movie_year).forEach((key, index) => {
  let mv_yr_obj = {
    year: key,
    mv_count: movie_year[key].length
  }
  mv_yr_arr.push(mv_yr_obj)
})
)}

function _44(md){return(
md`#### Data Processing for Scatter Plot for multiple Locations `
)}

function _locationArr(){return(
[]
)}

function _46(data_loc,locationArr){return(
Object.keys(data_loc).forEach((key, index) => {
  Object.keys(data_loc[key]).forEach((key1, index1) => {
    if (((data_loc[key][key1]['Locations'] == 'Treasure Island') || (data_loc[key][key1]['Locations'] == 'Coit Tower') || (data_loc[key][key1]['Locations'] == 'City Hall') || (data_loc[key][key1]['Locations'] == 'Fairmont Hotel (950 Mason Street, Nob Hill)') || (data_loc[key][key1]['Locations'] == 'Golden Gate Bridge') || (data_loc[key][key1]['Locations'] == 'Chinatown') || (data_loc[key][key1]['Locations'] == "St. Peter & Paul's Church (666 Filbert Street, Washington Square)") || (data_loc[key][key1]['Locations'] == 'Palace of Fine Arts (3301 Lyon Street)') )) {
  let locationObj = {
    location: key,
    year: data_loc[key][key1]['Release Year']
  }
  locationArr.push(locationObj)
    }
  })
})
)}

function _47(md){return(
md`#### Data Processing for Stacked Bar Graph `
)}

function _popularProduction(){return(
[]
)}

function _49(data_prod,popularProduction){return(
Object.keys(data_prod).forEach((key, index) => {
  if (data_prod[key].length >= 30) {
    Object.keys(data_prod[key]).forEach((key1, index1) => {
      if ((data_prod[key][key1]['Locations'] != null) & ((data_prod[key][key1]['Locations'] == 'Treasure Island') || (data_prod[key][key1]['Locations'] == 'Coit Tower') || (data_prod[key][key1]['Locations'] == 'City Hall') || (data_prod[key][key1]['Locations'] == 'Fairmont Hotel (950 Mason Street, Nob Hill)') || (data_prod[key][key1]['Locations'] == 'Golden Gate Bridge') || (data_prod[key][key1]['Locations'] == 'Chinatown') || (data_prod[key][key1]['Locations'] == "St. Peter & Paul's Church (666 Filbert Street, Washington Square)") || (data_prod[key][key1]['Locations'] == 'Palace of Fine Arts (3301 Lyon Street)') )) {
    let popularProd = {
      location: data_prod[key][key1]['Locations'],
      production: key,
      year: data_prod[key][key1]['Release Year']
    }
    popularProduction.push(popularProd)}})
  }
})
)}

function _productionGroup(groupBy,popularProduction){return(
groupBy(popularProduction, "production")
)}

function _prodlocGroup(){return(
[]
)}

function _prodlocCount(){return(
[]
)}

function _53(productionGroup,groupBy,prodlocGroup){return(
Object.keys(productionGroup).forEach((key, index) => {
  let tempObj  ={
    production: key,
    new: groupBy(productionGroup[key], 'location')
  }
  prodlocGroup.push(tempObj)
})
)}

function _54(prodlocGroup)
{
  for (var i = 0; i < prodlocGroup.length; i++) {
    Object.keys(prodlocGroup[i]['new']).forEach((key, index) => {
    prodlocGroup[i]['new'][key] = prodlocGroup[i]['new'][key].length
  })
  }
}


function _55(prodlocGroup,prodlocCount){return(
Object.keys(prodlocGroup).forEach((key, index) => {
  Object.keys(prodlocGroup[key]['new']).forEach((key1, index1) => {
    let Obj = {
      production: prodlocGroup[key]['production'],
      location: key1,
      count: prodlocGroup[key]['new'][key1]
    }
    prodlocCount.push(Obj)
  })
})
)}

function _56(md){return(
md`# Bibliography`
)}

function _57(md){return(
md`https://d3-graph-gallery.com
https://github.com/bumbeishvili/d3-v6-tip
https://observablehq.com/@d3/pie-chart
https://observablehq.com/@d3/donut-chart
https://vega.github.io/vega-lite/examples/line.html
https://observablehq.com/@d3/scatterplot
https://observablehq.com/@observablehq/vega-lite
https://observablehq.com/@d3/stacked-bar-chart
https://vega.github.io/vega-lite/examples/stacked_bar_weather.html`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["Film_Locations_in_San_Francisco@3.csv", {url: new URL("./files/df48962514a50e8a79982ef63f99bdbac1b45e0996c4b8ffdbf9d36bfab2daec948c23073c916b8c3c5c74acd54baae71e30cc8a97503c96ecef541ced4f4ec3.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer()).define(["require"], _3);
  main.variable(observer("data")).define("data", ["d3","FileAttachment"], _data);
  main.variable(observer("groupBy")).define("groupBy", _groupBy);
  main.variable(observer("data_loc")).define("data_loc", ["groupBy","data"], _data_loc);
  main.variable(observer()).define(["data_loc"], _7);
  main.variable(observer("data_movie")).define("data_movie", ["groupBy","data"], _data_movie);
  main.variable(observer()).define(["data_movie"], _9);
  main.variable(observer("data_year")).define("data_year", ["groupBy","data"], _data_year);
  main.variable(observer()).define(["data_year"], _11);
  main.variable(observer("data_prod")).define("data_prod", ["groupBy","data"], _data_prod);
  main.variable(observer()).define(["data_prod"], _13);
  main.variable(observer("margin")).define("margin", _margin);
  main.variable(observer("width")).define("width", _width);
  main.variable(observer("height")).define("height", _height);
  main.variable(observer()).define(["md"], _17);
  main.variable(observer("donut_chart")).define("donut_chart", ["DonutChart","loc_arr"], _donut_chart);
  main.variable(observer()).define(["md"], _19);
  main.variable(observer()).define(["md"], _20);
  main.variable(observer()).define(["md"], _21);
  main.variable(observer("viewof scatter_chart_movie")).define("viewof scatter_chart_movie", ["vl","mv_yr_arr"], _scatter_chart_movie);
  main.variable(observer("scatter_chart_movie")).define("scatter_chart_movie", ["Generators", "viewof scatter_chart_movie"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _23);
  main.variable(observer("viewof scatter_chart_location")).define("viewof scatter_chart_location", ["vl","locationArr"], _scatter_chart_location);
  main.variable(observer("scatter_chart_location")).define("scatter_chart_location", ["Generators", "viewof scatter_chart_location"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _25);
  main.variable(observer()).define(["md"], _26);
  main.variable(observer()).define(["md"], _27);
  main.variable(observer("viewof stackedbar_chart")).define("viewof stackedbar_chart", ["vl","prodlocCount"], _stackedbar_chart);
  main.variable(observer("stackedbar_chart")).define("stackedbar_chart", ["Generators", "viewof stackedbar_chart"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _29);
  main.variable(observer()).define(["md"], _30);
  main.variable(observer()).define(["md"], _31);
  main.variable(observer()).define(["md"], _32);
  main.variable(observer("loc_arr")).define("loc_arr", _loc_arr);
  main.variable(observer("d3tip")).define("d3tip", ["require"], _d3tip);
  main.variable(observer()).define(["data_loc","loc_arr"], _35);
  main.variable(observer("DonutChart")).define("DonutChart", ["d3","d3tip"], _DonutChart);
  const child1 = runtime.module(define1);
  main.import("vl", child1);
  main.variable(observer()).define(["md"], _38);
  main.variable(observer("movie_arr")).define("movie_arr", _movie_arr);
  main.variable(observer("mv_yr_arr")).define("mv_yr_arr", _mv_yr_arr);
  main.variable(observer()).define(["data_movie","movie_arr"], _41);
  main.variable(observer("movie_year")).define("movie_year", ["groupBy","movie_arr"], _movie_year);
  main.variable(observer()).define(["movie_year","mv_yr_arr"], _43);
  main.variable(observer()).define(["md"], _44);
  main.variable(observer("locationArr")).define("locationArr", _locationArr);
  main.variable(observer()).define(["data_loc","locationArr"], _46);
  main.variable(observer()).define(["md"], _47);
  main.variable(observer("popularProduction")).define("popularProduction", _popularProduction);
  main.variable(observer()).define(["data_prod","popularProduction"], _49);
  main.variable(observer("productionGroup")).define("productionGroup", ["groupBy","popularProduction"], _productionGroup);
  main.variable(observer("prodlocGroup")).define("prodlocGroup", _prodlocGroup);
  main.variable(observer("prodlocCount")).define("prodlocCount", _prodlocCount);
  main.variable(observer()).define(["productionGroup","groupBy","prodlocGroup"], _53);
  main.variable(observer()).define(["prodlocGroup"], _54);
  main.variable(observer()).define(["prodlocGroup","prodlocCount"], _55);
  main.variable(observer()).define(["md"], _56);
  main.variable(observer()).define(["md"], _57);
  return main;
}
