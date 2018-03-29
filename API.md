<a name="olms"></a>

## olms : <code>object</code>
**Kind**: global namespace  

* [olms](#olms) : <code>object</code>
    * [.Measurement](#olms.Measurement)
        * [new olms.Measurement(map, [options], [drawOptions], [isArea])](#new_olms.Measurement_new)
        * [.getMeasurementInteraction()](#olms.Measurement+getMeasurementInteraction) ⇒ <code>ol.interaction.Draw</code>
        * [.getMeasurementVectorLayer()](#olms.Measurement+getMeasurementVectorLayer) ⇒ <code>ol.layer.Vector</code>
        * [.getContinueMessage()](#olms.Measurement+getContinueMessage) ⇒ <code>string</code>
        * [.getContinueMessage(msgcont)](#olms.Measurement+getContinueMessage)
        * [.getStartMessage()](#olms.Measurement+getStartMessage) ⇒ <code>string</code>
        * [.setStartMessage(msgstart)](#olms.Measurement+setStartMessage)
        * [.getStyle()](#olms.Measurement+getStyle) ⇒ <code>ol.style.Style</code> \| <code>Array.&lt;ol.style.Style&gt;</code> \| <code>ol.StyleFunction</code>
        * [.setStyle(style)](#olms.Measurement+setStyle)
        * [.getUnits()](#olms.Measurement+getUnits) ⇒ <code>ol.proj.Units</code>
        * [.setUnits(units)](#olms.Measurement+setUnits)
        * [.end()](#olms.Measurement+end)
        * [.start()](#olms.Measurement+start)
    * [.DistanceMeasurement](#olms.DistanceMeasurement) ⇐ [<code>Measurement</code>](#olms.Measurement)
        * [new olms.DistanceMeasurement(map, [options])](#new_olms.DistanceMeasurement_new)
        * [.getMeasurementInteraction()](#olms.Measurement+getMeasurementInteraction) ⇒ <code>ol.interaction.Draw</code>
        * [.getMeasurementVectorLayer()](#olms.Measurement+getMeasurementVectorLayer) ⇒ <code>ol.layer.Vector</code>
        * [.getContinueMessage()](#olms.Measurement+getContinueMessage) ⇒ <code>string</code>
        * [.getStartMessage()](#olms.Measurement+getStartMessage) ⇒ <code>string</code>
        * [.setStartMessage(msgstart)](#olms.Measurement+setStartMessage)
        * [.getStyle()](#olms.Measurement+getStyle) ⇒ <code>ol.style.Style</code> \| <code>Array.&lt;ol.style.Style&gt;</code> \| <code>ol.StyleFunction</code>
        * [.setStyle(style)](#olms.Measurement+setStyle)
        * [.getUnits()](#olms.Measurement+getUnits) ⇒ <code>ol.proj.Units</code>
        * [.setUnits(units)](#olms.Measurement+setUnits)
        * [.end()](#olms.Measurement+end)
        * [.start()](#olms.Measurement+start)
    * [.RangeMeasurement](#olms.RangeMeasurement) ⇐ [<code>DistanceMeasurement</code>](#olms.DistanceMeasurement)
        * [new olms.RangeMeasurement(map, [options])](#new_olms.RangeMeasurement_new)
        * [.getMeasurementInteraction()](#olms.Measurement+getMeasurementInteraction) ⇒ <code>ol.interaction.Draw</code>
        * [.getMeasurementVectorLayer()](#olms.Measurement+getMeasurementVectorLayer) ⇒ <code>ol.layer.Vector</code>
        * [.getContinueMessage()](#olms.Measurement+getContinueMessage) ⇒ <code>string</code>
        * [.getStartMessage()](#olms.Measurement+getStartMessage) ⇒ <code>string</code>
        * [.setStartMessage(msgstart)](#olms.Measurement+setStartMessage)
        * [.getStyle()](#olms.Measurement+getStyle) ⇒ <code>ol.style.Style</code> \| <code>Array.&lt;ol.style.Style&gt;</code> \| <code>ol.StyleFunction</code>
        * [.setStyle(style)](#olms.Measurement+setStyle)
        * [.getUnits()](#olms.Measurement+getUnits) ⇒ <code>ol.proj.Units</code>
        * [.setUnits(units)](#olms.Measurement+setUnits)
        * [.end()](#olms.Measurement+end)
        * [.start()](#olms.Measurement+start)
    * [.PathMeasurement](#olms.PathMeasurement) ⇐ [<code>Measurement</code>](#olms.Measurement)
        * [new olms.PathMeasurement(map, [options])](#new_olms.PathMeasurement_new)
        * [.getMeasurementInteraction()](#olms.Measurement+getMeasurementInteraction) ⇒ <code>ol.interaction.Draw</code>
        * [.getMeasurementVectorLayer()](#olms.Measurement+getMeasurementVectorLayer) ⇒ <code>ol.layer.Vector</code>
        * [.getContinueMessage()](#olms.Measurement+getContinueMessage) ⇒ <code>string</code>
        * [.getStartMessage()](#olms.Measurement+getStartMessage) ⇒ <code>string</code>
        * [.setStartMessage(msgstart)](#olms.Measurement+setStartMessage)
        * [.getStyle()](#olms.Measurement+getStyle) ⇒ <code>ol.style.Style</code> \| <code>Array.&lt;ol.style.Style&gt;</code> \| <code>ol.StyleFunction</code>
        * [.setStyle(style)](#olms.Measurement+setStyle)
        * [.getUnits()](#olms.Measurement+getUnits) ⇒ <code>ol.proj.Units</code>
        * [.setUnits(units)](#olms.Measurement+setUnits)
        * [.end()](#olms.Measurement+end)
        * [.start()](#olms.Measurement+start)
    * [.AreaMeasurement](#olms.AreaMeasurement) ⇐ [<code>Measurement</code>](#olms.Measurement)
        * [new olms.AreaMeasurement(map, [options])](#new_olms.AreaMeasurement_new)
        * [.getMeasurementInteraction()](#olms.Measurement+getMeasurementInteraction) ⇒ <code>ol.interaction.Draw</code>
        * [.getMeasurementVectorLayer()](#olms.Measurement+getMeasurementVectorLayer) ⇒ <code>ol.layer.Vector</code>
        * [.getContinueMessage()](#olms.Measurement+getContinueMessage) ⇒ <code>string</code>
        * [.getStartMessage()](#olms.Measurement+getStartMessage) ⇒ <code>string</code>
        * [.setStartMessage(msgstart)](#olms.Measurement+setStartMessage)
        * [.getStyle()](#olms.Measurement+getStyle) ⇒ <code>ol.style.Style</code> \| <code>Array.&lt;ol.style.Style&gt;</code> \| <code>ol.StyleFunction</code>
        * [.setStyle(style)](#olms.Measurement+setStyle)
        * [.getUnits()](#olms.Measurement+getUnits) ⇒ <code>ol.proj.Units</code>
        * [.setUnits(units)](#olms.Measurement+setUnits)
        * [.end()](#olms.Measurement+end)
        * [.start()](#olms.Measurement+start)
    * [.IOptions](#olms.IOptions) : <code>Object</code>

<a name="olms.Measurement"></a>

### olms.Measurement
A generic measurement tool that adds interactions to the map for measuring distances and areas.

**Kind**: static class of [<code>olms</code>](#olms)  

* [.Measurement](#olms.Measurement)
    * [new olms.Measurement(map, [options], [drawOptions], [isArea])](#new_olms.Measurement_new)
    * [.getMeasurementInteraction()](#olms.Measurement+getMeasurementInteraction) ⇒ <code>ol.interaction.Draw</code>
    * [.getMeasurementVectorLayer()](#olms.Measurement+getMeasurementVectorLayer) ⇒ <code>ol.layer.Vector</code>
    * [.getContinueMessage()](#olms.Measurement+getContinueMessage) ⇒ <code>string</code>
    * [.getContinueMessage(msgcont)](#olms.Measurement+getContinueMessage)
    * [.getStartMessage()](#olms.Measurement+getStartMessage) ⇒ <code>string</code>
    * [.setStartMessage(msgstart)](#olms.Measurement+setStartMessage)
    * [.getStyle()](#olms.Measurement+getStyle) ⇒ <code>ol.style.Style</code> \| <code>Array.&lt;ol.style.Style&gt;</code> \| <code>ol.StyleFunction</code>
    * [.setStyle(style)](#olms.Measurement+setStyle)
    * [.getUnits()](#olms.Measurement+getUnits) ⇒ <code>ol.proj.Units</code>
    * [.setUnits(units)](#olms.Measurement+setUnits)
    * [.end()](#olms.Measurement+end)
    * [.start()](#olms.Measurement+start)

<a name="new_olms.Measurement_new"></a>

#### new olms.Measurement(map, [options], [drawOptions], [isArea])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| map | <code>ol.Map</code> |  | The map instance. |
| [options] | [<code>IOptions</code>](#olms.IOptions) |  | Options. |
| [drawOptions] | <code>object</code> |  | Options for creating the <code>[ol.interaction.Draw](ol.interaction.Draw)</code>. |
| [isArea] | <code>boolean</code> | <code>false</code> | Whether the tool measures lengths or areas. |

<a name="olms.Measurement+getMeasurementInteraction"></a>

#### measurement.getMeasurementInteraction() ⇒ <code>ol.interaction.Draw</code>
Returns the draw interaction used for measuring on map.

**Kind**: instance method of [<code>Measurement</code>](#olms.Measurement)  
<a name="olms.Measurement+getMeasurementVectorLayer"></a>

#### measurement.getMeasurementVectorLayer() ⇒ <code>ol.layer.Vector</code>
Returns the vector layer that contains the features generated on map by this tool.

**Kind**: instance method of [<code>Measurement</code>](#olms.Measurement)  
<a name="olms.Measurement+getContinueMessage"></a>

#### measurement.getContinueMessage() ⇒ <code>string</code>
Gets the message showed on the pointer before measuring begins.

**Kind**: instance method of [<code>Measurement</code>](#olms.Measurement)  
<a name="olms.Measurement+getContinueMessage"></a>

#### measurement.getContinueMessage(msgcont)
Sets the message showed on the pointer before measuring begins.

**Kind**: instance method of [<code>Measurement</code>](#olms.Measurement)  

| Param | Type |
| --- | --- |
| msgcont | <code>string</code> | 

<a name="olms.Measurement+getStartMessage"></a>

#### measurement.getStartMessage() ⇒ <code>string</code>
Gets the message showed on the pointer before measuring begins.

**Kind**: instance method of [<code>Measurement</code>](#olms.Measurement)  
<a name="olms.Measurement+setStartMessage"></a>

#### measurement.setStartMessage(msgstart)
Sets the message showed on the pointer before measuring begins.

**Kind**: instance method of [<code>Measurement</code>](#olms.Measurement)  

| Param | Type |
| --- | --- |
| msgstart | <code>string</code> | 

<a name="olms.Measurement+getStyle"></a>

#### measurement.getStyle() ⇒ <code>ol.style.Style</code> \| <code>Array.&lt;ol.style.Style&gt;</code> \| <code>ol.StyleFunction</code>
Gets the style for sketch features.

**Kind**: instance method of [<code>Measurement</code>](#olms.Measurement)  
<a name="olms.Measurement+setStyle"></a>

#### measurement.setStyle(style)
Sets the style for sketch features.

**Kind**: instance method of [<code>Measurement</code>](#olms.Measurement)  

| Param | Type |
| --- | --- |
| style | <code>ol.style.Style</code> \| <code>Array.&lt;ol.style.Style&gt;</code> \| <code>ol.StyleFunction</code> | 

<a name="olms.Measurement+getUnits"></a>

#### measurement.getUnits() ⇒ <code>ol.proj.Units</code>
Gets the units used.

**Kind**: instance method of [<code>Measurement</code>](#olms.Measurement)  
<a name="olms.Measurement+setUnits"></a>

#### measurement.setUnits(units)
Sets the units to use.

**Kind**: instance method of [<code>Measurement</code>](#olms.Measurement)  

| Param | Type |
| --- | --- |
| units | <code>ol.proj.Units</code> | 

<a name="olms.Measurement+end"></a>

#### measurement.end()
Closes the measurement tool.

**Kind**: instance method of [<code>Measurement</code>](#olms.Measurement)  
<a name="olms.Measurement+start"></a>

#### measurement.start()
Opens the tool for measurement, modifying the mouse pointer for appropriate indication.

**Kind**: instance method of [<code>Measurement</code>](#olms.Measurement)  
<a name="olms.DistanceMeasurement"></a>

### olms.DistanceMeasurement ⇐ [<code>Measurement</code>](#olms.Measurement)
**Kind**: static class of [<code>olms</code>](#olms)  
**Extends**: [<code>Measurement</code>](#olms.Measurement)  

* [.DistanceMeasurement](#olms.DistanceMeasurement) ⇐ [<code>Measurement</code>](#olms.Measurement)
    * [new olms.DistanceMeasurement(map, [options])](#new_olms.DistanceMeasurement_new)
    * [.getMeasurementInteraction()](#olms.Measurement+getMeasurementInteraction) ⇒ <code>ol.interaction.Draw</code>
    * [.getMeasurementVectorLayer()](#olms.Measurement+getMeasurementVectorLayer) ⇒ <code>ol.layer.Vector</code>
    * [.getContinueMessage()](#olms.Measurement+getContinueMessage) ⇒ <code>string</code>
    * [.getStartMessage()](#olms.Measurement+getStartMessage) ⇒ <code>string</code>
    * [.setStartMessage(msgstart)](#olms.Measurement+setStartMessage)
    * [.getStyle()](#olms.Measurement+getStyle) ⇒ <code>ol.style.Style</code> \| <code>Array.&lt;ol.style.Style&gt;</code> \| <code>ol.StyleFunction</code>
    * [.setStyle(style)](#olms.Measurement+setStyle)
    * [.getUnits()](#olms.Measurement+getUnits) ⇒ <code>ol.proj.Units</code>
    * [.setUnits(units)](#olms.Measurement+setUnits)
    * [.end()](#olms.Measurement+end)
    * [.start()](#olms.Measurement+start)

<a name="new_olms.DistanceMeasurement_new"></a>

#### new olms.DistanceMeasurement(map, [options])
Measures the distance between two points.


| Param | Type | Description |
| --- | --- | --- |
| map | <code>ol.Map</code> | The map instance. |
| [options] | [<code>IOptions</code>](#olms.IOptions) |  |

<a name="olms.Measurement+getMeasurementInteraction"></a>

#### distanceMeasurement.getMeasurementInteraction() ⇒ <code>ol.interaction.Draw</code>
Returns the draw interaction used for measuring on map.

**Kind**: instance method of [<code>DistanceMeasurement</code>](#olms.DistanceMeasurement)  
<a name="olms.Measurement+getMeasurementVectorLayer"></a>

#### distanceMeasurement.getMeasurementVectorLayer() ⇒ <code>ol.layer.Vector</code>
Returns the vector layer that contains the features generated on map by this tool.

**Kind**: instance method of [<code>DistanceMeasurement</code>](#olms.DistanceMeasurement)  
<a name="olms.Measurement+getContinueMessage"></a>

#### distanceMeasurement.getContinueMessage() ⇒ <code>string</code>
Gets the message showed on the pointer before measuring begins.

**Kind**: instance method of [<code>DistanceMeasurement</code>](#olms.DistanceMeasurement)  
**Overrides**: [<code>getContinueMessage</code>](#olms.Measurement+getContinueMessage)  
<a name="olms.Measurement+getStartMessage"></a>

#### distanceMeasurement.getStartMessage() ⇒ <code>string</code>
Gets the message showed on the pointer before measuring begins.

**Kind**: instance method of [<code>DistanceMeasurement</code>](#olms.DistanceMeasurement)  
<a name="olms.Measurement+setStartMessage"></a>

#### distanceMeasurement.setStartMessage(msgstart)
Sets the message showed on the pointer before measuring begins.

**Kind**: instance method of [<code>DistanceMeasurement</code>](#olms.DistanceMeasurement)  

| Param | Type |
| --- | --- |
| msgstart | <code>string</code> | 

<a name="olms.Measurement+getStyle"></a>

#### distanceMeasurement.getStyle() ⇒ <code>ol.style.Style</code> \| <code>Array.&lt;ol.style.Style&gt;</code> \| <code>ol.StyleFunction</code>
Gets the style for sketch features.

**Kind**: instance method of [<code>DistanceMeasurement</code>](#olms.DistanceMeasurement)  
<a name="olms.Measurement+setStyle"></a>

#### distanceMeasurement.setStyle(style)
Sets the style for sketch features.

**Kind**: instance method of [<code>DistanceMeasurement</code>](#olms.DistanceMeasurement)  

| Param | Type |
| --- | --- |
| style | <code>ol.style.Style</code> \| <code>Array.&lt;ol.style.Style&gt;</code> \| <code>ol.StyleFunction</code> | 

<a name="olms.Measurement+getUnits"></a>

#### distanceMeasurement.getUnits() ⇒ <code>ol.proj.Units</code>
Gets the units used.

**Kind**: instance method of [<code>DistanceMeasurement</code>](#olms.DistanceMeasurement)  
<a name="olms.Measurement+setUnits"></a>

#### distanceMeasurement.setUnits(units)
Sets the units to use.

**Kind**: instance method of [<code>DistanceMeasurement</code>](#olms.DistanceMeasurement)  

| Param | Type |
| --- | --- |
| units | <code>ol.proj.Units</code> | 

<a name="olms.Measurement+end"></a>

#### distanceMeasurement.end()
Closes the measurement tool.

**Kind**: instance method of [<code>DistanceMeasurement</code>](#olms.DistanceMeasurement)  
<a name="olms.Measurement+start"></a>

#### distanceMeasurement.start()
Opens the tool for measurement, modifying the mouse pointer for appropriate indication.

**Kind**: instance method of [<code>DistanceMeasurement</code>](#olms.DistanceMeasurement)  
<a name="olms.RangeMeasurement"></a>

### olms.RangeMeasurement ⇐ [<code>DistanceMeasurement</code>](#olms.DistanceMeasurement)
**Kind**: static class of [<code>olms</code>](#olms)  
**Extends**: [<code>DistanceMeasurement</code>](#olms.DistanceMeasurement)  

* [.RangeMeasurement](#olms.RangeMeasurement) ⇐ [<code>DistanceMeasurement</code>](#olms.DistanceMeasurement)
    * [new olms.RangeMeasurement(map, [options])](#new_olms.RangeMeasurement_new)
    * [.getMeasurementInteraction()](#olms.Measurement+getMeasurementInteraction) ⇒ <code>ol.interaction.Draw</code>
    * [.getMeasurementVectorLayer()](#olms.Measurement+getMeasurementVectorLayer) ⇒ <code>ol.layer.Vector</code>
    * [.getContinueMessage()](#olms.Measurement+getContinueMessage) ⇒ <code>string</code>
    * [.getStartMessage()](#olms.Measurement+getStartMessage) ⇒ <code>string</code>
    * [.setStartMessage(msgstart)](#olms.Measurement+setStartMessage)
    * [.getStyle()](#olms.Measurement+getStyle) ⇒ <code>ol.style.Style</code> \| <code>Array.&lt;ol.style.Style&gt;</code> \| <code>ol.StyleFunction</code>
    * [.setStyle(style)](#olms.Measurement+setStyle)
    * [.getUnits()](#olms.Measurement+getUnits) ⇒ <code>ol.proj.Units</code>
    * [.setUnits(units)](#olms.Measurement+setUnits)
    * [.end()](#olms.Measurement+end)
    * [.start()](#olms.Measurement+start)

<a name="new_olms.RangeMeasurement_new"></a>

#### new olms.RangeMeasurement(map, [options])
Measures the distance between two points, showing the entire coverage as a circlewith the first point as the center and the distance as the radius.


| Param | Type | Description |
| --- | --- | --- |
| map | <code>ol.Map</code> | The map instance. |
| [options] | [<code>IOptions</code>](#olms.IOptions) |  |

<a name="olms.Measurement+getMeasurementInteraction"></a>

#### rangeMeasurement.getMeasurementInteraction() ⇒ <code>ol.interaction.Draw</code>
Returns the draw interaction used for measuring on map.

**Kind**: instance method of [<code>RangeMeasurement</code>](#olms.RangeMeasurement)  
<a name="olms.Measurement+getMeasurementVectorLayer"></a>

#### rangeMeasurement.getMeasurementVectorLayer() ⇒ <code>ol.layer.Vector</code>
Returns the vector layer that contains the features generated on map by this tool.

**Kind**: instance method of [<code>RangeMeasurement</code>](#olms.RangeMeasurement)  
<a name="olms.Measurement+getContinueMessage"></a>

#### rangeMeasurement.getContinueMessage() ⇒ <code>string</code>
Gets the message showed on the pointer before measuring begins.

**Kind**: instance method of [<code>RangeMeasurement</code>](#olms.RangeMeasurement)  
<a name="olms.Measurement+getStartMessage"></a>

#### rangeMeasurement.getStartMessage() ⇒ <code>string</code>
Gets the message showed on the pointer before measuring begins.

**Kind**: instance method of [<code>RangeMeasurement</code>](#olms.RangeMeasurement)  
<a name="olms.Measurement+setStartMessage"></a>

#### rangeMeasurement.setStartMessage(msgstart)
Sets the message showed on the pointer before measuring begins.

**Kind**: instance method of [<code>RangeMeasurement</code>](#olms.RangeMeasurement)  

| Param | Type |
| --- | --- |
| msgstart | <code>string</code> | 

<a name="olms.Measurement+getStyle"></a>

#### rangeMeasurement.getStyle() ⇒ <code>ol.style.Style</code> \| <code>Array.&lt;ol.style.Style&gt;</code> \| <code>ol.StyleFunction</code>
Gets the style for sketch features.

**Kind**: instance method of [<code>RangeMeasurement</code>](#olms.RangeMeasurement)  
<a name="olms.Measurement+setStyle"></a>

#### rangeMeasurement.setStyle(style)
Sets the style for sketch features.

**Kind**: instance method of [<code>RangeMeasurement</code>](#olms.RangeMeasurement)  

| Param | Type |
| --- | --- |
| style | <code>ol.style.Style</code> \| <code>Array.&lt;ol.style.Style&gt;</code> \| <code>ol.StyleFunction</code> | 

<a name="olms.Measurement+getUnits"></a>

#### rangeMeasurement.getUnits() ⇒ <code>ol.proj.Units</code>
Gets the units used.

**Kind**: instance method of [<code>RangeMeasurement</code>](#olms.RangeMeasurement)  
<a name="olms.Measurement+setUnits"></a>

#### rangeMeasurement.setUnits(units)
Sets the units to use.

**Kind**: instance method of [<code>RangeMeasurement</code>](#olms.RangeMeasurement)  

| Param | Type |
| --- | --- |
| units | <code>ol.proj.Units</code> | 

<a name="olms.Measurement+end"></a>

#### rangeMeasurement.end()
Closes the measurement tool.

**Kind**: instance method of [<code>RangeMeasurement</code>](#olms.RangeMeasurement)  
<a name="olms.Measurement+start"></a>

#### rangeMeasurement.start()
Opens the tool for measurement, modifying the mouse pointer for appropriate indication.

**Kind**: instance method of [<code>RangeMeasurement</code>](#olms.RangeMeasurement)  
<a name="olms.PathMeasurement"></a>

### olms.PathMeasurement ⇐ [<code>Measurement</code>](#olms.Measurement)
**Kind**: static class of [<code>olms</code>](#olms)  
**Extends**: [<code>Measurement</code>](#olms.Measurement)  

* [.PathMeasurement](#olms.PathMeasurement) ⇐ [<code>Measurement</code>](#olms.Measurement)
    * [new olms.PathMeasurement(map, [options])](#new_olms.PathMeasurement_new)
    * [.getMeasurementInteraction()](#olms.Measurement+getMeasurementInteraction) ⇒ <code>ol.interaction.Draw</code>
    * [.getMeasurementVectorLayer()](#olms.Measurement+getMeasurementVectorLayer) ⇒ <code>ol.layer.Vector</code>
    * [.getContinueMessage()](#olms.Measurement+getContinueMessage) ⇒ <code>string</code>
    * [.getStartMessage()](#olms.Measurement+getStartMessage) ⇒ <code>string</code>
    * [.setStartMessage(msgstart)](#olms.Measurement+setStartMessage)
    * [.getStyle()](#olms.Measurement+getStyle) ⇒ <code>ol.style.Style</code> \| <code>Array.&lt;ol.style.Style&gt;</code> \| <code>ol.StyleFunction</code>
    * [.setStyle(style)](#olms.Measurement+setStyle)
    * [.getUnits()](#olms.Measurement+getUnits) ⇒ <code>ol.proj.Units</code>
    * [.setUnits(units)](#olms.Measurement+setUnits)
    * [.end()](#olms.Measurement+end)
    * [.start()](#olms.Measurement+start)

<a name="new_olms.PathMeasurement_new"></a>

#### new olms.PathMeasurement(map, [options])
Measures the length of a path consisting of connected lines.


| Param | Type | Description |
| --- | --- | --- |
| map | <code>ol.Map</code> | The map instance. |
| [options] | [<code>IOptions</code>](#olms.IOptions) |  |

<a name="olms.Measurement+getMeasurementInteraction"></a>

#### pathMeasurement.getMeasurementInteraction() ⇒ <code>ol.interaction.Draw</code>
Returns the draw interaction used for measuring on map.

**Kind**: instance method of [<code>PathMeasurement</code>](#olms.PathMeasurement)  
<a name="olms.Measurement+getMeasurementVectorLayer"></a>

#### pathMeasurement.getMeasurementVectorLayer() ⇒ <code>ol.layer.Vector</code>
Returns the vector layer that contains the features generated on map by this tool.

**Kind**: instance method of [<code>PathMeasurement</code>](#olms.PathMeasurement)  
<a name="olms.Measurement+getContinueMessage"></a>

#### pathMeasurement.getContinueMessage() ⇒ <code>string</code>
Gets the message showed on the pointer before measuring begins.

**Kind**: instance method of [<code>PathMeasurement</code>](#olms.PathMeasurement)  
**Overrides**: [<code>getContinueMessage</code>](#olms.Measurement+getContinueMessage)  
<a name="olms.Measurement+getStartMessage"></a>

#### pathMeasurement.getStartMessage() ⇒ <code>string</code>
Gets the message showed on the pointer before measuring begins.

**Kind**: instance method of [<code>PathMeasurement</code>](#olms.PathMeasurement)  
<a name="olms.Measurement+setStartMessage"></a>

#### pathMeasurement.setStartMessage(msgstart)
Sets the message showed on the pointer before measuring begins.

**Kind**: instance method of [<code>PathMeasurement</code>](#olms.PathMeasurement)  

| Param | Type |
| --- | --- |
| msgstart | <code>string</code> | 

<a name="olms.Measurement+getStyle"></a>

#### pathMeasurement.getStyle() ⇒ <code>ol.style.Style</code> \| <code>Array.&lt;ol.style.Style&gt;</code> \| <code>ol.StyleFunction</code>
Gets the style for sketch features.

**Kind**: instance method of [<code>PathMeasurement</code>](#olms.PathMeasurement)  
<a name="olms.Measurement+setStyle"></a>

#### pathMeasurement.setStyle(style)
Sets the style for sketch features.

**Kind**: instance method of [<code>PathMeasurement</code>](#olms.PathMeasurement)  

| Param | Type |
| --- | --- |
| style | <code>ol.style.Style</code> \| <code>Array.&lt;ol.style.Style&gt;</code> \| <code>ol.StyleFunction</code> | 

<a name="olms.Measurement+getUnits"></a>

#### pathMeasurement.getUnits() ⇒ <code>ol.proj.Units</code>
Gets the units used.

**Kind**: instance method of [<code>PathMeasurement</code>](#olms.PathMeasurement)  
<a name="olms.Measurement+setUnits"></a>

#### pathMeasurement.setUnits(units)
Sets the units to use.

**Kind**: instance method of [<code>PathMeasurement</code>](#olms.PathMeasurement)  

| Param | Type |
| --- | --- |
| units | <code>ol.proj.Units</code> | 

<a name="olms.Measurement+end"></a>

#### pathMeasurement.end()
Closes the measurement tool.

**Kind**: instance method of [<code>PathMeasurement</code>](#olms.PathMeasurement)  
<a name="olms.Measurement+start"></a>

#### pathMeasurement.start()
Opens the tool for measurement, modifying the mouse pointer for appropriate indication.

**Kind**: instance method of [<code>PathMeasurement</code>](#olms.PathMeasurement)  
<a name="olms.AreaMeasurement"></a>

### olms.AreaMeasurement ⇐ [<code>Measurement</code>](#olms.Measurement)
**Kind**: static class of [<code>olms</code>](#olms)  
**Extends**: [<code>Measurement</code>](#olms.Measurement)  

* [.AreaMeasurement](#olms.AreaMeasurement) ⇐ [<code>Measurement</code>](#olms.Measurement)
    * [new olms.AreaMeasurement(map, [options])](#new_olms.AreaMeasurement_new)
    * [.getMeasurementInteraction()](#olms.Measurement+getMeasurementInteraction) ⇒ <code>ol.interaction.Draw</code>
    * [.getMeasurementVectorLayer()](#olms.Measurement+getMeasurementVectorLayer) ⇒ <code>ol.layer.Vector</code>
    * [.getContinueMessage()](#olms.Measurement+getContinueMessage) ⇒ <code>string</code>
    * [.getStartMessage()](#olms.Measurement+getStartMessage) ⇒ <code>string</code>
    * [.setStartMessage(msgstart)](#olms.Measurement+setStartMessage)
    * [.getStyle()](#olms.Measurement+getStyle) ⇒ <code>ol.style.Style</code> \| <code>Array.&lt;ol.style.Style&gt;</code> \| <code>ol.StyleFunction</code>
    * [.setStyle(style)](#olms.Measurement+setStyle)
    * [.getUnits()](#olms.Measurement+getUnits) ⇒ <code>ol.proj.Units</code>
    * [.setUnits(units)](#olms.Measurement+setUnits)
    * [.end()](#olms.Measurement+end)
    * [.start()](#olms.Measurement+start)

<a name="new_olms.AreaMeasurement_new"></a>

#### new olms.AreaMeasurement(map, [options])
Measures areas using polygons.


| Param | Type | Description |
| --- | --- | --- |
| map | <code>ol.Map</code> | The map instance. |
| [options] | [<code>IOptions</code>](#olms.IOptions) |  |

<a name="olms.Measurement+getMeasurementInteraction"></a>

#### areaMeasurement.getMeasurementInteraction() ⇒ <code>ol.interaction.Draw</code>
Returns the draw interaction used for measuring on map.

**Kind**: instance method of [<code>AreaMeasurement</code>](#olms.AreaMeasurement)  
<a name="olms.Measurement+getMeasurementVectorLayer"></a>

#### areaMeasurement.getMeasurementVectorLayer() ⇒ <code>ol.layer.Vector</code>
Returns the vector layer that contains the features generated on map by this tool.

**Kind**: instance method of [<code>AreaMeasurement</code>](#olms.AreaMeasurement)  
<a name="olms.Measurement+getContinueMessage"></a>

#### areaMeasurement.getContinueMessage() ⇒ <code>string</code>
Gets the message showed on the pointer before measuring begins.

**Kind**: instance method of [<code>AreaMeasurement</code>](#olms.AreaMeasurement)  
**Overrides**: [<code>getContinueMessage</code>](#olms.Measurement+getContinueMessage)  
<a name="olms.Measurement+getStartMessage"></a>

#### areaMeasurement.getStartMessage() ⇒ <code>string</code>
Gets the message showed on the pointer before measuring begins.

**Kind**: instance method of [<code>AreaMeasurement</code>](#olms.AreaMeasurement)  
<a name="olms.Measurement+setStartMessage"></a>

#### areaMeasurement.setStartMessage(msgstart)
Sets the message showed on the pointer before measuring begins.

**Kind**: instance method of [<code>AreaMeasurement</code>](#olms.AreaMeasurement)  

| Param | Type |
| --- | --- |
| msgstart | <code>string</code> | 

<a name="olms.Measurement+getStyle"></a>

#### areaMeasurement.getStyle() ⇒ <code>ol.style.Style</code> \| <code>Array.&lt;ol.style.Style&gt;</code> \| <code>ol.StyleFunction</code>
Gets the style for sketch features.

**Kind**: instance method of [<code>AreaMeasurement</code>](#olms.AreaMeasurement)  
<a name="olms.Measurement+setStyle"></a>

#### areaMeasurement.setStyle(style)
Sets the style for sketch features.

**Kind**: instance method of [<code>AreaMeasurement</code>](#olms.AreaMeasurement)  

| Param | Type |
| --- | --- |
| style | <code>ol.style.Style</code> \| <code>Array.&lt;ol.style.Style&gt;</code> \| <code>ol.StyleFunction</code> | 

<a name="olms.Measurement+getUnits"></a>

#### areaMeasurement.getUnits() ⇒ <code>ol.proj.Units</code>
Gets the units used.

**Kind**: instance method of [<code>AreaMeasurement</code>](#olms.AreaMeasurement)  
<a name="olms.Measurement+setUnits"></a>

#### areaMeasurement.setUnits(units)
Sets the units to use.

**Kind**: instance method of [<code>AreaMeasurement</code>](#olms.AreaMeasurement)  

| Param | Type |
| --- | --- |
| units | <code>ol.proj.Units</code> | 

<a name="olms.Measurement+end"></a>

#### areaMeasurement.end()
Closes the measurement tool.

**Kind**: instance method of [<code>AreaMeasurement</code>](#olms.AreaMeasurement)  
<a name="olms.Measurement+start"></a>

#### areaMeasurement.start()
Opens the tool for measurement, modifying the mouse pointer for appropriate indication.

**Kind**: instance method of [<code>AreaMeasurement</code>](#olms.AreaMeasurement)  
<a name="olms.IOptions"></a>

### olms.IOptions : <code>Object</code>
Options for constructing a measurement.

**Kind**: static typedef of [<code>olms</code>](#olms)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [msgstart] | <code>string</code> | <code>&quot;&#x27;Click to start measuring&#x27;&quot;</code> | The message showed on the pointer before measuring begins. |
| [msgcont] | <code>string</code> | <code>&quot;&#x27;Click to continue, double-click (slow or fast) to end&#x27;&quot;</code> | The message showed on the pointer after measuring has begun, but not yet complete. |
| [units] | <code>ol.proj.Units</code> | <code>&#x27;m&#x27;</code> | The units to measure. |
| [style] | <code>ol.style.Style</code> \| <code>Array.&lt;ol.style.Style&gt;</code> \| <code>ol.StyleFunction</code> |  | Style for sketch features. |
| [onMeasureInit] | <code>function</code> |  | Called when the measurement tool has been initiated with the <code>[start](#olms.Measurement+start)()</code> method. |
| [onMeasureStart] | <code>function</code> |  | Called when the measurement has been initiated, i.e. the user has clicked on the map with the tool. |
| [onMeasured] | <code>function</code> |  | Called when a length has been measured. |
| [onMeasureEnd] | <code>function</code> |  | Called when the measurement tool is finished and removed from the map. |
| [onMeasureDeinit] | <code>function</code> |  | Called when the measurement tool has been terminated with the <code>[olms.Measurement#stop](olms.Measurement#stop)()</code> method. |

