# ol-Measurements
A set of tools for measuring lengths and areas on an [OpenLayers](http://openlayers.org) map:
* **olms.Measurement** A generic measurement class
* **olms.DistanceMeasurement** For measuring distance between two points
* **olms.RangeMeasurement** For measuring distance between two points, highlighting a circular range of area of the same distance
* **olms.PathMeasurement** For measuring the length of continuous line segments
* **olms.AreaMeasurement** For measuring area by drawing a polygon

A major part of the code in this library has been picked from the [OpenLayers v4.6.4 Measure Example](http://openlayers.org/en/v4.6.4/examples/measure.html).

As of date, ol-Measurements has been tested with OpenLayers 4.6.4, but should work with later releases unless there are major changes in how vector layers and interactions have been defined - something that we do not expect to happen. In case you do not find it working with any particular release of OpenLayers, please create a new issue as described in the **Bugs** section below.

## Usage

### Dependency
As is evident, applications using ol-Measurements also need to load OpenLayers resources:
```html
<link rel="stylesheet" href="https://openlayers.org/en/v4.6.4/css/ol.css" type="text/css">
<script src="https://openlayers.org/en/v4.6.4/build/ol.js" type="text/javascript"></script>
```
As of date, ol-Measurements has been tested with OpenLayers 4.6.4, but should work with later releases unless there are major changes in how vector layers and image layers are manipulated, or how layers are added to the map - something that we do not expect to happen. In case you do not find it working with any particular release of OpenLayers, please create a new issue as described in the **Bugs** section below.

### Getting started

To obtain ol-Measurements, either download a [release](https://github.com/shyam-dasgupta/ol-measurements/releases), or clone the repository:

    $ git clone --recursive https://github.com/shyam-dasgupta/ol-measurements.git
    
Load the library into your HTML:

```html
<link rel="stylesheet" href="ol-measurements.css" type="text/css">
<script src="ol-measurements.js" type="text/javascript"></script>
```

For more details on using the various measurement classes, please refer to the [API Documentation](https://github.com/shyam-dasgupta/ol-measurements/blob/master/API.md).

### Running the unminified version of ol-Measurements

Load the debug library instead into your HTML:

```html
<script src="ol-measurements.js" type="text/javascript"></script>
```

## API Documentation
The complete API documentation is available [here](https://github.com/shyam-dasgupta/ol-measurements/blob/master/API.md).

## Bugs
Please use the [GitHub issue tracker](https://github.com/shyam-dasgupta/ol-measurements/issues) for all bugs and feature requests. Before creating a new issue, do a quick search to see if the problem has been reported already.


## License
MIT license
