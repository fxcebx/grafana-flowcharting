/* eslint-disable dot-notation */
/* eslint-disable object-shorthand */
window.mxLanguages = window.mxLanguages || ['en'];

const sanitizer = require('sanitizer');
const mxgraph = require('mxgraph')({
  mxImageBasePath: 'public/plugins/agenty-flowcharting-panel/libs/mxgraph/javascript/src/images',
  mxBasePath: 'public/plugins/agenty-flowcharting-panel/libs/mxgraph/javascript/dist',
  mxLoadStylesheets: false,
  mxLanguage: 'en',
  mxLoadResources: false
});

window.BASE_PATH = window.BASE_PATH || 'public/plugins/agenty-flowcharting-panel/libs/mxgraph/javascript/dist/';
window.RESOURCES_PATH = window.BASE_PATH || `${window.BASE_PATH}resources`;
window.RESOURCE_BASE = window.RESOURCE_BASE || `${window.RESOURCES_PATH}/grapheditor`;
window.STENCIL_PATH = window.STENCIL_PATH || `${window.BASE_PATH}stencils`;
window.IMAGE_PATH = window.IMAGE_PATH || `${window.BASE_PATH}images`;
window.STYLE_PATH = window.STYLE_PATH || `${window.BASE_PATH}styles`;
window.CSS_PATH = window.CSS_PATH || `${window.BASE_PATH}styles`;
window.mxLanguages = window.mxLanguages || ['en'];

// Put to global vars to work
window.mxActor = window.mxActor || mxgraph.mxActor;
window.mxArrow = window.mxArrow || mxgraph.mxArrow;
window.mxArrowConnector = window.mxArrowConnector || mxgraph.mxArrowConnector;
window.mxCell = window.mxCell || mxgraph.mxCell;
window.mxCellEditor = window.mxCellEditor || mxgraph.mxCellEditor;
window.mxCellHighlight = window.mxCellHighlight || mxgraph.mxCellHighlight;
window.mxCellOverlay = window.mxCellOverlay || mxgraph.mxCellOverlay;
window.mxCellRenderer = window.mxCellRenderer || mxgraph.mxCellRenderer;
window.mxCellState = window.mxCellState || mxgraph.mxCellState;
window.mxClient = window.mxClient || mxgraph.mxClient;
mxClient.mxBasePath = 'public/plugins/agenty-flowcharting-panel/libs/mxgraph/javascript/dist';
mxClient.mxImageBasePath =
  'public/plugins/agenty-flowcharting-panel/libs/mxgraph/javascript/src/images';
