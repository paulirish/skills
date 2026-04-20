import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace optimization_guide. */
export namespace optimization_guide {

    /** Namespace proto. */
    namespace proto {

        /** Properties of a FloatArray. */
        interface IFloatArray {

            /** FloatArray values */
            values?: (number[]|null);
        }

        /** Next ID: 2 */
        class FloatArray implements IFloatArray {

            /**
             * Constructs a new FloatArray.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IFloatArray);

            /** FloatArray values. */
            public values: number[];

            /**
             * Creates a new FloatArray instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatArray instance
             */
            public static create(properties?: optimization_guide.proto.IFloatArray): optimization_guide.proto.FloatArray;

            /**
             * Encodes the specified FloatArray message. Does not implicitly {@link optimization_guide.proto.FloatArray.verify|verify} messages.
             * @param message FloatArray message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IFloatArray, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatArray message, length delimited. Does not implicitly {@link optimization_guide.proto.FloatArray.verify|verify} messages.
             * @param message FloatArray message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IFloatArray, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatArray message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatArray
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.FloatArray;

            /**
             * Decodes a FloatArray message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatArray
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.FloatArray;

            /**
             * Verifies a FloatArray message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatArray message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatArray
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.FloatArray;

            /**
             * Creates a plain object from a FloatArray message. Also converts values to other types if specified.
             * @param message FloatArray
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.FloatArray, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatArray to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FloatArray
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Embedding. */
        interface IEmbedding {

            /**
             * The embedding vector. Note that future versions of this proto might not
             * have this field set, as a new field may be added for quantized embeddings.
             */
            floats?: (optimization_guide.proto.IFloatArray|null);
        }

        /** Next ID: 2 */
        class Embedding implements IEmbedding {

            /**
             * Constructs a new Embedding.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IEmbedding);

            /**
             * The embedding vector. Note that future versions of this proto might not
             * have this field set, as a new field may be added for quantized embeddings.
             */
            public floats?: (optimization_guide.proto.IFloatArray|null);

            /**
             * Creates a new Embedding instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Embedding instance
             */
            public static create(properties?: optimization_guide.proto.IEmbedding): optimization_guide.proto.Embedding;

            /**
             * Encodes the specified Embedding message. Does not implicitly {@link optimization_guide.proto.Embedding.verify|verify} messages.
             * @param message Embedding message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IEmbedding, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Embedding message, length delimited. Does not implicitly {@link optimization_guide.proto.Embedding.verify|verify} messages.
             * @param message Embedding message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IEmbedding, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Embedding message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Embedding
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.Embedding;

            /**
             * Decodes an Embedding message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Embedding
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.Embedding;

            /**
             * Verifies an Embedding message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Embedding message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Embedding
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.Embedding;

            /**
             * Creates a plain object from an Embedding message. Also converts values to other types if specified.
             * @param message Embedding
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.Embedding, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Embedding to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Embedding
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a AXTreeUpdate. */
        interface IAXTreeUpdate {

            /** AXTreeUpdate treeData */
            treeData?: (optimization_guide.proto.IAXTreeData|null);

            /** AXTreeUpdate rootId */
            rootId?: (number|null);

            /** AXTreeUpdate nodes */
            nodes?: (optimization_guide.proto.IAXNodeData[]|null);
        }

        /**
         * Accessibility tree snapshot
         * See
         * https://source.chromium.org/chromium/chromium/src/+/main:ui/accessibility/ax_tree_update.h
         * for details of this and related messages.
         *
         * Next ID: 4
         */
        class AXTreeUpdate implements IAXTreeUpdate {

            /**
             * Constructs a new AXTreeUpdate.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IAXTreeUpdate);

            /** AXTreeUpdate treeData. */
            public treeData?: (optimization_guide.proto.IAXTreeData|null);

            /** AXTreeUpdate rootId. */
            public rootId?: (number|null);

            /** AXTreeUpdate nodes. */
            public nodes: optimization_guide.proto.IAXNodeData[];

            /**
             * Creates a new AXTreeUpdate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AXTreeUpdate instance
             */
            public static create(properties?: optimization_guide.proto.IAXTreeUpdate): optimization_guide.proto.AXTreeUpdate;

            /**
             * Encodes the specified AXTreeUpdate message. Does not implicitly {@link optimization_guide.proto.AXTreeUpdate.verify|verify} messages.
             * @param message AXTreeUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IAXTreeUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AXTreeUpdate message, length delimited. Does not implicitly {@link optimization_guide.proto.AXTreeUpdate.verify|verify} messages.
             * @param message AXTreeUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IAXTreeUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AXTreeUpdate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AXTreeUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.AXTreeUpdate;

            /**
             * Decodes a AXTreeUpdate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AXTreeUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.AXTreeUpdate;

            /**
             * Verifies a AXTreeUpdate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AXTreeUpdate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AXTreeUpdate
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.AXTreeUpdate;

            /**
             * Creates a plain object from a AXTreeUpdate message. Also converts values to other types if specified.
             * @param message AXTreeUpdate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.AXTreeUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AXTreeUpdate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AXTreeUpdate
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a AXTreeData. */
        interface IAXTreeData {

            /** AXTreeData doctype */
            doctype?: (string|null);

            /** AXTreeData loaded */
            loaded?: (boolean|null);

            /** AXTreeData loadingProgress */
            loadingProgress?: (number|null);

            /** AXTreeData mimetype */
            mimetype?: (string|null);

            /** AXTreeData title */
            title?: (string|null);

            /** AXTreeData focusId */
            focusId?: (number|null);

            /** AXTreeData selIsBackward */
            selIsBackward?: (boolean|null);

            /** AXTreeData selAnchorObjectId */
            selAnchorObjectId?: (number|null);

            /** AXTreeData selAnchorOffset */
            selAnchorOffset?: (number|null);

            /** AXTreeData selAnchorAffinity */
            selAnchorAffinity?: (optimization_guide.proto.AXTextAffinity|null);

            /** AXTreeData selFocusObjectId */
            selFocusObjectId?: (number|null);

            /** AXTreeData selFocusOffset */
            selFocusOffset?: (number|null);

            /** AXTreeData selFocusAffinity */
            selFocusAffinity?: (optimization_guide.proto.AXTextAffinity|null);

            /** AXTreeData rootScrollerId */
            rootScrollerId?: (number|null);

            /** AXTreeData metadata */
            metadata?: (string[]|null);
        }

        /**
         * AX tree metadata, part of the a11y snapshot.
         * Next ID: 16
         */
        class AXTreeData implements IAXTreeData {

            /**
             * Constructs a new AXTreeData.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IAXTreeData);

            /** AXTreeData doctype. */
            public doctype?: (string|null);

            /** AXTreeData loaded. */
            public loaded?: (boolean|null);

            /** AXTreeData loadingProgress. */
            public loadingProgress?: (number|null);

            /** AXTreeData mimetype. */
            public mimetype?: (string|null);

            /** AXTreeData title. */
            public title?: (string|null);

            /** AXTreeData focusId. */
            public focusId?: (number|null);

            /** AXTreeData selIsBackward. */
            public selIsBackward?: (boolean|null);

            /** AXTreeData selAnchorObjectId. */
            public selAnchorObjectId?: (number|null);

            /** AXTreeData selAnchorOffset. */
            public selAnchorOffset?: (number|null);

            /** AXTreeData selAnchorAffinity. */
            public selAnchorAffinity?: (optimization_guide.proto.AXTextAffinity|null);

            /** AXTreeData selFocusObjectId. */
            public selFocusObjectId?: (number|null);

            /** AXTreeData selFocusOffset. */
            public selFocusOffset?: (number|null);

            /** AXTreeData selFocusAffinity. */
            public selFocusAffinity?: (optimization_guide.proto.AXTextAffinity|null);

            /** AXTreeData rootScrollerId. */
            public rootScrollerId?: (number|null);

            /** AXTreeData metadata. */
            public metadata: string[];

            /**
             * Creates a new AXTreeData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AXTreeData instance
             */
            public static create(properties?: optimization_guide.proto.IAXTreeData): optimization_guide.proto.AXTreeData;

            /**
             * Encodes the specified AXTreeData message. Does not implicitly {@link optimization_guide.proto.AXTreeData.verify|verify} messages.
             * @param message AXTreeData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IAXTreeData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AXTreeData message, length delimited. Does not implicitly {@link optimization_guide.proto.AXTreeData.verify|verify} messages.
             * @param message AXTreeData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IAXTreeData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AXTreeData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AXTreeData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.AXTreeData;

            /**
             * Decodes a AXTreeData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AXTreeData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.AXTreeData;

            /**
             * Verifies a AXTreeData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AXTreeData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AXTreeData
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.AXTreeData;

            /**
             * Creates a plain object from a AXTreeData message. Also converts values to other types if specified.
             * @param message AXTreeData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.AXTreeData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AXTreeData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AXTreeData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a AXNodeData. */
        interface IAXNodeData {

            /** AXNodeData id */
            id?: (number|null);

            /** AXNodeData role */
            role?: (optimization_guide.proto.AXRole|null);

            /** AXNodeData state */
            state?: (number|null);

            /** AXNodeData actions */
            actions?: (number|null);

            /** AXNodeData attributes */
            attributes?: (optimization_guide.proto.IAXAttribute[]|null);

            /** AXNodeData childIds */
            childIds?: (number[]|null);

            /** AXNodeData relativeBounds */
            relativeBounds?: (optimization_guide.proto.IAXRelativeBounds|null);
        }

        /**
         * Per node accessibility data, part of the a11y snapshot.
         * Next ID: 8
         */
        class AXNodeData implements IAXNodeData {

            /**
             * Constructs a new AXNodeData.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IAXNodeData);

            /** AXNodeData id. */
            public id?: (number|null);

            /** AXNodeData role. */
            public role?: (optimization_guide.proto.AXRole|null);

            /** AXNodeData state. */
            public state?: (number|null);

            /** AXNodeData actions. */
            public actions?: (number|null);

            /** AXNodeData attributes. */
            public attributes: optimization_guide.proto.IAXAttribute[];

            /** AXNodeData childIds. */
            public childIds: number[];

            /** AXNodeData relativeBounds. */
            public relativeBounds?: (optimization_guide.proto.IAXRelativeBounds|null);

            /**
             * Creates a new AXNodeData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AXNodeData instance
             */
            public static create(properties?: optimization_guide.proto.IAXNodeData): optimization_guide.proto.AXNodeData;

            /**
             * Encodes the specified AXNodeData message. Does not implicitly {@link optimization_guide.proto.AXNodeData.verify|verify} messages.
             * @param message AXNodeData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IAXNodeData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AXNodeData message, length delimited. Does not implicitly {@link optimization_guide.proto.AXNodeData.verify|verify} messages.
             * @param message AXNodeData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IAXNodeData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AXNodeData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AXNodeData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.AXNodeData;

            /**
             * Decodes a AXNodeData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AXNodeData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.AXNodeData;

            /**
             * Verifies a AXNodeData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AXNodeData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AXNodeData
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.AXNodeData;

            /**
             * Creates a plain object from a AXNodeData message. Also converts values to other types if specified.
             * @param message AXNodeData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.AXNodeData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AXNodeData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AXNodeData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a AXAttribute. */
        interface IAXAttribute {

            /** AXAttribute stringType */
            stringType?: (optimization_guide.proto.AXStringAttribute|null);

            /** AXAttribute intType */
            intType?: (optimization_guide.proto.AXIntAttribute|null);

            /** AXAttribute floatType */
            floatType?: (optimization_guide.proto.AXFloatAttribute|null);

            /** AXAttribute boolType */
            boolType?: (optimization_guide.proto.AXBoolAttribute|null);

            /** AXAttribute intlistType */
            intlistType?: (optimization_guide.proto.AXIntListAttribute|null);

            /** AXAttribute stringlistType */
            stringlistType?: (optimization_guide.proto.AXStringListAttribute|null);

            /** AXAttribute htmlAttributeName */
            htmlAttributeName?: (string|null);

            /** AXAttribute stringValue */
            stringValue?: (string|null);

            /** AXAttribute intValue */
            intValue?: (number|null);

            /** AXAttribute floatValue */
            floatValue?: (number|null);

            /** AXAttribute boolValue */
            boolValue?: (boolean|null);

            /** AXAttribute intListValue */
            intListValue?: (optimization_guide.proto.IAXIntList|null);

            /** AXAttribute stringListValue */
            stringListValue?: (optimization_guide.proto.IAXStringList|null);

            /** AXAttribute htmlAttributeValue */
            htmlAttributeValue?: (string|null);
        }

        /**
         * AX node attribute, part of the a11y snapshot.
         * Next ID: 15
         */
        class AXAttribute implements IAXAttribute {

            /**
             * Constructs a new AXAttribute.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IAXAttribute);

            /** AXAttribute stringType. */
            public stringType?: (optimization_guide.proto.AXStringAttribute|null);

            /** AXAttribute intType. */
            public intType?: (optimization_guide.proto.AXIntAttribute|null);

            /** AXAttribute floatType. */
            public floatType?: (optimization_guide.proto.AXFloatAttribute|null);

            /** AXAttribute boolType. */
            public boolType?: (optimization_guide.proto.AXBoolAttribute|null);

            /** AXAttribute intlistType. */
            public intlistType?: (optimization_guide.proto.AXIntListAttribute|null);

            /** AXAttribute stringlistType. */
            public stringlistType?: (optimization_guide.proto.AXStringListAttribute|null);

            /** AXAttribute htmlAttributeName. */
            public htmlAttributeName?: (string|null);

            /** AXAttribute stringValue. */
            public stringValue?: (string|null);

            /** AXAttribute intValue. */
            public intValue?: (number|null);

            /** AXAttribute floatValue. */
            public floatValue?: (number|null);

            /** AXAttribute boolValue. */
            public boolValue?: (boolean|null);

            /** AXAttribute intListValue. */
            public intListValue?: (optimization_guide.proto.IAXIntList|null);

            /** AXAttribute stringListValue. */
            public stringListValue?: (optimization_guide.proto.IAXStringList|null);

            /** AXAttribute htmlAttributeValue. */
            public htmlAttributeValue?: (string|null);

            /** AXAttribute attributeKey. */
            public attributeKey?: ("stringType"|"intType"|"floatType"|"boolType"|"intlistType"|"stringlistType"|"htmlAttributeName");

            /** AXAttribute attributeValue. */
            public attributeValue?: ("stringValue"|"intValue"|"floatValue"|"boolValue"|"intListValue"|"stringListValue"|"htmlAttributeValue");

            /**
             * Creates a new AXAttribute instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AXAttribute instance
             */
            public static create(properties?: optimization_guide.proto.IAXAttribute): optimization_guide.proto.AXAttribute;

            /**
             * Encodes the specified AXAttribute message. Does not implicitly {@link optimization_guide.proto.AXAttribute.verify|verify} messages.
             * @param message AXAttribute message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IAXAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AXAttribute message, length delimited. Does not implicitly {@link optimization_guide.proto.AXAttribute.verify|verify} messages.
             * @param message AXAttribute message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IAXAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AXAttribute message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AXAttribute
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.AXAttribute;

            /**
             * Decodes a AXAttribute message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AXAttribute
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.AXAttribute;

            /**
             * Verifies a AXAttribute message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AXAttribute message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AXAttribute
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.AXAttribute;

            /**
             * Creates a plain object from a AXAttribute message. Also converts values to other types if specified.
             * @param message AXAttribute
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.AXAttribute, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AXAttribute to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AXAttribute
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a AXIntList. */
        interface IAXIntList {

            /** AXIntList value */
            value?: (number[]|null);
        }

        /** Helper message for AX IntList. */
        class AXIntList implements IAXIntList {

            /**
             * Constructs a new AXIntList.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IAXIntList);

            /** AXIntList value. */
            public value: number[];

            /**
             * Creates a new AXIntList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AXIntList instance
             */
            public static create(properties?: optimization_guide.proto.IAXIntList): optimization_guide.proto.AXIntList;

            /**
             * Encodes the specified AXIntList message. Does not implicitly {@link optimization_guide.proto.AXIntList.verify|verify} messages.
             * @param message AXIntList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IAXIntList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AXIntList message, length delimited. Does not implicitly {@link optimization_guide.proto.AXIntList.verify|verify} messages.
             * @param message AXIntList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IAXIntList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AXIntList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AXIntList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.AXIntList;

            /**
             * Decodes a AXIntList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AXIntList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.AXIntList;

            /**
             * Verifies a AXIntList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AXIntList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AXIntList
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.AXIntList;

            /**
             * Creates a plain object from a AXIntList message. Also converts values to other types if specified.
             * @param message AXIntList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.AXIntList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AXIntList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AXIntList
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a AXStringList. */
        interface IAXStringList {

            /** AXStringList value */
            value?: (string[]|null);
        }

        /** Helper message for AX StringList. */
        class AXStringList implements IAXStringList {

            /**
             * Constructs a new AXStringList.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IAXStringList);

            /** AXStringList value. */
            public value: string[];

            /**
             * Creates a new AXStringList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AXStringList instance
             */
            public static create(properties?: optimization_guide.proto.IAXStringList): optimization_guide.proto.AXStringList;

            /**
             * Encodes the specified AXStringList message. Does not implicitly {@link optimization_guide.proto.AXStringList.verify|verify} messages.
             * @param message AXStringList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IAXStringList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AXStringList message, length delimited. Does not implicitly {@link optimization_guide.proto.AXStringList.verify|verify} messages.
             * @param message AXStringList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IAXStringList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AXStringList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AXStringList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.AXStringList;

            /**
             * Decodes a AXStringList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AXStringList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.AXStringList;

            /**
             * Verifies a AXStringList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AXStringList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AXStringList
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.AXStringList;

            /**
             * Creates a plain object from a AXStringList message. Also converts values to other types if specified.
             * @param message AXStringList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.AXStringList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AXStringList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AXStringList
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a AXRelativeBounds. */
        interface IAXRelativeBounds {

            /** AXRelativeBounds offsetContainerId */
            offsetContainerId?: (number|null);

            /** AXRelativeBounds x */
            x?: (number|null);

            /** AXRelativeBounds y */
            y?: (number|null);

            /** AXRelativeBounds width */
            width?: (number|null);

            /** AXRelativeBounds height */
            height?: (number|null);

            /** If present, represents the transform as 16 floats. */
            transform?: (number[]|null);
        }

        /**
         * AX Relative bounds.
         * Next ID: 7
         */
        class AXRelativeBounds implements IAXRelativeBounds {

            /**
             * Constructs a new AXRelativeBounds.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IAXRelativeBounds);

            /** AXRelativeBounds offsetContainerId. */
            public offsetContainerId?: (number|null);

            /** AXRelativeBounds x. */
            public x?: (number|null);

            /** AXRelativeBounds y. */
            public y?: (number|null);

            /** AXRelativeBounds width. */
            public width?: (number|null);

            /** AXRelativeBounds height. */
            public height?: (number|null);

            /** If present, represents the transform as 16 floats. */
            public transform: number[];

            /**
             * Creates a new AXRelativeBounds instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AXRelativeBounds instance
             */
            public static create(properties?: optimization_guide.proto.IAXRelativeBounds): optimization_guide.proto.AXRelativeBounds;

            /**
             * Encodes the specified AXRelativeBounds message. Does not implicitly {@link optimization_guide.proto.AXRelativeBounds.verify|verify} messages.
             * @param message AXRelativeBounds message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IAXRelativeBounds, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AXRelativeBounds message, length delimited. Does not implicitly {@link optimization_guide.proto.AXRelativeBounds.verify|verify} messages.
             * @param message AXRelativeBounds message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IAXRelativeBounds, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AXRelativeBounds message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AXRelativeBounds
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.AXRelativeBounds;

            /**
             * Decodes a AXRelativeBounds message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AXRelativeBounds
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.AXRelativeBounds;

            /**
             * Verifies a AXRelativeBounds message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AXRelativeBounds message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AXRelativeBounds
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.AXRelativeBounds;

            /**
             * Creates a plain object from a AXRelativeBounds message. Also converts values to other types if specified.
             * @param message AXRelativeBounds
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.AXRelativeBounds, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AXRelativeBounds to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AXRelativeBounds
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PageContext. */
        interface IPageContext {

            /** The URL of the page that the form is on. */
            url?: (string|null);

            /** The title of the page that the form is on. */
            title?: (string|null);

            /** The AX tree representation of the page. */
            axTreeData?: (optimization_guide.proto.IAXTreeUpdate|null);

            /**
             * The inner text of the page the model is acting on (excluding x-origin
             * frames).
             */
            innerText?: (string|null);

            /** The offset of the focused element into the |inner_text|. */
            innerTextOffset?: (number|null);

            /**
             * The text passages of the page. Those passages are the result of the
             * HtmlChunker algorithm implemented in Chrome (used by the History Search
             * feature). See
             * https://github.com/google/labs-prototypes/tree/main/seeds/chunker-python
             */
            pagePassages?: (string[]|null);

            /** A base64 encoded PNG of the tab screenshot. */
            tabScreenshot?: (string|null);

            /** The base64 encoded PDF representation of the page. */
            pdfData?: (string|null);

            /**
             * The page content represented as a tree of semantic chunks and (in the
             * future) annotated with additional information about the page.
             */
            annotatedPageContent?: (optimization_guide.proto.IAnnotatedPageContent|null);
        }

        /** Next ID: 11 */
        class PageContext implements IPageContext {

            /**
             * Constructs a new PageContext.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IPageContext);

            /** The URL of the page that the form is on. */
            public url?: (string|null);

            /** The title of the page that the form is on. */
            public title?: (string|null);

            /** The AX tree representation of the page. */
            public axTreeData?: (optimization_guide.proto.IAXTreeUpdate|null);

            /**
             * The inner text of the page the model is acting on (excluding x-origin
             * frames).
             */
            public innerText?: (string|null);

            /** The offset of the focused element into the |inner_text|. */
            public innerTextOffset?: (number|null);

            /**
             * The text passages of the page. Those passages are the result of the
             * HtmlChunker algorithm implemented in Chrome (used by the History Search
             * feature). See
             * https://github.com/google/labs-prototypes/tree/main/seeds/chunker-python
             */
            public pagePassages: string[];

            /** A base64 encoded PNG of the tab screenshot. */
            public tabScreenshot?: (string|null);

            /** The base64 encoded PDF representation of the page. */
            public pdfData?: (string|null);

            /**
             * The page content represented as a tree of semantic chunks and (in the
             * future) annotated with additional information about the page.
             */
            public annotatedPageContent?: (optimization_guide.proto.IAnnotatedPageContent|null);

            /**
             * Creates a new PageContext instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PageContext instance
             */
            public static create(properties?: optimization_guide.proto.IPageContext): optimization_guide.proto.PageContext;

            /**
             * Encodes the specified PageContext message. Does not implicitly {@link optimization_guide.proto.PageContext.verify|verify} messages.
             * @param message PageContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IPageContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PageContext message, length delimited. Does not implicitly {@link optimization_guide.proto.PageContext.verify|verify} messages.
             * @param message PageContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IPageContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PageContext message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PageContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.PageContext;

            /**
             * Decodes a PageContext message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PageContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.PageContext;

            /**
             * Verifies a PageContext message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PageContext message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PageContext
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.PageContext;

            /**
             * Creates a plain object from a PageContext message. Also converts values to other types if specified.
             * @param message PageContext
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.PageContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PageContext to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PageContext
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AnnotatedPageContent. */
        interface IAnnotatedPageContent {

