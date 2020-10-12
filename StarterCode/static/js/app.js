//Bring in data from JSON file and create a function to separate out useful variables
d3.json("./static/js/samples.json").then((data) => {
        var sample = data.samples
        var x= []
        var y= []
        var text_values=[]
       
           sample.forEach(s => {
           x.push(s.otu_ids[1]);
           text_values.push(s.otu_labels[2]);
            y.push(s.sample_values[3])
        })

    // console.log(data)
    // console.log(x)
    // console.log(y)
    // console.log(text_values)

var top_Ten = x.slice(0,11);

var d0 = [{
    type: 'bar',
    x: top_Ten,
    y:text_values,
    orientation: 'h',
    
    
}];

Plotly.newPlot('bar',d0);

//Create Bubble Chart
        var trace1 = {
            x:x,
            y:y,
            mode:'markers',
            marker: {
                color:x,
                size:y},
            text:text_values
        };
        var d1 = [trace1];
        
        var layout = {
            title: 'Bellybutton Biodiversity', 
            showledgend: false,
            height: 600,
            width: 600 
        };
        
        Plotly.newPlot('bubble',d1,layout);
 

    })