mxClient.mxLoadResources = true;
mxClient.mxLanguage = 'en';
mxClient.mxLoadStylesheets = true;
window.mxCloud = window.mxCloud || mxgraph.mxCloud;
window.mxCodec = window.mxCodec || mxgraph.mxCodec;
window.mxCompactTreeLayout = window.mxCompactTreeLayout || mxgraph.mxCompactTreeLayout;
window.mxConnectionConstraint = window.mxConnectionConstraint || mxgraph.mxConnectionConstraint;
window.mxConnectionHandler = window.mxConnectionHandler || mxgraph.mxConnectionHandler;
window.mxConnector = window.mxConnector || mxgraph.mxConnector;
window.mxConstants = window.mxConstants || mxgraph.mxConstants;
window.mxConstraintHandler = window.mxConstraintHandler || mxgraph.mxConstraintHandler;
window.mxCylinder = window.mxCylinder || mxgraph.mxCylinder;
window.mxDefaultKeyHandler = window.mxDefaultKeyHandler || mxgraph.mxDefaultKeyHandler;
window.mxDefaultPopupMenu = window.mxDefaultPopupMenu || mxgraph.mxDefaultPopupMenu;
window.mxDefaultToolbar = window.mxDefaultToolbar || mxgraph.mxDefaultToolbar;
window.mxDivResizer = window.mxDivResizer || mxgraph.mxDivResizer;
window.mxDoubleEllipse = window.mxDoubleEllipse || mxgraph.mxDoubleEllipse;
window.mxDragSource = window.mxDragSource || mxgraph.mxDragSource;
window.mxEdgeStyle = window.mxEdgeStyle || mxgraph.mxEdgeStyle;
window.mxEdgeHandler = window.mxEdgeHandler || mxgraph.mxEdgeHandler;
window.mxEditor = window.mxEditor || mxgraph.mxEditor;
window.mxElbowEdgeHandler = window.mxElbowEdgeHandler || mxgraph.mxElbowEdgeHandler;
window.mxEllipse = window.mxEllipse || mxgraph.mxEllipse;
window.mxEvent = window.mxEvent || mxgraph.mxEvent;
window.mxEventObject = window.mxEventObject || mxgraph.mxEventObject;
window.mxFile = window.mxFile || mxgraph.mxFile;
window.mxGeometry = window.mxGeometry || mxgraph.mxGeometry;
window.mxGraph = window.mxGraph || mxgraph.mxGraph;
window.mxGraphHandler = window.mxGraphHandler || mxgraph.mxGraphHandler;
window.mxGraphModel = window.mxGraphModel || mxgraph.mxGraphModel;
window.mxGraphView = window.mxGraphView || mxgraph.mxGraphView;
window.mxGuide = window.mxGuide || mxgraph.mxGuide;
window.mxHexagon = window.mxHexagon || mxgraph.mxHexagon;
window.mxHandle = window.mxHandle || mxgraph.mxHandle;
window.mxImage = window.mxImage || mxgraph.mxImage;
window.mxImageShape = window.mxImageShape || mxgraph.mxImageShape;
window.mxKeyHandler = window.mxKeyHandler || mxgraph.mxKeyHandler;
window.mxLabel = window.mxLabel || mxgraph.mxLabel;
window.mxLayoutManager = window.mxLayoutManager || mxgraph.mxLayoutManager;
window.mxLine = window.mxLine || mxgraph.mxLine;
window.mxMarker = window.mxMarker || mxgraph.mxMarker;
window.mxOutline = window.mxOutline || mxgraph.mxOutline;
window.mxPanningHandler = window.mxPanningHandler || mxgraph.mxPanningHandler;
window.mxPerimeter = window.mxPerimeter || mxgraph.mxPerimeter;
window.mxPoint = window.mxPoint || mxgraph.mxPoint;
window.mxPolyline = window.mxPolyline || mxgraph.mxPolyline;
window.mxPopupMenu = window.mxPopupMenu || mxgraph.mxPopupMenu;
window.mxPopupMenuHandler = window.mxPopupMenuHandler || mxgraph.mxPopupMenuHandler;
window.mxPrintPreview = window.mxPrintPreview || mxgraph.mxPrintPreview;
window.mxRectangle = window.mxRectangle || mxgraph.mxRectangle;
window.mxRectangleShape = window.mxRectangleShape || mxgraph.mxRectangleShape;
window.mxResources = window.mxResources || mxgraph.mxResources;
window.mxRhombus = window.mxRhombus || mxgraph.mxRhombus;
window.mxRubberband = window.mxRubberband || mxgraph.mxRubberband;
window.mxShape = window.mxShape || mxgraph.mxShape;
window.mxStackLayout = window.mxStackLayout || mxgraph.mxStackLayout;
window.mxStencil = window.mxStencil || mxgraph.mxStencil;
window.mxStencilRegistry = window.mxStencilRegistry || mxgraph.mxStencilRegistry;
window.mxStylesheet = window.mxStylesheet || mxgraph.mxStylesheet;
window.mxStyleRegistry = window.mxStyleRegistry || mxgraph.mxStyleRegistry;
window.mxSvgCanvas2D = window.mxSvgCanvas2D || mxgraph.mxSvgCanvas2D;
window.mxSwimlane = window.mxSwimlane || mxgraph.mxSwimlane;
window.mxText = window.mxText || mxgraph.mxText;
window.mxToolbar = window.mxToolbar || mxgraph.mxToolbar;
window.mxTriangle = window.mxTriangle || mxgraph.mxTriangle;
window.mxUndoManager = window.mxUndoManager || mxgraph.mxUndoManager;
window.mxUtils = window.mxUtils || mxgraph.mxUtils;
window.mxValueChange = window.mxValueChange || mxgraph.mxValueChange;
window.mxVertexHandler = window.mxVertexHandler || mxgraph.mxVertexHandler;

export default class XGraph {
  constructor(container, xmlGraph) {
    u.log(1, 'XGraph.constructor()');
    this.container = container;
    this.xmlGraph = undefined;
    if (u.isencoded(xmlGraph)) this.xmlGraph = u.decode(xmlGraph, true, true, true);
    else this.xmlGraph = xmlGraph;
    this.xmlGraph = xmlGraph;
    this.graph = undefined;
    this.scale = true;
    this.lock = true;
    this.center = true;
    this.zoom = false;
    this.grid = false;
    this.zoomPercent = '1';
    this.cells = {};
    this.cells.id = [];
    this.cells.value = [];
    this.cells.attributs = {};
    this.clickBackup = undefined;

    this.initGraph();
  }

  initGraph() {
    // this.$elem.html(this.$graphCanvas);
    const Graph = require('./Graph')({
      libs: 'arrows;basic;bpmn;flowchart',
    });
    const Shapes = require('./Shapes');
    this.graph = new Graph(this.container);
    this.clickBackup = this.graph.click;
  }

  drawGraph() {
    this.graph.getModel().beginUpdate();
    this.graph.getModel().clear();
    try {
      const xmlDoc = mxUtils.parseXml(this.xmlGraph);
      const codec = new mxCodec(xmlDoc);
      codec.decode(xmlDoc.documentElement, this.graph.getModel());
    } catch (error) {
      u.log(3, 'Error in draw', error);
    } finally {
      this.graph.getModel().endUpdate();
      this.cells["id"] = this.getCurrentCells('id');
      this.cells["value"] = this.getCurrentCells('value');
    }
  }