            /**
             * The version of the proto. Each time a backwards incompatible change is made
             * to the proto, the version should be incremented.
             */
            version?: (optimization_guide.proto.AnnotatedPageContentVersion|null);

            /**
             * The mode used to extract this proto. The data in the proto depends on the
             * mode. See comments to understand which data is available for each mode.
             */
            mode?: (optimization_guide.proto.AnnotatedPageContentMode|null);

            /** The root node of the ContentNode tree. */
            rootNode?: (optimization_guide.proto.IContentNode|null);

            /** The data for the main frame of the page. */
            mainFrameData?: (optimization_guide.proto.IFrameData|null);

            /**
             * The interaction information for the page--the subtree represented by the
             * AnnotatedPageContent. This is for top-level interactions, such as the mouse
             * position and focused element, for which there can only be one unique value
             * for the entire page.
             * Currently this is only tracked for the main frame.
             */
            pageInteractionInfo?: (optimization_guide.proto.IPageInteractionInfo|null);

            /**
             * The rect of the viewport for the tab. i.e., screenshot dimensions.
             * Dimensions are in captured pixels.
             * This coordinate system should be used for coordinate based browser actions.
             * This uses device independent pixels, i.e., doesn't include the device
             * scale factor while other dimensions in APC are based on that.
             */
            viewportGeometry?: (optimization_guide.proto.IBoundingRect|null);

            /**
             * The id of the tab that the page content was extracted from. Guaranteed to
             * be unique within the browsing session.
             */
            tabId?: (number|null);

            /**
             * Provides APC for internal popup widgets created by elements like <select>
             * and <input type="color"> . Does not provide APC for separate windows opened
             * via window.open() or similar. A page can only have one popup window open at
             * a time. If one is open, its details are populated here. The popup window
             * draws on top of the tab and as such has a higher z order than the main
             * frame's Document.
             */
            popupWindow?: (optimization_guide.proto.IPopupWindow|null);

            /**
             * Information that pertains to the user's profile, not the page.
             * TODO(crbug.com/454610456): This should be moved out of AnnotatedPageContent because
             * it does not semantically belong here.
             */
            profileInformation?: (optimization_guide.proto.IProfileInformation|null);

            /**
             * Metadata about the page when Gemini in Chrome captures Annotated Page
             * Content.
             * TODO(crbug.com/484011242): This should be moved out of AnnotatedPageContent because
             * it does not semantically belong here.
             */
            geminiInChromePageMetadata?: (optimization_guide.proto.IGeminiInChromePageMetadata|null);
        }

        /**
         * The page content represented as a tree of semantic chunks and (in the
         * future) annotated with additional information about the page.
         * Next ID: 11
         */
        class AnnotatedPageContent implements IAnnotatedPageContent {

            /**
             * Constructs a new AnnotatedPageContent.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IAnnotatedPageContent);

            /**
             * The version of the proto. Each time a backwards incompatible change is made
             * to the proto, the version should be incremented.
             */
            public version?: (optimization_guide.proto.AnnotatedPageContentVersion|null);

            /**
             * The mode used to extract this proto. The data in the proto depends on the
             * mode. See comments to understand which data is available for each mode.
             */
            public mode?: (optimization_guide.proto.AnnotatedPageContentMode|null);

            /** The root node of the ContentNode tree. */
            public rootNode?: (optimization_guide.proto.IContentNode|null);

            /** The data for the main frame of the page. */
            public mainFrameData?: (optimization_guide.proto.IFrameData|null);

            /**
             * The interaction information for the page--the subtree represented by the
             * AnnotatedPageContent. This is for top-level interactions, such as the mouse
             * position and focused element, for which there can only be one unique value
             * for the entire page.
             * Currently this is only tracked for the main frame.
             */
            public pageInteractionInfo?: (optimization_guide.proto.IPageInteractionInfo|null);

            /**
             * The rect of the viewport for the tab. i.e., screenshot dimensions.
             * Dimensions are in captured pixels.
             * This coordinate system should be used for coordinate based browser actions.
             * This uses device independent pixels, i.e., doesn't include the device
             * scale factor while other dimensions in APC are based on that.
             */
            public viewportGeometry?: (optimization_guide.proto.IBoundingRect|null);

            /**
             * The id of the tab that the page content was extracted from. Guaranteed to
             * be unique within the browsing session.
             */
            public tabId?: (number|null);

            /**
             * Provides APC for internal popup widgets created by elements like <select>
             * and <input type="color"> . Does not provide APC for separate windows opened
             * via window.open() or similar. A page can only have one popup window open at
             * a time. If one is open, its details are populated here. The popup window
             * draws on top of the tab and as such has a higher z order than the main
             * frame's Document.
             */
            public popupWindow?: (optimization_guide.proto.IPopupWindow|null);

            /**
             * Information that pertains to the user's profile, not the page.
             * TODO(crbug.com/454610456): This should be moved out of AnnotatedPageContent because
             * it does not semantically belong here.
             */
            public profileInformation?: (optimization_guide.proto.IProfileInformation|null);

            /**
             * Metadata about the page when Gemini in Chrome captures Annotated Page
             * Content.
             * TODO(crbug.com/484011242): This should be moved out of AnnotatedPageContent because
             * it does not semantically belong here.
             */
            public geminiInChromePageMetadata?: (optimization_guide.proto.IGeminiInChromePageMetadata|null);

            /**
             * Creates a new AnnotatedPageContent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AnnotatedPageContent instance
             */
            public static create(properties?: optimization_guide.proto.IAnnotatedPageContent): optimization_guide.proto.AnnotatedPageContent;

            /**
             * Encodes the specified AnnotatedPageContent message. Does not implicitly {@link optimization_guide.proto.AnnotatedPageContent.verify|verify} messages.
             * @param message AnnotatedPageContent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IAnnotatedPageContent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AnnotatedPageContent message, length delimited. Does not implicitly {@link optimization_guide.proto.AnnotatedPageContent.verify|verify} messages.
             * @param message AnnotatedPageContent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IAnnotatedPageContent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AnnotatedPageContent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AnnotatedPageContent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.AnnotatedPageContent;

            /**
             * Decodes an AnnotatedPageContent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AnnotatedPageContent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.AnnotatedPageContent;

            /**
             * Verifies an AnnotatedPageContent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AnnotatedPageContent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AnnotatedPageContent
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.AnnotatedPageContent;

            /**
             * Creates a plain object from an AnnotatedPageContent message. Also converts values to other types if specified.
             * @param message AnnotatedPageContent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.AnnotatedPageContent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AnnotatedPageContent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AnnotatedPageContent
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ContentNode. */
        interface IContentNode {

            /**
             * Note: CONTENT_ATTRIBUTE_TEXT and CONTENT_ATTRIBUTE_IMAGE are leaf nodes
             * which don't have any children nodes.
             */
            childrenNodes?: (optimization_guide.proto.IContentNode[]|null);

            /** ContentNode contentAttributes */
            contentAttributes?: (optimization_guide.proto.IContentAttributes|null);
        }

        /**
         * The ContentNode tree is a sparse representation of the DOM tree for a web
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
         */
        class ContentNode implements IContentNode {

            /**
             * Constructs a new ContentNode.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IContentNode);

            /**
             * Note: CONTENT_ATTRIBUTE_TEXT and CONTENT_ATTRIBUTE_IMAGE are leaf nodes
             * which don't have any children nodes.
             */
            public childrenNodes: optimization_guide.proto.IContentNode[];

            /** ContentNode contentAttributes. */
            public contentAttributes?: (optimization_guide.proto.IContentAttributes|null);

            /**
             * Creates a new ContentNode instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ContentNode instance
             */
            public static create(properties?: optimization_guide.proto.IContentNode): optimization_guide.proto.ContentNode;

            /**
             * Encodes the specified ContentNode message. Does not implicitly {@link optimization_guide.proto.ContentNode.verify|verify} messages.
             * @param message ContentNode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IContentNode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ContentNode message, length delimited. Does not implicitly {@link optimization_guide.proto.ContentNode.verify|verify} messages.
             * @param message ContentNode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IContentNode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ContentNode message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ContentNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.ContentNode;

            /**
             * Decodes a ContentNode message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ContentNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.ContentNode;

            /**
             * Verifies a ContentNode message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ContentNode message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ContentNode
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.ContentNode;

            /**
             * Creates a plain object from a ContentNode message. Also converts values to other types if specified.
             * @param message ContentNode
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.ContentNode, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ContentNode to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ContentNode
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ContentAttributes. */
        interface IContentAttributes {

            /** Only set if attribute_type is CONTENT_ATTRIBUTE_TEXT. */
            textData?: (optimization_guide.proto.ITextInfo|null);

            /** Only set if attribute_type is CONTENT_ATTRIBUTE_IMAGE. */
            imageData?: (optimization_guide.proto.IImageInfo|null);

            /** Only set if attribute_type is CONTENT_ATTRIBUTE_SVG_ROOT. */
            svgRootData?: (optimization_guide.proto.ISVGRootData|null);

            /** Only set if attribute_type is CONTENT_ATTRIBUTE_CANVAS. */
            canvasData?: (optimization_guide.proto.ICanvasData|null);

            /** Only set if attribute_type is CONTENT_ATTRIBUTE_VIDEO. */
            videoData?: (optimization_guide.proto.IVideoData|null);

            /** Only set if attribute_type is CONTENT_ATTRIBUTE_ANCHOR. */
            anchorData?: (optimization_guide.proto.IAnchorData|null);

            /** Only set if attribute_type is CONTENT_ATTRIBUTE_FORM. */
            formData?: (optimization_guide.proto.IFormInfo|null);

            /** Only set if attribute_type is CONTENT_ATTRIBUTE_FORM_CONTROL. */
            formControlData?: (optimization_guide.proto.IFormControlData|null);

            /** Only set if attribute_type is CONTENT_ATTRIBUTE_TABLE. */
            tableData?: (optimization_guide.proto.ITableData|null);

            /** Only set if attribute_type is CONTENT_ATTRIBUTE_IFRAME. */
            iframeData?: (optimization_guide.proto.IIframeData|null);

            /** Only set if attribute_type is CONTENT_ATTRIBUTE_TABLE_ROW. */
            tableRowData?: (optimization_guide.proto.ITableRowData|null);

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
             */
            commonAncestorDomNodeId?: (number|null);

            /** ContentAttributes attributeType */
            attributeType?: (optimization_guide.proto.ContentAttributeType|null);

            /**
             * This is the geometry of the common_ancestor_dom_node_id.
             *
             * In the default mode, this is only populated if this is the
             * `accessibility_focused_dom_node_id`.
             *
             * Populated for all nodes in
             * `ANNOTATED_PAGE_CONTENT_MODE_ACTIONABLE_ELEMENTS.`
             */
            geometry?: (optimization_guide.proto.IGeometry|null);

            /**
             * The interaction information for the content node.
             * Note: The information in InteractionInfo is configured based on the
             * AnnotatedPageContentMode. See comments on the message definition for
             * details.
             */
            interactionInfo?: (optimization_guide.proto.IInteractionInfo|null);

            /**
             * These can come from the aria role, the html tag, or are assumed from some
             * properties of the page.
             */
            annotatedRoles?: (optimization_guide.proto.AnnotatedRole[]|null);

            /**
             * A textual description of the content node from sources that may not be part
             * of the tree because the content is not rendered. For example, `aria-label`
             * and `aria-labelledby` attributes.
             *
             * Only populated for ANNOTATED_PAGE_CONTENT_MODE_ACTIONABLE_ELEMENTS.`
             */
            label?: (string|null);

            /**
             * If this is a label node associated with an input node using `for`, provides
             * the DOM node ID of the input node. This will match the
             * `common_ancestor_dom_node_id` of the ContentNode of the input node, if it
             * exists.
             * Note: The label may be an ancestor of the input node.
             *
             * Only populated for ANNOTATED_PAGE_CONTENT_MODE_ACTIONABLE_ELEMENTS.
             */
            labelForDomNodeId?: (number|null);

            /**
             * The role of this ContentNode derived from the aria-role attribute.
             *
             * Only populated for ANNOTATED_PAGE_CONTENT_MODE_ACTIONABLE_ELEMENTS.
             */
            ariaRole?: (optimization_guide.proto.AXRole|null);

            /** Whether the content node is from an ad. */
            isAdRelated?: (boolean|null);

            /** Redaction decision for the node. */
            redactionDecision?: (optimization_guide.proto.RedactionDecision|null);
        }

        /** Next ID: 30 */
        class ContentAttributes implements IContentAttributes {

            /**
             * Constructs a new ContentAttributes.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IContentAttributes);

            /** Only set if attribute_type is CONTENT_ATTRIBUTE_TEXT. */
            public textData?: (optimization_guide.proto.ITextInfo|null);

            /** Only set if attribute_type is CONTENT_ATTRIBUTE_IMAGE. */
            public imageData?: (optimization_guide.proto.IImageInfo|null);

            /** Only set if attribute_type is CONTENT_ATTRIBUTE_SVG_ROOT. */
            public svgRootData?: (optimization_guide.proto.ISVGRootData|null);

            /** Only set if attribute_type is CONTENT_ATTRIBUTE_CANVAS. */
            public canvasData?: (optimization_guide.proto.ICanvasData|null);

            /** Only set if attribute_type is CONTENT_ATTRIBUTE_VIDEO. */
            public videoData?: (optimization_guide.proto.IVideoData|null);

            /** Only set if attribute_type is CONTENT_ATTRIBUTE_ANCHOR. */
            public anchorData?: (optimization_guide.proto.IAnchorData|null);

            /** Only set if attribute_type is CONTENT_ATTRIBUTE_FORM. */
            public formData?: (optimization_guide.proto.IFormInfo|null);

            /** Only set if attribute_type is CONTENT_ATTRIBUTE_FORM_CONTROL. */
            public formControlData?: (optimization_guide.proto.IFormControlData|null);

            /** Only set if attribute_type is CONTENT_ATTRIBUTE_TABLE. */
            public tableData?: (optimization_guide.proto.ITableData|null);

            /** Only set if attribute_type is CONTENT_ATTRIBUTE_IFRAME. */
            public iframeData?: (optimization_guide.proto.IIframeData|null);

            /** Only set if attribute_type is CONTENT_ATTRIBUTE_TABLE_ROW. */
            public tableRowData?: (optimization_guide.proto.ITableRowData|null);

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
             */
            public commonAncestorDomNodeId?: (number|null);

            /** ContentAttributes attributeType. */
            public attributeType?: (optimization_guide.proto.ContentAttributeType|null);

            /**
             * This is the geometry of the common_ancestor_dom_node_id.
             *
             * In the default mode, this is only populated if this is the
             * `accessibility_focused_dom_node_id`.
             *
             * Populated for all nodes in
             * `ANNOTATED_PAGE_CONTENT_MODE_ACTIONABLE_ELEMENTS.`
             */
            public geometry?: (optimization_guide.proto.IGeometry|null);

            /**
             * The interaction information for the content node.
             * Note: The information in InteractionInfo is configured based on the
             * AnnotatedPageContentMode. See comments on the message definition for
             * details.
             */
            public interactionInfo?: (optimization_guide.proto.IInteractionInfo|null);

            /**
             * These can come from the aria role, the html tag, or are assumed from some
             * properties of the page.
             */
            public annotatedRoles: optimization_guide.proto.AnnotatedRole[];

            /**
             * A textual description of the content node from sources that may not be part
             * of the tree because the content is not rendered. For example, `aria-label`
             * and `aria-labelledby` attributes.
             *
             * Only populated for ANNOTATED_PAGE_CONTENT_MODE_ACTIONABLE_ELEMENTS.`
             */
            public label?: (string|null);

            /**
             * If this is a label node associated with an input node using `for`, provides
             * the DOM node ID of the input node. This will match the
             * `common_ancestor_dom_node_id` of the ContentNode of the input node, if it
             * exists.
             * Note: The label may be an ancestor of the input node.
             *
             * Only populated for ANNOTATED_PAGE_CONTENT_MODE_ACTIONABLE_ELEMENTS.
             */
            public labelForDomNodeId?: (number|null);

            /**
             * The role of this ContentNode derived from the aria-role attribute.
             *
             * Only populated for ANNOTATED_PAGE_CONTENT_MODE_ACTIONABLE_ELEMENTS.
             */
            public ariaRole?: (optimization_guide.proto.AXRole|null);

            /** Whether the content node is from an ad. */
            public isAdRelated?: (boolean|null);

            /** Redaction decision for the node. */
            public redactionDecision?: (optimization_guide.proto.RedactionDecision|null);

            /** ContentAttributes contentData. */
            public contentData?: ("textData"|"imageData"|"svgRootData"|"canvasData"|"videoData"|"anchorData"|"formData"|"formControlData"|"tableData"|"iframeData"|"tableRowData");

            /**
             * Creates a new ContentAttributes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ContentAttributes instance
             */
            public static create(properties?: optimization_guide.proto.IContentAttributes): optimization_guide.proto.ContentAttributes;

            /**
             * Encodes the specified ContentAttributes message. Does not implicitly {@link optimization_guide.proto.ContentAttributes.verify|verify} messages.
             * @param message ContentAttributes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IContentAttributes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ContentAttributes message, length delimited. Does not implicitly {@link optimization_guide.proto.ContentAttributes.verify|verify} messages.
             * @param message ContentAttributes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IContentAttributes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ContentAttributes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ContentAttributes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.ContentAttributes;

            /**
             * Decodes a ContentAttributes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ContentAttributes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.ContentAttributes;

            /**
             * Verifies a ContentAttributes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ContentAttributes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ContentAttributes
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.ContentAttributes;

            /**
             * Creates a plain object from a ContentAttributes message. Also converts values to other types if specified.
             * @param message ContentAttributes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.ContentAttributes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ContentAttributes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ContentAttributes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Geometry. */
        interface IGeometry {

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
             */
            outerBoundingBox?: (optimization_guide.proto.IBoundingRect|null);

            /**
             * The bounding box of the content node relative to the viewport including all
             * ancestor clipping. These are the element bounds visible to the user and
             * hit-testable in the DOM.
             */
            visibleBoundingBox?: (optimization_guide.proto.IBoundingRect|null);

            /**
             * The bounding box of the content node relative to the viewport including all
             * ancestor clipping. This is conceptually the same as `visible_bounding_box`,
             * but with coordinates calculated by the compositor on the client side. This
             * geometry should be more in sync with the browser screenshot, and should be
             * used for screenshot redaction when present. See crbug.com/441532128 for more
             * details.
             */
            compositorBoundingBox?: (optimization_guide.proto.IBoundingRect|null);

            /**
             * Multiple boxes are used when there are multiple rectangles belonging to
             * the same node, e.g.: across multiple lines, columns or pages. In layout
             * terms, a node that does this is called a fragmentainer.
             * Each rectangle represents a hit testable fragment belonging to the node.
             * An empty array indicates that the node is not fragmented or is entirely
             * offscreen. Relative to viewport origin.
             */
            fragmentVisibleBoundingBoxes?: (optimization_guide.proto.IBoundingRect[]|null);

            /**
             * Whether the content node is fixed or sticky position. This may suggest
             * that the node is a header, footer, or sidebar.
             * TODO(crbug.com/490195093): Remove this field.
             */
            isFixedOrStickyPosition?: (boolean|null);
        }

        /**
         * The geometry of the content, in the page coordinate system.
         * Next ID: 8
         * NOTE: If `visual_bounding_box` is empty, i.e., the content is offscreen and
         * it's in an iframe, the `outer_bounding_box` may be incorrect. See crbug.com/384996050
         * for details.
         *
         * Only populated for ANNOTATED_PAGE_CONTENT_MODE_ACTIONABLE_ELEMENTS.
         */
        class Geometry implements IGeometry {

            /**
             * Constructs a new Geometry.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IGeometry);

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
             */
            public outerBoundingBox?: (optimization_guide.proto.IBoundingRect|null);

            /**
             * The bounding box of the content node relative to the viewport including all
             * ancestor clipping. These are the element bounds visible to the user and
             * hit-testable in the DOM.
             */
            public visibleBoundingBox?: (optimization_guide.proto.IBoundingRect|null);

            /**
             * The bounding box of the content node relative to the viewport including all
             * ancestor clipping. This is conceptually the same as `visible_bounding_box`,
             * but with coordinates calculated by the compositor on the client side. This
             * geometry should be more in sync with the browser screenshot, and should be
             * used for screenshot redaction when present. See crbug.com/441532128 for more
             * details.
             */
            public compositorBoundingBox?: (optimization_guide.proto.IBoundingRect|null);

            /**
             * Multiple boxes are used when there are multiple rectangles belonging to
             * the same node, e.g.: across multiple lines, columns or pages. In layout
             * terms, a node that does this is called a fragmentainer.
             * Each rectangle represents a hit testable fragment belonging to the node.
             * An empty array indicates that the node is not fragmented or is entirely
             * offscreen. Relative to viewport origin.
             */
            public fragmentVisibleBoundingBoxes: optimization_guide.proto.IBoundingRect[];

            /**
             * Whether the content node is fixed or sticky position. This may suggest
             * that the node is a header, footer, or sidebar.
             * TODO(crbug.com/490195093): Remove this field.
             */
            public isFixedOrStickyPosition?: (boolean|null);

            /**
             * Creates a new Geometry instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Geometry instance
             */
            public static create(properties?: optimization_guide.proto.IGeometry): optimization_guide.proto.Geometry;

            /**
             * Encodes the specified Geometry message. Does not implicitly {@link optimization_guide.proto.Geometry.verify|verify} messages.
             * @param message Geometry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IGeometry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Geometry message, length delimited. Does not implicitly {@link optimization_guide.proto.Geometry.verify|verify} messages.
             * @param message Geometry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IGeometry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Geometry message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Geometry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.Geometry;

            /**
             * Decodes a Geometry message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Geometry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.Geometry;

            /**
             * Verifies a Geometry message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Geometry message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Geometry
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.Geometry;

            /**
             * Creates a plain object from a Geometry message. Also converts values to other types if specified.
             * @param message Geometry
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.Geometry, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Geometry to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Geometry
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BoundingRect. */
        interface IBoundingRect {

            /** BoundingRect x */
            x?: (number|null);

            /** BoundingRect y */
            y?: (number|null);

            /** BoundingRect width */
            width?: (number|null);

            /** BoundingRect height */
            height?: (number|null);
        }

        /** Represents a BoundingRect. */
        class BoundingRect implements IBoundingRect {

            /**
             * Constructs a new BoundingRect.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IBoundingRect);

            /** BoundingRect x. */
            public x?: (number|null);

            /** BoundingRect y. */
            public y?: (number|null);

            /** BoundingRect width. */
            public width?: (number|null);

            /** BoundingRect height. */
            public height?: (number|null);

            /**
             * Creates a new BoundingRect instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoundingRect instance
             */
            public static create(properties?: optimization_guide.proto.IBoundingRect): optimization_guide.proto.BoundingRect;

