// @ts-nocheck
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const optimization_guide = $root.optimization_guide = (() => {

    /**
     * Namespace optimization_guide.
     * @exports optimization_guide
     * @namespace
     */
    const optimization_guide = {};

    optimization_guide.proto = (function() {

        /**
         * Namespace proto.
         * @memberof optimization_guide
         * @namespace
         */
        const proto = {};

        proto.FloatArray = (function() {

            /**
             * Properties of a FloatArray.
             * @memberof optimization_guide.proto
             * @interface IFloatArray
             * @property {Array.<number>|null} [values] FloatArray values
             */

            /**
             * Constructs a new FloatArray.
             * @memberof optimization_guide.proto
             * @classdesc Next ID: 2
             * @implements IFloatArray
             * @constructor
             * @param {optimization_guide.proto.IFloatArray=} [properties] Properties to set
             */
            function FloatArray(properties) {
                this.values = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FloatArray values.
             * @member {Array.<number>} values
             * @memberof optimization_guide.proto.FloatArray
             * @instance
             */
            FloatArray.prototype.values = $util.emptyArray;

            /**
             * Decodes a FloatArray message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.FloatArray
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.FloatArray} FloatArray
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatArray.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.FloatArray();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.values && message.values.length))
                                message.values = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.values.push(reader.float());
                            } else
                                message.values.push(reader.float());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return FloatArray;
        })();

        proto.Embedding = (function() {

            /**
             * Properties of an Embedding.
             * @memberof optimization_guide.proto
             * @interface IEmbedding
             * @property {optimization_guide.proto.IFloatArray|null} [floats] The embedding vector. Note that future versions of this proto might not
             * have this field set, as a new field may be added for quantized embeddings.
             */

            /**
             * Constructs a new Embedding.
             * @memberof optimization_guide.proto
             * @classdesc Next ID: 2
             * @implements IEmbedding
             * @constructor
             * @param {optimization_guide.proto.IEmbedding=} [properties] Properties to set
             */
            function Embedding(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The embedding vector. Note that future versions of this proto might not
             * have this field set, as a new field may be added for quantized embeddings.
             * @member {optimization_guide.proto.IFloatArray|null|undefined} floats
             * @memberof optimization_guide.proto.Embedding
             * @instance
             */
            Embedding.prototype.floats = null;

            /**
             * Decodes an Embedding message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.Embedding
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.Embedding} Embedding
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Embedding.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.Embedding();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.floats = $root.optimization_guide.proto.FloatArray.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return Embedding;
        })();

        proto.AXTreeUpdate = (function() {

            /**
             * Properties of a AXTreeUpdate.
             * @memberof optimization_guide.proto
             * @interface IAXTreeUpdate
             * @property {optimization_guide.proto.IAXTreeData|null} [treeData] AXTreeUpdate treeData
             * @property {number|null} [rootId] AXTreeUpdate rootId
             * @property {Array.<optimization_guide.proto.IAXNodeData>|null} [nodes] AXTreeUpdate nodes
             */

            /**
             * Constructs a new AXTreeUpdate.
             * @memberof optimization_guide.proto
             * @classdesc Accessibility tree snapshot
             * See
             * https://source.chromium.org/chromium/chromium/src/+/main:ui/accessibility/ax_tree_update.h
             * for details of this and related messages.
             * 
             * Next ID: 4
             * @implements IAXTreeUpdate
             * @constructor
             * @param {optimization_guide.proto.IAXTreeUpdate=} [properties] Properties to set
             */
            function AXTreeUpdate(properties) {
                this.nodes = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AXTreeUpdate treeData.
             * @member {optimization_guide.proto.IAXTreeData|null|undefined} treeData
             * @memberof optimization_guide.proto.AXTreeUpdate
             * @instance
             */
            AXTreeUpdate.prototype.treeData = null;

            /**
             * AXTreeUpdate rootId.
             * @member {number|null|undefined} rootId
             * @memberof optimization_guide.proto.AXTreeUpdate
             * @instance
             */
            AXTreeUpdate.prototype.rootId = null;

            /**
             * AXTreeUpdate nodes.
             * @member {Array.<optimization_guide.proto.IAXNodeData>} nodes
             * @memberof optimization_guide.proto.AXTreeUpdate
             * @instance
             */
            AXTreeUpdate.prototype.nodes = $util.emptyArray;

            /**
             * Decodes a AXTreeUpdate message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.AXTreeUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.AXTreeUpdate} AXTreeUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AXTreeUpdate.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.AXTreeUpdate();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.treeData = $root.optimization_guide.proto.AXTreeData.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.rootId = reader.uint32();
                            break;
                        }
                    case 3: {
                            if (!(message.nodes && message.nodes.length))
                                message.nodes = [];
                            message.nodes.push($root.optimization_guide.proto.AXNodeData.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return AXTreeUpdate;
        })();

        proto.AXTreeData = (function() {

            /**
             * Properties of a AXTreeData.
             * @memberof optimization_guide.proto
             * @interface IAXTreeData
             * @property {string|null} [doctype] AXTreeData doctype
             * @property {boolean|null} [loaded] AXTreeData loaded
             * @property {number|null} [loadingProgress] AXTreeData loadingProgress
             * @property {string|null} [mimetype] AXTreeData mimetype
             * @property {string|null} [title] AXTreeData title
             * @property {number|null} [focusId] AXTreeData focusId
             * @property {boolean|null} [selIsBackward] AXTreeData selIsBackward
             * @property {number|null} [selAnchorObjectId] AXTreeData selAnchorObjectId
             * @property {number|null} [selAnchorOffset] AXTreeData selAnchorOffset
             * @property {optimization_guide.proto.AXTextAffinity|null} [selAnchorAffinity] AXTreeData selAnchorAffinity
             * @property {number|null} [selFocusObjectId] AXTreeData selFocusObjectId
             * @property {number|null} [selFocusOffset] AXTreeData selFocusOffset
             * @property {optimization_guide.proto.AXTextAffinity|null} [selFocusAffinity] AXTreeData selFocusAffinity
             * @property {number|null} [rootScrollerId] AXTreeData rootScrollerId
             * @property {Array.<string>|null} [metadata] AXTreeData metadata
             */

            /**
             * Constructs a new AXTreeData.
             * @memberof optimization_guide.proto
             * @classdesc AX tree metadata, part of the a11y snapshot.
             * Next ID: 16
             * @implements IAXTreeData
             * @constructor
             * @param {optimization_guide.proto.IAXTreeData=} [properties] Properties to set
             */
            function AXTreeData(properties) {
                this.metadata = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AXTreeData doctype.
             * @member {string|null|undefined} doctype
             * @memberof optimization_guide.proto.AXTreeData
             * @instance
             */
            AXTreeData.prototype.doctype = null;

            /**
             * AXTreeData loaded.
             * @member {boolean|null|undefined} loaded
             * @memberof optimization_guide.proto.AXTreeData
             * @instance
             */
            AXTreeData.prototype.loaded = null;

            /**
             * AXTreeData loadingProgress.
             * @member {number|null|undefined} loadingProgress
             * @memberof optimization_guide.proto.AXTreeData
             * @instance
             */
            AXTreeData.prototype.loadingProgress = null;

            /**
             * AXTreeData mimetype.
             * @member {string|null|undefined} mimetype
             * @memberof optimization_guide.proto.AXTreeData
             * @instance
             */
            AXTreeData.prototype.mimetype = null;

            /**
             * AXTreeData title.
             * @member {string|null|undefined} title
             * @memberof optimization_guide.proto.AXTreeData
             * @instance
             */
            AXTreeData.prototype.title = null;

            /**
             * AXTreeData focusId.
             * @member {number|null|undefined} focusId
             * @memberof optimization_guide.proto.AXTreeData
             * @instance
             */
            AXTreeData.prototype.focusId = null;

            /**
             * AXTreeData selIsBackward.
             * @member {boolean|null|undefined} selIsBackward
             * @memberof optimization_guide.proto.AXTreeData
             * @instance
             */
            AXTreeData.prototype.selIsBackward = null;

            /**
             * AXTreeData selAnchorObjectId.
             * @member {number|null|undefined} selAnchorObjectId
             * @memberof optimization_guide.proto.AXTreeData
             * @instance
             */
            AXTreeData.prototype.selAnchorObjectId = null;

            /**
             * AXTreeData selAnchorOffset.
             * @member {number|null|undefined} selAnchorOffset
             * @memberof optimization_guide.proto.AXTreeData
             * @instance
             */
            AXTreeData.prototype.selAnchorOffset = null;

            /**
             * AXTreeData selAnchorAffinity.
             * @member {optimization_guide.proto.AXTextAffinity|null|undefined} selAnchorAffinity
             * @memberof optimization_guide.proto.AXTreeData
             * @instance
             */
            AXTreeData.prototype.selAnchorAffinity = null;

            /**
             * AXTreeData selFocusObjectId.
             * @member {number|null|undefined} selFocusObjectId
             * @memberof optimization_guide.proto.AXTreeData
             * @instance
             */
            AXTreeData.prototype.selFocusObjectId = null;

            /**
             * AXTreeData selFocusOffset.
             * @member {number|null|undefined} selFocusOffset
             * @memberof optimization_guide.proto.AXTreeData
             * @instance
             */
            AXTreeData.prototype.selFocusOffset = null;

            /**
             * AXTreeData selFocusAffinity.
             * @member {optimization_guide.proto.AXTextAffinity|null|undefined} selFocusAffinity
             * @memberof optimization_guide.proto.AXTreeData
             * @instance
             */
            AXTreeData.prototype.selFocusAffinity = null;

            /**
             * AXTreeData rootScrollerId.
             * @member {number|null|undefined} rootScrollerId
             * @memberof optimization_guide.proto.AXTreeData
             * @instance
             */
            AXTreeData.prototype.rootScrollerId = null;

            /**
             * AXTreeData metadata.
             * @member {Array.<string>} metadata
             * @memberof optimization_guide.proto.AXTreeData
             * @instance
             */
            AXTreeData.prototype.metadata = $util.emptyArray;

            /**
             * Decodes a AXTreeData message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.AXTreeData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.AXTreeData} AXTreeData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AXTreeData.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.AXTreeData();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.doctype = reader.string();
                            break;
                        }
                    case 2: {
                            message.loaded = reader.bool();
                            break;
                        }
                    case 3: {
                            message.loadingProgress = reader.float();
                            break;
                        }
                    case 4: {
                            message.mimetype = reader.string();
                            break;
                        }
                    case 5: {
                            message.title = reader.string();
                            break;
                        }
                    case 6: {
                            message.focusId = reader.uint32();
                            break;
                        }
                    case 7: {
                            message.selIsBackward = reader.bool();
                            break;
                        }
                    case 8: {
                            message.selAnchorObjectId = reader.uint32();
                            break;
                        }
                    case 9: {
                            message.selAnchorOffset = reader.uint32();
                            break;
                        }
                    case 10: {
                            message.selAnchorAffinity = reader.int32();
                            break;
                        }
                    case 11: {
                            message.selFocusObjectId = reader.uint32();
                            break;
                        }
                    case 12: {
                            message.selFocusOffset = reader.uint32();
                            break;
                        }
                    case 13: {
                            message.selFocusAffinity = reader.int32();
                            break;
                        }
                    case 14: {
                            message.rootScrollerId = reader.uint32();
                            break;
                        }
                    case 15: {
                            if (!(message.metadata && message.metadata.length))
                                message.metadata = [];
                            message.metadata.push(reader.string());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return AXTreeData;
        })();

        proto.AXNodeData = (function() {

            /**
             * Properties of a AXNodeData.
             * @memberof optimization_guide.proto
             * @interface IAXNodeData
             * @property {number|null} [id] AXNodeData id
             * @property {optimization_guide.proto.AXRole|null} [role] AXNodeData role
             * @property {number|null} [state] AXNodeData state
             * @property {number|null} [actions] AXNodeData actions
             * @property {Array.<optimization_guide.proto.IAXAttribute>|null} [attributes] AXNodeData attributes
             * @property {Array.<number>|null} [childIds] AXNodeData childIds
             * @property {optimization_guide.proto.IAXRelativeBounds|null} [relativeBounds] AXNodeData relativeBounds
             */

            /**
             * Constructs a new AXNodeData.
             * @memberof optimization_guide.proto
             * @classdesc Per node accessibility data, part of the a11y snapshot.
             * Next ID: 8
             * @implements IAXNodeData
             * @constructor
             * @param {optimization_guide.proto.IAXNodeData=} [properties] Properties to set
             */
            function AXNodeData(properties) {
                this.attributes = [];
                this.childIds = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AXNodeData id.
             * @member {number|null|undefined} id
             * @memberof optimization_guide.proto.AXNodeData
             * @instance
             */
            AXNodeData.prototype.id = null;

            /**
             * AXNodeData role.
             * @member {optimization_guide.proto.AXRole|null|undefined} role
             * @memberof optimization_guide.proto.AXNodeData
             * @instance
             */
            AXNodeData.prototype.role = null;

            /**
             * AXNodeData state.
             * @member {number|null|undefined} state
             * @memberof optimization_guide.proto.AXNodeData
             * @instance
             */
            AXNodeData.prototype.state = null;

            /**
             * AXNodeData actions.
             * @member {number|null|undefined} actions
             * @memberof optimization_guide.proto.AXNodeData
             * @instance
             */
            AXNodeData.prototype.actions = null;

            /**
             * AXNodeData attributes.
             * @member {Array.<optimization_guide.proto.IAXAttribute>} attributes
             * @memberof optimization_guide.proto.AXNodeData
             * @instance
             */
            AXNodeData.prototype.attributes = $util.emptyArray;

            /**
             * AXNodeData childIds.
             * @member {Array.<number>} childIds
             * @memberof optimization_guide.proto.AXNodeData
             * @instance
             */
            AXNodeData.prototype.childIds = $util.emptyArray;

            /**
             * AXNodeData relativeBounds.
             * @member {optimization_guide.proto.IAXRelativeBounds|null|undefined} relativeBounds
             * @memberof optimization_guide.proto.AXNodeData
             * @instance
             */
            AXNodeData.prototype.relativeBounds = null;

            /**
             * Decodes a AXNodeData message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.AXNodeData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.AXNodeData} AXNodeData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AXNodeData.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.AXNodeData();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.role = reader.int32();
                            break;
                        }
                    case 3: {
                            message.state = reader.uint32();
                            break;
                        }
                    case 4: {
                            message.actions = reader.uint64();
                            break;
                        }
                    case 5: {
                            if (!(message.attributes && message.attributes.length))
                                message.attributes = [];
                            message.attributes.push($root.optimization_guide.proto.AXAttribute.decode(reader, reader.uint32()));
                            break;
                        }
                    case 6: {
                            if (!(message.childIds && message.childIds.length))
                                message.childIds = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.childIds.push(reader.int32());
                            } else
                                message.childIds.push(reader.int32());
                            break;
                        }
                    case 7: {
                            message.relativeBounds = $root.optimization_guide.proto.AXRelativeBounds.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return AXNodeData;
        })();

        proto.AXAttribute = (function() {

            /**
             * Properties of a AXAttribute.
             * @memberof optimization_guide.proto
             * @interface IAXAttribute
             * @property {optimization_guide.proto.AXStringAttribute|null} [stringType] AXAttribute stringType
             * @property {optimization_guide.proto.AXIntAttribute|null} [intType] AXAttribute intType
             * @property {optimization_guide.proto.AXFloatAttribute|null} [floatType] AXAttribute floatType
             * @property {optimization_guide.proto.AXBoolAttribute|null} [boolType] AXAttribute boolType
             * @property {optimization_guide.proto.AXIntListAttribute|null} [intlistType] AXAttribute intlistType
             * @property {optimization_guide.proto.AXStringListAttribute|null} [stringlistType] AXAttribute stringlistType
             * @property {string|null} [htmlAttributeName] AXAttribute htmlAttributeName
             * @property {string|null} [stringValue] AXAttribute stringValue
             * @property {number|null} [intValue] AXAttribute intValue
             * @property {number|null} [floatValue] AXAttribute floatValue
             * @property {boolean|null} [boolValue] AXAttribute boolValue
             * @property {optimization_guide.proto.IAXIntList|null} [intListValue] AXAttribute intListValue
             * @property {optimization_guide.proto.IAXStringList|null} [stringListValue] AXAttribute stringListValue
             * @property {string|null} [htmlAttributeValue] AXAttribute htmlAttributeValue
             */

            /**
             * Constructs a new AXAttribute.
             * @memberof optimization_guide.proto
             * @classdesc AX node attribute, part of the a11y snapshot.
             * Next ID: 15
             * @implements IAXAttribute
             * @constructor
             * @param {optimization_guide.proto.IAXAttribute=} [properties] Properties to set
             */
            function AXAttribute(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AXAttribute stringType.
             * @member {optimization_guide.proto.AXStringAttribute|null|undefined} stringType
             * @memberof optimization_guide.proto.AXAttribute
             * @instance
             */
            AXAttribute.prototype.stringType = null;

            /**
             * AXAttribute intType.
             * @member {optimization_guide.proto.AXIntAttribute|null|undefined} intType
             * @memberof optimization_guide.proto.AXAttribute
             * @instance
             */
            AXAttribute.prototype.intType = null;

            /**
             * AXAttribute floatType.
             * @member {optimization_guide.proto.AXFloatAttribute|null|undefined} floatType
             * @memberof optimization_guide.proto.AXAttribute
             * @instance
             */
            AXAttribute.prototype.floatType = null;

            /**
             * AXAttribute boolType.
             * @member {optimization_guide.proto.AXBoolAttribute|null|undefined} boolType
             * @memberof optimization_guide.proto.AXAttribute
             * @instance
             */
            AXAttribute.prototype.boolType = null;

            /**
             * AXAttribute intlistType.
             * @member {optimization_guide.proto.AXIntListAttribute|null|undefined} intlistType
             * @memberof optimization_guide.proto.AXAttribute
             * @instance
             */
            AXAttribute.prototype.intlistType = null;

            /**
             * AXAttribute stringlistType.
             * @member {optimization_guide.proto.AXStringListAttribute|null|undefined} stringlistType
             * @memberof optimization_guide.proto.AXAttribute
             * @instance
             */
            AXAttribute.prototype.stringlistType = null;

            /**
             * AXAttribute htmlAttributeName.
             * @member {string|null|undefined} htmlAttributeName
             * @memberof optimization_guide.proto.AXAttribute
             * @instance
             */
            AXAttribute.prototype.htmlAttributeName = null;

            /**
             * AXAttribute stringValue.
             * @member {string|null|undefined} stringValue
             * @memberof optimization_guide.proto.AXAttribute
             * @instance
             */
            AXAttribute.prototype.stringValue = null;

            /**
             * AXAttribute intValue.
             * @member {number|null|undefined} intValue
             * @memberof optimization_guide.proto.AXAttribute
             * @instance
             */
            AXAttribute.prototype.intValue = null;

            /**
             * AXAttribute floatValue.
             * @member {number|null|undefined} floatValue
             * @memberof optimization_guide.proto.AXAttribute
             * @instance
             */
            AXAttribute.prototype.floatValue = null;

            /**
             * AXAttribute boolValue.
             * @member {boolean|null|undefined} boolValue
             * @memberof optimization_guide.proto.AXAttribute
             * @instance
             */
            AXAttribute.prototype.boolValue = null;

            /**
             * AXAttribute intListValue.
             * @member {optimization_guide.proto.IAXIntList|null|undefined} intListValue
             * @memberof optimization_guide.proto.AXAttribute
             * @instance
             */
            AXAttribute.prototype.intListValue = null;

            /**
             * AXAttribute stringListValue.
             * @member {optimization_guide.proto.IAXStringList|null|undefined} stringListValue
             * @memberof optimization_guide.proto.AXAttribute
             * @instance
             */
            AXAttribute.prototype.stringListValue = null;

            /**
             * AXAttribute htmlAttributeValue.
             * @member {string|null|undefined} htmlAttributeValue
             * @memberof optimization_guide.proto.AXAttribute
             * @instance
             */
            AXAttribute.prototype.htmlAttributeValue = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * AXAttribute attributeKey.
             * @member {"stringType"|"intType"|"floatType"|"boolType"|"intlistType"|"stringlistType"|"htmlAttributeName"|undefined} attributeKey
             * @memberof optimization_guide.proto.AXAttribute
             * @instance
             */
            Object.defineProperty(AXAttribute.prototype, "attributeKey", {
                get: $util.oneOfGetter($oneOfFields = ["stringType", "intType", "floatType", "boolType", "intlistType", "stringlistType", "htmlAttributeName"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * AXAttribute attributeValue.
             * @member {"stringValue"|"intValue"|"floatValue"|"boolValue"|"intListValue"|"stringListValue"|"htmlAttributeValue"|undefined} attributeValue
             * @memberof optimization_guide.proto.AXAttribute
             * @instance
             */
            Object.defineProperty(AXAttribute.prototype, "attributeValue", {
                get: $util.oneOfGetter($oneOfFields = ["stringValue", "intValue", "floatValue", "boolValue", "intListValue", "stringListValue", "htmlAttributeValue"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Decodes a AXAttribute message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.AXAttribute
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.AXAttribute} AXAttribute
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AXAttribute.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.AXAttribute();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.stringType = reader.int32();
                            break;
                        }
                    case 2: {
                            message.intType = reader.int32();
                            break;
                        }
                    case 3: {
                            message.floatType = reader.int32();
                            break;
                        }
                    case 4: {
                            message.boolType = reader.int32();
                            break;
                        }
                    case 5: {
                            message.intlistType = reader.int32();
                            break;
                        }
                    case 6: {
                            message.stringlistType = reader.int32();
                            break;
                        }
                    case 7: {
                            message.htmlAttributeName = reader.string();
                            break;
                        }
                    case 8: {
                            message.stringValue = reader.string();
                            break;
                        }
                    case 9: {
                            message.intValue = reader.int32();
                            break;
                        }
                    case 10: {
                            message.floatValue = reader.float();
                            break;
                        }
                    case 11: {
                            message.boolValue = reader.bool();
                            break;
                        }
                    case 12: {
                            message.intListValue = $root.optimization_guide.proto.AXIntList.decode(reader, reader.uint32());
                            break;
                        }
                    case 13: {
                            message.stringListValue = $root.optimization_guide.proto.AXStringList.decode(reader, reader.uint32());
                            break;
                        }
                    case 14: {
                            message.htmlAttributeValue = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return AXAttribute;
        })();

        proto.AXIntList = (function() {

            /**
             * Properties of a AXIntList.
             * @memberof optimization_guide.proto
             * @interface IAXIntList
             * @property {Array.<number>|null} [value] AXIntList value
             */

            /**
             * Constructs a new AXIntList.
             * @memberof optimization_guide.proto
             * @classdesc Helper message for AX IntList.
             * @implements IAXIntList
             * @constructor
             * @param {optimization_guide.proto.IAXIntList=} [properties] Properties to set
             */
            function AXIntList(properties) {
                this.value = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AXIntList value.
             * @member {Array.<number>} value
             * @memberof optimization_guide.proto.AXIntList
             * @instance
             */
            AXIntList.prototype.value = $util.emptyArray;

            /**
             * Decodes a AXIntList message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.AXIntList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.AXIntList} AXIntList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AXIntList.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.AXIntList();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.value && message.value.length))
                                message.value = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.value.push(reader.int32());
                            } else
                                message.value.push(reader.int32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return AXIntList;
        })();

        proto.AXStringList = (function() {

            /**
             * Properties of a AXStringList.
             * @memberof optimization_guide.proto
             * @interface IAXStringList
             * @property {Array.<string>|null} [value] AXStringList value
             */

            /**
             * Constructs a new AXStringList.
             * @memberof optimization_guide.proto
             * @classdesc Helper message for AX StringList.
             * @implements IAXStringList
             * @constructor
             * @param {optimization_guide.proto.IAXStringList=} [properties] Properties to set
             */
            function AXStringList(properties) {
                this.value = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AXStringList value.
             * @member {Array.<string>} value
             * @memberof optimization_guide.proto.AXStringList
             * @instance
             */
            AXStringList.prototype.value = $util.emptyArray;

            /**
             * Decodes a AXStringList message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.AXStringList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.AXStringList} AXStringList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AXStringList.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.AXStringList();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.value && message.value.length))
                                message.value = [];
                            message.value.push(reader.string());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return AXStringList;
        })();

        proto.AXRelativeBounds = (function() {

            /**
             * Properties of a AXRelativeBounds.
             * @memberof optimization_guide.proto
             * @interface IAXRelativeBounds
             * @property {number|null} [offsetContainerId] AXRelativeBounds offsetContainerId
             * @property {number|null} [x] AXRelativeBounds x
             * @property {number|null} [y] AXRelativeBounds y
             * @property {number|null} [width] AXRelativeBounds width
             * @property {number|null} [height] AXRelativeBounds height
             * @property {Array.<number>|null} [transform] If present, represents the transform as 16 floats.
             */

            /**
             * Constructs a new AXRelativeBounds.
             * @memberof optimization_guide.proto
             * @classdesc AX Relative bounds.
             * Next ID: 7
             * @implements IAXRelativeBounds
             * @constructor
             * @param {optimization_guide.proto.IAXRelativeBounds=} [properties] Properties to set
             */
            function AXRelativeBounds(properties) {
                this.transform = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AXRelativeBounds offsetContainerId.
             * @member {number|null|undefined} offsetContainerId
             * @memberof optimization_guide.proto.AXRelativeBounds
             * @instance
             */
            AXRelativeBounds.prototype.offsetContainerId = null;

            /**
             * AXRelativeBounds x.
             * @member {number|null|undefined} x
             * @memberof optimization_guide.proto.AXRelativeBounds
             * @instance
             */
            AXRelativeBounds.prototype.x = null;

            /**
             * AXRelativeBounds y.
             * @member {number|null|undefined} y
             * @memberof optimization_guide.proto.AXRelativeBounds
             * @instance
             */
            AXRelativeBounds.prototype.y = null;

            /**
             * AXRelativeBounds width.
             * @member {number|null|undefined} width
             * @memberof optimization_guide.proto.AXRelativeBounds
             * @instance
             */
            AXRelativeBounds.prototype.width = null;

            /**
             * AXRelativeBounds height.
             * @member {number|null|undefined} height
             * @memberof optimization_guide.proto.AXRelativeBounds
             * @instance
             */
            AXRelativeBounds.prototype.height = null;

            /**
             * If present, represents the transform as 16 floats.
             * @member {Array.<number>} transform
             * @memberof optimization_guide.proto.AXRelativeBounds
             * @instance
             */
            AXRelativeBounds.prototype.transform = $util.emptyArray;

            /**
             * Decodes a AXRelativeBounds message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.AXRelativeBounds
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.AXRelativeBounds} AXRelativeBounds
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AXRelativeBounds.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.AXRelativeBounds();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.offsetContainerId = reader.int32();
                            break;
                        }
                    case 2: {
                            message.x = reader.float();
                            break;
                        }
                    case 3: {
                            message.y = reader.float();
                            break;
                        }
                    case 4: {
                            message.width = reader.float();
                            break;
                        }
                    case 5: {
                            message.height = reader.float();
                            break;
                        }
                    case 6: {
                            if (!(message.transform && message.transform.length))
                                message.transform = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.transform.push(reader.float());
                            } else
                                message.transform.push(reader.float());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return AXRelativeBounds;
        })();

        proto.PageContext = (function() {

            /**
             * Properties of a PageContext.
             * @memberof optimization_guide.proto
             * @interface IPageContext
             * @property {string|null} [url] The URL of the page that the form is on.
             * @property {string|null} [title] The title of the page that the form is on.
             * @property {optimization_guide.proto.IAXTreeUpdate|null} [axTreeData] The AX tree representation of the page.
             * @property {string|null} [innerText] The inner text of the page the model is acting on (excluding x-origin
             * frames).
             * @property {number|null} [innerTextOffset] The offset of the focused element into the |inner_text|.
             * @property {Array.<string>|null} [pagePassages] The text passages of the page. Those passages are the result of the
             * HtmlChunker algorithm implemented in Chrome (used by the History Search
             * feature). See
             * https://github.com/google/labs-prototypes/tree/main/seeds/chunker-python
             * @property {string|null} [tabScreenshot] A base64 encoded PNG of the tab screenshot.
             * @property {string|null} [pdfData] The base64 encoded PDF representation of the page.
             * @property {optimization_guide.proto.IAnnotatedPageContent|null} [annotatedPageContent] The page content represented as a tree of semantic chunks and (in the
             * future) annotated with additional information about the page.
             */

            /**
             * Constructs a new PageContext.
             * @memberof optimization_guide.proto
             * @classdesc Next ID: 11
             * @implements IPageContext
             * @constructor
             * @param {optimization_guide.proto.IPageContext=} [properties] Properties to set
             */
            function PageContext(properties) {
                this.pagePassages = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The URL of the page that the form is on.
             * @member {string|null|undefined} url
             * @memberof optimization_guide.proto.PageContext
             * @instance
             */
            PageContext.prototype.url = null;

            /**
             * The title of the page that the form is on.
             * @member {string|null|undefined} title
             * @memberof optimization_guide.proto.PageContext
             * @instance
             */
            PageContext.prototype.title = null;

            /**
             * The AX tree representation of the page.
             * @member {optimization_guide.proto.IAXTreeUpdate|null|undefined} axTreeData
             * @memberof optimization_guide.proto.PageContext
             * @instance
             */
            PageContext.prototype.axTreeData = null;

            /**
             * The inner text of the page the model is acting on (excluding x-origin
             * frames).
             * @member {string|null|undefined} innerText
             * @memberof optimization_guide.proto.PageContext
             * @instance
             */
            PageContext.prototype.innerText = null;

            /**
             * The offset of the focused element into the |inner_text|.
             * @member {number|null|undefined} innerTextOffset
             * @memberof optimization_guide.proto.PageContext
             * @instance
             */
            PageContext.prototype.innerTextOffset = null;

            /**
             * The text passages of the page. Those passages are the result of the
             * HtmlChunker algorithm implemented in Chrome (used by the History Search
             * feature). See
             * https://github.com/google/labs-prototypes/tree/main/seeds/chunker-python
             * @member {Array.<string>} pagePassages
             * @memberof optimization_guide.proto.PageContext
             * @instance
             */
            PageContext.prototype.pagePassages = $util.emptyArray;

            /**
             * A base64 encoded PNG of the tab screenshot.
             * @member {string|null|undefined} tabScreenshot
             * @memberof optimization_guide.proto.PageContext
             * @instance
             */
            PageContext.prototype.tabScreenshot = null;

            /**
             * The base64 encoded PDF representation of the page.
             * @member {string|null|undefined} pdfData
             * @memberof optimization_guide.proto.PageContext
             * @instance
             */
            PageContext.prototype.pdfData = null;

            /**
             * The page content represented as a tree of semantic chunks and (in the
             * future) annotated with additional information about the page.
             * @member {optimization_guide.proto.IAnnotatedPageContent|null|undefined} annotatedPageContent
             * @memberof optimization_guide.proto.PageContext
             * @instance
             */
            PageContext.prototype.annotatedPageContent = null;

            /**
             * Decodes a PageContext message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.PageContext
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.PageContext} PageContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PageContext.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.PageContext();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.url = reader.string();
                            break;
                        }
                    case 2: {
                            message.title = reader.string();
                            break;
                        }
                    case 3: {
                            message.axTreeData = $root.optimization_guide.proto.AXTreeUpdate.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            message.innerText = reader.string();
                            break;
                        }
                    case 5: {
                            message.innerTextOffset = reader.uint64();
                            break;
                        }
                    case 9: {
                            if (!(message.pagePassages && message.pagePassages.length))
                                message.pagePassages = [];
                            message.pagePassages.push(reader.string());
                            break;
                        }
                    case 6: {
                            message.tabScreenshot = reader.string();
                            break;
                        }
                    case 7: {
                            message.pdfData = reader.string();
                            break;
                        }
                    case 8: {
                            message.annotatedPageContent = $root.optimization_guide.proto.AnnotatedPageContent.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return PageContext;
        })();

        proto.AnnotatedPageContent = (function() {

            /**
             * Properties of an AnnotatedPageContent.
             * @memberof optimization_guide.proto
             * @interface IAnnotatedPageContent
             * @property {optimization_guide.proto.AnnotatedPageContentVersion|null} [version] The version of the proto. Each time a backwards incompatible change is made
             * to the proto, the version should be incremented.
             * @property {optimization_guide.proto.AnnotatedPageContentMode|null} [mode] The mode used to extract this proto. The data in the proto depends on the
             * mode. See comments to understand which data is available for each mode.
             * @property {optimization_guide.proto.IContentNode|null} [rootNode] The root node of the ContentNode tree.
             * @property {optimization_guide.proto.IFrameData|null} [mainFrameData] The data for the main frame of the page.
             * @property {optimization_guide.proto.IPageInteractionInfo|null} [pageInteractionInfo] The interaction information for the page--the subtree represented by the
             * AnnotatedPageContent. This is for top-level interactions, such as the mouse
             * position and focused element, for which there can only be one unique value
             * for the entire page.
             * Currently this is only tracked for the main frame.
             * @property {optimization_guide.proto.IBoundingRect|null} [viewportGeometry] The rect of the viewport for the tab. i.e., screenshot dimensions.
             * Dimensions are in captured pixels.
             * This coordinate system should be used for coordinate based browser actions.
             * This uses device independent pixels, i.e., doesn't include the device
             * scale factor while other dimensions in APC are based on that.
             * @property {number|null} [tabId] The id of the tab that the page content was extracted from. Guaranteed to
             * be unique within the browsing session.
             * @property {optimization_guide.proto.IPopupWindow|null} [popupWindow] Provides APC for internal popup widgets created by elements like <select>
             * and <input type="color"> . Does not provide APC for separate windows opened
             * via window.open() or similar. A page can only have one popup window open at
             * a time. If one is open, its details are populated here. The popup window
             * draws on top of the tab and as such has a higher z order than the main
             * frame's Document.
             * @property {optimization_guide.proto.IProfileInformation|null} [profileInformation] Information that pertains to the user's profile, not the page.
             * TODO(crbug.com/454610456): This should be moved out of AnnotatedPageContent because
             * it does not semantically belong here.
             * @property {optimization_guide.proto.IGeminiInChromePageMetadata|null} [geminiInChromePageMetadata] Metadata about the page when Gemini in Chrome captures Annotated Page
             * Content.
             * TODO(crbug.com/484011242): This should be moved out of AnnotatedPageContent because
             * it does not semantically belong here.
             */

            /**
             * Constructs a new AnnotatedPageContent.
             * @memberof optimization_guide.proto
             * @classdesc The page content represented as a tree of semantic chunks and (in the
             * future) annotated with additional information about the page.
             * Next ID: 11
             * @implements IAnnotatedPageContent
             * @constructor
             * @param {optimization_guide.proto.IAnnotatedPageContent=} [properties] Properties to set
             */
            function AnnotatedPageContent(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The version of the proto. Each time a backwards incompatible change is made
             * to the proto, the version should be incremented.
             * @member {optimization_guide.proto.AnnotatedPageContentVersion|null|undefined} version
             * @memberof optimization_guide.proto.AnnotatedPageContent
             * @instance
             */
            AnnotatedPageContent.prototype.version = null;

            /**
             * The mode used to extract this proto. The data in the proto depends on the
             * mode. See comments to understand which data is available for each mode.
             * @member {optimization_guide.proto.AnnotatedPageContentMode|null|undefined} mode
             * @memberof optimization_guide.proto.AnnotatedPageContent
             * @instance
             */
            AnnotatedPageContent.prototype.mode = null;

            /**
             * The root node of the ContentNode tree.
             * @member {optimization_guide.proto.IContentNode|null|undefined} rootNode
             * @memberof optimization_guide.proto.AnnotatedPageContent
             * @instance
             */
            AnnotatedPageContent.prototype.rootNode = null;

            /**
             * The data for the main frame of the page.
             * @member {optimization_guide.proto.IFrameData|null|undefined} mainFrameData
             * @memberof optimization_guide.proto.AnnotatedPageContent
             * @instance
             */
            AnnotatedPageContent.prototype.mainFrameData = null;

            /**
             * The interaction information for the page--the subtree represented by the
             * AnnotatedPageContent. This is for top-level interactions, such as the mouse
             * position and focused element, for which there can only be one unique value
             * for the entire page.
             * Currently this is only tracked for the main frame.
             * @member {optimization_guide.proto.IPageInteractionInfo|null|undefined} pageInteractionInfo
             * @memberof optimization_guide.proto.AnnotatedPageContent
             * @instance
             */
            AnnotatedPageContent.prototype.pageInteractionInfo = null;

            /**
             * The rect of the viewport for the tab. i.e., screenshot dimensions.
             * Dimensions are in captured pixels.
             * This coordinate system should be used for coordinate based browser actions.
             * This uses device independent pixels, i.e., doesn't include the device
             * scale factor while other dimensions in APC are based on that.
             * @member {optimization_guide.proto.IBoundingRect|null|undefined} viewportGeometry
             * @memberof optimization_guide.proto.AnnotatedPageContent
             * @instance
             */
            AnnotatedPageContent.prototype.viewportGeometry = null;

            /**
             * The id of the tab that the page content was extracted from. Guaranteed to
             * be unique within the browsing session.
             * @member {number|null|undefined} tabId
             * @memberof optimization_guide.proto.AnnotatedPageContent
             * @instance
             */
            AnnotatedPageContent.prototype.tabId = null;

            /**
             * Provides APC for internal popup widgets created by elements like <select>
             * and <input type="color"> . Does not provide APC for separate windows opened
             * via window.open() or similar. A page can only have one popup window open at
             * a time. If one is open, its details are populated here. The popup window
             * draws on top of the tab and as such has a higher z order than the main
             * frame's Document.
             * @member {optimization_guide.proto.IPopupWindow|null|undefined} popupWindow
             * @memberof optimization_guide.proto.AnnotatedPageContent
             * @instance
             */
            AnnotatedPageContent.prototype.popupWindow = null;

            /**
             * Information that pertains to the user's profile, not the page.
             * TODO(crbug.com/454610456): This should be moved out of AnnotatedPageContent because
             * it does not semantically belong here.
             * @member {optimization_guide.proto.IProfileInformation|null|undefined} profileInformation
             * @memberof optimization_guide.proto.AnnotatedPageContent
             * @instance
             */
            AnnotatedPageContent.prototype.profileInformation = null;

            /**
             * Metadata about the page when Gemini in Chrome captures Annotated Page
             * Content.
             * TODO(crbug.com/484011242): This should be moved out of AnnotatedPageContent because
             * it does not semantically belong here.
             * @member {optimization_guide.proto.IGeminiInChromePageMetadata|null|undefined} geminiInChromePageMetadata
             * @memberof optimization_guide.proto.AnnotatedPageContent
             * @instance
             */
            AnnotatedPageContent.prototype.geminiInChromePageMetadata = null;

            /**
             * Decodes an AnnotatedPageContent message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.AnnotatedPageContent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.AnnotatedPageContent} AnnotatedPageContent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AnnotatedPageContent.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.AnnotatedPageContent();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.version = reader.int32();
                            break;
                        }
                    case 6: {
                            message.mode = reader.int32();
                            break;
                        }
                    case 2: {
                            message.rootNode = $root.optimization_guide.proto.ContentNode.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.mainFrameData = $root.optimization_guide.proto.FrameData.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            message.pageInteractionInfo = $root.optimization_guide.proto.PageInteractionInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 5: {
                            message.viewportGeometry = $root.optimization_guide.proto.BoundingRect.decode(reader, reader.uint32());
                            break;
                        }
                    case 7: {
                            message.tabId = reader.int32();
                            break;
                        }
                    case 8: {
                            message.popupWindow = $root.optimization_guide.proto.PopupWindow.decode(reader, reader.uint32());
                            break;
                        }
                    case 9: {
                            message.profileInformation = $root.optimization_guide.proto.ProfileInformation.decode(reader, reader.uint32());
                            break;
                        }
                    case 10: {
                            message.geminiInChromePageMetadata = $root.optimization_guide.proto.GeminiInChromePageMetadata.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return AnnotatedPageContent;
        })();

        proto.ContentNode = (function() {

            /**
             * Properties of a ContentNode.
             * @memberof optimization_guide.proto
             * @interface IContentNode
             * @property {Array.<optimization_guide.proto.IContentNode>|null} [childrenNodes] Note: CONTENT_ATTRIBUTE_TEXT and CONTENT_ATTRIBUTE_IMAGE are leaf nodes
             * which don't have any children nodes.
             * @property {optimization_guide.proto.IContentAttributes|null} [contentAttributes] ContentNode contentAttributes
             */

            /**
             * Constructs a new ContentNode.
             * @memberof optimization_guide.proto
             * @classdesc The ContentNode tree is a sparse representation of the DOM tree for a web
             * page, i.e., not every DOM node generates a ContentNode. For example, a `div`
             * used only for styling or layout the subtree will not generate a ContentNode.
             * 
             * The ContentNode is roughly 1:1 with a DOM node but there are exceptions:
             * 
             * - Some DOM nodes can generate multiple ContentNodes. For example, a
             * `::before` pseudo-element would have text and image ContentNodes for it's
             * content specified in CSS.
             * 
             * - A form with `<input type="image">` will have ContentNodes for the input
             * element and it's image.
             * 
             * - We currently don't coalesce text content from multiple DOM nodes into a
             * single ContentNode but that maybe added in the future.
             * 
             * Note: The ContentNode tree including content from all embedded iframes.
             * Next ID: 3
             * @implements IContentNode
             * @constructor
             * @param {optimization_guide.proto.IContentNode=} [properties] Properties to set
             */
            function ContentNode(properties) {
                this.childrenNodes = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Note: CONTENT_ATTRIBUTE_TEXT and CONTENT_ATTRIBUTE_IMAGE are leaf nodes
             * which don't have any children nodes.
             * @member {Array.<optimization_guide.proto.IContentNode>} childrenNodes
             * @memberof optimization_guide.proto.ContentNode
             * @instance
             */
            ContentNode.prototype.childrenNodes = $util.emptyArray;

            /**
             * ContentNode contentAttributes.
             * @member {optimization_guide.proto.IContentAttributes|null|undefined} contentAttributes
             * @memberof optimization_guide.proto.ContentNode
             * @instance
             */
            ContentNode.prototype.contentAttributes = null;

            /**
             * Decodes a ContentNode message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.ContentNode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.ContentNode} ContentNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ContentNode.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.ContentNode();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.childrenNodes && message.childrenNodes.length))
                                message.childrenNodes = [];
                            message.childrenNodes.push($root.optimization_guide.proto.ContentNode.decode(reader, reader.uint32()));
                            break;
                        }
                    case 2: {
                            message.contentAttributes = $root.optimization_guide.proto.ContentAttributes.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ContentNode;
        })();

        proto.ContentAttributes = (function() {

            /**
             * Properties of a ContentAttributes.
             * @memberof optimization_guide.proto
             * @interface IContentAttributes
             * @property {optimization_guide.proto.ITextInfo|null} [textData] Only set if attribute_type is CONTENT_ATTRIBUTE_TEXT.
             * @property {optimization_guide.proto.IImageInfo|null} [imageData] Only set if attribute_type is CONTENT_ATTRIBUTE_IMAGE.
             * @property {optimization_guide.proto.ISVGRootData|null} [svgRootData] Only set if attribute_type is CONTENT_ATTRIBUTE_SVG_ROOT.
             * @property {optimization_guide.proto.ICanvasData|null} [canvasData] Only set if attribute_type is CONTENT_ATTRIBUTE_CANVAS.
             * @property {optimization_guide.proto.IVideoData|null} [videoData] Only set if attribute_type is CONTENT_ATTRIBUTE_VIDEO.
             * @property {optimization_guide.proto.IAnchorData|null} [anchorData] Only set if attribute_type is CONTENT_ATTRIBUTE_ANCHOR.
             * @property {optimization_guide.proto.IFormInfo|null} [formData] Only set if attribute_type is CONTENT_ATTRIBUTE_FORM.
             * @property {optimization_guide.proto.IFormControlData|null} [formControlData] Only set if attribute_type is CONTENT_ATTRIBUTE_FORM_CONTROL.
             * @property {optimization_guide.proto.ITableData|null} [tableData] Only set if attribute_type is CONTENT_ATTRIBUTE_TABLE.
             * @property {optimization_guide.proto.IIframeData|null} [iframeData] Only set if attribute_type is CONTENT_ATTRIBUTE_IFRAME.
             * @property {optimization_guide.proto.ITableRowData|null} [tableRowData] Only set if attribute_type is CONTENT_ATTRIBUTE_TABLE_ROW.
             * @property {number|null} [commonAncestorDomNodeId] A unique identifier for the DOM node which generated this ContentNode.
             * 
             * Note: This field is only set if the ContentNode corresponds to a DOM
             * node. There are cases where the browser generates layout nodes which don't
             * map to a single DOM node, such as pseudo elements. In such cases, this
             * field will not be set.
             * 
             * The identifier's lifetime is tied to its Document's lifetime in the
             * browser's renderer process.
             * @property {optimization_guide.proto.ContentAttributeType|null} [attributeType] ContentAttributes attributeType
             * @property {optimization_guide.proto.IGeometry|null} [geometry] This is the geometry of the common_ancestor_dom_node_id.
             * 
             * In the default mode, this is only populated if this is the
             * `accessibility_focused_dom_node_id`.
             * 
             * Populated for all nodes in
             * `ANNOTATED_PAGE_CONTENT_MODE_ACTIONABLE_ELEMENTS.`
             * @property {optimization_guide.proto.IInteractionInfo|null} [interactionInfo] The interaction information for the content node.
             * Note: The information in InteractionInfo is configured based on the
             * AnnotatedPageContentMode. See comments on the message definition for
             * details.
             * @property {Array.<optimization_guide.proto.AnnotatedRole>|null} [annotatedRoles] These can come from the aria role, the html tag, or are assumed from some
             * properties of the page.
             * @property {string|null} [label] A textual description of the content node from sources that may not be part
             * of the tree because the content is not rendered. For example, `aria-label`
             * and `aria-labelledby` attributes.
             * 
             * Only populated for ANNOTATED_PAGE_CONTENT_MODE_ACTIONABLE_ELEMENTS.`
             * @property {number|null} [labelForDomNodeId] If this is a label node associated with an input node using `for`, provides
             * the DOM node ID of the input node. This will match the
             * `common_ancestor_dom_node_id` of the ContentNode of the input node, if it
             * exists.
             * Note: The label may be an ancestor of the input node.
             * 
             * Only populated for ANNOTATED_PAGE_CONTENT_MODE_ACTIONABLE_ELEMENTS.
             * @property {optimization_guide.proto.AXRole|null} [ariaRole] The role of this ContentNode derived from the aria-role attribute.
             * 
             * Only populated for ANNOTATED_PAGE_CONTENT_MODE_ACTIONABLE_ELEMENTS.
             * @property {boolean|null} [isAdRelated] Whether the content node is from an ad.
             * @property {optimization_guide.proto.RedactionDecision|null} [redactionDecision] Redaction decision for the node.
             */

            /**
             * Constructs a new ContentAttributes.
             * @memberof optimization_guide.proto
             * @classdesc Next ID: 30
             * @implements IContentAttributes
             * @constructor
             * @param {optimization_guide.proto.IContentAttributes=} [properties] Properties to set
             */
            function ContentAttributes(properties) {
                this.annotatedRoles = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Only set if attribute_type is CONTENT_ATTRIBUTE_TEXT.
             * @member {optimization_guide.proto.ITextInfo|null|undefined} textData
             * @memberof optimization_guide.proto.ContentAttributes
             * @instance
             */
            ContentAttributes.prototype.textData = null;

            /**
             * Only set if attribute_type is CONTENT_ATTRIBUTE_IMAGE.
             * @member {optimization_guide.proto.IImageInfo|null|undefined} imageData
             * @memberof optimization_guide.proto.ContentAttributes
             * @instance
             */
            ContentAttributes.prototype.imageData = null;

            /**
             * Only set if attribute_type is CONTENT_ATTRIBUTE_SVG_ROOT.
             * @member {optimization_guide.proto.ISVGRootData|null|undefined} svgRootData
             * @memberof optimization_guide.proto.ContentAttributes
             * @instance
             */
            ContentAttributes.prototype.svgRootData = null;

            /**
             * Only set if attribute_type is CONTENT_ATTRIBUTE_CANVAS.
             * @member {optimization_guide.proto.ICanvasData|null|undefined} canvasData
             * @memberof optimization_guide.proto.ContentAttributes
             * @instance
             */
            ContentAttributes.prototype.canvasData = null;

            /**
             * Only set if attribute_type is CONTENT_ATTRIBUTE_VIDEO.
             * @member {optimization_guide.proto.IVideoData|null|undefined} videoData
             * @memberof optimization_guide.proto.ContentAttributes
             * @instance
             */
            ContentAttributes.prototype.videoData = null;

            /**
             * Only set if attribute_type is CONTENT_ATTRIBUTE_ANCHOR.
             * @member {optimization_guide.proto.IAnchorData|null|undefined} anchorData
             * @memberof optimization_guide.proto.ContentAttributes
             * @instance
             */
            ContentAttributes.prototype.anchorData = null;

            /**
             * Only set if attribute_type is CONTENT_ATTRIBUTE_FORM.
             * @member {optimization_guide.proto.IFormInfo|null|undefined} formData
             * @memberof optimization_guide.proto.ContentAttributes
             * @instance
             */
            ContentAttributes.prototype.formData = null;

            /**
             * Only set if attribute_type is CONTENT_ATTRIBUTE_FORM_CONTROL.
             * @member {optimization_guide.proto.IFormControlData|null|undefined} formControlData
             * @memberof optimization_guide.proto.ContentAttributes
             * @instance
             */
            ContentAttributes.prototype.formControlData = null;

            /**
             * Only set if attribute_type is CONTENT_ATTRIBUTE_TABLE.
             * @member {optimization_guide.proto.ITableData|null|undefined} tableData
             * @memberof optimization_guide.proto.ContentAttributes
             * @instance
             */
            ContentAttributes.prototype.tableData = null;

            /**
             * Only set if attribute_type is CONTENT_ATTRIBUTE_IFRAME.
             * @member {optimization_guide.proto.IIframeData|null|undefined} iframeData
             * @memberof optimization_guide.proto.ContentAttributes
             * @instance
             */
            ContentAttributes.prototype.iframeData = null;

            /**
             * Only set if attribute_type is CONTENT_ATTRIBUTE_TABLE_ROW.
             * @member {optimization_guide.proto.ITableRowData|null|undefined} tableRowData
             * @memberof optimization_guide.proto.ContentAttributes
             * @instance
             */
            ContentAttributes.prototype.tableRowData = null;

            /**
             * A unique identifier for the DOM node which generated this ContentNode.
             * 
             * Note: This field is only set if the ContentNode corresponds to a DOM
             * node. There are cases where the browser generates layout nodes which don't
             * map to a single DOM node, such as pseudo elements. In such cases, this
             * field will not be set.
             * 
             * The identifier's lifetime is tied to its Document's lifetime in the
             * browser's renderer process.
             * @member {number|null|undefined} commonAncestorDomNodeId
             * @memberof optimization_guide.proto.ContentAttributes
             * @instance
             */
            ContentAttributes.prototype.commonAncestorDomNodeId = null;

            /**
             * ContentAttributes attributeType.
             * @member {optimization_guide.proto.ContentAttributeType|null|undefined} attributeType
             * @memberof optimization_guide.proto.ContentAttributes
             * @instance
             */
            ContentAttributes.prototype.attributeType = null;

            /**
             * This is the geometry of the common_ancestor_dom_node_id.
             * 
             * In the default mode, this is only populated if this is the
             * `accessibility_focused_dom_node_id`.
             * 
             * Populated for all nodes in
             * `ANNOTATED_PAGE_CONTENT_MODE_ACTIONABLE_ELEMENTS.`
             * @member {optimization_guide.proto.IGeometry|null|undefined} geometry
             * @memberof optimization_guide.proto.ContentAttributes
             * @instance
             */
            ContentAttributes.prototype.geometry = null;

            /**
             * The interaction information for the content node.
             * Note: The information in InteractionInfo is configured based on the
             * AnnotatedPageContentMode. See comments on the message definition for
             * details.
             * @member {optimization_guide.proto.IInteractionInfo|null|undefined} interactionInfo
             * @memberof optimization_guide.proto.ContentAttributes
             * @instance
             */
            ContentAttributes.prototype.interactionInfo = null;

            /**
             * These can come from the aria role, the html tag, or are assumed from some
             * properties of the page.
             * @member {Array.<optimization_guide.proto.AnnotatedRole>} annotatedRoles
             * @memberof optimization_guide.proto.ContentAttributes
             * @instance
             */
            ContentAttributes.prototype.annotatedRoles = $util.emptyArray;

            /**
             * A textual description of the content node from sources that may not be part
             * of the tree because the content is not rendered. For example, `aria-label`
             * and `aria-labelledby` attributes.
             * 
             * Only populated for ANNOTATED_PAGE_CONTENT_MODE_ACTIONABLE_ELEMENTS.`
             * @member {string|null|undefined} label
             * @memberof optimization_guide.proto.ContentAttributes
             * @instance
             */
            ContentAttributes.prototype.label = null;

            /**
             * If this is a label node associated with an input node using `for`, provides
             * the DOM node ID of the input node. This will match the
             * `common_ancestor_dom_node_id` of the ContentNode of the input node, if it
             * exists.
             * Note: The label may be an ancestor of the input node.
             * 
             * Only populated for ANNOTATED_PAGE_CONTENT_MODE_ACTIONABLE_ELEMENTS.
             * @member {number|null|undefined} labelForDomNodeId
             * @memberof optimization_guide.proto.ContentAttributes
             * @instance
             */
            ContentAttributes.prototype.labelForDomNodeId = null;

            /**
             * The role of this ContentNode derived from the aria-role attribute.
             * 
             * Only populated for ANNOTATED_PAGE_CONTENT_MODE_ACTIONABLE_ELEMENTS.
             * @member {optimization_guide.proto.AXRole|null|undefined} ariaRole
             * @memberof optimization_guide.proto.ContentAttributes
             * @instance
             */
            ContentAttributes.prototype.ariaRole = null;

            /**
             * Whether the content node is from an ad.
             * @member {boolean|null|undefined} isAdRelated
             * @memberof optimization_guide.proto.ContentAttributes
             * @instance
             */
            ContentAttributes.prototype.isAdRelated = null;

            /**
             * Redaction decision for the node.
             * @member {optimization_guide.proto.RedactionDecision|null|undefined} redactionDecision
             * @memberof optimization_guide.proto.ContentAttributes
             * @instance
             */
            ContentAttributes.prototype.redactionDecision = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * ContentAttributes contentData.
             * @member {"textData"|"imageData"|"svgRootData"|"canvasData"|"videoData"|"anchorData"|"formData"|"formControlData"|"tableData"|"iframeData"|"tableRowData"|undefined} contentData
             * @memberof optimization_guide.proto.ContentAttributes
             * @instance
             */
            Object.defineProperty(ContentAttributes.prototype, "contentData", {
                get: $util.oneOfGetter($oneOfFields = ["textData", "imageData", "svgRootData", "canvasData", "videoData", "anchorData", "formData", "formControlData", "tableData", "iframeData", "tableRowData"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Decodes a ContentAttributes message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.ContentAttributes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.ContentAttributes} ContentAttributes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ContentAttributes.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.ContentAttributes();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 10: {
                            message.textData = $root.optimization_guide.proto.TextInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 11: {
                            message.imageData = $root.optimization_guide.proto.ImageInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 23: {
                            message.svgRootData = $root.optimization_guide.proto.SVGRootData.decode(reader, reader.uint32());
                            break;
                        }
                    case 24: {
                            message.canvasData = $root.optimization_guide.proto.CanvasData.decode(reader, reader.uint32());
                            break;
                        }
                    case 27: {
                            message.videoData = $root.optimization_guide.proto.VideoData.decode(reader, reader.uint32());
                            break;
                        }
                    case 14: {
                            message.anchorData = $root.optimization_guide.proto.AnchorData.decode(reader, reader.uint32());
                            break;
                        }
                    case 19: {
                            message.formData = $root.optimization_guide.proto.FormInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 20: {
                            message.formControlData = $root.optimization_guide.proto.FormControlData.decode(reader, reader.uint32());
                            break;
                        }
                    case 8: {
                            message.tableData = $root.optimization_guide.proto.TableData.decode(reader, reader.uint32());
                            break;
                        }
                    case 9: {
                            message.iframeData = $root.optimization_guide.proto.IframeData.decode(reader, reader.uint32());
                            break;
                        }
                    case 13: {
                            message.tableRowData = $root.optimization_guide.proto.TableRowData.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.commonAncestorDomNodeId = reader.int32();
                            break;
                        }
                    case 3: {
                            message.attributeType = reader.int32();
                            break;
                        }
                    case 4: {
                            message.geometry = $root.optimization_guide.proto.Geometry.decode(reader, reader.uint32());
                            break;
                        }
                    case 21: {
                            message.interactionInfo = $root.optimization_guide.proto.InteractionInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 15: {
                            if (!(message.annotatedRoles && message.annotatedRoles.length))
                                message.annotatedRoles = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.annotatedRoles.push(reader.int32());
                            } else
                                message.annotatedRoles.push(reader.int32());
                            break;
                        }
                    case 16: {
                            message.label = reader.string();
                            break;
                        }
                    case 25: {
                            message.labelForDomNodeId = reader.int32();
                            break;
                        }
                    case 26: {
                            message.ariaRole = reader.int32();
                            break;
                        }
                    case 28: {
                            message.isAdRelated = reader.bool();
                            break;
                        }
                    case 29: {
                            message.redactionDecision = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ContentAttributes;
        })();

        proto.Geometry = (function() {

            /**
             * Properties of a Geometry.
             * @memberof optimization_guide.proto
             * @interface IGeometry
             * @property {optimization_guide.proto.IBoundingRect|null} [outerBoundingBox] The bounding box of the content node mapped to the viewport ignoring any
             * ancestor clips (including the viewport clip). This can be thought of as the
             * where the element would be relative to the viewport if it "popped out" of
             * the page and was painted on top of all the content. A few use-case for this
             * are:
             * 
             * - If empty, this implies the node is not hit-testable, even once
             * scrolled onscreen.
             * - The rect's origin indicates whether whether it starts above or below the
             * viewport. A negative y-coordinate means the node's content starts above
             * the viewport.
             * @property {optimization_guide.proto.IBoundingRect|null} [visibleBoundingBox] The bounding box of the content node relative to the viewport including all
             * ancestor clipping. These are the element bounds visible to the user and
             * hit-testable in the DOM.
             * @property {optimization_guide.proto.IBoundingRect|null} [compositorBoundingBox] The bounding box of the content node relative to the viewport including all
             * ancestor clipping. This is conceptually the same as `visible_bounding_box`,
             * but with coordinates calculated by the compositor on the client side. This
             * geometry should be more in sync with the browser screenshot, and should be
             * used for screenshot redaction when present. See crbug.com/441532128 for more
             * details.
             * @property {Array.<optimization_guide.proto.IBoundingRect>|null} [fragmentVisibleBoundingBoxes] Multiple boxes are used when there are multiple rectangles belonging to
             * the same node, e.g.: across multiple lines, columns or pages. In layout
             * terms, a node that does this is called a fragmentainer.
             * Each rectangle represents a hit testable fragment belonging to the node.
             * An empty array indicates that the node is not fragmented or is entirely
             * offscreen. Relative to viewport origin.
             * @property {boolean|null} [isFixedOrStickyPosition] Whether the content node is fixed or sticky position. This may suggest
             * that the node is a header, footer, or sidebar.
             * TODO(crbug.com/490195093): Remove this field.
             */

            /**
             * Constructs a new Geometry.
             * @memberof optimization_guide.proto
             * @classdesc The geometry of the content, in the page coordinate system.
             * Next ID: 8
             * NOTE: If `visual_bounding_box` is empty, i.e., the content is offscreen and
             * it's in an iframe, the `outer_bounding_box` may be incorrect. See crbug.com/384996050
             * for details.
             * 
             * Only populated for ANNOTATED_PAGE_CONTENT_MODE_ACTIONABLE_ELEMENTS.
             * @implements IGeometry
             * @constructor
             * @param {optimization_guide.proto.IGeometry=} [properties] Properties to set
             */
            function Geometry(properties) {
                this.fragmentVisibleBoundingBoxes = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The bounding box of the content node mapped to the viewport ignoring any
             * ancestor clips (including the viewport clip). This can be thought of as the
             * where the element would be relative to the viewport if it "popped out" of
             * the page and was painted on top of all the content. A few use-case for this
             * are:
             * 
             * - If empty, this implies the node is not hit-testable, even once
             * scrolled onscreen.
             * - The rect's origin indicates whether whether it starts above or below the
             * viewport. A negative y-coordinate means the node's content starts above
             * the viewport.
             * @member {optimization_guide.proto.IBoundingRect|null|undefined} outerBoundingBox
             * @memberof optimization_guide.proto.Geometry
             * @instance
             */
            Geometry.prototype.outerBoundingBox = null;

            /**
             * The bounding box of the content node relative to the viewport including all
             * ancestor clipping. These are the element bounds visible to the user and
             * hit-testable in the DOM.
             * @member {optimization_guide.proto.IBoundingRect|null|undefined} visibleBoundingBox
             * @memberof optimization_guide.proto.Geometry
             * @instance
             */
            Geometry.prototype.visibleBoundingBox = null;

            /**
             * The bounding box of the content node relative to the viewport including all
             * ancestor clipping. This is conceptually the same as `visible_bounding_box`,
             * but with coordinates calculated by the compositor on the client side. This
             * geometry should be more in sync with the browser screenshot, and should be
             * used for screenshot redaction when present. See crbug.com/441532128 for more
             * details.
             * @member {optimization_guide.proto.IBoundingRect|null|undefined} compositorBoundingBox
             * @memberof optimization_guide.proto.Geometry
             * @instance
             */
            Geometry.prototype.compositorBoundingBox = null;

            /**
             * Multiple boxes are used when there are multiple rectangles belonging to
             * the same node, e.g.: across multiple lines, columns or pages. In layout
             * terms, a node that does this is called a fragmentainer.
             * Each rectangle represents a hit testable fragment belonging to the node.
             * An empty array indicates that the node is not fragmented or is entirely
             * offscreen. Relative to viewport origin.
             * @member {Array.<optimization_guide.proto.IBoundingRect>} fragmentVisibleBoundingBoxes
             * @memberof optimization_guide.proto.Geometry
             * @instance
             */
            Geometry.prototype.fragmentVisibleBoundingBoxes = $util.emptyArray;

            /**
             * Whether the content node is fixed or sticky position. This may suggest
             * that the node is a header, footer, or sidebar.
             * TODO(crbug.com/490195093): Remove this field.
             * @member {boolean|null|undefined} isFixedOrStickyPosition
             * @memberof optimization_guide.proto.Geometry
             * @instance
             */
            Geometry.prototype.isFixedOrStickyPosition = null;

            /**
             * Decodes a Geometry message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.Geometry
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.Geometry} Geometry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Geometry.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.Geometry();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.outerBoundingBox = $root.optimization_guide.proto.BoundingRect.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.visibleBoundingBox = $root.optimization_guide.proto.BoundingRect.decode(reader, reader.uint32());
                            break;
                        }
                    case 7: {
                            message.compositorBoundingBox = $root.optimization_guide.proto.BoundingRect.decode(reader, reader.uint32());
                            break;
                        }
                    case 6: {
                            if (!(message.fragmentVisibleBoundingBoxes && message.fragmentVisibleBoundingBoxes.length))
                                message.fragmentVisibleBoundingBoxes = [];
                            message.fragmentVisibleBoundingBoxes.push($root.optimization_guide.proto.BoundingRect.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.isFixedOrStickyPosition = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return Geometry;
        })();

        proto.BoundingRect = (function() {

            /**
             * Properties of a BoundingRect.
             * @memberof optimization_guide.proto
             * @interface IBoundingRect
             * @property {number|null} [x] BoundingRect x
             * @property {number|null} [y] BoundingRect y
             * @property {number|null} [width] BoundingRect width
             * @property {number|null} [height] BoundingRect height
             */

            /**
             * Constructs a new BoundingRect.
             * @memberof optimization_guide.proto
             * @classdesc Represents a BoundingRect.
             * @implements IBoundingRect
             * @constructor
             * @param {optimization_guide.proto.IBoundingRect=} [properties] Properties to set
             */
            function BoundingRect(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BoundingRect x.
             * @member {number|null|undefined} x
             * @memberof optimization_guide.proto.BoundingRect
             * @instance
             */
            BoundingRect.prototype.x = null;

            /**
             * BoundingRect y.
             * @member {number|null|undefined} y
             * @memberof optimization_guide.proto.BoundingRect
             * @instance
             */
            BoundingRect.prototype.y = null;

            /**
             * BoundingRect width.
             * @member {number|null|undefined} width
             * @memberof optimization_guide.proto.BoundingRect
             * @instance
             */
            BoundingRect.prototype.width = null;

            /**
             * BoundingRect height.
             * @member {number|null|undefined} height
             * @memberof optimization_guide.proto.BoundingRect
             * @instance
             */
            BoundingRect.prototype.height = null;

            /**
             * Decodes a BoundingRect message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.BoundingRect
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.BoundingRect} BoundingRect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoundingRect.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.BoundingRect();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.x = reader.int32();
                            break;
                        }
                    case 2: {
                            message.y = reader.int32();
                            break;
                        }
                    case 3: {
                            message.width = reader.int32();
                            break;
                        }
                    case 4: {
                            message.height = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return BoundingRect;
        })();

        proto.InteractionInfo = (function() {

            /**
             * Properties of an InteractionInfo.
             * @memberof optimization_guide.proto
             * @interface IInteractionInfo
             * @property {optimization_guide.proto.IScrollerInfo|null} [scrollerInfo] Set if the content node is scrollable.
             * @property {boolean|null} [isSelectable] Whether the content node is selectable.
             * TODO(crbug.com/490195093): Remove this field.
             * @property {boolean|null} [isEditable] Whether the content node is editable; i.e. whether the user can type into
             * it. This refers to the text actually being editable, not whether the
             * content node is a text field.
             * TODO(crbug.com/490195093): Remove this field.
             * @property {boolean|null} [canResizeHorizontal] Whether the content node can be resized. This is relevant for scroll
             * containers and iframes which have the CSS resize behavior.
             * TODO(crbug.com/490195093): Remove these fields.
             * @property {boolean|null} [canResizeVertical] InteractionInfo canResizeVertical
             * @property {boolean|null} [isFocusable] Whether the content node is focusable. See also `is_tabbable`.
             * A node can be focusable even if it is not tabbable. For
             * example, every option in a long listbox might be focusable, but
             * only reachable using the arrow keys.
             * @property {boolean|null} [isDraggable] Whether the content node is draggable.
             * TODO(crbug.com/490195093): Remove this field.
             * @property {boolean|null} [isClickable] Whether the content node is clickable. This checks for whether the node is
             * a clickable control (e.g. form control elements) or has activation
             * behavior. It also checks for whether the node has a click handler.
             * TODO(crbug.com/490195093): Remove this field.
             * @property {number|null} [documentScopedZOrder] The z-order of the content node relative to other nodes in the same
             * Document. A higher value means the node is in front of other nodes with
             * lower values.
             * 
             * Since all content within a Document is rendered as a single layer, nodes
             * behind the iframe in the embedder draw behind all nodes inside the
             * iframe's Document (similar for nodes on top of the iframe node).
             * 
             * Note: This value is only set for nodes in the viewport.
             * @property {Array.<optimization_guide.proto.ClickabilityReason>|null} [debugClickabilityReasons] If this node is detected to be is_clickable, provides the reason which
             * caused that.
             * Note: This may not capture all the reasons.
             * Deprecated: Use clickability_reasons instead.
             * TODO(crbug.com/490195093): Remove this field.
             * @property {Array.<optimization_guide.proto.ClickabilityReason>|null} [clickabilityReasons] Provides signals which indicate whether the node is actionable. The action
             * may be triggered by clicking or hovering on the element.
             * @property {boolean|null} [isDisabled] Whether the content node is explicitly disabled from being actionable. For
             * example, a `select` element with the `disabled` or `aria-disabled`
             * attribute. Disabled nodes are still valid action targets and can consume
             * events. This is not set for nodes which are not hit-testable and will
             * ignore events, for example with `pointer-events: none`.
             * @property {Array.<optimization_guide.proto.InteractionDisabledReason>|null} [interactionDisabledReasons] Hints on why the interaction with the node is disabled.
             * 
             * TODO(linnan): Deprecate is_disabled in favour of the list of reasons.
             * @property {boolean|null} [isTabbable] Whether the content node is tabbable. This is determined by whether the
             * node is focusable and has a non-negative computed tab index (usually 0,
             * which indicates it fits into the tab cycle in its natural order).
             * @property {boolean|null} [hasAriaActivedescendant] Whether the content node has the aria-activedescendant attribute set. This
             * attribute is used to indicate which element in a set of child elements is
             * currently active.
             * @property {Array.<number>|null} [ariaActionTargetNodeIds] Secondary-action targets for a container widget. This lets APC represent
             * cases like split buttons or tabs with close buttons where both the
             * container and the secondary action element are actionable.
             */

            /**
             * Constructs a new InteractionInfo.
             * @memberof optimization_guide.proto
             * @classdesc The interaction information for the content node. This indicates whether the
             * node is interactive and what type of interaction it supports.
             * 
             * Note: ScrollerInfo is populated for ANNOTATED_PAGE_CONTENT_MODE_DEFAULT. The
             * rest of the fields are only populated for
             * ANNOTATED_PAGE_CONTENT_MODE_ACTIONABLE_ELEMENTS.
             * Next ID: 21
             * @implements IInteractionInfo
             * @constructor
             * @param {optimization_guide.proto.IInteractionInfo=} [properties] Properties to set
             */
            function InteractionInfo(properties) {
                this.debugClickabilityReasons = [];
                this.clickabilityReasons = [];
                this.interactionDisabledReasons = [];
                this.ariaActionTargetNodeIds = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Set if the content node is scrollable.
             * @member {optimization_guide.proto.IScrollerInfo|null|undefined} scrollerInfo
             * @memberof optimization_guide.proto.InteractionInfo
             * @instance
             */
            InteractionInfo.prototype.scrollerInfo = null;

            /**
             * Whether the content node is selectable.
             * TODO(crbug.com/490195093): Remove this field.
             * @member {boolean|null|undefined} isSelectable
             * @memberof optimization_guide.proto.InteractionInfo
             * @instance
             */
            InteractionInfo.prototype.isSelectable = null;

            /**
             * Whether the content node is editable; i.e. whether the user can type into
             * it. This refers to the text actually being editable, not whether the
             * content node is a text field.
             * TODO(crbug.com/490195093): Remove this field.
             * @member {boolean|null|undefined} isEditable
             * @memberof optimization_guide.proto.InteractionInfo
             * @instance
             */
            InteractionInfo.prototype.isEditable = null;

            /**
             * Whether the content node can be resized. This is relevant for scroll
             * containers and iframes which have the CSS resize behavior.
             * TODO(crbug.com/490195093): Remove these fields.
             * @member {boolean|null|undefined} canResizeHorizontal
             * @memberof optimization_guide.proto.InteractionInfo
             * @instance
             */
            InteractionInfo.prototype.canResizeHorizontal = null;

            /**
             * InteractionInfo canResizeVertical.
             * @member {boolean|null|undefined} canResizeVertical
             * @memberof optimization_guide.proto.InteractionInfo
             * @instance
             */
            InteractionInfo.prototype.canResizeVertical = null;

            /**
             * Whether the content node is focusable. See also `is_tabbable`.
             * A node can be focusable even if it is not tabbable. For
             * example, every option in a long listbox might be focusable, but
             * only reachable using the arrow keys.
             * @member {boolean|null|undefined} isFocusable
             * @memberof optimization_guide.proto.InteractionInfo
             * @instance
             */
            InteractionInfo.prototype.isFocusable = null;

            /**
             * Whether the content node is draggable.
             * TODO(crbug.com/490195093): Remove this field.
             * @member {boolean|null|undefined} isDraggable
             * @memberof optimization_guide.proto.InteractionInfo
             * @instance
             */
            InteractionInfo.prototype.isDraggable = null;

            /**
             * Whether the content node is clickable. This checks for whether the node is
             * a clickable control (e.g. form control elements) or has activation
             * behavior. It also checks for whether the node has a click handler.
             * TODO(crbug.com/490195093): Remove this field.
             * @member {boolean|null|undefined} isClickable
             * @memberof optimization_guide.proto.InteractionInfo
             * @instance
             */
            InteractionInfo.prototype.isClickable = null;

            /**
             * The z-order of the content node relative to other nodes in the same
             * Document. A higher value means the node is in front of other nodes with
             * lower values.
             * 
             * Since all content within a Document is rendered as a single layer, nodes
             * behind the iframe in the embedder draw behind all nodes inside the
             * iframe's Document (similar for nodes on top of the iframe node).
             * 
             * Note: This value is only set for nodes in the viewport.
             * @member {number|null|undefined} documentScopedZOrder
             * @memberof optimization_guide.proto.InteractionInfo
             * @instance
             */
            InteractionInfo.prototype.documentScopedZOrder = null;

            /**
             * If this node is detected to be is_clickable, provides the reason which
             * caused that.
             * Note: This may not capture all the reasons.
             * Deprecated: Use clickability_reasons instead.
             * TODO(crbug.com/490195093): Remove this field.
             * @member {Array.<optimization_guide.proto.ClickabilityReason>} debugClickabilityReasons
             * @memberof optimization_guide.proto.InteractionInfo
             * @instance
             */
            InteractionInfo.prototype.debugClickabilityReasons = $util.emptyArray;

            /**
             * Provides signals which indicate whether the node is actionable. The action
             * may be triggered by clicking or hovering on the element.
             * @member {Array.<optimization_guide.proto.ClickabilityReason>} clickabilityReasons
             * @memberof optimization_guide.proto.InteractionInfo
             * @instance
             */
            InteractionInfo.prototype.clickabilityReasons = $util.emptyArray;

            /**
             * Whether the content node is explicitly disabled from being actionable. For
             * example, a `select` element with the `disabled` or `aria-disabled`
             * attribute. Disabled nodes are still valid action targets and can consume
             * events. This is not set for nodes which are not hit-testable and will
             * ignore events, for example with `pointer-events: none`.
             * @member {boolean|null|undefined} isDisabled
             * @memberof optimization_guide.proto.InteractionInfo
             * @instance
             */
            InteractionInfo.prototype.isDisabled = null;

            /**
             * Hints on why the interaction with the node is disabled.
             * 
             * TODO(linnan): Deprecate is_disabled in favour of the list of reasons.
             * @member {Array.<optimization_guide.proto.InteractionDisabledReason>} interactionDisabledReasons
             * @memberof optimization_guide.proto.InteractionInfo
             * @instance
             */
            InteractionInfo.prototype.interactionDisabledReasons = $util.emptyArray;

            /**
             * Whether the content node is tabbable. This is determined by whether the
             * node is focusable and has a non-negative computed tab index (usually 0,
             * which indicates it fits into the tab cycle in its natural order).
             * @member {boolean|null|undefined} isTabbable
             * @memberof optimization_guide.proto.InteractionInfo
             * @instance
             */
            InteractionInfo.prototype.isTabbable = null;

            /**
             * Whether the content node has the aria-activedescendant attribute set. This
             * attribute is used to indicate which element in a set of child elements is
             * currently active.
             * @member {boolean|null|undefined} hasAriaActivedescendant
             * @memberof optimization_guide.proto.InteractionInfo
             * @instance
             */
            InteractionInfo.prototype.hasAriaActivedescendant = null;

            /**
             * Secondary-action targets for a container widget. This lets APC represent
             * cases like split buttons or tabs with close buttons where both the
             * container and the secondary action element are actionable.
             * @member {Array.<number>} ariaActionTargetNodeIds
             * @memberof optimization_guide.proto.InteractionInfo
             * @instance
             */
            InteractionInfo.prototype.ariaActionTargetNodeIds = $util.emptyArray;

            /**
             * Decodes an InteractionInfo message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.InteractionInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.InteractionInfo} InteractionInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InteractionInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.InteractionInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 12: {
                            message.scrollerInfo = $root.optimization_guide.proto.ScrollerInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.isSelectable = reader.bool();
                            break;
                        }
                    case 4: {
                            message.isEditable = reader.bool();
                            break;
                        }
                    case 5: {
                            message.canResizeHorizontal = reader.bool();
                            break;
                        }
                    case 6: {
                            message.canResizeVertical = reader.bool();
                            break;
                        }
                    case 7: {
                            message.isFocusable = reader.bool();
                            break;
                        }
                    case 9: {
                            message.isDraggable = reader.bool();
                            break;
                        }
                    case 10: {
                            message.isClickable = reader.bool();
                            break;
                        }
                    case 13: {
                            message.documentScopedZOrder = reader.int32();
                            break;
                        }
                    case 14: {
                            if (!(message.debugClickabilityReasons && message.debugClickabilityReasons.length))
                                message.debugClickabilityReasons = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.debugClickabilityReasons.push(reader.int32());
                            } else
                                message.debugClickabilityReasons.push(reader.int32());
                            break;
                        }
                    case 15: {
                            if (!(message.clickabilityReasons && message.clickabilityReasons.length))
                                message.clickabilityReasons = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.clickabilityReasons.push(reader.int32());
                            } else
                                message.clickabilityReasons.push(reader.int32());
                            break;
                        }
                    case 16: {
                            message.isDisabled = reader.bool();
                            break;
                        }
                    case 17: {
                            if (!(message.interactionDisabledReasons && message.interactionDisabledReasons.length))
                                message.interactionDisabledReasons = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.interactionDisabledReasons.push(reader.int32());
                            } else
                                message.interactionDisabledReasons.push(reader.int32());
                            break;
                        }
                    case 18: {
                            message.isTabbable = reader.bool();
                            break;
                        }
                    case 19: {
                            message.hasAriaActivedescendant = reader.bool();
                            break;
                        }
                    case 20: {
                            if (!(message.ariaActionTargetNodeIds && message.ariaActionTargetNodeIds.length))
                                message.ariaActionTargetNodeIds = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.ariaActionTargetNodeIds.push(reader.int32());
                            } else
                                message.ariaActionTargetNodeIds.push(reader.int32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return InteractionInfo;
        })();

        proto.ScrollerInfo = (function() {

            /**
             * Properties of a ScrollerInfo.
             * @memberof optimization_guide.proto
             * @interface IScrollerInfo
             * @property {optimization_guide.proto.IBoundingSize|null} [scrollingBounds] The complete layout dimensions of the scroller. This is the total area
             * that can be revealed through a scroll operation.
             * @property {optimization_guide.proto.IBoundingRect|null} [visibleArea] The subset of this scroller's content which is currently scrolled to. This
             * is relative to the origin of `scrolling_bounds`.
             * @property {boolean|null} [userScrollableHorizontal] Indicates whether this can be scrolled by the user in horizontal or
             * vertical directions. These nodes can still be scrolled by script.
             * @property {boolean|null} [userScrollableVertical] ScrollerInfo userScrollableVertical
             */

            /**
             * Constructs a new ScrollerInfo.
             * @memberof optimization_guide.proto
             * @classdesc The coordinate space for the dimensions here is physical coordinates (not
             * logical coordinates). This means it's the same irrespective of the writing
             * mode.
             * The dimensions also exclude non-overlay scrollbars.
             * @implements IScrollerInfo
             * @constructor
             * @param {optimization_guide.proto.IScrollerInfo=} [properties] Properties to set
             */
            function ScrollerInfo(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The complete layout dimensions of the scroller. This is the total area
             * that can be revealed through a scroll operation.
             * @member {optimization_guide.proto.IBoundingSize|null|undefined} scrollingBounds
             * @memberof optimization_guide.proto.ScrollerInfo
             * @instance
             */
            ScrollerInfo.prototype.scrollingBounds = null;

            /**
             * The subset of this scroller's content which is currently scrolled to. This
             * is relative to the origin of `scrolling_bounds`.
             * @member {optimization_guide.proto.IBoundingRect|null|undefined} visibleArea
             * @memberof optimization_guide.proto.ScrollerInfo
             * @instance
             */
            ScrollerInfo.prototype.visibleArea = null;

            /**
             * Indicates whether this can be scrolled by the user in horizontal or
             * vertical directions. These nodes can still be scrolled by script.
             * @member {boolean|null|undefined} userScrollableHorizontal
             * @memberof optimization_guide.proto.ScrollerInfo
             * @instance
             */
            ScrollerInfo.prototype.userScrollableHorizontal = null;

            /**
             * ScrollerInfo userScrollableVertical.
             * @member {boolean|null|undefined} userScrollableVertical
             * @memberof optimization_guide.proto.ScrollerInfo
             * @instance
             */
            ScrollerInfo.prototype.userScrollableVertical = null;

            /**
             * Decodes a ScrollerInfo message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.ScrollerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.ScrollerInfo} ScrollerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ScrollerInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.ScrollerInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.scrollingBounds = $root.optimization_guide.proto.BoundingSize.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.visibleArea = $root.optimization_guide.proto.BoundingRect.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.userScrollableHorizontal = reader.bool();
                            break;
                        }
                    case 4: {
                            message.userScrollableVertical = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ScrollerInfo;
        })();

        proto.BoundingSize = (function() {

            /**
             * Properties of a BoundingSize.
             * @memberof optimization_guide.proto
             * @interface IBoundingSize
             * @property {number|null} [width] BoundingSize width
             * @property {number|null} [height] BoundingSize height
             */

            /**
             * Constructs a new BoundingSize.
             * @memberof optimization_guide.proto
             * @classdesc Represents a BoundingSize.
             * @implements IBoundingSize
             * @constructor
             * @param {optimization_guide.proto.IBoundingSize=} [properties] Properties to set
             */
            function BoundingSize(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BoundingSize width.
             * @member {number|null|undefined} width
             * @memberof optimization_guide.proto.BoundingSize
             * @instance
             */
            BoundingSize.prototype.width = null;

            /**
             * BoundingSize height.
             * @member {number|null|undefined} height
             * @memberof optimization_guide.proto.BoundingSize
             * @instance
             */
            BoundingSize.prototype.height = null;

            /**
             * Decodes a BoundingSize message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.BoundingSize
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.BoundingSize} BoundingSize
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoundingSize.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.BoundingSize();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.width = reader.int32();
                            break;
                        }
                    case 2: {
                            message.height = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return BoundingSize;
        })();

        proto.TextInfo = (function() {

            /**
             * Properties of a TextInfo.
             * @memberof optimization_guide.proto
             * @interface ITextInfo
             * @property {string|null} [textContent] TextInfo textContent
             * @property {optimization_guide.proto.ITextStyle|null} [textStyle] TextInfo textStyle
             */

            /**
             * Constructs a new TextInfo.
             * @memberof optimization_guide.proto
             * @classdesc Next ID: 5
             * @implements ITextInfo
             * @constructor
             * @param {optimization_guide.proto.ITextInfo=} [properties] Properties to set
             */
            function TextInfo(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TextInfo textContent.
             * @member {string|null|undefined} textContent
             * @memberof optimization_guide.proto.TextInfo
             * @instance
             */
            TextInfo.prototype.textContent = null;

            /**
             * TextInfo textStyle.
             * @member {optimization_guide.proto.ITextStyle|null|undefined} textStyle
             * @memberof optimization_guide.proto.TextInfo
             * @instance
             */
            TextInfo.prototype.textStyle = null;

            /**
             * Decodes a TextInfo message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.TextInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.TextInfo} TextInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TextInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.TextInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.textContent = reader.string();
                            break;
                        }
                    case 3: {
                            message.textStyle = $root.optimization_guide.proto.TextStyle.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return TextInfo;
        })();

        proto.TextStyle = (function() {

            /**
             * Properties of a TextStyle.
             * @memberof optimization_guide.proto
             * @interface ITextStyle
             * @property {optimization_guide.proto.TextSize|null} [textSize] A crude approximation of text size. The default is M. An ML model doesn't
             * need to know the precise size of the text; it just needs to know whether
             * it's relatively small or large. The default is M.
             * @property {boolean|null} [hasEmphasis] Whether the text has inline semantics that denote emphasis. For example:
             * bold, italics, underline, super/subscript, etc. An ML model doesn't need
             * to know which specific semantic was used; only that the website author
             * chose to emphasize the text in some way. The default is false.
             * @property {number|null} [color] The color of the text in RGBA format.
             */

            /**
             * Constructs a new TextStyle.
             * @memberof optimization_guide.proto
             * @classdesc Next ID: 5
             * @implements ITextStyle
             * @constructor
             * @param {optimization_guide.proto.ITextStyle=} [properties] Properties to set
             */
            function TextStyle(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * A crude approximation of text size. The default is M. An ML model doesn't
             * need to know the precise size of the text; it just needs to know whether
             * it's relatively small or large. The default is M.
             * @member {optimization_guide.proto.TextSize|null|undefined} textSize
             * @memberof optimization_guide.proto.TextStyle
             * @instance
             */
            TextStyle.prototype.textSize = null;

            /**
             * Whether the text has inline semantics that denote emphasis. For example:
             * bold, italics, underline, super/subscript, etc. An ML model doesn't need
             * to know which specific semantic was used; only that the website author
             * chose to emphasize the text in some way. The default is false.
             * @member {boolean|null|undefined} hasEmphasis
             * @memberof optimization_guide.proto.TextStyle
             * @instance
             */
            TextStyle.prototype.hasEmphasis = null;

            /**
             * The color of the text in RGBA format.
             * @member {number|null|undefined} color
             * @memberof optimization_guide.proto.TextStyle
             * @instance
             */
            TextStyle.prototype.color = null;

            /**
             * Decodes a TextStyle message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.TextStyle
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.TextStyle} TextStyle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TextStyle.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.TextStyle();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.textSize = reader.int32();
                            break;
                        }
                    case 2: {
                            message.hasEmphasis = reader.bool();
                            break;
                        }
                    case 3: {
                            message.color = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return TextStyle;
        })();

        proto.ImageInfo = (function() {

            /**
             * Properties of an ImageInfo.
             * @memberof optimization_guide.proto
             * @interface IImageInfo
             * @property {string|null} [imageCaption] ImageInfo imageCaption
             * @property {optimization_guide.proto.ISecurityOrigin|null} [securityOrigin] Provides the source origin for the image.
             */

            /**
             * Constructs a new ImageInfo.
             * @memberof optimization_guide.proto
             * @classdesc Information about the image. In the future, this may include a pixmap.
             * Next ID: 5
             * @implements IImageInfo
             * @constructor
             * @param {optimization_guide.proto.IImageInfo=} [properties] Properties to set
             */
            function ImageInfo(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ImageInfo imageCaption.
             * @member {string|null|undefined} imageCaption
             * @memberof optimization_guide.proto.ImageInfo
             * @instance
             */
            ImageInfo.prototype.imageCaption = null;

            /**
             * Provides the source origin for the image.
             * @member {optimization_guide.proto.ISecurityOrigin|null|undefined} securityOrigin
             * @memberof optimization_guide.proto.ImageInfo
             * @instance
             */
            ImageInfo.prototype.securityOrigin = null;

            /**
             * Decodes an ImageInfo message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.ImageInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.ImageInfo} ImageInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ImageInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.ImageInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 2: {
                            message.imageCaption = reader.string();
                            break;
                        }
                    case 4: {
                            message.securityOrigin = $root.optimization_guide.proto.SecurityOrigin.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ImageInfo;
        })();

        proto.SecurityOrigin = (function() {

            /**
             * Properties of a SecurityOrigin.
             * @memberof optimization_guide.proto
             * @interface ISecurityOrigin
             * @property {boolean|null} [opaque] Whether the origin is opaque.
             * @property {string|null} [value] The raw value of the origin. It is set to the nonce for opaque origins and
             * scheme-host-port string for non-opaque origins.
             */

            /**
             * Constructs a new SecurityOrigin.
             * @memberof optimization_guide.proto
             * @classdesc The source origin for the web content in AnnotatedPageContent. This maps to
             * the origin concept in the spec: https://url.spec.whatwg.org/#origin.
             * 
             * This is distinct from URLs. There are cases where the URL for a Document,
             * example about:blank, is different from the origin that the Document's data
             * should be attributed to.
             * 
             * Next ID: 3
             * @implements ISecurityOrigin
             * @constructor
             * @param {optimization_guide.proto.ISecurityOrigin=} [properties] Properties to set
             */
            function SecurityOrigin(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Whether the origin is opaque.
             * @member {boolean|null|undefined} opaque
             * @memberof optimization_guide.proto.SecurityOrigin
             * @instance
             */
            SecurityOrigin.prototype.opaque = null;

            /**
             * The raw value of the origin. It is set to the nonce for opaque origins and
             * scheme-host-port string for non-opaque origins.
             * @member {string|null|undefined} value
             * @memberof optimization_guide.proto.SecurityOrigin
             * @instance
             */
            SecurityOrigin.prototype.value = null;

            /**
             * Decodes a SecurityOrigin message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.SecurityOrigin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.SecurityOrigin} SecurityOrigin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SecurityOrigin.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.SecurityOrigin();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.opaque = reader.bool();
                            break;
                        }
                    case 2: {
                            message.value = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return SecurityOrigin;
        })();

        proto.SVGRootData = (function() {

            /**
             * Properties of a SVGRootData.
             * @memberof optimization_guide.proto
             * @interface ISVGRootData
             * @property {string|null} [innerText] The inner text for the SVG subtree.
             */

            /**
             * Constructs a new SVGRootData.
             * @memberof optimization_guide.proto
             * @classdesc Represents a SVGRootData.
             * @implements ISVGRootData
             * @constructor
             * @param {optimization_guide.proto.ISVGRootData=} [properties] Properties to set
             */
            function SVGRootData(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The inner text for the SVG subtree.
             * @member {string|null|undefined} innerText
             * @memberof optimization_guide.proto.SVGRootData
             * @instance
             */
            SVGRootData.prototype.innerText = null;

            /**
             * Decodes a SVGRootData message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.SVGRootData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.SVGRootData} SVGRootData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SVGRootData.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.SVGRootData();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.innerText = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return SVGRootData;
        })();

        proto.CanvasData = (function() {

            /**
             * Properties of a CanvasData.
             * @memberof optimization_guide.proto
             * @interface ICanvasData
             * @property {number|null} [layoutWidth] CanvasData layoutWidth
             * @property {number|null} [layoutHeight] CanvasData layoutHeight
             */

            /**
             * Constructs a new CanvasData.
             * @memberof optimization_guide.proto
             * @classdesc Represents a CanvasData.
             * @implements ICanvasData
             * @constructor
             * @param {optimization_guide.proto.ICanvasData=} [properties] Properties to set
             */
            function CanvasData(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CanvasData layoutWidth.
             * @member {number|null|undefined} layoutWidth
             * @memberof optimization_guide.proto.CanvasData
             * @instance
             */
            CanvasData.prototype.layoutWidth = null;

            /**
             * CanvasData layoutHeight.
             * @member {number|null|undefined} layoutHeight
             * @memberof optimization_guide.proto.CanvasData
             * @instance
             */
            CanvasData.prototype.layoutHeight = null;

            /**
             * Decodes a CanvasData message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.CanvasData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.CanvasData} CanvasData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CanvasData.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.CanvasData();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.layoutWidth = reader.int32();
                            break;
                        }
                    case 2: {
                            message.layoutHeight = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return CanvasData;
        })();

        proto.VideoData = (function() {

            /**
             * Properties of a VideoData.
             * @memberof optimization_guide.proto
             * @interface IVideoData
             * @property {string|null} [url] The URL of the video.
             * @property {optimization_guide.proto.ISecurityOrigin|null} [securityOrigin] The source origin for the video.
             */

            /**
             * Constructs a new VideoData.
             * @memberof optimization_guide.proto
             * @classdesc Represents a VideoData.
             * @implements IVideoData
             * @constructor
             * @param {optimization_guide.proto.IVideoData=} [properties] Properties to set
             */
            function VideoData(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The URL of the video.
             * @member {string|null|undefined} url
             * @memberof optimization_guide.proto.VideoData
             * @instance
             */
            VideoData.prototype.url = null;

            /**
             * The source origin for the video.
             * @member {optimization_guide.proto.ISecurityOrigin|null|undefined} securityOrigin
             * @memberof optimization_guide.proto.VideoData
             * @instance
             */
            VideoData.prototype.securityOrigin = null;

            /**
             * Decodes a VideoData message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.VideoData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.VideoData} VideoData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VideoData.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.VideoData();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.url = reader.string();
                            break;
                        }
                    case 2: {
                            message.securityOrigin = $root.optimization_guide.proto.SecurityOrigin.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return VideoData;
        })();

        proto.AnchorData = (function() {

            /**
             * Properties of an AnchorData.
             * @memberof optimization_guide.proto
             * @interface IAnchorData
             * @property {string|null} [url] AnchorData url
             * @property {Array.<optimization_guide.proto.AnchorRel>|null} [rel] The relationship between the linked URL and the current document.
             */

            /**
             * Constructs a new AnchorData.
             * @memberof optimization_guide.proto
             * @classdesc Represents an AnchorData.
             * @implements IAnchorData
             * @constructor
             * @param {optimization_guide.proto.IAnchorData=} [properties] Properties to set
             */
            function AnchorData(properties) {
                this.rel = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AnchorData url.
             * @member {string|null|undefined} url
             * @memberof optimization_guide.proto.AnchorData
             * @instance
             */
            AnchorData.prototype.url = null;

            /**
             * The relationship between the linked URL and the current document.
             * @member {Array.<optimization_guide.proto.AnchorRel>} rel
             * @memberof optimization_guide.proto.AnchorData
             * @instance
             */
            AnchorData.prototype.rel = $util.emptyArray;

            /**
             * Decodes an AnchorData message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.AnchorData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.AnchorData} AnchorData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AnchorData.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.AnchorData();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.url = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.rel && message.rel.length))
                                message.rel = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.rel.push(reader.int32());
                            } else
                                message.rel.push(reader.int32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return AnchorData;
        })();

        proto.FormInfo = (function() {

            /**
             * Properties of a FormInfo.
             * @memberof optimization_guide.proto
             * @interface IFormInfo
             * @property {string|null} [formName] The name of the form.
             * @property {string|null} [actionUrl] The action URL of the form, if present. This is the resolved value
             * including the final origin.
             */

            /**
             * Constructs a new FormInfo.
             * @memberof optimization_guide.proto
             * @classdesc FormInfo is a mirror of AIPageContentFormData from
             * third_party/blink/public/mojom/content_extraction/ai_page_content.mojom,
             * in contrast with FormData, which is a mirror of autofill::FormData from
             * components/autofill/core/common/mojom/autofill_types.mojom.
             * @implements IFormInfo
             * @constructor
             * @param {optimization_guide.proto.IFormInfo=} [properties] Properties to set
             */
            function FormInfo(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The name of the form.
             * @member {string|null|undefined} formName
             * @memberof optimization_guide.proto.FormInfo
             * @instance
             */
            FormInfo.prototype.formName = null;

            /**
             * The action URL of the form, if present. This is the resolved value
             * including the final origin.
             * @member {string|null|undefined} actionUrl
             * @memberof optimization_guide.proto.FormInfo
             * @instance
             */
            FormInfo.prototype.actionUrl = null;

            /**
             * Decodes a FormInfo message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.FormInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.FormInfo} FormInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FormInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.FormInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.formName = reader.string();
                            break;
                        }
                    case 2: {
                            message.actionUrl = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return FormInfo;
        })();

        proto.FormControlData = (function() {

            /**
             * Properties of a FormControlData.
             * @memberof optimization_guide.proto
             * @interface IFormControlData
             * @property {string|null} [fieldName] The name for the field.
             * @property {string|null} [fieldValue] The value of the field.
             * @property {optimization_guide.proto.FormControlType|null} [formControlType] The type of control for this form field.
             * @property {Array.<optimization_guide.proto.ISelectOption>|null} [selectOptions] The options for a select field, if applicable.
             * @property {string|null} [placeholder] The placeholder text for the field. This is only applicable to text fields.
             * @property {boolean|null} [isChecked] Whether the field is checked. This is only applicable to checkbox and radio
             * button fields.
             * @property {boolean|null} [isRequired] Whether the field is required.
             * @property {optimization_guide.proto.RedactionDecision|null} [redactionDecision] Redaction decision for form fields.
             * Deprecated in favor of redaction_decision on ContentAttributes.
             * @property {Array.<optimization_guide.proto.CoarseAutofillFieldType>|null} [coarseAutofillFieldType] The types of data that can be autofilled this field. This does not imply
             * that the user has data to fill of this type on file.
             * @property {number|null} [autofillSectionId] Global identifier (across one AnnotatedPageContent) of an autofillable
             * section. Fields that belong to the same section are filled in one fill
             * operation. These fields share the same `autofill_section_id`.
             * The value may change over time if the page changes (IDs are generated
             * in AnnotatedPageContent traversal order according to Autofill's
             * understanding of forms).
             * @property {boolean|null} [isReadonly] Whether the field is readonly.
             */

            /**
             * Constructs a new FormControlData.
             * @memberof optimization_guide.proto
             * @classdesc Next ID: 12
             * @implements IFormControlData
             * @constructor
             * @param {optimization_guide.proto.IFormControlData=} [properties] Properties to set
             */
            function FormControlData(properties) {
                this.selectOptions = [];
                this.coarseAutofillFieldType = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The name for the field.
             * @member {string|null|undefined} fieldName
             * @memberof optimization_guide.proto.FormControlData
             * @instance
             */
            FormControlData.prototype.fieldName = null;

            /**
             * The value of the field.
             * @member {string|null|undefined} fieldValue
             * @memberof optimization_guide.proto.FormControlData
             * @instance
             */
            FormControlData.prototype.fieldValue = null;

            /**
             * The type of control for this form field.
             * @member {optimization_guide.proto.FormControlType|null|undefined} formControlType
             * @memberof optimization_guide.proto.FormControlData
             * @instance
             */
            FormControlData.prototype.formControlType = null;

            /**
             * The options for a select field, if applicable.
             * @member {Array.<optimization_guide.proto.ISelectOption>} selectOptions
             * @memberof optimization_guide.proto.FormControlData
             * @instance
             */
            FormControlData.prototype.selectOptions = $util.emptyArray;

            /**
             * The placeholder text for the field. This is only applicable to text fields.
             * @member {string|null|undefined} placeholder
             * @memberof optimization_guide.proto.FormControlData
             * @instance
             */
            FormControlData.prototype.placeholder = null;

            /**
             * Whether the field is checked. This is only applicable to checkbox and radio
             * button fields.
             * @member {boolean|null|undefined} isChecked
             * @memberof optimization_guide.proto.FormControlData
             * @instance
             */
            FormControlData.prototype.isChecked = null;

            /**
             * Whether the field is required.
             * @member {boolean|null|undefined} isRequired
             * @memberof optimization_guide.proto.FormControlData
             * @instance
             */
            FormControlData.prototype.isRequired = null;

            /**
             * Redaction decision for form fields.
             * Deprecated in favor of redaction_decision on ContentAttributes.
             * @member {optimization_guide.proto.RedactionDecision|null|undefined} redactionDecision
             * @memberof optimization_guide.proto.FormControlData
             * @instance
             */
            FormControlData.prototype.redactionDecision = null;

            /**
             * The types of data that can be autofilled this field. This does not imply
             * that the user has data to fill of this type on file.
             * @member {Array.<optimization_guide.proto.CoarseAutofillFieldType>} coarseAutofillFieldType
             * @memberof optimization_guide.proto.FormControlData
             * @instance
             */
            FormControlData.prototype.coarseAutofillFieldType = $util.emptyArray;

            /**
             * Global identifier (across one AnnotatedPageContent) of an autofillable
             * section. Fields that belong to the same section are filled in one fill
             * operation. These fields share the same `autofill_section_id`.
             * The value may change over time if the page changes (IDs are generated
             * in AnnotatedPageContent traversal order according to Autofill's
             * understanding of forms).
             * @member {number|null|undefined} autofillSectionId
             * @memberof optimization_guide.proto.FormControlData
             * @instance
             */
            FormControlData.prototype.autofillSectionId = null;

            /**
             * Whether the field is readonly.
             * @member {boolean|null|undefined} isReadonly
             * @memberof optimization_guide.proto.FormControlData
             * @instance
             */
            FormControlData.prototype.isReadonly = null;

            /**
             * Decodes a FormControlData message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.FormControlData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.FormControlData} FormControlData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FormControlData.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.FormControlData();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.fieldName = reader.string();
                            break;
                        }
                    case 2: {
                            message.fieldValue = reader.string();
                            break;
                        }
                    case 3: {
                            message.formControlType = reader.int32();
                            break;
                        }
                    case 4: {
                            if (!(message.selectOptions && message.selectOptions.length))
                                message.selectOptions = [];
                            message.selectOptions.push($root.optimization_guide.proto.SelectOption.decode(reader, reader.uint32()));
                            break;
                        }
                    case 5: {
                            message.placeholder = reader.string();
                            break;
                        }
                    case 6: {
                            message.isChecked = reader.bool();
                            break;
                        }
                    case 7: {
                            message.isRequired = reader.bool();
                            break;
                        }
                    case 8: {
                            message.redactionDecision = reader.int32();
                            break;
                        }
                    case 9: {
                            if (!(message.coarseAutofillFieldType && message.coarseAutofillFieldType.length))
                                message.coarseAutofillFieldType = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.coarseAutofillFieldType.push(reader.int32());
                            } else
                                message.coarseAutofillFieldType.push(reader.int32());
                            break;
                        }
                    case 10: {
                            message.autofillSectionId = reader.uint32();
                            break;
                        }
                    case 11: {
                            message.isReadonly = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return FormControlData;
        })();

        proto.SelectOption = (function() {

            /**
             * Properties of a SelectOption.
             * @memberof optimization_guide.proto
             * @interface ISelectOption
             * @property {string|null} [value] SelectOption value
             * @property {string|null} [text] SelectOption text
             * @property {boolean|null} [isSelected] Whether the option is selected.
             * Not set for FormsAI purposes, but used in PCA.
             * @property {boolean|null} [isDisabled] Whether the option is disabled.
             * Not set for FormsAI purposes, but used in PCA.
             */

            /**
             * Constructs a new SelectOption.
             * @memberof optimization_guide.proto
             * @classdesc Represents an option in a select field. See below for example.
             * 
             * HTML                                      | value  | text
             * ------------------------------------------+--------+------
             * <option value=Foo label=Bar>Baz</option>  | "Foo"  | "Bar"
             * <option value=Foo>Bar</option>            | "Foo"  | "Bar"
             * <option label=Bar>Foo</option>            | "Foo"  | "Bar"
             * <option>Foo</option>                      | "Foo"  | "Foo"
             * <option value=Foo></option>               | "Foo"  | ""
             * <option label=Bar></option>               | ""     | "Bar"
             * @implements ISelectOption
             * @constructor
             * @param {optimization_guide.proto.ISelectOption=} [properties] Properties to set
             */
            function SelectOption(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SelectOption value.
             * @member {string|null|undefined} value
             * @memberof optimization_guide.proto.SelectOption
             * @instance
             */
            SelectOption.prototype.value = null;

            /**
             * SelectOption text.
             * @member {string|null|undefined} text
             * @memberof optimization_guide.proto.SelectOption
             * @instance
             */
            SelectOption.prototype.text = null;

            /**
             * Whether the option is selected.
             * Not set for FormsAI purposes, but used in PCA.
             * @member {boolean|null|undefined} isSelected
             * @memberof optimization_guide.proto.SelectOption
             * @instance
             */
            SelectOption.prototype.isSelected = null;

            /**
             * Whether the option is disabled.
             * Not set for FormsAI purposes, but used in PCA.
             * @member {boolean|null|undefined} isDisabled
             * @memberof optimization_guide.proto.SelectOption
             * @instance
             */
            SelectOption.prototype.isDisabled = null;

            /**
             * Decodes a SelectOption message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.SelectOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.SelectOption} SelectOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SelectOption.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.SelectOption();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.string();
                            break;
                        }
                    case 2: {
                            message.text = reader.string();
                            break;
                        }
                    case 3: {
                            message.isSelected = reader.bool();
                            break;
                        }
                    case 4: {
                            message.isDisabled = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return SelectOption;
        })();

        proto.TableData = (function() {

            /**
             * Properties of a TableData.
             * @memberof optimization_guide.proto
             * @interface ITableData
             * @property {string|null} [tableName] The name of the table, coming from the caption.
             * Note: this field has some quirks for backwards-compatibility reasons:
             * 1. It is only populated if the table name is an immediate child of the
             * table element. Table names further down in the tree are skipped, leaving
             * this field empty.
             * 2. The table name also will appear in a separate child text node.
             */

            /**
             * Constructs a new TableData.
             * @memberof optimization_guide.proto
             * @classdesc Represents a TableData.
             * @implements ITableData
             * @constructor
             * @param {optimization_guide.proto.ITableData=} [properties] Properties to set
             */
            function TableData(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The name of the table, coming from the caption.
             * Note: this field has some quirks for backwards-compatibility reasons:
             * 1. It is only populated if the table name is an immediate child of the
             * table element. Table names further down in the tree are skipped, leaving
             * this field empty.
             * 2. The table name also will appear in a separate child text node.
             * @member {string|null|undefined} tableName
             * @memberof optimization_guide.proto.TableData
             * @instance
             */
            TableData.prototype.tableName = null;

            /**
             * Decodes a TableData message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.TableData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.TableData} TableData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TableData.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.TableData();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.tableName = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return TableData;
        })();

        proto.IframeData = (function() {

            /**
             * Properties of an IframeData.
             * @memberof optimization_guide.proto
             * @interface IIframeData
             * @property {optimization_guide.proto.IFrameData|null} [frameData] IframeData frameData
             * @property {optimization_guide.proto.IframeData.IRedactedFrameMetadata|null} [redactedFrameMetadata] IframeData redactedFrameMetadata
             */

            /**
             * Constructs a new IframeData.
             * @memberof optimization_guide.proto
             * @classdesc Represents an IframeData.
             * @implements IIframeData
             * @constructor
             * @param {optimization_guide.proto.IIframeData=} [properties] Properties to set
             */
            function IframeData(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * IframeData frameData.
             * @member {optimization_guide.proto.IFrameData|null|undefined} frameData
             * @memberof optimization_guide.proto.IframeData
             * @instance
             */
            IframeData.prototype.frameData = null;

            /**
             * IframeData redactedFrameMetadata.
             * @member {optimization_guide.proto.IframeData.IRedactedFrameMetadata|null|undefined} redactedFrameMetadata
             * @memberof optimization_guide.proto.IframeData
             * @instance
             */
            IframeData.prototype.redactedFrameMetadata = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * IframeData data.
             * @member {"frameData"|"redactedFrameMetadata"|undefined} data
             * @memberof optimization_guide.proto.IframeData
             * @instance
             */
            Object.defineProperty(IframeData.prototype, "data", {
                get: $util.oneOfGetter($oneOfFields = ["frameData", "redactedFrameMetadata"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Decodes an IframeData message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.IframeData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.IframeData} IframeData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IframeData.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.IframeData();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 3: {
                            message.frameData = $root.optimization_guide.proto.FrameData.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            message.redactedFrameMetadata = $root.optimization_guide.proto.IframeData.RedactedFrameMetadata.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            IframeData.RedactedFrameMetadata = (function() {

                /**
                 * Properties of a RedactedFrameMetadata.
                 * @memberof optimization_guide.proto.IframeData
                 * @interface IRedactedFrameMetadata
                 * @property {optimization_guide.proto.IframeData.RedactedFrameMetadata.Reason|null} [reason] RedactedFrameMetadata reason
                 */

                /**
                 * Constructs a new RedactedFrameMetadata.
                 * @memberof optimization_guide.proto.IframeData
                 * @classdesc Represents a RedactedFrameMetadata.
                 * @implements IRedactedFrameMetadata
                 * @constructor
                 * @param {optimization_guide.proto.IframeData.IRedactedFrameMetadata=} [properties] Properties to set
                 */
                function RedactedFrameMetadata(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RedactedFrameMetadata reason.
                 * @member {optimization_guide.proto.IframeData.RedactedFrameMetadata.Reason|null|undefined} reason
                 * @memberof optimization_guide.proto.IframeData.RedactedFrameMetadata
                 * @instance
                 */
                RedactedFrameMetadata.prototype.reason = null;

                /**
                 * Decodes a RedactedFrameMetadata message from the specified reader or buffer.
                 * @function decode
                 * @memberof optimization_guide.proto.IframeData.RedactedFrameMetadata
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {optimization_guide.proto.IframeData.RedactedFrameMetadata} RedactedFrameMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RedactedFrameMetadata.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.IframeData.RedactedFrameMetadata();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.reason = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Reason enum.
                 * @name optimization_guide.proto.IframeData.RedactedFrameMetadata.Reason
                 * @enum {number}
                 * @property {number} REASON_UNSPECIFIED=0 REASON_UNSPECIFIED value
                 * @property {number} REASON_CROSS_SITE=1 This iframe was redacted because it is not on the same eTLD+1 site as
                 * the top-level frame.
                 * @property {number} REASON_CROSS_ORIGIN=2 This iframe was redacted because it is not on the same origin as the
                 * top-level frame.
                 */
                RedactedFrameMetadata.Reason = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "REASON_UNSPECIFIED"] = 0;
                    values[valuesById[1] = "REASON_CROSS_SITE"] = 1;
                    values[valuesById[2] = "REASON_CROSS_ORIGIN"] = 2;
                    return values;
                })();

                return RedactedFrameMetadata;
            })();

            return IframeData;
        })();

        proto.FrameData = (function() {

            /**
             * Properties of a FrameData.
             * @memberof optimization_guide.proto
             * @interface IFrameData
             * @property {optimization_guide.proto.ISecurityOrigin|null} [securityOrigin] The security origin of the frame.
             * @property {optimization_guide.proto.IFrameInteractionInfo|null} [frameInteractionInfo] Interaction information for the frame.
             * @property {optimization_guide.proto.IDocumentIdentifier|null} [documentIdentifier] Identifies the document in a frame.
             * @property {string|null} [url] The URL of the frame.
             * @property {string|null} [title] The title of the frame.
             * @property {optimization_guide.proto.IPaidContentMetadata|null} [paidContentMetadata] Information about paid content in the frame.  Only set
             * if paid content was checked.
             * @property {optimization_guide.proto.IMediaData|null} [mediaData] Information about the media in the frame. This information is only added
             * for the frame which controls the media session associated with this page.
             * Only one frame can control the media session at a time via the media
             * session web API.
             * @property {Array.<optimization_guide.proto.IScriptTool>|null} [scriptTools] The set of tools supported by this Document.
             * @property {Array.<optimization_guide.proto.IScriptToolResult>|null} [scriptToolResults] The results of executing script tools.
             * TODO: crbug.com/489841640 - Remove this field once all consumers move to using
             * the field in ActionsResult.
             */

            /**
             * Constructs a new FrameData.
             * @memberof optimization_guide.proto
             * @classdesc The data for a frame in the web page. This is the common data structure for
             * both the root frame and embedded iframes.
             * Next ID: 12
             * @implements IFrameData
             * @constructor
             * @param {optimization_guide.proto.IFrameData=} [properties] Properties to set
             */
            function FrameData(properties) {
                this.scriptTools = [];
                this.scriptToolResults = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The security origin of the frame.
             * @member {optimization_guide.proto.ISecurityOrigin|null|undefined} securityOrigin
             * @memberof optimization_guide.proto.FrameData
             * @instance
             */
            FrameData.prototype.securityOrigin = null;

            /**
             * Interaction information for the frame.
             * @member {optimization_guide.proto.IFrameInteractionInfo|null|undefined} frameInteractionInfo
             * @memberof optimization_guide.proto.FrameData
             * @instance
             */
            FrameData.prototype.frameInteractionInfo = null;

            /**
             * Identifies the document in a frame.
             * @member {optimization_guide.proto.IDocumentIdentifier|null|undefined} documentIdentifier
             * @memberof optimization_guide.proto.FrameData
             * @instance
             */
            FrameData.prototype.documentIdentifier = null;

            /**
             * The URL of the frame.
             * @member {string|null|undefined} url
             * @memberof optimization_guide.proto.FrameData
             * @instance
             */
            FrameData.prototype.url = null;

            /**
             * The title of the frame.
             * @member {string|null|undefined} title
             * @memberof optimization_guide.proto.FrameData
             * @instance
             */
            FrameData.prototype.title = null;

            /**
             * Information about paid content in the frame.  Only set
             * if paid content was checked.
             * @member {optimization_guide.proto.IPaidContentMetadata|null|undefined} paidContentMetadata
             * @memberof optimization_guide.proto.FrameData
             * @instance
             */
            FrameData.prototype.paidContentMetadata = null;

            /**
             * Information about the media in the frame. This information is only added
             * for the frame which controls the media session associated with this page.
             * Only one frame can control the media session at a time via the media
             * session web API.
             * @member {optimization_guide.proto.IMediaData|null|undefined} mediaData
             * @memberof optimization_guide.proto.FrameData
             * @instance
             */
            FrameData.prototype.mediaData = null;

            /**
             * The set of tools supported by this Document.
             * @member {Array.<optimization_guide.proto.IScriptTool>} scriptTools
             * @memberof optimization_guide.proto.FrameData
             * @instance
             */
            FrameData.prototype.scriptTools = $util.emptyArray;

            /**
             * The results of executing script tools.
             * TODO: crbug.com/489841640 - Remove this field once all consumers move to using
             * the field in ActionsResult.
             * @member {Array.<optimization_guide.proto.IScriptToolResult>} scriptToolResults
             * @memberof optimization_guide.proto.FrameData
             * @instance
             */
            FrameData.prototype.scriptToolResults = $util.emptyArray;

            /**
             * Decodes a FrameData message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.FrameData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.FrameData} FrameData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FrameData.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.FrameData();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.securityOrigin = $root.optimization_guide.proto.SecurityOrigin.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.frameInteractionInfo = $root.optimization_guide.proto.FrameInteractionInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.documentIdentifier = $root.optimization_guide.proto.DocumentIdentifier.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            message.url = reader.string();
                            break;
                        }
                    case 5: {
                            message.title = reader.string();
                            break;
                        }
                    case 6: {
                            message.paidContentMetadata = $root.optimization_guide.proto.PaidContentMetadata.decode(reader, reader.uint32());
                            break;
                        }
                    case 8: {
                            message.mediaData = $root.optimization_guide.proto.MediaData.decode(reader, reader.uint32());
                            break;
                        }
                    case 9: {
                            if (!(message.scriptTools && message.scriptTools.length))
                                message.scriptTools = [];
                            message.scriptTools.push($root.optimization_guide.proto.ScriptTool.decode(reader, reader.uint32()));
                            break;
                        }
                    case 11: {
                            if (!(message.scriptToolResults && message.scriptToolResults.length))
                                message.scriptToolResults = [];
                            message.scriptToolResults.push($root.optimization_guide.proto.ScriptToolResult.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return FrameData;
        })();

        proto.FrameInteractionInfo = (function() {

            /**
             * Properties of a FrameInteractionInfo.
             * @memberof optimization_guide.proto
             * @interface IFrameInteractionInfo
             * @property {optimization_guide.proto.ISelection|null} [selection] The current selection.
             * @property {number|null} [focusedNodeId] The content node ID of the content node that is currently focused.
             * @property {number|null} [accessibilityFocusedNodeId] The content node ID of the content node that is currently focused by a
             * screen reader. If this is set, it means that a screen reader is being used.
             */

            /**
             * Constructs a new FrameInteractionInfo.
             * @memberof optimization_guide.proto
             * @classdesc The interaction information for the frame. This is for interactions that
             * are specific to the frame, such as the current selection.
             * Next ID: 4
             * @implements IFrameInteractionInfo
             * @constructor
             * @param {optimization_guide.proto.IFrameInteractionInfo=} [properties] Properties to set
             */
            function FrameInteractionInfo(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The current selection.
             * @member {optimization_guide.proto.ISelection|null|undefined} selection
             * @memberof optimization_guide.proto.FrameInteractionInfo
             * @instance
             */
            FrameInteractionInfo.prototype.selection = null;

            /**
             * The content node ID of the content node that is currently focused.
             * @member {number|null|undefined} focusedNodeId
             * @memberof optimization_guide.proto.FrameInteractionInfo
             * @instance
             */
            FrameInteractionInfo.prototype.focusedNodeId = null;

            /**
             * The content node ID of the content node that is currently focused by a
             * screen reader. If this is set, it means that a screen reader is being used.
             * @member {number|null|undefined} accessibilityFocusedNodeId
             * @memberof optimization_guide.proto.FrameInteractionInfo
             * @instance
             */
            FrameInteractionInfo.prototype.accessibilityFocusedNodeId = null;

            /**
             * Decodes a FrameInteractionInfo message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.FrameInteractionInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.FrameInteractionInfo} FrameInteractionInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FrameInteractionInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.FrameInteractionInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.selection = $root.optimization_guide.proto.Selection.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.focusedNodeId = reader.int32();
                            break;
                        }
                    case 3: {
                            message.accessibilityFocusedNodeId = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return FrameInteractionInfo;
        })();

        proto.Selection = (function() {

            /**
             * Properties of a Selection.
             * @memberof optimization_guide.proto
             * @interface ISelection
             * @property {number|null} [startNodeId] The content node ID of the start node. Note that this could be the same as
             * the end node ID. This node is always before or equal to the end node.
             * @property {number|null} [startOffset] The character offset of the start of the selection from the start of the
             * text contained in start node.
             * @property {number|null} [endNodeId] The content node ID of the end node. Note that this could be the same as
             * the start node ID. This node is always after or equal to the start node.
             * @property {number|null} [endOffset] The character offset of the end of the selection from the start of the
             * text contained in end node.
             * @property {string|null} [selectedText] The selected text.
             */

            /**
             * Constructs a new Selection.
             * @memberof optimization_guide.proto
             * @classdesc Represents a selection in the page. This is a frame-level concept.
             * @implements ISelection
             * @constructor
             * @param {optimization_guide.proto.ISelection=} [properties] Properties to set
             */
            function Selection(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The content node ID of the start node. Note that this could be the same as
             * the end node ID. This node is always before or equal to the end node.
             * @member {number|null|undefined} startNodeId
             * @memberof optimization_guide.proto.Selection
             * @instance
             */
            Selection.prototype.startNodeId = null;

            /**
             * The character offset of the start of the selection from the start of the
             * text contained in start node.
             * @member {number|null|undefined} startOffset
             * @memberof optimization_guide.proto.Selection
             * @instance
             */
            Selection.prototype.startOffset = null;

            /**
             * The content node ID of the end node. Note that this could be the same as
             * the start node ID. This node is always after or equal to the start node.
             * @member {number|null|undefined} endNodeId
             * @memberof optimization_guide.proto.Selection
             * @instance
             */
            Selection.prototype.endNodeId = null;

            /**
             * The character offset of the end of the selection from the start of the
             * text contained in end node.
             * @member {number|null|undefined} endOffset
             * @memberof optimization_guide.proto.Selection
             * @instance
             */
            Selection.prototype.endOffset = null;

            /**
             * The selected text.
             * @member {string|null|undefined} selectedText
             * @memberof optimization_guide.proto.Selection
             * @instance
             */
            Selection.prototype.selectedText = null;

            /**
             * Decodes a Selection message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.Selection
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.Selection} Selection
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Selection.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.Selection();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.startNodeId = reader.int32();
                            break;
                        }
                    case 2: {
                            message.startOffset = reader.int32();
                            break;
                        }
                    case 3: {
                            message.endNodeId = reader.int32();
                            break;
                        }
                    case 4: {
                            message.endOffset = reader.int32();
                            break;
                        }
                    case 5: {
                            message.selectedText = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return Selection;
        })();

        proto.DocumentIdentifier = (function() {

            /**
             * Properties of a DocumentIdentifier.
             * @memberof optimization_guide.proto
             * @interface IDocumentIdentifier
             * @property {string|null} [serializedToken] A unique identifier for a Document loaded in the browser. This ID is
             * guaranteed to be unique across all Documents for the browser's lifetime.
             * The ID is also stable for the Document's lifetime. It can be used to
             * identify the Document across APC calls.
             */

            /**
             * Constructs a new DocumentIdentifier.
             * @memberof optimization_guide.proto
             * @classdesc Directs the action to a specific Document in a frame in Chrome.
             * Next ID: 3
             * @implements IDocumentIdentifier
             * @constructor
             * @param {optimization_guide.proto.IDocumentIdentifier=} [properties] Properties to set
             */
            function DocumentIdentifier(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * A unique identifier for a Document loaded in the browser. This ID is
             * guaranteed to be unique across all Documents for the browser's lifetime.
             * The ID is also stable for the Document's lifetime. It can be used to
             * identify the Document across APC calls.
             * @member {string|null|undefined} serializedToken
             * @memberof optimization_guide.proto.DocumentIdentifier
             * @instance
             */
            DocumentIdentifier.prototype.serializedToken = null;

            /**
             * Decodes a DocumentIdentifier message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.DocumentIdentifier
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.DocumentIdentifier} DocumentIdentifier
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DocumentIdentifier.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.DocumentIdentifier();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.serializedToken = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return DocumentIdentifier;
        })();

        proto.PaidContentMetadata = (function() {

            /**
             * Properties of a PaidContentMetadata.
             * @memberof optimization_guide.proto
             * @interface IPaidContentMetadata
             * @property {boolean|null} [containsPaidContent] Whether the frame contains paid content.
             */

            /**
             * Constructs a new PaidContentMetadata.
             * @memberof optimization_guide.proto
             * @classdesc Metadata about paid content in the frame.
             * Next ID: 2
             * @implements IPaidContentMetadata
             * @constructor
             * @param {optimization_guide.proto.IPaidContentMetadata=} [properties] Properties to set
             */
            function PaidContentMetadata(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Whether the frame contains paid content.
             * @member {boolean|null|undefined} containsPaidContent
             * @memberof optimization_guide.proto.PaidContentMetadata
             * @instance
             */
            PaidContentMetadata.prototype.containsPaidContent = null;

            /**
             * Decodes a PaidContentMetadata message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.PaidContentMetadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.PaidContentMetadata} PaidContentMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PaidContentMetadata.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.PaidContentMetadata();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.containsPaidContent = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return PaidContentMetadata;
        })();

        proto.MediaData = (function() {

            /**
             * Properties of a MediaData.
             * @memberof optimization_guide.proto
             * @interface IMediaData
             * @property {optimization_guide.proto.MediaDataType|null} [mediaDataType] Type of the media in the frame.
             * @property {Array.<optimization_guide.proto.IMediaTranscript>|null} [transcripts] A list of text segments which can be combined to represent the
             * transcriptions of the media content that have been heard by the user.
             * The transcripts are in ascending order by start timestamps.
             * @property {number|null} [durationMilliseconds] The overall duration of the media.
             * @property {number|null} [currentPositionMilliseconds] The current timestamp position of the media.
             * @property {boolean|null} [isPlaying] Whether the media is currently playing or paused.
             * @property {string|null} [title] The title of the media. Must be non-empty and set by the website or default
             * to the web page title.
             * @property {string|null} [artist] The artist of the media. May be empty.
             * @property {string|null} [album] The album of the media. May be empty.
             */

            /**
             * Constructs a new MediaData.
             * @memberof optimization_guide.proto
             * @classdesc The media data for a frame in the web page. If the frame has multiple media
             * elements, only one of them is controlled by the media session. The
             * transcripts are always attached if any have been generated for past media or
             * current media in this frame, while other fields are only populated if there
             * is an active media session in the frame.
             * Next ID: 9
             * @implements IMediaData
             * @constructor
             * @param {optimization_guide.proto.IMediaData=} [properties] Properties to set
             */
            function MediaData(properties) {
                this.transcripts = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Type of the media in the frame.
             * @member {optimization_guide.proto.MediaDataType|null|undefined} mediaDataType
             * @memberof optimization_guide.proto.MediaData
             * @instance
             */
            MediaData.prototype.mediaDataType = null;

            /**
             * A list of text segments which can be combined to represent the
             * transcriptions of the media content that have been heard by the user.
             * The transcripts are in ascending order by start timestamps.
             * @member {Array.<optimization_guide.proto.IMediaTranscript>} transcripts
             * @memberof optimization_guide.proto.MediaData
             * @instance
             */
            MediaData.prototype.transcripts = $util.emptyArray;

            /**
             * The overall duration of the media.
             * @member {number|null|undefined} durationMilliseconds
             * @memberof optimization_guide.proto.MediaData
             * @instance
             */
            MediaData.prototype.durationMilliseconds = null;

            /**
             * The current timestamp position of the media.
             * @member {number|null|undefined} currentPositionMilliseconds
             * @memberof optimization_guide.proto.MediaData
             * @instance
             */
            MediaData.prototype.currentPositionMilliseconds = null;

            /**
             * Whether the media is currently playing or paused.
             * @member {boolean|null|undefined} isPlaying
             * @memberof optimization_guide.proto.MediaData
             * @instance
             */
            MediaData.prototype.isPlaying = null;

            /**
             * The title of the media. Must be non-empty and set by the website or default
             * to the web page title.
             * @member {string|null|undefined} title
             * @memberof optimization_guide.proto.MediaData
             * @instance
             */
            MediaData.prototype.title = null;

            /**
             * The artist of the media. May be empty.
             * @member {string|null|undefined} artist
             * @memberof optimization_guide.proto.MediaData
             * @instance
             */
            MediaData.prototype.artist = null;

            /**
             * The album of the media. May be empty.
             * @member {string|null|undefined} album
             * @memberof optimization_guide.proto.MediaData
             * @instance
             */
            MediaData.prototype.album = null;

            /**
             * Decodes a MediaData message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.MediaData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.MediaData} MediaData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MediaData.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.MediaData();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.mediaDataType = reader.int32();
                            break;
                        }
                    case 2: {
                            if (!(message.transcripts && message.transcripts.length))
                                message.transcripts = [];
                            message.transcripts.push($root.optimization_guide.proto.MediaTranscript.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.durationMilliseconds = reader.int64();
                            break;
                        }
                    case 4: {
                            message.currentPositionMilliseconds = reader.int64();
                            break;
                        }
                    case 5: {
                            message.isPlaying = reader.bool();
                            break;
                        }
                    case 6: {
                            message.title = reader.string();
                            break;
                        }
                    case 7: {
                            message.artist = reader.string();
                            break;
                        }
                    case 8: {
                            message.album = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return MediaData;
        })();

        proto.MediaTranscript = (function() {

            /**
             * Properties of a MediaTranscript.
             * @memberof optimization_guide.proto
             * @interface IMediaTranscript
             * @property {string|null} [text] A segment of text for the media transcript.
             * @property {number|null} [startTimestampMilliseconds] Non-negative time since the start of the media.
             */

            /**
             * Constructs a new MediaTranscript.
             * @memberof optimization_guide.proto
             * @classdesc A segment of the media transcript.
             * Next ID: 3
             * @implements IMediaTranscript
             * @constructor
             * @param {optimization_guide.proto.IMediaTranscript=} [properties] Properties to set
             */
            function MediaTranscript(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * A segment of text for the media transcript.
             * @member {string|null|undefined} text
             * @memberof optimization_guide.proto.MediaTranscript
             * @instance
             */
            MediaTranscript.prototype.text = null;

            /**
             * Non-negative time since the start of the media.
             * @member {number|null|undefined} startTimestampMilliseconds
             * @memberof optimization_guide.proto.MediaTranscript
             * @instance
             */
            MediaTranscript.prototype.startTimestampMilliseconds = null;

            /**
             * Decodes a MediaTranscript message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.MediaTranscript
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.MediaTranscript} MediaTranscript
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MediaTranscript.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.MediaTranscript();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.text = reader.string();
                            break;
                        }
                    case 2: {
                            message.startTimestampMilliseconds = reader.int64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return MediaTranscript;
        })();

        proto.ScriptTool = (function() {

            /**
             * Properties of a ScriptTool.
             * @memberof optimization_guide.proto
             * @interface IScriptTool
             * @property {string|null} [name] The name of the tool. This must be unique within the source Document's
             * scope.
             * @property {string|null} [description] A description of the tool used to understand the capabilities of the tool.
             * @property {string|null} [inputSchema] A JSON schema string describing the input expected by the tool.
             * @property {optimization_guide.proto.IScriptToolAnnotations|null} [annotations] Annotations for the tool.
             */

            /**
             * Constructs a new ScriptTool.
             * @memberof optimization_guide.proto
             * @classdesc The data for tools exposed by the Document.
             * @implements IScriptTool
             * @constructor
             * @param {optimization_guide.proto.IScriptTool=} [properties] Properties to set
             */
            function ScriptTool(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The name of the tool. This must be unique within the source Document's
             * scope.
             * @member {string|null|undefined} name
             * @memberof optimization_guide.proto.ScriptTool
             * @instance
             */
            ScriptTool.prototype.name = null;

            /**
             * A description of the tool used to understand the capabilities of the tool.
             * @member {string|null|undefined} description
             * @memberof optimization_guide.proto.ScriptTool
             * @instance
             */
            ScriptTool.prototype.description = null;

            /**
             * A JSON schema string describing the input expected by the tool.
             * @member {string|null|undefined} inputSchema
             * @memberof optimization_guide.proto.ScriptTool
             * @instance
             */
            ScriptTool.prototype.inputSchema = null;

            /**
             * Annotations for the tool.
             * @member {optimization_guide.proto.IScriptToolAnnotations|null|undefined} annotations
             * @memberof optimization_guide.proto.ScriptTool
             * @instance
             */
            ScriptTool.prototype.annotations = null;

            /**
             * Decodes a ScriptTool message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.ScriptTool
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.ScriptTool} ScriptTool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ScriptTool.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.ScriptTool();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 2: {
                            message.name = reader.string();
                            break;
                        }
                    case 3: {
                            message.description = reader.string();
                            break;
                        }
                    case 4: {
                            message.inputSchema = reader.string();
                            break;
                        }
                    case 5: {
                            message.annotations = $root.optimization_guide.proto.ScriptToolAnnotations.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ScriptTool;
        })();

        proto.ScriptToolAnnotations = (function() {

            /**
             * Properties of a ScriptToolAnnotations.
             * @memberof optimization_guide.proto
             * @interface IScriptToolAnnotations
             * @property {boolean|null} [readOnly] ScriptToolAnnotations readOnly
             */

            /**
             * Constructs a new ScriptToolAnnotations.
             * @memberof optimization_guide.proto
             * @classdesc Annotations for the script tool.
             * @implements IScriptToolAnnotations
             * @constructor
             * @param {optimization_guide.proto.IScriptToolAnnotations=} [properties] Properties to set
             */
            function ScriptToolAnnotations(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ScriptToolAnnotations readOnly.
             * @member {boolean|null|undefined} readOnly
             * @memberof optimization_guide.proto.ScriptToolAnnotations
             * @instance
             */
            ScriptToolAnnotations.prototype.readOnly = null;

            /**
             * Decodes a ScriptToolAnnotations message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.ScriptToolAnnotations
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.ScriptToolAnnotations} ScriptToolAnnotations
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ScriptToolAnnotations.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.ScriptToolAnnotations();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.readOnly = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ScriptToolAnnotations;
        })();

        proto.ScriptToolResult = (function() {

            /**
             * Properties of a ScriptToolResult.
             * @memberof optimization_guide.proto
             * @interface IScriptToolResult
             * @property {number|null} [indexOfScriptToolAction] The index of the ScriptToolAction in the Actions proto. This is used to
             * match the result to the corresponding action.
             * @property {string|null} [result] The result from executing the tool, if the execution was successful.
             * @property {string|null} [toolName] Provides the name and arguments the tool was invoked with. This is
             * populated to provide context for the result.
             * @property {string|null} [inputArguments] ScriptToolResult inputArguments
             * @property {optimization_guide.proto.IScriptTool|null} [tool] The tool that was executed.
             */

            /**
             * Constructs a new ScriptToolResult.
             * @memberof optimization_guide.proto
             * @classdesc Result of executing a script tool.
             * Next ID: 6
             * TODO: crbug.com/489841640 - Move this to actions_data.proto.
             * @implements IScriptToolResult
             * @constructor
             * @param {optimization_guide.proto.IScriptToolResult=} [properties] Properties to set
             */
            function ScriptToolResult(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The index of the ScriptToolAction in the Actions proto. This is used to
             * match the result to the corresponding action.
             * @member {number|null|undefined} indexOfScriptToolAction
             * @memberof optimization_guide.proto.ScriptToolResult
             * @instance
             */
            ScriptToolResult.prototype.indexOfScriptToolAction = null;

            /**
             * The result from executing the tool, if the execution was successful.
             * @member {string|null|undefined} result
             * @memberof optimization_guide.proto.ScriptToolResult
             * @instance
             */
            ScriptToolResult.prototype.result = null;

            /**
             * Provides the name and arguments the tool was invoked with. This is
             * populated to provide context for the result.
             * @member {string|null|undefined} toolName
             * @memberof optimization_guide.proto.ScriptToolResult
             * @instance
             */
            ScriptToolResult.prototype.toolName = null;

            /**
             * ScriptToolResult inputArguments.
             * @member {string|null|undefined} inputArguments
             * @memberof optimization_guide.proto.ScriptToolResult
             * @instance
             */
            ScriptToolResult.prototype.inputArguments = null;

            /**
             * The tool that was executed.
             * @member {optimization_guide.proto.IScriptTool|null|undefined} tool
             * @memberof optimization_guide.proto.ScriptToolResult
             * @instance
             */
            ScriptToolResult.prototype.tool = null;

            /**
             * Decodes a ScriptToolResult message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.ScriptToolResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.ScriptToolResult} ScriptToolResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ScriptToolResult.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.ScriptToolResult();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.indexOfScriptToolAction = reader.int32();
                            break;
                        }
                    case 2: {
                            message.result = reader.string();
                            break;
                        }
                    case 3: {
                            message.toolName = reader.string();
                            break;
                        }
                    case 4: {
                            message.inputArguments = reader.string();
                            break;
                        }
                    case 5: {
                            message.tool = $root.optimization_guide.proto.ScriptTool.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ScriptToolResult;
        })();

        proto.TableRowData = (function() {

            /**
             * Properties of a TableRowData.
             * @memberof optimization_guide.proto
             * @interface ITableRowData
             * @property {optimization_guide.proto.TableRowType|null} [type] TableRowData type
             */

            /**
             * Constructs a new TableRowData.
             * @memberof optimization_guide.proto
             * @classdesc Represents a TableRowData.
             * @implements ITableRowData
             * @constructor
             * @param {optimization_guide.proto.ITableRowData=} [properties] Properties to set
             */
            function TableRowData(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TableRowData type.
             * @member {optimization_guide.proto.TableRowType|null|undefined} type
             * @memberof optimization_guide.proto.TableRowData
             * @instance
             */
            TableRowData.prototype.type = null;

            /**
             * Decodes a TableRowData message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.TableRowData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.TableRowData} TableRowData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TableRowData.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.TableRowData();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.type = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return TableRowData;
        })();

        proto.PageInteractionInfo = (function() {

            /**
             * Properties of a PageInteractionInfo.
             * @memberof optimization_guide.proto
             * @interface IPageInteractionInfo
             * @property {number|null} [focusedNodeId] The content node ID of the content node that is currently focused.
             * TODO(linnan): Deprecate this field in favor of
             * FrameInteractionInfo.focused_node_id.
             * @property {number|null} [accessibilityFocusedNodeId] The content node ID of the content node that is currently focused by a
             * screen reader. If this is set, it means that a screen reader is being used.
             * TODO(linnan): Deprecate this field in favor of
             * FrameInteractionInfo.accessibility_focused_node_id.
             * @property {optimization_guide.proto.IPoint|null} [mousePosition] The last known mouse position, in the page coordinate system.
             * @property {optimization_guide.proto.IDocumentIdentifier|null} [focusedFrame] The identifier of the frame that currently has focus.
             */

            /**
             * Constructs a new PageInteractionInfo.
             * @memberof optimization_guide.proto
             * @classdesc Represents the interaction information for the page. This is for top-level
             * interactions, such as the mouse position and focused element, for which
             * there can only be one unique value.
             * Currently this is only tracked for the main frame. The IDs correspond to the
             * DOM node IDs of the content nodes in the main frame.
             * Next ID: 5
             * @implements IPageInteractionInfo
             * @constructor
             * @param {optimization_guide.proto.IPageInteractionInfo=} [properties] Properties to set
             */
            function PageInteractionInfo(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The content node ID of the content node that is currently focused.
             * TODO(linnan): Deprecate this field in favor of
             * FrameInteractionInfo.focused_node_id.
             * @member {number|null|undefined} focusedNodeId
             * @memberof optimization_guide.proto.PageInteractionInfo
             * @instance
             */
            PageInteractionInfo.prototype.focusedNodeId = null;

            /**
             * The content node ID of the content node that is currently focused by a
             * screen reader. If this is set, it means that a screen reader is being used.
             * TODO(linnan): Deprecate this field in favor of
             * FrameInteractionInfo.accessibility_focused_node_id.
             * @member {number|null|undefined} accessibilityFocusedNodeId
             * @memberof optimization_guide.proto.PageInteractionInfo
             * @instance
             */
            PageInteractionInfo.prototype.accessibilityFocusedNodeId = null;

            /**
             * The last known mouse position, in the page coordinate system.
             * @member {optimization_guide.proto.IPoint|null|undefined} mousePosition
             * @memberof optimization_guide.proto.PageInteractionInfo
             * @instance
             */
            PageInteractionInfo.prototype.mousePosition = null;

            /**
             * The identifier of the frame that currently has focus.
             * @member {optimization_guide.proto.IDocumentIdentifier|null|undefined} focusedFrame
             * @memberof optimization_guide.proto.PageInteractionInfo
             * @instance
             */
            PageInteractionInfo.prototype.focusedFrame = null;

            /**
             * Decodes a PageInteractionInfo message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.PageInteractionInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.PageInteractionInfo} PageInteractionInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PageInteractionInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.PageInteractionInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.focusedNodeId = reader.int32();
                            break;
                        }
                    case 2: {
                            message.accessibilityFocusedNodeId = reader.int32();
                            break;
                        }
                    case 3: {
                            message.mousePosition = $root.optimization_guide.proto.Point.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            message.focusedFrame = $root.optimization_guide.proto.DocumentIdentifier.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return PageInteractionInfo;
        })();

        proto.Point = (function() {

            /**
             * Properties of a Point.
             * @memberof optimization_guide.proto
             * @interface IPoint
             * @property {number|null} [x] Point x
             * @property {number|null} [y] Point y
             */

            /**
             * Constructs a new Point.
             * @memberof optimization_guide.proto
             * @classdesc Represents a Point.
             * @implements IPoint
             * @constructor
             * @param {optimization_guide.proto.IPoint=} [properties] Properties to set
             */
            function Point(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Point x.
             * @member {number|null|undefined} x
             * @memberof optimization_guide.proto.Point
             * @instance
             */
            Point.prototype.x = null;

            /**
             * Point y.
             * @member {number|null|undefined} y
             * @memberof optimization_guide.proto.Point
             * @instance
             */
            Point.prototype.y = null;

            /**
             * Decodes a Point message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.Point
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.Point} Point
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Point.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.Point();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.x = reader.int32();
                            break;
                        }
                    case 2: {
                            message.y = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return Point;
        })();

        proto.PopupWindow = (function() {

            /**
             * Properties of a PopupWindow.
             * @memberof optimization_guide.proto
             * @interface IPopupWindow
             * @property {optimization_guide.proto.IContentNode|null} [rootNode] Root node for the document in the window.
             * @property {optimization_guide.proto.IBoundingRect|null} [visibleBoundingBox] The bounding box of the popup window relative to the viewport. The popup is
             * not clipped by any ancestor except the viewport clipping the screenshot.
             * @property {optimization_guide.proto.IDocumentIdentifier|null} [openerDocumentId] Unique identifier for the document which opened this popup window.
             * @property {number|null} [openerCommonAncestorDomNodeId] Unique identifier for the node which opened this popup window. Relies on
             * opener_document_id to determine which document contains the node.
             */

            /**
             * Constructs a new PopupWindow.
             * @memberof optimization_guide.proto
             * @classdesc Represents a popup window that is open on a web page.
             * Next ID: 6
             * @implements IPopupWindow
             * @constructor
             * @param {optimization_guide.proto.IPopupWindow=} [properties] Properties to set
             */
            function PopupWindow(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Root node for the document in the window.
             * @member {optimization_guide.proto.IContentNode|null|undefined} rootNode
             * @memberof optimization_guide.proto.PopupWindow
             * @instance
             */
            PopupWindow.prototype.rootNode = null;

            /**
             * The bounding box of the popup window relative to the viewport. The popup is
             * not clipped by any ancestor except the viewport clipping the screenshot.
             * @member {optimization_guide.proto.IBoundingRect|null|undefined} visibleBoundingBox
             * @memberof optimization_guide.proto.PopupWindow
             * @instance
             */
            PopupWindow.prototype.visibleBoundingBox = null;

            /**
             * Unique identifier for the document which opened this popup window.
             * @member {optimization_guide.proto.IDocumentIdentifier|null|undefined} openerDocumentId
             * @memberof optimization_guide.proto.PopupWindow
             * @instance
             */
            PopupWindow.prototype.openerDocumentId = null;

            /**
             * Unique identifier for the node which opened this popup window. Relies on
             * opener_document_id to determine which document contains the node.
             * @member {number|null|undefined} openerCommonAncestorDomNodeId
             * @memberof optimization_guide.proto.PopupWindow
             * @instance
             */
            PopupWindow.prototype.openerCommonAncestorDomNodeId = null;

            /**
             * Decodes a PopupWindow message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.PopupWindow
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.PopupWindow} PopupWindow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PopupWindow.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.PopupWindow();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.rootNode = $root.optimization_guide.proto.ContentNode.decode(reader, reader.uint32());
                            break;
                        }
                    case 5: {
                            message.visibleBoundingBox = $root.optimization_guide.proto.BoundingRect.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.openerDocumentId = $root.optimization_guide.proto.DocumentIdentifier.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            message.openerCommonAncestorDomNodeId = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return PopupWindow;
        })();

        proto.ProfileInformation = (function() {

            /**
             * Properties of a ProfileInformation.
             * @memberof optimization_guide.proto
             * @interface IProfileInformation
             * @property {optimization_guide.proto.IAutofillInformation|null} [autofillInformation] ProfileInformation autofillInformation
             */

            /**
             * Constructs a new ProfileInformation.
             * @memberof optimization_guide.proto
             * @classdesc Information that pertains the user's Chrome profile.
             * Next ID: 2
             * @implements IProfileInformation
             * @constructor
             * @param {optimization_guide.proto.IProfileInformation=} [properties] Properties to set
             */
            function ProfileInformation(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ProfileInformation autofillInformation.
             * @member {optimization_guide.proto.IAutofillInformation|null|undefined} autofillInformation
             * @memberof optimization_guide.proto.ProfileInformation
             * @instance
             */
            ProfileInformation.prototype.autofillInformation = null;

            /**
             * Decodes a ProfileInformation message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.ProfileInformation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.ProfileInformation} ProfileInformation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProfileInformation.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.ProfileInformation();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.autofillInformation = $root.optimization_guide.proto.AutofillInformation.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ProfileInformation;
        })();

        proto.AutofillInformation = (function() {

            /**
             * Properties of an AutofillInformation.
             * @memberof optimization_guide.proto
             * @interface IAutofillInformation
             * @property {Array.<optimization_guide.proto.AutofillInformation.FillableData>|null} [fillableData] AutofillInformation fillableData
             */

            /**
             * Constructs a new AutofillInformation.
             * @memberof optimization_guide.proto
             * @classdesc Autofill information that pertains to Autofill data on the client.
             * Next ID: 2
             * @implements IAutofillInformation
             * @constructor
             * @param {optimization_guide.proto.IAutofillInformation=} [properties] Properties to set
             */
            function AutofillInformation(properties) {
                this.fillableData = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AutofillInformation fillableData.
             * @member {Array.<optimization_guide.proto.AutofillInformation.FillableData>} fillableData
             * @memberof optimization_guide.proto.AutofillInformation
             * @instance
             */
            AutofillInformation.prototype.fillableData = $util.emptyArray;

            /**
             * Decodes an AutofillInformation message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.AutofillInformation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.AutofillInformation} AutofillInformation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AutofillInformation.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.AutofillInformation();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.fillableData && message.fillableData.length))
                                message.fillableData = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.fillableData.push(reader.int32());
                            } else
                                message.fillableData.push(reader.int32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * The type of data that can be autofilled into a form because the client has
             * corresponding data on file. Note that this is coarse data: A user may have
             * an address on file that does not contain an email address. So the autofill
             * status may indicate that an address is fillable but autofill cannot be
             * triggered on an email field.
             * @name optimization_guide.proto.AutofillInformation.FillableData
             * @enum {number}
             * @property {number} UNSPECIFIED=0 UNSPECIFIED value
             * @property {number} ADDRESS=1 If reported, the user has at least one address on file.
             * @property {number} CREDIT_CARD=6 If reported, the user has at least one credit card on file.
             */
            AutofillInformation.FillableData = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNSPECIFIED"] = 0;
                values[valuesById[1] = "ADDRESS"] = 1;
                values[valuesById[6] = "CREDIT_CARD"] = 6;
                return values;
            })();

            return AutofillInformation;
        })();

        proto.GeminiInChromePageMetadata = (function() {

            /**
             * Properties of a GeminiInChromePageMetadata.
             * @memberof optimization_guide.proto
             * @interface IGeminiInChromePageMetadata
             * @property {optimization_guide.proto.IScreenshotInfo|null} [screenshotInfo] Information about the associated screenshot.
             */

            /**
             * Constructs a new GeminiInChromePageMetadata.
             * @memberof optimization_guide.proto
             * @classdesc Metadata about the page from Gemini in Chrome.
             * Next ID: 2
             * @implements IGeminiInChromePageMetadata
             * @constructor
             * @param {optimization_guide.proto.IGeminiInChromePageMetadata=} [properties] Properties to set
             */
            function GeminiInChromePageMetadata(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Information about the associated screenshot.
             * @member {optimization_guide.proto.IScreenshotInfo|null|undefined} screenshotInfo
             * @memberof optimization_guide.proto.GeminiInChromePageMetadata
             * @instance
             */
            GeminiInChromePageMetadata.prototype.screenshotInfo = null;

            /**
             * Decodes a GeminiInChromePageMetadata message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.GeminiInChromePageMetadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.GeminiInChromePageMetadata} GeminiInChromePageMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeminiInChromePageMetadata.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.GeminiInChromePageMetadata();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.screenshotInfo = $root.optimization_guide.proto.ScreenshotInfo.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return GeminiInChromePageMetadata;
        })();

        proto.ScreenshotInfo = (function() {

            /**
             * Properties of a ScreenshotInfo.
             * @memberof optimization_guide.proto
             * @interface IScreenshotInfo
             * @property {boolean|null} [hasSelectionRegionInScreenshot] Whether the screenshot contains a selection region.
             */

            /**
             * Constructs a new ScreenshotInfo.
             * @memberof optimization_guide.proto
             * @classdesc The screenshot information for the page. While the screenshot is not
             * conveyed in the parent message, this metadata should be used to inform the
             * model about the screenshot.
             * Next ID: 2
             * @implements IScreenshotInfo
             * @constructor
             * @param {optimization_guide.proto.IScreenshotInfo=} [properties] Properties to set
             */
            function ScreenshotInfo(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Whether the screenshot contains a selection region.
             * @member {boolean|null|undefined} hasSelectionRegionInScreenshot
             * @memberof optimization_guide.proto.ScreenshotInfo
             * @instance
             */
            ScreenshotInfo.prototype.hasSelectionRegionInScreenshot = null;

            /**
             * Decodes a ScreenshotInfo message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.ScreenshotInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.ScreenshotInfo} ScreenshotInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ScreenshotInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.ScreenshotInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.hasSelectionRegionInScreenshot = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ScreenshotInfo;
        })();

        proto.AutofillGlobalId = (function() {

            /**
             * Properties of an AutofillGlobalId.
             * @memberof optimization_guide.proto
             * @interface IAutofillGlobalId
             * @property {string|null} [frameToken] AutofillGlobalId frameToken
             * @property {number|null} [rendererId] AutofillGlobalId rendererId
             */

            /**
             * Constructs a new AutofillGlobalId.
             * @memberof optimization_guide.proto
             * @classdesc Uniquely identifies a DOM elements across all frames.
             * @implements IAutofillGlobalId
             * @constructor
             * @param {optimization_guide.proto.IAutofillGlobalId=} [properties] Properties to set
             */
            function AutofillGlobalId(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AutofillGlobalId frameToken.
             * @member {string|null|undefined} frameToken
             * @memberof optimization_guide.proto.AutofillGlobalId
             * @instance
             */
            AutofillGlobalId.prototype.frameToken = null;

            /**
             * AutofillGlobalId rendererId.
             * @member {number|null|undefined} rendererId
             * @memberof optimization_guide.proto.AutofillGlobalId
             * @instance
             */
            AutofillGlobalId.prototype.rendererId = null;

            /**
             * Decodes an AutofillGlobalId message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.AutofillGlobalId
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.AutofillGlobalId} AutofillGlobalId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AutofillGlobalId.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.AutofillGlobalId();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.frameToken = reader.string();
                            break;
                        }
                    case 2: {
                            message.rendererId = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return AutofillGlobalId;
        })();

        proto.FormData = (function() {

            /**
             * Properties of a FormData.
             * @memberof optimization_guide.proto
             * @interface IFormData
             * @property {string|null} [formName] The name by which autofill knows this form. This is generally either the
             * name attribute or the id_attribute value, which-ever is non-empty with
             * priority given to the name_attribute.
             * @property {Array.<optimization_guide.proto.IFormFieldData>|null} [fields] The fields contained in this form.
             * @property {optimization_guide.proto.IAutofillGlobalId|null} [globalId] Only set during data collection, not in prediction requests.
             * @property {number|null} [formSignature] Autofill's internal identifier for the form. Can change when the form
             * changes dynamically.
             * Only set during data collection, not in prediction requests.
             * @property {string|null} [actionUrl] The action URL of the form, if present. This is the resolved value
             * including the final origin.
             */

            /**
             * Constructs a new FormData.
             * @memberof optimization_guide.proto
             * @classdesc Represents a FormData.
             * @implements IFormData
             * @constructor
             * @param {optimization_guide.proto.IFormData=} [properties] Properties to set
             */
            function FormData(properties) {
                this.fields = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The name by which autofill knows this form. This is generally either the
             * name attribute or the id_attribute value, which-ever is non-empty with
             * priority given to the name_attribute.
             * @member {string|null|undefined} formName
             * @memberof optimization_guide.proto.FormData
             * @instance
             */
            FormData.prototype.formName = null;

            /**
             * The fields contained in this form.
             * @member {Array.<optimization_guide.proto.IFormFieldData>} fields
             * @memberof optimization_guide.proto.FormData
             * @instance
             */
            FormData.prototype.fields = $util.emptyArray;

            /**
             * Only set during data collection, not in prediction requests.
             * @member {optimization_guide.proto.IAutofillGlobalId|null|undefined} globalId
             * @memberof optimization_guide.proto.FormData
             * @instance
             */
            FormData.prototype.globalId = null;

            /**
             * Autofill's internal identifier for the form. Can change when the form
             * changes dynamically.
             * Only set during data collection, not in prediction requests.
             * @member {number|null|undefined} formSignature
             * @memberof optimization_guide.proto.FormData
             * @instance
             */
            FormData.prototype.formSignature = null;

            /**
             * The action URL of the form, if present. This is the resolved value
             * including the final origin.
             * @member {string|null|undefined} actionUrl
             * @memberof optimization_guide.proto.FormData
             * @instance
             */
            FormData.prototype.actionUrl = null;

            /**
             * Decodes a FormData message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.FormData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.FormData} FormData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FormData.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.FormData();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.formName = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.fields && message.fields.length))
                                message.fields = [];
                            message.fields.push($root.optimization_guide.proto.FormFieldData.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.globalId = $root.optimization_guide.proto.AutofillGlobalId.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            message.formSignature = reader.uint64();
                            break;
                        }
                    case 5: {
                            message.actionUrl = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return FormData;
        })();

        proto.FormFieldData = (function() {

            /**
             * Properties of a FormFieldData.
             * @memberof optimization_guide.proto
             * @interface IFormFieldData
             * @property {string|null} [fieldName] The name for the field.
             * @property {string|null} [fieldLabel] The label for the field.
             * @property {string|null} [fieldValue] FormFieldData fieldValue
             * @property {boolean|null} [isVisible] FormFieldData isVisible
             * @property {boolean|null} [isFocusable] Whether the field is focusable.
             * Only set during data collection, not in prediction requests.
             * @property {optimization_guide.proto.FormControlType|null} [formControlType] The type of control for this form field.
             * @property {Array.<optimization_guide.proto.ISelectOption>|null} [selectOptions] The options for a select field, if applicable.
             * @property {string|null} [placeholder] The placeholder text for the field.
             * @property {number|null} [formControlAxNodeId] The AX node ID of the form control for this field.
             * @property {boolean|null} [isEligible] FormFieldData isEligible
             * @property {optimization_guide.proto.IAutofillGlobalId|null} [globalId] Only set during data collection, not in prediction requests.
             * @property {number|null} [fieldSignature] Autofill's internal identifier for the field. Can change when the form
             * changes dynamically.
             * Only set during data collection, not in prediction requests.
             * @property {string|null} [ariaLabel] The text of the elements denoted by the aria-labelledby attribute of field
             * or the value of its aria-label attribute, with priority given to the
             * aria-labelledby attribute.
             * @property {string|null} [ariaDescription] The text of the elements denoted by the aria-describedby attribute of field
             * or the value of its aria-description attribute, with priority given to the
             * aria-describedby attribute.
             */

            /**
             * Constructs a new FormFieldData.
             * @memberof optimization_guide.proto
             * @classdesc Next ID: 15
             * @implements IFormFieldData
             * @constructor
             * @param {optimization_guide.proto.IFormFieldData=} [properties] Properties to set
             */
            function FormFieldData(properties) {
                this.selectOptions = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The name for the field.
             * @member {string|null|undefined} fieldName
             * @memberof optimization_guide.proto.FormFieldData
             * @instance
             */
            FormFieldData.prototype.fieldName = null;

            /**
             * The label for the field.
             * @member {string|null|undefined} fieldLabel
             * @memberof optimization_guide.proto.FormFieldData
             * @instance
             */
            FormFieldData.prototype.fieldLabel = null;

            /**
             * FormFieldData fieldValue.
             * @member {string|null|undefined} fieldValue
             * @memberof optimization_guide.proto.FormFieldData
             * @instance
             */
            FormFieldData.prototype.fieldValue = null;

            /**
             * FormFieldData isVisible.
             * @member {boolean|null|undefined} isVisible
             * @memberof optimization_guide.proto.FormFieldData
             * @instance
             */
            FormFieldData.prototype.isVisible = null;

            /**
             * Whether the field is focusable.
             * Only set during data collection, not in prediction requests.
             * @member {boolean|null|undefined} isFocusable
             * @memberof optimization_guide.proto.FormFieldData
             * @instance
             */
            FormFieldData.prototype.isFocusable = null;

            /**
             * The type of control for this form field.
             * @member {optimization_guide.proto.FormControlType|null|undefined} formControlType
             * @memberof optimization_guide.proto.FormFieldData
             * @instance
             */
            FormFieldData.prototype.formControlType = null;

            /**
             * The options for a select field, if applicable.
             * @member {Array.<optimization_guide.proto.ISelectOption>} selectOptions
             * @memberof optimization_guide.proto.FormFieldData
             * @instance
             */
            FormFieldData.prototype.selectOptions = $util.emptyArray;

            /**
             * The placeholder text for the field.
             * @member {string|null|undefined} placeholder
             * @memberof optimization_guide.proto.FormFieldData
             * @instance
             */
            FormFieldData.prototype.placeholder = null;

            /**
             * The AX node ID of the form control for this field.
             * @member {number|null|undefined} formControlAxNodeId
             * @memberof optimization_guide.proto.FormFieldData
             * @instance
             */
            FormFieldData.prototype.formControlAxNodeId = null;

            /**
             * FormFieldData isEligible.
             * @member {boolean|null|undefined} isEligible
             * @memberof optimization_guide.proto.FormFieldData
             * @instance
             */
            FormFieldData.prototype.isEligible = null;

            /**
             * Only set during data collection, not in prediction requests.
             * @member {optimization_guide.proto.IAutofillGlobalId|null|undefined} globalId
             * @memberof optimization_guide.proto.FormFieldData
             * @instance
             */
            FormFieldData.prototype.globalId = null;

            /**
             * Autofill's internal identifier for the field. Can change when the form
             * changes dynamically.
             * Only set during data collection, not in prediction requests.
             * @member {number|null|undefined} fieldSignature
             * @memberof optimization_guide.proto.FormFieldData
             * @instance
             */
            FormFieldData.prototype.fieldSignature = null;

            /**
             * The text of the elements denoted by the aria-labelledby attribute of field
             * or the value of its aria-label attribute, with priority given to the
             * aria-labelledby attribute.
             * @member {string|null|undefined} ariaLabel
             * @memberof optimization_guide.proto.FormFieldData
             * @instance
             */
            FormFieldData.prototype.ariaLabel = null;

            /**
             * The text of the elements denoted by the aria-describedby attribute of field
             * or the value of its aria-description attribute, with priority given to the
             * aria-describedby attribute.
             * @member {string|null|undefined} ariaDescription
             * @memberof optimization_guide.proto.FormFieldData
             * @instance
             */
            FormFieldData.prototype.ariaDescription = null;

            /**
             * Decodes a FormFieldData message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.FormFieldData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.FormFieldData} FormFieldData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FormFieldData.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.FormFieldData();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.fieldName = reader.string();
                            break;
                        }
                    case 2: {
                            message.fieldLabel = reader.string();
                            break;
                        }
                    case 3: {
                            message.fieldValue = reader.string();
                            break;
                        }
                    case 4: {
                            message.isVisible = reader.bool();
                            break;
                        }
                    case 5: {
                            message.isFocusable = reader.bool();
                            break;
                        }
                    case 6: {
                            message.formControlType = reader.int32();
                            break;
                        }
                    case 7: {
                            if (!(message.selectOptions && message.selectOptions.length))
                                message.selectOptions = [];
                            message.selectOptions.push($root.optimization_guide.proto.SelectOption.decode(reader, reader.uint32()));
                            break;
                        }
                    case 8: {
                            message.placeholder = reader.string();
                            break;
                        }
                    case 9: {
                            message.formControlAxNodeId = reader.int32();
                            break;
                        }
                    case 10: {
                            message.isEligible = reader.bool();
                            break;
                        }
                    case 11: {
                            message.globalId = $root.optimization_guide.proto.AutofillGlobalId.decode(reader, reader.uint32());
                            break;
                        }
                    case 12: {
                            message.fieldSignature = reader.uint32();
                            break;
                        }
                    case 13: {
                            message.ariaLabel = reader.string();
                            break;
                        }
                    case 14: {
                            message.ariaDescription = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return FormFieldData;
        })();

        proto.TableRow = (function() {

            /**
             * Properties of a TableRow.
             * @memberof optimization_guide.proto
             * @interface ITableRow
             * @property {Array.<optimization_guide.proto.IContentNode>|null} [cells] TableRow cells
             */

            /**
             * Constructs a new TableRow.
             * @memberof optimization_guide.proto
             * @classdesc Represents a TableRow.
             * @implements ITableRow
             * @constructor
             * @param {optimization_guide.proto.ITableRow=} [properties] Properties to set
             */
            function TableRow(properties) {
                this.cells = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TableRow cells.
             * @member {Array.<optimization_guide.proto.IContentNode>} cells
             * @memberof optimization_guide.proto.TableRow
             * @instance
             */
            TableRow.prototype.cells = $util.emptyArray;

            /**
             * Decodes a TableRow message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.TableRow
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.TableRow} TableRow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TableRow.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.TableRow();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.cells && message.cells.length))
                                message.cells = [];
                            message.cells.push($root.optimization_guide.proto.ContentNode.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return TableRow;
        })();

        proto.UserAnnotationsEntry = (function() {

            /**
             * Properties of a UserAnnotationsEntry.
             * @memberof optimization_guide.proto
             * @interface IUserAnnotationsEntry
             * @property {number|null} [entryId] The row ID of this entry from the user annotations database. This is
             * immutable except when retrieving the row from the database.
             * @property {string|null} [key] The key for this entry. Not necessarily unique.
             * @property {string|null} [value] The value for this entry.
             */

            /**
             * Constructs a new UserAnnotationsEntry.
             * @memberof optimization_guide.proto
             * @classdesc Represents a UserAnnotationsEntry.
             * @implements IUserAnnotationsEntry
             * @constructor
             * @param {optimization_guide.proto.IUserAnnotationsEntry=} [properties] Properties to set
             */
            function UserAnnotationsEntry(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The row ID of this entry from the user annotations database. This is
             * immutable except when retrieving the row from the database.
             * @member {number|null|undefined} entryId
             * @memberof optimization_guide.proto.UserAnnotationsEntry
             * @instance
             */
            UserAnnotationsEntry.prototype.entryId = null;

            /**
             * The key for this entry. Not necessarily unique.
             * @member {string|null|undefined} key
             * @memberof optimization_guide.proto.UserAnnotationsEntry
             * @instance
             */
            UserAnnotationsEntry.prototype.key = null;

            /**
             * The value for this entry.
             * @member {string|null|undefined} value
             * @memberof optimization_guide.proto.UserAnnotationsEntry
             * @instance
             */
            UserAnnotationsEntry.prototype.value = null;

            /**
             * Decodes a UserAnnotationsEntry message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.UserAnnotationsEntry
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.UserAnnotationsEntry} UserAnnotationsEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserAnnotationsEntry.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.UserAnnotationsEntry();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.entryId = reader.int64();
                            break;
                        }
                    case 2: {
                            message.key = reader.string();
                            break;
                        }
                    case 3: {
                            message.value = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return UserAnnotationsEntry;
        })();

        proto.TabGroup = (function() {

            /**
             * Properties of a TabGroup.
             * @memberof optimization_guide.proto
             * @interface ITabGroup
             * @property {string|null} [label] The label that describes this tab group.
             * @property {Array.<optimization_guide.proto.ITab>|null} [tabs] The tabs that belong in this group.
             * @property {string|null} [groupId] The id of the pre-existing tab group this corresponds to, if any.
             */

            /**
             * Constructs a new TabGroup.
             * @memberof optimization_guide.proto
             * @classdesc Represents a TabGroup.
             * @implements ITabGroup
             * @constructor
             * @param {optimization_guide.proto.ITabGroup=} [properties] Properties to set
             */
            function TabGroup(properties) {
                this.tabs = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The label that describes this tab group.
             * @member {string|null|undefined} label
             * @memberof optimization_guide.proto.TabGroup
             * @instance
             */
            TabGroup.prototype.label = null;

            /**
             * The tabs that belong in this group.
             * @member {Array.<optimization_guide.proto.ITab>} tabs
             * @memberof optimization_guide.proto.TabGroup
             * @instance
             */
            TabGroup.prototype.tabs = $util.emptyArray;

            /**
             * The id of the pre-existing tab group this corresponds to, if any.
             * @member {string|null|undefined} groupId
             * @memberof optimization_guide.proto.TabGroup
             * @instance
             */
            TabGroup.prototype.groupId = null;

            /**
             * Decodes a TabGroup message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.TabGroup
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.TabGroup} TabGroup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TabGroup.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.TabGroup();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.label = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.tabs && message.tabs.length))
                                message.tabs = [];
                            message.tabs.push($root.optimization_guide.proto.Tab.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.groupId = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return TabGroup;
        })();

        proto.Tab = (function() {

            /**
             * Properties of a Tab.
             * @memberof optimization_guide.proto
             * @interface ITab
             * @property {number|null} [tabId] A unique identifier for the tab.
             * @property {string|null} [title] The title of the tab.
             * @property {string|null} [url] The URL of the tab.
             * @property {optimization_guide.proto.IPageContext|null} [pageContext] The page context of the tab.
             */

            /**
             * Constructs a new Tab.
             * @memberof optimization_guide.proto
             * @classdesc Represents a Tab.
             * @implements ITab
             * @constructor
             * @param {optimization_guide.proto.ITab=} [properties] Properties to set
             */
            function Tab(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * A unique identifier for the tab.
             * @member {number|null|undefined} tabId
             * @memberof optimization_guide.proto.Tab
             * @instance
             */
            Tab.prototype.tabId = null;

            /**
             * The title of the tab.
             * @member {string|null|undefined} title
             * @memberof optimization_guide.proto.Tab
             * @instance
             */
            Tab.prototype.title = null;

            /**
             * The URL of the tab.
             * @member {string|null|undefined} url
             * @memberof optimization_guide.proto.Tab
             * @instance
             */
            Tab.prototype.url = null;

            /**
             * The page context of the tab.
             * @member {optimization_guide.proto.IPageContext|null|undefined} pageContext
             * @memberof optimization_guide.proto.Tab
             * @instance
             */
            Tab.prototype.pageContext = null;

            /**
             * Decodes a Tab message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.Tab
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.Tab} Tab
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Tab.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.Tab();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.tabId = reader.int64();
                            break;
                        }
                    case 2: {
                            message.title = reader.string();
                            break;
                        }
                    case 3: {
                            message.url = reader.string();
                            break;
                        }
                    case 4: {
                            message.pageContext = $root.optimization_guide.proto.PageContext.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return Tab;
        })();

        proto.SiteEngagementEntry = (function() {

            /**
             * Properties of a SiteEngagementEntry.
             * @memberof optimization_guide.proto
             * @interface ISiteEngagementEntry
             * @property {string|null} [url] The URL of the site.
             * @property {number|null} [score] On a scale of 0 to 100, the relative score of engagement with the site.
             */

            /**
             * Constructs a new SiteEngagementEntry.
             * @memberof optimization_guide.proto
             * @classdesc The site engagement information for a single site.
             * @implements ISiteEngagementEntry
             * @constructor
             * @param {optimization_guide.proto.ISiteEngagementEntry=} [properties] Properties to set
             */
            function SiteEngagementEntry(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The URL of the site.
             * @member {string|null|undefined} url
             * @memberof optimization_guide.proto.SiteEngagementEntry
             * @instance
             */
            SiteEngagementEntry.prototype.url = null;

            /**
             * On a scale of 0 to 100, the relative score of engagement with the site.
             * @member {number|null|undefined} score
             * @memberof optimization_guide.proto.SiteEngagementEntry
             * @instance
             */
            SiteEngagementEntry.prototype.score = null;

            /**
             * Decodes a SiteEngagementEntry message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.SiteEngagementEntry
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.SiteEngagementEntry} SiteEngagementEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SiteEngagementEntry.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.SiteEngagementEntry();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.url = reader.string();
                            break;
                        }
                    case 2: {
                            message.score = reader.float();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return SiteEngagementEntry;
        })();

        proto.SiteEngagement = (function() {

            /**
             * Properties of a SiteEngagement.
             * @memberof optimization_guide.proto
             * @interface ISiteEngagement
             * @property {Array.<optimization_guide.proto.ISiteEngagementEntry>|null} [entries] The site engagement information for the user.
             */

            /**
             * Constructs a new SiteEngagement.
             * @memberof optimization_guide.proto
             * @classdesc The site engagement information for the user.
             * @implements ISiteEngagement
             * @constructor
             * @param {optimization_guide.proto.ISiteEngagement=} [properties] Properties to set
             */
            function SiteEngagement(properties) {
                this.entries = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The site engagement information for the user.
             * @member {Array.<optimization_guide.proto.ISiteEngagementEntry>} entries
             * @memberof optimization_guide.proto.SiteEngagement
             * @instance
             */
            SiteEngagement.prototype.entries = $util.emptyArray;

            /**
             * Decodes a SiteEngagement message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.SiteEngagement
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.SiteEngagement} SiteEngagement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SiteEngagement.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.SiteEngagement();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.entries && message.entries.length))
                                message.entries = [];
                            message.entries.push($root.optimization_guide.proto.SiteEngagementEntry.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return SiteEngagement;
        })();

        proto.Coordinate = (function() {

            /**
             * Properties of a Coordinate.
             * @memberof optimization_guide.proto
             * @interface ICoordinate
             * @property {number|null} [x] Coordinate x
             * @property {number|null} [y] Coordinate y
             * @property {optimization_guide.proto.Coordinate.PixelType|null} [pixelType] The type of the coordinate. If not specified, the coordinate is assumed to
             * be relative to the viewport dimensions or screenshot dimensions depending
             * on the context.
             */

            /**
             * Constructs a new Coordinate.
             * @memberof optimization_guide.proto
             * @classdesc The coordinates of a point.
             * Next ID: 4
             * @implements ICoordinate
             * @constructor
             * @param {optimization_guide.proto.ICoordinate=} [properties] Properties to set
             */
            function Coordinate(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Coordinate x.
             * @member {number|null|undefined} x
             * @memberof optimization_guide.proto.Coordinate
             * @instance
             */
            Coordinate.prototype.x = null;

            /**
             * Coordinate y.
             * @member {number|null|undefined} y
             * @memberof optimization_guide.proto.Coordinate
             * @instance
             */
            Coordinate.prototype.y = null;

            /**
             * The type of the coordinate. If not specified, the coordinate is assumed to
             * be relative to the viewport dimensions or screenshot dimensions depending
             * on the context.
             * @member {optimization_guide.proto.Coordinate.PixelType|null|undefined} pixelType
             * @memberof optimization_guide.proto.Coordinate
             * @instance
             */
            Coordinate.prototype.pixelType = null;

            /**
             * Decodes a Coordinate message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.Coordinate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.Coordinate} Coordinate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Coordinate.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.Coordinate();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.x = reader.int32();
                            break;
                        }
                    case 2: {
                            message.y = reader.int32();
                            break;
                        }
                    case 3: {
                            message.pixelType = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * PixelType enum.
             * @name optimization_guide.proto.Coordinate.PixelType
             * @enum {number}
             * @property {number} PIXEL_TYPE_UNSPECIFIED=0 The coordinate type is not specified. Assumed to be viewport.
             * @property {number} PIXEL_TYPE_DIPS=1 Density independent pixels (DIPs).
             * The coordinate is in DIPs which are independent of OS-level UI scaling.
             * e.g., The coordinate is relative to the viewport dimensions set in APC.
             * @property {number} PIXEL_TYPE_PHYSICAL_PIXELS=2 Physical pixels.
             * The coordinate is provided in physical screen pixels. Values provided in
             * physical pixels depend on UI scaling factor so must not be used when the
             * scaling factor changes (e.g. APC generated, window moved to a higher
             * density monitor; physical coordinate values must now be invalidated).
             * e.g., The coordinate is relative to the dimensions of the annotated page
             * content root node.
             */
            Coordinate.PixelType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "PIXEL_TYPE_UNSPECIFIED"] = 0;
                values[valuesById[1] = "PIXEL_TYPE_DIPS"] = 1;
                values[valuesById[2] = "PIXEL_TYPE_PHYSICAL_PIXELS"] = 2;
                return values;
            })();

            return Coordinate;
        })();

        proto.MetaTag = (function() {

            /**
             * Properties of a MetaTag.
             * @memberof optimization_guide.proto
             * @interface IMetaTag
             * @property {string|null} [name] The name attribute of the meta tag.
             * @property {string|null} [content] The content attribute of the meta tag.
             */

            /**
             * Constructs a new MetaTag.
             * @memberof optimization_guide.proto
             * @classdesc A meta tag (https://developer.mozilla.org/en-US/docs/Wecrbug.com/HTML/Element/meta).
             * Next ID: 3
             * @implements IMetaTag
             * @constructor
             * @param {optimization_guide.proto.IMetaTag=} [properties] Properties to set
             */
            function MetaTag(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The name attribute of the meta tag.
             * @member {string|null|undefined} name
             * @memberof optimization_guide.proto.MetaTag
             * @instance
             */
            MetaTag.prototype.name = null;

            /**
             * The content attribute of the meta tag.
             * @member {string|null|undefined} content
             * @memberof optimization_guide.proto.MetaTag
             * @instance
             */
            MetaTag.prototype.content = null;

            /**
             * Decodes a MetaTag message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.MetaTag
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.MetaTag} MetaTag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MetaTag.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.MetaTag();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.content = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return MetaTag;
        })();

        proto.FrameMetadata = (function() {

            /**
             * Properties of a FrameMetadata.
             * @memberof optimization_guide.proto
             * @interface IFrameMetadata
             * @property {string|null} [url] The URL of the frame.
             * @property {Array.<optimization_guide.proto.IMetaTag>|null} [metaTags] FrameMetadata metaTags
             * @property {boolean|null} [hasMediaTranscripts] FrameMetadata hasMediaTranscripts
             */

            /**
             * Constructs a new FrameMetadata.
             * @memberof optimization_guide.proto
             * @classdesc Metadata about a frame.
             * Next ID: 4
             * @implements IFrameMetadata
             * @constructor
             * @param {optimization_guide.proto.IFrameMetadata=} [properties] Properties to set
             */
            function FrameMetadata(properties) {
                this.metaTags = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The URL of the frame.
             * @member {string|null|undefined} url
             * @memberof optimization_guide.proto.FrameMetadata
             * @instance
             */
            FrameMetadata.prototype.url = null;

            /**
             * FrameMetadata metaTags.
             * @member {Array.<optimization_guide.proto.IMetaTag>} metaTags
             * @memberof optimization_guide.proto.FrameMetadata
             * @instance
             */
            FrameMetadata.prototype.metaTags = $util.emptyArray;

            /**
             * FrameMetadata hasMediaTranscripts.
             * @member {boolean|null|undefined} hasMediaTranscripts
             * @memberof optimization_guide.proto.FrameMetadata
             * @instance
             */
            FrameMetadata.prototype.hasMediaTranscripts = null;

            /**
             * Decodes a FrameMetadata message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.FrameMetadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.FrameMetadata} FrameMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FrameMetadata.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.FrameMetadata();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.url = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.metaTags && message.metaTags.length))
                                message.metaTags = [];
                            message.metaTags.push($root.optimization_guide.proto.MetaTag.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.hasMediaTranscripts = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return FrameMetadata;
        })();

        proto.PageMetadata = (function() {

            /**
             * Properties of a PageMetadata.
             * @memberof optimization_guide.proto
             * @interface IPageMetadata
             * @property {Array.<optimization_guide.proto.IFrameMetadata>|null} [frameMetadata] The main frame is the first entry in the array.
             */

            /**
             * Constructs a new PageMetadata.
             * @memberof optimization_guide.proto
             * @classdesc Metadata (URL and meta tags) from page content. Includes data from meta tags
             * for all frames on this page.
             * Next ID: 2
             * @implements IPageMetadata
             * @constructor
             * @param {optimization_guide.proto.IPageMetadata=} [properties] Properties to set
             */
            function PageMetadata(properties) {
                this.frameMetadata = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The main frame is the first entry in the array.
             * @member {Array.<optimization_guide.proto.IFrameMetadata>} frameMetadata
             * @memberof optimization_guide.proto.PageMetadata
             * @instance
             */
            PageMetadata.prototype.frameMetadata = $util.emptyArray;

            /**
             * Decodes a PageMetadata message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.PageMetadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.PageMetadata} PageMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PageMetadata.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.PageMetadata();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.frameMetadata && message.frameMetadata.length))
                                message.frameMetadata = [];
                            message.frameMetadata.push($root.optimization_guide.proto.FrameMetadata.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return PageMetadata;
        })();

        proto.DocumentSelection = (function() {

            /**
             * Properties of a DocumentSelection.
             * @memberof optimization_guide.proto
             * @interface IDocumentSelection
             * @property {optimization_guide.proto.IDocumentIdentifier|null} [documentIdentifier] The document identifier of the document/frame that this selection is from.
             * @property {optimization_guide.proto.ISelection|null} [selection] The selection in the document.
             */

            /**
             * Constructs a new DocumentSelection.
             * @memberof optimization_guide.proto
             * @classdesc Represents a DocumentSelection.
             * @implements IDocumentSelection
             * @constructor
             * @param {optimization_guide.proto.IDocumentSelection=} [properties] Properties to set
             */
            function DocumentSelection(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * The document identifier of the document/frame that this selection is from.
             * @member {optimization_guide.proto.IDocumentIdentifier|null|undefined} documentIdentifier
             * @memberof optimization_guide.proto.DocumentSelection
             * @instance
             */
            DocumentSelection.prototype.documentIdentifier = null;

            /**
             * The selection in the document.
             * @member {optimization_guide.proto.ISelection|null|undefined} selection
             * @memberof optimization_guide.proto.DocumentSelection
             * @instance
             */
            DocumentSelection.prototype.selection = null;

            /**
             * Decodes a DocumentSelection message from the specified reader or buffer.
             * @function decode
             * @memberof optimization_guide.proto.DocumentSelection
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {optimization_guide.proto.DocumentSelection} DocumentSelection
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DocumentSelection.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.optimization_guide.proto.DocumentSelection();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.documentIdentifier = $root.optimization_guide.proto.DocumentIdentifier.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.selection = $root.optimization_guide.proto.Selection.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return DocumentSelection;
        })();

        /**
         * Selection text affinity, part of the a11y snapshot.
         * Next ID: 3
         * @name optimization_guide.proto.AXTextAffinity
         * @enum {number}
         * @property {number} AX_TEXT_AFFINITY_NONE=0 AX_TEXT_AFFINITY_NONE value
         * @property {number} AX_TEXT_AFFINITY_DOWNSTREAM=1 AX_TEXT_AFFINITY_DOWNSTREAM value
         * @property {number} AX_TEXT_AFFINITY_UPSTREAM=2 AX_TEXT_AFFINITY_UPSTREAM value
         */
        proto.AXTextAffinity = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AX_TEXT_AFFINITY_NONE"] = 0;
            values[valuesById[1] = "AX_TEXT_AFFINITY_DOWNSTREAM"] = 1;
            values[valuesById[2] = "AX_TEXT_AFFINITY_UPSTREAM"] = 2;
            return values;
        })();

        /**
         * AX Role.
         * Next ID: 214
         * @name optimization_guide.proto.AXRole
         * @enum {number}
         * @property {number} AX_ROLE_NONE=0 AX_ROLE_NONE value
         * @property {number} AX_ROLE_ABBR=1 AX_ROLE_ABBR value
         * @property {number} AX_ROLE_ALERT=2 AX_ROLE_ALERT value
         * @property {number} AX_ROLE_ALERTDIALOG=3 AX_ROLE_ALERTDIALOG value
         * @property {number} AX_ROLE_APPLICATION=4 AX_ROLE_APPLICATION value
         * @property {number} AX_ROLE_ARTICLE=5 AX_ROLE_ARTICLE value
         * @property {number} AX_ROLE_AUDIO=6 AX_ROLE_AUDIO value
         * @property {number} AX_ROLE_BANNER=7 AX_ROLE_BANNER value
         * @property {number} AX_ROLE_BLOCKQUOTE=8 AX_ROLE_BLOCKQUOTE value
         * @property {number} AX_ROLE_BUTTON=9 AX_ROLE_BUTTON value
         * @property {number} AX_ROLE_CANVAS=10 AX_ROLE_CANVAS value
         * @property {number} AX_ROLE_CAPTION=11 AX_ROLE_CAPTION value
         * @property {number} AX_ROLE_CARET=12 AX_ROLE_CARET value
         * @property {number} AX_ROLE_CELL=13 AX_ROLE_CELL value
         * @property {number} AX_ROLE_CHECKBOX=14 AX_ROLE_CHECKBOX value
         * @property {number} AX_ROLE_CLIENT=15 AX_ROLE_CLIENT value
         * @property {number} AX_ROLE_CODE=16 AX_ROLE_CODE value
         * @property {number} AX_ROLE_COLORWELL=17 AX_ROLE_COLORWELL value
         * @property {number} AX_ROLE_COLUMN=18 AX_ROLE_COLUMN value
         * @property {number} AX_ROLE_COLUMNHEADER=19 AX_ROLE_COLUMNHEADER value
         * @property {number} AX_ROLE_COMBOBOXGROUPING=20 AX_ROLE_COMBOBOXGROUPING value
         * @property {number} AX_ROLE_COMBOBOXMENUBUTTON=21 AX_ROLE_COMBOBOXMENUBUTTON value
         * @property {number} AX_ROLE_COMPLEMENTARY=22 AX_ROLE_COMPLEMENTARY value
         * @property {number} AX_ROLE_COMMENT=23 AX_ROLE_COMMENT value
         * @property {number} AX_ROLE_CONTENTDELETION=24 AX_ROLE_CONTENTDELETION value
         * @property {number} AX_ROLE_CONTENTINSERTION=25 AX_ROLE_CONTENTINSERTION value
         * @property {number} AX_ROLE_CONTENTINFO=26 AX_ROLE_CONTENTINFO value
         * @property {number} AX_ROLE_DATE=27 AX_ROLE_DATE value
         * @property {number} AX_ROLE_DATETIME=28 AX_ROLE_DATETIME value
         * @property {number} AX_ROLE_DEFINITION=29 AX_ROLE_DEFINITION value
         * @property {number} AX_ROLE_DESCRIPTIONLIST=30 AX_ROLE_DESCRIPTIONLIST value
         * @property {number} AX_ROLE_DESCRIPTIONLISTDETAILDEPRECATED=31 AX_ROLE_DESCRIPTIONLISTDETAILDEPRECATED value
         * @property {number} AX_ROLE_DESCRIPTIONLISTTERMDEPRECATED=32 AX_ROLE_DESCRIPTIONLISTTERMDEPRECATED value
         * @property {number} AX_ROLE_DESKTOP=33 AX_ROLE_DESKTOP value
         * @property {number} AX_ROLE_DETAILS=34 AX_ROLE_DETAILS value
         * @property {number} AX_ROLE_DIALOG=35 AX_ROLE_DIALOG value
         * @property {number} AX_ROLE_DIRECTORYDEPRECATED=36 AX_ROLE_DIRECTORYDEPRECATED value
         * @property {number} AX_ROLE_DISCLOSURETRIANGLE=37 AX_ROLE_DISCLOSURETRIANGLE value
         * @property {number} AX_ROLE_DOCABSTRACT=38 AX_ROLE_DOCABSTRACT value
         * @property {number} AX_ROLE_DOCACKNOWLEDGMENTS=39 AX_ROLE_DOCACKNOWLEDGMENTS value
         * @property {number} AX_ROLE_DOCAFTERWORD=40 AX_ROLE_DOCAFTERWORD value
         * @property {number} AX_ROLE_DOCAPPENDIX=41 AX_ROLE_DOCAPPENDIX value
         * @property {number} AX_ROLE_DOCBACKLINK=42 AX_ROLE_DOCBACKLINK value
         * @property {number} AX_ROLE_DOCBIBLIOENTRY=43 AX_ROLE_DOCBIBLIOENTRY value
         * @property {number} AX_ROLE_DOCBIBLIOGRAPHY=44 AX_ROLE_DOCBIBLIOGRAPHY value
         * @property {number} AX_ROLE_DOCBIBLIOREF=45 AX_ROLE_DOCBIBLIOREF value
         * @property {number} AX_ROLE_DOCCHAPTER=46 AX_ROLE_DOCCHAPTER value
         * @property {number} AX_ROLE_DOCCOLOPHON=47 AX_ROLE_DOCCOLOPHON value
         * @property {number} AX_ROLE_DOCCONCLUSION=48 AX_ROLE_DOCCONCLUSION value
         * @property {number} AX_ROLE_DOCCOVER=49 AX_ROLE_DOCCOVER value
         * @property {number} AX_ROLE_DOCCREDIT=50 AX_ROLE_DOCCREDIT value
         * @property {number} AX_ROLE_DOCCREDITS=51 AX_ROLE_DOCCREDITS value
         * @property {number} AX_ROLE_DOCDEDICATION=52 AX_ROLE_DOCDEDICATION value
         * @property {number} AX_ROLE_DOCENDNOTE=53 AX_ROLE_DOCENDNOTE value
         * @property {number} AX_ROLE_DOCENDNOTES=54 AX_ROLE_DOCENDNOTES value
         * @property {number} AX_ROLE_DOCEPIGRAPH=55 AX_ROLE_DOCEPIGRAPH value
         * @property {number} AX_ROLE_DOCEPILOGUE=56 AX_ROLE_DOCEPILOGUE value
         * @property {number} AX_ROLE_DOCERRATA=57 AX_ROLE_DOCERRATA value
         * @property {number} AX_ROLE_DOCEXAMPLE=58 AX_ROLE_DOCEXAMPLE value
         * @property {number} AX_ROLE_DOCFOOTNOTE=59 AX_ROLE_DOCFOOTNOTE value
         * @property {number} AX_ROLE_DOCFOREWORD=60 AX_ROLE_DOCFOREWORD value
         * @property {number} AX_ROLE_DOCGLOSSARY=61 AX_ROLE_DOCGLOSSARY value
         * @property {number} AX_ROLE_DOCGLOSSREF=62 AX_ROLE_DOCGLOSSREF value
         * @property {number} AX_ROLE_DOCINDEX=63 AX_ROLE_DOCINDEX value
         * @property {number} AX_ROLE_DOCINTRODUCTION=64 AX_ROLE_DOCINTRODUCTION value
         * @property {number} AX_ROLE_DOCNOTEREF=65 AX_ROLE_DOCNOTEREF value
         * @property {number} AX_ROLE_DOCNOTICE=66 AX_ROLE_DOCNOTICE value
         * @property {number} AX_ROLE_DOCPAGEBREAK=67 AX_ROLE_DOCPAGEBREAK value
         * @property {number} AX_ROLE_DOCPAGEFOOTER=68 AX_ROLE_DOCPAGEFOOTER value
         * @property {number} AX_ROLE_DOCPAGEHEADER=69 AX_ROLE_DOCPAGEHEADER value
         * @property {number} AX_ROLE_DOCPAGELIST=70 AX_ROLE_DOCPAGELIST value
         * @property {number} AX_ROLE_DOCPART=71 AX_ROLE_DOCPART value
         * @property {number} AX_ROLE_DOCPREFACE=72 AX_ROLE_DOCPREFACE value
         * @property {number} AX_ROLE_DOCPROLOGUE=73 AX_ROLE_DOCPROLOGUE value
         * @property {number} AX_ROLE_DOCPULLQUOTE=74 AX_ROLE_DOCPULLQUOTE value
         * @property {number} AX_ROLE_DOCQNA=75 AX_ROLE_DOCQNA value
         * @property {number} AX_ROLE_DOCSUBTITLE=76 AX_ROLE_DOCSUBTITLE value
         * @property {number} AX_ROLE_DOCTIP=77 AX_ROLE_DOCTIP value
         * @property {number} AX_ROLE_DOCTOC=78 AX_ROLE_DOCTOC value
         * @property {number} AX_ROLE_DOCUMENT=79 AX_ROLE_DOCUMENT value
         * @property {number} AX_ROLE_EMBEDDEDOBJECT=80 AX_ROLE_EMBEDDEDOBJECT value
         * @property {number} AX_ROLE_EMPHASIS=81 AX_ROLE_EMPHASIS value
         * @property {number} AX_ROLE_FEED=82 AX_ROLE_FEED value
         * @property {number} AX_ROLE_FIGCAPTION=83 AX_ROLE_FIGCAPTION value
         * @property {number} AX_ROLE_FIGURE=84 AX_ROLE_FIGURE value
         * @property {number} AX_ROLE_FOOTER=85 AX_ROLE_FOOTER value
         * @property {number} AX_ROLE_SECTIONFOOTER=86 AX_ROLE_SECTIONFOOTER value
         * @property {number} AX_ROLE_FORM=87 AX_ROLE_FORM value
         * @property {number} AX_ROLE_GENERICCONTAINER=88 AX_ROLE_GENERICCONTAINER value
         * @property {number} AX_ROLE_GRAPHICSDOCUMENT=89 AX_ROLE_GRAPHICSDOCUMENT value
         * @property {number} AX_ROLE_GRAPHICSOBJECT=90 AX_ROLE_GRAPHICSOBJECT value
         * @property {number} AX_ROLE_GRAPHICSSYMBOL=91 AX_ROLE_GRAPHICSSYMBOL value
         * @property {number} AX_ROLE_GRID=92 AX_ROLE_GRID value
         * @property {number} AX_ROLE_GROUP=93 AX_ROLE_GROUP value
         * @property {number} AX_ROLE_HEADER=94 AX_ROLE_HEADER value
         * @property {number} AX_ROLE_SECTIONHEADER=95 AX_ROLE_SECTIONHEADER value
         * @property {number} AX_ROLE_HEADING=96 AX_ROLE_HEADING value
         * @property {number} AX_ROLE_IFRAME=97 AX_ROLE_IFRAME value
         * @property {number} AX_ROLE_IFRAMEPRESENTATIONAL=98 AX_ROLE_IFRAMEPRESENTATIONAL value
         * @property {number} AX_ROLE_IMAGE=99 AX_ROLE_IMAGE value
         * @property {number} AX_ROLE_IMECANDIDATE=100 AX_ROLE_IMECANDIDATE value
         * @property {number} AX_ROLE_INLINETEXTBOX=101 AX_ROLE_INLINETEXTBOX value
         * @property {number} AX_ROLE_INPUTTIME=102 AX_ROLE_INPUTTIME value
         * @property {number} AX_ROLE_KEYBOARD=103 AX_ROLE_KEYBOARD value
         * @property {number} AX_ROLE_LABELTEXT=104 AX_ROLE_LABELTEXT value
         * @property {number} AX_ROLE_LAYOUTTABLE=105 AX_ROLE_LAYOUTTABLE value
         * @property {number} AX_ROLE_LAYOUTTABLECELL=106 AX_ROLE_LAYOUTTABLECELL value
         * @property {number} AX_ROLE_LAYOUTTABLEROW=107 AX_ROLE_LAYOUTTABLEROW value
         * @property {number} AX_ROLE_LEGEND=108 AX_ROLE_LEGEND value
         * @property {number} AX_ROLE_LINEBREAK=109 AX_ROLE_LINEBREAK value
         * @property {number} AX_ROLE_LINK=110 AX_ROLE_LINK value
         * @property {number} AX_ROLE_LIST=111 AX_ROLE_LIST value
         * @property {number} AX_ROLE_LISTBOX=112 AX_ROLE_LISTBOX value
         * @property {number} AX_ROLE_LISTBOXOPTION=113 AX_ROLE_LISTBOXOPTION value
         * @property {number} AX_ROLE_LISTGRID=114 AX_ROLE_LISTGRID value
         * @property {number} AX_ROLE_LISTITEM=115 AX_ROLE_LISTITEM value
         * @property {number} AX_ROLE_LISTMARKER=116 AX_ROLE_LISTMARKER value
         * @property {number} AX_ROLE_LOG=117 AX_ROLE_LOG value
         * @property {number} AX_ROLE_MAIN=118 AX_ROLE_MAIN value
         * @property {number} AX_ROLE_MARK=119 AX_ROLE_MARK value
         * @property {number} AX_ROLE_MARQUEE=120 AX_ROLE_MARQUEE value
         * @property {number} AX_ROLE_MATH=121 AX_ROLE_MATH value
         * @property {number} AX_ROLE_MENU=122 AX_ROLE_MENU value
         * @property {number} AX_ROLE_MENUBAR=123 AX_ROLE_MENUBAR value
         * @property {number} AX_ROLE_MENUITEM=124 AX_ROLE_MENUITEM value
         * @property {number} AX_ROLE_MENUITEMCHECKBOX=125 AX_ROLE_MENUITEMCHECKBOX value
         * @property {number} AX_ROLE_MENUITEMRADIO=126 AX_ROLE_MENUITEMRADIO value
         * @property {number} AX_ROLE_MENUITEMSEPARATOR=213 AX_ROLE_MENUITEMSEPARATOR value
         * @property {number} AX_ROLE_MENULISTOPTION=127 AX_ROLE_MENULISTOPTION value
         * @property {number} AX_ROLE_MENULISTPOPUP=128 AX_ROLE_MENULISTPOPUP value
         * @property {number} AX_ROLE_METER=129 AX_ROLE_METER value
         * @property {number} AX_ROLE_NAVIGATION=130 AX_ROLE_NAVIGATION value
         * @property {number} AX_ROLE_NOTE=131 AX_ROLE_NOTE value
         * @property {number} AX_ROLE_PANE=132 AX_ROLE_PANE value
         * @property {number} AX_ROLE_PARAGRAPH=133 AX_ROLE_PARAGRAPH value
         * @property {number} AX_ROLE_PDFACTIONABLEHIGHLIGHT=134 AX_ROLE_PDFACTIONABLEHIGHLIGHT value
         * @property {number} AX_ROLE_PDFROOT=135 AX_ROLE_PDFROOT value
         * @property {number} AX_ROLE_PLUGINOBJECT=136 AX_ROLE_PLUGINOBJECT value
         * @property {number} AX_ROLE_POPUPBUTTON=137 AX_ROLE_POPUPBUTTON value
         * @property {number} AX_ROLE_PORTALDEPRECATED=138 AX_ROLE_PORTALDEPRECATED value
         * @property {number} AX_ROLE_PREDEPRECATED=139 AX_ROLE_PREDEPRECATED value
         * @property {number} AX_ROLE_PROGRESSINDICATOR=140 AX_ROLE_PROGRESSINDICATOR value
         * @property {number} AX_ROLE_RADIOBUTTON=141 AX_ROLE_RADIOBUTTON value
         * @property {number} AX_ROLE_RADIOGROUP=142 AX_ROLE_RADIOGROUP value
         * @property {number} AX_ROLE_REGION=143 AX_ROLE_REGION value
         * @property {number} AX_ROLE_ROOTWEBAREA=144 AX_ROLE_ROOTWEBAREA value
         * @property {number} AX_ROLE_ROW=145 AX_ROLE_ROW value
         * @property {number} AX_ROLE_ROWGROUP=146 AX_ROLE_ROWGROUP value
         * @property {number} AX_ROLE_ROWHEADER=147 AX_ROLE_ROWHEADER value
         * @property {number} AX_ROLE_RUBY=148 AX_ROLE_RUBY value
         * @property {number} AX_ROLE_RUBYANNOTATION=149 AX_ROLE_RUBYANNOTATION value
         * @property {number} AX_ROLE_SCROLLBAR=150 AX_ROLE_SCROLLBAR value
         * @property {number} AX_ROLE_SCROLLVIEW=151 AX_ROLE_SCROLLVIEW value
         * @property {number} AX_ROLE_SEARCH=152 AX_ROLE_SEARCH value
         * @property {number} AX_ROLE_SEARCHBOX=153 AX_ROLE_SEARCHBOX value
         * @property {number} AX_ROLE_SECTION=154 AX_ROLE_SECTION value
         * @property {number} AX_ROLE_SLIDER=155 AX_ROLE_SLIDER value
         * @property {number} AX_ROLE_SPINBUTTON=156 AX_ROLE_SPINBUTTON value
         * @property {number} AX_ROLE_SPLITTER=157 AX_ROLE_SPLITTER value
         * @property {number} AX_ROLE_STATICTEXT=158 AX_ROLE_STATICTEXT value
         * @property {number} AX_ROLE_STATUS=159 AX_ROLE_STATUS value
         * @property {number} AX_ROLE_STRONG=160 AX_ROLE_STRONG value
         * @property {number} AX_ROLE_SUGGESTION=161 AX_ROLE_SUGGESTION value
         * @property {number} AX_ROLE_SVGROOT=162 AX_ROLE_SVGROOT value
         * @property {number} AX_ROLE_SWITCH=163 AX_ROLE_SWITCH value
         * @property {number} AX_ROLE_TAB=164 AX_ROLE_TAB value
         * @property {number} AX_ROLE_TABLIST=165 AX_ROLE_TABLIST value
         * @property {number} AX_ROLE_TABPANEL=166 AX_ROLE_TABPANEL value
         * @property {number} AX_ROLE_TABLE=167 AX_ROLE_TABLE value
         * @property {number} AX_ROLE_TABLEHEADERCONTAINER=168 AX_ROLE_TABLEHEADERCONTAINER value
         * @property {number} AX_ROLE_TERM=169 AX_ROLE_TERM value
         * @property {number} AX_ROLE_TEXTFIELD=170 AX_ROLE_TEXTFIELD value
         * @property {number} AX_ROLE_TEXTFIELDWITHCOMBOBOX=171 AX_ROLE_TEXTFIELDWITHCOMBOBOX value
         * @property {number} AX_ROLE_TIME=172 AX_ROLE_TIME value
         * @property {number} AX_ROLE_TIMER=173 AX_ROLE_TIMER value
         * @property {number} AX_ROLE_TITLEBAR=174 AX_ROLE_TITLEBAR value
         * @property {number} AX_ROLE_TOGGLEBUTTON=175 AX_ROLE_TOGGLEBUTTON value
         * @property {number} AX_ROLE_TOOLBAR=176 AX_ROLE_TOOLBAR value
         * @property {number} AX_ROLE_TOOLTIP=177 AX_ROLE_TOOLTIP value
         * @property {number} AX_ROLE_TREE=178 AX_ROLE_TREE value
         * @property {number} AX_ROLE_TREEGRID=179 AX_ROLE_TREEGRID value
         * @property {number} AX_ROLE_TREEITEM=180 AX_ROLE_TREEITEM value
         * @property {number} AX_ROLE_UNKNOWN=181 AX_ROLE_UNKNOWN value
         * @property {number} AX_ROLE_VIDEO=182 AX_ROLE_VIDEO value
         * @property {number} AX_ROLE_WEBVIEW=183 AX_ROLE_WEBVIEW value
         * @property {number} AX_ROLE_WINDOW=184 AX_ROLE_WINDOW value
         * @property {number} AX_ROLE_SUBSCRIPT=185 AX_ROLE_SUBSCRIPT value
         * @property {number} AX_ROLE_SUPERSCRIPT=186 AX_ROLE_SUPERSCRIPT value
         * @property {number} AX_ROLE_MATHMLMATH=187 AX_ROLE_MATHMLMATH value
         * @property {number} AX_ROLE_MATHMLFRACTION=188 AX_ROLE_MATHMLFRACTION value
         * @property {number} AX_ROLE_MATHMLIDENTIFIER=189 AX_ROLE_MATHMLIDENTIFIER value
         * @property {number} AX_ROLE_MATHMLMULTISCRIPTS=190 AX_ROLE_MATHMLMULTISCRIPTS value
         * @property {number} AX_ROLE_MATHMLNONESCRIPT=191 AX_ROLE_MATHMLNONESCRIPT value
         * @property {number} AX_ROLE_MATHMLNUMBER=192 AX_ROLE_MATHMLNUMBER value
         * @property {number} AX_ROLE_MATHMLOPERATOR=193 AX_ROLE_MATHMLOPERATOR value
         * @property {number} AX_ROLE_MATHMLOVER=194 AX_ROLE_MATHMLOVER value
         * @property {number} AX_ROLE_MATHMLPRESCRIPTDELIMITER=195 AX_ROLE_MATHMLPRESCRIPTDELIMITER value
         * @property {number} AX_ROLE_MATHMLROOT=196 AX_ROLE_MATHMLROOT value
         * @property {number} AX_ROLE_MATHMLROW=197 AX_ROLE_MATHMLROW value
         * @property {number} AX_ROLE_MATHMLSQUAREROOT=198 AX_ROLE_MATHMLSQUAREROOT value
         * @property {number} AX_ROLE_MATHMLSTRINGLITERAL=199 AX_ROLE_MATHMLSTRINGLITERAL value
         * @property {number} AX_ROLE_MATHMLSUB=200 AX_ROLE_MATHMLSUB value
         * @property {number} AX_ROLE_MATHMLSUBSUP=201 AX_ROLE_MATHMLSUBSUP value
         * @property {number} AX_ROLE_MATHMLSUP=202 AX_ROLE_MATHMLSUP value
         * @property {number} AX_ROLE_MATHMLTABLE=203 AX_ROLE_MATHMLTABLE value
         * @property {number} AX_ROLE_MATHMLTABLECELL=204 AX_ROLE_MATHMLTABLECELL value
         * @property {number} AX_ROLE_MATHMLTABLEROW=205 AX_ROLE_MATHMLTABLEROW value
         * @property {number} AX_ROLE_MATHMLTEXT=206 AX_ROLE_MATHMLTEXT value
         * @property {number} AX_ROLE_MATHMLUNDER=207 AX_ROLE_MATHMLUNDER value
         * @property {number} AX_ROLE_MATHMLUNDEROVER=208 AX_ROLE_MATHMLUNDEROVER value
         * @property {number} AX_ROLE_COMBOBOXSELECT=209 AX_ROLE_COMBOBOXSELECT value
         * @property {number} AX_ROLE_DISCLOSURETRIANGLEGROUPED=210 AX_ROLE_DISCLOSURETRIANGLEGROUPED value
         * @property {number} AX_ROLE_SECTIONWITHOUTNAME=211 AX_ROLE_SECTIONWITHOUTNAME value
         * @property {number} AX_ROLE_GRIDCELL=212 AX_ROLE_GRIDCELL value
         */
        proto.AXRole = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AX_ROLE_NONE"] = 0;
            values[valuesById[1] = "AX_ROLE_ABBR"] = 1;
            values[valuesById[2] = "AX_ROLE_ALERT"] = 2;
            values[valuesById[3] = "AX_ROLE_ALERTDIALOG"] = 3;
            values[valuesById[4] = "AX_ROLE_APPLICATION"] = 4;
            values[valuesById[5] = "AX_ROLE_ARTICLE"] = 5;
            values[valuesById[6] = "AX_ROLE_AUDIO"] = 6;
            values[valuesById[7] = "AX_ROLE_BANNER"] = 7;
            values[valuesById[8] = "AX_ROLE_BLOCKQUOTE"] = 8;
            values[valuesById[9] = "AX_ROLE_BUTTON"] = 9;
            values[valuesById[10] = "AX_ROLE_CANVAS"] = 10;
            values[valuesById[11] = "AX_ROLE_CAPTION"] = 11;
            values[valuesById[12] = "AX_ROLE_CARET"] = 12;
            values[valuesById[13] = "AX_ROLE_CELL"] = 13;
            values[valuesById[14] = "AX_ROLE_CHECKBOX"] = 14;
            values[valuesById[15] = "AX_ROLE_CLIENT"] = 15;
            values[valuesById[16] = "AX_ROLE_CODE"] = 16;
            values[valuesById[17] = "AX_ROLE_COLORWELL"] = 17;
            values[valuesById[18] = "AX_ROLE_COLUMN"] = 18;
            values[valuesById[19] = "AX_ROLE_COLUMNHEADER"] = 19;
            values[valuesById[20] = "AX_ROLE_COMBOBOXGROUPING"] = 20;
            values[valuesById[21] = "AX_ROLE_COMBOBOXMENUBUTTON"] = 21;
            values[valuesById[22] = "AX_ROLE_COMPLEMENTARY"] = 22;
            values[valuesById[23] = "AX_ROLE_COMMENT"] = 23;
            values[valuesById[24] = "AX_ROLE_CONTENTDELETION"] = 24;
            values[valuesById[25] = "AX_ROLE_CONTENTINSERTION"] = 25;
            values[valuesById[26] = "AX_ROLE_CONTENTINFO"] = 26;
            values[valuesById[27] = "AX_ROLE_DATE"] = 27;
            values[valuesById[28] = "AX_ROLE_DATETIME"] = 28;
            values[valuesById[29] = "AX_ROLE_DEFINITION"] = 29;
            values[valuesById[30] = "AX_ROLE_DESCRIPTIONLIST"] = 30;
            values[valuesById[31] = "AX_ROLE_DESCRIPTIONLISTDETAILDEPRECATED"] = 31;
            values[valuesById[32] = "AX_ROLE_DESCRIPTIONLISTTERMDEPRECATED"] = 32;
            values[valuesById[33] = "AX_ROLE_DESKTOP"] = 33;
            values[valuesById[34] = "AX_ROLE_DETAILS"] = 34;
            values[valuesById[35] = "AX_ROLE_DIALOG"] = 35;
            values[valuesById[36] = "AX_ROLE_DIRECTORYDEPRECATED"] = 36;
            values[valuesById[37] = "AX_ROLE_DISCLOSURETRIANGLE"] = 37;
            values[valuesById[38] = "AX_ROLE_DOCABSTRACT"] = 38;
            values[valuesById[39] = "AX_ROLE_DOCACKNOWLEDGMENTS"] = 39;
            values[valuesById[40] = "AX_ROLE_DOCAFTERWORD"] = 40;
            values[valuesById[41] = "AX_ROLE_DOCAPPENDIX"] = 41;
            values[valuesById[42] = "AX_ROLE_DOCBACKLINK"] = 42;
            values[valuesById[43] = "AX_ROLE_DOCBIBLIOENTRY"] = 43;
            values[valuesById[44] = "AX_ROLE_DOCBIBLIOGRAPHY"] = 44;
            values[valuesById[45] = "AX_ROLE_DOCBIBLIOREF"] = 45;
            values[valuesById[46] = "AX_ROLE_DOCCHAPTER"] = 46;
            values[valuesById[47] = "AX_ROLE_DOCCOLOPHON"] = 47;
            values[valuesById[48] = "AX_ROLE_DOCCONCLUSION"] = 48;
            values[valuesById[49] = "AX_ROLE_DOCCOVER"] = 49;
            values[valuesById[50] = "AX_ROLE_DOCCREDIT"] = 50;
            values[valuesById[51] = "AX_ROLE_DOCCREDITS"] = 51;
            values[valuesById[52] = "AX_ROLE_DOCDEDICATION"] = 52;
            values[valuesById[53] = "AX_ROLE_DOCENDNOTE"] = 53;
            values[valuesById[54] = "AX_ROLE_DOCENDNOTES"] = 54;
            values[valuesById[55] = "AX_ROLE_DOCEPIGRAPH"] = 55;
            values[valuesById[56] = "AX_ROLE_DOCEPILOGUE"] = 56;
            values[valuesById[57] = "AX_ROLE_DOCERRATA"] = 57;
            values[valuesById[58] = "AX_ROLE_DOCEXAMPLE"] = 58;
            values[valuesById[59] = "AX_ROLE_DOCFOOTNOTE"] = 59;
            values[valuesById[60] = "AX_ROLE_DOCFOREWORD"] = 60;
            values[valuesById[61] = "AX_ROLE_DOCGLOSSARY"] = 61;
            values[valuesById[62] = "AX_ROLE_DOCGLOSSREF"] = 62;
            values[valuesById[63] = "AX_ROLE_DOCINDEX"] = 63;
            values[valuesById[64] = "AX_ROLE_DOCINTRODUCTION"] = 64;
            values[valuesById[65] = "AX_ROLE_DOCNOTEREF"] = 65;
            values[valuesById[66] = "AX_ROLE_DOCNOTICE"] = 66;
            values[valuesById[67] = "AX_ROLE_DOCPAGEBREAK"] = 67;
            values[valuesById[68] = "AX_ROLE_DOCPAGEFOOTER"] = 68;
            values[valuesById[69] = "AX_ROLE_DOCPAGEHEADER"] = 69;
            values[valuesById[70] = "AX_ROLE_DOCPAGELIST"] = 70;
            values[valuesById[71] = "AX_ROLE_DOCPART"] = 71;
            values[valuesById[72] = "AX_ROLE_DOCPREFACE"] = 72;
            values[valuesById[73] = "AX_ROLE_DOCPROLOGUE"] = 73;
            values[valuesById[74] = "AX_ROLE_DOCPULLQUOTE"] = 74;
            values[valuesById[75] = "AX_ROLE_DOCQNA"] = 75;
            values[valuesById[76] = "AX_ROLE_DOCSUBTITLE"] = 76;
            values[valuesById[77] = "AX_ROLE_DOCTIP"] = 77;
            values[valuesById[78] = "AX_ROLE_DOCTOC"] = 78;
            values[valuesById[79] = "AX_ROLE_DOCUMENT"] = 79;
            values[valuesById[80] = "AX_ROLE_EMBEDDEDOBJECT"] = 80;
            values[valuesById[81] = "AX_ROLE_EMPHASIS"] = 81;
            values[valuesById[82] = "AX_ROLE_FEED"] = 82;
            values[valuesById[83] = "AX_ROLE_FIGCAPTION"] = 83;
            values[valuesById[84] = "AX_ROLE_FIGURE"] = 84;
            values[valuesById[85] = "AX_ROLE_FOOTER"] = 85;
            values[valuesById[86] = "AX_ROLE_SECTIONFOOTER"] = 86;
            values[valuesById[87] = "AX_ROLE_FORM"] = 87;
            values[valuesById[88] = "AX_ROLE_GENERICCONTAINER"] = 88;
            values[valuesById[89] = "AX_ROLE_GRAPHICSDOCUMENT"] = 89;
            values[valuesById[90] = "AX_ROLE_GRAPHICSOBJECT"] = 90;
            values[valuesById[91] = "AX_ROLE_GRAPHICSSYMBOL"] = 91;
            values[valuesById[92] = "AX_ROLE_GRID"] = 92;
            values[valuesById[93] = "AX_ROLE_GROUP"] = 93;
            values[valuesById[94] = "AX_ROLE_HEADER"] = 94;
            values[valuesById[95] = "AX_ROLE_SECTIONHEADER"] = 95;
            values[valuesById[96] = "AX_ROLE_HEADING"] = 96;
            values[valuesById[97] = "AX_ROLE_IFRAME"] = 97;
            values[valuesById[98] = "AX_ROLE_IFRAMEPRESENTATIONAL"] = 98;
            values[valuesById[99] = "AX_ROLE_IMAGE"] = 99;
            values[valuesById[100] = "AX_ROLE_IMECANDIDATE"] = 100;
            values[valuesById[101] = "AX_ROLE_INLINETEXTBOX"] = 101;
            values[valuesById[102] = "AX_ROLE_INPUTTIME"] = 102;
            values[valuesById[103] = "AX_ROLE_KEYBOARD"] = 103;
            values[valuesById[104] = "AX_ROLE_LABELTEXT"] = 104;
            values[valuesById[105] = "AX_ROLE_LAYOUTTABLE"] = 105;
            values[valuesById[106] = "AX_ROLE_LAYOUTTABLECELL"] = 106;
            values[valuesById[107] = "AX_ROLE_LAYOUTTABLEROW"] = 107;
            values[valuesById[108] = "AX_ROLE_LEGEND"] = 108;
            values[valuesById[109] = "AX_ROLE_LINEBREAK"] = 109;
            values[valuesById[110] = "AX_ROLE_LINK"] = 110;
            values[valuesById[111] = "AX_ROLE_LIST"] = 111;
            values[valuesById[112] = "AX_ROLE_LISTBOX"] = 112;
            values[valuesById[113] = "AX_ROLE_LISTBOXOPTION"] = 113;
            values[valuesById[114] = "AX_ROLE_LISTGRID"] = 114;
            values[valuesById[115] = "AX_ROLE_LISTITEM"] = 115;
            values[valuesById[116] = "AX_ROLE_LISTMARKER"] = 116;
            values[valuesById[117] = "AX_ROLE_LOG"] = 117;
            values[valuesById[118] = "AX_ROLE_MAIN"] = 118;
            values[valuesById[119] = "AX_ROLE_MARK"] = 119;
            values[valuesById[120] = "AX_ROLE_MARQUEE"] = 120;
            values[valuesById[121] = "AX_ROLE_MATH"] = 121;
            values[valuesById[122] = "AX_ROLE_MENU"] = 122;
            values[valuesById[123] = "AX_ROLE_MENUBAR"] = 123;
            values[valuesById[124] = "AX_ROLE_MENUITEM"] = 124;
            values[valuesById[125] = "AX_ROLE_MENUITEMCHECKBOX"] = 125;
            values[valuesById[126] = "AX_ROLE_MENUITEMRADIO"] = 126;
            values[valuesById[213] = "AX_ROLE_MENUITEMSEPARATOR"] = 213;
            values[valuesById[127] = "AX_ROLE_MENULISTOPTION"] = 127;
            values[valuesById[128] = "AX_ROLE_MENULISTPOPUP"] = 128;
            values[valuesById[129] = "AX_ROLE_METER"] = 129;
            values[valuesById[130] = "AX_ROLE_NAVIGATION"] = 130;
            values[valuesById[131] = "AX_ROLE_NOTE"] = 131;
            values[valuesById[132] = "AX_ROLE_PANE"] = 132;
            values[valuesById[133] = "AX_ROLE_PARAGRAPH"] = 133;
            values[valuesById[134] = "AX_ROLE_PDFACTIONABLEHIGHLIGHT"] = 134;
            values[valuesById[135] = "AX_ROLE_PDFROOT"] = 135;
            values[valuesById[136] = "AX_ROLE_PLUGINOBJECT"] = 136;
            values[valuesById[137] = "AX_ROLE_POPUPBUTTON"] = 137;
            values[valuesById[138] = "AX_ROLE_PORTALDEPRECATED"] = 138;
            values[valuesById[139] = "AX_ROLE_PREDEPRECATED"] = 139;
            values[valuesById[140] = "AX_ROLE_PROGRESSINDICATOR"] = 140;
            values[valuesById[141] = "AX_ROLE_RADIOBUTTON"] = 141;
            values[valuesById[142] = "AX_ROLE_RADIOGROUP"] = 142;
            values[valuesById[143] = "AX_ROLE_REGION"] = 143;
            values[valuesById[144] = "AX_ROLE_ROOTWEBAREA"] = 144;
            values[valuesById[145] = "AX_ROLE_ROW"] = 145;
            values[valuesById[146] = "AX_ROLE_ROWGROUP"] = 146;
            values[valuesById[147] = "AX_ROLE_ROWHEADER"] = 147;
            values[valuesById[148] = "AX_ROLE_RUBY"] = 148;
            values[valuesById[149] = "AX_ROLE_RUBYANNOTATION"] = 149;
            values[valuesById[150] = "AX_ROLE_SCROLLBAR"] = 150;
            values[valuesById[151] = "AX_ROLE_SCROLLVIEW"] = 151;
            values[valuesById[152] = "AX_ROLE_SEARCH"] = 152;
            values[valuesById[153] = "AX_ROLE_SEARCHBOX"] = 153;
            values[valuesById[154] = "AX_ROLE_SECTION"] = 154;
            values[valuesById[155] = "AX_ROLE_SLIDER"] = 155;
            values[valuesById[156] = "AX_ROLE_SPINBUTTON"] = 156;
            values[valuesById[157] = "AX_ROLE_SPLITTER"] = 157;
            values[valuesById[158] = "AX_ROLE_STATICTEXT"] = 158;
            values[valuesById[159] = "AX_ROLE_STATUS"] = 159;
            values[valuesById[160] = "AX_ROLE_STRONG"] = 160;
            values[valuesById[161] = "AX_ROLE_SUGGESTION"] = 161;
            values[valuesById[162] = "AX_ROLE_SVGROOT"] = 162;
            values[valuesById[163] = "AX_ROLE_SWITCH"] = 163;
            values[valuesById[164] = "AX_ROLE_TAB"] = 164;
            values[valuesById[165] = "AX_ROLE_TABLIST"] = 165;
            values[valuesById[166] = "AX_ROLE_TABPANEL"] = 166;
            values[valuesById[167] = "AX_ROLE_TABLE"] = 167;
            values[valuesById[168] = "AX_ROLE_TABLEHEADERCONTAINER"] = 168;
            values[valuesById[169] = "AX_ROLE_TERM"] = 169;
            values[valuesById[170] = "AX_ROLE_TEXTFIELD"] = 170;
            values[valuesById[171] = "AX_ROLE_TEXTFIELDWITHCOMBOBOX"] = 171;
            values[valuesById[172] = "AX_ROLE_TIME"] = 172;
            values[valuesById[173] = "AX_ROLE_TIMER"] = 173;
            values[valuesById[174] = "AX_ROLE_TITLEBAR"] = 174;
            values[valuesById[175] = "AX_ROLE_TOGGLEBUTTON"] = 175;
            values[valuesById[176] = "AX_ROLE_TOOLBAR"] = 176;
            values[valuesById[177] = "AX_ROLE_TOOLTIP"] = 177;
            values[valuesById[178] = "AX_ROLE_TREE"] = 178;
            values[valuesById[179] = "AX_ROLE_TREEGRID"] = 179;
            values[valuesById[180] = "AX_ROLE_TREEITEM"] = 180;
            values[valuesById[181] = "AX_ROLE_UNKNOWN"] = 181;
            values[valuesById[182] = "AX_ROLE_VIDEO"] = 182;
            values[valuesById[183] = "AX_ROLE_WEBVIEW"] = 183;
            values[valuesById[184] = "AX_ROLE_WINDOW"] = 184;
            values[valuesById[185] = "AX_ROLE_SUBSCRIPT"] = 185;
            values[valuesById[186] = "AX_ROLE_SUPERSCRIPT"] = 186;
            values[valuesById[187] = "AX_ROLE_MATHMLMATH"] = 187;
            values[valuesById[188] = "AX_ROLE_MATHMLFRACTION"] = 188;
            values[valuesById[189] = "AX_ROLE_MATHMLIDENTIFIER"] = 189;
            values[valuesById[190] = "AX_ROLE_MATHMLMULTISCRIPTS"] = 190;
            values[valuesById[191] = "AX_ROLE_MATHMLNONESCRIPT"] = 191;
            values[valuesById[192] = "AX_ROLE_MATHMLNUMBER"] = 192;
            values[valuesById[193] = "AX_ROLE_MATHMLOPERATOR"] = 193;
            values[valuesById[194] = "AX_ROLE_MATHMLOVER"] = 194;
            values[valuesById[195] = "AX_ROLE_MATHMLPRESCRIPTDELIMITER"] = 195;
            values[valuesById[196] = "AX_ROLE_MATHMLROOT"] = 196;
            values[valuesById[197] = "AX_ROLE_MATHMLROW"] = 197;
            values[valuesById[198] = "AX_ROLE_MATHMLSQUAREROOT"] = 198;
            values[valuesById[199] = "AX_ROLE_MATHMLSTRINGLITERAL"] = 199;
            values[valuesById[200] = "AX_ROLE_MATHMLSUB"] = 200;
            values[valuesById[201] = "AX_ROLE_MATHMLSUBSUP"] = 201;
            values[valuesById[202] = "AX_ROLE_MATHMLSUP"] = 202;
            values[valuesById[203] = "AX_ROLE_MATHMLTABLE"] = 203;
            values[valuesById[204] = "AX_ROLE_MATHMLTABLECELL"] = 204;
            values[valuesById[205] = "AX_ROLE_MATHMLTABLEROW"] = 205;
            values[valuesById[206] = "AX_ROLE_MATHMLTEXT"] = 206;
            values[valuesById[207] = "AX_ROLE_MATHMLUNDER"] = 207;
            values[valuesById[208] = "AX_ROLE_MATHMLUNDEROVER"] = 208;
            values[valuesById[209] = "AX_ROLE_COMBOBOXSELECT"] = 209;
            values[valuesById[210] = "AX_ROLE_DISCLOSURETRIANGLEGROUPED"] = 210;
            values[valuesById[211] = "AX_ROLE_SECTIONWITHOUTNAME"] = 211;
            values[valuesById[212] = "AX_ROLE_GRIDCELL"] = 212;
            return values;
        })();

        /**
         * AX String attribute enum.
         * Next ID: 43
         * @name optimization_guide.proto.AXStringAttribute
         * @enum {number}
         * @property {number} AX_SA_NONE=0 AX_SA_NONE value
         * @property {number} AX_SA_ACCESSKEY=1 AX_SA_ACCESSKEY value
         * @property {number} AX_SA_APPID=2 AX_SA_APPID value
         * @property {number} AX_SA_ARIAINVALIDVALUEDEPRECATED=3 AX_SA_ARIAINVALIDVALUEDEPRECATED value
         * @property {number} AX_SA_AUTOCOMPLETE=4 AX_SA_AUTOCOMPLETE value
         * @property {number} AX_SA_CHECKEDSTATEDESCRIPTION=5 AX_SA_CHECKEDSTATEDESCRIPTION value
         * @property {number} AX_SA_CHILDTREEID=6 AX_SA_CHILDTREEID value
         * @property {number} AX_SA_CHILDTREENODEAPPID=7 AX_SA_CHILDTREENODEAPPID value
         * @property {number} AX_SA_CLASSNAME=8 AX_SA_CLASSNAME value
         * @property {number} AX_SA_CONTAINERLIVERELEVANT=9 AX_SA_CONTAINERLIVERELEVANT value
         * @property {number} AX_SA_CONTAINERLIVESTATUS=10 AX_SA_CONTAINERLIVESTATUS value
         * @property {number} AX_SA_DESCRIPTION=11 AX_SA_DESCRIPTION value
         * @property {number} AX_SA_DISPLAY=12 AX_SA_DISPLAY value
         * @property {number} AX_SA_FONTFAMILY=13 AX_SA_FONTFAMILY value
         * @property {number} AX_SA_HTMLTAG=14 AX_SA_HTMLTAG value
         * @property {number} AX_SA_IMAGEANNOTATION=15 AX_SA_IMAGEANNOTATION value
         * @property {number} AX_SA_IMAGEDATAURL=16 AX_SA_IMAGEDATAURL value
         * @property {number} AX_SA_MATHCONTENT=17 AX_SA_MATHCONTENT value
         * @property {number} AX_SA_INPUTTYPE=18 AX_SA_INPUTTYPE value
         * @property {number} AX_SA_KEYSHORTCUTS=19 AX_SA_KEYSHORTCUTS value
         * @property {number} AX_SA_LANGUAGE=20 AX_SA_LANGUAGE value
         * @property {number} AX_SA_NAME=21 AX_SA_NAME value
         * @property {number} AX_SA_LIVERELEVANT=22 AX_SA_LIVERELEVANT value
         * @property {number} AX_SA_LIVESTATUS=23 AX_SA_LIVESTATUS value
         * @property {number} AX_SA_PLACEHOLDER=24 AX_SA_PLACEHOLDER value
         * @property {number} AX_SA_ROLE=25 AX_SA_ROLE value
         * @property {number} AX_SA_ROLEDESCRIPTION=26 AX_SA_ROLEDESCRIPTION value
         * @property {number} AX_SA_TOOLTIP=27 AX_SA_TOOLTIP value
         * @property {number} AX_SA_URL=28 AX_SA_URL value
         * @property {number} AX_SA_VALUE=29 AX_SA_VALUE value
         * @property {number} AX_SA_VIRTUALCONTENT=30 AX_SA_VIRTUALCONTENT value
         * @property {number} AX_SA_DODEFAULTLABEL=31 AX_SA_DODEFAULTLABEL value
         * @property {number} AX_SA_LONGCLICKLABEL=32 AX_SA_LONGCLICKLABEL value
         * @property {number} AX_SA_ARIABRAILLELABEL=33 AX_SA_ARIABRAILLELABEL value
         * @property {number} AX_SA_ARIABRAILLEROLEDESCRIPTION=34 AX_SA_ARIABRAILLEROLEDESCRIPTION value
         * @property {number} AX_SA_LINKTARGET=35 AX_SA_LINKTARGET value
         * @property {number} AX_SA_ARIANOTIFICATIONANNOUNCEMENTDEPRECATED=36 AX_SA_ARIANOTIFICATIONANNOUNCEMENTDEPRECATED value
         * @property {number} AX_SA_ARIANOTIFICATIONIDDEPRECATED=37 AX_SA_ARIANOTIFICATIONIDDEPRECATED value
         * @property {number} AX_SA_HTMLID=38 AX_SA_HTMLID value
         * @property {number} AX_SA_ARIACELLCOLUMNINDEXTEXT=39 AX_SA_ARIACELLCOLUMNINDEXTEXT value
         * @property {number} AX_SA_ARIACELLROWINDEXTEXT=40 AX_SA_ARIACELLROWINDEXTEXT value
         * @property {number} AX_SA_DATETIME=41 AX_SA_DATETIME value
         * @property {number} AX_SA_HTMLINPUTNAME=42 AX_SA_HTMLINPUTNAME value
         */
        proto.AXStringAttribute = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AX_SA_NONE"] = 0;
            values[valuesById[1] = "AX_SA_ACCESSKEY"] = 1;
            values[valuesById[2] = "AX_SA_APPID"] = 2;
            values[valuesById[3] = "AX_SA_ARIAINVALIDVALUEDEPRECATED"] = 3;
            values[valuesById[4] = "AX_SA_AUTOCOMPLETE"] = 4;
            values[valuesById[5] = "AX_SA_CHECKEDSTATEDESCRIPTION"] = 5;
            values[valuesById[6] = "AX_SA_CHILDTREEID"] = 6;
            values[valuesById[7] = "AX_SA_CHILDTREENODEAPPID"] = 7;
            values[valuesById[8] = "AX_SA_CLASSNAME"] = 8;
            values[valuesById[9] = "AX_SA_CONTAINERLIVERELEVANT"] = 9;
            values[valuesById[10] = "AX_SA_CONTAINERLIVESTATUS"] = 10;
            values[valuesById[11] = "AX_SA_DESCRIPTION"] = 11;
            values[valuesById[12] = "AX_SA_DISPLAY"] = 12;
            values[valuesById[13] = "AX_SA_FONTFAMILY"] = 13;
            values[valuesById[14] = "AX_SA_HTMLTAG"] = 14;
            values[valuesById[15] = "AX_SA_IMAGEANNOTATION"] = 15;
            values[valuesById[16] = "AX_SA_IMAGEDATAURL"] = 16;
            values[valuesById[17] = "AX_SA_MATHCONTENT"] = 17;
            values[valuesById[18] = "AX_SA_INPUTTYPE"] = 18;
            values[valuesById[19] = "AX_SA_KEYSHORTCUTS"] = 19;
            values[valuesById[20] = "AX_SA_LANGUAGE"] = 20;
            values[valuesById[21] = "AX_SA_NAME"] = 21;
            values[valuesById[22] = "AX_SA_LIVERELEVANT"] = 22;
            values[valuesById[23] = "AX_SA_LIVESTATUS"] = 23;
            values[valuesById[24] = "AX_SA_PLACEHOLDER"] = 24;
            values[valuesById[25] = "AX_SA_ROLE"] = 25;
            values[valuesById[26] = "AX_SA_ROLEDESCRIPTION"] = 26;
            values[valuesById[27] = "AX_SA_TOOLTIP"] = 27;
            values[valuesById[28] = "AX_SA_URL"] = 28;
            values[valuesById[29] = "AX_SA_VALUE"] = 29;
            values[valuesById[30] = "AX_SA_VIRTUALCONTENT"] = 30;
            values[valuesById[31] = "AX_SA_DODEFAULTLABEL"] = 31;
            values[valuesById[32] = "AX_SA_LONGCLICKLABEL"] = 32;
            values[valuesById[33] = "AX_SA_ARIABRAILLELABEL"] = 33;
            values[valuesById[34] = "AX_SA_ARIABRAILLEROLEDESCRIPTION"] = 34;
            values[valuesById[35] = "AX_SA_LINKTARGET"] = 35;
            values[valuesById[36] = "AX_SA_ARIANOTIFICATIONANNOUNCEMENTDEPRECATED"] = 36;
            values[valuesById[37] = "AX_SA_ARIANOTIFICATIONIDDEPRECATED"] = 37;
            values[valuesById[38] = "AX_SA_HTMLID"] = 38;
            values[valuesById[39] = "AX_SA_ARIACELLCOLUMNINDEXTEXT"] = 39;
            values[valuesById[40] = "AX_SA_ARIACELLROWINDEXTEXT"] = 40;
            values[valuesById[41] = "AX_SA_DATETIME"] = 41;
            values[valuesById[42] = "AX_SA_HTMLINPUTNAME"] = 42;
            return values;
        })();

        /**
         * AX Int attribute enum.
         * Next ID: 70
         * @name optimization_guide.proto.AXIntAttribute
         * @enum {number}
         * @property {number} AX_IA_NONE=0 AX_IA_NONE value
         * @property {number} AX_IA_DEFAULTACTIONVERB=1 AX_IA_DEFAULTACTIONVERB value
         * @property {number} AX_IA_SCROLLX=2 AX_IA_SCROLLX value
         * @property {number} AX_IA_SCROLLXMIN=3 AX_IA_SCROLLXMIN value
         * @property {number} AX_IA_SCROLLXMAX=4 AX_IA_SCROLLXMAX value
         * @property {number} AX_IA_SCROLLY=5 AX_IA_SCROLLY value
         * @property {number} AX_IA_SCROLLYMIN=6 AX_IA_SCROLLYMIN value
         * @property {number} AX_IA_SCROLLYMAX=7 AX_IA_SCROLLYMAX value
         * @property {number} AX_IA_TEXTSELSTART=8 AX_IA_TEXTSELSTART value
         * @property {number} AX_IA_TEXTSELEND=9 AX_IA_TEXTSELEND value
         * @property {number} AX_IA_ARIACOLUMNCOUNT=10 AX_IA_ARIACOLUMNCOUNT value
         * @property {number} AX_IA_ARIACELLCOLUMNINDEX=11 AX_IA_ARIACELLCOLUMNINDEX value
         * @property {number} AX_IA_ARIACELLCOLUMNSPAN=12 AX_IA_ARIACELLCOLUMNSPAN value
         * @property {number} AX_IA_ARIAROWCOUNT=13 AX_IA_ARIAROWCOUNT value
         * @property {number} AX_IA_ARIACELLROWINDEX=14 AX_IA_ARIACELLROWINDEX value
         * @property {number} AX_IA_ARIACELLROWSPAN=15 AX_IA_ARIACELLROWSPAN value
         * @property {number} AX_IA_TABLEROWCOUNT=16 AX_IA_TABLEROWCOUNT value
         * @property {number} AX_IA_TABLECOLUMNCOUNT=17 AX_IA_TABLECOLUMNCOUNT value
         * @property {number} AX_IA_TABLEHEADERID=18 AX_IA_TABLEHEADERID value
         * @property {number} AX_IA_TABLEROWINDEX=19 AX_IA_TABLEROWINDEX value
         * @property {number} AX_IA_TABLEROWHEADERID=20 AX_IA_TABLEROWHEADERID value
         * @property {number} AX_IA_TABLECOLUMNINDEX=21 AX_IA_TABLECOLUMNINDEX value
         * @property {number} AX_IA_TABLECOLUMNHEADERID=22 AX_IA_TABLECOLUMNHEADERID value
         * @property {number} AX_IA_TABLECELLCOLUMNINDEX=23 AX_IA_TABLECELLCOLUMNINDEX value
         * @property {number} AX_IA_TABLECELLCOLUMNSPAN=24 AX_IA_TABLECELLCOLUMNSPAN value
         * @property {number} AX_IA_TABLECELLROWINDEX=25 AX_IA_TABLECELLROWINDEX value
         * @property {number} AX_IA_TABLECELLROWSPAN=26 AX_IA_TABLECELLROWSPAN value
         * @property {number} AX_IA_SORTDIRECTION=27 AX_IA_SORTDIRECTION value
         * @property {number} AX_IA_HIERARCHICALLEVEL=28 AX_IA_HIERARCHICALLEVEL value
         * @property {number} AX_IA_NAMEFROM=29 AX_IA_NAMEFROM value
         * @property {number} AX_IA_DESCRIPTIONFROM=30 AX_IA_DESCRIPTIONFROM value
         * @property {number} AX_IA_ACTIVEDESCENDANTID=31 AX_IA_ACTIVEDESCENDANTID value
         * @property {number} AX_IA_ERRORMESSAGEIDDEPRECATED=32 AX_IA_ERRORMESSAGEIDDEPRECATED value
         * @property {number} AX_IA_INPAGELINKTARGETID=33 AX_IA_INPAGELINKTARGETID value
         * @property {number} AX_IA_MEMBEROFID=34 AX_IA_MEMBEROFID value
         * @property {number} AX_IA_NEXTONLINEID=35 AX_IA_NEXTONLINEID value
         * @property {number} AX_IA_POPUPFORID=36 AX_IA_POPUPFORID value
         * @property {number} AX_IA_PREVIOUSONLINEID=37 AX_IA_PREVIOUSONLINEID value
         * @property {number} AX_IA_RESTRICTION=38 AX_IA_RESTRICTION value
         * @property {number} AX_IA_SETSIZE=39 AX_IA_SETSIZE value
         * @property {number} AX_IA_POSINSET=40 AX_IA_POSINSET value
         * @property {number} AX_IA_COLORVALUE=41 AX_IA_COLORVALUE value
         * @property {number} AX_IA_ARIACURRENTSTATE=42 AX_IA_ARIACURRENTSTATE value
         * @property {number} AX_IA_BACKGROUNDCOLOR=43 AX_IA_BACKGROUNDCOLOR value
         * @property {number} AX_IA_COLOR=44 AX_IA_COLOR value
         * @property {number} AX_IA_HASPOPUP=45 AX_IA_HASPOPUP value
         * @property {number} AX_IA_IMAGEANNOTATIONSTATUS=46 AX_IA_IMAGEANNOTATIONSTATUS value
         * @property {number} AX_IA_INVALIDSTATE=47 AX_IA_INVALIDSTATE value
         * @property {number} AX_IA_CHECKEDSTATE=48 AX_IA_CHECKEDSTATE value
         * @property {number} AX_IA_LISTSTYLE=49 AX_IA_LISTSTYLE value
         * @property {number} AX_IA_TEXTALIGN=50 AX_IA_TEXTALIGN value
         * @property {number} AX_IA_TEXTDIRECTION=51 AX_IA_TEXTDIRECTION value
         * @property {number} AX_IA_TEXTPOSITION=52 AX_IA_TEXTPOSITION value
         * @property {number} AX_IA_TEXTSTYLE=53 AX_IA_TEXTSTYLE value
         * @property {number} AX_IA_TEXTOVERLINESTYLE=54 AX_IA_TEXTOVERLINESTYLE value
         * @property {number} AX_IA_TEXTSTRIKETHROUGHSTYLE=55 AX_IA_TEXTSTRIKETHROUGHSTYLE value
         * @property {number} AX_IA_TEXTUNDERLINESTYLE=56 AX_IA_TEXTUNDERLINESTYLE value
         * @property {number} AX_IA_PREVIOUSFOCUSID=57 AX_IA_PREVIOUSFOCUSID value
         * @property {number} AX_IA_NEXTFOCUSID=58 AX_IA_NEXTFOCUSID value
         * @property {number} AX_IA_DROPEFFECTDEPRECATED=59 AX_IA_DROPEFFECTDEPRECATED value
         * @property {number} AX_IA_DOMNODEIDDEPRECATED=60 AX_IA_DOMNODEIDDEPRECATED value
         * @property {number} AX_IA_ISPOPUP=61 AX_IA_ISPOPUP value
         * @property {number} AX_IA_NEXTWINDOWFOCUSID=62 AX_IA_NEXTWINDOWFOCUSID value
         * @property {number} AX_IA_PREVIOUSWINDOWFOCUSID=63 AX_IA_PREVIOUSWINDOWFOCUSID value
         * @property {number} AX_IA_ARIANOTIFICATIONINTERRUPTDEPRECATED=64 AX_IA_ARIANOTIFICATIONINTERRUPTDEPRECATED value
         * @property {number} AX_IA_ARIANOTIFICATIONPRIORITYDEPRECATED=65 AX_IA_ARIANOTIFICATIONPRIORITYDEPRECATED value
         * @property {number} AX_IA_DETAILSFROM=66 AX_IA_DETAILSFROM value
         * @property {number} AX_IA_MAXLENGTH=67 AX_IA_MAXLENGTH value
         * @property {number} AX_IA_PAINTORDER=68 AX_IA_PAINTORDER value
         * @property {number} AX_IA_COMMITTEDTEXTLENGTH=69 AX_IA_COMMITTEDTEXTLENGTH value
         */
        proto.AXIntAttribute = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AX_IA_NONE"] = 0;
            values[valuesById[1] = "AX_IA_DEFAULTACTIONVERB"] = 1;
            values[valuesById[2] = "AX_IA_SCROLLX"] = 2;
            values[valuesById[3] = "AX_IA_SCROLLXMIN"] = 3;
            values[valuesById[4] = "AX_IA_SCROLLXMAX"] = 4;
            values[valuesById[5] = "AX_IA_SCROLLY"] = 5;
            values[valuesById[6] = "AX_IA_SCROLLYMIN"] = 6;
            values[valuesById[7] = "AX_IA_SCROLLYMAX"] = 7;
            values[valuesById[8] = "AX_IA_TEXTSELSTART"] = 8;
            values[valuesById[9] = "AX_IA_TEXTSELEND"] = 9;
            values[valuesById[10] = "AX_IA_ARIACOLUMNCOUNT"] = 10;
            values[valuesById[11] = "AX_IA_ARIACELLCOLUMNINDEX"] = 11;
            values[valuesById[12] = "AX_IA_ARIACELLCOLUMNSPAN"] = 12;
            values[valuesById[13] = "AX_IA_ARIAROWCOUNT"] = 13;
            values[valuesById[14] = "AX_IA_ARIACELLROWINDEX"] = 14;
            values[valuesById[15] = "AX_IA_ARIACELLROWSPAN"] = 15;
            values[valuesById[16] = "AX_IA_TABLEROWCOUNT"] = 16;
            values[valuesById[17] = "AX_IA_TABLECOLUMNCOUNT"] = 17;
            values[valuesById[18] = "AX_IA_TABLEHEADERID"] = 18;
            values[valuesById[19] = "AX_IA_TABLEROWINDEX"] = 19;
            values[valuesById[20] = "AX_IA_TABLEROWHEADERID"] = 20;
            values[valuesById[21] = "AX_IA_TABLECOLUMNINDEX"] = 21;
            values[valuesById[22] = "AX_IA_TABLECOLUMNHEADERID"] = 22;
            values[valuesById[23] = "AX_IA_TABLECELLCOLUMNINDEX"] = 23;
            values[valuesById[24] = "AX_IA_TABLECELLCOLUMNSPAN"] = 24;
            values[valuesById[25] = "AX_IA_TABLECELLROWINDEX"] = 25;
            values[valuesById[26] = "AX_IA_TABLECELLROWSPAN"] = 26;
            values[valuesById[27] = "AX_IA_SORTDIRECTION"] = 27;
            values[valuesById[28] = "AX_IA_HIERARCHICALLEVEL"] = 28;
            values[valuesById[29] = "AX_IA_NAMEFROM"] = 29;
            values[valuesById[30] = "AX_IA_DESCRIPTIONFROM"] = 30;
            values[valuesById[31] = "AX_IA_ACTIVEDESCENDANTID"] = 31;
            values[valuesById[32] = "AX_IA_ERRORMESSAGEIDDEPRECATED"] = 32;
            values[valuesById[33] = "AX_IA_INPAGELINKTARGETID"] = 33;
            values[valuesById[34] = "AX_IA_MEMBEROFID"] = 34;
            values[valuesById[35] = "AX_IA_NEXTONLINEID"] = 35;
            values[valuesById[36] = "AX_IA_POPUPFORID"] = 36;
            values[valuesById[37] = "AX_IA_PREVIOUSONLINEID"] = 37;
            values[valuesById[38] = "AX_IA_RESTRICTION"] = 38;
            values[valuesById[39] = "AX_IA_SETSIZE"] = 39;
            values[valuesById[40] = "AX_IA_POSINSET"] = 40;
            values[valuesById[41] = "AX_IA_COLORVALUE"] = 41;
            values[valuesById[42] = "AX_IA_ARIACURRENTSTATE"] = 42;
            values[valuesById[43] = "AX_IA_BACKGROUNDCOLOR"] = 43;
            values[valuesById[44] = "AX_IA_COLOR"] = 44;
            values[valuesById[45] = "AX_IA_HASPOPUP"] = 45;
            values[valuesById[46] = "AX_IA_IMAGEANNOTATIONSTATUS"] = 46;
            values[valuesById[47] = "AX_IA_INVALIDSTATE"] = 47;
            values[valuesById[48] = "AX_IA_CHECKEDSTATE"] = 48;
            values[valuesById[49] = "AX_IA_LISTSTYLE"] = 49;
            values[valuesById[50] = "AX_IA_TEXTALIGN"] = 50;
            values[valuesById[51] = "AX_IA_TEXTDIRECTION"] = 51;
            values[valuesById[52] = "AX_IA_TEXTPOSITION"] = 52;
            values[valuesById[53] = "AX_IA_TEXTSTYLE"] = 53;
            values[valuesById[54] = "AX_IA_TEXTOVERLINESTYLE"] = 54;
            values[valuesById[55] = "AX_IA_TEXTSTRIKETHROUGHSTYLE"] = 55;
            values[valuesById[56] = "AX_IA_TEXTUNDERLINESTYLE"] = 56;
            values[valuesById[57] = "AX_IA_PREVIOUSFOCUSID"] = 57;
            values[valuesById[58] = "AX_IA_NEXTFOCUSID"] = 58;
            values[valuesById[59] = "AX_IA_DROPEFFECTDEPRECATED"] = 59;
            values[valuesById[60] = "AX_IA_DOMNODEIDDEPRECATED"] = 60;
            values[valuesById[61] = "AX_IA_ISPOPUP"] = 61;
            values[valuesById[62] = "AX_IA_NEXTWINDOWFOCUSID"] = 62;
            values[valuesById[63] = "AX_IA_PREVIOUSWINDOWFOCUSID"] = 63;
            values[valuesById[64] = "AX_IA_ARIANOTIFICATIONINTERRUPTDEPRECATED"] = 64;
            values[valuesById[65] = "AX_IA_ARIANOTIFICATIONPRIORITYDEPRECATED"] = 65;
            values[valuesById[66] = "AX_IA_DETAILSFROM"] = 66;
            values[valuesById[67] = "AX_IA_MAXLENGTH"] = 67;
            values[valuesById[68] = "AX_IA_PAINTORDER"] = 68;
            values[valuesById[69] = "AX_IA_COMMITTEDTEXTLENGTH"] = 69;
            return values;
        })();

        /**
         * AX Float attribute enum.
         * Next ID: 9
         * @name optimization_guide.proto.AXFloatAttribute
         * @enum {number}
         * @property {number} AX_FA_NONE=0 AX_FA_NONE value
         * @property {number} AX_FA_VALUEFORRANGE=1 AX_FA_VALUEFORRANGE value
         * @property {number} AX_FA_MINVALUEFORRANGE=2 AX_FA_MINVALUEFORRANGE value
         * @property {number} AX_FA_MAXVALUEFORRANGE=3 AX_FA_MAXVALUEFORRANGE value
         * @property {number} AX_FA_STEPVALUEFORRANGE=4 AX_FA_STEPVALUEFORRANGE value
         * @property {number} AX_FA_FONTSIZE=5 AX_FA_FONTSIZE value
         * @property {number} AX_FA_FONTWEIGHT=6 AX_FA_FONTWEIGHT value
         * @property {number} AX_FA_TEXTINDENT=7 AX_FA_TEXTINDENT value
         * @property {number} AX_FA_CHILDTREESCALE=8 AX_FA_CHILDTREESCALE value
         */
        proto.AXFloatAttribute = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AX_FA_NONE"] = 0;
            values[valuesById[1] = "AX_FA_VALUEFORRANGE"] = 1;
            values[valuesById[2] = "AX_FA_MINVALUEFORRANGE"] = 2;
            values[valuesById[3] = "AX_FA_MAXVALUEFORRANGE"] = 3;
            values[valuesById[4] = "AX_FA_STEPVALUEFORRANGE"] = 4;
            values[valuesById[5] = "AX_FA_FONTSIZE"] = 5;
            values[valuesById[6] = "AX_FA_FONTWEIGHT"] = 6;
            values[valuesById[7] = "AX_FA_TEXTINDENT"] = 7;
            values[valuesById[8] = "AX_FA_CHILDTREESCALE"] = 8;
            return values;
        })();

        /**
         * AX Bool attribute enum.
         * Next ID: 26
         * @name optimization_guide.proto.AXBoolAttribute
         * @enum {number}
         * @property {number} AX_BA_NONE=0 AX_BA_NONE value
         * @property {number} AX_BA_BUSY=1 AX_BA_BUSY value
         * @property {number} AX_BA_NONATOMICTEXTFIELDROOT=2 AX_BA_NONATOMICTEXTFIELDROOT value
         * @property {number} AX_BA_CONTAINERLIVEATOMIC=3 AX_BA_CONTAINERLIVEATOMIC value
         * @property {number} AX_BA_CONTAINERLIVEBUSY=4 AX_BA_CONTAINERLIVEBUSY value
         * @property {number} AX_BA_LIVEATOMIC=5 AX_BA_LIVEATOMIC value
         * @property {number} AX_BA_MODAL=6 AX_BA_MODAL value
         * @property {number} AX_BA_UPDATELOCATIONONLY=7 AX_BA_UPDATELOCATIONONLY value
         * @property {number} AX_BA_CANVASHASFALLBACK=8 AX_BA_CANVASHASFALLBACK value
         * @property {number} AX_BA_SCROLLABLE=9 AX_BA_SCROLLABLE value
         * @property {number} AX_BA_CLICKABLE=10 AX_BA_CLICKABLE value
         * @property {number} AX_BA_CLIPSCHILDREN=11 AX_BA_CLIPSCHILDREN value
         * @property {number} AX_BA_NOTUSERSELECTABLESTYLE=12 AX_BA_NOTUSERSELECTABLESTYLE value
         * @property {number} AX_BA_SELECTED=13 AX_BA_SELECTED value
         * @property {number} AX_BA_SELECTEDFROMFOCUS=14 AX_BA_SELECTEDFROMFOCUS value
         * @property {number} AX_BA_SUPPORTSTEXTLOCATION=15 AX_BA_SUPPORTSTEXTLOCATION value
         * @property {number} AX_BA_GRABBEDDEPRECATED=16 AX_BA_GRABBEDDEPRECATED value
         * @property {number} AX_BA_ISLINEBREAKINGOBJECT=17 AX_BA_ISLINEBREAKINGOBJECT value
         * @property {number} AX_BA_ISPAGEBREAKINGOBJECT=18 AX_BA_ISPAGEBREAKINGOBJECT value
         * @property {number} AX_BA_HASARIAATTRIBUTE=19 AX_BA_HASARIAATTRIBUTE value
         * @property {number} AX_BA_TOUCHPASSTHROUGHDEPRECATED=20 AX_BA_TOUCHPASSTHROUGHDEPRECATED value
         * @property {number} AX_BA_LONGCLICKABLE=21 AX_BA_LONGCLICKABLE value
         * @property {number} AX_BA_HASHIDDENOFFSCREENNODES=22 AX_BA_HASHIDDENOFFSCREENNODES value
         * @property {number} AX_BA_HASCOMPOSITION=23 AX_BA_HASCOMPOSITION value
         * @property {number} AX_BA_COMMITTEDBYIME=24 AX_BA_COMMITTEDBYIME value
         * @property {number} AX_BA_TEXTSUGGESTIONSELECTEDBYIME=25 AX_BA_TEXTSUGGESTIONSELECTEDBYIME value
         */
        proto.AXBoolAttribute = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AX_BA_NONE"] = 0;
            values[valuesById[1] = "AX_BA_BUSY"] = 1;
            values[valuesById[2] = "AX_BA_NONATOMICTEXTFIELDROOT"] = 2;
            values[valuesById[3] = "AX_BA_CONTAINERLIVEATOMIC"] = 3;
            values[valuesById[4] = "AX_BA_CONTAINERLIVEBUSY"] = 4;
            values[valuesById[5] = "AX_BA_LIVEATOMIC"] = 5;
            values[valuesById[6] = "AX_BA_MODAL"] = 6;
            values[valuesById[7] = "AX_BA_UPDATELOCATIONONLY"] = 7;
            values[valuesById[8] = "AX_BA_CANVASHASFALLBACK"] = 8;
            values[valuesById[9] = "AX_BA_SCROLLABLE"] = 9;
            values[valuesById[10] = "AX_BA_CLICKABLE"] = 10;
            values[valuesById[11] = "AX_BA_CLIPSCHILDREN"] = 11;
            values[valuesById[12] = "AX_BA_NOTUSERSELECTABLESTYLE"] = 12;
            values[valuesById[13] = "AX_BA_SELECTED"] = 13;
            values[valuesById[14] = "AX_BA_SELECTEDFROMFOCUS"] = 14;
            values[valuesById[15] = "AX_BA_SUPPORTSTEXTLOCATION"] = 15;
            values[valuesById[16] = "AX_BA_GRABBEDDEPRECATED"] = 16;
            values[valuesById[17] = "AX_BA_ISLINEBREAKINGOBJECT"] = 17;
            values[valuesById[18] = "AX_BA_ISPAGEBREAKINGOBJECT"] = 18;
            values[valuesById[19] = "AX_BA_HASARIAATTRIBUTE"] = 19;
            values[valuesById[20] = "AX_BA_TOUCHPASSTHROUGHDEPRECATED"] = 20;
            values[valuesById[21] = "AX_BA_LONGCLICKABLE"] = 21;
            values[valuesById[22] = "AX_BA_HASHIDDENOFFSCREENNODES"] = 22;
            values[valuesById[23] = "AX_BA_HASCOMPOSITION"] = 23;
            values[valuesById[24] = "AX_BA_COMMITTEDBYIME"] = 24;
            values[valuesById[25] = "AX_BA_TEXTSUGGESTIONSELECTEDBYIME"] = 25;
            return values;
        })();

        /**
         * AX IntList attribute enum.
         * Next ID: 30
         * @name optimization_guide.proto.AXIntListAttribute
         * @enum {number}
         * @property {number} AX_ILA_NONE=0 AX_ILA_NONE value
         * @property {number} AX_ILA_INDIRECTCHILDIDS=1 AX_ILA_INDIRECTCHILDIDS value
         * @property {number} AX_ILA_ACTIONSIDS=29 AX_ILA_ACTIONSIDS value
         * @property {number} AX_ILA_CONTROLSIDS=2 AX_ILA_CONTROLSIDS value
         * @property {number} AX_ILA_DETAILSIDS=3 AX_ILA_DETAILSIDS value
         * @property {number} AX_ILA_DESCRIBEDBYIDS=4 AX_ILA_DESCRIBEDBYIDS value
         * @property {number} AX_ILA_FLOWTOIDS=5 AX_ILA_FLOWTOIDS value
         * @property {number} AX_ILA_LABELLEDBYIDS=6 AX_ILA_LABELLEDBYIDS value
         * @property {number} AX_ILA_RADIOGROUPIDS=7 AX_ILA_RADIOGROUPIDS value
         * @property {number} AX_ILA_MARKERTYPES=8 AX_ILA_MARKERTYPES value
         * @property {number} AX_ILA_MARKERSTARTS=9 AX_ILA_MARKERSTARTS value
         * @property {number} AX_ILA_MARKERENDS=10 AX_ILA_MARKERENDS value
         * @property {number} AX_ILA_CHARACTEROFFSETS=11 AX_ILA_CHARACTEROFFSETS value
         * @property {number} AX_ILA_LINESTARTS=12 AX_ILA_LINESTARTS value
         * @property {number} AX_ILA_WORDSTARTS=13 AX_ILA_WORDSTARTS value
         * @property {number} AX_ILA_WORDENDS=14 AX_ILA_WORDENDS value
         * @property {number} AX_ILA_CUSTOMACTIONIDS=15 AX_ILA_CUSTOMACTIONIDS value
         * @property {number} AX_ILA_CARETBOUNDS=16 AX_ILA_CARETBOUNDS value
         * @property {number} AX_ILA_LINEENDS=17 AX_ILA_LINEENDS value
         * @property {number} AX_ILA_SENTENCESTARTS=18 AX_ILA_SENTENCESTARTS value
         * @property {number} AX_ILA_SENTENCEENDS=19 AX_ILA_SENTENCEENDS value
         * @property {number} AX_ILA_HIGHLIGHTTYPES=20 AX_ILA_HIGHLIGHTTYPES value
         * @property {number} AX_ILA_TEXTOPERATIONSTARTANCHORIDS=21 AX_ILA_TEXTOPERATIONSTARTANCHORIDS value
         * @property {number} AX_ILA_TEXTOPERATIONSTARTOFFSETS=22 AX_ILA_TEXTOPERATIONSTARTOFFSETS value
         * @property {number} AX_ILA_TEXTOPERATIONENDANCHORIDS=23 AX_ILA_TEXTOPERATIONENDANCHORIDS value
         * @property {number} AX_ILA_TEXTOPERATIONENDOFFSETS=24 AX_ILA_TEXTOPERATIONENDOFFSETS value
         * @property {number} AX_ILA_TEXTOPERATIONS=25 AX_ILA_TEXTOPERATIONS value
         * @property {number} AX_ILA_ERRORMESSAGEIDS=26 AX_ILA_ERRORMESSAGEIDS value
         * @property {number} AX_ILA_ARIANOTIFICATIONINTERRUPTPROPERTIES=27 AX_ILA_ARIANOTIFICATIONINTERRUPTPROPERTIES value
         * @property {number} AX_ILA_ARIANOTIFICATIONPRIORITYPROPERTIES=28 AX_ILA_ARIANOTIFICATIONPRIORITYPROPERTIES value
         */
        proto.AXIntListAttribute = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AX_ILA_NONE"] = 0;
            values[valuesById[1] = "AX_ILA_INDIRECTCHILDIDS"] = 1;
            values[valuesById[29] = "AX_ILA_ACTIONSIDS"] = 29;
            values[valuesById[2] = "AX_ILA_CONTROLSIDS"] = 2;
            values[valuesById[3] = "AX_ILA_DETAILSIDS"] = 3;
            values[valuesById[4] = "AX_ILA_DESCRIBEDBYIDS"] = 4;
            values[valuesById[5] = "AX_ILA_FLOWTOIDS"] = 5;
            values[valuesById[6] = "AX_ILA_LABELLEDBYIDS"] = 6;
            values[valuesById[7] = "AX_ILA_RADIOGROUPIDS"] = 7;
            values[valuesById[8] = "AX_ILA_MARKERTYPES"] = 8;
            values[valuesById[9] = "AX_ILA_MARKERSTARTS"] = 9;
            values[valuesById[10] = "AX_ILA_MARKERENDS"] = 10;
            values[valuesById[11] = "AX_ILA_CHARACTEROFFSETS"] = 11;
            values[valuesById[12] = "AX_ILA_LINESTARTS"] = 12;
            values[valuesById[13] = "AX_ILA_WORDSTARTS"] = 13;
            values[valuesById[14] = "AX_ILA_WORDENDS"] = 14;
            values[valuesById[15] = "AX_ILA_CUSTOMACTIONIDS"] = 15;
            values[valuesById[16] = "AX_ILA_CARETBOUNDS"] = 16;
            values[valuesById[17] = "AX_ILA_LINEENDS"] = 17;
            values[valuesById[18] = "AX_ILA_SENTENCESTARTS"] = 18;
            values[valuesById[19] = "AX_ILA_SENTENCEENDS"] = 19;
            values[valuesById[20] = "AX_ILA_HIGHLIGHTTYPES"] = 20;
            values[valuesById[21] = "AX_ILA_TEXTOPERATIONSTARTANCHORIDS"] = 21;
            values[valuesById[22] = "AX_ILA_TEXTOPERATIONSTARTOFFSETS"] = 22;
            values[valuesById[23] = "AX_ILA_TEXTOPERATIONENDANCHORIDS"] = 23;
            values[valuesById[24] = "AX_ILA_TEXTOPERATIONENDOFFSETS"] = 24;
            values[valuesById[25] = "AX_ILA_TEXTOPERATIONS"] = 25;
            values[valuesById[26] = "AX_ILA_ERRORMESSAGEIDS"] = 26;
            values[valuesById[27] = "AX_ILA_ARIANOTIFICATIONINTERRUPTPROPERTIES"] = 27;
            values[valuesById[28] = "AX_ILA_ARIANOTIFICATIONPRIORITYPROPERTIES"] = 28;
            return values;
        })();

        /**
         * AX StringList attribute enum.
         * Next ID: 5
         * @name optimization_guide.proto.AXStringListAttribute
         * @enum {number}
         * @property {number} AX_SLA_NONE=0 AX_SLA_NONE value
         * @property {number} AX_SLA_CUSTOMACTIONDESCRIPTIONS=1 AX_SLA_CUSTOMACTIONDESCRIPTIONS value
         * @property {number} AX_SLA_ARIANOTIFICATIONANNOUNCEMENTS=2 AX_SLA_ARIANOTIFICATIONANNOUNCEMENTS value
         * @property {number} AX_SLA_ARIANOTIFICATIONTYPES=3 AX_SLA_ARIANOTIFICATIONTYPES value
         * @property {number} AX_SLA_TEXTOPERATIONREPLACEMENTSTRINGS=4 AX_SLA_TEXTOPERATIONREPLACEMENTSTRINGS value
         */
        proto.AXStringListAttribute = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AX_SLA_NONE"] = 0;
            values[valuesById[1] = "AX_SLA_CUSTOMACTIONDESCRIPTIONS"] = 1;
            values[valuesById[2] = "AX_SLA_ARIANOTIFICATIONANNOUNCEMENTS"] = 2;
            values[valuesById[3] = "AX_SLA_ARIANOTIFICATIONTYPES"] = 3;
            values[valuesById[4] = "AX_SLA_TEXTOPERATIONREPLACEMENTSTRINGS"] = 4;
            return values;
        })();

        /**
         * This will be updated when there is a significant change in the parsing logic.
         * Next ID: 3
         * @name optimization_guide.proto.AnnotatedPageContentVersion
         * @enum {number}
         * @property {number} ANNOTATED_PAGE_CONTENT_VERSION_UNKNOWN=0 ANNOTATED_PAGE_CONTENT_VERSION_UNKNOWN value
         * @property {number} ANNOTATED_PAGE_CONTENT_VERSION_1_0=1 ANNOTATED_PAGE_CONTENT_VERSION_1_0 value
         * @property {number} ANNOTATED_PAGE_CONTENT_VERSION_ONLY_ACTIONABLE_ELEMENTS_1_0=2 DEPRECATED: Use AnnotatedPageContentMode mode instead.
         * TODO(crbug.com/490195093): Maintain both on the client until all users have been
         * switched over.
         */
        proto.AnnotatedPageContentVersion = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ANNOTATED_PAGE_CONTENT_VERSION_UNKNOWN"] = 0;
            values[valuesById[1] = "ANNOTATED_PAGE_CONTENT_VERSION_1_0"] = 1;
            values[valuesById[2] = "ANNOTATED_PAGE_CONTENT_VERSION_ONLY_ACTIONABLE_ELEMENTS_1_0"] = 2;
            return values;
        })();

        /**
         * The extraction on the client can be configured to a specific mode. This
         * tracks the mode used to extract this proto.
         * @name optimization_guide.proto.AnnotatedPageContentMode
         * @enum {number}
         * @property {number} ANNOTATED_PAGE_CONTENT_MODE_DEFAULT=0 ANNOTATED_PAGE_CONTENT_MODE_DEFAULT value
         * @property {number} ANNOTATED_PAGE_CONTENT_MODE_ACTIONABLE_ELEMENTS=1 This mode is strictly a superset of the default mode. It includes
         * additional information to understand which content a user can interact
         * with.
         * 
         * Note: This mode is under active development and backwards incompatible
         * changes are expected.
         */
        proto.AnnotatedPageContentMode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ANNOTATED_PAGE_CONTENT_MODE_DEFAULT"] = 0;
            values[valuesById[1] = "ANNOTATED_PAGE_CONTENT_MODE_ACTIONABLE_ELEMENTS"] = 1;
            return values;
        })();

        /**
         * Indicates the structure of the ContentNode. Suggests which type of
         * content_data will be found in the ContentNode.
         * When adding new types, please also update AIPageContentAttributeType in
         * third_party/blink/public/mojom/content_extraction/ai_page_content.mojom.
         * See crrev.com/c/6072788 for an example.
         * Next ID: 28
         * @name optimization_guide.proto.ContentAttributeType
         * @enum {number}
         * @property {number} CONTENT_ATTRIBUTE_UNKNOWN=0 Unknown is not a valid attribute type and should never be used by the
         * client. You can consider discarding ContentNodes with this attribute type.
         * @property {number} CONTENT_ATTRIBUTE_ROOT=1 CONTENT_ATTRIBUTE_ROOT value
         * @property {number} CONTENT_ATTRIBUTE_CONTAINER=2 CONTENT_ATTRIBUTE_CONTAINER value
         * @property {number} CONTENT_ATTRIBUTE_IFRAME=3 CONTENT_ATTRIBUTE_IFRAME value
         * @property {number} CONTENT_ATTRIBUTE_PARAGRAPH=4 Text chunks.
         * @property {number} CONTENT_ATTRIBUTE_HEADING=5 CONTENT_ATTRIBUTE_HEADING value
         * @property {number} CONTENT_ATTRIBUTE_TEXT=20 CONTENT_ATTRIBUTE_TEXT value
         * @property {number} CONTENT_ATTRIBUTE_ANCHOR=22 CONTENT_ATTRIBUTE_ANCHOR value
         * @property {number} CONTENT_ATTRIBUTE_IMAGE=9 Image chunks.
         * @property {number} CONTENT_ATTRIBUTE_SVG_ROOT=25 Root SVG nodes.
         * @property {number} CONTENT_ATTRIBUTE_CANVAS=26 CONTENT_ATTRIBUTE_CANVAS value
         * @property {number} CONTENT_ATTRIBUTE_VIDEO=27 CONTENT_ATTRIBUTE_VIDEO value
         * @property {number} CONTENT_ATTRIBUTE_ORDERED_LIST=6 Structured chunks.
         * @property {number} CONTENT_ATTRIBUTE_UNORDERED_LIST=7 CONTENT_ATTRIBUTE_UNORDERED_LIST value
         * @property {number} CONTENT_ATTRIBUTE_LIST_ITEM=23 CONTENT_ATTRIBUTE_LIST_ITEM value
         * @property {number} CONTENT_ATTRIBUTE_FORM=8 CONTENT_ATTRIBUTE_FORM value
         * @property {number} CONTENT_ATTRIBUTE_FORM_CONTROL=24 CONTENT_ATTRIBUTE_FORM_CONTROL value
         * @property {number} CONTENT_ATTRIBUTE_TABLE=10 CONTENT_ATTRIBUTE_TABLE value
         * @property {number} CONTENT_ATTRIBUTE_TABLE_ROW=21 CONTENT_ATTRIBUTE_TABLE_ROW value
         * @property {number} CONTENT_ATTRIBUTE_TABLE_CELL=11 CONTENT_ATTRIBUTE_TABLE_CELL value
         */
        proto.ContentAttributeType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CONTENT_ATTRIBUTE_UNKNOWN"] = 0;
            values[valuesById[1] = "CONTENT_ATTRIBUTE_ROOT"] = 1;
            values[valuesById[2] = "CONTENT_ATTRIBUTE_CONTAINER"] = 2;
            values[valuesById[3] = "CONTENT_ATTRIBUTE_IFRAME"] = 3;
            values[valuesById[4] = "CONTENT_ATTRIBUTE_PARAGRAPH"] = 4;
            values[valuesById[5] = "CONTENT_ATTRIBUTE_HEADING"] = 5;
            values[valuesById[20] = "CONTENT_ATTRIBUTE_TEXT"] = 20;
            values[valuesById[22] = "CONTENT_ATTRIBUTE_ANCHOR"] = 22;
            values[valuesById[9] = "CONTENT_ATTRIBUTE_IMAGE"] = 9;
            values[valuesById[25] = "CONTENT_ATTRIBUTE_SVG_ROOT"] = 25;
            values[valuesById[26] = "CONTENT_ATTRIBUTE_CANVAS"] = 26;
            values[valuesById[27] = "CONTENT_ATTRIBUTE_VIDEO"] = 27;
            values[valuesById[6] = "CONTENT_ATTRIBUTE_ORDERED_LIST"] = 6;
            values[valuesById[7] = "CONTENT_ATTRIBUTE_UNORDERED_LIST"] = 7;
            values[valuesById[23] = "CONTENT_ATTRIBUTE_LIST_ITEM"] = 23;
            values[valuesById[8] = "CONTENT_ATTRIBUTE_FORM"] = 8;
            values[valuesById[24] = "CONTENT_ATTRIBUTE_FORM_CONTROL"] = 24;
            values[valuesById[10] = "CONTENT_ATTRIBUTE_TABLE"] = 10;
            values[valuesById[21] = "CONTENT_ATTRIBUTE_TABLE_ROW"] = 21;
            values[valuesById[11] = "CONTENT_ATTRIBUTE_TABLE_CELL"] = 11;
            return values;
        })();

        /**
         * The reason why a node is clickable.
         * Next ID: 17
         * @name optimization_guide.proto.ClickabilityReason
         * @enum {number}
         * @property {number} CLICKABILITY_REASON_CLICKABLE_CONTROL=0 The node is a native form control.
         * @property {number} CLICKABILITY_REASON_CLICK_HANDLER=1 The node has a click event handler.
         * @property {number} CLICKABILITY_REASON_MOUSE_EVENTS=2 The node has mouse event handlers like mouseup, mousedown, mouseover and
         * mouseenter. Deprecated in favor of
         * CLICKABILITY_REASON_MOUSE_CLICK and CLICKABILITY_REASON_MOUSE_HOVER.
         * TODO(crbug.com/490195093): Remove this value.
         * @property {number} CLICKABILITY_REASON_KEY_EVENTS=3 The node has keyboard event handlers like keydown, keypress, keyup.
         * @property {number} CLICKABILITY_REASON_EDITABLE=4 The node's text can be edited.
         * @property {number} CLICKABILITY_REASON_CURSOR_POINTER=5 The node uses cursor css to indicate the element is interactive.
         * @property {number} CLICKABILITY_REASON_ARIA_ROLE=6 The node has a clickable aria role.
         * @property {number} CLICKABILITY_REASON_ARIA_HAS_POPUP=7 The node has the aria-haspopup attribute indicating it opens a popup on
         * activation.
         * @property {number} CLICKABILITY_REASON_ARIA_EXPANDED_TRUE=8 The node has the aria-expanded attribute indicating it controls the
         * visibility of other elements. This reason implies that the associated
         * control is currently expanded.
         * @property {number} CLICKABILITY_REASON_ARIA_EXPANDED_FALSE=9 The node has the aria-expanded attribute indicating it controls the
         * visibility of other elements. This reason implies that the associated
         * control is currently collapsed.
         * @property {number} CLICKABILITY_REASON_TAB_INDEX=10 The node has the tabIndex attribute set to a valid value.
         * @property {number} CLICKABILITY_REASON_AUTOCOMPLETE=11 The node has autocomplete, as indicated by the same-named attribute or
         * aria-autocomplete.
         * @property {number} CLICKABILITY_REASON_MOUSE_CLICK=12 The node has mouse event handlers like mouseup and mousedown.
         * @property {number} CLICKABILITY_REASON_MOUSE_HOVER=13 The node has mouse event handlers like mouseover and mouseenter.
         * @property {number} CLICKABILITY_REASON_HOVER_PSEUDO_CLASS=14 The node has a CSS :hover pseudo-class, which indicates that it changes
         * state when a mouse hovers over it. This should be relatively low-priority
         * compared to stronger clickability signals. There's not enough granularity
         * in Chrome to know what properties the rule might effect, so this reason
         * just indicates that a :hover rule is defined.
         * @property {number} CLICKABILITY_REASON_ARIA_TOGGLE=15 The node has the aria-checked or aria-pressed attribute indicating it can
         * be toggled.
         * @property {number} CLICKABILITY_REASON_ARIA_SELECTABLE=16 The node has the aria-selected attribute indicating it can be selected or
         * unselected.
         */
        proto.ClickabilityReason = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CLICKABILITY_REASON_CLICKABLE_CONTROL"] = 0;
            values[valuesById[1] = "CLICKABILITY_REASON_CLICK_HANDLER"] = 1;
            values[valuesById[2] = "CLICKABILITY_REASON_MOUSE_EVENTS"] = 2;
            values[valuesById[3] = "CLICKABILITY_REASON_KEY_EVENTS"] = 3;
            values[valuesById[4] = "CLICKABILITY_REASON_EDITABLE"] = 4;
            values[valuesById[5] = "CLICKABILITY_REASON_CURSOR_POINTER"] = 5;
            values[valuesById[6] = "CLICKABILITY_REASON_ARIA_ROLE"] = 6;
            values[valuesById[7] = "CLICKABILITY_REASON_ARIA_HAS_POPUP"] = 7;
            values[valuesById[8] = "CLICKABILITY_REASON_ARIA_EXPANDED_TRUE"] = 8;
            values[valuesById[9] = "CLICKABILITY_REASON_ARIA_EXPANDED_FALSE"] = 9;
            values[valuesById[10] = "CLICKABILITY_REASON_TAB_INDEX"] = 10;
            values[valuesById[11] = "CLICKABILITY_REASON_AUTOCOMPLETE"] = 11;
            values[valuesById[12] = "CLICKABILITY_REASON_MOUSE_CLICK"] = 12;
            values[valuesById[13] = "CLICKABILITY_REASON_MOUSE_HOVER"] = 13;
            values[valuesById[14] = "CLICKABILITY_REASON_HOVER_PSEUDO_CLASS"] = 14;
            values[valuesById[15] = "CLICKABILITY_REASON_ARIA_TOGGLE"] = 15;
            values[valuesById[16] = "CLICKABILITY_REASON_ARIA_SELECTABLE"] = 16;
            return values;
        })();

        /**
         * Provides hints that indicate that interaction with this node is disabled.
         * Next ID: 6
         * @name optimization_guide.proto.InteractionDisabledReason
         * @enum {number}
         * @property {number} INTERACTION_DISABLED_REASON_UNSPECIFIED=0 INTERACTION_DISABLED_REASON_UNSPECIFIED value
         * @property {number} INTERACTION_DISABLED_REASON_DISABLED=1 The node is disabled by the `disabled` attribute.
         * @property {number} INTERACTION_DISABLED_REASON_ARIA_DISABLED=2 The node is disabled by the `aria-disabled` attribute.
         * @property {number} INTERACTION_DISABLED_REASON_CURSOR_NOT_ALLOWED=3 The node has the style `cursor: not-allowed`.
         * @property {number} INTERACTION_DISABLED_REASON_ARIA_HIDDEN=4 The node is hidden from the accessibility tree via `aria-hidden="true"`
         * on an ancestor node or itself.
         * @property {number} INTERACTION_DISABLED_REASON_ARIA_ROLE_PRESENTATIONAL=5 The node has an ARIA Role of `presentation` or `none`.
         */
        proto.InteractionDisabledReason = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "INTERACTION_DISABLED_REASON_UNSPECIFIED"] = 0;
            values[valuesById[1] = "INTERACTION_DISABLED_REASON_DISABLED"] = 1;
            values[valuesById[2] = "INTERACTION_DISABLED_REASON_ARIA_DISABLED"] = 2;
            values[valuesById[3] = "INTERACTION_DISABLED_REASON_CURSOR_NOT_ALLOWED"] = 3;
            values[valuesById[4] = "INTERACTION_DISABLED_REASON_ARIA_HIDDEN"] = 4;
            values[valuesById[5] = "INTERACTION_DISABLED_REASON_ARIA_ROLE_PRESENTATIONAL"] = 5;
            return values;
        })();

        /**
         * Next ID: 5
         * @name optimization_guide.proto.TextSize
         * @enum {number}
         * @property {number} TEXT_SIZE_M_DEFAULT=0 TEXT_SIZE_M_DEFAULT value
         * @property {number} TEXT_SIZE_XS=1 TEXT_SIZE_XS value
         * @property {number} TEXT_SIZE_S=2 TEXT_SIZE_S value
         * @property {number} TEXT_SIZE_L=3 TEXT_SIZE_L value
         * @property {number} TEXT_SIZE_XL=4 TEXT_SIZE_XL value
         */
        proto.TextSize = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TEXT_SIZE_M_DEFAULT"] = 0;
            values[valuesById[1] = "TEXT_SIZE_XS"] = 1;
            values[valuesById[2] = "TEXT_SIZE_S"] = 2;
            values[valuesById[3] = "TEXT_SIZE_L"] = 3;
            values[valuesById[4] = "TEXT_SIZE_XL"] = 4;
            return values;
        })();

        /**
         * The relationship between the linked URL and the current document.
         * https://html.spec.whatwg.org/multipage/links.html#linkTypes
         * @name optimization_guide.proto.AnchorRel
         * @enum {number}
         * @property {number} ANCHOR_REL_UNKNOWN=0 ANCHOR_REL_UNKNOWN value
         * @property {number} ANCHOR_REL_NO_REFERRER=1 ANCHOR_REL_NO_REFERRER value
         * @property {number} ANCHOR_REL_NO_OPENER=2 ANCHOR_REL_NO_OPENER value
         * @property {number} ANCHOR_REL_OPENER=3 ANCHOR_REL_OPENER value
         * @property {number} ANCHOR_REL_PRIVACY_POLICY=4 ANCHOR_REL_PRIVACY_POLICY value
         * @property {number} ANCHOR_REL_TERMS_OF_SERVICE=5 ANCHOR_REL_TERMS_OF_SERVICE value
         */
        proto.AnchorRel = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ANCHOR_REL_UNKNOWN"] = 0;
            values[valuesById[1] = "ANCHOR_REL_NO_REFERRER"] = 1;
            values[valuesById[2] = "ANCHOR_REL_NO_OPENER"] = 2;
            values[valuesById[3] = "ANCHOR_REL_OPENER"] = 3;
            values[valuesById[4] = "ANCHOR_REL_PRIVACY_POLICY"] = 4;
            values[valuesById[5] = "ANCHOR_REL_TERMS_OF_SERVICE"] = 5;
            return values;
        })();

        /**
         * Matches FormControlType in mojo, but off by one, because this list contains
         * an "UNSPECIFIED" value at 0.
         * https://source.chromium.org/chromium/chromium/src/+/main:components/autofill/core/common/mojom/autofill_types.mojom;l=17;drc=105770df485ace262780d95126bb60b1a16ec340;bpv=1;bpt=1
         * Next ID: 34
         * @name optimization_guide.proto.FormControlType
         * @enum {number}
         * @property {number} FORM_CONTROL_TYPE_UNSPECIFIED=0 FORM_CONTROL_TYPE_UNSPECIFIED value
         * @property {number} FORM_CONTROL_TYPE_CONTENT_EDITABLE=1 FORM_CONTROL_TYPE_CONTENT_EDITABLE value
         * @property {number} FORM_CONTROL_TYPE_INPUT_CHECKBOX=2 FORM_CONTROL_TYPE_INPUT_CHECKBOX value
         * @property {number} FORM_CONTROL_TYPE_INPUT_EMAIL=3 FORM_CONTROL_TYPE_INPUT_EMAIL value
         * @property {number} FORM_CONTROL_TYPE_INPUT_MONTH=4 FORM_CONTROL_TYPE_INPUT_MONTH value
         * @property {number} FORM_CONTROL_TYPE_INPUT_NUMBER=5 FORM_CONTROL_TYPE_INPUT_NUMBER value
         * @property {number} FORM_CONTROL_TYPE_INPUT_PASSWORD=6 FORM_CONTROL_TYPE_INPUT_PASSWORD value
         * @property {number} FORM_CONTROL_TYPE_INPUT_RADIO=7 FORM_CONTROL_TYPE_INPUT_RADIO value
         * @property {number} FORM_CONTROL_TYPE_INPUT_SEARCH=8 FORM_CONTROL_TYPE_INPUT_SEARCH value
         * @property {number} FORM_CONTROL_TYPE_INPUT_TELEPHONE=9 FORM_CONTROL_TYPE_INPUT_TELEPHONE value
         * @property {number} FORM_CONTROL_TYPE_INPUT_TEXT=10 FORM_CONTROL_TYPE_INPUT_TEXT value
         * @property {number} FORM_CONTROL_TYPE_INPUT_URL=11 FORM_CONTROL_TYPE_INPUT_URL value
         * @property {number} FORM_CONTROL_TYPE_SELECT_ONE=12 FORM_CONTROL_TYPE_SELECT_ONE value
         * @property {number} FORM_CONTROL_TYPE_SELECT_MULTIPLE=13 FORM_CONTROL_TYPE_SELECT_MULTIPLE value
         * @property {number} FORM_CONTROL_TYPE_TEXT_AREA=15 FORM_CONTROL_TYPE_TEXT_AREA value
         * @property {number} FORM_CONTROL_TYPE_BUTTON_BUTTON=16 FORM_CONTROL_TYPE_BUTTON_BUTTON value
         * @property {number} FORM_CONTROL_TYPE_BUTTON_SUBMIT=17 FORM_CONTROL_TYPE_BUTTON_SUBMIT value
         * @property {number} FORM_CONTROL_TYPE_BUTTON_RESET=18 FORM_CONTROL_TYPE_BUTTON_RESET value
         * @property {number} FORM_CONTROL_TYPE_BUTTON_POPOVER=19 FORM_CONTROL_TYPE_BUTTON_POPOVER value
         * @property {number} FORM_CONTROL_TYPE_FIELDSET=20 FORM_CONTROL_TYPE_FIELDSET value
         * @property {number} FORM_CONTROL_TYPE_INPUT_BUTTON=21 FORM_CONTROL_TYPE_INPUT_BUTTON value
         * @property {number} FORM_CONTROL_TYPE_INPUT_COLOR=22 FORM_CONTROL_TYPE_INPUT_COLOR value
         * @property {number} FORM_CONTROL_TYPE_INPUT_DATE=23 FORM_CONTROL_TYPE_INPUT_DATE value
         * @property {number} FORM_CONTROL_TYPE_INPUT_DATETIME_LOCAL=24 FORM_CONTROL_TYPE_INPUT_DATETIME_LOCAL value
         * @property {number} FORM_CONTROL_TYPE_INPUT_FILE=25 FORM_CONTROL_TYPE_INPUT_FILE value
         * @property {number} FORM_CONTROL_TYPE_INPUT_HIDDEN=26 FORM_CONTROL_TYPE_INPUT_HIDDEN value
         * @property {number} FORM_CONTROL_TYPE_INPUT_IMAGE=27 FORM_CONTROL_TYPE_INPUT_IMAGE value
         * @property {number} FORM_CONTROL_TYPE_INPUT_RANGE=28 FORM_CONTROL_TYPE_INPUT_RANGE value
         * @property {number} FORM_CONTROL_TYPE_INPUT_RESET=29 FORM_CONTROL_TYPE_INPUT_RESET value
         * @property {number} FORM_CONTROL_TYPE_INPUT_SUBMIT=30 FORM_CONTROL_TYPE_INPUT_SUBMIT value
         * @property {number} FORM_CONTROL_TYPE_INPUT_TIME=31 FORM_CONTROL_TYPE_INPUT_TIME value
         * @property {number} FORM_CONTROL_TYPE_INPUT_WEEK=32 FORM_CONTROL_TYPE_INPUT_WEEK value
         * @property {number} FORM_CONTROL_TYPE_OUTPUT=33 FORM_CONTROL_TYPE_OUTPUT value
         */
        proto.FormControlType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "FORM_CONTROL_TYPE_UNSPECIFIED"] = 0;
            values[valuesById[1] = "FORM_CONTROL_TYPE_CONTENT_EDITABLE"] = 1;
            values[valuesById[2] = "FORM_CONTROL_TYPE_INPUT_CHECKBOX"] = 2;
            values[valuesById[3] = "FORM_CONTROL_TYPE_INPUT_EMAIL"] = 3;
            values[valuesById[4] = "FORM_CONTROL_TYPE_INPUT_MONTH"] = 4;
            values[valuesById[5] = "FORM_CONTROL_TYPE_INPUT_NUMBER"] = 5;
            values[valuesById[6] = "FORM_CONTROL_TYPE_INPUT_PASSWORD"] = 6;
            values[valuesById[7] = "FORM_CONTROL_TYPE_INPUT_RADIO"] = 7;
            values[valuesById[8] = "FORM_CONTROL_TYPE_INPUT_SEARCH"] = 8;
            values[valuesById[9] = "FORM_CONTROL_TYPE_INPUT_TELEPHONE"] = 9;
            values[valuesById[10] = "FORM_CONTROL_TYPE_INPUT_TEXT"] = 10;
            values[valuesById[11] = "FORM_CONTROL_TYPE_INPUT_URL"] = 11;
            values[valuesById[12] = "FORM_CONTROL_TYPE_SELECT_ONE"] = 12;
            values[valuesById[13] = "FORM_CONTROL_TYPE_SELECT_MULTIPLE"] = 13;
            values[valuesById[15] = "FORM_CONTROL_TYPE_TEXT_AREA"] = 15;
            values[valuesById[16] = "FORM_CONTROL_TYPE_BUTTON_BUTTON"] = 16;
            values[valuesById[17] = "FORM_CONTROL_TYPE_BUTTON_SUBMIT"] = 17;
            values[valuesById[18] = "FORM_CONTROL_TYPE_BUTTON_RESET"] = 18;
            values[valuesById[19] = "FORM_CONTROL_TYPE_BUTTON_POPOVER"] = 19;
            values[valuesById[20] = "FORM_CONTROL_TYPE_FIELDSET"] = 20;
            values[valuesById[21] = "FORM_CONTROL_TYPE_INPUT_BUTTON"] = 21;
            values[valuesById[22] = "FORM_CONTROL_TYPE_INPUT_COLOR"] = 22;
            values[valuesById[23] = "FORM_CONTROL_TYPE_INPUT_DATE"] = 23;
            values[valuesById[24] = "FORM_CONTROL_TYPE_INPUT_DATETIME_LOCAL"] = 24;
            values[valuesById[25] = "FORM_CONTROL_TYPE_INPUT_FILE"] = 25;
            values[valuesById[26] = "FORM_CONTROL_TYPE_INPUT_HIDDEN"] = 26;
            values[valuesById[27] = "FORM_CONTROL_TYPE_INPUT_IMAGE"] = 27;
            values[valuesById[28] = "FORM_CONTROL_TYPE_INPUT_RANGE"] = 28;
            values[valuesById[29] = "FORM_CONTROL_TYPE_INPUT_RESET"] = 29;
            values[valuesById[30] = "FORM_CONTROL_TYPE_INPUT_SUBMIT"] = 30;
            values[valuesById[31] = "FORM_CONTROL_TYPE_INPUT_TIME"] = 31;
            values[valuesById[32] = "FORM_CONTROL_TYPE_INPUT_WEEK"] = 32;
            values[valuesById[33] = "FORM_CONTROL_TYPE_OUTPUT"] = 33;
            return values;
        })();

        /**
         * RedactionDecision enum.
         * @name optimization_guide.proto.RedactionDecision
         * @enum {number}
         * @property {number} REDACTION_DECISION_NO_REDACTION_NECESSARY=0 No redaction necessary for this node type.
         * @property {number} REDACTION_DECISION_UNREDACTED_EMPTY_PASSWORD=1 Empty password inputs are not redacted.
         * @property {number} REDACTION_DECISION_REDACTED_HAS_BEEN_PASSWORD=2 Is a password input or was in the past.
         * @property {number} REDACTION_DECISION_UNREDACTED_EMPTY_PAYMENT_FIELD=3 Empty payment fields are not redacted.
         * @property {number} REDACTION_DECISION_REDACTED_IS_SENSITIVE_PAYMENT_FIELD=4 Is a non-empty field that autofill recognized as a sensitive payment field
         * type and so must be redacted.
         * @property {number} REDACTION_DECISION_UNREDACTED_EMPTY_CUSTOM_PASSWORD=5 Empty inputs which have been classified as password-like by heuristic
         * redaction (e.g. `-webkit-text-security`). These are not redacted since they
         * contain no sensitive content, but the classification is preserved.
         * @property {number} REDACTION_DECISION_REDACTED_CUSTOM_PASSWORD_CSS=6 Is a password-like input detected by heuristic redaction based on CSS
         * masking (e.g. `-webkit-text-security` set to a masking value, not `none`).
         * @property {number} REDACTION_DECISION_REDACTED_CUSTOM_PASSWORD_JS=7 Is a password-like input detected by heuristic redaction based on a
         * JavaScript-masked value (e.g. mostly bullet-like masking characters).
         * @property {number} REDACTION_DECISION_REDACTED_IS_OTP=8 Is a non-empty field that autofill recognized as an OTP field and so must
         * be redacted.
         * @property {number} REDACTION_DECISION_UNREDACTED_EMPTY_OTP_FIELD=9 Is a empty field that autofill recognized as an OTP field.
         */
        proto.RedactionDecision = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "REDACTION_DECISION_NO_REDACTION_NECESSARY"] = 0;
            values[valuesById[1] = "REDACTION_DECISION_UNREDACTED_EMPTY_PASSWORD"] = 1;
            values[valuesById[2] = "REDACTION_DECISION_REDACTED_HAS_BEEN_PASSWORD"] = 2;
            values[valuesById[3] = "REDACTION_DECISION_UNREDACTED_EMPTY_PAYMENT_FIELD"] = 3;
            values[valuesById[4] = "REDACTION_DECISION_REDACTED_IS_SENSITIVE_PAYMENT_FIELD"] = 4;
            values[valuesById[5] = "REDACTION_DECISION_UNREDACTED_EMPTY_CUSTOM_PASSWORD"] = 5;
            values[valuesById[6] = "REDACTION_DECISION_REDACTED_CUSTOM_PASSWORD_CSS"] = 6;
            values[valuesById[7] = "REDACTION_DECISION_REDACTED_CUSTOM_PASSWORD_JS"] = 7;
            values[valuesById[8] = "REDACTION_DECISION_REDACTED_IS_OTP"] = 8;
            values[valuesById[9] = "REDACTION_DECISION_UNREDACTED_EMPTY_OTP_FIELD"] = 9;
            return values;
        })();

        /**
         * The type of data that can be autofilled into a form.
         * @name optimization_guide.proto.CoarseAutofillFieldType
         * @enum {number}
         * @property {number} COARSE_AUTOFILL_FIELD_TYPE_UNSUPPORTED=0 COARSE_AUTOFILL_FIELD_TYPE_UNSUPPORTED value
         * @property {number} COARSE_AUTOFILL_FIELD_TYPE_ADDRESS=1 COARSE_AUTOFILL_FIELD_TYPE_ADDRESS value
         * @property {number} COARSE_AUTOFILL_FIELD_TYPE_CREDIT_CARD=2 COARSE_AUTOFILL_FIELD_TYPE_CREDIT_CARD value
         * @property {number} COARSE_AUTOFILL_FIELD_TYPE_OTP=3 COARSE_AUTOFILL_FIELD_TYPE_OTP value
         */
        proto.CoarseAutofillFieldType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "COARSE_AUTOFILL_FIELD_TYPE_UNSUPPORTED"] = 0;
            values[valuesById[1] = "COARSE_AUTOFILL_FIELD_TYPE_ADDRESS"] = 1;
            values[valuesById[2] = "COARSE_AUTOFILL_FIELD_TYPE_CREDIT_CARD"] = 2;
            values[valuesById[3] = "COARSE_AUTOFILL_FIELD_TYPE_OTP"] = 3;
            return values;
        })();

        /**
         * Indicates the type of media in the media data.
         * Next ID: 3
         * @name optimization_guide.proto.MediaDataType
         * @enum {number}
         * @property {number} MEDIA_DATA_TYPE_UNKNOWN=0 MEDIA_DATA_TYPE_UNKNOWN value
         * @property {number} MEDIA_DATA_TYPE_VIDEO=1 MEDIA_DATA_TYPE_VIDEO value
         * @property {number} MEDIA_DATA_TYPE_AUDIO=2 MEDIA_DATA_TYPE_AUDIO value
         */
        proto.MediaDataType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "MEDIA_DATA_TYPE_UNKNOWN"] = 0;
            values[valuesById[1] = "MEDIA_DATA_TYPE_VIDEO"] = 1;
            values[valuesById[2] = "MEDIA_DATA_TYPE_AUDIO"] = 2;
            return values;
        })();

        /**
         * TableRowType enum.
         * @name optimization_guide.proto.TableRowType
         * @enum {number}
         * @property {number} TABLE_ROW_TYPE_UNKNOWN=0 TABLE_ROW_TYPE_UNKNOWN value
         * @property {number} TABLE_ROW_TYPE_HEADER=1 TABLE_ROW_TYPE_HEADER value
         * @property {number} TABLE_ROW_TYPE_BODY=2 TABLE_ROW_TYPE_BODY value
         * @property {number} TABLE_ROW_TYPE_FOOTER=3 TABLE_ROW_TYPE_FOOTER value
         */
        proto.TableRowType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TABLE_ROW_TYPE_UNKNOWN"] = 0;
            values[valuesById[1] = "TABLE_ROW_TYPE_HEADER"] = 1;
            values[valuesById[2] = "TABLE_ROW_TYPE_BODY"] = 2;
            values[valuesById[3] = "TABLE_ROW_TYPE_FOOTER"] = 3;
            return values;
        })();

        /**
         * Indicates the semantic role of the content. These can come from the aria
         * role, the html tag, or are assumed from some properties of the page.
         * When adding new roles, please also update AIPageContentAnnotatedRole in
         * third_party/blink/public/mojom/content_extraction/ai_page_content.mojom.
         * Next ID: 15
         * @name optimization_guide.proto.AnnotatedRole
         * @enum {number}
         * @property {number} ANNOTATED_ROLE_UNKNOWN=0 ANNOTATED_ROLE_UNKNOWN value
         * @property {number} ANNOTATED_ROLE_HEADER=5 Landmark/section chunks.
         * @property {number} ANNOTATED_ROLE_NAV=6 ANNOTATED_ROLE_NAV value
         * @property {number} ANNOTATED_ROLE_SEARCH=7 ANNOTATED_ROLE_SEARCH value
         * @property {number} ANNOTATED_ROLE_MAIN=8 ANNOTATED_ROLE_MAIN value
         * @property {number} ANNOTATED_ROLE_ARTICLE=9 ANNOTATED_ROLE_ARTICLE value
         * @property {number} ANNOTATED_ROLE_SECTION=10 ANNOTATED_ROLE_SECTION value
         * @property {number} ANNOTATED_ROLE_ASIDE=11 ANNOTATED_ROLE_ASIDE value
         * @property {number} ANNOTATED_ROLE_FOOTER=12 ANNOTATED_ROLE_FOOTER value
         * @property {number} ANNOTATED_ROLE_CONTENT_HIDDEN=13 Indicates that the subtree for this ContentNode is hidden from the user but
         * accessible via features like find-in-page. See `hidden=until-found` in
         * https://developer.mozilla.org/en-US/docs/Wecrbug.com/HTML/Global_attributes/hidden
         * for details.
         * 
         * Note: This is different from Geometry.visible_bounding_box being empty
         * which indicates whether the content is offscreen. The visible_bounding_box
         * for nodes in a hidden subtree may be non-empty, depending on whether the
         * content would be in the viewport if the user searched for it.
         * @property {number} ANNOTATED_ROLE_PAID_CONTENT=14 Indicates that the subtree for this ContentNode contains content marked as
         * isAccessibleForFree=false by a schema.org CreativeWork declaration, as
         * described at
         * https://developers.google.com/search/docs/appearance/structured-data/paywalled-content.
         */
        proto.AnnotatedRole = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ANNOTATED_ROLE_UNKNOWN"] = 0;
            values[valuesById[5] = "ANNOTATED_ROLE_HEADER"] = 5;
            values[valuesById[6] = "ANNOTATED_ROLE_NAV"] = 6;
            values[valuesById[7] = "ANNOTATED_ROLE_SEARCH"] = 7;
            values[valuesById[8] = "ANNOTATED_ROLE_MAIN"] = 8;
            values[valuesById[9] = "ANNOTATED_ROLE_ARTICLE"] = 9;
            values[valuesById[10] = "ANNOTATED_ROLE_SECTION"] = 10;
            values[valuesById[11] = "ANNOTATED_ROLE_ASIDE"] = 11;
            values[valuesById[12] = "ANNOTATED_ROLE_FOOTER"] = 12;
            values[valuesById[13] = "ANNOTATED_ROLE_CONTENT_HIDDEN"] = 13;
            values[valuesById[14] = "ANNOTATED_ROLE_PAID_CONTENT"] = 14;
            return values;
        })();

        /**
         * Whether or not status of the model's output is a success (i.e "is good") or
         * is a failure (i.e "is bad").
         * Next ID: 3
         * @name optimization_guide.proto.FinalModelStatus
         * @enum {number}
         * @property {number} FINAL_MODEL_STATUS_UNSPECIFIED=0 FINAL_MODEL_STATUS_UNSPECIFIED value
         * @property {number} FINAL_MODEL_STATUS_SUCCESS=1 FINAL_MODEL_STATUS_SUCCESS value
         * @property {number} FINAL_MODEL_STATUS_FAILURE=2 FINAL_MODEL_STATUS_FAILURE value
         */
        proto.FinalModelStatus = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "FINAL_MODEL_STATUS_UNSPECIFIED"] = 0;
            values[valuesById[1] = "FINAL_MODEL_STATUS_SUCCESS"] = 1;
            values[valuesById[2] = "FINAL_MODEL_STATUS_FAILURE"] = 2;
            return values;
        })();

        /**
         * Next ID: 3
         * @name optimization_guide.proto.UserFeedback
         * @enum {number}
         * @property {number} USER_FEEDBACK_UNSPECIFIED=0 USER_FEEDBACK_UNSPECIFIED value
         * @property {number} USER_FEEDBACK_THUMBS_DOWN=1 USER_FEEDBACK_THUMBS_DOWN value
         * @property {number} USER_FEEDBACK_THUMBS_UP=2 USER_FEEDBACK_THUMBS_UP value
         */
        proto.UserFeedback = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "USER_FEEDBACK_UNSPECIFIED"] = 0;
            values[valuesById[1] = "USER_FEEDBACK_THUMBS_DOWN"] = 1;
            values[valuesById[2] = "USER_FEEDBACK_THUMBS_UP"] = 2;
            return values;
        })();

        /**
         * The platform for the user's Chrome on which the request was made. Roughly
         * matches the same platforms that are available via UMA.
         * @name optimization_guide.proto.ChromePlatform
         * @enum {number}
         * @property {number} CHROME_PLATFORM_UNKNOWN=0 Unknown is used when the user's platform cannot be resolved.
         * @property {number} CHROME_PLATFORM_ANDROID=1 Android based platforms.
         * @property {number} CHROME_PLATFORM_CHROMEOS=2 ChromeOS platforms including all architectures.
         * @property {number} CHROME_PLATFORM_IOS=3 IOS based platforms.
         * @property {number} CHROME_PLATFORM_LINUX=4 Linux platforms including all architectures.
         * @property {number} CHROME_PLATFORM_MAC=5 Mac based platforms.
         * @property {number} CHROME_PLATFORM_WINDOWS=6 Windows based platforms.
         */
        proto.ChromePlatform = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CHROME_PLATFORM_UNKNOWN"] = 0;
            values[valuesById[1] = "CHROME_PLATFORM_ANDROID"] = 1;
            values[valuesById[2] = "CHROME_PLATFORM_CHROMEOS"] = 2;
            values[valuesById[3] = "CHROME_PLATFORM_IOS"] = 3;
            values[valuesById[4] = "CHROME_PLATFORM_LINUX"] = 4;
            values[valuesById[5] = "CHROME_PLATFORM_MAC"] = 5;
            values[valuesById[6] = "CHROME_PLATFORM_WINDOWS"] = 6;
            return values;
        })();

        return proto;
    })();

    return optimization_guide;
})();

export { $root as default };
