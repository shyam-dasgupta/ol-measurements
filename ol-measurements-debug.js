/**
 * Created by Shyam on 1/25/2018.
 */

/**
 * @namespace
 */
olms = {};

/**
 * Options for constructing a measurement.
 * @typedef {Object} olms.IOptions
 * @property {string} [msgstart='Click to start measuring'] The message showed on the pointer before
 * measuring begins.
 * @property {string} [msgcont='Click to continue, double-click (slow or fast) to end'] The message showed
 * on the pointer after measuring has begun, but not yet complete.
 * @property {ol.proj.Units} [units='m'] The units to measure.
 * @property {ol.style.Style | Array.<ol.style.Style> | ol.StyleFunction} [style] Style for sketch features.
 * @property {function()} [onMeasureInit] Called when the measurement tool has been initiated with the
 * <code>{@link olms.Measurement#start}()</code> method.
 * @property {function} [onMeasureStart] Called when the measurement has been initiated, i.e. the user
 * has clicked on the map with the tool.
 * @property {function(meters:number)} [onMeasured] Called when a length has been measured.
 * @property {function()} [onMeasureEnd] Called when the measurement tool is finished and removed from the map.
 * @property {function()} [onMeasureDeinit] Called when the measurement tool has been terminated with the
 * <code>{@link olms.Measurement#stop}()</code> method.
 */

/**
 * @classdesc A generic measurement tool that adds interactions to the map for measuring distances and areas.
 *
 * @param {ol.Map} map The map instance.
 * @param {olms.IOptions} [options] Options.
 * @param {object} [drawOptions] Options for creating the <code>{@link ol.interaction.Draw}</code>.
 * @param {boolean} [isArea=false] Whether the tool measures lengths or areas.
 * @constructor
 */