            /**
             * Encodes the specified BoundingRect message. Does not implicitly {@link optimization_guide.proto.BoundingRect.verify|verify} messages.
             * @param message BoundingRect message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IBoundingRect, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoundingRect message, length delimited. Does not implicitly {@link optimization_guide.proto.BoundingRect.verify|verify} messages.
             * @param message BoundingRect message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IBoundingRect, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoundingRect message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoundingRect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.BoundingRect;

            /**
             * Decodes a BoundingRect message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoundingRect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.BoundingRect;

            /**
             * Verifies a BoundingRect message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoundingRect message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoundingRect
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.BoundingRect;

            /**
             * Creates a plain object from a BoundingRect message. Also converts values to other types if specified.
             * @param message BoundingRect
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.BoundingRect, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoundingRect to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BoundingRect
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an InteractionInfo. */
        interface IInteractionInfo {

            /** Set if the content node is scrollable. */
            scrollerInfo?: (optimization_guide.proto.IScrollerInfo|null);

            /**
             * Whether the content node is selectable.
             * TODO(crbug.com/490195093): Remove this field.
             */
            isSelectable?: (boolean|null);

            /**
             * Whether the content node is editable; i.e. whether the user can type into
             * it. This refers to the text actually being editable, not whether the
             * content node is a text field.
             * TODO(crbug.com/490195093): Remove this field.
             */
            isEditable?: (boolean|null);

            /**
             * Whether the content node can be resized. This is relevant for scroll
             * containers and iframes which have the CSS resize behavior.
             * TODO(crbug.com/490195093): Remove these fields.
             */
            canResizeHorizontal?: (boolean|null);

            /** InteractionInfo canResizeVertical */
            canResizeVertical?: (boolean|null);

            /**
             * Whether the content node is focusable. See also `is_tabbable`.
             * A node can be focusable even if it is not tabbable. For
             * example, every option in a long listbox might be focusable, but
             * only reachable using the arrow keys.
             */
            isFocusable?: (boolean|null);

            /**
             * Whether the content node is draggable.
             * TODO(crbug.com/490195093): Remove this field.
             */
            isDraggable?: (boolean|null);

            /**
             * Whether the content node is clickable. This checks for whether the node is
             * a clickable control (e.g. form control elements) or has activation
             * behavior. It also checks for whether the node has a click handler.
             * TODO(crbug.com/490195093): Remove this field.
             */
            isClickable?: (boolean|null);

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
             */
            documentScopedZOrder?: (number|null);

            /**
             * If this node is detected to be is_clickable, provides the reason which
             * caused that.
             * Note: This may not capture all the reasons.
             * Deprecated: Use clickability_reasons instead.
             * TODO(crbug.com/490195093): Remove this field.
             */
            debugClickabilityReasons?: (optimization_guide.proto.ClickabilityReason[]|null);

            /**
             * Provides signals which indicate whether the node is actionable. The action
             * may be triggered by clicking or hovering on the element.
             */
            clickabilityReasons?: (optimization_guide.proto.ClickabilityReason[]|null);

            /**
             * Whether the content node is explicitly disabled from being actionable. For
             * example, a `select` element with the `disabled` or `aria-disabled`
             * attribute. Disabled nodes are still valid action targets and can consume
             * events. This is not set for nodes which are not hit-testable and will
             * ignore events, for example with `pointer-events: none`.
             */
            isDisabled?: (boolean|null);

            /**
             * Hints on why the interaction with the node is disabled.
             *
             * TODO(linnan): Deprecate is_disabled in favour of the list of reasons.
             */
            interactionDisabledReasons?: (optimization_guide.proto.InteractionDisabledReason[]|null);

            /**
             * Whether the content node is tabbable. This is determined by whether the
             * node is focusable and has a non-negative computed tab index (usually 0,
             * which indicates it fits into the tab cycle in its natural order).
             */
            isTabbable?: (boolean|null);

            /**
             * Whether the content node has the aria-activedescendant attribute set. This
             * attribute is used to indicate which element in a set of child elements is
             * currently active.
             */
            hasAriaActivedescendant?: (boolean|null);

            /**
             * Secondary-action targets for a container widget. This lets APC represent
             * cases like split buttons or tabs with close buttons where both the
             * container and the secondary action element are actionable.
             */
            ariaActionTargetNodeIds?: (number[]|null);
        }

        /**
         * The interaction information for the content node. This indicates whether the
         * node is interactive and what type of interaction it supports.
         *
         * Note: ScrollerInfo is populated for ANNOTATED_PAGE_CONTENT_MODE_DEFAULT. The
         * rest of the fields are only populated for
         * ANNOTATED_PAGE_CONTENT_MODE_ACTIONABLE_ELEMENTS.
         * Next ID: 21
         */
        class InteractionInfo implements IInteractionInfo {

            /**
             * Constructs a new InteractionInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IInteractionInfo);

            /** Set if the content node is scrollable. */
            public scrollerInfo?: (optimization_guide.proto.IScrollerInfo|null);

            /**
             * Whether the content node is selectable.
             * TODO(crbug.com/490195093): Remove this field.
             */
            public isSelectable?: (boolean|null);

            /**
             * Whether the content node is editable; i.e. whether the user can type into
             * it. This refers to the text actually being editable, not whether the
             * content node is a text field.
             * TODO(crbug.com/490195093): Remove this field.
             */
            public isEditable?: (boolean|null);

            /**
             * Whether the content node can be resized. This is relevant for scroll
             * containers and iframes which have the CSS resize behavior.
             * TODO(crbug.com/490195093): Remove these fields.
             */
            public canResizeHorizontal?: (boolean|null);

            /** InteractionInfo canResizeVertical. */
            public canResizeVertical?: (boolean|null);

            /**
             * Whether the content node is focusable. See also `is_tabbable`.
             * A node can be focusable even if it is not tabbable. For
             * example, every option in a long listbox might be focusable, but
             * only reachable using the arrow keys.
             */
            public isFocusable?: (boolean|null);

            /**
             * Whether the content node is draggable.
             * TODO(crbug.com/490195093): Remove this field.
             */
            public isDraggable?: (boolean|null);

            /**
             * Whether the content node is clickable. This checks for whether the node is
             * a clickable control (e.g. form control elements) or has activation
             * behavior. It also checks for whether the node has a click handler.
             * TODO(crbug.com/490195093): Remove this field.
             */
            public isClickable?: (boolean|null);

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
             */
            public documentScopedZOrder?: (number|null);

            /**
             * If this node is detected to be is_clickable, provides the reason which
             * caused that.
             * Note: This may not capture all the reasons.
             * Deprecated: Use clickability_reasons instead.
             * TODO(crbug.com/490195093): Remove this field.
             */
            public debugClickabilityReasons: optimization_guide.proto.ClickabilityReason[];

            /**
             * Provides signals which indicate whether the node is actionable. The action
             * may be triggered by clicking or hovering on the element.
             */
            public clickabilityReasons: optimization_guide.proto.ClickabilityReason[];

            /**
             * Whether the content node is explicitly disabled from being actionable. For
             * example, a `select` element with the `disabled` or `aria-disabled`
             * attribute. Disabled nodes are still valid action targets and can consume
             * events. This is not set for nodes which are not hit-testable and will
             * ignore events, for example with `pointer-events: none`.
             */
            public isDisabled?: (boolean|null);

            /**
             * Hints on why the interaction with the node is disabled.
             *
             * TODO(linnan): Deprecate is_disabled in favour of the list of reasons.
             */
            public interactionDisabledReasons: optimization_guide.proto.InteractionDisabledReason[];

            /**
             * Whether the content node is tabbable. This is determined by whether the
             * node is focusable and has a non-negative computed tab index (usually 0,
             * which indicates it fits into the tab cycle in its natural order).
             */
            public isTabbable?: (boolean|null);

            /**
             * Whether the content node has the aria-activedescendant attribute set. This
             * attribute is used to indicate which element in a set of child elements is
             * currently active.
             */
            public hasAriaActivedescendant?: (boolean|null);

            /**
             * Secondary-action targets for a container widget. This lets APC represent
             * cases like split buttons or tabs with close buttons where both the
             * container and the secondary action element are actionable.
             */
            public ariaActionTargetNodeIds: number[];

            /**
             * Creates a new InteractionInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InteractionInfo instance
             */
            public static create(properties?: optimization_guide.proto.IInteractionInfo): optimization_guide.proto.InteractionInfo;

            /**
             * Encodes the specified InteractionInfo message. Does not implicitly {@link optimization_guide.proto.InteractionInfo.verify|verify} messages.
             * @param message InteractionInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IInteractionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InteractionInfo message, length delimited. Does not implicitly {@link optimization_guide.proto.InteractionInfo.verify|verify} messages.
             * @param message InteractionInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IInteractionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InteractionInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InteractionInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.InteractionInfo;

            /**
             * Decodes an InteractionInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InteractionInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.InteractionInfo;

            /**
             * Verifies an InteractionInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InteractionInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InteractionInfo
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.InteractionInfo;

            /**
             * Creates a plain object from an InteractionInfo message. Also converts values to other types if specified.
             * @param message InteractionInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.InteractionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InteractionInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for InteractionInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ScrollerInfo. */
        interface IScrollerInfo {

            /**
             * The complete layout dimensions of the scroller. This is the total area
             * that can be revealed through a scroll operation.
             */
            scrollingBounds?: (optimization_guide.proto.IBoundingSize|null);

            /**
             * The subset of this scroller's content which is currently scrolled to. This
             * is relative to the origin of `scrolling_bounds`.
             */
            visibleArea?: (optimization_guide.proto.IBoundingRect|null);

            /**
             * Indicates whether this can be scrolled by the user in horizontal or
             * vertical directions. These nodes can still be scrolled by script.
             */
            userScrollableHorizontal?: (boolean|null);

            /** ScrollerInfo userScrollableVertical */
            userScrollableVertical?: (boolean|null);
        }

        /**
         * The coordinate space for the dimensions here is physical coordinates (not
         * logical coordinates). This means it's the same irrespective of the writing
         * mode.
         * The dimensions also exclude non-overlay scrollbars.
         */
        class ScrollerInfo implements IScrollerInfo {

            /**
             * Constructs a new ScrollerInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IScrollerInfo);

            /**
             * The complete layout dimensions of the scroller. This is the total area
             * that can be revealed through a scroll operation.
             */
            public scrollingBounds?: (optimization_guide.proto.IBoundingSize|null);

            /**
             * The subset of this scroller's content which is currently scrolled to. This
             * is relative to the origin of `scrolling_bounds`.
             */
            public visibleArea?: (optimization_guide.proto.IBoundingRect|null);

            /**
             * Indicates whether this can be scrolled by the user in horizontal or
             * vertical directions. These nodes can still be scrolled by script.
             */
            public userScrollableHorizontal?: (boolean|null);

            /** ScrollerInfo userScrollableVertical. */
            public userScrollableVertical?: (boolean|null);

            /**
             * Creates a new ScrollerInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ScrollerInfo instance
             */
            public static create(properties?: optimization_guide.proto.IScrollerInfo): optimization_guide.proto.ScrollerInfo;

            /**
             * Encodes the specified ScrollerInfo message. Does not implicitly {@link optimization_guide.proto.ScrollerInfo.verify|verify} messages.
             * @param message ScrollerInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IScrollerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ScrollerInfo message, length delimited. Does not implicitly {@link optimization_guide.proto.ScrollerInfo.verify|verify} messages.
             * @param message ScrollerInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IScrollerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ScrollerInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ScrollerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.ScrollerInfo;

            /**
             * Decodes a ScrollerInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ScrollerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.ScrollerInfo;

            /**
             * Verifies a ScrollerInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ScrollerInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ScrollerInfo
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.ScrollerInfo;

            /**
             * Creates a plain object from a ScrollerInfo message. Also converts values to other types if specified.
             * @param message ScrollerInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.ScrollerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ScrollerInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ScrollerInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BoundingSize. */
        interface IBoundingSize {

            /** BoundingSize width */
            width?: (number|null);

            /** BoundingSize height */
            height?: (number|null);
        }

        /** Represents a BoundingSize. */
        class BoundingSize implements IBoundingSize {

            /**
             * Constructs a new BoundingSize.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IBoundingSize);

            /** BoundingSize width. */
            public width?: (number|null);

            /** BoundingSize height. */
            public height?: (number|null);

            /**
             * Creates a new BoundingSize instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoundingSize instance
             */
            public static create(properties?: optimization_guide.proto.IBoundingSize): optimization_guide.proto.BoundingSize;

            /**
             * Encodes the specified BoundingSize message. Does not implicitly {@link optimization_guide.proto.BoundingSize.verify|verify} messages.
             * @param message BoundingSize message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IBoundingSize, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoundingSize message, length delimited. Does not implicitly {@link optimization_guide.proto.BoundingSize.verify|verify} messages.
             * @param message BoundingSize message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IBoundingSize, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoundingSize message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoundingSize
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.BoundingSize;

            /**
             * Decodes a BoundingSize message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoundingSize
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.BoundingSize;

            /**
             * Verifies a BoundingSize message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoundingSize message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoundingSize
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.BoundingSize;

            /**
             * Creates a plain object from a BoundingSize message. Also converts values to other types if specified.
             * @param message BoundingSize
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.BoundingSize, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoundingSize to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BoundingSize
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TextInfo. */
        interface ITextInfo {

            /** TextInfo textContent */
            textContent?: (string|null);

            /** TextInfo textStyle */
            textStyle?: (optimization_guide.proto.ITextStyle|null);
        }

        /** Next ID: 5 */
        class TextInfo implements ITextInfo {

            /**
             * Constructs a new TextInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.ITextInfo);

            /** TextInfo textContent. */
            public textContent?: (string|null);

            /** TextInfo textStyle. */
            public textStyle?: (optimization_guide.proto.ITextStyle|null);

            /**
             * Creates a new TextInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TextInfo instance
             */
            public static create(properties?: optimization_guide.proto.ITextInfo): optimization_guide.proto.TextInfo;

            /**
             * Encodes the specified TextInfo message. Does not implicitly {@link optimization_guide.proto.TextInfo.verify|verify} messages.
             * @param message TextInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.ITextInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TextInfo message, length delimited. Does not implicitly {@link optimization_guide.proto.TextInfo.verify|verify} messages.
             * @param message TextInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.ITextInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TextInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TextInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.TextInfo;

            /**
             * Decodes a TextInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TextInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.TextInfo;

            /**
             * Verifies a TextInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TextInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TextInfo
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.TextInfo;

            /**
             * Creates a plain object from a TextInfo message. Also converts values to other types if specified.
             * @param message TextInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.TextInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TextInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TextInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TextStyle. */
        interface ITextStyle {

            /**
             * A crude approximation of text size. The default is M. An ML model doesn't
             * need to know the precise size of the text; it just needs to know whether
             * it's relatively small or large. The default is M.
             */
            textSize?: (optimization_guide.proto.TextSize|null);

            /**
             * Whether the text has inline semantics that denote emphasis. For example:
             * bold, italics, underline, super/subscript, etc. An ML model doesn't need
             * to know which specific semantic was used; only that the website author
             * chose to emphasize the text in some way. The default is false.
             */
            hasEmphasis?: (boolean|null);

            /** The color of the text in RGBA format. */
            color?: (number|null);
        }

        /** Next ID: 5 */
        class TextStyle implements ITextStyle {

            /**
             * Constructs a new TextStyle.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.ITextStyle);

            /**
             * A crude approximation of text size. The default is M. An ML model doesn't
             * need to know the precise size of the text; it just needs to know whether
             * it's relatively small or large. The default is M.
             */
            public textSize?: (optimization_guide.proto.TextSize|null);

            /**
             * Whether the text has inline semantics that denote emphasis. For example:
             * bold, italics, underline, super/subscript, etc. An ML model doesn't need
             * to know which specific semantic was used; only that the website author
             * chose to emphasize the text in some way. The default is false.
             */
            public hasEmphasis?: (boolean|null);

            /** The color of the text in RGBA format. */
            public color?: (number|null);

            /**
             * Creates a new TextStyle instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TextStyle instance
             */
            public static create(properties?: optimization_guide.proto.ITextStyle): optimization_guide.proto.TextStyle;

            /**
             * Encodes the specified TextStyle message. Does not implicitly {@link optimization_guide.proto.TextStyle.verify|verify} messages.
             * @param message TextStyle message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.ITextStyle, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TextStyle message, length delimited. Does not implicitly {@link optimization_guide.proto.TextStyle.verify|verify} messages.
             * @param message TextStyle message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.ITextStyle, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TextStyle message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TextStyle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.TextStyle;

            /**
             * Decodes a TextStyle message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TextStyle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.TextStyle;

            /**
             * Verifies a TextStyle message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TextStyle message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TextStyle
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.TextStyle;

            /**
             * Creates a plain object from a TextStyle message. Also converts values to other types if specified.
             * @param message TextStyle
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.TextStyle, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TextStyle to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TextStyle
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ImageInfo. */
        interface IImageInfo {

            /** ImageInfo imageCaption */
            imageCaption?: (string|null);

            /** Provides the source origin for the image. */
            securityOrigin?: (optimization_guide.proto.ISecurityOrigin|null);
        }

        /**
         * Information about the image. In the future, this may include a pixmap.
         * Next ID: 5
         */
        class ImageInfo implements IImageInfo {

            /**
             * Constructs a new ImageInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IImageInfo);

            /** ImageInfo imageCaption. */
            public imageCaption?: (string|null);

            /** Provides the source origin for the image. */
            public securityOrigin?: (optimization_guide.proto.ISecurityOrigin|null);

            /**
             * Creates a new ImageInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ImageInfo instance
             */
            public static create(properties?: optimization_guide.proto.IImageInfo): optimization_guide.proto.ImageInfo;

            /**
             * Encodes the specified ImageInfo message. Does not implicitly {@link optimization_guide.proto.ImageInfo.verify|verify} messages.
             * @param message ImageInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IImageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ImageInfo message, length delimited. Does not implicitly {@link optimization_guide.proto.ImageInfo.verify|verify} messages.
             * @param message ImageInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IImageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ImageInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ImageInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.ImageInfo;

            /**
             * Decodes an ImageInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ImageInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.ImageInfo;

            /**
             * Verifies an ImageInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ImageInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ImageInfo
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.ImageInfo;

            /**
             * Creates a plain object from an ImageInfo message. Also converts values to other types if specified.
             * @param message ImageInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.ImageInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ImageInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ImageInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SecurityOrigin. */
        interface ISecurityOrigin {

            /** Whether the origin is opaque. */
            opaque?: (boolean|null);

            /**
             * The raw value of the origin. It is set to the nonce for opaque origins and
             * scheme-host-port string for non-opaque origins.
             */
            value?: (string|null);
        }

        /**
         * The source origin for the web content in AnnotatedPageContent. This maps to
         * the origin concept in the spec: https://url.spec.whatwg.org/#origin.
         *
         * This is distinct from URLs. There are cases where the URL for a Document,
         * example about:blank, is different from the origin that the Document's data
         * should be attributed to.
         *
         * Next ID: 3
         */
        class SecurityOrigin implements ISecurityOrigin {

            /**
             * Constructs a new SecurityOrigin.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.ISecurityOrigin);

            /** Whether the origin is opaque. */
            public opaque?: (boolean|null);

            /**
             * The raw value of the origin. It is set to the nonce for opaque origins and
             * scheme-host-port string for non-opaque origins.
             */
            public value?: (string|null);

            /**
             * Creates a new SecurityOrigin instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SecurityOrigin instance
             */
            public static create(properties?: optimization_guide.proto.ISecurityOrigin): optimization_guide.proto.SecurityOrigin;

            /**
             * Encodes the specified SecurityOrigin message. Does not implicitly {@link optimization_guide.proto.SecurityOrigin.verify|verify} messages.
             * @param message SecurityOrigin message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.ISecurityOrigin, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SecurityOrigin message, length delimited. Does not implicitly {@link optimization_guide.proto.SecurityOrigin.verify|verify} messages.
             * @param message SecurityOrigin message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.ISecurityOrigin, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SecurityOrigin message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SecurityOrigin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.SecurityOrigin;

            /**
             * Decodes a SecurityOrigin message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SecurityOrigin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.SecurityOrigin;

            /**
             * Verifies a SecurityOrigin message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SecurityOrigin message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SecurityOrigin
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.SecurityOrigin;

            /**
             * Creates a plain object from a SecurityOrigin message. Also converts values to other types if specified.
             * @param message SecurityOrigin
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.SecurityOrigin, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SecurityOrigin to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SecurityOrigin
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SVGRootData. */
        interface ISVGRootData {

            /** The inner text for the SVG subtree. */
            innerText?: (string|null);
        }

        /** Represents a SVGRootData. */
        class SVGRootData implements ISVGRootData {

            /**
             * Constructs a new SVGRootData.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.ISVGRootData);

            /** The inner text for the SVG subtree. */
            public innerText?: (string|null);

            /**
             * Creates a new SVGRootData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SVGRootData instance
             */
            public static create(properties?: optimization_guide.proto.ISVGRootData): optimization_guide.proto.SVGRootData;

            /**
             * Encodes the specified SVGRootData message. Does not implicitly {@link optimization_guide.proto.SVGRootData.verify|verify} messages.
             * @param message SVGRootData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.ISVGRootData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SVGRootData message, length delimited. Does not implicitly {@link optimization_guide.proto.SVGRootData.verify|verify} messages.
             * @param message SVGRootData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.ISVGRootData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SVGRootData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SVGRootData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.SVGRootData;

            /**
             * Decodes a SVGRootData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SVGRootData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.SVGRootData;

            /**
             * Verifies a SVGRootData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SVGRootData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SVGRootData
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.SVGRootData;

            /**
             * Creates a plain object from a SVGRootData message. Also converts values to other types if specified.
             * @param message SVGRootData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.SVGRootData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SVGRootData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SVGRootData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CanvasData. */
        interface ICanvasData {

            /** CanvasData layoutWidth */
            layoutWidth?: (number|null);

            /** CanvasData layoutHeight */
            layoutHeight?: (number|null);
        }

        /** Represents a CanvasData. */
        class CanvasData implements ICanvasData {

            /**
             * Constructs a new CanvasData.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.ICanvasData);

            /** CanvasData layoutWidth. */
            public layoutWidth?: (number|null);

            /** CanvasData layoutHeight. */
            public layoutHeight?: (number|null);

            /**
             * Creates a new CanvasData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CanvasData instance
             */
            public static create(properties?: optimization_guide.proto.ICanvasData): optimization_guide.proto.CanvasData;

            /**
             * Encodes the specified CanvasData message. Does not implicitly {@link optimization_guide.proto.CanvasData.verify|verify} messages.
             * @param message CanvasData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.ICanvasData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CanvasData message, length delimited. Does not implicitly {@link optimization_guide.proto.CanvasData.verify|verify} messages.
             * @param message CanvasData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.ICanvasData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CanvasData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CanvasData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.CanvasData;

            /**
             * Decodes a CanvasData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CanvasData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.CanvasData;

            /**
             * Verifies a CanvasData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CanvasData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CanvasData
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.CanvasData;

            /**
             * Creates a plain object from a CanvasData message. Also converts values to other types if specified.
             * @param message CanvasData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.CanvasData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CanvasData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CanvasData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a VideoData. */
        interface IVideoData {

            /** The URL of the video. */
            url?: (string|null);

            /** The source origin for the video. */
            securityOrigin?: (optimization_guide.proto.ISecurityOrigin|null);
        }

        /** Represents a VideoData. */
        class VideoData implements IVideoData {

