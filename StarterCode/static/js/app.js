d3.json("samples.json").then (incomingData =>{
   // console.log(incomingData)
    var ids = incomingData.samples[0].otu_ids;
    //console.log(ids)
    var sampleValues =  incomingData.samples[0].sample_values.slice(0,10).reverse();
    //console.log(sampleValues)
    var labels =  incomingData.samples[0].otu_labels.slice(0,10);
   // console.log (labels)
    var OTU_top = ( incomingData.samples[0].otu_ids.slice(0, 10)).reverse();
    var OTU_id = OTU_top.map(d => "OTU " + d);
   // console.log(`OTU IDS: ${OTU_id}`)
    var labels =  incomingData.samples[0].otu_labels.slice(0,10);
   // console.log(`OTU_labels: ${labels}`)
    var trace = {
        x: sampleValues,
        y: OTU_id,
        text: labels,
        marker: {
        color: 'blue'},
        type:"bar",
        orientation: "h",
    };
    var data = [trace];
    var layout = {
        title: "Top 10 OTUs Found",
        yaxis:{
            tickmode:"linear",
        },
        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 30
        }
    };
Plotly.newPlot("bar", data, layout);
    var trace1 = {
        x: incomingData.samples[0].otu_ids,
        y: incomingData.samples[0].sample_values,
        mode: "markers",
        marker: {
            size: incomingData.samples[0].sample_values,
            color: incomingData.samples[0].otu_ids
        },
        text:  incomingData.samples[0].otu_labels

    };
    var trace2 = {
        xaxis:{title: "OTU ID"},
        height: 600,
        width: 1000
    };
    var data1 = [trace1];
Plotly.newPlot("bubble", data1, trace2); 

});

function demoData(id) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        //console.log(metadata)
       var sampleData = metadata.filter(sample => sample.id === id)[0];
        console.log(sampleData)
        var selector = d3.select("#sample-metadata");
        selector.html("");
        Object.entries(sampleData).forEach(([key, value]) => {selector.append("p").text(`${key}: ${value}`)

        });
            
        });
      
    };
demoData(940);

var cellData = d3.select("#selDataset")
d3.json("samples.json").then((data) => {
   var options = data.names 
   options.forEach((sample) => {
       cellData.append("option").text(sample).property("value", sample)
   });
});

function optionChanged(newID) {
    d3.json("samples.json").then (data =>{
        var samples = data.samples[0];
        var incomingData=data.samples.filter(sample =>sample.id === newID)
        console.log(incomingData)
         var ids = incomingData.otu_ids;
         //console.log(ids)
         var sampleValues =  incomingData.sample_values.slice(0,10).reverse();
         //console.log(sampleValues)
         var labels =  incomingData.otu_labels.slice(0,10);
        // console.log (labels)
         var OTU_top = ( incomingData.otu_ids.slice(0, 10)).reverse();
         var OTU_id = OTU_top.map(d => "OTU " + d);
        // console.log(`OTU IDS: ${OTU_id}`)
         var labels =  incomingData.otu_labels.slice(0,10);
        // console.log(`OTU_labels: ${labels}`)
         var trace = {
             x: sampleValues,
             y: OTU_id,
             text: labels,
             marker: {
             color: 'blue'},
             type:"bar",
             orientation: "h",
         };
         var data = [trace];
         var layout = {
             title: "Top 10 OTUs Found",
             yaxis:{
                 tickmode:"linear",
             },
             margin: {
                 l: 100,
                 r: 100,
                 t: 100,
                 b: 30
             }
         };
     Plotly.newPlot("bar", data, layout);
         var trace1 = {
             x: incomingData.otu_ids,
             y: incomingData.sample_values,
             mode: "markers",
             marker: {
                 size: incomingData.samples[0].sample_values,
                 color: incomingData.samples[0].otu_ids
             },
             text:  incomingData.samples[0].otu_labels
     
         };
         var trace2 = {
             xaxis:{title: "OTU ID"},
             height: 600,
             width: 1000
         };
         var data1 = [trace1];
     Plotly.newPlot("bubble", data1, trace2); 
     
     });
   demoData(newID);
}