olms.Measurement = function (map, options, drawOptions, isArea) {
    options = Object.assign({}, options);
    drawOptions = Object.assign({}, drawOptions);

    var _this = this;

    /**
     * @type {ol.interaction.Draw}
     * @private
     */
    var _measureResolutionInteraction;

    /**
     * Returns the draw interaction used for measuring on map.
     * @return {ol.interaction.Draw}
     */
    this.getMeasurementInteraction = function () {
        return _measureResolutionInteraction;
    };

    /**
     * @type {ol.layer.Vector}
     * @private
     */
    var _measureLayer;

    /**
     * Returns the vector layer that contains the features generated on map by this tool.
     * @return {ol.layer.Vector}
     */
    this.getMeasurementVectorLayer = function () {
        return _measureLayer;
    };

    /**
     * Currently drawn feature.
     * @type {ol.Feature}
     * @private
     */
    var _sketch;

    /**
     * The help tooltip element.
     * @type {Element}
     * @private
     */
    var _helpTooltipElement;

    /**
     * Overlay to show the help messages.
     * @type {ol.Overlay}
     * @private
     */
    var _helpTooltip;

    /**
     * Overlay to show the measurement.
     * @type {ol.Overlay}
     * @private
     */
    var _measureTooltip;

    /**
     * The measure tooltip element.
     * @type {Element}
     * @private
     */
    var _measureTooltipElement;

    options.msgstart = options.msgstart || 'Click to start measuring';
    options.msgcont = options.msgcont || 'Click to continue, double-click (slow or fast) to end';
    options.style = options.style || drawOptions.style || new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255, 255, 255, 0.2)'
            }),
            stroke: new ol.style.Stroke({
                color: 'rgba(0, 0, 0, 0.5)',
                lineDash: [10, 10],
                width: 2
            }),
            image: new ol.style.Circle({
                radius: 5,
                stroke: new ol.style.Stroke({
                    color: 'rgba(0, 0, 0, 0.7)'
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.2)'
                })
            })
        });
    drawOptions.style = options.style;
    options.units = options.units || ol.proj.Units.METERS;

    /**
     * Gets the message showed on the pointer before measuring begins.
     * @return {string}
     */
    this.getContinueMessage = function () {
        return options.msgcont;
    };
    /**
     * Sets the message showed on the pointer before measuring begins.
     * @param {string} msgcont
     */
    this.getContinueMessage = function (msgcont) {
        return options.msgcont = msgcont;
    };
    /**
     * Gets the message showed on the pointer before measuring begins.
     * @return {string}
     */
    this.getStartMessage = function () {
        return options.msgstart;
    };
    /**
     * Sets the message showed on the pointer before measuring begins.
     * @param {string} msgstart
     */
    this.setStartMessage = function (msgstart) {
        return options.msgstart = msgstart;
    };
    /**
     * Gets the style for sketch features.
     * @return {ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction}
     */
    this.getStyle = function () {
        return options.style;
    };
    /**
     * Sets the style for sketch features.
     * @param {ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction} style
     */
    this.setStyle = function (style) {
        options.style = style;
    };
    /**
     * Gets the units used.
     * @return {ol.proj.Units}
     */
    this.getUnits = function () {
        return options.units;
    };
    /**
     * Sets the units to use.
     * @param {ol.proj.Units} units
     */
    this.setUnits = function (units) {
        options.units = units;
    };

    /**
     * @param {ol.MapBrowserEvent} evt The event.
     * @private
     */
    function _pointerMoveHandler(evt) {
        if (evt.dragging) {
            return;
        }

        /*if (sketch) {
         // var geom = sketch.getGeometry(); // geom instanceof ol.geom.LineString
         }*/

        _helpTooltipElement.innerHTML = _sketch ? options.msgcont : options.msgstart;
        _helpTooltip.setPosition(evt.coordinate);

        _helpTooltipElement.classList.remove('hidden');
    }

    function _mouseoutHandler(evt) {
        _helpTooltipElement.classList.add('hidden');
    }

    function _createMeasureTooltip() {
        if (_measureTooltipElement) {
            _measureTooltipElement.parentNode.removeChild(_measureTooltipElement);
        }
        _measureTooltipElement = document.createElement('div');
        _measureTooltipElement.className = 'tooltip tooltip-measure';
        _measureTooltip = new ol.Overlay({
            element: _measureTooltipElement,
            offset: [0, -15],
            positioning: 'bottom-center'
        });
        map.addOverlay(_measureTooltip);
    }

    function _createHelpTooltip() {
        if (_helpTooltipElement) {
            _helpTooltipElement.parentNode.removeChild(_helpTooltipElement);
        }
        _helpTooltipElement = document.createElement('div');
        _helpTooltipElement.className = 'tooltip hidden';
        _helpTooltip = new ol.Overlay({
            element: _helpTooltipElement,
            offset: [15, 0],
            positioning: 'center-left'
        });
        map.addOverlay(_helpTooltip);
    }

    function _finishMeasure(isContin) {
        if (!isContin && _measureLayer) {
            map.removeLayer(_measureLayer);
            _measureLayer = null;
            delete drawOptions.source;
        }
        if (!isContin && _measureTooltipElement) {
            _measureTooltipElement.parentNode.removeChild(_measureTooltipElement);
            _measureTooltipElement = null;
        }
        if (_helpTooltipElement) {
            _helpTooltipElement.parentNode.removeChild(_helpTooltipElement);
            _helpTooltipElement = null;
        }
        if (_measureResolutionInteraction) {
            map.removeInteraction(_measureResolutionInteraction);
            _measureResolutionInteraction = null;
            if (options.onMeasureEnd) options.onMeasureEnd();
        }
        if (!isContin && options.onMeasureDeinit) options.onMeasureDeinit();
        map.un('pointermove', _pointerMoveHandler);
        map.getViewport().removeEventListener('mouseout', _mouseoutHandler);
    }

    /**
     * Closes the measurement tool.
     */
    this.end = function () {
        _finishMeasure();
    };

    /**
     * Opens the tool for measurement, modifying the mouse pointer for appropriate indication.
     */
    this.start = function () {
        if (_measureResolutionInteraction) return;
        _finishMeasure();
        _measureLayer = new ol.layer.Vector({source: new ol.source.Vector()});
        map.addLayer(_measureLayer);
        drawOptions.source = _measureLayer.getSource();
        _measureResolutionInteraction = new ol.interaction.Draw(drawOptions);
        map.addInteraction(_measureResolutionInteraction);
        if (options.onMeasureInit) options.onMeasureInit();

        _createMeasureTooltip();
        _createHelpTooltip();

        var measuredValue = 0;
        var listener;
        _measureResolutionInteraction.on('drawstart', function (evt) {
            if (options.onMeasureStart) options.onMeasureStart();

            // clear any previous measures
            _measureLayer.getSource().clear();
            /**
             * Currently drawn feature.
             * @type {ol.Feature}
             */
            _sketch = evt.feature;
            listener = _sketch.getGeometry().on('change', function (evt) {
                /**
                 * @type {ol.geom.SimpleGeometry}
                 */
                var geom = evt.target;
                measuredValue = isArea ? ol.Sphere.getArea(geom) : ol.Sphere.getLength(geom);
                measuredValue = measuredValue / ol.proj.Units.METERS_PER_UNIT[options.units];
                if (isArea) measuredValue = measuredValue / ol.proj.Units.METERS_PER_UNIT[options.units];
                _measureTooltipElement.innerHTML = measuredValue.toFixed(2) + (isArea ? " sq " : " ") + options.units;
                _measureTooltip.setPosition(geom.getLastCoordinate());
            });
        }, this);
        _measureResolutionInteraction.on('drawend', function () {
            _measureTooltipElement.className = 'tooltip tooltip-static';
            _measureTooltipElement.onclick = _this.end;
            _measureTooltip.setOffset([0, -7]);
            _sketch = null;
            ol.Observable.unByKey(listener);
            _finishMeasure(true);
            if (options.onMeasured) options.onMeasured(measuredValue);
        }, this);

        map.on('pointermove', _pointerMoveHandler);
        map.getViewport().addEventListener('mouseout', _mouseoutHandler);
    };

};