            /**
             * Constructs a new VideoData.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IVideoData);

            /** The URL of the video. */
            public url?: (string|null);

            /** The source origin for the video. */
            public securityOrigin?: (optimization_guide.proto.ISecurityOrigin|null);

            /**
             * Creates a new VideoData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VideoData instance
             */
            public static create(properties?: optimization_guide.proto.IVideoData): optimization_guide.proto.VideoData;

            /**
             * Encodes the specified VideoData message. Does not implicitly {@link optimization_guide.proto.VideoData.verify|verify} messages.
             * @param message VideoData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IVideoData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VideoData message, length delimited. Does not implicitly {@link optimization_guide.proto.VideoData.verify|verify} messages.
             * @param message VideoData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IVideoData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VideoData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VideoData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.VideoData;

            /**
             * Decodes a VideoData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VideoData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.VideoData;

            /**
             * Verifies a VideoData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VideoData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VideoData
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.VideoData;

            /**
             * Creates a plain object from a VideoData message. Also converts values to other types if specified.
             * @param message VideoData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.VideoData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VideoData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for VideoData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AnchorData. */
        interface IAnchorData {

            /** AnchorData url */
            url?: (string|null);

            /** The relationship between the linked URL and the current document. */
            rel?: (optimization_guide.proto.AnchorRel[]|null);
        }

        /** Represents an AnchorData. */
        class AnchorData implements IAnchorData {

            /**
             * Constructs a new AnchorData.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IAnchorData);

            /** AnchorData url. */
            public url?: (string|null);

            /** The relationship between the linked URL and the current document. */
            public rel: optimization_guide.proto.AnchorRel[];

            /**
             * Creates a new AnchorData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AnchorData instance
             */
            public static create(properties?: optimization_guide.proto.IAnchorData): optimization_guide.proto.AnchorData;

            /**
             * Encodes the specified AnchorData message. Does not implicitly {@link optimization_guide.proto.AnchorData.verify|verify} messages.
             * @param message AnchorData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IAnchorData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AnchorData message, length delimited. Does not implicitly {@link optimization_guide.proto.AnchorData.verify|verify} messages.
             * @param message AnchorData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IAnchorData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AnchorData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AnchorData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.AnchorData;

            /**
             * Decodes an AnchorData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AnchorData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.AnchorData;

            /**
             * Verifies an AnchorData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AnchorData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AnchorData
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.AnchorData;

            /**
             * Creates a plain object from an AnchorData message. Also converts values to other types if specified.
             * @param message AnchorData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.AnchorData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AnchorData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AnchorData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FormInfo. */
        interface IFormInfo {

            /** The name of the form. */
            formName?: (string|null);

            /**
             * The action URL of the form, if present. This is the resolved value
             * including the final origin.
             */
            actionUrl?: (string|null);
        }

        /**
         * FormInfo is a mirror of AIPageContentFormData from
         * third_party/blink/public/mojom/content_extraction/ai_page_content.mojom,
         * in contrast with FormData, which is a mirror of autofill::FormData from
         * components/autofill/core/common/mojom/autofill_types.mojom.
         */
        class FormInfo implements IFormInfo {

            /**
             * Constructs a new FormInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IFormInfo);

            /** The name of the form. */
            public formName?: (string|null);

            /**
             * The action URL of the form, if present. This is the resolved value
             * including the final origin.
             */
            public actionUrl?: (string|null);

            /**
             * Creates a new FormInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FormInfo instance
             */
            public static create(properties?: optimization_guide.proto.IFormInfo): optimization_guide.proto.FormInfo;

            /**
             * Encodes the specified FormInfo message. Does not implicitly {@link optimization_guide.proto.FormInfo.verify|verify} messages.
             * @param message FormInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IFormInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FormInfo message, length delimited. Does not implicitly {@link optimization_guide.proto.FormInfo.verify|verify} messages.
             * @param message FormInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IFormInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FormInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FormInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.FormInfo;

            /**
             * Decodes a FormInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FormInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.FormInfo;

            /**
             * Verifies a FormInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FormInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FormInfo
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.FormInfo;

            /**
             * Creates a plain object from a FormInfo message. Also converts values to other types if specified.
             * @param message FormInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.FormInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FormInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FormInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FormControlData. */
        interface IFormControlData {

            /** The name for the field. */
            fieldName?: (string|null);

            /** The value of the field. */
            fieldValue?: (string|null);

            /** The type of control for this form field. */
            formControlType?: (optimization_guide.proto.FormControlType|null);

            /** The options for a select field, if applicable. */
            selectOptions?: (optimization_guide.proto.ISelectOption[]|null);

            /** The placeholder text for the field. This is only applicable to text fields. */
            placeholder?: (string|null);

            /**
             * Whether the field is checked. This is only applicable to checkbox and radio
             * button fields.
             */
            isChecked?: (boolean|null);

            /** Whether the field is required. */
            isRequired?: (boolean|null);

            /**
             * Redaction decision for form fields.
             * Deprecated in favor of redaction_decision on ContentAttributes.
             */
            redactionDecision?: (optimization_guide.proto.RedactionDecision|null);

            /**
             * The types of data that can be autofilled this field. This does not imply
             * that the user has data to fill of this type on file.
             */
            coarseAutofillFieldType?: (optimization_guide.proto.CoarseAutofillFieldType[]|null);

            /**
             * Global identifier (across one AnnotatedPageContent) of an autofillable
             * section. Fields that belong to the same section are filled in one fill
             * operation. These fields share the same `autofill_section_id`.
             * The value may change over time if the page changes (IDs are generated
             * in AnnotatedPageContent traversal order according to Autofill's
             * understanding of forms).
             */
            autofillSectionId?: (number|null);

            /** Whether the field is readonly. */
            isReadonly?: (boolean|null);
        }

        /** Next ID: 12 */
        class FormControlData implements IFormControlData {

            /**
             * Constructs a new FormControlData.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IFormControlData);

            /** The name for the field. */
            public fieldName?: (string|null);

            /** The value of the field. */
            public fieldValue?: (string|null);

            /** The type of control for this form field. */
            public formControlType?: (optimization_guide.proto.FormControlType|null);

            /** The options for a select field, if applicable. */
            public selectOptions: optimization_guide.proto.ISelectOption[];

            /** The placeholder text for the field. This is only applicable to text fields. */
            public placeholder?: (string|null);

            /**
             * Whether the field is checked. This is only applicable to checkbox and radio
             * button fields.
             */
            public isChecked?: (boolean|null);

            /** Whether the field is required. */
            public isRequired?: (boolean|null);

            /**
             * Redaction decision for form fields.
             * Deprecated in favor of redaction_decision on ContentAttributes.
             */
            public redactionDecision?: (optimization_guide.proto.RedactionDecision|null);

            /**
             * The types of data that can be autofilled this field. This does not imply
             * that the user has data to fill of this type on file.
             */
            public coarseAutofillFieldType: optimization_guide.proto.CoarseAutofillFieldType[];

            /**
             * Global identifier (across one AnnotatedPageContent) of an autofillable
             * section. Fields that belong to the same section are filled in one fill
             * operation. These fields share the same `autofill_section_id`.
             * The value may change over time if the page changes (IDs are generated
             * in AnnotatedPageContent traversal order according to Autofill's
             * understanding of forms).
             */
            public autofillSectionId?: (number|null);

            /** Whether the field is readonly. */
            public isReadonly?: (boolean|null);

            /**
             * Creates a new FormControlData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FormControlData instance
             */
            public static create(properties?: optimization_guide.proto.IFormControlData): optimization_guide.proto.FormControlData;

            /**
             * Encodes the specified FormControlData message. Does not implicitly {@link optimization_guide.proto.FormControlData.verify|verify} messages.
             * @param message FormControlData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IFormControlData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FormControlData message, length delimited. Does not implicitly {@link optimization_guide.proto.FormControlData.verify|verify} messages.
             * @param message FormControlData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IFormControlData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FormControlData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FormControlData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.FormControlData;

            /**
             * Decodes a FormControlData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FormControlData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.FormControlData;

            /**
             * Verifies a FormControlData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FormControlData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FormControlData
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.FormControlData;

            /**
             * Creates a plain object from a FormControlData message. Also converts values to other types if specified.
             * @param message FormControlData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.FormControlData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FormControlData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FormControlData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SelectOption. */
        interface ISelectOption {

            /** SelectOption value */
            value?: (string|null);

            /** SelectOption text */
            text?: (string|null);

            /**
             * Whether the option is selected.
             * Not set for FormsAI purposes, but used in PCA.
             */
            isSelected?: (boolean|null);

            /**
             * Whether the option is disabled.
             * Not set for FormsAI purposes, but used in PCA.
             */
            isDisabled?: (boolean|null);
        }

        /**
         * Represents an option in a select field. See below for example.
         *
         * HTML                                      | value  | text
         * ------------------------------------------+--------+------
         * <option value=Foo label=Bar>Baz</option>  | "Foo"  | "Bar"
         * <option value=Foo>Bar</option>            | "Foo"  | "Bar"
         * <option label=Bar>Foo</option>            | "Foo"  | "Bar"
         * <option>Foo</option>                      | "Foo"  | "Foo"
         * <option value=Foo></option>               | "Foo"  | ""
         * <option label=Bar></option>               | ""     | "Bar"
         */
        class SelectOption implements ISelectOption {

            /**
             * Constructs a new SelectOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.ISelectOption);

            /** SelectOption value. */
            public value?: (string|null);

            /** SelectOption text. */
            public text?: (string|null);

            /**
             * Whether the option is selected.
             * Not set for FormsAI purposes, but used in PCA.
             */
            public isSelected?: (boolean|null);

            /**
             * Whether the option is disabled.
             * Not set for FormsAI purposes, but used in PCA.
             */
            public isDisabled?: (boolean|null);

            /**
             * Creates a new SelectOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SelectOption instance
             */
            public static create(properties?: optimization_guide.proto.ISelectOption): optimization_guide.proto.SelectOption;

            /**
             * Encodes the specified SelectOption message. Does not implicitly {@link optimization_guide.proto.SelectOption.verify|verify} messages.
             * @param message SelectOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.ISelectOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SelectOption message, length delimited. Does not implicitly {@link optimization_guide.proto.SelectOption.verify|verify} messages.
             * @param message SelectOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.ISelectOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SelectOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SelectOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.SelectOption;

            /**
             * Decodes a SelectOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SelectOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.SelectOption;

            /**
             * Verifies a SelectOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SelectOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SelectOption
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.SelectOption;

            /**
             * Creates a plain object from a SelectOption message. Also converts values to other types if specified.
             * @param message SelectOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.SelectOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SelectOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SelectOption
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TableData. */
        interface ITableData {

            /**
             * The name of the table, coming from the caption.
             * Note: this field has some quirks for backwards-compatibility reasons:
             * 1. It is only populated if the table name is an immediate child of the
             * table element. Table names further down in the tree are skipped, leaving
             * this field empty.
             * 2. The table name also will appear in a separate child text node.
             */
            tableName?: (string|null);
        }

        /** Represents a TableData. */
        class TableData implements ITableData {

            /**
             * Constructs a new TableData.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.ITableData);

            /**
             * The name of the table, coming from the caption.
             * Note: this field has some quirks for backwards-compatibility reasons:
             * 1. It is only populated if the table name is an immediate child of the
             * table element. Table names further down in the tree are skipped, leaving
             * this field empty.
             * 2. The table name also will appear in a separate child text node.
             */
            public tableName?: (string|null);

            /**
             * Creates a new TableData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TableData instance
             */
            public static create(properties?: optimization_guide.proto.ITableData): optimization_guide.proto.TableData;

            /**
             * Encodes the specified TableData message. Does not implicitly {@link optimization_guide.proto.TableData.verify|verify} messages.
             * @param message TableData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.ITableData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TableData message, length delimited. Does not implicitly {@link optimization_guide.proto.TableData.verify|verify} messages.
             * @param message TableData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.ITableData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TableData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TableData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.TableData;

            /**
             * Decodes a TableData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TableData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.TableData;

            /**
             * Verifies a TableData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TableData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TableData
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.TableData;

            /**
             * Creates a plain object from a TableData message. Also converts values to other types if specified.
             * @param message TableData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.TableData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TableData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TableData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an IframeData. */
        interface IIframeData {

            /** IframeData frameData */
            frameData?: (optimization_guide.proto.IFrameData|null);

            /** IframeData redactedFrameMetadata */
            redactedFrameMetadata?: (optimization_guide.proto.IframeData.IRedactedFrameMetadata|null);
        }

        /** Represents an IframeData. */
        class IframeData implements IIframeData {

            /**
             * Constructs a new IframeData.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IIframeData);

            /** IframeData frameData. */
            public frameData?: (optimization_guide.proto.IFrameData|null);

            /** IframeData redactedFrameMetadata. */
            public redactedFrameMetadata?: (optimization_guide.proto.IframeData.IRedactedFrameMetadata|null);

            /** IframeData data. */
            public data?: ("frameData"|"redactedFrameMetadata");

            /**
             * Creates a new IframeData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IframeData instance
             */
            public static create(properties?: optimization_guide.proto.IIframeData): optimization_guide.proto.IframeData;

            /**
             * Encodes the specified IframeData message. Does not implicitly {@link optimization_guide.proto.IframeData.verify|verify} messages.
             * @param message IframeData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IIframeData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IframeData message, length delimited. Does not implicitly {@link optimization_guide.proto.IframeData.verify|verify} messages.
             * @param message IframeData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IIframeData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IframeData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IframeData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.IframeData;

            /**
             * Decodes an IframeData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns IframeData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.IframeData;

            /**
             * Verifies an IframeData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an IframeData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IframeData
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.IframeData;

            /**
             * Creates a plain object from an IframeData message. Also converts values to other types if specified.
             * @param message IframeData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.IframeData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IframeData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for IframeData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace IframeData {

            /** Properties of a RedactedFrameMetadata. */
            interface IRedactedFrameMetadata {

                /** RedactedFrameMetadata reason */
                reason?: (optimization_guide.proto.IframeData.RedactedFrameMetadata.Reason|null);
            }

            /** Represents a RedactedFrameMetadata. */
            class RedactedFrameMetadata implements IRedactedFrameMetadata {

                /**
                 * Constructs a new RedactedFrameMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: optimization_guide.proto.IframeData.IRedactedFrameMetadata);

                /** RedactedFrameMetadata reason. */
                public reason?: (optimization_guide.proto.IframeData.RedactedFrameMetadata.Reason|null);

                /**
                 * Creates a new RedactedFrameMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RedactedFrameMetadata instance
                 */
                public static create(properties?: optimization_guide.proto.IframeData.IRedactedFrameMetadata): optimization_guide.proto.IframeData.RedactedFrameMetadata;

                /**
                 * Encodes the specified RedactedFrameMetadata message. Does not implicitly {@link optimization_guide.proto.IframeData.RedactedFrameMetadata.verify|verify} messages.
                 * @param message RedactedFrameMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: optimization_guide.proto.IframeData.IRedactedFrameMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RedactedFrameMetadata message, length delimited. Does not implicitly {@link optimization_guide.proto.IframeData.RedactedFrameMetadata.verify|verify} messages.
                 * @param message RedactedFrameMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: optimization_guide.proto.IframeData.IRedactedFrameMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RedactedFrameMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RedactedFrameMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.IframeData.RedactedFrameMetadata;

                /**
                 * Decodes a RedactedFrameMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RedactedFrameMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.IframeData.RedactedFrameMetadata;

                /**
                 * Verifies a RedactedFrameMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RedactedFrameMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RedactedFrameMetadata
                 */
                public static fromObject(object: { [k: string]: any }): optimization_guide.proto.IframeData.RedactedFrameMetadata;

                /**
                 * Creates a plain object from a RedactedFrameMetadata message. Also converts values to other types if specified.
                 * @param message RedactedFrameMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: optimization_guide.proto.IframeData.RedactedFrameMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RedactedFrameMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RedactedFrameMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace RedactedFrameMetadata {

                /** Reason enum. */
                enum Reason {
                    REASON_UNSPECIFIED = 0,
                    REASON_CROSS_SITE = 1,
                    REASON_CROSS_ORIGIN = 2
                }
            }
        }

        /** Properties of a FrameData. */
        interface IFrameData {

            /** The security origin of the frame. */
            securityOrigin?: (optimization_guide.proto.ISecurityOrigin|null);

            /** Interaction information for the frame. */
            frameInteractionInfo?: (optimization_guide.proto.IFrameInteractionInfo|null);

            /** Identifies the document in a frame. */
            documentIdentifier?: (optimization_guide.proto.IDocumentIdentifier|null);

            /** The URL of the frame. */
            url?: (string|null);

            /** The title of the frame. */
            title?: (string|null);

            /**
             * Information about paid content in the frame.  Only set
             * if paid content was checked.
             */
            paidContentMetadata?: (optimization_guide.proto.IPaidContentMetadata|null);

            /**
             * Information about the media in the frame. This information is only added
             * for the frame which controls the media session associated with this page.
             * Only one frame can control the media session at a time via the media
             * session web API.
             */
            mediaData?: (optimization_guide.proto.IMediaData|null);

            /** The set of tools supported by this Document. */
            scriptTools?: (optimization_guide.proto.IScriptTool[]|null);

            /**
             * The results of executing script tools.
             * TODO: crbug.com/489841640 - Remove this field once all consumers move to using
             * the field in ActionsResult.
             */
            scriptToolResults?: (optimization_guide.proto.IScriptToolResult[]|null);
        }

        /**
         * The data for a frame in the web page. This is the common data structure for
         * both the root frame and embedded iframes.
         * Next ID: 12
         */
        class FrameData implements IFrameData {

            /**
             * Constructs a new FrameData.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IFrameData);

            /** The security origin of the frame. */
            public securityOrigin?: (optimization_guide.proto.ISecurityOrigin|null);

            /** Interaction information for the frame. */
            public frameInteractionInfo?: (optimization_guide.proto.IFrameInteractionInfo|null);

            /** Identifies the document in a frame. */
            public documentIdentifier?: (optimization_guide.proto.IDocumentIdentifier|null);

            /** The URL of the frame. */
            public url?: (string|null);

            /** The title of the frame. */
            public title?: (string|null);

            /**
             * Information about paid content in the frame.  Only set
             * if paid content was checked.
             */
            public paidContentMetadata?: (optimization_guide.proto.IPaidContentMetadata|null);

            /**
             * Information about the media in the frame. This information is only added
             * for the frame which controls the media session associated with this page.
             * Only one frame can control the media session at a time via the media
             * session web API.
             */
            public mediaData?: (optimization_guide.proto.IMediaData|null);

            /** The set of tools supported by this Document. */
            public scriptTools: optimization_guide.proto.IScriptTool[];

            /**
             * The results of executing script tools.
             * TODO: crbug.com/489841640 - Remove this field once all consumers move to using
             * the field in ActionsResult.
             */
            public scriptToolResults: optimization_guide.proto.IScriptToolResult[];

            /**
             * Creates a new FrameData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FrameData instance
             */
            public static create(properties?: optimization_guide.proto.IFrameData): optimization_guide.proto.FrameData;

            /**
             * Encodes the specified FrameData message. Does not implicitly {@link optimization_guide.proto.FrameData.verify|verify} messages.
             * @param message FrameData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IFrameData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FrameData message, length delimited. Does not implicitly {@link optimization_guide.proto.FrameData.verify|verify} messages.
             * @param message FrameData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IFrameData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FrameData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FrameData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.FrameData;

            /**
             * Decodes a FrameData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FrameData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.FrameData;

            /**
             * Verifies a FrameData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FrameData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FrameData
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.FrameData;

            /**
             * Creates a plain object from a FrameData message. Also converts values to other types if specified.
             * @param message FrameData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.FrameData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FrameData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FrameData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FrameInteractionInfo. */
        interface IFrameInteractionInfo {

            /** The current selection. */
            selection?: (optimization_guide.proto.ISelection|null);

            /** The content node ID of the content node that is currently focused. */
            focusedNodeId?: (number|null);

            /**
             * The content node ID of the content node that is currently focused by a
             * screen reader. If this is set, it means that a screen reader is being used.
             */
            accessibilityFocusedNodeId?: (number|null);
        }

        /**
         * The interaction information for the frame. This is for interactions that
         * are specific to the frame, such as the current selection.
         * Next ID: 4
         */
        class FrameInteractionInfo implements IFrameInteractionInfo {

            /**
             * Constructs a new FrameInteractionInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IFrameInteractionInfo);

            /** The current selection. */
            public selection?: (optimization_guide.proto.ISelection|null);

            /** The content node ID of the content node that is currently focused. */
            public focusedNodeId?: (number|null);

            /**
             * The content node ID of the content node that is currently focused by a
             * screen reader. If this is set, it means that a screen reader is being used.
             */
            public accessibilityFocusedNodeId?: (number|null);

            /**
             * Creates a new FrameInteractionInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FrameInteractionInfo instance
             */
            public static create(properties?: optimization_guide.proto.IFrameInteractionInfo): optimization_guide.proto.FrameInteractionInfo;

            /**
             * Encodes the specified FrameInteractionInfo message. Does not implicitly {@link optimization_guide.proto.FrameInteractionInfo.verify|verify} messages.
             * @param message FrameInteractionInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IFrameInteractionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FrameInteractionInfo message, length delimited. Does not implicitly {@link optimization_guide.proto.FrameInteractionInfo.verify|verify} messages.
             * @param message FrameInteractionInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IFrameInteractionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FrameInteractionInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FrameInteractionInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.FrameInteractionInfo;

            /**
             * Decodes a FrameInteractionInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FrameInteractionInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.FrameInteractionInfo;

            /**
             * Verifies a FrameInteractionInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FrameInteractionInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FrameInteractionInfo
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.FrameInteractionInfo;

            /**
             * Creates a plain object from a FrameInteractionInfo message. Also converts values to other types if specified.
             * @param message FrameInteractionInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.FrameInteractionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FrameInteractionInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FrameInteractionInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Selection. */
        interface ISelection {

            /**
             * The content node ID of the start node. Note that this could be the same as
             * the end node ID. This node is always before or equal to the end node.
             */
            startNodeId?: (number|null);

            /**
             * The character offset of the start of the selection from the start of the
             * text contained in start node.
             */
            startOffset?: (number|null);

            /**
             * The content node ID of the end node. Note that this could be the same as
             * the start node ID. This node is always after or equal to the start node.
             */
            endNodeId?: (number|null);

            /**
             * The character offset of the end of the selection from the start of the
             * text contained in end node.
             */
            endOffset?: (number|null);

            /** The selected text. */
            selectedText?: (string|null);
        }

        /** Represents a selection in the page. This is a frame-level concept. */
        class Selection implements ISelection {

            /**
             * Constructs a new Selection.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.ISelection);

            /**
             * The content node ID of the start node. Note that this could be the same as
             * the end node ID. This node is always before or equal to the end node.
             */
            public startNodeId?: (number|null);

            /**
             * The character offset of the start of the selection from the start of the
             * text contained in start node.
             */
            public startOffset?: (number|null);

            /**
             * The content node ID of the end node. Note that this could be the same as
             * the start node ID. This node is always after or equal to the start node.
             */
            public endNodeId?: (number|null);

            /**
             * The character offset of the end of the selection from the start of the
             * text contained in end node.
             */
            public endOffset?: (number|null);

