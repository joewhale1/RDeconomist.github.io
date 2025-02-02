var Chart6 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "description": "Coronavirus cases",
  "data": {
    "url": "https://api.coronavirus.data.gov.uk/v2/data?areaType=region&metric=newCasesBySpecimenDateRollingSum&format=csv",
    "format": {"type": "csv"}
  },
  "height": 400,
  "width": "container",
  "config": {"background": "#FcFdFd"},
  "mark": {"type": "line", "point": false},
  "selection": {
    "region": {"type": "multi", "fields": ["areaName"], "bind": "legend"}
  },
  "transform": [
    
    {
      "filter": {
        "field": "date",
        "range": [
          {"year": 2020, "month": "mar", "date": 1},
          {"year": 2020, "month": "dec", "date": 30}
        ]
      }
    }
  ],
  "encoding": {
    "x": {"field": "date", "type": "temporal", "title": "Date"},
    "y": {
      "field": "newCasesBySpecimenDateRollingSum",
      "type": "quantitative",
      "title": "New cases (rolling sum)"
    },
    "color": {
      "field": "areaName",
      "type": "nominal",
      "scale": {"scheme": "set1"},
      "title": "Region",
      "legend": {"orient": "top-left", "fillColor": "#FcFdFd"}
    },
    "opacity": {"condition": {"selection": "region", "value": 1}, "value": 0.1},
    "tooltip": [
      {"field": "date", "type": "temporal", "title": "Date"},
      {"field": "areaName", "type": "nominal", "title": "Region"},
      {
        "field": "rolling_mean",
        "type": "nominal",
        "title": "Cases 14-day avg",
        "format": ".0f"
      },
      {
        "field": "newCasesBySpecimenDate",
        "type": "nominal",
        "title": "New cases"
      }
    ]
  }
};

vegaEmbed('#vis6', Chart6);