  refreshGraph(width, height) {
    // console.log("height ", height);
    // console.log("width ", width);
    const $div = $(this.container);
    const size = Math.min(width, height);

    const css = {
      margin: 'auto',
      position: 'relative',
      width: width,
      height: `${size - 30}px`,
    };

    $div.css(css);

    if (this.zoom) this.zoomGraph(this.zoom);
    else this.unzoomGraph();

    this.lockGraph(this.lock);

    this.scaleGraph(this.scale);

    this.centerGraph(this.center);

    this.gridGraph(this.grid);

    this.graph.refresh();
  }

  lockGraph(bool) {
    if (bool) this.graph.setEnabled(false);
    else this.graph.setEnabled(true);
    this.lock = bool;
  }

  centerGraph(bool) {
    if (bool) this.graph.center(true, true);
    else this.graph.center(false, false);
    this.center = bool;
  }

  scaleGraph(bool) {
    if (bool) {
      this.graph.fit();
      this.graph.view.rendering = true;
    }
    this.scale = bool;
  }

  gridGraph(bool) {
    if (bool) {
      this.container.style.backgroundImage = `url('${IMAGE_PATH}/grid.gif')`;
    } else {
      this.container.style.backgroundImage = '';
    }
    this.grid = bool;
  }

  zoomGraph(percent) {
    if (percent && percent.legth > 0 && percent !== '100%' && percent !== '0%') {
      const ratio = percent.replace('%', '') / 100;
      this.graph.zoomTo(ratio, true);
      this.zoomPercent = percent;
    }
    this.zoom = true;
  }

  unzoomGraph() {
    this.zoom = false;
    this.graph.zoomActual();
  }

  getMxGraph() {
    return this.graph;
  }

  getxmlGraph() {
    return this.xmlGraph;
  }

  setXmlGraph(xmlGraph) {
    if (u.isencoded(xmlGraph)) this.xmlGraph = u.decode(xmlGraph, true, true, true);
    else this.xmlGraph = xmlGraph;
    this.drawGraph();
  }

  getCurrentCells(prop) {
    const cellIds = [];
    const model = this.graph.getModel();
    const cells = model.cells;
    if (prop === 'id') {
      _.each(cells, (cell) => {
        cellIds.push(cell.getId());
      });
    } else if (prop === 'value') {
      _.each(cells, (cell) => {
        cellIds.push(cell.getValue());
      });
    }
    return cellIds;
  }

  getOrignalCells(prop) {
    if (prop === 'id' || prop === 'value') return this.cells[prop];
    // TODO: attributs
    return [];
  }

  findCurrentCells(prop, pattern) {
    const cells = this.getCurrentCells(prop);
    const result = _.find(cells, (cell) => {
      return u.matchString(cell, pattern);
    });
    return result;
  }

  findOriginalCells(prop, pattern) {
    const cells = this.getOrignalCells(prop);
    const result = _.find(cells, (cell) => {
      return u.matchString(cell, pattern);
    });
    return result;
  }

  getAllMxCells() {
    return this.graph.getModel().cells;
  }

  findCurrentMxCells(prop, pattern) {
    const cells = [];
    _.each(this.getAllMxCells(), (cell) => {
      if (prop === 'id') {
        const id = cell.getId();
        if (u.matchString(id, pattern)) cells.push(cell);
      } else if (prop === 'value') {
        const value = cell.getValue();
        if (u.matchString(value, pattern)) cells.push(cell);
      }
    });
    return cells;
  }

  getStyleCell(mxcell, style) {
    const state = this.graph.view.getState(mxcell);
    return state.style[style];
  }

  setStyleCell(mxcell, style, color) {
    this.graph.setCellStyles(style, color, [mxcell]);
  }

  getValueCell(mxcell) {
    return mxcell.getValue();
  }

  setValueCell(mxcell, text) {
    return mxcell.setValue(text);
  }

  setMapping(onMappingObject) {
    u.log(1, 'XGraph.setMapping()');
    u.log(0, 'XGraph.setMapping() onMappingObject : ', onMappingObject);
    this.onMapping = onMappingObject;
    if (this.onMapping.active === true) {
      this.graph.click = this.eventGraph.bind(this);
    }
  }

  unsetMapping() {
    u.log(1, 'XGraph.unsetMapping()');
    this.onMapping.active = false;
    this.graph.click = this.clickBackup;
  }

  //
  // GRAPH HANDLER
  //

  eventGraph(me) {
    u.log(1, 'XGraph.eventGraph()');
    u.log(0, 'XGraph.eventGraph() me : ', me);
    u.log(0, 'XGraph.eventGraph() onMapping : ', this.onMapping);
    const self = this;

    if (this.onMapping.active) {
      const state = me.getState();
      const id = state.cell.id;
      this.onMapping.object.pattern = id;
      this.unsetMapping();
    }
  }
}