            /** The selected text. */
            public selectedText?: (string|null);

            /**
             * Creates a new Selection instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Selection instance
             */
            public static create(properties?: optimization_guide.proto.ISelection): optimization_guide.proto.Selection;

            /**
             * Encodes the specified Selection message. Does not implicitly {@link optimization_guide.proto.Selection.verify|verify} messages.
             * @param message Selection message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.ISelection, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Selection message, length delimited. Does not implicitly {@link optimization_guide.proto.Selection.verify|verify} messages.
             * @param message Selection message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.ISelection, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Selection message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Selection
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.Selection;

            /**
             * Decodes a Selection message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Selection
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.Selection;

            /**
             * Verifies a Selection message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Selection message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Selection
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.Selection;

            /**
             * Creates a plain object from a Selection message. Also converts values to other types if specified.
             * @param message Selection
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.Selection, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Selection to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Selection
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DocumentIdentifier. */
        interface IDocumentIdentifier {

            /**
             * A unique identifier for a Document loaded in the browser. This ID is
             * guaranteed to be unique across all Documents for the browser's lifetime.
             * The ID is also stable for the Document's lifetime. It can be used to
             * identify the Document across APC calls.
             */
            serializedToken?: (string|null);
        }

        /**
         * Directs the action to a specific Document in a frame in Chrome.
         * Next ID: 3
         */
        class DocumentIdentifier implements IDocumentIdentifier {

            /**
             * Constructs a new DocumentIdentifier.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IDocumentIdentifier);

            /**
             * A unique identifier for a Document loaded in the browser. This ID is
             * guaranteed to be unique across all Documents for the browser's lifetime.
             * The ID is also stable for the Document's lifetime. It can be used to
             * identify the Document across APC calls.
             */
            public serializedToken?: (string|null);

            /**
             * Creates a new DocumentIdentifier instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DocumentIdentifier instance
             */
            public static create(properties?: optimization_guide.proto.IDocumentIdentifier): optimization_guide.proto.DocumentIdentifier;

            /**
             * Encodes the specified DocumentIdentifier message. Does not implicitly {@link optimization_guide.proto.DocumentIdentifier.verify|verify} messages.
             * @param message DocumentIdentifier message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IDocumentIdentifier, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DocumentIdentifier message, length delimited. Does not implicitly {@link optimization_guide.proto.DocumentIdentifier.verify|verify} messages.
             * @param message DocumentIdentifier message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IDocumentIdentifier, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DocumentIdentifier message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DocumentIdentifier
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.DocumentIdentifier;

            /**
             * Decodes a DocumentIdentifier message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DocumentIdentifier
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.DocumentIdentifier;

            /**
             * Verifies a DocumentIdentifier message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DocumentIdentifier message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DocumentIdentifier
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.DocumentIdentifier;

            /**
             * Creates a plain object from a DocumentIdentifier message. Also converts values to other types if specified.
             * @param message DocumentIdentifier
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.DocumentIdentifier, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DocumentIdentifier to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DocumentIdentifier
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PaidContentMetadata. */
        interface IPaidContentMetadata {

            /** Whether the frame contains paid content. */
            containsPaidContent?: (boolean|null);
        }

        /**
         * Metadata about paid content in the frame.
         * Next ID: 2
         */
        class PaidContentMetadata implements IPaidContentMetadata {

            /**
             * Constructs a new PaidContentMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IPaidContentMetadata);

            /** Whether the frame contains paid content. */
            public containsPaidContent?: (boolean|null);

            /**
             * Creates a new PaidContentMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PaidContentMetadata instance
             */
            public static create(properties?: optimization_guide.proto.IPaidContentMetadata): optimization_guide.proto.PaidContentMetadata;

            /**
             * Encodes the specified PaidContentMetadata message. Does not implicitly {@link optimization_guide.proto.PaidContentMetadata.verify|verify} messages.
             * @param message PaidContentMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IPaidContentMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PaidContentMetadata message, length delimited. Does not implicitly {@link optimization_guide.proto.PaidContentMetadata.verify|verify} messages.
             * @param message PaidContentMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IPaidContentMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PaidContentMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PaidContentMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.PaidContentMetadata;

            /**
             * Decodes a PaidContentMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PaidContentMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.PaidContentMetadata;

            /**
             * Verifies a PaidContentMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PaidContentMetadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PaidContentMetadata
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.PaidContentMetadata;

            /**
             * Creates a plain object from a PaidContentMetadata message. Also converts values to other types if specified.
             * @param message PaidContentMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.PaidContentMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PaidContentMetadata to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PaidContentMetadata
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MediaData. */
        interface IMediaData {

            /** Type of the media in the frame. */
            mediaDataType?: (optimization_guide.proto.MediaDataType|null);

            /**
             * A list of text segments which can be combined to represent the
             * transcriptions of the media content that have been heard by the user.
             * The transcripts are in ascending order by start timestamps.
             */
            transcripts?: (optimization_guide.proto.IMediaTranscript[]|null);

            /** The overall duration of the media. */
            durationMilliseconds?: (number|null);

            /** The current timestamp position of the media. */
            currentPositionMilliseconds?: (number|null);

            /** Whether the media is currently playing or paused. */
            isPlaying?: (boolean|null);

            /**
             * The title of the media. Must be non-empty and set by the website or default
             * to the web page title.
             */
            title?: (string|null);

            /** The artist of the media. May be empty. */
            artist?: (string|null);

            /** The album of the media. May be empty. */
            album?: (string|null);
        }

        /**
         * The media data for a frame in the web page. If the frame has multiple media
         * elements, only one of them is controlled by the media session. The
         * transcripts are always attached if any have been generated for past media or
         * current media in this frame, while other fields are only populated if there
         * is an active media session in the frame.
         * Next ID: 9
         */
        class MediaData implements IMediaData {

            /**
             * Constructs a new MediaData.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IMediaData);

            /** Type of the media in the frame. */
            public mediaDataType?: (optimization_guide.proto.MediaDataType|null);

            /**
             * A list of text segments which can be combined to represent the
             * transcriptions of the media content that have been heard by the user.
             * The transcripts are in ascending order by start timestamps.
             */
            public transcripts: optimization_guide.proto.IMediaTranscript[];

            /** The overall duration of the media. */
            public durationMilliseconds?: (number|null);

            /** The current timestamp position of the media. */
            public currentPositionMilliseconds?: (number|null);

            /** Whether the media is currently playing or paused. */
            public isPlaying?: (boolean|null);

            /**
             * The title of the media. Must be non-empty and set by the website or default
             * to the web page title.
             */
            public title?: (string|null);

            /** The artist of the media. May be empty. */
            public artist?: (string|null);

            /** The album of the media. May be empty. */
            public album?: (string|null);

            /**
             * Creates a new MediaData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MediaData instance
             */
            public static create(properties?: optimization_guide.proto.IMediaData): optimization_guide.proto.MediaData;

            /**
             * Encodes the specified MediaData message. Does not implicitly {@link optimization_guide.proto.MediaData.verify|verify} messages.
             * @param message MediaData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IMediaData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MediaData message, length delimited. Does not implicitly {@link optimization_guide.proto.MediaData.verify|verify} messages.
             * @param message MediaData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IMediaData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MediaData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MediaData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.MediaData;

            /**
             * Decodes a MediaData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MediaData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.MediaData;

            /**
             * Verifies a MediaData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MediaData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MediaData
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.MediaData;

            /**
             * Creates a plain object from a MediaData message. Also converts values to other types if specified.
             * @param message MediaData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.MediaData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MediaData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MediaData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MediaTranscript. */
        interface IMediaTranscript {

            /** A segment of text for the media transcript. */
            text?: (string|null);

            /** Non-negative time since the start of the media. */
            startTimestampMilliseconds?: (number|null);
        }

        /**
         * A segment of the media transcript.
         * Next ID: 3
         */
        class MediaTranscript implements IMediaTranscript {

            /**
             * Constructs a new MediaTranscript.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IMediaTranscript);

            /** A segment of text for the media transcript. */
            public text?: (string|null);

            /** Non-negative time since the start of the media. */
            public startTimestampMilliseconds?: (number|null);

            /**
             * Creates a new MediaTranscript instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MediaTranscript instance
             */
            public static create(properties?: optimization_guide.proto.IMediaTranscript): optimization_guide.proto.MediaTranscript;

            /**
             * Encodes the specified MediaTranscript message. Does not implicitly {@link optimization_guide.proto.MediaTranscript.verify|verify} messages.
             * @param message MediaTranscript message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IMediaTranscript, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MediaTranscript message, length delimited. Does not implicitly {@link optimization_guide.proto.MediaTranscript.verify|verify} messages.
             * @param message MediaTranscript message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IMediaTranscript, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MediaTranscript message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MediaTranscript
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.MediaTranscript;

            /**
             * Decodes a MediaTranscript message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MediaTranscript
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.MediaTranscript;

            /**
             * Verifies a MediaTranscript message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MediaTranscript message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MediaTranscript
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.MediaTranscript;

            /**
             * Creates a plain object from a MediaTranscript message. Also converts values to other types if specified.
             * @param message MediaTranscript
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.MediaTranscript, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MediaTranscript to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MediaTranscript
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ScriptTool. */
        interface IScriptTool {

            /**
             * The name of the tool. This must be unique within the source Document's
             * scope.
             */
            name?: (string|null);

            /** A description of the tool used to understand the capabilities of the tool. */
            description?: (string|null);

            /** A JSON schema string describing the input expected by the tool. */
            inputSchema?: (string|null);

            /** Annotations for the tool. */
            annotations?: (optimization_guide.proto.IScriptToolAnnotations|null);
        }

        /** The data for tools exposed by the Document. */
        class ScriptTool implements IScriptTool {

            /**
             * Constructs a new ScriptTool.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IScriptTool);

            /**
             * The name of the tool. This must be unique within the source Document's
             * scope.
             */
            public name?: (string|null);

            /** A description of the tool used to understand the capabilities of the tool. */
            public description?: (string|null);

            /** A JSON schema string describing the input expected by the tool. */
            public inputSchema?: (string|null);

            /** Annotations for the tool. */
            public annotations?: (optimization_guide.proto.IScriptToolAnnotations|null);

            /**
             * Creates a new ScriptTool instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ScriptTool instance
             */
            public static create(properties?: optimization_guide.proto.IScriptTool): optimization_guide.proto.ScriptTool;

            /**
             * Encodes the specified ScriptTool message. Does not implicitly {@link optimization_guide.proto.ScriptTool.verify|verify} messages.
             * @param message ScriptTool message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IScriptTool, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ScriptTool message, length delimited. Does not implicitly {@link optimization_guide.proto.ScriptTool.verify|verify} messages.
             * @param message ScriptTool message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IScriptTool, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ScriptTool message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ScriptTool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.ScriptTool;

            /**
             * Decodes a ScriptTool message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ScriptTool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.ScriptTool;

            /**
             * Verifies a ScriptTool message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ScriptTool message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ScriptTool
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.ScriptTool;

            /**
             * Creates a plain object from a ScriptTool message. Also converts values to other types if specified.
             * @param message ScriptTool
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.ScriptTool, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ScriptTool to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ScriptTool
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ScriptToolAnnotations. */
        interface IScriptToolAnnotations {

            /** ScriptToolAnnotations readOnly */
            readOnly?: (boolean|null);
        }

        /** Annotations for the script tool. */
        class ScriptToolAnnotations implements IScriptToolAnnotations {

            /**
             * Constructs a new ScriptToolAnnotations.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IScriptToolAnnotations);

            /** ScriptToolAnnotations readOnly. */
            public readOnly?: (boolean|null);

            /**
             * Creates a new ScriptToolAnnotations instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ScriptToolAnnotations instance
             */
            public static create(properties?: optimization_guide.proto.IScriptToolAnnotations): optimization_guide.proto.ScriptToolAnnotations;

            /**
             * Encodes the specified ScriptToolAnnotations message. Does not implicitly {@link optimization_guide.proto.ScriptToolAnnotations.verify|verify} messages.
             * @param message ScriptToolAnnotations message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IScriptToolAnnotations, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ScriptToolAnnotations message, length delimited. Does not implicitly {@link optimization_guide.proto.ScriptToolAnnotations.verify|verify} messages.
             * @param message ScriptToolAnnotations message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IScriptToolAnnotations, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ScriptToolAnnotations message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ScriptToolAnnotations
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.ScriptToolAnnotations;

            /**
             * Decodes a ScriptToolAnnotations message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ScriptToolAnnotations
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.ScriptToolAnnotations;

            /**
             * Verifies a ScriptToolAnnotations message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ScriptToolAnnotations message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ScriptToolAnnotations
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.ScriptToolAnnotations;

            /**
             * Creates a plain object from a ScriptToolAnnotations message. Also converts values to other types if specified.
             * @param message ScriptToolAnnotations
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.ScriptToolAnnotations, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ScriptToolAnnotations to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ScriptToolAnnotations
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ScriptToolResult. */
        interface IScriptToolResult {

            /**
             * The index of the ScriptToolAction in the Actions proto. This is used to
             * match the result to the corresponding action.
             */
            indexOfScriptToolAction?: (number|null);

            /** The result from executing the tool, if the execution was successful. */
            result?: (string|null);

            /**
             * Provides the name and arguments the tool was invoked with. This is
             * populated to provide context for the result.
             */
            toolName?: (string|null);

            /** ScriptToolResult inputArguments */
            inputArguments?: (string|null);

            /** The tool that was executed. */
            tool?: (optimization_guide.proto.IScriptTool|null);
        }

        /**
         * Result of executing a script tool.
         * Next ID: 6
         * TODO: crbug.com/489841640 - Move this to actions_data.proto.
         */
        class ScriptToolResult implements IScriptToolResult {

            /**
             * Constructs a new ScriptToolResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IScriptToolResult);

            /**
             * The index of the ScriptToolAction in the Actions proto. This is used to
             * match the result to the corresponding action.
             */
            public indexOfScriptToolAction?: (number|null);

            /** The result from executing the tool, if the execution was successful. */
            public result?: (string|null);

            /**
             * Provides the name and arguments the tool was invoked with. This is
             * populated to provide context for the result.
             */
            public toolName?: (string|null);

            /** ScriptToolResult inputArguments. */
            public inputArguments?: (string|null);

            /** The tool that was executed. */
            public tool?: (optimization_guide.proto.IScriptTool|null);

            /**
             * Creates a new ScriptToolResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ScriptToolResult instance
             */
            public static create(properties?: optimization_guide.proto.IScriptToolResult): optimization_guide.proto.ScriptToolResult;

            /**
             * Encodes the specified ScriptToolResult message. Does not implicitly {@link optimization_guide.proto.ScriptToolResult.verify|verify} messages.
             * @param message ScriptToolResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IScriptToolResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ScriptToolResult message, length delimited. Does not implicitly {@link optimization_guide.proto.ScriptToolResult.verify|verify} messages.
             * @param message ScriptToolResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IScriptToolResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ScriptToolResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ScriptToolResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.ScriptToolResult;

            /**
             * Decodes a ScriptToolResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ScriptToolResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.ScriptToolResult;

            /**
             * Verifies a ScriptToolResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ScriptToolResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ScriptToolResult
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.ScriptToolResult;

            /**
             * Creates a plain object from a ScriptToolResult message. Also converts values to other types if specified.
             * @param message ScriptToolResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.ScriptToolResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ScriptToolResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ScriptToolResult
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TableRowData. */
        interface ITableRowData {

            /** TableRowData type */
            type?: (optimization_guide.proto.TableRowType|null);
        }

        /** Represents a TableRowData. */
        class TableRowData implements ITableRowData {

            /**
             * Constructs a new TableRowData.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.ITableRowData);

            /** TableRowData type. */
            public type?: (optimization_guide.proto.TableRowType|null);

            /**
             * Creates a new TableRowData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TableRowData instance
             */
            public static create(properties?: optimization_guide.proto.ITableRowData): optimization_guide.proto.TableRowData;

            /**
             * Encodes the specified TableRowData message. Does not implicitly {@link optimization_guide.proto.TableRowData.verify|verify} messages.
             * @param message TableRowData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.ITableRowData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TableRowData message, length delimited. Does not implicitly {@link optimization_guide.proto.TableRowData.verify|verify} messages.
             * @param message TableRowData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.ITableRowData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TableRowData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TableRowData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.TableRowData;

            /**
             * Decodes a TableRowData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TableRowData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.TableRowData;

            /**
             * Verifies a TableRowData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TableRowData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TableRowData
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.TableRowData;

            /**
             * Creates a plain object from a TableRowData message. Also converts values to other types if specified.
             * @param message TableRowData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.TableRowData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TableRowData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TableRowData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PageInteractionInfo. */
        interface IPageInteractionInfo {

            /**
             * The content node ID of the content node that is currently focused.
             * TODO(linnan): Deprecate this field in favor of
             * FrameInteractionInfo.focused_node_id.
             */
            focusedNodeId?: (number|null);

            /**
             * The content node ID of the content node that is currently focused by a
             * screen reader. If this is set, it means that a screen reader is being used.
             * TODO(linnan): Deprecate this field in favor of
             * FrameInteractionInfo.accessibility_focused_node_id.
             */
            accessibilityFocusedNodeId?: (number|null);

            /** The last known mouse position, in the page coordinate system. */
            mousePosition?: (optimization_guide.proto.IPoint|null);

            /** The identifier of the frame that currently has focus. */
            focusedFrame?: (optimization_guide.proto.IDocumentIdentifier|null);
        }

        /**
         * Represents the interaction information for the page. This is for top-level
         * interactions, such as the mouse position and focused element, for which
         * there can only be one unique value.
         * Currently this is only tracked for the main frame. The IDs correspond to the
         * DOM node IDs of the content nodes in the main frame.
         * Next ID: 5
         */
        class PageInteractionInfo implements IPageInteractionInfo {

            /**
             * Constructs a new PageInteractionInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IPageInteractionInfo);

            /**
             * The content node ID of the content node that is currently focused.
             * TODO(linnan): Deprecate this field in favor of
             * FrameInteractionInfo.focused_node_id.
             */
            public focusedNodeId?: (number|null);

            /**
             * The content node ID of the content node that is currently focused by a
             * screen reader. If this is set, it means that a screen reader is being used.
             * TODO(linnan): Deprecate this field in favor of
             * FrameInteractionInfo.accessibility_focused_node_id.
             */
            public accessibilityFocusedNodeId?: (number|null);

            /** The last known mouse position, in the page coordinate system. */
            public mousePosition?: (optimization_guide.proto.IPoint|null);

            /** The identifier of the frame that currently has focus. */
            public focusedFrame?: (optimization_guide.proto.IDocumentIdentifier|null);

            /**
             * Creates a new PageInteractionInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PageInteractionInfo instance
             */
            public static create(properties?: optimization_guide.proto.IPageInteractionInfo): optimization_guide.proto.PageInteractionInfo;

            /**
             * Encodes the specified PageInteractionInfo message. Does not implicitly {@link optimization_guide.proto.PageInteractionInfo.verify|verify} messages.
             * @param message PageInteractionInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IPageInteractionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PageInteractionInfo message, length delimited. Does not implicitly {@link optimization_guide.proto.PageInteractionInfo.verify|verify} messages.
             * @param message PageInteractionInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IPageInteractionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PageInteractionInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PageInteractionInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.PageInteractionInfo;

            /**
             * Decodes a PageInteractionInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PageInteractionInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.PageInteractionInfo;

            /**
             * Verifies a PageInteractionInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PageInteractionInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PageInteractionInfo
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.PageInteractionInfo;

            /**
             * Creates a plain object from a PageInteractionInfo message. Also converts values to other types if specified.
             * @param message PageInteractionInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.PageInteractionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PageInteractionInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PageInteractionInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Point. */
        interface IPoint {

            /** Point x */
            x?: (number|null);

            /** Point y */
            y?: (number|null);
        }

        /** Represents a Point. */
        class Point implements IPoint {

            /**
             * Constructs a new Point.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IPoint);

            /** Point x. */
            public x?: (number|null);

            /** Point y. */
            public y?: (number|null);

            /**
             * Creates a new Point instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Point instance
             */
            public static create(properties?: optimization_guide.proto.IPoint): optimization_guide.proto.Point;

            /**
             * Encodes the specified Point message. Does not implicitly {@link optimization_guide.proto.Point.verify|verify} messages.
             * @param message Point message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Point message, length delimited. Does not implicitly {@link optimization_guide.proto.Point.verify|verify} messages.
             * @param message Point message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Point message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Point
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.Point;

            /**
             * Decodes a Point message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Point
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.Point;

            /**
             * Verifies a Point message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Point message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Point
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.Point;

            /**
             * Creates a plain object from a Point message. Also converts values to other types if specified.
             * @param message Point
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.Point, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Point to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Point
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PopupWindow. */
        interface IPopupWindow {

            /** Root node for the document in the window. */
            rootNode?: (optimization_guide.proto.IContentNode|null);

            /**
             * The bounding box of the popup window relative to the viewport. The popup is
             * not clipped by any ancestor except the viewport clipping the screenshot.
             */
            visibleBoundingBox?: (optimization_guide.proto.IBoundingRect|null);

            /** Unique identifier for the document which opened this popup window. */
            openerDocumentId?: (optimization_guide.proto.IDocumentIdentifier|null);

            /**
             * Unique identifier for the node which opened this popup window. Relies on
             * opener_document_id to determine which document contains the node.
             */
            openerCommonAncestorDomNodeId?: (number|null);
        }

        /**
         * Represents a popup window that is open on a web page.
         * Next ID: 6
         */
        class PopupWindow implements IPopupWindow {

            /**
             * Constructs a new PopupWindow.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IPopupWindow);

            /** Root node for the document in the window. */
            public rootNode?: (optimization_guide.proto.IContentNode|null);

            /**
             * The bounding box of the popup window relative to the viewport. The popup is
             * not clipped by any ancestor except the viewport clipping the screenshot.
             */
            public visibleBoundingBox?: (optimization_guide.proto.IBoundingRect|null);

            /** Unique identifier for the document which opened this popup window. */
            public openerDocumentId?: (optimization_guide.proto.IDocumentIdentifier|null);

            /**
             * Unique identifier for the node which opened this popup window. Relies on
             * opener_document_id to determine which document contains the node.
             */
            public openerCommonAncestorDomNodeId?: (number|null);

            /**
             * Creates a new PopupWindow instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PopupWindow instance
             */
            public static create(properties?: optimization_guide.proto.IPopupWindow): optimization_guide.proto.PopupWindow;

            /**
             * Encodes the specified PopupWindow message. Does not implicitly {@link optimization_guide.proto.PopupWindow.verify|verify} messages.
             * @param message PopupWindow message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IPopupWindow, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PopupWindow message, length delimited. Does not implicitly {@link optimization_guide.proto.PopupWindow.verify|verify} messages.
             * @param message PopupWindow message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IPopupWindow, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PopupWindow message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PopupWindow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.PopupWindow;

            /**
             * Decodes a PopupWindow message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PopupWindow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.PopupWindow;

            /**
             * Verifies a PopupWindow message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PopupWindow message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PopupWindow
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.PopupWindow;

            /**
             * Creates a plain object from a PopupWindow message. Also converts values to other types if specified.
             * @param message PopupWindow
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.PopupWindow, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PopupWindow to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PopupWindow
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ProfileInformation. */
        interface IProfileInformation {

