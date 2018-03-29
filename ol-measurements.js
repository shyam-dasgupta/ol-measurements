olms={},olms.Measurement=function(o,s,i,r){s=Object.assign({},s),i=Object.assign({},i);var a,l,u,c,m,g,d,e=this;function f(e){e.dragging||(c.innerHTML=u?s.msgcont:s.msgstart,m.setPosition(e.coordinate),c.classList.remove("hidden"))}function M(e){c.classList.add("hidden")}function h(e){!e&&l&&(o.removeLayer(l),l=null,delete i.source),!e&&d&&(d.parentNode.removeChild(d),d=null),c&&(c.parentNode.removeChild(c),c=null),a&&(o.removeInteraction(a),a=null,s.onMeasureEnd&&s.onMeasureEnd()),!e&&s.onMeasureDeinit&&s.onMeasureDeinit(),o.un("pointermove",f),o.getViewport().removeEventListener("mouseout",M)}this.getMeasurementInteraction=function(){return a},this.getMeasurementVectorLayer=function(){return l},s.msgstart=s.msgstart||"Click to start measuring",s.msgcont=s.msgcont||"Click to continue, double-click (slow or fast) to end",s.style=s.style||i.style||new ol.style.Style({fill:new ol.style.Fill({color:"rgba(255, 255, 255, 0.2)"}),stroke:new ol.style.Stroke({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new ol.style.Circle({radius:5,stroke:new ol.style.Stroke({color:"rgba(0, 0, 0, 0.7)"}),fill:new ol.style.Fill({color:"rgba(255, 255, 255, 0.2)"})})}),i.style=s.style,s.units=s.units||ol.proj.Units.METERS,this.getContinueMessage=function(){return s.msgcont},this.getContinueMessage=function(e){return s.msgcont=e},this.getStartMessage=function(){return s.msgstart},this.setStartMessage=function(e){return s.msgstart=e},this.getStyle=function(){return s.style},this.setStyle=function(e){s.style=e},this.getUnits=function(){return s.units},this.setUnits=function(e){s.units=e},this.end=function(){h()},this.start=function(){if(!a){h(),l=new ol.layer.Vector({source:new ol.source.Vector}),o.addLayer(l),i.source=l.getSource(),a=new ol.interaction.Draw(i),o.addInteraction(a),s.onMeasureInit&&s.onMeasureInit(),d&&d.parentNode.removeChild(d),(d=document.createElement("div")).className="tooltip tooltip-measure",g=new ol.Overlay({element:d,offset:[0,-15],positioning:"bottom-center"}),o.addOverlay(g),c&&c.parentNode.removeChild(c),(c=document.createElement("div")).className="tooltip hidden",m=new ol.Overlay({element:c,offset:[15,0],positioning:"center-left"}),o.addOverlay(m);var t,n=0;a.on("drawstart",function(e){s.onMeasureStart&&s.onMeasureStart(),l.getSource().clear(),u=e.feature,t=u.getGeometry().on("change",function(e){var t=e.target;n=r?ol.Sphere.getArea(t):ol.Sphere.getLength(t),n/=ol.proj.Units.METERS_PER_UNIT[s.units],r&&(n/=ol.proj.Units.METERS_PER_UNIT[s.units]),d.innerHTML=n.toFixed(2)+(r?" sq ":" ")+s.units,g.setPosition(t.getLastCoordinate())})},this),a.on("drawend",function(){d.className="tooltip tooltip-static",d.onclick=e.end,g.setOffset([0,-7]),u=null,ol.Observable.unByKey(t),h(!0),s.onMeasured&&s.onMeasured(n)},this),o.on("pointermove",f),o.getViewport().addEventListener("mouseout",M)}}},olms.DistanceMeasurement=function(e,t){(t=t||{}).msgcont=t.msgcont||"Click again to finish measurement",olms.Measurement.call(this,e,t,{type:"LineString",minPoints:2,maxPoints:2})},olms.RangeMeasurement=function(e,t){t=Object.assign({},t);var n,o=this,s={type:"Circle",minPoints:2,maxPoints:2};function i(){s.source=o.getMeasurementVectorLayer().getSource(),n=new ol.interaction.Draw(s),e.addInteraction(n)}function r(){e.removeInteraction(n),n=null}if(t.onMeasureInit){var a=t.onMeasureInit;t.onMeasureInit=function(){i(),a()}}else t.onMeasureInit=i;if(t.onMeasureDeinit){var l=t.onMeasureDeinit;t.onMeasureDeinit=function(){r(),l()}}else t.onMeasureDeinit=r;olms.SeparationMeasurement.call(this,e,t),s.style=this.getStyle()},olms.PathMeasurement=function(e,t){olms.Measurement.call(this,e,t,{type:"LineString"})},olms.AreaMeasurement=function(e,t){olms.Measurement.call(this,e,t,{type:"Polygon"},!0)};