/**
 * Measures the distance between two points.
 * @param {ol.Map} map The map instance.
 * @param {olms.IOptions} [options]
 * @constructor
 * @extends {olms.Measurement}
 */
olms.DistanceMeasurement = function (map, options) {
    options = options || {};
    options.msgcont = options.msgcont || 'Click again to finish measurement';
    olms.Measurement.call(this, map, options, {type: 'LineString', minPoints: 2, maxPoints: 2});
};
/**
 * Measures the distance between two points, showing the entire coverage as a circle
 * with the first point as the center and the distance as the radius.
 * @param {ol.Map} map The map instance.
 * @param {olms.IOptions} [options]
 * @constructor
 * @extends {olms.DistanceMeasurement}
 */
olms.RangeMeasurement = function (map, options) {
    options = Object.assign({}, options);
    var _this = this;

    var _rangeCircle;
    var _circleDrawOptions = {type: 'Circle', minPoints: 2, maxPoints: 2};

    function _onMeasureInit() {
        _circleDrawOptions.source = _this.getMeasurementVectorLayer().getSource();
        _rangeCircle = new ol.interaction.Draw(_circleDrawOptions);
        map.addInteraction(_rangeCircle);
    }

    function _onMeasureDeinit() {
        map.removeInteraction(_rangeCircle);
        _rangeCircle = null;
    }

    if (options.onMeasureInit) {
        var _actualInit = options.onMeasureInit;
        options.onMeasureInit = function () {
            _onMeasureInit();
            _actualInit();
        }
    }
    else options.onMeasureInit = _onMeasureInit;
    if (options.onMeasureDeinit) {
        var _actualDeinit = options.onMeasureDeinit;
        options.onMeasureDeinit = function () {
            _onMeasureDeinit();
            _actualDeinit();
        }
    }
    else options.onMeasureDeinit = _onMeasureDeinit;
    olms.SeparationMeasurement.call(this, map, options);
    _circleDrawOptions.style = this.getStyle();
};
/**
 * Measures the length of a path consisting of connected lines.
 *
 * @param {ol.Map} map The map instance.
 * @param {olms.IOptions} [options]
 * @constructor
 * @extends {olms.Measurement}
 */
olms.PathMeasurement = function (map, options) {
    olms.Measurement.call(this, map, options, {type: 'LineString'});
};
/**
 * Measures areas using polygons.
 *
 * @param {ol.Map} map The map instance.
 * @param {olms.IOptions} [options]
 * @constructor
 * @extends {olms.Measurement}
 */
olms.AreaMeasurement = function (map, options) {
    olms.Measurement.call(this, map, options, {type: 'Polygon'}, true);
};