            /** ProfileInformation autofillInformation */
            autofillInformation?: (optimization_guide.proto.IAutofillInformation|null);
        }

        /**
         * Information that pertains the user's Chrome profile.
         * Next ID: 2
         */
        class ProfileInformation implements IProfileInformation {

            /**
             * Constructs a new ProfileInformation.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IProfileInformation);

            /** ProfileInformation autofillInformation. */
            public autofillInformation?: (optimization_guide.proto.IAutofillInformation|null);

            /**
             * Creates a new ProfileInformation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProfileInformation instance
             */
            public static create(properties?: optimization_guide.proto.IProfileInformation): optimization_guide.proto.ProfileInformation;

            /**
             * Encodes the specified ProfileInformation message. Does not implicitly {@link optimization_guide.proto.ProfileInformation.verify|verify} messages.
             * @param message ProfileInformation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IProfileInformation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProfileInformation message, length delimited. Does not implicitly {@link optimization_guide.proto.ProfileInformation.verify|verify} messages.
             * @param message ProfileInformation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IProfileInformation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProfileInformation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProfileInformation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.ProfileInformation;

            /**
             * Decodes a ProfileInformation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProfileInformation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.ProfileInformation;

            /**
             * Verifies a ProfileInformation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProfileInformation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProfileInformation
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.ProfileInformation;

            /**
             * Creates a plain object from a ProfileInformation message. Also converts values to other types if specified.
             * @param message ProfileInformation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.ProfileInformation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProfileInformation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ProfileInformation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AutofillInformation. */
        interface IAutofillInformation {

            /** AutofillInformation fillableData */
            fillableData?: (optimization_guide.proto.AutofillInformation.FillableData[]|null);
        }

        /**
         * Autofill information that pertains to Autofill data on the client.
         * Next ID: 2
         */
        class AutofillInformation implements IAutofillInformation {

            /**
             * Constructs a new AutofillInformation.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IAutofillInformation);

            /** AutofillInformation fillableData. */
            public fillableData: optimization_guide.proto.AutofillInformation.FillableData[];

            /**
             * Creates a new AutofillInformation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AutofillInformation instance
             */
            public static create(properties?: optimization_guide.proto.IAutofillInformation): optimization_guide.proto.AutofillInformation;

            /**
             * Encodes the specified AutofillInformation message. Does not implicitly {@link optimization_guide.proto.AutofillInformation.verify|verify} messages.
             * @param message AutofillInformation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IAutofillInformation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AutofillInformation message, length delimited. Does not implicitly {@link optimization_guide.proto.AutofillInformation.verify|verify} messages.
             * @param message AutofillInformation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IAutofillInformation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AutofillInformation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AutofillInformation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.AutofillInformation;

            /**
             * Decodes an AutofillInformation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AutofillInformation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.AutofillInformation;

            /**
             * Verifies an AutofillInformation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AutofillInformation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AutofillInformation
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.AutofillInformation;

            /**
             * Creates a plain object from an AutofillInformation message. Also converts values to other types if specified.
             * @param message AutofillInformation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.AutofillInformation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AutofillInformation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AutofillInformation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace AutofillInformation {

            /**
             * The type of data that can be autofilled into a form because the client has
             * corresponding data on file. Note that this is coarse data: A user may have
             * an address on file that does not contain an email address. So the autofill
             * status may indicate that an address is fillable but autofill cannot be
             * triggered on an email field.
             */
            enum FillableData {
                UNSPECIFIED = 0,
                ADDRESS = 1,
                CREDIT_CARD = 6
            }
        }

        /** Properties of a GeminiInChromePageMetadata. */
        interface IGeminiInChromePageMetadata {

            /** Information about the associated screenshot. */
            screenshotInfo?: (optimization_guide.proto.IScreenshotInfo|null);
        }

        /**
         * Metadata about the page from Gemini in Chrome.
         * Next ID: 2
         */
        class GeminiInChromePageMetadata implements IGeminiInChromePageMetadata {

            /**
             * Constructs a new GeminiInChromePageMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IGeminiInChromePageMetadata);

            /** Information about the associated screenshot. */
            public screenshotInfo?: (optimization_guide.proto.IScreenshotInfo|null);

            /**
             * Creates a new GeminiInChromePageMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeminiInChromePageMetadata instance
             */
            public static create(properties?: optimization_guide.proto.IGeminiInChromePageMetadata): optimization_guide.proto.GeminiInChromePageMetadata;

            /**
             * Encodes the specified GeminiInChromePageMetadata message. Does not implicitly {@link optimization_guide.proto.GeminiInChromePageMetadata.verify|verify} messages.
             * @param message GeminiInChromePageMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IGeminiInChromePageMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeminiInChromePageMetadata message, length delimited. Does not implicitly {@link optimization_guide.proto.GeminiInChromePageMetadata.verify|verify} messages.
             * @param message GeminiInChromePageMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IGeminiInChromePageMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeminiInChromePageMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeminiInChromePageMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.GeminiInChromePageMetadata;

            /**
             * Decodes a GeminiInChromePageMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeminiInChromePageMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.GeminiInChromePageMetadata;

            /**
             * Verifies a GeminiInChromePageMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeminiInChromePageMetadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeminiInChromePageMetadata
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.GeminiInChromePageMetadata;

            /**
             * Creates a plain object from a GeminiInChromePageMetadata message. Also converts values to other types if specified.
             * @param message GeminiInChromePageMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.GeminiInChromePageMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeminiInChromePageMetadata to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GeminiInChromePageMetadata
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ScreenshotInfo. */
        interface IScreenshotInfo {

            /** Whether the screenshot contains a selection region. */
            hasSelectionRegionInScreenshot?: (boolean|null);
        }

        /**
         * The screenshot information for the page. While the screenshot is not
         * conveyed in the parent message, this metadata should be used to inform the
         * model about the screenshot.
         * Next ID: 2
         */
        class ScreenshotInfo implements IScreenshotInfo {

            /**
             * Constructs a new ScreenshotInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IScreenshotInfo);

            /** Whether the screenshot contains a selection region. */
            public hasSelectionRegionInScreenshot?: (boolean|null);

            /**
             * Creates a new ScreenshotInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ScreenshotInfo instance
             */
            public static create(properties?: optimization_guide.proto.IScreenshotInfo): optimization_guide.proto.ScreenshotInfo;

            /**
             * Encodes the specified ScreenshotInfo message. Does not implicitly {@link optimization_guide.proto.ScreenshotInfo.verify|verify} messages.
             * @param message ScreenshotInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IScreenshotInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ScreenshotInfo message, length delimited. Does not implicitly {@link optimization_guide.proto.ScreenshotInfo.verify|verify} messages.
             * @param message ScreenshotInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IScreenshotInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ScreenshotInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ScreenshotInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.ScreenshotInfo;

            /**
             * Decodes a ScreenshotInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ScreenshotInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.ScreenshotInfo;

            /**
             * Verifies a ScreenshotInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ScreenshotInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ScreenshotInfo
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.ScreenshotInfo;

            /**
             * Creates a plain object from a ScreenshotInfo message. Also converts values to other types if specified.
             * @param message ScreenshotInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.ScreenshotInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ScreenshotInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ScreenshotInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AutofillGlobalId. */
        interface IAutofillGlobalId {

            /** AutofillGlobalId frameToken */
            frameToken?: (string|null);

            /** AutofillGlobalId rendererId */
            rendererId?: (number|null);
        }

        /** Uniquely identifies a DOM elements across all frames. */
        class AutofillGlobalId implements IAutofillGlobalId {

            /**
             * Constructs a new AutofillGlobalId.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IAutofillGlobalId);

            /** AutofillGlobalId frameToken. */
            public frameToken?: (string|null);

            /** AutofillGlobalId rendererId. */
            public rendererId?: (number|null);

            /**
             * Creates a new AutofillGlobalId instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AutofillGlobalId instance
             */
            public static create(properties?: optimization_guide.proto.IAutofillGlobalId): optimization_guide.proto.AutofillGlobalId;

            /**
             * Encodes the specified AutofillGlobalId message. Does not implicitly {@link optimization_guide.proto.AutofillGlobalId.verify|verify} messages.
             * @param message AutofillGlobalId message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IAutofillGlobalId, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AutofillGlobalId message, length delimited. Does not implicitly {@link optimization_guide.proto.AutofillGlobalId.verify|verify} messages.
             * @param message AutofillGlobalId message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IAutofillGlobalId, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AutofillGlobalId message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AutofillGlobalId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.AutofillGlobalId;

            /**
             * Decodes an AutofillGlobalId message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AutofillGlobalId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.AutofillGlobalId;

            /**
             * Verifies an AutofillGlobalId message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AutofillGlobalId message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AutofillGlobalId
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.AutofillGlobalId;

            /**
             * Creates a plain object from an AutofillGlobalId message. Also converts values to other types if specified.
             * @param message AutofillGlobalId
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.AutofillGlobalId, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AutofillGlobalId to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AutofillGlobalId
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FormData. */
        interface IFormData {

            /**
             * The name by which autofill knows this form. This is generally either the
             * name attribute or the id_attribute value, which-ever is non-empty with
             * priority given to the name_attribute.
             */
            formName?: (string|null);

            /** The fields contained in this form. */
            fields?: (optimization_guide.proto.IFormFieldData[]|null);

            /** Only set during data collection, not in prediction requests. */
            globalId?: (optimization_guide.proto.IAutofillGlobalId|null);

            /**
             * Autofill's internal identifier for the form. Can change when the form
             * changes dynamically.
             * Only set during data collection, not in prediction requests.
             */
            formSignature?: (number|null);

            /**
             * The action URL of the form, if present. This is the resolved value
             * including the final origin.
             */
            actionUrl?: (string|null);
        }

        /** Represents a FormData. */
        class FormData implements IFormData {

            /**
             * Constructs a new FormData.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IFormData);

            /**
             * The name by which autofill knows this form. This is generally either the
             * name attribute or the id_attribute value, which-ever is non-empty with
             * priority given to the name_attribute.
             */
            public formName?: (string|null);

            /** The fields contained in this form. */
            public fields: optimization_guide.proto.IFormFieldData[];

            /** Only set during data collection, not in prediction requests. */
            public globalId?: (optimization_guide.proto.IAutofillGlobalId|null);

            /**
             * Autofill's internal identifier for the form. Can change when the form
             * changes dynamically.
             * Only set during data collection, not in prediction requests.
             */
            public formSignature?: (number|null);

            /**
             * The action URL of the form, if present. This is the resolved value
             * including the final origin.
             */
            public actionUrl?: (string|null);

            /**
             * Creates a new FormData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FormData instance
             */
            public static create(properties?: optimization_guide.proto.IFormData): optimization_guide.proto.FormData;

            /**
             * Encodes the specified FormData message. Does not implicitly {@link optimization_guide.proto.FormData.verify|verify} messages.
             * @param message FormData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IFormData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FormData message, length delimited. Does not implicitly {@link optimization_guide.proto.FormData.verify|verify} messages.
             * @param message FormData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IFormData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FormData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FormData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.FormData;

            /**
             * Decodes a FormData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FormData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.FormData;

            /**
             * Verifies a FormData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FormData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FormData
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.FormData;

            /**
             * Creates a plain object from a FormData message. Also converts values to other types if specified.
             * @param message FormData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.FormData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FormData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FormData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FormFieldData. */
        interface IFormFieldData {

            /** The name for the field. */
            fieldName?: (string|null);

            /** The label for the field. */
            fieldLabel?: (string|null);

            /** FormFieldData fieldValue */
            fieldValue?: (string|null);

            /** FormFieldData isVisible */
            isVisible?: (boolean|null);

            /**
             * Whether the field is focusable.
             * Only set during data collection, not in prediction requests.
             */
            isFocusable?: (boolean|null);

            /** The type of control for this form field. */
            formControlType?: (optimization_guide.proto.FormControlType|null);

            /** The options for a select field, if applicable. */
            selectOptions?: (optimization_guide.proto.ISelectOption[]|null);

            /** The placeholder text for the field. */
            placeholder?: (string|null);

            /** The AX node ID of the form control for this field. */
            formControlAxNodeId?: (number|null);

            /** FormFieldData isEligible */
            isEligible?: (boolean|null);

            /** Only set during data collection, not in prediction requests. */
            globalId?: (optimization_guide.proto.IAutofillGlobalId|null);

            /**
             * Autofill's internal identifier for the field. Can change when the form
             * changes dynamically.
             * Only set during data collection, not in prediction requests.
             */
            fieldSignature?: (number|null);

            /**
             * The text of the elements denoted by the aria-labelledby attribute of field
             * or the value of its aria-label attribute, with priority given to the
             * aria-labelledby attribute.
             */
            ariaLabel?: (string|null);

            /**
             * The text of the elements denoted by the aria-describedby attribute of field
             * or the value of its aria-description attribute, with priority given to the
             * aria-describedby attribute.
             */
            ariaDescription?: (string|null);
        }

        /** Next ID: 15 */
        class FormFieldData implements IFormFieldData {

            /**
             * Constructs a new FormFieldData.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IFormFieldData);

            /** The name for the field. */
            public fieldName?: (string|null);

            /** The label for the field. */
            public fieldLabel?: (string|null);

            /** FormFieldData fieldValue. */
            public fieldValue?: (string|null);

            /** FormFieldData isVisible. */
            public isVisible?: (boolean|null);

            /**
             * Whether the field is focusable.
             * Only set during data collection, not in prediction requests.
             */
            public isFocusable?: (boolean|null);

            /** The type of control for this form field. */
            public formControlType?: (optimization_guide.proto.FormControlType|null);

            /** The options for a select field, if applicable. */
            public selectOptions: optimization_guide.proto.ISelectOption[];

            /** The placeholder text for the field. */
            public placeholder?: (string|null);

            /** The AX node ID of the form control for this field. */
            public formControlAxNodeId?: (number|null);

            /** FormFieldData isEligible. */
            public isEligible?: (boolean|null);

            /** Only set during data collection, not in prediction requests. */
            public globalId?: (optimization_guide.proto.IAutofillGlobalId|null);

            /**
             * Autofill's internal identifier for the field. Can change when the form
             * changes dynamically.
             * Only set during data collection, not in prediction requests.
             */
            public fieldSignature?: (number|null);

            /**
             * The text of the elements denoted by the aria-labelledby attribute of field
             * or the value of its aria-label attribute, with priority given to the
             * aria-labelledby attribute.
             */
            public ariaLabel?: (string|null);

            /**
             * The text of the elements denoted by the aria-describedby attribute of field
             * or the value of its aria-description attribute, with priority given to the
             * aria-describedby attribute.
             */
            public ariaDescription?: (string|null);

            /**
             * Creates a new FormFieldData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FormFieldData instance
             */
            public static create(properties?: optimization_guide.proto.IFormFieldData): optimization_guide.proto.FormFieldData;

            /**
             * Encodes the specified FormFieldData message. Does not implicitly {@link optimization_guide.proto.FormFieldData.verify|verify} messages.
             * @param message FormFieldData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IFormFieldData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FormFieldData message, length delimited. Does not implicitly {@link optimization_guide.proto.FormFieldData.verify|verify} messages.
             * @param message FormFieldData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IFormFieldData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FormFieldData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FormFieldData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.FormFieldData;

            /**
             * Decodes a FormFieldData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FormFieldData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.FormFieldData;

            /**
             * Verifies a FormFieldData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FormFieldData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FormFieldData
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.FormFieldData;

            /**
             * Creates a plain object from a FormFieldData message. Also converts values to other types if specified.
             * @param message FormFieldData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.FormFieldData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FormFieldData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FormFieldData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TableRow. */
        interface ITableRow {

            /** TableRow cells */
            cells?: (optimization_guide.proto.IContentNode[]|null);
        }

        /** Represents a TableRow. */
        class TableRow implements ITableRow {

            /**
             * Constructs a new TableRow.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.ITableRow);

            /** TableRow cells. */
            public cells: optimization_guide.proto.IContentNode[];

            /**
             * Creates a new TableRow instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TableRow instance
             */
            public static create(properties?: optimization_guide.proto.ITableRow): optimization_guide.proto.TableRow;

            /**
             * Encodes the specified TableRow message. Does not implicitly {@link optimization_guide.proto.TableRow.verify|verify} messages.
             * @param message TableRow message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.ITableRow, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TableRow message, length delimited. Does not implicitly {@link optimization_guide.proto.TableRow.verify|verify} messages.
             * @param message TableRow message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.ITableRow, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TableRow message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TableRow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.TableRow;

            /**
             * Decodes a TableRow message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TableRow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.TableRow;

            /**
             * Verifies a TableRow message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TableRow message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TableRow
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.TableRow;

            /**
             * Creates a plain object from a TableRow message. Also converts values to other types if specified.
             * @param message TableRow
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.TableRow, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TableRow to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TableRow
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UserAnnotationsEntry. */
        interface IUserAnnotationsEntry {

            /**
             * The row ID of this entry from the user annotations database. This is
             * immutable except when retrieving the row from the database.
             */
            entryId?: (number|null);

            /** The key for this entry. Not necessarily unique. */
            key?: (string|null);

            /** The value for this entry. */
            value?: (string|null);
        }

        /** Represents a UserAnnotationsEntry. */
        class UserAnnotationsEntry implements IUserAnnotationsEntry {

            /**
             * Constructs a new UserAnnotationsEntry.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IUserAnnotationsEntry);

            /**
             * The row ID of this entry from the user annotations database. This is
             * immutable except when retrieving the row from the database.
             */
            public entryId?: (number|null);

            /** The key for this entry. Not necessarily unique. */
            public key?: (string|null);

            /** The value for this entry. */
            public value?: (string|null);

            /**
             * Creates a new UserAnnotationsEntry instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserAnnotationsEntry instance
             */
            public static create(properties?: optimization_guide.proto.IUserAnnotationsEntry): optimization_guide.proto.UserAnnotationsEntry;

            /**
             * Encodes the specified UserAnnotationsEntry message. Does not implicitly {@link optimization_guide.proto.UserAnnotationsEntry.verify|verify} messages.
             * @param message UserAnnotationsEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IUserAnnotationsEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserAnnotationsEntry message, length delimited. Does not implicitly {@link optimization_guide.proto.UserAnnotationsEntry.verify|verify} messages.
             * @param message UserAnnotationsEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IUserAnnotationsEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserAnnotationsEntry message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserAnnotationsEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.UserAnnotationsEntry;

            /**
             * Decodes a UserAnnotationsEntry message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserAnnotationsEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.UserAnnotationsEntry;

            /**
             * Verifies a UserAnnotationsEntry message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserAnnotationsEntry message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserAnnotationsEntry
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.UserAnnotationsEntry;

            /**
             * Creates a plain object from a UserAnnotationsEntry message. Also converts values to other types if specified.
             * @param message UserAnnotationsEntry
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.UserAnnotationsEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserAnnotationsEntry to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UserAnnotationsEntry
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TabGroup. */
        interface ITabGroup {

            /** The label that describes this tab group. */
            label?: (string|null);

            /** The tabs that belong in this group. */
            tabs?: (optimization_guide.proto.ITab[]|null);

            /** The id of the pre-existing tab group this corresponds to, if any. */
            groupId?: (string|null);
        }

        /** Represents a TabGroup. */
        class TabGroup implements ITabGroup {

            /**
             * Constructs a new TabGroup.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.ITabGroup);

            /** The label that describes this tab group. */
            public label?: (string|null);

            /** The tabs that belong in this group. */
            public tabs: optimization_guide.proto.ITab[];

            /** The id of the pre-existing tab group this corresponds to, if any. */
            public groupId?: (string|null);

            /**
             * Creates a new TabGroup instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TabGroup instance
             */
            public static create(properties?: optimization_guide.proto.ITabGroup): optimization_guide.proto.TabGroup;

            /**
             * Encodes the specified TabGroup message. Does not implicitly {@link optimization_guide.proto.TabGroup.verify|verify} messages.
             * @param message TabGroup message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.ITabGroup, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TabGroup message, length delimited. Does not implicitly {@link optimization_guide.proto.TabGroup.verify|verify} messages.
             * @param message TabGroup message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.ITabGroup, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TabGroup message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TabGroup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.TabGroup;

            /**
             * Decodes a TabGroup message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TabGroup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.TabGroup;

            /**
             * Verifies a TabGroup message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TabGroup message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TabGroup
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.TabGroup;

            /**
             * Creates a plain object from a TabGroup message. Also converts values to other types if specified.
             * @param message TabGroup
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.TabGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TabGroup to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TabGroup
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Tab. */
        interface ITab {

            /** A unique identifier for the tab. */
            tabId?: (number|null);

            /** The title of the tab. */
            title?: (string|null);

            /** The URL of the tab. */
            url?: (string|null);

            /** The page context of the tab. */
            pageContext?: (optimization_guide.proto.IPageContext|null);
        }

        /** Represents a Tab. */
        class Tab implements ITab {

            /**
             * Constructs a new Tab.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.ITab);

            /** A unique identifier for the tab. */
            public tabId?: (number|null);

            /** The title of the tab. */
            public title?: (string|null);

            /** The URL of the tab. */
            public url?: (string|null);

            /** The page context of the tab. */
            public pageContext?: (optimization_guide.proto.IPageContext|null);

            /**
             * Creates a new Tab instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Tab instance
             */
            public static create(properties?: optimization_guide.proto.ITab): optimization_guide.proto.Tab;

            /**
             * Encodes the specified Tab message. Does not implicitly {@link optimization_guide.proto.Tab.verify|verify} messages.
             * @param message Tab message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.ITab, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Tab message, length delimited. Does not implicitly {@link optimization_guide.proto.Tab.verify|verify} messages.
             * @param message Tab message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.ITab, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Tab message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Tab
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.Tab;

            /**
             * Decodes a Tab message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Tab
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.Tab;

            /**
             * Verifies a Tab message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Tab message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Tab
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.Tab;

            /**
             * Creates a plain object from a Tab message. Also converts values to other types if specified.
             * @param message Tab
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.Tab, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Tab to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Tab
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SiteEngagementEntry. */
        interface ISiteEngagementEntry {

            /** The URL of the site. */
            url?: (string|null);

            /** On a scale of 0 to 100, the relative score of engagement with the site. */
            score?: (number|null);
        }

        /** The site engagement information for a single site. */
        class SiteEngagementEntry implements ISiteEngagementEntry {

            /**
             * Constructs a new SiteEngagementEntry.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.ISiteEngagementEntry);

            /** The URL of the site. */
            public url?: (string|null);

            /** On a scale of 0 to 100, the relative score of engagement with the site. */
            public score?: (number|null);

            /**
             * Creates a new SiteEngagementEntry instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SiteEngagementEntry instance
             */
            public static create(properties?: optimization_guide.proto.ISiteEngagementEntry): optimization_guide.proto.SiteEngagementEntry;

            /**
             * Encodes the specified SiteEngagementEntry message. Does not implicitly {@link optimization_guide.proto.SiteEngagementEntry.verify|verify} messages.
             * @param message SiteEngagementEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.ISiteEngagementEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SiteEngagementEntry message, length delimited. Does not implicitly {@link optimization_guide.proto.SiteEngagementEntry.verify|verify} messages.
             * @param message SiteEngagementEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.ISiteEngagementEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SiteEngagementEntry message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SiteEngagementEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.SiteEngagementEntry;

            /**
             * Decodes a SiteEngagementEntry message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SiteEngagementEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.SiteEngagementEntry;

            /**
             * Verifies a SiteEngagementEntry message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SiteEngagementEntry message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SiteEngagementEntry
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.SiteEngagementEntry;

            /**
             * Creates a plain object from a SiteEngagementEntry message. Also converts values to other types if specified.
             * @param message SiteEngagementEntry
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.SiteEngagementEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SiteEngagementEntry to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SiteEngagementEntry
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SiteEngagement. */
        interface ISiteEngagement {

            /** The site engagement information for the user. */
            entries?: (optimization_guide.proto.ISiteEngagementEntry[]|null);
        }

        /** The site engagement information for the user. */
        class SiteEngagement implements ISiteEngagement {

            /**
             * Constructs a new SiteEngagement.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.ISiteEngagement);

            /** The site engagement information for the user. */
            public entries: optimization_guide.proto.ISiteEngagementEntry[];

            /**
             * Creates a new SiteEngagement instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SiteEngagement instance
             */
            public static create(properties?: optimization_guide.proto.ISiteEngagement): optimization_guide.proto.SiteEngagement;

            /**
             * Encodes the specified SiteEngagement message. Does not implicitly {@link optimization_guide.proto.SiteEngagement.verify|verify} messages.
             * @param message SiteEngagement message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.ISiteEngagement, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SiteEngagement message, length delimited. Does not implicitly {@link optimization_guide.proto.SiteEngagement.verify|verify} messages.
             * @param message SiteEngagement message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.ISiteEngagement, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SiteEngagement message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SiteEngagement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.SiteEngagement;

            /**
             * Decodes a SiteEngagement message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SiteEngagement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.SiteEngagement;

            /**
             * Verifies a SiteEngagement message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SiteEngagement message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SiteEngagement
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.SiteEngagement;

            /**
             * Creates a plain object from a SiteEngagement message. Also converts values to other types if specified.
             * @param message SiteEngagement
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.SiteEngagement, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SiteEngagement to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SiteEngagement
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Coordinate. */
        interface ICoordinate {

            /** Coordinate x */
            x?: (number|null);

            /** Coordinate y */
            y?: (number|null);

            /**
             * The type of the coordinate. If not specified, the coordinate is assumed to
             * be relative to the viewport dimensions or screenshot dimensions depending
             * on the context.
             */
            pixelType?: (optimization_guide.proto.Coordinate.PixelType|null);
        }

        /**
         * The coordinates of a point.
         * Next ID: 4
         */
        class Coordinate implements ICoordinate {

            /**
             * Constructs a new Coordinate.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.ICoordinate);

            /** Coordinate x. */
            public x?: (number|null);

            /** Coordinate y. */
            public y?: (number|null);

            /**
             * The type of the coordinate. If not specified, the coordinate is assumed to
             * be relative to the viewport dimensions or screenshot dimensions depending
             * on the context.
             */
            public pixelType?: (optimization_guide.proto.Coordinate.PixelType|null);

            /**
             * Creates a new Coordinate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Coordinate instance
             */
            public static create(properties?: optimization_guide.proto.ICoordinate): optimization_guide.proto.Coordinate;

            /**
             * Encodes the specified Coordinate message. Does not implicitly {@link optimization_guide.proto.Coordinate.verify|verify} messages.
             * @param message Coordinate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.ICoordinate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Coordinate message, length delimited. Does not implicitly {@link optimization_guide.proto.Coordinate.verify|verify} messages.
             * @param message Coordinate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.ICoordinate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Coordinate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Coordinate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.Coordinate;

            /**
             * Decodes a Coordinate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Coordinate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.Coordinate;

            /**
             * Verifies a Coordinate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Coordinate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Coordinate
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.Coordinate;

            /**
             * Creates a plain object from a Coordinate message. Also converts values to other types if specified.
             * @param message Coordinate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.Coordinate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Coordinate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Coordinate
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace Coordinate {

            /** PixelType enum. */
            enum PixelType {
                PIXEL_TYPE_UNSPECIFIED = 0,
                PIXEL_TYPE_DIPS = 1,
                PIXEL_TYPE_PHYSICAL_PIXELS = 2
            }
        }

        /** Properties of a MetaTag. */
        interface IMetaTag {

            /** The name attribute of the meta tag. */
            name?: (string|null);

            /** The content attribute of the meta tag. */
            content?: (string|null);
        }

        /**
         * A meta tag (https://developer.mozilla.org/en-US/docs/Wecrbug.com/HTML/Element/meta).
         * Next ID: 3
         */
        class MetaTag implements IMetaTag {

            /**
             * Constructs a new MetaTag.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IMetaTag);

            /** The name attribute of the meta tag. */
            public name?: (string|null);

            /** The content attribute of the meta tag. */
            public content?: (string|null);

            /**
             * Creates a new MetaTag instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MetaTag instance
             */
            public static create(properties?: optimization_guide.proto.IMetaTag): optimization_guide.proto.MetaTag;

            /**
             * Encodes the specified MetaTag message. Does not implicitly {@link optimization_guide.proto.MetaTag.verify|verify} messages.
             * @param message MetaTag message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IMetaTag, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MetaTag message, length delimited. Does not implicitly {@link optimization_guide.proto.MetaTag.verify|verify} messages.
             * @param message MetaTag message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IMetaTag, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MetaTag message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MetaTag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.MetaTag;

            /**
             * Decodes a MetaTag message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MetaTag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.MetaTag;

            /**
             * Verifies a MetaTag message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MetaTag message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MetaTag
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.MetaTag;

            /**
             * Creates a plain object from a MetaTag message. Also converts values to other types if specified.
             * @param message MetaTag
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.MetaTag, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MetaTag to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MetaTag
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FrameMetadata. */
        interface IFrameMetadata {

            /** The URL of the frame. */
            url?: (string|null);

            /** FrameMetadata metaTags */
            metaTags?: (optimization_guide.proto.IMetaTag[]|null);

            /** FrameMetadata hasMediaTranscripts */
            hasMediaTranscripts?: (boolean|null);
        }

        /**
         * Metadata about a frame.
         * Next ID: 4
         */
        class FrameMetadata implements IFrameMetadata {

            /**
             * Constructs a new FrameMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IFrameMetadata);

            /** The URL of the frame. */
            public url?: (string|null);

            /** FrameMetadata metaTags. */
            public metaTags: optimization_guide.proto.IMetaTag[];

            /** FrameMetadata hasMediaTranscripts. */
            public hasMediaTranscripts?: (boolean|null);

            /**
             * Creates a new FrameMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FrameMetadata instance
             */
            public static create(properties?: optimization_guide.proto.IFrameMetadata): optimization_guide.proto.FrameMetadata;

            /**
             * Encodes the specified FrameMetadata message. Does not implicitly {@link optimization_guide.proto.FrameMetadata.verify|verify} messages.
             * @param message FrameMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IFrameMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FrameMetadata message, length delimited. Does not implicitly {@link optimization_guide.proto.FrameMetadata.verify|verify} messages.
             * @param message FrameMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IFrameMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FrameMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FrameMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.FrameMetadata;

            /**
             * Decodes a FrameMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FrameMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.FrameMetadata;

            /**
             * Verifies a FrameMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FrameMetadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FrameMetadata
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.FrameMetadata;

            /**
             * Creates a plain object from a FrameMetadata message. Also converts values to other types if specified.
             * @param message FrameMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.FrameMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FrameMetadata to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FrameMetadata
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PageMetadata. */
        interface IPageMetadata {

            /** The main frame is the first entry in the array. */
            frameMetadata?: (optimization_guide.proto.IFrameMetadata[]|null);
        }

        /**
         * Metadata (URL and meta tags) from page content. Includes data from meta tags
         * for all frames on this page.
         * Next ID: 2
         */
        class PageMetadata implements IPageMetadata {

            /**
             * Constructs a new PageMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IPageMetadata);

            /** The main frame is the first entry in the array. */
            public frameMetadata: optimization_guide.proto.IFrameMetadata[];

            /**
             * Creates a new PageMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PageMetadata instance
             */
            public static create(properties?: optimization_guide.proto.IPageMetadata): optimization_guide.proto.PageMetadata;

            /**
             * Encodes the specified PageMetadata message. Does not implicitly {@link optimization_guide.proto.PageMetadata.verify|verify} messages.
             * @param message PageMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IPageMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PageMetadata message, length delimited. Does not implicitly {@link optimization_guide.proto.PageMetadata.verify|verify} messages.
             * @param message PageMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IPageMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PageMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PageMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.PageMetadata;

            /**
             * Decodes a PageMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PageMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.PageMetadata;

            /**
             * Verifies a PageMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PageMetadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PageMetadata
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.PageMetadata;

            /**
             * Creates a plain object from a PageMetadata message. Also converts values to other types if specified.
             * @param message PageMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.PageMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PageMetadata to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PageMetadata
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DocumentSelection. */
        interface IDocumentSelection {

            /** The document identifier of the document/frame that this selection is from. */
            documentIdentifier?: (optimization_guide.proto.IDocumentIdentifier|null);

            /** The selection in the document. */
            selection?: (optimization_guide.proto.ISelection|null);
        }

        /** Represents a DocumentSelection. */
        class DocumentSelection implements IDocumentSelection {

            /**
             * Constructs a new DocumentSelection.
             * @param [properties] Properties to set
             */
            constructor(properties?: optimization_guide.proto.IDocumentSelection);

            /** The document identifier of the document/frame that this selection is from. */
            public documentIdentifier?: (optimization_guide.proto.IDocumentIdentifier|null);

            /** The selection in the document. */
            public selection?: (optimization_guide.proto.ISelection|null);

            /**
             * Creates a new DocumentSelection instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DocumentSelection instance
             */
            public static create(properties?: optimization_guide.proto.IDocumentSelection): optimization_guide.proto.DocumentSelection;

            /**
             * Encodes the specified DocumentSelection message. Does not implicitly {@link optimization_guide.proto.DocumentSelection.verify|verify} messages.
             * @param message DocumentSelection message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: optimization_guide.proto.IDocumentSelection, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DocumentSelection message, length delimited. Does not implicitly {@link optimization_guide.proto.DocumentSelection.verify|verify} messages.
             * @param message DocumentSelection message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: optimization_guide.proto.IDocumentSelection, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DocumentSelection message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DocumentSelection
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): optimization_guide.proto.DocumentSelection;

            /**
             * Decodes a DocumentSelection message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DocumentSelection
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): optimization_guide.proto.DocumentSelection;

            /**
             * Verifies a DocumentSelection message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DocumentSelection message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DocumentSelection
             */
            public static fromObject(object: { [k: string]: any }): optimization_guide.proto.DocumentSelection;

            /**
             * Creates a plain object from a DocumentSelection message. Also converts values to other types if specified.
             * @param message DocumentSelection
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: optimization_guide.proto.DocumentSelection, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DocumentSelection to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DocumentSelection
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /**
         * Selection text affinity, part of the a11y snapshot.
         * Next ID: 3
         */
        enum AXTextAffinity {
            AX_TEXT_AFFINITY_NONE = 0,
            AX_TEXT_AFFINITY_DOWNSTREAM = 1,
            AX_TEXT_AFFINITY_UPSTREAM = 2
        }

        /**
         * AX Role.
         * Next ID: 214
         */
        enum AXRole {
            AX_ROLE_NONE = 0,
            AX_ROLE_ABBR = 1,
            AX_ROLE_ALERT = 2,
            AX_ROLE_ALERTDIALOG = 3,
            AX_ROLE_APPLICATION = 4,
            AX_ROLE_ARTICLE = 5,
            AX_ROLE_AUDIO = 6,
            AX_ROLE_BANNER = 7,
            AX_ROLE_BLOCKQUOTE = 8,
            AX_ROLE_BUTTON = 9,
            AX_ROLE_CANVAS = 10,
            AX_ROLE_CAPTION = 11,
            AX_ROLE_CARET = 12,
            AX_ROLE_CELL = 13,
            AX_ROLE_CHECKBOX = 14,
            AX_ROLE_CLIENT = 15,
            AX_ROLE_CODE = 16,
            AX_ROLE_COLORWELL = 17,
            AX_ROLE_COLUMN = 18,
            AX_ROLE_COLUMNHEADER = 19,
            AX_ROLE_COMBOBOXGROUPING = 20,
            AX_ROLE_COMBOBOXMENUBUTTON = 21,
            AX_ROLE_COMPLEMENTARY = 22,
            AX_ROLE_COMMENT = 23,
            AX_ROLE_CONTENTDELETION = 24,
            AX_ROLE_CONTENTINSERTION = 25,
            AX_ROLE_CONTENTINFO = 26,
            AX_ROLE_DATE = 27,
            AX_ROLE_DATETIME = 28,
            AX_ROLE_DEFINITION = 29,
            AX_ROLE_DESCRIPTIONLIST = 30,
            AX_ROLE_DESCRIPTIONLISTDETAILDEPRECATED = 31,
            AX_ROLE_DESCRIPTIONLISTTERMDEPRECATED = 32,
            AX_ROLE_DESKTOP = 33,
            AX_ROLE_DETAILS = 34,
            AX_ROLE_DIALOG = 35,
            AX_ROLE_DIRECTORYDEPRECATED = 36,
            AX_ROLE_DISCLOSURETRIANGLE = 37,
            AX_ROLE_DOCABSTRACT = 38,
            AX_ROLE_DOCACKNOWLEDGMENTS = 39,
            AX_ROLE_DOCAFTERWORD = 40,
            AX_ROLE_DOCAPPENDIX = 41,
            AX_ROLE_DOCBACKLINK = 42,
            AX_ROLE_DOCBIBLIOENTRY = 43,
            AX_ROLE_DOCBIBLIOGRAPHY = 44,
            AX_ROLE_DOCBIBLIOREF = 45,
            AX_ROLE_DOCCHAPTER = 46,
            AX_ROLE_DOCCOLOPHON = 47,
            AX_ROLE_DOCCONCLUSION = 48,
            AX_ROLE_DOCCOVER = 49,
            AX_ROLE_DOCCREDIT = 50,
            AX_ROLE_DOCCREDITS = 51,
            AX_ROLE_DOCDEDICATION = 52,
            AX_ROLE_DOCENDNOTE = 53,
            AX_ROLE_DOCENDNOTES = 54,
            AX_ROLE_DOCEPIGRAPH = 55,
            AX_ROLE_DOCEPILOGUE = 56,
            AX_ROLE_DOCERRATA = 57,
            AX_ROLE_DOCEXAMPLE = 58,
            AX_ROLE_DOCFOOTNOTE = 59,
            AX_ROLE_DOCFOREWORD = 60,
            AX_ROLE_DOCGLOSSARY = 61,
            AX_ROLE_DOCGLOSSREF = 62,
            AX_ROLE_DOCINDEX = 63,
            AX_ROLE_DOCINTRODUCTION = 64,
            AX_ROLE_DOCNOTEREF = 65,
            AX_ROLE_DOCNOTICE = 66,
            AX_ROLE_DOCPAGEBREAK = 67,
            AX_ROLE_DOCPAGEFOOTER = 68,
            AX_ROLE_DOCPAGEHEADER = 69,
            AX_ROLE_DOCPAGELIST = 70,
            AX_ROLE_DOCPART = 71,
            AX_ROLE_DOCPREFACE = 72,
            AX_ROLE_DOCPROLOGUE = 73,
            AX_ROLE_DOCPULLQUOTE = 74,
            AX_ROLE_DOCQNA = 75,
            AX_ROLE_DOCSUBTITLE = 76,
            AX_ROLE_DOCTIP = 77,
            AX_ROLE_DOCTOC = 78,
            AX_ROLE_DOCUMENT = 79,
            AX_ROLE_EMBEDDEDOBJECT = 80,
            AX_ROLE_EMPHASIS = 81,
            AX_ROLE_FEED = 82,
            AX_ROLE_FIGCAPTION = 83,
            AX_ROLE_FIGURE = 84,
            AX_ROLE_FOOTER = 85,
            AX_ROLE_SECTIONFOOTER = 86,
            AX_ROLE_FORM = 87,
            AX_ROLE_GENERICCONTAINER = 88,
            AX_ROLE_GRAPHICSDOCUMENT = 89,
            AX_ROLE_GRAPHICSOBJECT = 90,
            AX_ROLE_GRAPHICSSYMBOL = 91,
            AX_ROLE_GRID = 92,
            AX_ROLE_GROUP = 93,
            AX_ROLE_HEADER = 94,
            AX_ROLE_SECTIONHEADER = 95,
            AX_ROLE_HEADING = 96,
            AX_ROLE_IFRAME = 97,
            AX_ROLE_IFRAMEPRESENTATIONAL = 98,
            AX_ROLE_IMAGE = 99,
            AX_ROLE_IMECANDIDATE = 100,
            AX_ROLE_INLINETEXTBOX = 101,
            AX_ROLE_INPUTTIME = 102,
            AX_ROLE_KEYBOARD = 103,
            AX_ROLE_LABELTEXT = 104,
            AX_ROLE_LAYOUTTABLE = 105,
            AX_ROLE_LAYOUTTABLECELL = 106,
            AX_ROLE_LAYOUTTABLEROW = 107,
            AX_ROLE_LEGEND = 108,
            AX_ROLE_LINEBREAK = 109,
            AX_ROLE_LINK = 110,
            AX_ROLE_LIST = 111,
            AX_ROLE_LISTBOX = 112,
            AX_ROLE_LISTBOXOPTION = 113,
            AX_ROLE_LISTGRID = 114,
            AX_ROLE_LISTITEM = 115,
            AX_ROLE_LISTMARKER = 116,
            AX_ROLE_LOG = 117,
            AX_ROLE_MAIN = 118,
            AX_ROLE_MARK = 119,
            AX_ROLE_MARQUEE = 120,
            AX_ROLE_MATH = 121,
            AX_ROLE_MENU = 122,
            AX_ROLE_MENUBAR = 123,
            AX_ROLE_MENUITEM = 124,
            AX_ROLE_MENUITEMCHECKBOX = 125,
            AX_ROLE_MENUITEMRADIO = 126,
            AX_ROLE_MENUITEMSEPARATOR = 213,
            AX_ROLE_MENULISTOPTION = 127,
            AX_ROLE_MENULISTPOPUP = 128,
            AX_ROLE_METER = 129,
            AX_ROLE_NAVIGATION = 130,
            AX_ROLE_NOTE = 131,
            AX_ROLE_PANE = 132,
            AX_ROLE_PARAGRAPH = 133,
            AX_ROLE_PDFACTIONABLEHIGHLIGHT = 134,
            AX_ROLE_PDFROOT = 135,
            AX_ROLE_PLUGINOBJECT = 136,
            AX_ROLE_POPUPBUTTON = 137,
            AX_ROLE_PORTALDEPRECATED = 138,
            AX_ROLE_PREDEPRECATED = 139,
            AX_ROLE_PROGRESSINDICATOR = 140,
            AX_ROLE_RADIOBUTTON = 141,
            AX_ROLE_RADIOGROUP = 142,
            AX_ROLE_REGION = 143,
            AX_ROLE_ROOTWEBAREA = 144,
            AX_ROLE_ROW = 145,
            AX_ROLE_ROWGROUP = 146,
            AX_ROLE_ROWHEADER = 147,
            AX_ROLE_RUBY = 148,
            AX_ROLE_RUBYANNOTATION = 149,
            AX_ROLE_SCROLLBAR = 150,
            AX_ROLE_SCROLLVIEW = 151,
            AX_ROLE_SEARCH = 152,
            AX_ROLE_SEARCHBOX = 153,
            AX_ROLE_SECTION = 154,
            AX_ROLE_SLIDER = 155,
            AX_ROLE_SPINBUTTON = 156,
            AX_ROLE_SPLITTER = 157,
            AX_ROLE_STATICTEXT = 158,
            AX_ROLE_STATUS = 159,
            AX_ROLE_STRONG = 160,
            AX_ROLE_SUGGESTION = 161,
            AX_ROLE_SVGROOT = 162,
            AX_ROLE_SWITCH = 163,
            AX_ROLE_TAB = 164,
            AX_ROLE_TABLIST = 165,
            AX_ROLE_TABPANEL = 166,
            AX_ROLE_TABLE = 167,
            AX_ROLE_TABLEHEADERCONTAINER = 168,
            AX_ROLE_TERM = 169,
            AX_ROLE_TEXTFIELD = 170,
            AX_ROLE_TEXTFIELDWITHCOMBOBOX = 171,
            AX_ROLE_TIME = 172,
            AX_ROLE_TIMER = 173,
            AX_ROLE_TITLEBAR = 174,
            AX_ROLE_TOGGLEBUTTON = 175,
            AX_ROLE_TOOLBAR = 176,
            AX_ROLE_TOOLTIP = 177,
            AX_ROLE_TREE = 178,
            AX_ROLE_TREEGRID = 179,
            AX_ROLE_TREEITEM = 180,
            AX_ROLE_UNKNOWN = 181,
            AX_ROLE_VIDEO = 182,
            AX_ROLE_WEBVIEW = 183,
            AX_ROLE_WINDOW = 184,
            AX_ROLE_SUBSCRIPT = 185,
            AX_ROLE_SUPERSCRIPT = 186,
            AX_ROLE_MATHMLMATH = 187,
            AX_ROLE_MATHMLFRACTION = 188,
            AX_ROLE_MATHMLIDENTIFIER = 189,
            AX_ROLE_MATHMLMULTISCRIPTS = 190,
            AX_ROLE_MATHMLNONESCRIPT = 191,
            AX_ROLE_MATHMLNUMBER = 192,
            AX_ROLE_MATHMLOPERATOR = 193,
            AX_ROLE_MATHMLOVER = 194,
            AX_ROLE_MATHMLPRESCRIPTDELIMITER = 195,
            AX_ROLE_MATHMLROOT = 196,
            AX_ROLE_MATHMLROW = 197,
            AX_ROLE_MATHMLSQUAREROOT = 198,
            AX_ROLE_MATHMLSTRINGLITERAL = 199,
            AX_ROLE_MATHMLSUB = 200,
            AX_ROLE_MATHMLSUBSUP = 201,
            AX_ROLE_MATHMLSUP = 202,
            AX_ROLE_MATHMLTABLE = 203,
            AX_ROLE_MATHMLTABLECELL = 204,
            AX_ROLE_MATHMLTABLEROW = 205,
            AX_ROLE_MATHMLTEXT = 206,
            AX_ROLE_MATHMLUNDER = 207,
            AX_ROLE_MATHMLUNDEROVER = 208,
            AX_ROLE_COMBOBOXSELECT = 209,
            AX_ROLE_DISCLOSURETRIANGLEGROUPED = 210,
            AX_ROLE_SECTIONWITHOUTNAME = 211,
            AX_ROLE_GRIDCELL = 212
        }

        /**
         * AX String attribute enum.
         * Next ID: 43
         */
        enum AXStringAttribute {
            AX_SA_NONE = 0,
            AX_SA_ACCESSKEY = 1,
            AX_SA_APPID = 2,
            AX_SA_ARIAINVALIDVALUEDEPRECATED = 3,
            AX_SA_AUTOCOMPLETE = 4,
            AX_SA_CHECKEDSTATEDESCRIPTION = 5,
            AX_SA_CHILDTREEID = 6,
            AX_SA_CHILDTREENODEAPPID = 7,
            AX_SA_CLASSNAME = 8,
            AX_SA_CONTAINERLIVERELEVANT = 9,
            AX_SA_CONTAINERLIVESTATUS = 10,
            AX_SA_DESCRIPTION = 11,
            AX_SA_DISPLAY = 12,
            AX_SA_FONTFAMILY = 13,
            AX_SA_HTMLTAG = 14,
            AX_SA_IMAGEANNOTATION = 15,
            AX_SA_IMAGEDATAURL = 16,
            AX_SA_MATHCONTENT = 17,
            AX_SA_INPUTTYPE = 18,
            AX_SA_KEYSHORTCUTS = 19,
            AX_SA_LANGUAGE = 20,
            AX_SA_NAME = 21,
            AX_SA_LIVERELEVANT = 22,
            AX_SA_LIVESTATUS = 23,
            AX_SA_PLACEHOLDER = 24,
            AX_SA_ROLE = 25,
            AX_SA_ROLEDESCRIPTION = 26,
            AX_SA_TOOLTIP = 27,
            AX_SA_URL = 28,
            AX_SA_VALUE = 29,
            AX_SA_VIRTUALCONTENT = 30,
            AX_SA_DODEFAULTLABEL = 31,
            AX_SA_LONGCLICKLABEL = 32,
            AX_SA_ARIABRAILLELABEL = 33,
            AX_SA_ARIABRAILLEROLEDESCRIPTION = 34,
            AX_SA_LINKTARGET = 35,
            AX_SA_ARIANOTIFICATIONANNOUNCEMENTDEPRECATED = 36,
            AX_SA_ARIANOTIFICATIONIDDEPRECATED = 37,
            AX_SA_HTMLID = 38,
            AX_SA_ARIACELLCOLUMNINDEXTEXT = 39,
            AX_SA_ARIACELLROWINDEXTEXT = 40,
            AX_SA_DATETIME = 41,
            AX_SA_HTMLINPUTNAME = 42
        }

        /**
         * AX Int attribute enum.
         * Next ID: 70
         */
        enum AXIntAttribute {
            AX_IA_NONE = 0,
            AX_IA_DEFAULTACTIONVERB = 1,
            AX_IA_SCROLLX = 2,
            AX_IA_SCROLLXMIN = 3,
            AX_IA_SCROLLXMAX = 4,
            AX_IA_SCROLLY = 5,
            AX_IA_SCROLLYMIN = 6,
            AX_IA_SCROLLYMAX = 7,
            AX_IA_TEXTSELSTART = 8,
            AX_IA_TEXTSELEND = 9,
            AX_IA_ARIACOLUMNCOUNT = 10,
            AX_IA_ARIACELLCOLUMNINDEX = 11,
            AX_IA_ARIACELLCOLUMNSPAN = 12,
            AX_IA_ARIAROWCOUNT = 13,
            AX_IA_ARIACELLROWINDEX = 14,
            AX_IA_ARIACELLROWSPAN = 15,
            AX_IA_TABLEROWCOUNT = 16,
            AX_IA_TABLECOLUMNCOUNT = 17,
            AX_IA_TABLEHEADERID = 18,
            AX_IA_TABLEROWINDEX = 19,
            AX_IA_TABLEROWHEADERID = 20,
            AX_IA_TABLECOLUMNINDEX = 21,
            AX_IA_TABLECOLUMNHEADERID = 22,
            AX_IA_TABLECELLCOLUMNINDEX = 23,
            AX_IA_TABLECELLCOLUMNSPAN = 24,
            AX_IA_TABLECELLROWINDEX = 25,
            AX_IA_TABLECELLROWSPAN = 26,
            AX_IA_SORTDIRECTION = 27,
            AX_IA_HIERARCHICALLEVEL = 28,
            AX_IA_NAMEFROM = 29,
            AX_IA_DESCRIPTIONFROM = 30,
            AX_IA_ACTIVEDESCENDANTID = 31,
            AX_IA_ERRORMESSAGEIDDEPRECATED = 32,
            AX_IA_INPAGELINKTARGETID = 33,
            AX_IA_MEMBEROFID = 34,
            AX_IA_NEXTONLINEID = 35,
            AX_IA_POPUPFORID = 36,
            AX_IA_PREVIOUSONLINEID = 37,
            AX_IA_RESTRICTION = 38,
            AX_IA_SETSIZE = 39,
            AX_IA_POSINSET = 40,
            AX_IA_COLORVALUE = 41,
            AX_IA_ARIACURRENTSTATE = 42,
            AX_IA_BACKGROUNDCOLOR = 43,
            AX_IA_COLOR = 44,
            AX_IA_HASPOPUP = 45,
            AX_IA_IMAGEANNOTATIONSTATUS = 46,
            AX_IA_INVALIDSTATE = 47,
            AX_IA_CHECKEDSTATE = 48,
            AX_IA_LISTSTYLE = 49,
            AX_IA_TEXTALIGN = 50,
            AX_IA_TEXTDIRECTION = 51,
            AX_IA_TEXTPOSITION = 52,
            AX_IA_TEXTSTYLE = 53,
            AX_IA_TEXTOVERLINESTYLE = 54,
            AX_IA_TEXTSTRIKETHROUGHSTYLE = 55,
            AX_IA_TEXTUNDERLINESTYLE = 56,
            AX_IA_PREVIOUSFOCUSID = 57,
            AX_IA_NEXTFOCUSID = 58,
            AX_IA_DROPEFFECTDEPRECATED = 59,
            AX_IA_DOMNODEIDDEPRECATED = 60,
            AX_IA_ISPOPUP = 61,
            AX_IA_NEXTWINDOWFOCUSID = 62,
            AX_IA_PREVIOUSWINDOWFOCUSID = 63,
            AX_IA_ARIANOTIFICATIONINTERRUPTDEPRECATED = 64,
            AX_IA_ARIANOTIFICATIONPRIORITYDEPRECATED = 65,
            AX_IA_DETAILSFROM = 66,
            AX_IA_MAXLENGTH = 67,
            AX_IA_PAINTORDER = 68,
            AX_IA_COMMITTEDTEXTLENGTH = 69
        }

        /**
         * AX Float attribute enum.
         * Next ID: 9
         */
        enum AXFloatAttribute {
            AX_FA_NONE = 0,
            AX_FA_VALUEFORRANGE = 1,
            AX_FA_MINVALUEFORRANGE = 2,
            AX_FA_MAXVALUEFORRANGE = 3,
            AX_FA_STEPVALUEFORRANGE = 4,
            AX_FA_FONTSIZE = 5,
            AX_FA_FONTWEIGHT = 6,
            AX_FA_TEXTINDENT = 7,
            AX_FA_CHILDTREESCALE = 8
        }

        /**
         * AX Bool attribute enum.
         * Next ID: 26
         */
        enum AXBoolAttribute {
            AX_BA_NONE = 0,
            AX_BA_BUSY = 1,
            AX_BA_NONATOMICTEXTFIELDROOT = 2,
            AX_BA_CONTAINERLIVEATOMIC = 3,
            AX_BA_CONTAINERLIVEBUSY = 4,
            AX_BA_LIVEATOMIC = 5,
            AX_BA_MODAL = 6,
            AX_BA_UPDATELOCATIONONLY = 7,
            AX_BA_CANVASHASFALLBACK = 8,
            AX_BA_SCROLLABLE = 9,
            AX_BA_CLICKABLE = 10,
            AX_BA_CLIPSCHILDREN = 11,
            AX_BA_NOTUSERSELECTABLESTYLE = 12,
            AX_BA_SELECTED = 13,
            AX_BA_SELECTEDFROMFOCUS = 14,
            AX_BA_SUPPORTSTEXTLOCATION = 15,
            AX_BA_GRABBEDDEPRECATED = 16,
            AX_BA_ISLINEBREAKINGOBJECT = 17,
            AX_BA_ISPAGEBREAKINGOBJECT = 18,
            AX_BA_HASARIAATTRIBUTE = 19,
            AX_BA_TOUCHPASSTHROUGHDEPRECATED = 20,
            AX_BA_LONGCLICKABLE = 21,
            AX_BA_HASHIDDENOFFSCREENNODES = 22,
            AX_BA_HASCOMPOSITION = 23,
            AX_BA_COMMITTEDBYIME = 24,
            AX_BA_TEXTSUGGESTIONSELECTEDBYIME = 25
        }

        /**
         * AX IntList attribute enum.
         * Next ID: 30
         */
        enum AXIntListAttribute {
            AX_ILA_NONE = 0,
            AX_ILA_INDIRECTCHILDIDS = 1,
            AX_ILA_ACTIONSIDS = 29,
            AX_ILA_CONTROLSIDS = 2,
            AX_ILA_DETAILSIDS = 3,
            AX_ILA_DESCRIBEDBYIDS = 4,
            AX_ILA_FLOWTOIDS = 5,
            AX_ILA_LABELLEDBYIDS = 6,
            AX_ILA_RADIOGROUPIDS = 7,
            AX_ILA_MARKERTYPES = 8,
            AX_ILA_MARKERSTARTS = 9,
            AX_ILA_MARKERENDS = 10,
            AX_ILA_CHARACTEROFFSETS = 11,
            AX_ILA_LINESTARTS = 12,
            AX_ILA_WORDSTARTS = 13,
            AX_ILA_WORDENDS = 14,
            AX_ILA_CUSTOMACTIONIDS = 15,
            AX_ILA_CARETBOUNDS = 16,
            AX_ILA_LINEENDS = 17,
            AX_ILA_SENTENCESTARTS = 18,
            AX_ILA_SENTENCEENDS = 19,
            AX_ILA_HIGHLIGHTTYPES = 20,
            AX_ILA_TEXTOPERATIONSTARTANCHORIDS = 21,
            AX_ILA_TEXTOPERATIONSTARTOFFSETS = 22,
            AX_ILA_TEXTOPERATIONENDANCHORIDS = 23,
            AX_ILA_TEXTOPERATIONENDOFFSETS = 24,
            AX_ILA_TEXTOPERATIONS = 25,
            AX_ILA_ERRORMESSAGEIDS = 26,
            AX_ILA_ARIANOTIFICATIONINTERRUPTPROPERTIES = 27,
            AX_ILA_ARIANOTIFICATIONPRIORITYPROPERTIES = 28
        }

        /**
         * AX StringList attribute enum.
         * Next ID: 5
         */
        enum AXStringListAttribute {
            AX_SLA_NONE = 0,
            AX_SLA_CUSTOMACTIONDESCRIPTIONS = 1,
            AX_SLA_ARIANOTIFICATIONANNOUNCEMENTS = 2,
            AX_SLA_ARIANOTIFICATIONTYPES = 3,
            AX_SLA_TEXTOPERATIONREPLACEMENTSTRINGS = 4
        }

        /**
         * This will be updated when there is a significant change in the parsing logic.
         * Next ID: 3
         */
        enum AnnotatedPageContentVersion {
            ANNOTATED_PAGE_CONTENT_VERSION_UNKNOWN = 0,
            ANNOTATED_PAGE_CONTENT_VERSION_1_0 = 1,
            ANNOTATED_PAGE_CONTENT_VERSION_ONLY_ACTIONABLE_ELEMENTS_1_0 = 2
        }

        /**
         * The extraction on the client can be configured to a specific mode. This
         * tracks the mode used to extract this proto.
         */
        enum AnnotatedPageContentMode {
            ANNOTATED_PAGE_CONTENT_MODE_DEFAULT = 0,
            ANNOTATED_PAGE_CONTENT_MODE_ACTIONABLE_ELEMENTS = 1
        }

        /**
         * Indicates the structure of the ContentNode. Suggests which type of
         * content_data will be found in the ContentNode.
         * When adding new types, please also update AIPageContentAttributeType in
         * third_party/blink/public/mojom/content_extraction/ai_page_content.mojom.
         * See crrev.com/c/6072788 for an example.
         * Next ID: 28
         */
        enum ContentAttributeType {
            CONTENT_ATTRIBUTE_UNKNOWN = 0,
            CONTENT_ATTRIBUTE_ROOT = 1,
            CONTENT_ATTRIBUTE_CONTAINER = 2,
            CONTENT_ATTRIBUTE_IFRAME = 3,
            CONTENT_ATTRIBUTE_PARAGRAPH = 4,
            CONTENT_ATTRIBUTE_HEADING = 5,
            CONTENT_ATTRIBUTE_TEXT = 20,
            CONTENT_ATTRIBUTE_ANCHOR = 22,
            CONTENT_ATTRIBUTE_IMAGE = 9,
            CONTENT_ATTRIBUTE_SVG_ROOT = 25,
            CONTENT_ATTRIBUTE_CANVAS = 26,
            CONTENT_ATTRIBUTE_VIDEO = 27,
            CONTENT_ATTRIBUTE_ORDERED_LIST = 6,
            CONTENT_ATTRIBUTE_UNORDERED_LIST = 7,
            CONTENT_ATTRIBUTE_LIST_ITEM = 23,
            CONTENT_ATTRIBUTE_FORM = 8,
            CONTENT_ATTRIBUTE_FORM_CONTROL = 24,
            CONTENT_ATTRIBUTE_TABLE = 10,
            CONTENT_ATTRIBUTE_TABLE_ROW = 21,
            CONTENT_ATTRIBUTE_TABLE_CELL = 11
        }

        /**
         * The reason why a node is clickable.
         * Next ID: 17
         */
        enum ClickabilityReason {
            CLICKABILITY_REASON_CLICKABLE_CONTROL = 0,
            CLICKABILITY_REASON_CLICK_HANDLER = 1,
            CLICKABILITY_REASON_MOUSE_EVENTS = 2,
            CLICKABILITY_REASON_KEY_EVENTS = 3,
            CLICKABILITY_REASON_EDITABLE = 4,
            CLICKABILITY_REASON_CURSOR_POINTER = 5,
            CLICKABILITY_REASON_ARIA_ROLE = 6,
            CLICKABILITY_REASON_ARIA_HAS_POPUP = 7,
            CLICKABILITY_REASON_ARIA_EXPANDED_TRUE = 8,
            CLICKABILITY_REASON_ARIA_EXPANDED_FALSE = 9,
            CLICKABILITY_REASON_TAB_INDEX = 10,
            CLICKABILITY_REASON_AUTOCOMPLETE = 11,
            CLICKABILITY_REASON_MOUSE_CLICK = 12,
            CLICKABILITY_REASON_MOUSE_HOVER = 13,
            CLICKABILITY_REASON_HOVER_PSEUDO_CLASS = 14,
            CLICKABILITY_REASON_ARIA_TOGGLE = 15,
            CLICKABILITY_REASON_ARIA_SELECTABLE = 16
        }

        /**
         * Provides hints that indicate that interaction with this node is disabled.
         * Next ID: 6
         */
        enum InteractionDisabledReason {
            INTERACTION_DISABLED_REASON_UNSPECIFIED = 0,
            INTERACTION_DISABLED_REASON_DISABLED = 1,
            INTERACTION_DISABLED_REASON_ARIA_DISABLED = 2,
            INTERACTION_DISABLED_REASON_CURSOR_NOT_ALLOWED = 3,
            INTERACTION_DISABLED_REASON_ARIA_HIDDEN = 4,
            INTERACTION_DISABLED_REASON_ARIA_ROLE_PRESENTATIONAL = 5
        }

        /** Next ID: 5 */
        enum TextSize {
            TEXT_SIZE_M_DEFAULT = 0,
            TEXT_SIZE_XS = 1,
            TEXT_SIZE_S = 2,
            TEXT_SIZE_L = 3,
            TEXT_SIZE_XL = 4
        }

        /**
         * The relationship between the linked URL and the current document.
         * https://html.spec.whatwg.org/multipage/links.html#linkTypes
         */
        enum AnchorRel {
            ANCHOR_REL_UNKNOWN = 0,
            ANCHOR_REL_NO_REFERRER = 1,
            ANCHOR_REL_NO_OPENER = 2,
            ANCHOR_REL_OPENER = 3,
            ANCHOR_REL_PRIVACY_POLICY = 4,
            ANCHOR_REL_TERMS_OF_SERVICE = 5
        }

        /**
         * Matches FormControlType in mojo, but off by one, because this list contains
         * an "UNSPECIFIED" value at 0.
         * https://source.chromium.org/chromium/chromium/src/+/main:components/autofill/core/common/mojom/autofill_types.mojom;l=17;drc=105770df485ace262780d95126bb60b1a16ec340;bpv=1;bpt=1
         * Next ID: 34
         */
        enum FormControlType {
            FORM_CONTROL_TYPE_UNSPECIFIED = 0,
            FORM_CONTROL_TYPE_CONTENT_EDITABLE = 1,
            FORM_CONTROL_TYPE_INPUT_CHECKBOX = 2,
            FORM_CONTROL_TYPE_INPUT_EMAIL = 3,
            FORM_CONTROL_TYPE_INPUT_MONTH = 4,
            FORM_CONTROL_TYPE_INPUT_NUMBER = 5,
            FORM_CONTROL_TYPE_INPUT_PASSWORD = 6,
            FORM_CONTROL_TYPE_INPUT_RADIO = 7,
            FORM_CONTROL_TYPE_INPUT_SEARCH = 8,
            FORM_CONTROL_TYPE_INPUT_TELEPHONE = 9,
            FORM_CONTROL_TYPE_INPUT_TEXT = 10,
            FORM_CONTROL_TYPE_INPUT_URL = 11,
            FORM_CONTROL_TYPE_SELECT_ONE = 12,
            FORM_CONTROL_TYPE_SELECT_MULTIPLE = 13,
            FORM_CONTROL_TYPE_TEXT_AREA = 15,
            FORM_CONTROL_TYPE_BUTTON_BUTTON = 16,
            FORM_CONTROL_TYPE_BUTTON_SUBMIT = 17,
            FORM_CONTROL_TYPE_BUTTON_RESET = 18,
            FORM_CONTROL_TYPE_BUTTON_POPOVER = 19,
            FORM_CONTROL_TYPE_FIELDSET = 20,
            FORM_CONTROL_TYPE_INPUT_BUTTON = 21,
            FORM_CONTROL_TYPE_INPUT_COLOR = 22,
            FORM_CONTROL_TYPE_INPUT_DATE = 23,
            FORM_CONTROL_TYPE_INPUT_DATETIME_LOCAL = 24,
            FORM_CONTROL_TYPE_INPUT_FILE = 25,
            FORM_CONTROL_TYPE_INPUT_HIDDEN = 26,
            FORM_CONTROL_TYPE_INPUT_IMAGE = 27,
            FORM_CONTROL_TYPE_INPUT_RANGE = 28,
            FORM_CONTROL_TYPE_INPUT_RESET = 29,
            FORM_CONTROL_TYPE_INPUT_SUBMIT = 30,
            FORM_CONTROL_TYPE_INPUT_TIME = 31,
            FORM_CONTROL_TYPE_INPUT_WEEK = 32,
            FORM_CONTROL_TYPE_OUTPUT = 33
        }

        /** RedactionDecision enum. */
        enum RedactionDecision {
            REDACTION_DECISION_NO_REDACTION_NECESSARY = 0,
            REDACTION_DECISION_UNREDACTED_EMPTY_PASSWORD = 1,
            REDACTION_DECISION_REDACTED_HAS_BEEN_PASSWORD = 2,
            REDACTION_DECISION_UNREDACTED_EMPTY_PAYMENT_FIELD = 3,
            REDACTION_DECISION_REDACTED_IS_SENSITIVE_PAYMENT_FIELD = 4,
            REDACTION_DECISION_UNREDACTED_EMPTY_CUSTOM_PASSWORD = 5,
            REDACTION_DECISION_REDACTED_CUSTOM_PASSWORD_CSS = 6,
            REDACTION_DECISION_REDACTED_CUSTOM_PASSWORD_JS = 7,
            REDACTION_DECISION_REDACTED_IS_OTP = 8,
            REDACTION_DECISION_UNREDACTED_EMPTY_OTP_FIELD = 9
        }

        /** The type of data that can be autofilled into a form. */
        enum CoarseAutofillFieldType {
            COARSE_AUTOFILL_FIELD_TYPE_UNSUPPORTED = 0,
            COARSE_AUTOFILL_FIELD_TYPE_ADDRESS = 1,
            COARSE_AUTOFILL_FIELD_TYPE_CREDIT_CARD = 2,
            COARSE_AUTOFILL_FIELD_TYPE_OTP = 3
        }

        /**
         * Indicates the type of media in the media data.
         * Next ID: 3
         */
        enum MediaDataType {
            MEDIA_DATA_TYPE_UNKNOWN = 0,
            MEDIA_DATA_TYPE_VIDEO = 1,
            MEDIA_DATA_TYPE_AUDIO = 2
        }

        /** TableRowType enum. */
        enum TableRowType {
            TABLE_ROW_TYPE_UNKNOWN = 0,
            TABLE_ROW_TYPE_HEADER = 1,
            TABLE_ROW_TYPE_BODY = 2,
            TABLE_ROW_TYPE_FOOTER = 3
        }

        /**
         * Indicates the semantic role of the content. These can come from the aria
         * role, the html tag, or are assumed from some properties of the page.
         * When adding new roles, please also update AIPageContentAnnotatedRole in
         * third_party/blink/public/mojom/content_extraction/ai_page_content.mojom.
         * Next ID: 15
         */
        enum AnnotatedRole {
            ANNOTATED_ROLE_UNKNOWN = 0,
            ANNOTATED_ROLE_HEADER = 5,
            ANNOTATED_ROLE_NAV = 6,
            ANNOTATED_ROLE_SEARCH = 7,
            ANNOTATED_ROLE_MAIN = 8,
            ANNOTATED_ROLE_ARTICLE = 9,
            ANNOTATED_ROLE_SECTION = 10,
            ANNOTATED_ROLE_ASIDE = 11,
            ANNOTATED_ROLE_FOOTER = 12,
            ANNOTATED_ROLE_CONTENT_HIDDEN = 13,
            ANNOTATED_ROLE_PAID_CONTENT = 14
        }

        /**
         * Whether or not status of the model's output is a success (i.e "is good") or
         * is a failure (i.e "is bad").
         * Next ID: 3
         */
        enum FinalModelStatus {
            FINAL_MODEL_STATUS_UNSPECIFIED = 0,
            FINAL_MODEL_STATUS_SUCCESS = 1,
            FINAL_MODEL_STATUS_FAILURE = 2
        }

        /** Next ID: 3 */
        enum UserFeedback {
            USER_FEEDBACK_UNSPECIFIED = 0,
            USER_FEEDBACK_THUMBS_DOWN = 1,
            USER_FEEDBACK_THUMBS_UP = 2
        }

        /**
         * The platform for the user's Chrome on which the request was made. Roughly
         * matches the same platforms that are available via UMA.
         */
        enum ChromePlatform {
            CHROME_PLATFORM_UNKNOWN = 0,
            CHROME_PLATFORM_ANDROID = 1,
            CHROME_PLATFORM_CHROMEOS = 2,
            CHROME_PLATFORM_IOS = 3,
            CHROME_PLATFORM_LINUX = 4,
            CHROME_PLATFORM_MAC = 5,
            CHROME_PLATFORM_WINDOWS = 6
        }
    }
}
