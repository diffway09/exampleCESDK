/// <reference path="android-declarations.d.ts"/>

declare module ly {
	export module img {
		export module engine {
			export class Asset {
				public static class: java.lang.Class<ly.img.engine.Asset>;
				public component6(): java.util.List<string>;
				public component9(): ly.img.engine.AssetCredits;
				public getId(): string;
				public copy(param0: string, param1: ly.img.engine.AssetContext, param2: string, param3: string, param4: java.util.List<string>, param5: java.util.List<string>, param6: java.util.Map<string,string>, param7: ly.img.engine.AssetPayload, param8: ly.img.engine.AssetCredits, param9: ly.img.engine.AssetLicense, param10: ly.img.engine.AssetUTM): ly.img.engine.Asset;
				public component2(): ly.img.engine.AssetContext;
				public getLabel(): string;
				public constructor(param0: string, param1: ly.img.engine.AssetContext, param2: string, param3: string, param4: java.util.List<string>, param5: java.util.List<string>, param6: java.util.Map<string,string>, param7: ly.img.engine.AssetPayload, param8: ly.img.engine.AssetCredits, param9: ly.img.engine.AssetLicense, param10: ly.img.engine.AssetUTM);
				public component7(): java.util.Map<string,string>;
				public hashCode(): number;
				public getLicense(): ly.img.engine.AssetLicense;
				public component10(): ly.img.engine.AssetLicense;
				public equals(param0: any): boolean;
				public component8(): ly.img.engine.AssetPayload;
				public getGroups(): java.util.List<string>;
				public getContext(): ly.img.engine.AssetContext;
				public getPayload(): ly.img.engine.AssetPayload;
				public component1(): string;
				public component4(): string;
				public getLocale(): string;
				public toString(): string;
				public getCredits(): ly.img.engine.AssetCredits;
				public getTags(): java.util.List<string>;
				public component5(): java.util.List<string>;
				public component3(): string;
				public getMeta(): java.util.Map<string,string>;
				public component11(): ly.img.engine.AssetUTM;
				public getUtm(): ly.img.engine.AssetUTM;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class AssetApi {
				public static class: java.lang.Class<ly.img.engine.AssetApi>;
				/**
				 * Constructs a new instance of the ly.img.engine.AssetApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					addSource(param0: ly.img.engine.AssetSource): void;
					addLocalSource(param0: string, param1: java.util.List<string>, param2: any<any,any,any>, param3: any<any,any,any,any>): void;
					removeSource(param0: string): void;
					findAllSources(): java.util.List<string>;
					addAsset(param0: string, param1: ly.img.engine.AssetDefinition): void;
					removeAsset(param0: string, param1: string): void;
					getSourceSupportedMimeTypes(param0: string): java.util.List<string>;
					findAssets(param0: string, param1: ly.img.engine.FindAssetsQuery, param2: any): any;
					getGroups(param0: string, param1: any): any;
					getCredits(param0: string): ly.img.engine.AssetCredits;
					getLicense(param0: string): ly.img.engine.AssetLicense;
					applyAssetSourceAsset(param0: string, param1: ly.img.engine.Asset, param2: any): any;
					applyAssetSourceAsset(param0: string, param1: ly.img.engine.Asset, param2: number, param3: any): any;
					defaultApplyAsset(param0: ly.img.engine.Asset, param1: any): any;
					defaultApplyAsset(param0: ly.img.engine.Asset, param1: number, param2: any): any;
					onAssetSourceAdded(): kotlinx.coroutines.flow.Flow<string>;
					onAssetSourceRemoved(): kotlinx.coroutines.flow.Flow<string>;
				});
				public constructor();
				public getGroups(param0: string, param1: any): any;
				public addLocalSource(param0: string, param1: java.util.List<string>, param2: any<any,any,any>, param3: any<any,any,any,any>): void;
				public findAssets(param0: string, param1: ly.img.engine.FindAssetsQuery, param2: any): any;
				public getCredits(param0: string): ly.img.engine.AssetCredits;
				public onAssetSourceAdded(): kotlinx.coroutines.flow.Flow<string>;
				public getSourceSupportedMimeTypes(param0: string): java.util.List<string>;
				public applyAssetSourceAsset(param0: string, param1: ly.img.engine.Asset, param2: number, param3: any): any;
				public removeAsset(param0: string, param1: string): void;
				public getLicense(param0: string): ly.img.engine.AssetLicense;
				public addSource(param0: ly.img.engine.AssetSource): void;
				public onAssetSourceRemoved(): kotlinx.coroutines.flow.Flow<string>;
				public defaultApplyAsset(param0: ly.img.engine.Asset, param1: number, param2: any): any;
				public defaultApplyAsset(param0: ly.img.engine.Asset, param1: any): any;
				public applyAssetSourceAsset(param0: string, param1: ly.img.engine.Asset, param2: any): any;
				public removeSource(param0: string): void;
				public findAllSources(): java.util.List<string>;
				public addAsset(param0: string, param1: ly.img.engine.AssetDefinition): void;
			}
			export module AssetApi {
				export class DefaultImpls {
					public static class: java.lang.Class<ly.img.engine.AssetApi.DefaultImpls>;
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class AssetColor {
				public static class: java.lang.Class<ly.img.engine.AssetColor>;
				/**
				 * Constructs a new instance of the ly.img.engine.AssetColor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
			export module AssetColor {
				export class CMYK extends ly.img.engine.AssetColor.Representation {
					public static class: java.lang.Class<ly.img.engine.AssetColor.CMYK>;
					public copy(param0: number, param1: number, param2: number, param3: number): ly.img.engine.AssetColor.CMYK;
					public component3(): number;
					public getY(): number;
					public constructor(param0: number, param1: number, param2: number, param3: number);
					public equals(param0: any): boolean;
					public getK(): number;
					public toString(): string;
					public component4(): number;
					public component1(): number;
					public component2(): number;
					public getM(): number;
					public getC(): number;
					public hashCode(): number;
				}
				export class RGB extends ly.img.engine.AssetColor.Representation {
					public static class: java.lang.Class<ly.img.engine.AssetColor.RGB>;
					public equals(param0: any): boolean;
					public toString(): string;
					public getR(): number;
					public component3(): number;
					public constructor(param0: number, param1: number, param2: number);
					public component1(): number;
					public component2(): number;
					public copy(param0: number, param1: number, param2: number): ly.img.engine.AssetColor.RGB;
					public getB(): number;
					public hashCode(): number;
					public getG(): number;
				}
				export class Representation extends ly.img.engine.AssetColor {
					public static class: java.lang.Class<ly.img.engine.AssetColor.Representation>;
					/**
					 * Constructs a new instance of the ly.img.engine.AssetColor$Representation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class SpotColor extends ly.img.engine.AssetColor {
					public static class: java.lang.Class<ly.img.engine.AssetColor.SpotColor>;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): string;
					public getName(): string;
					public copy(param0: string, param1: ly.img.engine.AssetColor.Representation, param2: string): ly.img.engine.AssetColor.SpotColor;
					public component3(): string;
					public constructor(param0: string, param1: ly.img.engine.AssetColor.Representation, param2: string);
					public getExternalReference(): string;
					public hashCode(): number;
					public getRepresentation(): ly.img.engine.AssetColor.Representation;
					public component2(): ly.img.engine.AssetColor.Representation;
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class AssetContext {
				public static class: java.lang.Class<ly.img.engine.AssetContext>;
				public component1(): string;
				public hashCode(): number;
				public copy(param0: string): ly.img.engine.AssetContext;
				public equals(param0: any): boolean;
				public getSourceId(): string;
				public toString(): string;
				public constructor(param0: string);
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class AssetCredits {
				public static class: java.lang.Class<ly.img.engine.AssetCredits>;
				public component2(): globalAndroid.net.Uri;
				public getUri(): globalAndroid.net.Uri;
				public copy(param0: string, param1: globalAndroid.net.Uri): ly.img.engine.AssetCredits;
				public component1(): string;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getName(): string;
				public toString(): string;
				public constructor(param0: string, param1: globalAndroid.net.Uri);
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class AssetDefinition {
				public static class: java.lang.Class<ly.img.engine.AssetDefinition>;
				public getPayload(): ly.img.engine.AssetPayload;
				public getId(): string;
				public component1(): string;
				public component4(): java.util.List<string>;
				public getLabel(): java.util.Map<string,string>;
				public getTags(): java.util.Map<string,java.util.List<string>>;
				public toString(): string;
				public component7(): ly.img.engine.AssetCredits;
				public getCredits(): ly.img.engine.AssetCredits;
				public component8(): ly.img.engine.AssetLicense;
				public component2(): java.util.Map<string,string>;
				public component5(): java.util.Map<string,string>;
				public hashCode(): number;
				public copy(param0: string, param1: java.util.Map<string,string>, param2: java.util.Map<string,any>, param3: java.util.List<string>, param4: java.util.Map<string,string>, param5: ly.img.engine.AssetPayload, param6: ly.img.engine.AssetCredits, param7: ly.img.engine.AssetLicense, param8: ly.img.engine.AssetUTM): ly.img.engine.AssetDefinition;
				public getLicense(): ly.img.engine.AssetLicense;
				public component6(): ly.img.engine.AssetPayload;
				public equals(param0: any): boolean;
				public getMeta(): java.util.Map<string,string>;
				public component9(): ly.img.engine.AssetUTM;
				public constructor(param0: string, param1: java.util.Map<string,string>, param2: java.util.Map<string,any>, param3: java.util.List<string>, param4: java.util.Map<string,string>, param5: ly.img.engine.AssetPayload, param6: ly.img.engine.AssetCredits, param7: ly.img.engine.AssetLicense, param8: ly.img.engine.AssetUTM);
				public getUtm(): ly.img.engine.AssetUTM;
				public component3(): java.util.Map<string,java.util.List<string>>;
				public getGroups(): java.util.List<string>;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class AssetLicense {
				public static class: java.lang.Class<ly.img.engine.AssetLicense>;
				public component2(): globalAndroid.net.Uri;
				public getUri(): globalAndroid.net.Uri;
				public component1(): string;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getName(): string;
				public toString(): string;
				public constructor(param0: string, param1: globalAndroid.net.Uri);
				public copy(param0: string, param1: globalAndroid.net.Uri): ly.img.engine.AssetLicense;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class AssetPayload {
				public static class: java.lang.Class<ly.img.engine.AssetPayload>;
				public constructor(param0: ly.img.engine.AssetColor, param1: java.util.List<ly.img.engine.Source>, param2: ly.img.engine.Typeface);
				public component1(): ly.img.engine.AssetColor;
				public copy(param0: ly.img.engine.AssetColor, param1: java.util.List<ly.img.engine.Source>, param2: ly.img.engine.Typeface): ly.img.engine.AssetPayload;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public component2(): java.util.List<ly.img.engine.Source>;
				public getColor(): ly.img.engine.AssetColor;
				public getSourceSet(): java.util.List<ly.img.engine.Source>;
				public component3(): ly.img.engine.Typeface;
				public toString(): string;
				public getTypeface(): ly.img.engine.Typeface;
				public constructor();
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export abstract class AssetSource {
				public static class: java.lang.Class<ly.img.engine.AssetSource>;
				public applyAsset(param0: ly.img.engine.Asset, param1: any): any;
				public getSupportedMimeTypes(): java.util.List<string>;
				public release$ubq_android_engine_release(): void;
				public addAsset(param0: ly.img.engine.AssetDefinition): void;
				public removeAsset(param0: string): void;
				public getLicense(): ly.img.engine.AssetLicense;
				public getSourceId(): string;
				public getGroups(param0: any): any;
				public applyAsset(param0: ly.img.engine.Asset, param1: number, param2: any): any;
				public constructor(param0: string);
				public getCredits(): ly.img.engine.AssetCredits;
				public findAssets(param0: ly.img.engine.FindAssetsQuery, param1: any): any;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class AssetUTM {
				public static class: java.lang.Class<ly.img.engine.AssetUTM>;
				public copy(param0: string, param1: string): ly.img.engine.AssetUTM;
				public getMedium(): string;
				public component1(): string;
				public hashCode(): number;
				public component2(): string;
				public equals(param0: any): boolean;
				public getSource(): string;
				public toString(): string;
				public constructor(param0: string, param1: string);
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class AudioContext {
				public static class: java.lang.Class<ly.img.engine.AudioContext>;
				public static NONE: ly.img.engine.AudioContext;
				public static AUTO: ly.img.engine.AudioContext;
				public static valueOf(param0: string): ly.img.engine.AudioContext;
				public static values(): androidNative.Array<ly.img.engine.AudioContext>;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class AudioThumbnailResult {
				public static class: java.lang.Class<ly.img.engine.AudioThumbnailResult>;
				public constructor(param0: number, param1: java.util.List<java.lang.Float>);
				public getChunkIndex(): number;
				public getSamples(): java.util.List<java.lang.Float>;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class BlendMode {
				public static class: java.lang.Class<ly.img.engine.BlendMode>;
				public static PASS_THROUGH: ly.img.engine.BlendMode;
				public static NORMAL: ly.img.engine.BlendMode;
				public static DARKEN: ly.img.engine.BlendMode;
				public static MULTIPLY: ly.img.engine.BlendMode;
				public static COLOR_BURN: ly.img.engine.BlendMode;
				public static LIGHTEN: ly.img.engine.BlendMode;
				public static SCREEN: ly.img.engine.BlendMode;
				public static COLOR_DODGE: ly.img.engine.BlendMode;
				public static OVERLAY: ly.img.engine.BlendMode;
				public static SOFT_LIGHT: ly.img.engine.BlendMode;
				public static HARD_LIGHT: ly.img.engine.BlendMode;
				public static DIFFERENCE: ly.img.engine.BlendMode;
				public static EXCLUSION: ly.img.engine.BlendMode;
				public static HUE: ly.img.engine.BlendMode;
				public static SATURATION: ly.img.engine.BlendMode;
				public static COLOR: ly.img.engine.BlendMode;
				public static LUMINOSITY: ly.img.engine.BlendMode;
				public static values(): androidNative.Array<ly.img.engine.BlendMode>;
				public getValue(): number;
				public static valueOf(param0: string): ly.img.engine.BlendMode;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class BlockApi {
				public static class: java.lang.Class<ly.img.engine.BlockApi>;
				/**
				 * Constructs a new instance of the ly.img.engine.BlockApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					export(param0: number, param1: ly.img.engine.MimeType, param2: ly.img.engine.ExportOptions, param3: any<any,any,any>, param4: any): any;
					exportWithColorMask(param0: number, param1: ly.img.engine.MimeType, param2: ly.img.engine.RGBAColor, param3: ly.img.engine.ExportOptions, param4: any<any,any,any>, param5: any): any;
					exportVideo(param0: number, param1: number, param2: number, param3: ly.img.engine.MimeType, param4: any<any,any>, param5: ly.img.engine.ExportVideoOptions, param6: any<any,any,any>, param7: any): any;
					loadFromString(param0: string, param1: any): any;
					loadFromArchive(param0: globalAndroid.net.Uri, param1: any): any;
					saveToString(param0: java.util.List<java.lang.Integer>, param1: java.util.List<string>, param2: any): any;
					saveToArchive(param0: java.util.List<java.lang.Integer>, param1: any): any;
					create(param0: string): number;
					create(param0: ly.img.engine.DesignBlockType): number;
					createFill(param0: string): number;
					createFill(param0: ly.img.engine.FillType): number;
					getType(param0: number): string;
					getKind(param0: number): string;
					setKind(param0: number, param1: string): void;
					select(param0: number): void;
					setSelected(param0: number, param1: boolean): void;
					isSelected(param0: number): boolean;
					findAllSelected(): java.util.List<java.lang.Integer>;
					onSelectionChanged(): kotlinx.coroutines.flow.Flow<any>;
					onClicked(): kotlinx.coroutines.flow.Flow<java.lang.Integer>;
					isGroupable(param0: java.util.List<java.lang.Integer>): boolean;
					group(param0: java.util.List<java.lang.Integer>): number;
					ungroup(param0: number): void;
					enterGroup(param0: number): void;
					exitGroup(param0: number): void;
					isCombinable(param0: java.util.List<java.lang.Integer>): boolean;
					combine(param0: java.util.List<java.lang.Integer>, param1: ly.img.engine.BooleanOperation): number;
					setName(param0: number, param1: string): void;
					getName(param0: number): string;
					getUUID(param0: number): string;
					findByName(param0: string): java.util.List<java.lang.Integer>;
					findByType(param0: string): java.util.List<java.lang.Integer>;
					findByType(param0: ly.img.engine.DesignBlockType): java.util.List<java.lang.Integer>;
					findByType(param0: ly.img.engine.ShapeType): java.util.List<java.lang.Integer>;
					findByType(param0: ly.img.engine.EffectType): java.util.List<java.lang.Integer>;
					findByType(param0: ly.img.engine.BlurType): java.util.List<java.lang.Integer>;
					findByKind(param0: string): java.util.List<java.lang.Integer>;
					findAll(): java.util.List<java.lang.Integer>;
					findAllPlaceholders(): java.util.List<java.lang.Integer>;
					createShape(param0: string): number;
					createShape(param0: ly.img.engine.ShapeType): number;
					hasShape(param0: number): boolean;
					supportsShape(param0: number): boolean;
					getShape(param0: number): number;
					setShape(param0: number, param1: number): void;
					isVisible(param0: number): boolean;
					setVisible(param0: number, param1: boolean): void;
					isClipped(param0: number): boolean;
					setClipped(param0: number, param1: boolean): void;
					isTransformLocked(param0: number): boolean;
					setTransformLocked(param0: number, param1: boolean): void;
					getPositionX(param0: number): number;
					getPositionXMode(param0: number): ly.img.engine.PositionMode;
					getPositionY(param0: number): number;
					getPositionYMode(param0: number): ly.img.engine.PositionMode;
					setPositionX(param0: number, param1: number): void;
					setPositionXMode(param0: number, param1: ly.img.engine.PositionMode): void;
					setPositionY(param0: number, param1: number): void;
					setPositionYMode(param0: number, param1: ly.img.engine.PositionMode): void;
					setAlwaysOnTop(param0: number, param1: boolean): void;
					setAlwaysOnBottom(param0: number, param1: boolean): void;
					isAlwaysOnTop(param0: number): boolean;
					isAlwaysOnBottom(param0: number): boolean;
					bringToFront(param0: number): void;
					sendToBack(param0: number): void;
					bringForward(param0: number): void;
					sendBackward(param0: number): void;
					getRotation(param0: number): number;
					setRotation(param0: number, param1: number): void;
					isFlipHorizontal(param0: number): boolean;
					isFlipVertical(param0: number): boolean;
					setFlipHorizontal(param0: number, param1: boolean): void;
					setFlipVertical(param0: number, param1: boolean): void;
					hasContentFillMode(param0: number): boolean;
					supportsContentFillMode(param0: number): boolean;
					getWidth(param0: number): number;
					getWidthMode(param0: number): ly.img.engine.SizeMode;
					getHeight(param0: number): number;
					getHeightMode(param0: number): ly.img.engine.SizeMode;
					getContentFillMode(param0: number): ly.img.engine.ContentFillMode;
					setWidth(param0: number, param1: number): void;
					setWidthMode(param0: number, param1: ly.img.engine.SizeMode): void;
					setHeight(param0: number, param1: number): void;
					setHeightMode(param0: number, param1: ly.img.engine.SizeMode): void;
					setContentFillMode(param0: number, param1: ly.img.engine.ContentFillMode): void;
					getFrameX(param0: number): number;
					getFrameY(param0: number): number;
					getFrameWidth(param0: number): number;
					getFrameHeight(param0: number): number;
					duplicate(param0: number): number;
					destroy(param0: number): void;
					isValid(param0: number): boolean;
					getParent(param0: number): java.lang.Integer;
					getChildren(param0: number): java.util.List<java.lang.Integer>;
					insertChild(param0: number, param1: number, param2: number): void;
					appendChild(param0: number, param1: number): void;
					referencesAnyVariables(param0: number): boolean;
					getGlobalBoundingBoxX(param0: number): number;
					getGlobalBoundingBoxY(param0: number): number;
					getGlobalBoundingBoxWidth(param0: number): number;
					getGlobalBoundingBoxHeight(param0: number): number;
					getScreenSpaceBoundingBoxRect(param0: java.util.List<java.lang.Integer>): globalAndroid.graphics.RectF;
					alignHorizontally(param0: java.util.List<java.lang.Integer>, param1: ly.img.engine.HorizontalBlockAlignment): void;
					alignVertically(param0: java.util.List<java.lang.Integer>, param1: ly.img.engine.VerticalBlockAlignment): void;
					isAlignable(param0: java.util.List<java.lang.Integer>): boolean;
					distributeHorizontally(param0: java.util.List<java.lang.Integer>): void;
					distributeVertically(param0: java.util.List<java.lang.Integer>): void;
					isDistributable(param0: java.util.List<java.lang.Integer>): boolean;
					fillParent(param0: number): void;
					resizeContentAware(param0: java.util.List<java.lang.Integer>, param1: number, param2: number): void;
					scale(param0: number, param1: number, param2: number, param3: number): void;
					findAllProperties(param0: number): java.util.List<string>;
					isPropertyReadable(param0: string): boolean;
					isPropertyWriteable(param0: string): boolean;
					isPropertyWritable(param0: string): boolean;
					getPropertyType(param0: string): ly.img.engine.PropertyType;
					getEnumValues(param0: string): java.util.List<string>;
					setBoolean(param0: number, param1: string, param2: boolean): void;
					getBoolean(param0: number, param1: string): boolean;
					setInt(param0: number, param1: string, param2: number): void;
					getInt(param0: number, param1: string): number;
					setFloat(param0: number, param1: string, param2: number): void;
					getFloat(param0: number, param1: string): number;
					setString(param0: number, param1: string, param2: string): void;
					getString(param0: number, param1: string): string;
					setUri(param0: number, param1: string, param2: globalAndroid.net.Uri): void;
					getUri(param0: number, param1: string): globalAndroid.net.Uri;
					setColor(param0: number, param1: string, param2: ly.img.engine.Color): void;
					getColor(param0: number, param1: string): ly.img.engine.Color;
					setColorSpot(param0: number, param1: string, param2: string, param3: number): void;
					getColorSpotName(param0: number, param1: string): string;
					getColorSpotTint(param0: number, param1: string): number;
					setGradientColorStops(param0: number, param1: string, param2: java.util.List<ly.img.engine.GradientColorStop>): void;
					getGradientColorStops(param0: number, param1: string): java.util.List<ly.img.engine.GradientColorStop>;
					setEnum(param0: number, param1: string, param2: string): void;
					getEnum(param0: number, param1: string): string;
					setSourceSet(param0: number, param1: string, param2: java.util.List<ly.img.engine.Source>): void;
					getSourceSet(param0: number, param1: string): java.util.List<ly.img.engine.Source>;
					addImageFileURIToSourceSet(param0: number, param1: string, param2: string, param3: any): any;
					setDouble(param0: number, param1: string, param2: number): void;
					getDouble(param0: number, param1: string): number;
					hasCrop(param0: number): boolean;
					supportsCrop(param0: number): boolean;
					setCropScaleX(param0: number, param1: number): void;
					setCropScaleY(param0: number, param1: number): void;
					setCropRotation(param0: number, param1: number): void;
					setCropScaleRatio(param0: number, param1: number): void;
					setCropTranslationX(param0: number, param1: number): void;
					setCropTranslationY(param0: number, param1: number): void;
					flipCropHorizontal(param0: number): void;
					flipCropVertical(param0: number): void;
					resetCrop(param0: number): void;
					getCropScaleX(param0: number): number;
					getCropScaleY(param0: number): number;
					getCropRotation(param0: number): number;
					getCropScaleRatio(param0: number): number;
					getCropTranslationX(param0: number): number;
					getCropTranslationY(param0: number): number;
					adjustCropToFillFrame(param0: number, param1: number): void;
					hasOpacity(param0: number): boolean;
					supportsOpacity(param0: number): boolean;
					setOpacity(param0: number, param1: number): void;
					getOpacity(param0: number): number;
					hasBlendMode(param0: number): boolean;
					supportsBlendMode(param0: number): boolean;
					setBlendMode(param0: number, param1: ly.img.engine.BlendMode): void;
					getBlendMode(param0: number): ly.img.engine.BlendMode;
					createEffect(param0: string): number;
					createEffect(param0: ly.img.engine.EffectType): number;
					hasEffects(param0: number): boolean;
					supportsEffects(param0: number): boolean;
					getEffects(param0: number): java.util.List<java.lang.Integer>;
					insertEffect(param0: number, param1: number, param2: number): void;
					appendEffect(param0: number, param1: number): void;
					removeEffect(param0: number, param1: number): void;
					hasEffectEnabled(param0: number): boolean;
					setEffectEnabled(param0: number, param1: boolean): void;
					isEffectEnabled(param0: number): boolean;
					createBlur(param0: string): number;
					createBlur(param0: ly.img.engine.BlurType): number;
					hasBlur(param0: number): boolean;
					supportsBlur(param0: number): boolean;
					setBlur(param0: number, param1: number): void;
					getBlur(param0: number): number;
					setBlurEnabled(param0: number, param1: boolean): void;
					isBlurEnabled(param0: number): boolean;
					hasBackgroundColor(param0: number): boolean;
					supportsBackgroundColor(param0: number): boolean;
					setBackgroundColor(param0: number, param1: ly.img.engine.RGBAColor): void;
					getBackgroundColor(param0: number): ly.img.engine.RGBAColor;
					setBackgroundColorEnabled(param0: number, param1: boolean): void;
					isBackgroundColorEnabled(param0: number): boolean;
					hasStroke(param0: number): boolean;
					supportsStroke(param0: number): boolean;
					setStrokeEnabled(param0: number, param1: boolean): void;
					isStrokeEnabled(param0: number): boolean;
					setStrokeColor(param0: number, param1: ly.img.engine.Color): void;
					getStrokeColor(param0: number): ly.img.engine.Color;
					setStrokeWidth(param0: number, param1: number): void;
					getStrokeWidth(param0: number): number;
					setStrokeStyle(param0: number, param1: ly.img.engine.StrokeStyle): void;
					getStrokeStyle(param0: number): ly.img.engine.StrokeStyle;
					setStrokePosition(param0: number, param1: ly.img.engine.StrokePosition): void;
					getStrokePosition(param0: number): ly.img.engine.StrokePosition;
					setStrokeCornerGeometry(param0: number, param1: ly.img.engine.StrokeCornerGeometry): void;
					getStrokeCornerGeometry(param0: number): ly.img.engine.StrokeCornerGeometry;
					hasDropShadow(param0: number): boolean;
					supportsDropShadow(param0: number): boolean;
					setDropShadowEnabled(param0: number, param1: boolean): void;
					isDropShadowEnabled(param0: number): boolean;
					setDropShadowColor(param0: number, param1: ly.img.engine.Color): void;
					getDropShadowColor(param0: number): ly.img.engine.Color;
					setDropShadowOffsetX(param0: number, param1: number): void;
					getDropShadowOffsetX(param0: number): number;
					setDropShadowOffsetY(param0: number, param1: number): void;
					getDropShadowOffsetY(param0: number): number;
					setDropShadowBlurRadiusX(param0: number, param1: number): void;
					getDropShadowBlurRadiusX(param0: number): number;
					setDropShadowBlurRadiusY(param0: number, param1: number): void;
					getDropShadowBlurRadiusY(param0: number): number;
					setDropShadowClip(param0: number, param1: boolean): void;
					getDropShadowClip(param0: number): boolean;
					createCutoutFromBlocks(param0: java.util.List<java.lang.Integer>, param1: number, param2: number): number;
					createCutoutFromPath(param0: string): number;
					setSpotColorForCutoutType(param0: ly.img.engine.CutoutType, param1: string): void;
					getSpotColorForCutoutType(param0: ly.img.engine.CutoutType): string;
					createCutoutFromOperation(param0: java.util.List<java.lang.Integer>, param1: ly.img.engine.CutoutOperation): number;
					hasFill(param0: number): boolean;
					supportsFill(param0: number): boolean;
					isFillEnabled(param0: number): boolean;
					setFillEnabled(param0: number, param1: boolean): void;
					getFill(param0: number): number;
					setFill(param0: number, param1: number): void;
					setFillSolidColor(param0: number, param1: ly.img.engine.RGBAColor): void;
					getFillSolidColor(param0: number): ly.img.engine.RGBAColor;
					setPlaceholderEnabled(param0: number, param1: boolean): void;
					isPlaceholderEnabled(param0: number): boolean;
					hasPlaceholderBehavior(param0: number): boolean;
					supportsPlaceholderBehavior(param0: number): boolean;
					setPlaceholderBehaviorEnabled(param0: number, param1: boolean): void;
					isPlaceholderBehaviorEnabled(param0: number): boolean;
					hasPlaceholderControls(param0: number): boolean;
					supportsPlaceholderControls(param0: number): boolean;
					setPlaceholderControlsOverlayEnabled(param0: number, param1: boolean): void;
					isPlaceholderControlsOverlayEnabled(param0: number): boolean;
					setPlaceholderControlsButtonEnabled(param0: number, param1: boolean): void;
					isPlaceholderControlsButtonEnabled(param0: number): boolean;
					setMetadata(param0: number, param1: string, param2: string): void;
					getMetadata(param0: number, param1: string): string;
					hasMetadata(param0: number, param1: string): boolean;
					findAllMetadata(param0: number): java.util.List<string>;
					removeMetadata(param0: number, param1: string): void;
					setScopeEnabled(param0: number, param1: string, param2: boolean): void;
					isScopeEnabled(param0: number, param1: string): boolean;
					isAllowedByScope(param0: number, param1: string): boolean;
					hasDuration(param0: number): boolean;
					supportsDuration(param0: number): boolean;
					setDuration(param0: number, param1: number): void;
					getDuration(param0: number): number;
					hasTimeOffset(param0: number): boolean;
					supportsTimeOffset(param0: number): boolean;
					setTimeOffset(param0: number, param1: number): void;
					getTimeOffset(param0: number): number;
					hasTrim(param0: number): boolean;
					supportsTrim(param0: number): boolean;
					setTrimOffset(param0: number, param1: number): void;
					getTrimOffset(param0: number): number;
					setTrimLength(param0: number, param1: number): void;
					getTrimLength(param0: number): number;
					getTotalSceneDuration(param0: number): number;
					setPlaying(param0: number, param1: boolean): void;
					isPlaying(param0: number): boolean;
					hasPlaybackTime(param0: number): boolean;
					supportsPlaybackTime(param0: number): boolean;
					setPlaybackTime(param0: number, param1: number): void;
					getPlaybackTime(param0: number): number;
					isVisibleAtCurrentPlaybackTime(param0: number): boolean;
					setSoloPlaybackEnabled(param0: number, param1: boolean): void;
					isSoloPlaybackEnabled(param0: number): boolean;
					hasPlaybackControl(param0: number): boolean;
					supportsPlaybackControl(param0: number): boolean;
					setLooping(param0: number, param1: boolean): void;
					isLooping(param0: number): boolean;
					setMuted(param0: number, param1: boolean): void;
					isMuted(param0: number): boolean;
					setVolume(param0: number, param1: number): void;
					getVolume(param0: number): number;
					forceLoadAVResource(param0: number, param1: any): any;
					getAVResourceTotalDuration(param0: number): number;
					isAVResourceLoaded(param0: number): boolean;
					getVideoWidth(param0: number): number;
					getVideoHeight(param0: number): number;
					generateVideoThumbnailSequence(param0: number, param1: number, param2: number, param3: number, param4: number): kotlinx.coroutines.flow.Flow<ly.img.engine.VideoThumbnailResult>;
					generateAudioThumbnailSequence(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): kotlinx.coroutines.flow.Flow<ly.img.engine.AudioThumbnailResult>;
					setNativePixelBuffer(param0: number, param1: number, param2: number): number;
					replaceText(param0: number, param1: string, param2: number, param3: number): void;
					removeText(param0: number, param1: number, param2: number): void;
					setTextColor(param0: number, param1: ly.img.engine.Color, param2: number, param3: number): void;
					setTextCase(param0: number, param1: ly.img.engine.TextCase, param2: number, param3: number): void;
					getTextColors(param0: number, param1: number, param2: number): java.util.List<ly.img.engine.Color>;
					getTextFontWeights(param0: number, param1: number, param2: number): java.util.List<ly.img.engine.FontWeight>;
					getTextFontStyles(param0: number, param1: number, param2: number): java.util.List<ly.img.engine.FontStyle>;
					getTextCases(param0: number, param1: number, param2: number): java.util.List<ly.img.engine.TextCase>;
					getTextCursorRange(): any;
					canToggleBoldFont(param0: number, param1: number, param2: number): boolean;
					canToggleItalicFont(param0: number, param1: number, param2: number): boolean;
					toggleBoldFont(param0: number, param1: number, param2: number): void;
					toggleItalicFont(param0: number, param1: number, param2: number): void;
					setFont(param0: number, param1: globalAndroid.net.Uri, param2: ly.img.engine.Typeface): void;
					getTypeface(param0: number): ly.img.engine.Typeface;
					isIncludedInExport(param0: number): boolean;
					setIncludedInExport(param0: number, param1: boolean): void;
				});
				public constructor();
				public isClipped(param0: number): boolean;
				public findAllSelected(): java.util.List<java.lang.Integer>;
				public createEffect(param0: ly.img.engine.EffectType): number;
				public removeEffect(param0: number, param1: number): void;
				public findAllPlaceholders(): java.util.List<java.lang.Integer>;
				public addImageFileURIToSourceSet(param0: number, param1: string, param2: string, param3: any): any;
				public getRotation(param0: number): number;
				public setTransformLocked(param0: number, param1: boolean): void;
				public fillParent(param0: number): void;
				public setDropShadowOffsetY(param0: number, param1: number): void;
				public isValid(param0: number): boolean;
				public supportsShape(param0: number): boolean;
				public getVolume(param0: number): number;
				public export(param0: number, param1: ly.img.engine.MimeType, param2: ly.img.engine.ExportOptions, param3: any<any,any,any>, param4: any): any;
				public isPlaceholderControlsButtonEnabled(param0: number): boolean;
				public alignHorizontally(param0: java.util.List<java.lang.Integer>, param1: ly.img.engine.HorizontalBlockAlignment): void;
				public isDropShadowEnabled(param0: number): boolean;
				public getDropShadowColor(param0: number): ly.img.engine.Color;
				public getWidthMode(param0: number): ly.img.engine.SizeMode;
				public resetCrop(param0: number): void;
				public isPropertyReadable(param0: string): boolean;
				/** @deprecated */
				public hasPlaybackControl(param0: number): boolean;
				public isEffectEnabled(param0: number): boolean;
				public isMuted(param0: number): boolean;
				public getAVResourceTotalDuration(param0: number): number;
				public findByKind(param0: string): java.util.List<java.lang.Integer>;
				public setPositionY(param0: number, param1: number): void;
				public setTextCase(param0: number, param1: ly.img.engine.TextCase, param2: number, param3: number): void;
				public setDropShadowBlurRadiusY(param0: number, param1: number): void;
				public setBoolean(param0: number, param1: string, param2: boolean): void;
				public supportsBlendMode(param0: number): boolean;
				public getDropShadowBlurRadiusY(param0: number): number;
				public isCombinable(param0: java.util.List<java.lang.Integer>): boolean;
				public saveToArchive(param0: java.util.List<java.lang.Integer>, param1: any): any;
				public setCropScaleRatio(param0: number, param1: number): void;
				public getStrokeColor(param0: number): ly.img.engine.Color;
				public hasMetadata(param0: number, param1: string): boolean;
				public forceLoadAVResource(param0: number, param1: any): any;
				public isPlaceholderEnabled(param0: number): boolean;
				public getGradientColorStops(param0: number, param1: string): java.util.List<ly.img.engine.GradientColorStop>;
				/** @deprecated */
				public isPropertyWriteable(param0: string): boolean;
				public setCropScaleX(param0: number, param1: number): void;
				public setPlaceholderEnabled(param0: number, param1: boolean): void;
				public supportsCrop(param0: number): boolean;
				/** @deprecated */
				public createBlur(param0: string): number;
				public isSoloPlaybackEnabled(param0: number): boolean;
				public getPositionXMode(param0: number): ly.img.engine.PositionMode;
				public setWidthMode(param0: number, param1: ly.img.engine.SizeMode): void;
				public getPropertyType(param0: string): ly.img.engine.PropertyType;
				public removeText(param0: number, param1: number, param2: number): void;
				public createCutoutFromPath(param0: string): number;
				public getFloat(param0: number, param1: string): number;
				public resizeContentAware(param0: java.util.List<java.lang.Integer>, param1: number, param2: number): void;
				public isVisibleAtCurrentPlaybackTime(param0: number): boolean;
				public findByType(param0: ly.img.engine.DesignBlockType): java.util.List<java.lang.Integer>;
				public setRotation(param0: number, param1: number): void;
				public getParent(param0: number): java.lang.Integer;
				public isPlaceholderBehaviorEnabled(param0: number): boolean;
				/** @deprecated */
				public hasPlaceholderBehavior(param0: number): boolean;
				public select(param0: number): void;
				public getSourceSet(param0: number, param1: string): java.util.List<ly.img.engine.Source>;
				public generateVideoThumbnailSequence(param0: number, param1: number, param2: number, param3: number, param4: number): kotlinx.coroutines.flow.Flow<ly.img.engine.VideoThumbnailResult>;
				public getStrokeWidth(param0: number): number;
				public getBlendMode(param0: number): ly.img.engine.BlendMode;
				public setName(param0: number, param1: string): void;
				public getFillSolidColor(param0: number): ly.img.engine.RGBAColor;
				public getGlobalBoundingBoxHeight(param0: number): number;
				public create(param0: ly.img.engine.DesignBlockType): number;
				public setString(param0: number, param1: string, param2: string): void;
				/** @deprecated */
				public findByType(param0: string): java.util.List<java.lang.Integer>;
				public insertEffect(param0: number, param1: number, param2: number): void;
				public getHeight(param0: number): number;
				public supportsBlur(param0: number): boolean;
				public loadFromArchive(param0: globalAndroid.net.Uri, param1: any): any;
				public isScopeEnabled(param0: number, param1: string): boolean;
				public setWidth(param0: number, param1: number): void;
				public ungroup(param0: number): void;
				public bringToFront(param0: number): void;
				public getGlobalBoundingBoxY(param0: number): number;
				public setVolume(param0: number, param1: number): void;
				public setCropScaleY(param0: number, param1: number): void;
				public adjustCropToFillFrame(param0: number, param1: number): void;
				public isBlurEnabled(param0: number): boolean;
				public findAllMetadata(param0: number): java.util.List<string>;
				public setHeight(param0: number, param1: number): void;
				public onClicked(): kotlinx.coroutines.flow.Flow<java.lang.Integer>;
				public getInt(param0: number, param1: string): number;
				public setBlendMode(param0: number, param1: ly.img.engine.BlendMode): void;
				public createShape(param0: ly.img.engine.ShapeType): number;
				public getKind(param0: number): string;
				public setPlaceholderBehaviorEnabled(param0: number, param1: boolean): void;
				public loadFromString(param0: string, param1: any): any;
				public getName(param0: number): string;
				public setAlwaysOnTop(param0: number, param1: boolean): void;
				/** @deprecated */
				public getColorSpotTint(param0: number, param1: string): number;
				public getMetadata(param0: number, param1: string): string;
				public getTypeface(param0: number): ly.img.engine.Typeface;
				public setIncludedInExport(param0: number, param1: boolean): void;
				public findByName(param0: string): java.util.List<java.lang.Integer>;
				public sendBackward(param0: number): void;
				public bringForward(param0: number): void;
				public isFlipHorizontal(param0: number): boolean;
				public setKind(param0: number, param1: string): void;
				public supportsDropShadow(param0: number): boolean;
				public setPositionX(param0: number, param1: number): void;
				/** @deprecated */
				public hasContentFillMode(param0: number): boolean;
				public createCutoutFromBlocks(param0: java.util.List<java.lang.Integer>, param1: number, param2: number): number;
				/** @deprecated */
				public hasFill(param0: number): boolean;
				public getHeightMode(param0: number): ly.img.engine.SizeMode;
				public isFillEnabled(param0: number): boolean;
				public getUUID(param0: number): string;
				public isAlwaysOnBottom(param0: number): boolean;
				public getCropScaleX(param0: number): number;
				public flipCropHorizontal(param0: number): void;
				public findAll(): java.util.List<java.lang.Integer>;
				public getFrameX(param0: number): number;
				public getCropScaleRatio(param0: number): number;
				public setBackgroundColorEnabled(param0: number, param1: boolean): void;
				public getDropShadowOffsetX(param0: number): number;
				public setFillSolidColor(param0: number, param1: ly.img.engine.RGBAColor): void;
				public setFlipVertical(param0: number, param1: boolean): void;
				public getBoolean(param0: number, param1: string): boolean;
				public supportsOpacity(param0: number): boolean;
				/** @deprecated */
				public createFill(param0: string): number;
				public flipCropVertical(param0: number): void;
				public getCropRotation(param0: number): number;
				public combine(param0: java.util.List<java.lang.Integer>, param1: ly.img.engine.BooleanOperation): number;
				/** @deprecated */
				public hasPlaceholderControls(param0: number): boolean;
				public canToggleBoldFont(param0: number, param1: number, param2: number): boolean;
				/** @deprecated */
				public hasDropShadow(param0: number): boolean;
				public isAllowedByScope(param0: number, param1: string): boolean;
				public getTextColors(param0: number, param1: number, param2: number): java.util.List<ly.img.engine.Color>;
				public getScreenSpaceBoundingBoxRect(param0: java.util.List<java.lang.Integer>): globalAndroid.graphics.RectF;
				public isAlignable(param0: java.util.List<java.lang.Integer>): boolean;
				public setDouble(param0: number, param1: string, param2: number): void;
				public setTimeOffset(param0: number, param1: number): void;
				public setLooping(param0: number, param1: boolean): void;
				public getVideoWidth(param0: number): number;
				public getChildren(param0: number): java.util.List<java.lang.Integer>;
				public getCropTranslationX(param0: number): number;
				public createFill(param0: ly.img.engine.FillType): number;
				public canToggleItalicFont(param0: number, param1: number, param2: number): boolean;
				public exitGroup(param0: number): void;
				public setDropShadowClip(param0: number, param1: boolean): void;
				public toggleItalicFont(param0: number, param1: number, param2: number): void;
				public setPlaceholderControlsButtonEnabled(param0: number, param1: boolean): void;
				public getPositionX(param0: number): number;
				public getType(param0: number): string;
				public distributeHorizontally(param0: java.util.List<java.lang.Integer>): void;
				public setHeightMode(param0: number, param1: ly.img.engine.SizeMode): void;
				public setMuted(param0: number, param1: boolean): void;
				public isGroupable(param0: java.util.List<java.lang.Integer>): boolean;
				public isTransformLocked(param0: number): boolean;
				public setGradientColorStops(param0: number, param1: string, param2: java.util.List<ly.img.engine.GradientColorStop>): void;
				public supportsTimeOffset(param0: number): boolean;
				public getWidth(param0: number): number;
				public getFrameY(param0: number): number;
				public setBackgroundColor(param0: number, param1: ly.img.engine.RGBAColor): void;
				public setScopeEnabled(param0: number, param1: string, param2: boolean): void;
				public supportsPlaceholderControls(param0: number): boolean;
				public setSpotColorForCutoutType(param0: ly.img.engine.CutoutType, param1: string): void;
				public setTrimLength(param0: number, param1: number): void;
				public getEffects(param0: number): java.util.List<java.lang.Integer>;
				public getTimeOffset(param0: number): number;
				public setPositionYMode(param0: number, param1: ly.img.engine.PositionMode): void;
				public setTrimOffset(param0: number, param1: number): void;
				public duplicate(param0: number): number;
				public generateAudioThumbnailSequence(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): kotlinx.coroutines.flow.Flow<ly.img.engine.AudioThumbnailResult>;
				public getEnumValues(param0: string): java.util.List<string>;
				/** @deprecated */
				public hasTrim(param0: number): boolean;
				public getTrimLength(param0: number): number;
				public setSelected(param0: number, param1: boolean): void;
				/** @deprecated */
				public hasOpacity(param0: number): boolean;
				public getSpotColorForCutoutType(param0: ly.img.engine.CutoutType): string;
				public referencesAnyVariables(param0: number): boolean;
				public supportsStroke(param0: number): boolean;
				/** @deprecated */
				public createShape(param0: string): number;
				public setMetadata(param0: number, param1: string, param2: string): void;
				public setTextColor(param0: number, param1: ly.img.engine.Color, param2: number, param3: number): void;
				public supportsEffects(param0: number): boolean;
				/** @deprecated */
				public createEffect(param0: string): number;
				public setPlaying(param0: number, param1: boolean): void;
				public getShape(param0: number): number;
				public replaceText(param0: number, param1: string, param2: number, param3: number): void;
				public getString(param0: number, param1: string): string;
				public isPlaceholderControlsOverlayEnabled(param0: number): boolean;
				public getStrokeStyle(param0: number): ly.img.engine.StrokeStyle;
				public setShape(param0: number, param1: number): void;
				public supportsPlaybackTime(param0: number): boolean;
				public setCropRotation(param0: number, param1: number): void;
				public setDropShadowColor(param0: number, param1: ly.img.engine.Color): void;
				public setStrokeStyle(param0: number, param1: ly.img.engine.StrokeStyle): void;
				public getDropShadowBlurRadiusX(param0: number): number;
				public setNativePixelBuffer(param0: number, param1: number, param2: number): number;
				/** @deprecated */
				public hasBlur(param0: number): boolean;
				public getBackgroundColor(param0: number): ly.img.engine.RGBAColor;
				public createCutoutFromOperation(param0: java.util.List<java.lang.Integer>, param1: ly.img.engine.CutoutOperation): number;
				public setPlaceholderControlsOverlayEnabled(param0: number, param1: boolean): void;
				public getPositionYMode(param0: number): ly.img.engine.PositionMode;
				public getTextFontStyles(param0: number, param1: number, param2: number): java.util.List<ly.img.engine.FontStyle>;
				public getGlobalBoundingBoxWidth(param0: number): number;
				public isPlaying(param0: number): boolean;
				public getColor(param0: number, param1: string): ly.img.engine.Color;
				/** @deprecated */
				public hasCrop(param0: number): boolean;
				public getOpacity(param0: number): number;
				public setUri(param0: number, param1: string, param2: globalAndroid.net.Uri): void;
				public getBlur(param0: number): number;
				public supportsDuration(param0: number): boolean;
				public getDuration(param0: number): number;
				public isIncludedInExport(param0: number): boolean;
				/** @deprecated */
				public hasTimeOffset(param0: number): boolean;
				public setColor(param0: number, param1: string, param2: ly.img.engine.Color): void;
				public supportsBackgroundColor(param0: number): boolean;
				public findByType(param0: ly.img.engine.EffectType): java.util.List<java.lang.Integer>;
				public alignVertically(param0: java.util.List<java.lang.Integer>, param1: ly.img.engine.VerticalBlockAlignment): void;
				public setContentFillMode(param0: number, param1: ly.img.engine.ContentFillMode): void;
				public onSelectionChanged(): kotlinx.coroutines.flow.Flow<any>;
				public setDropShadowEnabled(param0: number, param1: boolean): void;
				/** @deprecated */
				public getColorSpotName(param0: number, param1: string): string;
				public setOpacity(param0: number, param1: number): void;
				/** @deprecated */
				public hasBackgroundColor(param0: number): boolean;
				public isVisible(param0: number): boolean;
				public appendChild(param0: number, param1: number): void;
				public setFloat(param0: number, param1: string, param2: number): void;
				public getTextCursorRange(): any;
				public createBlur(param0: ly.img.engine.BlurType): number;
				public setAlwaysOnBottom(param0: number, param1: boolean): void;
				public enterGroup(param0: number): void;
				public setStrokePosition(param0: number, param1: ly.img.engine.StrokePosition): void;
				public isAVResourceLoaded(param0: number): boolean;
				public setEffectEnabled(param0: number, param1: boolean): void;
				public setInt(param0: number, param1: string, param2: number): void;
				public setFlipHorizontal(param0: number, param1: boolean): void;
				public getEnum(param0: number, param1: string): string;
				public setBlurEnabled(param0: number, param1: boolean): void;
				/** @deprecated */
				public hasShape(param0: number): boolean;
				public setStrokeColor(param0: number, param1: ly.img.engine.Color): void;
				public removeMetadata(param0: number, param1: string): void;
				public setFill(param0: number, param1: number): void;
				public supportsFill(param0: number): boolean;
				public exportWithColorMask(param0: number, param1: ly.img.engine.MimeType, param2: ly.img.engine.RGBAColor, param3: ly.img.engine.ExportOptions, param4: any<any,any,any>, param5: any): any;
				public distributeVertically(param0: java.util.List<java.lang.Integer>): void;
				public setDuration(param0: number, param1: number): void;
				public setStrokeWidth(param0: number, param1: number): void;
				/** @deprecated */
				public create(param0: string): number;
				public isStrokeEnabled(param0: number): boolean;
				public isBackgroundColorEnabled(param0: number): boolean;
				/** @deprecated */
				public hasPlaybackTime(param0: number): boolean;
				public setPositionXMode(param0: number, param1: ly.img.engine.PositionMode): void;
				public getContentFillMode(param0: number): ly.img.engine.ContentFillMode;
				public saveToString(param0: java.util.List<java.lang.Integer>, param1: java.util.List<string>, param2: any): any;
				public getVideoHeight(param0: number): number;
				/** @deprecated */
				public hasStroke(param0: number): boolean;
				public isAlwaysOnTop(param0: number): boolean;
				public getFill(param0: number): number;
				public findByType(param0: ly.img.engine.BlurType): java.util.List<java.lang.Integer>;
				public getDropShadowOffsetY(param0: number): number;
				public getUri(param0: number, param1: string): globalAndroid.net.Uri;
				public setDropShadowBlurRadiusX(param0: number, param1: number): void;
				public getTextCases(param0: number, param1: number, param2: number): java.util.List<ly.img.engine.TextCase>;
				public group(param0: java.util.List<java.lang.Integer>): number;
				public findByType(param0: ly.img.engine.ShapeType): java.util.List<java.lang.Integer>;
				public supportsContentFillMode(param0: number): boolean;
				public getPlaybackTime(param0: number): number;
				/** @deprecated */
				public hasEffects(param0: number): boolean;
				public isDistributable(param0: java.util.List<java.lang.Integer>): boolean;
				public scale(param0: number, param1: number, param2: number, param3: number): void;
				/** @deprecated */
				public hasDuration(param0: number): boolean;
				public setEnum(param0: number, param1: string, param2: string): void;
				public setSourceSet(param0: number, param1: string, param2: java.util.List<ly.img.engine.Source>): void;
				/** @deprecated */
				public hasBlendMode(param0: number): boolean;
				public setPlaybackTime(param0: number, param1: number): void;
				public exportVideo(param0: number, param1: number, param2: number, param3: ly.img.engine.MimeType, param4: any<any,any>, param5: ly.img.engine.ExportVideoOptions, param6: any<any,any,any>, param7: any): any;
				public sendToBack(param0: number): void;
				public getFrameHeight(param0: number): number;
				public setDropShadowOffsetX(param0: number, param1: number): void;
				public supportsPlaybackControl(param0: number): boolean;
				public setFillEnabled(param0: number, param1: boolean): void;
				public isSelected(param0: number): boolean;
				public supportsTrim(param0: number): boolean;
				public destroy(param0: number): void;
				public getDropShadowClip(param0: number): boolean;
				public getCropScaleY(param0: number): number;
				public getGlobalBoundingBoxX(param0: number): number;
				/** @deprecated */
				public getTotalSceneDuration(param0: number): number;
				public getPositionY(param0: number): number;
				public insertChild(param0: number, param1: number, param2: number): void;
				public setCropTranslationX(param0: number, param1: number): void;
				public getCropTranslationY(param0: number): number;
				public setSoloPlaybackEnabled(param0: number, param1: boolean): void;
				public getTextFontWeights(param0: number, param1: number, param2: number): java.util.List<ly.img.engine.FontWeight>;
				public setBlur(param0: number, param1: number): void;
				public toggleBoldFont(param0: number, param1: number, param2: number): void;
				public setCropTranslationY(param0: number, param1: number): void;
				public getStrokePosition(param0: number): ly.img.engine.StrokePosition;
				public getTrimOffset(param0: number): number;
				public getFrameWidth(param0: number): number;
				public setStrokeEnabled(param0: number, param1: boolean): void;
				/** @deprecated */
				public hasEffectEnabled(param0: number): boolean;
				public setClipped(param0: number, param1: boolean): void;
				public findAllProperties(param0: number): java.util.List<string>;
				public appendEffect(param0: number, param1: number): void;
				public setStrokeCornerGeometry(param0: number, param1: ly.img.engine.StrokeCornerGeometry): void;
				public setFont(param0: number, param1: globalAndroid.net.Uri, param2: ly.img.engine.Typeface): void;
				public supportsPlaceholderBehavior(param0: number): boolean;
				public getDouble(param0: number, param1: string): number;
				public isLooping(param0: number): boolean;
				public getStrokeCornerGeometry(param0: number): ly.img.engine.StrokeCornerGeometry;
				/** @deprecated */
				public setColorSpot(param0: number, param1: string, param2: string, param3: number): void;
				public setVisible(param0: number, param1: boolean): void;
				public isFlipVertical(param0: number): boolean;
				public isPropertyWritable(param0: string): boolean;
			}
			export module BlockApi {
				export class DefaultImpls {
					public static class: java.lang.Class<ly.img.engine.BlockApi.DefaultImpls>;
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export abstract class BlurType extends ly.img.engine.ObjectType {
				public static class: java.lang.Class<ly.img.engine.BlurType>;
			}
			export module BlurType {
				export class Companion extends ly.img.engine.ObjectType.GenericBlockType<ly.img.engine.BlurType> {
					public static class: java.lang.Class<ly.img.engine.BlurType.Companion>;
					public get(param0: string): ly.img.engine.BlurType;
					public values(): java.util.Set<any>;
					public get(param0: string): any;
					public getOrNull(param0: string): ly.img.engine.BlurType;
					public values(): java.util.Set<ly.img.engine.BlurType>;
					public getOrNull(param0: string): any;
				}
				export class Linear extends ly.img.engine.BlurType {
					public static class: java.lang.Class<ly.img.engine.BlurType.Linear>;
					public static INSTANCE: ly.img.engine.BlurType.Linear;
				}
				export class Mirrored extends ly.img.engine.BlurType {
					public static class: java.lang.Class<ly.img.engine.BlurType.Mirrored>;
					public static INSTANCE: ly.img.engine.BlurType.Mirrored;
				}
				export class Radial extends ly.img.engine.BlurType {
					public static class: java.lang.Class<ly.img.engine.BlurType.Radial>;
					public static INSTANCE: ly.img.engine.BlurType.Radial;
				}
				export class Uniform extends ly.img.engine.BlurType {
					public static class: java.lang.Class<ly.img.engine.BlurType.Uniform>;
					public static INSTANCE: ly.img.engine.BlurType.Uniform;
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class BooleanOperation {
				public static class: java.lang.Class<ly.img.engine.BooleanOperation>;
				public static DIFFERENCE: ly.img.engine.BooleanOperation;
				public static INTERSECTION: ly.img.engine.BooleanOperation;
				public static UNION: ly.img.engine.BooleanOperation;
				public static XOR: ly.img.engine.BooleanOperation;
				public static valueOf(param0: string): ly.img.engine.BooleanOperation;
				public static values(): androidNative.Array<ly.img.engine.BooleanOperation>;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class CMYKColor extends ly.img.engine.Color {
				public static class: java.lang.Class<ly.img.engine.CMYKColor>;
				public getK(): number;
				public component4(): number;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
				public component2(): number;
				public getY(): number;
				public component1(): number;
				public getTint(): number;
				public toString(): string;
				public copy(param0: number, param1: number, param2: number, param3: number, param4: number): ly.img.engine.CMYKColor;
				public component3(): number;
				public component5(): number;
				public getC(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getM(): number;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class Color {
				public static class: java.lang.Class<ly.img.engine.Color>;
				/**
				 * Constructs a new instance of the ly.img.engine.Color interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					"<clinit>"(): void;
				});
				public constructor();
			}
			export module Color {
				export class Companion {
					public static class: java.lang.Class<ly.img.engine.Color.Companion>;
					public fromCMYK(param0: number, param1: number, param2: number, param3: number, param4: number): ly.img.engine.CMYKColor;
					public fromSpotColor(param0: string, param1: number, param2: string): ly.img.engine.SpotColor;
					public fromHex(param0: string): ly.img.engine.RGBAColor;
					public fromResource(param0: number, param1: globalAndroid.content.Context): ly.img.engine.RGBAColor;
					public fromColor(param0: number): ly.img.engine.RGBAColor;
					public fromRGBA(param0: number, param1: number, param2: number, param3: number): ly.img.engine.RGBAColor;
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class ColorSpace {
				public static class: java.lang.Class<ly.img.engine.ColorSpace>;
				public static SRGB: ly.img.engine.ColorSpace;
				public static CMYK: ly.img.engine.ColorSpace;
				public static SPOT_COLOR: ly.img.engine.ColorSpace;
				public static valueOf(param0: string): ly.img.engine.ColorSpace;
				public static values(): androidNative.Array<ly.img.engine.ColorSpace>;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class ContentFillMode {
				public static class: java.lang.Class<ly.img.engine.ContentFillMode>;
				public static CROP: ly.img.engine.ContentFillMode;
				public static COVER: ly.img.engine.ContentFillMode;
				public static CONTAIN: ly.img.engine.ContentFillMode;
				public static values(): androidNative.Array<ly.img.engine.ContentFillMode>;
				public static valueOf(param0: string): ly.img.engine.ContentFillMode;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class CutoutOperation {
				public static class: java.lang.Class<ly.img.engine.CutoutOperation>;
				public static DIFFERENCE: ly.img.engine.CutoutOperation;
				public static INTERSECTION: ly.img.engine.CutoutOperation;
				public static UNION: ly.img.engine.CutoutOperation;
				public static XOR: ly.img.engine.CutoutOperation;
				public static valueOf(param0: string): ly.img.engine.CutoutOperation;
				public static values(): androidNative.Array<ly.img.engine.CutoutOperation>;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class CutoutType {
				public static class: java.lang.Class<ly.img.engine.CutoutType>;
				public static SOLID: ly.img.engine.CutoutType;
				public static DASHED: ly.img.engine.CutoutType;
				public static values(): androidNative.Array<ly.img.engine.CutoutType>;
				public static valueOf(param0: string): ly.img.engine.CutoutType;
				public getKey(): string;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class DefaultAssetSource {
				public static class: java.lang.Class<ly.img.engine.DefaultAssetSource>;
				public static STICKER: ly.img.engine.DefaultAssetSource;
				public static VECTOR_PATH: ly.img.engine.DefaultAssetSource;
				public static FILTER_LUT: ly.img.engine.DefaultAssetSource;
				public static FILTER_DUO_TONE: ly.img.engine.DefaultAssetSource;
				public static COLORS_DEFAULT_PALETTE: ly.img.engine.DefaultAssetSource;
				public static EFFECT: ly.img.engine.DefaultAssetSource;
				public static BLUR: ly.img.engine.DefaultAssetSource;
				public static TYPEFACE: ly.img.engine.DefaultAssetSource;
				public static valueOf(param0: string): ly.img.engine.DefaultAssetSource;
				public getKey(): string;
				public static values(): androidNative.Array<ly.img.engine.DefaultAssetSource>;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class DemoAssetSource {
				public static class: java.lang.Class<ly.img.engine.DemoAssetSource>;
				public static IMAGE: ly.img.engine.DemoAssetSource;
				public static IMAGE_UPLOAD: ly.img.engine.DemoAssetSource;
				public static AUDIO: ly.img.engine.DemoAssetSource;
				public static AUDIO_UPLOAD: ly.img.engine.DemoAssetSource;
				public static VIDEO: ly.img.engine.DemoAssetSource;
				public static VIDEO_UPLOAD: ly.img.engine.DemoAssetSource;
				public static values(): androidNative.Array<ly.img.engine.DemoAssetSource>;
				public getKey(): string;
				public static valueOf(param0: string): ly.img.engine.DemoAssetSource;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class DesignBlockEvent {
				public static class: java.lang.Class<ly.img.engine.DesignBlockEvent>;
				public constructor(param0: number, param1: number);
				public component2(): ly.img.engine.DesignBlockEvent.Type;
				public constructor(param0: number, param1: ly.img.engine.DesignBlockEvent.Type);
				public copy(param0: number, param1: ly.img.engine.DesignBlockEvent.Type): ly.img.engine.DesignBlockEvent;
				public hashCode(): number;
				public getBlock(): number;
				public equals(param0: any): boolean;
				public component1(): number;
				public toString(): string;
				public getType(): ly.img.engine.DesignBlockEvent.Type;
			}
			export module DesignBlockEvent {
				export class Type {
					public static class: java.lang.Class<ly.img.engine.DesignBlockEvent.Type>;
					public static CREATED: ly.img.engine.DesignBlockEvent.Type;
					public static UPDATED: ly.img.engine.DesignBlockEvent.Type;
					public static DESTROYED: ly.img.engine.DesignBlockEvent.Type;
					public static valueOf(param0: string): ly.img.engine.DesignBlockEvent.Type;
					public static values(): androidNative.Array<ly.img.engine.DesignBlockEvent.Type>;
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export abstract class DesignBlockType extends ly.img.engine.ObjectType {
				public static class: java.lang.Class<ly.img.engine.DesignBlockType>;
			}
			export module DesignBlockType {
				export class Audio extends ly.img.engine.DesignBlockType {
					public static class: java.lang.Class<ly.img.engine.DesignBlockType.Audio>;
					public static INSTANCE: ly.img.engine.DesignBlockType.Audio;
				}
				export class Camera extends ly.img.engine.DesignBlockType {
					public static class: java.lang.Class<ly.img.engine.DesignBlockType.Camera>;
					public static INSTANCE: ly.img.engine.DesignBlockType.Camera;
				}
				export class Companion extends ly.img.engine.ObjectType.GenericBlockType<ly.img.engine.DesignBlockType> {
					public static class: java.lang.Class<ly.img.engine.DesignBlockType.Companion>;
					public values(): java.util.Set<ly.img.engine.DesignBlockType>;
					public values(): java.util.Set<any>;
					public get(param0: string): any;
					public getOrNull(param0: string): ly.img.engine.DesignBlockType;
					public getOrNull(param0: string): any;
					public get(param0: string): ly.img.engine.DesignBlockType;
				}
				export class Cutout extends ly.img.engine.DesignBlockType {
					public static class: java.lang.Class<ly.img.engine.DesignBlockType.Cutout>;
					public static INSTANCE: ly.img.engine.DesignBlockType.Cutout;
				}
				export class Graphic extends ly.img.engine.DesignBlockType {
					public static class: java.lang.Class<ly.img.engine.DesignBlockType.Graphic>;
					public static INSTANCE: ly.img.engine.DesignBlockType.Graphic;
				}
				export class Group extends ly.img.engine.DesignBlockType {
					public static class: java.lang.Class<ly.img.engine.DesignBlockType.Group>;
					public static INSTANCE: ly.img.engine.DesignBlockType.Group;
				}
				export class Page extends ly.img.engine.DesignBlockType {
					public static class: java.lang.Class<ly.img.engine.DesignBlockType.Page>;
					public static INSTANCE: ly.img.engine.DesignBlockType.Page;
				}
				export class Scene extends ly.img.engine.DesignBlockType {
					public static class: java.lang.Class<ly.img.engine.DesignBlockType.Scene>;
					public static INSTANCE: ly.img.engine.DesignBlockType.Scene;
				}
				export class Stack extends ly.img.engine.DesignBlockType {
					public static class: java.lang.Class<ly.img.engine.DesignBlockType.Stack>;
					public static INSTANCE: ly.img.engine.DesignBlockType.Stack;
				}
				export class Text extends ly.img.engine.DesignBlockType {
					public static class: java.lang.Class<ly.img.engine.DesignBlockType.Text>;
					public static INSTANCE: ly.img.engine.DesignBlockType.Text;
				}
				export class Track extends ly.img.engine.DesignBlockType {
					public static class: java.lang.Class<ly.img.engine.DesignBlockType.Track>;
					public static INSTANCE: ly.img.engine.DesignBlockType.Track;
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class DesignUnit {
				public static class: java.lang.Class<ly.img.engine.DesignUnit>;
				public static MILLIMETER: ly.img.engine.DesignUnit;
				public static PIXEL: ly.img.engine.DesignUnit;
				public static INCH: ly.img.engine.DesignUnit;
				public static values(): androidNative.Array<ly.img.engine.DesignUnit>;
				public static valueOf(param0: string): ly.img.engine.DesignUnit;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class EditorApi {
				public static class: java.lang.Class<ly.img.engine.EditorApi>;
				/**
				 * Constructs a new instance of the ly.img.engine.EditorApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onStateChanged(): kotlinx.coroutines.flow.Flow<any>;
					onSettingsChanged(): kotlinx.coroutines.flow.Flow<any>;
					onRoleChanged(): kotlinx.coroutines.flow.Flow<string>;
					onHistoryUpdated(): kotlinx.coroutines.flow.Flow<any>;
					onCarouselPageChanged(): kotlinx.coroutines.flow.Flow<java.lang.Integer>;
					setEditMode(param0: string): void;
					getEditMode(): string;
					getTextCursorPositionInScreenSpaceX(): number;
					getTextCursorPositionInScreenSpaceY(): number;
					createHistory(): number;
					destroyHistory(param0: number): void;
					setActiveHistory(param0: number): void;
					getActiveHistory(): number;
					addUndoStep(): void;
					undo(): void;
					redo(): void;
					canUndo(): boolean;
					canRedo(): boolean;
					getAvailableMemory(): number;
					getUsedMemory(): number;
					getMaxExportSize(): number;
					setSettingBoolean(param0: string, param1: boolean): void;
					getSettingBoolean(param0: string): boolean;
					setSettingInt(param0: string, param1: number): void;
					getSettingInt(param0: string): number;
					setSettingFloat(param0: string, param1: number): void;
					getSettingFloat(param0: string): number;
					setSettingString(param0: string, param1: string): void;
					getSettingString(param0: string): string;
					setSettingColor(param0: string, param1: ly.img.engine.RGBAColor): void;
					getSettingColor(param0: string): ly.img.engine.RGBAColor;
					setSettingEnum(param0: string, param1: string): void;
					getSettingEnum(param0: string): string;
					getSettingEnumOptions(param0: string): java.util.List<string>;
					getRole(): string;
					setRole(param0: string): void;
					findAllSettings(): java.util.List<string>;
					getSettingType(param0: string): ly.img.engine.PropertyType;
					setUriResolver(param0: any<any,any>): void;
					defaultUriResolver(param0: globalAndroid.net.Uri): globalAndroid.net.Uri;
					getAbsoluteUri(param0: globalAndroid.net.Uri): globalAndroid.net.Uri;
					findAllScopes(): java.util.List<string>;
					setGlobalScope(param0: string, param1: ly.img.engine.GlobalScope): void;
					getGlobalScope(param0: string): ly.img.engine.GlobalScope;
					findAllSpotColors(): java.util.List<string>;
					getSpotColor(param0: string): ly.img.engine.RGBAColor;
					getSpotColorRGB(param0: string): ly.img.engine.RGBAColor;
					getSpotColorCMYK(param0: string): ly.img.engine.CMYKColor;
					setSpotColor(param0: string, param1: ly.img.engine.RGBAColor): void;
					setSpotColor(param0: string, param1: ly.img.engine.CMYKColor): void;
					removeSpotColor(param0: string): void;
					convertColorToColorSpace(param0: ly.img.engine.Color, param1: ly.img.engine.ColorSpace): ly.img.engine.Color;
					createBuffer(): globalAndroid.net.Uri;
					destroyBuffer(param0: globalAndroid.net.Uri): void;
					setBufferData(param0: globalAndroid.net.Uri, param1: number, param2: java.nio.ByteBuffer): void;
					getBufferData(param0: globalAndroid.net.Uri, param1: number, param2: number): java.nio.ByteBuffer;
					setBufferLength(param0: globalAndroid.net.Uri, param1: number): void;
					getBufferLength(param0: globalAndroid.net.Uri): number;
				});
				public constructor();
				public getUsedMemory(): number;
				public findAllSpotColors(): java.util.List<string>;
				public getTextCursorPositionInScreenSpaceX(): number;
				public setBufferData(param0: globalAndroid.net.Uri, param1: number, param2: java.nio.ByteBuffer): void;
				public undo(): void;
				public onHistoryUpdated(): kotlinx.coroutines.flow.Flow<any>;
				public getAbsoluteUri(param0: globalAndroid.net.Uri): globalAndroid.net.Uri;
				public findAllSettings(): java.util.List<string>;
				/** @deprecated */
				public getSpotColor(param0: string): ly.img.engine.RGBAColor;
				public onCarouselPageChanged(): kotlinx.coroutines.flow.Flow<java.lang.Integer>;
				public getSettingInt(param0: string): number;
				public getGlobalScope(param0: string): ly.img.engine.GlobalScope;
				public defaultUriResolver(param0: globalAndroid.net.Uri): globalAndroid.net.Uri;
				public destroyHistory(param0: number): void;
				public setSettingFloat(param0: string, param1: number): void;
				public addUndoStep(): void;
				public canUndo(): boolean;
				public setRole(param0: string): void;
				public getBufferLength(param0: globalAndroid.net.Uri): number;
				public setActiveHistory(param0: number): void;
				public setSettingBoolean(param0: string, param1: boolean): void;
				public destroyBuffer(param0: globalAndroid.net.Uri): void;
				public getBufferData(param0: globalAndroid.net.Uri, param1: number, param2: number): java.nio.ByteBuffer;
				public getSettingType(param0: string): ly.img.engine.PropertyType;
				public onStateChanged(): kotlinx.coroutines.flow.Flow<any>;
				public createHistory(): number;
				public setGlobalScope(param0: string, param1: ly.img.engine.GlobalScope): void;
				public getTextCursorPositionInScreenSpaceY(): number;
				public setSettingString(param0: string, param1: string): void;
				public setSettingEnum(param0: string, param1: string): void;
				public getAvailableMemory(): number;
				public getSettingEnumOptions(param0: string): java.util.List<string>;
				public setEditMode(param0: string): void;
				public convertColorToColorSpace(param0: ly.img.engine.Color, param1: ly.img.engine.ColorSpace): ly.img.engine.Color;
				public getSettingEnum(param0: string): string;
				public setSpotColor(param0: string, param1: ly.img.engine.CMYKColor): void;
				public getSettingColor(param0: string): ly.img.engine.RGBAColor;
				public setBufferLength(param0: globalAndroid.net.Uri, param1: number): void;
				public findAllScopes(): java.util.List<string>;
				public getMaxExportSize(): number;
				public setSettingInt(param0: string, param1: number): void;
				public createBuffer(): globalAndroid.net.Uri;
				public removeSpotColor(param0: string): void;
				public getEditMode(): string;
				public getSettingString(param0: string): string;
				public setSettingColor(param0: string, param1: ly.img.engine.RGBAColor): void;
				public onSettingsChanged(): kotlinx.coroutines.flow.Flow<any>;
				public getSpotColorCMYK(param0: string): ly.img.engine.CMYKColor;
				public getSpotColorRGB(param0: string): ly.img.engine.RGBAColor;
				public onRoleChanged(): kotlinx.coroutines.flow.Flow<string>;
				public setSpotColor(param0: string, param1: ly.img.engine.RGBAColor): void;
				public redo(): void;
				public getSettingBoolean(param0: string): boolean;
				public getRole(): string;
				public getActiveHistory(): number;
				public canRedo(): boolean;
				public setUriResolver(param0: any<any,any>): void;
				public getSettingFloat(param0: string): number;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export abstract class EffectType extends ly.img.engine.ObjectType {
				public static class: java.lang.Class<ly.img.engine.EffectType>;
			}
			export module EffectType {
				export class Adjustments extends ly.img.engine.EffectType {
					public static class: java.lang.Class<ly.img.engine.EffectType.Adjustments>;
					public static INSTANCE: ly.img.engine.EffectType.Adjustments;
				}
				export class Companion extends ly.img.engine.ObjectType.GenericBlockType<ly.img.engine.EffectType> {
					public static class: java.lang.Class<ly.img.engine.EffectType.Companion>;
					public values(): java.util.Set<any>;
					public get(param0: string): any;
					public getOrNull(param0: string): ly.img.engine.EffectType;
					public getOrNull(param0: string): any;
					public get(param0: string): ly.img.engine.EffectType;
					public values(): java.util.Set<ly.img.engine.EffectType>;
				}
				export class CrossCut extends ly.img.engine.EffectType {
					public static class: java.lang.Class<ly.img.engine.EffectType.CrossCut>;
					public static INSTANCE: ly.img.engine.EffectType.CrossCut;
				}
				export class DotPattern extends ly.img.engine.EffectType {
					public static class: java.lang.Class<ly.img.engine.EffectType.DotPattern>;
					public static INSTANCE: ly.img.engine.EffectType.DotPattern;
				}
				export class DuoToneFilter extends ly.img.engine.EffectType {
					public static class: java.lang.Class<ly.img.engine.EffectType.DuoToneFilter>;
					public static INSTANCE: ly.img.engine.EffectType.DuoToneFilter;
				}
				export class ExtrudeBlur extends ly.img.engine.EffectType {
					public static class: java.lang.Class<ly.img.engine.EffectType.ExtrudeBlur>;
					public static INSTANCE: ly.img.engine.EffectType.ExtrudeBlur;
				}
				export class Glow extends ly.img.engine.EffectType {
					public static class: java.lang.Class<ly.img.engine.EffectType.Glow>;
					public static INSTANCE: ly.img.engine.EffectType.Glow;
				}
				export class GreenScreen extends ly.img.engine.EffectType {
					public static class: java.lang.Class<ly.img.engine.EffectType.GreenScreen>;
					public static INSTANCE: ly.img.engine.EffectType.GreenScreen;
				}
				export class HalfTone extends ly.img.engine.EffectType {
					public static class: java.lang.Class<ly.img.engine.EffectType.HalfTone>;
					public static INSTANCE: ly.img.engine.EffectType.HalfTone;
				}
				export class Linocut extends ly.img.engine.EffectType {
					public static class: java.lang.Class<ly.img.engine.EffectType.Linocut>;
					public static INSTANCE: ly.img.engine.EffectType.Linocut;
				}
				export class Liquid extends ly.img.engine.EffectType {
					public static class: java.lang.Class<ly.img.engine.EffectType.Liquid>;
					public static INSTANCE: ly.img.engine.EffectType.Liquid;
				}
				export class LutFilter extends ly.img.engine.EffectType {
					public static class: java.lang.Class<ly.img.engine.EffectType.LutFilter>;
					public static INSTANCE: ly.img.engine.EffectType.LutFilter;
				}
				export class Mirror extends ly.img.engine.EffectType {
					public static class: java.lang.Class<ly.img.engine.EffectType.Mirror>;
					public static INSTANCE: ly.img.engine.EffectType.Mirror;
				}
				export class Outliner extends ly.img.engine.EffectType {
					public static class: java.lang.Class<ly.img.engine.EffectType.Outliner>;
					public static INSTANCE: ly.img.engine.EffectType.Outliner;
				}
				export class Pixelize extends ly.img.engine.EffectType {
					public static class: java.lang.Class<ly.img.engine.EffectType.Pixelize>;
					public static INSTANCE: ly.img.engine.EffectType.Pixelize;
				}
				export class Posterize extends ly.img.engine.EffectType {
					public static class: java.lang.Class<ly.img.engine.EffectType.Posterize>;
					public static INSTANCE: ly.img.engine.EffectType.Posterize;
				}
				export class RadialPixel extends ly.img.engine.EffectType {
					public static class: java.lang.Class<ly.img.engine.EffectType.RadialPixel>;
					public static INSTANCE: ly.img.engine.EffectType.RadialPixel;
				}
				export class Recolor extends ly.img.engine.EffectType {
					public static class: java.lang.Class<ly.img.engine.EffectType.Recolor>;
					public static INSTANCE: ly.img.engine.EffectType.Recolor;
				}
				export class Sharpie extends ly.img.engine.EffectType {
					public static class: java.lang.Class<ly.img.engine.EffectType.Sharpie>;
					public static INSTANCE: ly.img.engine.EffectType.Sharpie;
				}
				export class Shifter extends ly.img.engine.EffectType {
					public static class: java.lang.Class<ly.img.engine.EffectType.Shifter>;
					public static INSTANCE: ly.img.engine.EffectType.Shifter;
				}
				export class TiltShift extends ly.img.engine.EffectType {
					public static class: java.lang.Class<ly.img.engine.EffectType.TiltShift>;
					public static INSTANCE: ly.img.engine.EffectType.TiltShift;
				}
				export class TvGlitch extends ly.img.engine.EffectType {
					public static class: java.lang.Class<ly.img.engine.EffectType.TvGlitch>;
					public static INSTANCE: ly.img.engine.EffectType.TvGlitch;
				}
				export class Vignette extends ly.img.engine.EffectType {
					public static class: java.lang.Class<ly.img.engine.EffectType.Vignette>;
					public static INSTANCE: ly.img.engine.EffectType.Vignette;
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class Engine {
				public static class: java.lang.Class<ly.img.engine.Engine>;
				public getDefaultAssetSourceLoaderService$ubq_android_engine_release(): ly.img.engine.internal.android.DefaultAssetSourceLoaderService;
				public bindOffscreen(param0: number, param1: number): void;
				public getVariable(): ly.img.engine.VariableApi;
				public requireEngineThread$ubq_android_engine_release(): void;
				public getBlock(): ly.img.engine.BlockApi;
				public getEditor(): ly.img.engine.EditorApi;
				public isEngineRunning$ubq_android_engine_release(): boolean;
				public getLooper(): globalAndroid.os.Looper;
				public bindSurfaceView(param0: globalAndroid.view.SurfaceView): void;
				public stop(): boolean;
				public getIdlingEnabled(): boolean;
				public getUbqId$ubq_android_engine_release(): number;
				public surfaceChanged$ubq_android_engine_release(param0: number, param1: number): void;
				public getEvent(): ly.img.engine.EventApi;
				public getSurfaceCreatedListeners$ubq_android_engine_release(): java.util.List<any;
				public getBoundContext$ubq_android_engine_release(): ly.img.engine.internal.context.Context;
				public setIdlingEnabled(param0: boolean): void;
				public setSurfaceCreatedListeners$ubq_android_engine_release(param0: java.util.List<any): void;
				public getDispatcher(): kotlinx.coroutines.MainCoroutineDispatcher;
				public surfaceCreated$ubq_android_engine_release(param0: globalAndroid.view.Surface, param1: number, param2: number): void;
				public getAsset(): ly.img.engine.AssetApi;
				public saveState(): globalAndroid.os.Bundle;
				public markIdleNot$ubq_android_engine_release(): void;
				public removeSurfaceCreatedListener(param0: any): void;
				public getCoreNativeApi$ubq_android_engine_release(): ly.img.engine.internal.api.core.CoreNativeApi;
				public run$ubq_android_engine_release(param0: any<any,any>): void;
				public bindTextureView(param0: globalAndroid.view.TextureView): void;
				public surfaceCreated$ubq_android_engine_release(param0: number, param1: number): void;
				public getScene(): ly.img.engine.SceneApi;
				public isEngineRunning(): boolean;
				public unbind(): void;
				public setEngineRunning$ubq_android_engine_release(param0: boolean): void;
				public surfaceDestroyed$ubq_android_engine_release(): void;
				public setBoundContext$ubq_android_engine_release(param0: ly.img.engine.internal.context.Context): void;
				public bindSurfaceHolder(param0: globalAndroid.view.SurfaceHolder): void;
				public start(param0: string, param1: string, param2: androidx.savedstate.SavedStateRegistryOwner, param3: any): any;
				public addSurfaceCreatedListener(param0: any): void;
				public bind$ubq_android_engine_release(): void;
			}
			export module Engine {
				export class Companion {
					public static class: java.lang.Class<ly.img.engine.Engine.Companion>;
					public getInstance(param0: string, param1: ly.img.engine.AudioContext): ly.img.engine.Engine;
					public requireMainThread$ubq_android_engine_release(): void;
					public getExportEngine$ubq_android_engine_release(): ly.img.engine.Engine;
					public init(param0: globalAndroid.app.Application): void;
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class EngineBuildConfig {
				public static class: java.lang.Class<ly.img.engine.EngineBuildConfig>;
				public static INSTANCE: ly.img.engine.EngineBuildConfig;
				public static INTERNAL_DEPLOY: boolean;
				public static ENABLE_LOGGING: boolean;
				public static LICENSE_URL: string;
				public static IS_TEST_RUN: boolean;
				public getOVERRIDE_TRACKING_ENDPOINT$ubq_android_engine_release(): string;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class EngineException {
				public static class: java.lang.Class<ly.img.engine.EngineException>;
				public constructor(param0: string);
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module EngineExtensionsKt {
export module  {
				export class WhenMappings {
					public static class: java.lang.Class<ly.img.engine.EngineExtensionsKt.WhenMappings>;
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class EventApi {
				public static class: java.lang.Class<ly.img.engine.EventApi>;
				/**
				 * Constructs a new instance of the ly.img.engine.EventApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					subscribe(param0: java.util.List<java.lang.Integer>): kotlinx.coroutines.flow.Flow<java.util.List<ly.img.engine.DesignBlockEvent>>;
				});
				public constructor();
				public subscribe(param0: java.util.List<java.lang.Integer>): kotlinx.coroutines.flow.Flow<java.util.List<ly.img.engine.DesignBlockEvent>>;
			}
			export module EventApi {
				export class DefaultImpls {
					public static class: java.lang.Class<ly.img.engine.EventApi.DefaultImpls>;
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class ExportOptions {
				public static class: java.lang.Class<ly.img.engine.ExportOptions>;
				public constructor(param0: number, param1: number, param2: number, param3: java.lang.Float, param4: java.lang.Float, param5: boolean, param6: boolean, param7: string, param8: number);
				public getExportPdfWithHighCompatibility(): boolean;
				public component2(): number;
				public copy(param0: number, param1: number, param2: number, param3: java.lang.Float, param4: java.lang.Float, param5: boolean, param6: boolean, param7: string, param8: number): ly.img.engine.ExportOptions;
				public getPngCompressionLevel(): number;
				public component1(): number;
				public component8(): string;
				public getExportPdfWithUnderlayer(): boolean;
				public getUnderlayerSpotColorName(): string;
				public toString(): string;
				public component9(): number;
				public constructor();
				public component3(): number;
				public getTargetWidth(): java.lang.Float;
				public component4(): java.lang.Float;
				public getTargetHeight(): java.lang.Float;
				public hashCode(): number;
				public getWebpQuality(): number;
				public equals(param0: any): boolean;
				public component6(): boolean;
				public getJpegQuality(): number;
				public getUnderlayerOffset(): number;
				public component5(): java.lang.Float;
				public component7(): boolean;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class ExportVideoOptions {
				public static class: java.lang.Class<ly.img.engine.ExportVideoOptions>;
				public component2(): number;
				public getFrameRate(): number;
				public constructor(param0: number, param1: number, param2: number, param3: java.lang.Float, param4: java.lang.Float);
				public component1(): number;
				public toString(): string;
				public constructor();
				public getH264Level(): number;
				public component3(): number;
				public getTargetWidth(): java.lang.Float;
				public component4(): java.lang.Float;
				public getTargetHeight(): java.lang.Float;
				public hashCode(): number;
				public getH264Profile(): number;
				public equals(param0: any): boolean;
				public copy(param0: number, param1: number, param2: number, param3: java.lang.Float, param4: java.lang.Float): ly.img.engine.ExportVideoOptions;
				public component5(): java.lang.Float;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class ExportVideoProgress {
				public static class: java.lang.Class<ly.img.engine.ExportVideoProgress>;
				public constructor(param0: number, param1: number, param2: number);
				public getTotalFrames(): number;
				public component3(): number;
				public component2(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getRenderedFrames(): number;
				public component1(): number;
				public getEncodedFrames(): number;
				public toString(): string;
				public copy(param0: number, param1: number, param2: number): ly.img.engine.ExportVideoProgress;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export abstract class FillType extends ly.img.engine.ObjectType {
				public static class: java.lang.Class<ly.img.engine.FillType>;
			}
			export module FillType {
				export class Color extends ly.img.engine.FillType {
					public static class: java.lang.Class<ly.img.engine.FillType.Color>;
					public static INSTANCE: ly.img.engine.FillType.Color;
				}
				export class Companion extends ly.img.engine.ObjectType.GenericBlockType<ly.img.engine.FillType> {
					public static class: java.lang.Class<ly.img.engine.FillType.Companion>;
					public values(): java.util.Set<any>;
					public get(param0: string): any;
					public values(): java.util.Set<ly.img.engine.FillType>;
					public get(param0: string): ly.img.engine.FillType;
					public getOrNull(param0: string): ly.img.engine.FillType;
					public getOrNull(param0: string): any;
				}
				export class ConicalGradient extends ly.img.engine.FillType {
					public static class: java.lang.Class<ly.img.engine.FillType.ConicalGradient>;
					public static INSTANCE: ly.img.engine.FillType.ConicalGradient;
				}
				export class Image extends ly.img.engine.FillType {
					public static class: java.lang.Class<ly.img.engine.FillType.Image>;
					public static INSTANCE: ly.img.engine.FillType.Image;
				}
				export class LinearGradient extends ly.img.engine.FillType {
					public static class: java.lang.Class<ly.img.engine.FillType.LinearGradient>;
					public static INSTANCE: ly.img.engine.FillType.LinearGradient;
				}
				export class PixelStream extends ly.img.engine.FillType {
					public static class: java.lang.Class<ly.img.engine.FillType.PixelStream>;
					public static INSTANCE: ly.img.engine.FillType.PixelStream;
				}
				export class RadialGradient extends ly.img.engine.FillType {
					public static class: java.lang.Class<ly.img.engine.FillType.RadialGradient>;
					public static INSTANCE: ly.img.engine.FillType.RadialGradient;
				}
				export class Video extends ly.img.engine.FillType {
					public static class: java.lang.Class<ly.img.engine.FillType.Video>;
					public static INSTANCE: ly.img.engine.FillType.Video;
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class FindAssetsQuery {
				public static class: java.lang.Class<ly.img.engine.FindAssetsQuery>;
				public component2(): number;
				public component8(): java.util.List<string>;
				public component6(): string;
				public component4(): string;
				public getPerPage(): number;
				public component1(): number;
				public getLocale(): string;
				public getSortKey(): string;
				public toString(): string;
				public getTags(): java.util.List<string>;
				public component7(): java.util.List<string>;
				public component9(): java.util.List<string>;
				public getQuery(): string;
				public component3(): string;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public component5(): ly.img.engine.SortingOrder;
				public getSortingOrder(): ly.img.engine.SortingOrder;
				public getExcludeGroups(): java.util.List<string>;
				public constructor(param0: number, param1: number, param2: string, param3: string, param4: number, param5: string, param6: java.util.List<string>, param7: java.util.List<string>, param8: java.util.List<string>);
				public getPage(): number;
				public copy(param0: number, param1: number, param2: string, param3: string, param4: ly.img.engine.SortingOrder, param5: string, param6: java.util.List<string>, param7: java.util.List<string>, param8: java.util.List<string>): ly.img.engine.FindAssetsQuery;
				public constructor(param0: number, param1: number, param2: string, param3: string, param4: ly.img.engine.SortingOrder, param5: string, param6: java.util.List<string>, param7: java.util.List<string>, param8: java.util.List<string>);
				public getGroups(): java.util.List<string>;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class FindAssetsResult {
				public static class: java.lang.Class<ly.img.engine.FindAssetsResult>;
				public constructor(param0: java.util.List<ly.img.engine.Asset>, param1: number, param2: number, param3: number);
				public component4(): number;
				public component2(): number;
				public getTotal(): number;
				public toString(): string;
				public getCurrentPage(): number;
				public getAssets(): java.util.List<ly.img.engine.Asset>;
				public component3(): number;
				public copy(param0: java.util.List<ly.img.engine.Asset>, param1: number, param2: number, param3: number): ly.img.engine.FindAssetsResult;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getNextPage(): number;
				public component1(): java.util.List<ly.img.engine.Asset>;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class Font {
				public static class: java.lang.Class<ly.img.engine.Font>;
				public component1(): globalAndroid.net.Uri;
				public constructor(param0: globalAndroid.net.Uri, param1: string, param2: number, param3: number);
				public component4(): ly.img.engine.FontStyle;
				public toString(): string;
				public getWeight(): ly.img.engine.FontWeight;
				public getStyle(): ly.img.engine.FontStyle;
				public getUri(): globalAndroid.net.Uri;
				public getSubFamily(): string;
				public component3(): ly.img.engine.FontWeight;
				public hashCode(): number;
				public copy(param0: globalAndroid.net.Uri, param1: string, param2: ly.img.engine.FontWeight, param3: ly.img.engine.FontStyle): ly.img.engine.Font;
				public component2(): string;
				public equals(param0: any): boolean;
				public constructor(param0: globalAndroid.net.Uri, param1: string, param2: ly.img.engine.FontWeight, param3: ly.img.engine.FontStyle);
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class FontStyle {
				public static class: java.lang.Class<ly.img.engine.FontStyle>;
				public static NORMAL: ly.img.engine.FontStyle;
				public static ITALIC: ly.img.engine.FontStyle;
				public static values(): androidNative.Array<ly.img.engine.FontStyle>;
				public static valueOf(param0: string): ly.img.engine.FontStyle;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class FontWeight {
				public static class: java.lang.Class<ly.img.engine.FontWeight>;
				public static THIN: ly.img.engine.FontWeight;
				public static EXTRA_LIGHT: ly.img.engine.FontWeight;
				public static LIGHT: ly.img.engine.FontWeight;
				public static NORMAL: ly.img.engine.FontWeight;
				public static MEDIUM: ly.img.engine.FontWeight;
				public static SEMI_BOLD: ly.img.engine.FontWeight;
				public static BOLD: ly.img.engine.FontWeight;
				public static EXTRA_BOLD: ly.img.engine.FontWeight;
				public static HEAVY: ly.img.engine.FontWeight;
				public static valueOf(param0: string): ly.img.engine.FontWeight;
				public static values(): androidNative.Array<ly.img.engine.FontWeight>;
				public getValue(): number;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class GlobalScope {
				public static class: java.lang.Class<ly.img.engine.GlobalScope>;
				public static ALLOW: ly.img.engine.GlobalScope;
				public static DENY: ly.img.engine.GlobalScope;
				public static DEFER: ly.img.engine.GlobalScope;
				public static valueOf(param0: string): ly.img.engine.GlobalScope;
				public static values(): androidNative.Array<ly.img.engine.GlobalScope>;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class GradientColorStop {
				public static class: java.lang.Class<ly.img.engine.GradientColorStop>;
				public constructor(param0: number, param1: ly.img.engine.Color);
				public copy(param0: number, param1: ly.img.engine.Color): ly.img.engine.GradientColorStop;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public component1(): number;
				public getColor(): ly.img.engine.Color;
				public component2(): ly.img.engine.Color;
				public getStop(): number;
				public toString(): string;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class HorizontalBlockAlignment {
				public static class: java.lang.Class<ly.img.engine.HorizontalBlockAlignment>;
				public static LEFT: ly.img.engine.HorizontalBlockAlignment;
				public static RIGHT: ly.img.engine.HorizontalBlockAlignment;
				public static CENTER: ly.img.engine.HorizontalBlockAlignment;
				public static values(): androidNative.Array<ly.img.engine.HorizontalBlockAlignment>;
				public static valueOf(param0: string): ly.img.engine.HorizontalBlockAlignment;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class LicenseValidationException extends ly.img.engine.EngineException {
				public static class: java.lang.Class<ly.img.engine.LicenseValidationException>;
				public constructor(param0: string);
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class MimeType {
				public static class: java.lang.Class<ly.img.engine.MimeType>;
				public static PNG: ly.img.engine.MimeType;
				public static JPEG: ly.img.engine.MimeType;
				public static TGA: ly.img.engine.MimeType;
				public static MP4: ly.img.engine.MimeType;
				public static BINARY: ly.img.engine.MimeType;
				public static PDF: ly.img.engine.MimeType;
				public getKey(): string;
				public static values(): androidNative.Array<ly.img.engine.MimeType>;
				public static valueOf(param0: string): ly.img.engine.MimeType;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export abstract class ObjectType {
				public static class: java.lang.Class<ly.img.engine.ObjectType>;
				public getKey(): string;
			}
			export module ObjectType {
				export class GenericBlockType<T>  extends java.lang.Object {
					public static class: java.lang.Class<ly.img.engine.ObjectType.GenericBlockType<any>>;
					/**
					 * Constructs a new instance of the ly.img.engine.ObjectType$GenericBlockType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						values(): java.util.Set<T>;
						get(param0: string): T;
						getOrNull(param0: string): T;
					});
					public constructor();
					public values(): java.util.Set<T>;
					public getOrNull(param0: string): T;
					public get(param0: string): T;
				}
				export module GenericBlockType {
					export class DefaultImpls {
						public static class: java.lang.Class<ly.img.engine.ObjectType.GenericBlockType.DefaultImpls>;
						public static get(param0: ly.img.engine.ObjectType.GenericBlockType<any>, param1: string): ly.img.engine.ObjectType;
						public static getOrNull(param0: ly.img.engine.ObjectType.GenericBlockType<any>, param1: string): ly.img.engine.ObjectType;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class PositionMode {
				public static class: java.lang.Class<ly.img.engine.PositionMode>;
				public static ABSOLUTE: ly.img.engine.PositionMode;
				public static PERCENT: ly.img.engine.PositionMode;
				public static AUTO: ly.img.engine.PositionMode;
				public static valueOf(param0: string): ly.img.engine.PositionMode;
				public static values(): androidNative.Array<ly.img.engine.PositionMode>;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class PropertyType {
				public static class: java.lang.Class<ly.img.engine.PropertyType>;
				public static BOOL: ly.img.engine.PropertyType;
				public static INT: ly.img.engine.PropertyType;
				public static FLOAT: ly.img.engine.PropertyType;
				public static STRING: ly.img.engine.PropertyType;
				public static COLOR: ly.img.engine.PropertyType;
				public static ENUM: ly.img.engine.PropertyType;
				public static STRUCT: ly.img.engine.PropertyType;
				public static DOUBLE: ly.img.engine.PropertyType;
				public static SOURCESET: ly.img.engine.PropertyType;
				public static values(): androidNative.Array<ly.img.engine.PropertyType>;
				public static valueOf(param0: string): ly.img.engine.PropertyType;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class RGBAColor extends ly.img.engine.Color {
				public static class: java.lang.Class<ly.img.engine.RGBAColor>;
				public copy(param0: number, param1: number, param2: number, param3: number): ly.img.engine.RGBAColor;
				public getR(): number;
				public component4(): number;
				public component2(): number;
				public getA(): number;
				public getB(): number;
				public component1(): number;
				public toString(): string;
				public component3(): number;
				public constructor(param0: number, param1: number, param2: number, param3: number);
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getG(): number;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class SceneApi {
				public static class: java.lang.Class<ly.img.engine.SceneApi>;
				/**
				 * Constructs a new instance of the ly.img.engine.SceneApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					load(param0: string, param1: any): any;
					load(param0: globalAndroid.net.Uri, param1: any): any;
					loadArchive(param0: globalAndroid.net.Uri, param1: any): any;
					create(): number;
					createForVideo(): number;
					createFromImage(param0: globalAndroid.net.Uri, param1: number, param2: number, param3: any): any;
					createFromVideo(param0: globalAndroid.net.Uri, param1: any): any;
					applyTemplate(param0: string, param1: any): any;
					applyTemplate(param0: globalAndroid.net.Uri, param1: any): any;
					get(): java.lang.Integer;
					saveToString(param0: number, param1: java.util.List<string>, param2: any): any;
					saveToArchive(param0: number, param1: any): any;
					getMode(): ly.img.engine.SceneMode;
					getPages(): java.util.List<java.lang.Integer>;
					getCurrentPage(): java.lang.Integer;
					findNearestToViewPortCenterByType(param0: string): java.util.List<java.lang.Integer>;
					findNearestToViewPortCenterByType(param0: ly.img.engine.DesignBlockType): java.util.List<java.lang.Integer>;
					findNearestToViewPortCenterByKind(param0: string): java.util.List<java.lang.Integer>;
					setZoomLevel(param0: number): void;
					getZoomLevel(): number;
					zoomToBlock(param0: number, param1: number, param2: number, param3: number, param4: number, param5: any): any;
					enableZoomAutoFit(param0: number, param1: ly.img.engine.ZoomAutoFitAxis, param2: number, param3: number, param4: number, param5: number): void;
					disableZoomAutoFit(param0: number): void;
					isZoomAutoFitEnabled(param0: number): boolean;
					enableCameraPositionClamping(param0: java.util.List<java.lang.Integer>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
					disableCameraPositionClamping(): void;
					isCameraPositionClampingEnabled(param0: number): boolean;
					enableCameraZoomClamping(param0: java.util.List<java.lang.Integer>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
					disableCameraZoomClamping(): void;
					isCameraZoomClampingEnabled(param0: number): boolean;
					onZoomLevelChanged(): kotlinx.coroutines.flow.Flow<any>;
					onActiveChanged(): kotlinx.coroutines.flow.Flow<any>;
					setDesignUnit(param0: ly.img.engine.DesignUnit): void;
					getDesignUnit(): ly.img.engine.DesignUnit;
				});
				public constructor();
				public getDesignUnit(): ly.img.engine.DesignUnit;
				public saveToString(param0: number, param1: java.util.List<string>, param2: any): any;
				public enableCameraZoomClamping(param0: java.util.List<java.lang.Integer>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
				public createFromImage(param0: globalAndroid.net.Uri, param1: number, param2: number, param3: any): any;
				public applyTemplate(param0: string, param1: any): any;
				public saveToArchive(param0: number, param1: any): any;
				public onZoomLevelChanged(): kotlinx.coroutines.flow.Flow<any>;
				public findNearestToViewPortCenterByType(param0: ly.img.engine.DesignBlockType): java.util.List<java.lang.Integer>;
				public get(): java.lang.Integer;
				public createForVideo(): number;
				public isCameraPositionClampingEnabled(param0: number): boolean;
				public load(param0: string, param1: any): any;
				public getZoomLevel(): number;
				/** @deprecated */
				public findNearestToViewPortCenterByType(param0: string): java.util.List<java.lang.Integer>;
				public isCameraZoomClampingEnabled(param0: number): boolean;
				public setDesignUnit(param0: ly.img.engine.DesignUnit): void;
				public create(): number;
				public getCurrentPage(): java.lang.Integer;
				public disableZoomAutoFit(param0: number): void;
				public disableCameraZoomClamping(): void;
				public applyTemplate(param0: globalAndroid.net.Uri, param1: any): any;
				public enableZoomAutoFit(param0: number, param1: ly.img.engine.ZoomAutoFitAxis, param2: number, param3: number, param4: number, param5: number): void;
				public isZoomAutoFitEnabled(param0: number): boolean;
				public createFromVideo(param0: globalAndroid.net.Uri, param1: any): any;
				public disableCameraPositionClamping(): void;
				public findNearestToViewPortCenterByKind(param0: string): java.util.List<java.lang.Integer>;
				public getPages(): java.util.List<java.lang.Integer>;
				public setZoomLevel(param0: number): void;
				public getMode(): ly.img.engine.SceneMode;
				public zoomToBlock(param0: number, param1: number, param2: number, param3: number, param4: number, param5: any): any;
				public load(param0: globalAndroid.net.Uri, param1: any): any;
				public onActiveChanged(): kotlinx.coroutines.flow.Flow<any>;
				public loadArchive(param0: globalAndroid.net.Uri, param1: any): any;
				public enableCameraPositionClamping(param0: java.util.List<java.lang.Integer>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
			}
			export module SceneApi {
				export class DefaultImpls {
					public static class: java.lang.Class<ly.img.engine.SceneApi.DefaultImpls>;
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class SceneMode {
				public static class: java.lang.Class<ly.img.engine.SceneMode>;
				public static DESIGN: ly.img.engine.SceneMode;
				public static VIDEO: ly.img.engine.SceneMode;
				public static values(): androidNative.Array<ly.img.engine.SceneMode>;
				public static valueOf(param0: string): ly.img.engine.SceneMode;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class Setting {
				public static class: java.lang.Class<ly.img.engine.Setting>;
				/**
				 * Constructs a new instance of the ly.img.engine.Setting interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getKeypath(): string;
				});
				public constructor();
				public getKeypath(): string;
			}
			export module Setting {
				export class Boolean extends ly.img.engine.Setting {
					public static class: java.lang.Class<ly.img.engine.Setting.Boolean>;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): string;
					public getValue(): boolean;
					public getKeypath(): string;
					public constructor(param0: string, param1: boolean);
					public copy(param0: string, param1: boolean): ly.img.engine.Setting.Boolean;
					public hashCode(): number;
					public component2(): boolean;
				}
				export class Color extends ly.img.engine.Setting {
					public static class: java.lang.Class<ly.img.engine.Setting.Color>;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): string;
					public copy(param0: string, param1: ly.img.engine.RGBAColor): ly.img.engine.Setting.Color;
					public constructor(param0: string, param1: ly.img.engine.RGBAColor);
					public component2(): ly.img.engine.RGBAColor;
					public getKeypath(): string;
					public hashCode(): number;
					public getValue(): ly.img.engine.RGBAColor;
				}
				export class Enum extends ly.img.engine.Setting {
					public static class: java.lang.Class<ly.img.engine.Setting.Enum>;
					public constructor(param0: string, param1: string);
					public equals(param0: any): boolean;
					public getValue(): string;
					public toString(): string;
					public component1(): string;
					public component2(): string;
					public getKeypath(): string;
					public copy(param0: string, param1: string): ly.img.engine.Setting.Enum;
					public hashCode(): number;
				}
				export class Float extends ly.img.engine.Setting {
					public static class: java.lang.Class<ly.img.engine.Setting.Float>;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): string;
					public getValue(): number;
					public constructor(param0: string, param1: number);
					public component2(): number;
					public getKeypath(): string;
					public hashCode(): number;
					public copy(param0: string, param1: number): ly.img.engine.Setting.Float;
				}
				export class Int extends ly.img.engine.Setting {
					public static class: java.lang.Class<ly.img.engine.Setting.Int>;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): string;
					public getValue(): number;
					public constructor(param0: string, param1: number);
					public component2(): number;
					public getKeypath(): string;
					public copy(param0: string, param1: number): ly.img.engine.Setting.Int;
					public hashCode(): number;
				}
				export class String extends ly.img.engine.Setting {
					public static class: java.lang.Class<ly.img.engine.Setting.String>;
					public constructor(param0: string, param1: string);
					public equals(param0: any): boolean;
					public getValue(): string;
					public toString(): string;
					public component1(): string;
					public component2(): string;
					public copy(param0: string, param1: string): ly.img.engine.Setting.String;
					public getKeypath(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export abstract class ShapeType extends ly.img.engine.ObjectType {
				public static class: java.lang.Class<ly.img.engine.ShapeType>;
			}
			export module ShapeType {
				export class Companion extends ly.img.engine.ObjectType.GenericBlockType<ly.img.engine.ShapeType> {
					public static class: java.lang.Class<ly.img.engine.ShapeType.Companion>;
					public get(param0: string): ly.img.engine.ShapeType;
					public getOrNull(param0: string): ly.img.engine.ShapeType;
					public values(): java.util.Set<any>;
					public get(param0: string): any;
					public values(): java.util.Set<ly.img.engine.ShapeType>;
					public getOrNull(param0: string): any;
				}
				export class Ellipse extends ly.img.engine.ShapeType {
					public static class: java.lang.Class<ly.img.engine.ShapeType.Ellipse>;
					public static INSTANCE: ly.img.engine.ShapeType.Ellipse;
				}
				export class Line extends ly.img.engine.ShapeType {
					public static class: java.lang.Class<ly.img.engine.ShapeType.Line>;
					public static INSTANCE: ly.img.engine.ShapeType.Line;
				}
				export class Polygon extends ly.img.engine.ShapeType {
					public static class: java.lang.Class<ly.img.engine.ShapeType.Polygon>;
					public static INSTANCE: ly.img.engine.ShapeType.Polygon;
				}
				export class Rect extends ly.img.engine.ShapeType {
					public static class: java.lang.Class<ly.img.engine.ShapeType.Rect>;
					public static INSTANCE: ly.img.engine.ShapeType.Rect;
				}
				export class Star extends ly.img.engine.ShapeType {
					public static class: java.lang.Class<ly.img.engine.ShapeType.Star>;
					public static INSTANCE: ly.img.engine.ShapeType.Star;
				}
				export class VectorPath extends ly.img.engine.ShapeType {
					public static class: java.lang.Class<ly.img.engine.ShapeType.VectorPath>;
					public static INSTANCE: ly.img.engine.ShapeType.VectorPath;
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class SizeMode {
				public static class: java.lang.Class<ly.img.engine.SizeMode>;
				public static ABSOLUTE: ly.img.engine.SizeMode;
				public static PERCENT: ly.img.engine.SizeMode;
				public static AUTO: ly.img.engine.SizeMode;
				public static values(): androidNative.Array<ly.img.engine.SizeMode>;
				public static valueOf(param0: string): ly.img.engine.SizeMode;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class SortingOrder {
				public static class: java.lang.Class<ly.img.engine.SortingOrder>;
				public static NONE: ly.img.engine.SortingOrder;
				public static ASCENDING: ly.img.engine.SortingOrder;
				public static DESCENDING: ly.img.engine.SortingOrder;
				public static values(): androidNative.Array<ly.img.engine.SortingOrder>;
				public static valueOf(param0: string): ly.img.engine.SortingOrder;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class Source {
				public static class: java.lang.Class<ly.img.engine.Source>;
				public component1(): globalAndroid.net.Uri;
				public copy(param0: globalAndroid.net.Uri, param1: number, param2: number): ly.img.engine.Source;
				public getWidth(): number;
				public getHeight(): number;
				public component3(): number;
				public getUri(): globalAndroid.net.Uri;
				public constructor(param0: globalAndroid.net.Uri, param1: number, param2: number);
				public component2(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public toString(): string;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class SpotColor extends ly.img.engine.Color {
				public static class: java.lang.Class<ly.img.engine.SpotColor>;
				public constructor(param0: string, param1: number, param2: string);
				public component1(): string;
				public component2(): number;
				public getExternalReference(): string;
				public component3(): string;
				public hashCode(): number;
				public copy(param0: string, param1: number, param2: string): ly.img.engine.SpotColor;
				public equals(param0: any): boolean;
				public getName(): string;
				public getTint(): number;
				public toString(): string;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class StrokeCornerGeometry {
				public static class: java.lang.Class<ly.img.engine.StrokeCornerGeometry>;
				public static BEVEL: ly.img.engine.StrokeCornerGeometry;
				public static MITER: ly.img.engine.StrokeCornerGeometry;
				public static ROUND: ly.img.engine.StrokeCornerGeometry;
				public static valueOf(param0: string): ly.img.engine.StrokeCornerGeometry;
				public static values(): androidNative.Array<ly.img.engine.StrokeCornerGeometry>;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class StrokePosition {
				public static class: java.lang.Class<ly.img.engine.StrokePosition>;
				public static CENTER: ly.img.engine.StrokePosition;
				public static INNER: ly.img.engine.StrokePosition;
				public static OUTER: ly.img.engine.StrokePosition;
				public static values(): androidNative.Array<ly.img.engine.StrokePosition>;
				public static valueOf(param0: string): ly.img.engine.StrokePosition;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class StrokeStyle {
				public static class: java.lang.Class<ly.img.engine.StrokeStyle>;
				public static DASHED: ly.img.engine.StrokeStyle;
				public static DASHED_ROUND: ly.img.engine.StrokeStyle;
				public static DOTTED: ly.img.engine.StrokeStyle;
				public static LONG_DASHED: ly.img.engine.StrokeStyle;
				public static LONG_DASHED_ROUND: ly.img.engine.StrokeStyle;
				public static SOLID: ly.img.engine.StrokeStyle;
				public static valueOf(param0: string): ly.img.engine.StrokeStyle;
				public static values(): androidNative.Array<ly.img.engine.StrokeStyle>;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class TextCase {
				public static class: java.lang.Class<ly.img.engine.TextCase>;
				public static NORMAL: ly.img.engine.TextCase;
				public static UPPER_CASE: ly.img.engine.TextCase;
				public static LOWER_CASE: ly.img.engine.TextCase;
				public static TITLE_CASE: ly.img.engine.TextCase;
				public static values(): androidNative.Array<ly.img.engine.TextCase>;
				public static valueOf(param0: string): ly.img.engine.TextCase;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class Typeface {
				public static class: java.lang.Class<ly.img.engine.Typeface>;
				public constructor(param0: string, param1: java.util.List<ly.img.engine.Font>);
				public component2(): java.util.List<ly.img.engine.Font>;
				public getFonts(): java.util.List<ly.img.engine.Font>;
				public component1(): string;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getName(): string;
				public copy(param0: string, param1: java.util.List<ly.img.engine.Font>): ly.img.engine.Typeface;
				public toString(): string;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class UnstableEngineApi {
				public static class: java.lang.Class<ly.img.engine.UnstableEngineApi>;
				/**
				 * Constructs a new instance of the ly.img.engine.UnstableEngineApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class VariableApi {
				public static class: java.lang.Class<ly.img.engine.VariableApi>;
				/**
				 * Constructs a new instance of the ly.img.engine.VariableApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					findAll(): java.util.List<string>;
					set(param0: string, param1: string): void;
					get(param0: string): string;
					remove(param0: string): void;
				});
				public constructor();
				public get(param0: string): string;
				public remove(param0: string): void;
				public set(param0: string, param1: string): void;
				public findAll(): java.util.List<string>;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class VerticalBlockAlignment {
				public static class: java.lang.Class<ly.img.engine.VerticalBlockAlignment>;
				public static TOP: ly.img.engine.VerticalBlockAlignment;
				public static BOTTOM: ly.img.engine.VerticalBlockAlignment;
				public static CENTER: ly.img.engine.VerticalBlockAlignment;
				public static values(): androidNative.Array<ly.img.engine.VerticalBlockAlignment>;
				public static valueOf(param0: string): ly.img.engine.VerticalBlockAlignment;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class VideoThumbnailResult {
				public static class: java.lang.Class<ly.img.engine.VideoThumbnailResult>;
				public getWidth(): number;
				public getHeight(): number;
				public getImageData(): java.nio.ByteBuffer;
				public getFrameIndex(): number;
				public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export class ZoomAutoFitAxis {
				public static class: java.lang.Class<ly.img.engine.ZoomAutoFitAxis>;
				public static BOTH: ly.img.engine.ZoomAutoFitAxis;
				public static HORIZONTAL: ly.img.engine.ZoomAutoFitAxis;
				public static VERTICAL: ly.img.engine.ZoomAutoFitAxis;
				public static valueOf(param0: string): ly.img.engine.ZoomAutoFitAxis;
				public static values(): androidNative.Array<ly.img.engine.ZoomAutoFitAxis>;
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module android {
					export class ApplicationContextHolder {
						public static class: java.lang.Class<ly.img.engine.internal.android.ApplicationContextHolder>;
						public static INSTANCE: ly.img.engine.internal.android.ApplicationContextHolder;
						public init(param0: globalAndroid.content.Context): void;
						public getApplicationContext(): globalAndroid.content.Context;
						public isInitialized(): boolean;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module android {
					export class DefaultAssetSourceLoaderService {
						public static class: java.lang.Class<ly.img.engine.internal.android.DefaultAssetSourceLoaderService>;
						public constructor(param0: ly.img.engine.Engine);
						public populateAssetSource(param0: string, param1: globalAndroid.net.Uri, param2: globalAndroid.net.Uri, param3: any): any;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module android {
					export class FetchAsyncService {
						public static class: java.lang.Class<ly.img.engine.internal.android.FetchAsyncService>;
						public engineLooper: globalAndroid.os.Looper;
						public getFetchResult(param0: number): string;
						public getFetchState(param0: number): number;
						public fetchAsync(param0: number, param1: string, param2: androidNative.Array<string>, param3: androidNative.Array<string>): void;
						public fetchAsync(param0: number, param1: string, param2: androidNative.Array<string>, param3: androidNative.Array<string>, param4: string): void;
						public release(): void;
						public getFetchFullState(param0: number): ly.img.engine.internal.model.FetchResult;
						public getEngineLooper(): globalAndroid.os.Looper;
						public fetchAsync(param0: number, param1: string, param2: androidNative.Array<string>, param3: androidNative.Array<string>, param4: string, param5: string, param6: string, param7: androidNative.Array<number>): void;
						public freeFetchResult(param0: number): void;
						public setEngineLooper(param0: globalAndroid.os.Looper): void;
						public static getInstance(param0: number): ly.img.engine.internal.android.FetchAsyncService;
						public getFetchProgress(param0: number): number;
						public static removeInstance(param0: number): void;
					}
					export module FetchAsyncService {
						export class Companion {
							public static class: java.lang.Class<ly.img.engine.internal.android.FetchAsyncService.Companion>;
							public getInstance(param0: number): ly.img.engine.internal.android.FetchAsyncService;
							public getOkHttpClient$ubq_android_engine_release(): okhttp3.OkHttpClient;
							public removeInstance(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module android {
					export class LicenseService {
						public static class: java.lang.Class<ly.img.engine.internal.android.LicenseService>;
						public static INSTANCE: ly.img.engine.internal.android.LicenseService;
						public unlock(param0: okhttp3.OkHttpClient, param1: string, param2: string, param3: any<any,any>, param4: any): any;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module android {
					export class LoggerService {
						public static class: java.lang.Class<ly.img.engine.internal.android.LoggerService>;
						public static INSTANCE: ly.img.engine.internal.android.LoggerService;
						public e(param0: string, param1: string, param2: java.lang.Throwable): void;
						public d(param0: string, param1: string): void;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module android {
					export class PlatformService {
						public static class: java.lang.Class<ly.img.engine.internal.android.PlatformService>;
						public static INSTANCE: ly.img.engine.internal.android.PlatformService;
						public getResourcesDirectory(): java.io.File;
						public static getCurrentWorkingDirectory(): string;
						public getVideosDirectory(): java.io.File;
						public static getAppPackageName(): string;
						public static getUsedMemoryInBytes(): number;
						public static getAvailableMemoryInBytes(): number;
						public getScenesDirectory(): java.io.File;
						public prepareInternalDir(): void;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module android {
					export class ResourceLoaderService {
						public static class: java.lang.Class<ly.img.engine.internal.android.ResourceLoaderService>;
						public engineDispatcher: kotlinx.coroutines.MainCoroutineDispatcher;
						public getLoadResult(param0: number): string;
						public static getInstance(param0: number): ly.img.engine.internal.android.ResourceLoaderService;
						public loadResource(param0: number, param1: string, param2: boolean): void;
						public setEngineDispatcher(param0: kotlinx.coroutines.MainCoroutineDispatcher): void;
						public freeLoadResult(param0: number): void;
						public release(): void;
						public getLoadFullState(param0: number): ly.img.engine.internal.model.FetchResult;
						public getLoadState(param0: number): number;
						public getEngineDispatcher(): kotlinx.coroutines.MainCoroutineDispatcher;
						public static removeInstance(param0: number): void;
					}
					export module ResourceLoaderService {
						export class Companion {
							public static class: java.lang.Class<ly.img.engine.internal.android.ResourceLoaderService.Companion>;
							public getInstance(param0: number): ly.img.engine.internal.android.ResourceLoaderService;
							public removeInstance(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module android {
					export class StorageService {
						public static class: java.lang.Class<ly.img.engine.internal.android.StorageService>;
						public static INSTANCE: ly.img.engine.internal.android.StorageService;
						public static clear(param0: string): void;
						public static save(param0: string, param1: string): void;
						public static loadOrNull(param0: string): string;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module android {
					export class SurfaceService {
						public static class: java.lang.Class<ly.img.engine.internal.android.SurfaceService>;
						public getSurface(param0: number, param1: number, param2: number): globalAndroid.view.Surface;
						public constructor();
						public static getInstance(param0: number): ly.img.engine.internal.android.SurfaceService;
						public release(param0: number): void;
						public updateTexImage(param0: number): void;
						public release(): void;
						public static removeInstance(param0: number): void;
					}
					export module SurfaceService {
						export class Companion {
							public static class: java.lang.Class<ly.img.engine.internal.android.SurfaceService.Companion>;
							public removeInstance(param0: number): void;
							public getInstance(param0: number): ly.img.engine.internal.android.SurfaceService;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module api {
					export abstract class BaseApi<NativeAPI>  extends java.lang.Object {
						public static class: java.lang.Class<ly.img.engine.internal.api.BaseApi<any>>;
						public stream(param0: any): kotlinx.coroutines.flow.Flow;
						public callback(param0: ly.img.engine.internal.api.CallbackCategory, param1: any, param2: any): void;
						public getEngine(): ly.img.engine.Engine;
						public getUbqId(): number;
						public stream(param0: any, param1: any): kotlinx.coroutines.flow.Flow;
						public sync(param0: any): any;
						public constructor(param0: ly.img.engine.Engine, param1: NativeAPI);
						public requireValidEngine(): void;
						public release(): void;
						public async(param0: any, param1: any): any;
					}
					export module BaseApi {
						export class Companion {
							public static class: java.lang.Class<ly.img.engine.internal.api.BaseApi.Companion>;
							public getCallback(param0: any): ly.img.engine.internal.api.NativeCallback<any,any>;
						}
						export class NativeCallbackImpl<T, R>  extends ly.img.engine.internal.api.NativeCallback<any,any> {
							public static class: java.lang.Class<ly.img.engine.internal.api.BaseApi.NativeCallbackImpl<any,any>>;
							public getHandle(): number;
							public onSuccess(param0: any): any;
							public constructor(param0: any, param1: kotlinx.coroutines.channels.ProducerScope<any>, param2: any<any,any>);
							public onError(param0: string): void;
							public setHandle(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module api {
					export class CallbackCategory {
						public static class: java.lang.Class<ly.img.engine.internal.api.CallbackCategory>;
						public static URI_RESOLVER: ly.img.engine.internal.api.CallbackCategory;
						public static valueOf(param0: string): ly.img.engine.internal.api.CallbackCategory;
						public static values(): androidNative.Array<ly.img.engine.internal.api.CallbackCategory>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module api {
					export class NativeCallback<T, R>  extends java.lang.Object {
						public static class: java.lang.Class<ly.img.engine.internal.api.NativeCallback<any,any>>;
						/**
						 * Constructs a new instance of the ly.img.engine.internal.api.NativeCallback<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: T): R;
							onError(param0: string): void;
						});
						public constructor();
						public onSuccess(param0: T): R;
						public onError(param0: string): void;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module api {
					export module asset {
						export class AssetApiImpl extends ly.img.engine.internal.api.BaseApi<ly.img.engine.internal.api.asset.AssetNativeApi> implements ly.img.engine.AssetApi  {
							public static class: java.lang.Class<ly.img.engine.internal.api.asset.AssetApiImpl>;
							public applyAssetSourceAsset(param0: string, param1: ly.img.engine.Asset, param2: number, param3: any): any;
							public constructor(param0: ly.img.engine.Engine, param1: any);
							public findAssets(param0: string, param1: ly.img.engine.FindAssetsQuery, param2: any): any;
							public addAsset(param0: string, param1: ly.img.engine.AssetDefinition): void;
							public getCredits(param0: string): ly.img.engine.AssetCredits;
							public applyAssetSourceAsset(param0: string, param1: ly.img.engine.Asset, param2: any): any;
							public release(): void;
							public removeAsset(param0: string, param1: string): void;
							public defaultApplyAsset(param0: ly.img.engine.Asset, param1: any): any;
							public addLocalSource(param0: string, param1: java.util.List<string>, param2: any<any,any,any>, param3: any<any,any,any,any>): void;
							public getSourceSupportedMimeTypes(param0: string): java.util.List<string>;
							public addSource(param0: ly.img.engine.AssetSource): void;
							public constructor(param0: ly.img.engine.Engine);
							public getLicense(param0: string): ly.img.engine.AssetLicense;
							public removeSource(param0: string): void;
							public findAllSources(): java.util.List<string>;
							public getGroups(param0: string, param1: any): any;
							public onAssetSourceAdded(): kotlinx.coroutines.flow.Flow<string>;
							public onAssetSourceRemoved(): kotlinx.coroutines.flow.Flow<string>;
							public defaultApplyAsset(param0: ly.img.engine.Asset, param1: number, param2: any): any;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module api {
					export module asset {
						export class AssetNativeApi {
							public static class: java.lang.Class<ly.img.engine.internal.api.asset.AssetNativeApi>;
							public static INSTANCE: ly.img.engine.internal.api.asset.AssetNativeApi;
							public onGetGroupsSuccess(param0: number, param1: number, param2: java.util.List<string>): void;
							public releaseApplyAssetToBlockCallback(param0: number, param1: number): void;
							public onApplyAssetSuccess(param0: number, param1: number, param2: java.lang.Integer): void;
							public onApplyAssetToBlockSuccess(param0: number, param1: number): void;
							public defaultApplyAssetToBlock(param0: number, param1: ly.img.engine.Asset, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public releaseGetGroupsCallback(param0: number, param1: number): void;
							public removeAsset(param0: number, param1: string, param2: string, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getLicense(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<ly.img.engine.AssetLicense,any>): void;
							public applyAssetSourceAssetToBlock(param0: number, param1: string, param2: ly.img.engine.Asset, param3: number, param4: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public onApplyAssetError(param0: number, param1: number, param2: string): void;
							public onAssetSourceRemoved(param0: number, param1: ly.img.engine.internal.api.NativeCallback<string,any>): number;
							public onGetGroupsError(param0: number, param1: number, param2: string): void;
							public findAllSources(param0: number, param1: ly.img.engine.internal.api.NativeCallback<java.util.List<string>,any>): void;
							public releaseFindAssetsCallback(param0: number, param1: number): void;
							public findAssets(param0: number, param1: string, param2: ly.img.engine.FindAssetsQuery, param3: ly.img.engine.internal.api.NativeCallback<ly.img.engine.FindAssetsResult,any>): void;
							public getCredits(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<ly.img.engine.AssetCredits,any>): void;
							public onApplyAssetToBlockError(param0: number, param1: number, param2: string): void;
							public addAsset(param0: number, param1: string, param2: ly.img.engine.AssetDefinition, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public applyAssetSourceAsset(param0: number, param1: string, param2: ly.img.engine.Asset, param3: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public addLocalSource(param0: number, param1: ly.img.engine.AssetSource, param2: any, param3: any, param4: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public onFindAssetsResultError(param0: number, param1: number, param2: string): void;
							public onAssetSourceAdded(param0: number, param1: ly.img.engine.internal.api.NativeCallback<string,any>): number;
							public removeSource(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getGroups(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.util.List<string>,any>): void;
							public addSource(param0: number, param1: ly.img.engine.AssetSource, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public releaseApplyAssetCallback(param0: number, param1: number): void;
							public defaultApplyAsset(param0: number, param1: ly.img.engine.Asset, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public getSourceSupportedMimeTypes(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.util.List<string>,any>): void;
							public onFindAssetsResultSuccess(param0: number, param1: number, param2: ly.img.engine.FindAssetsResult): void;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module api {
					export module block {
						export class BlockApiImpl extends ly.img.engine.internal.api.BaseApi<ly.img.engine.internal.api.block.BlockNativeApi> implements ly.img.engine.BlockApi  {
							public static class: java.lang.Class<ly.img.engine.internal.api.block.BlockApiImpl>;
							public setBlur(param0: number, param1: number): void;
							/** @deprecated */
							public hasShape(param0: number): boolean;
							public getTextColors(param0: number, param1: number, param2: number): java.util.List<ly.img.engine.Color>;
							public getTextCases(param0: number, param1: number, param2: number): java.util.List<ly.img.engine.TextCase>;
							/** @deprecated */
							public hasBackgroundColor(param0: number): boolean;
							public getFill(param0: number): number;
							public removeEffect(param0: number, param1: number): void;
							public insertChild(param0: number, param1: number, param2: number): void;
							public setCropTranslationX(param0: number, param1: number): void;
							public setPositionY(param0: number, param1: number): void;
							/** @deprecated */
							public getTotalSceneDuration(param0: number): number;
							public setTrimLength(param0: number, param1: number): void;
							public distributeHorizontally(param0: java.util.List<java.lang.Integer>): void;
							public setIncludedInExport(param0: number, param1: boolean): void;
							public setColor(param0: number, param1: string, param2: ly.img.engine.Color): void;
							public forceLoadAVResource(param0: number, param1: any): any;
							public getTextFontWeights(param0: number, param1: number, param2: number): java.util.List<ly.img.engine.FontWeight>;
							public setSpotColorForCutoutType(param0: ly.img.engine.CutoutType, param1: string): void;
							public getCropTranslationX(param0: number): number;
							public setStrokeColor(param0: number, param1: ly.img.engine.Color): void;
							public setFillSolidColor(param0: number, param1: ly.img.engine.RGBAColor): void;
							public setPlaybackTime(param0: number, param1: number): void;
							public supportsBackgroundColor(param0: number): boolean;
							/** @deprecated */
							public hasTimeOffset(param0: number): boolean;
							public flipCropHorizontal(param0: number): void;
							public replaceText(param0: number, param1: string, param2: number, param3: number): void;
							public getTimeOffset(param0: number): number;
							public isDistributable(param0: java.util.List<java.lang.Integer>): boolean;
							public duplicate(param0: number): number;
							public getPositionYMode(param0: number): ly.img.engine.PositionMode;
							public getShape(param0: number): number;
							public setTextColor(param0: number, param1: ly.img.engine.Color, param2: number, param3: number): void;
							public isStrokeEnabled(param0: number): boolean;
							public setPositionYMode(param0: number, param1: ly.img.engine.PositionMode): void;
							public setFillEnabled(param0: number, param1: boolean): void;
							public setShape(param0: number, param1: number): void;
							public getTextCursorRange(): any;
							public getEnumValues(param0: string): java.util.List<string>;
							public setSourceSet(param0: number, param1: string, param2: java.util.List<ly.img.engine.Source>): void;
							public constructor(param0: ly.img.engine.Engine, param1: any);
							public isSelected(param0: number): boolean;
							public setOpacity(param0: number, param1: number): void;
							public setTrimOffset(param0: number, param1: number): void;
							public getBackgroundColor(param0: number): ly.img.engine.RGBAColor;
							public setUri(param0: number, param1: string, param2: globalAndroid.net.Uri): void;
							public hasMetadata(param0: number, param1: string): boolean;
							public setFlipVertical(param0: number, param1: boolean): void;
							public getPlaybackTime(param0: number): number;
							public setStrokeWidth(param0: number, param1: number): void;
							public isAlwaysOnTop(param0: number): boolean;
							/** @deprecated */
							public hasBlur(param0: number): boolean;
							public setPositionX(param0: number, param1: number): void;
							public referencesAnyVariables(param0: number): boolean;
							public appendEffect(param0: number, param1: number): void;
							public saveToArchive(param0: java.util.List<java.lang.Integer>, param1: any): any;
							public addImageFileURIToSourceSet(param0: number, param1: string, param2: string, param3: any): any;
							public getPositionX(param0: number): number;
							/** @deprecated */
							public hasCrop(param0: number): boolean;
							public getDuration(param0: number): number;
							public getHeightMode(param0: number): ly.img.engine.SizeMode;
							public getTrimOffset(param0: number): number;
							public distributeVertically(param0: java.util.List<java.lang.Integer>): void;
							/** @deprecated */
							public hasOpacity(param0: number): boolean;
							public setDropShadowOffsetY(param0: number, param1: number): void;
							public createFill(param0: ly.img.engine.FillType): number;
							public getAVResourceTotalDuration(param0: number): number;
							public loadFromString(param0: string, param1: any): any;
							public isClipped(param0: number): boolean;
							/** @deprecated */
							public findByType(param0: string): java.util.List<java.lang.Integer>;
							public isTransformLocked(param0: number): boolean;
							public setDouble(param0: number, param1: string, param2: number): void;
							public exitGroup(param0: number): void;
							/** @deprecated */
							public getColorSpotName(param0: number, param1: string): string;
							public setDropShadowOffsetX(param0: number, param1: number): void;
							public getFrameY(param0: number): number;
							public getContentFillMode(param0: number): ly.img.engine.ContentFillMode;
							public setFlipHorizontal(param0: number, param1: boolean): void;
							public constructor(param0: ly.img.engine.Engine);
							public group(param0: java.util.List<java.lang.Integer>): number;
							public findAllPlaceholders(): java.util.List<java.lang.Integer>;
							public setPlaceholderControlsOverlayEnabled(param0: number, param1: boolean): void;
							public setLooping(param0: number, param1: boolean): void;
							public getTrimLength(param0: number): number;
							public getEffects(param0: number): java.util.List<java.lang.Integer>;
							/** @deprecated */
							public hasPlaceholderBehavior(param0: number): boolean;
							public setVolume(param0: number, param1: number): void;
							public supportsDuration(param0: number): boolean;
							public supportsTimeOffset(param0: number): boolean;
							public findByType(param0: ly.img.engine.BlurType): java.util.List<java.lang.Integer>;
							public getBlendMode(param0: number): ly.img.engine.BlendMode;
							public setDropShadowEnabled(param0: number, param1: boolean): void;
							public setHeight(param0: number, param1: number): void;
							public canToggleItalicFont(param0: number, param1: number, param2: number): boolean;
							public getFillSolidColor(param0: number): ly.img.engine.RGBAColor;
							public setEnum(param0: number, param1: string, param2: string): void;
							public getCropScaleRatio(param0: number): number;
							public setDropShadowColor(param0: number, param1: ly.img.engine.Color): void;
							/** @deprecated */
							public createShape(param0: string): number;
							public setCropRotation(param0: number, param1: number): void;
							public generateAudioThumbnailSequence(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): kotlinx.coroutines.flow.Flow<ly.img.engine.AudioThumbnailResult>;
							public setDropShadowBlurRadiusY(param0: number, param1: number): void;
							public isFillEnabled(param0: number): boolean;
							public isCombinable(param0: java.util.List<java.lang.Integer>): boolean;
							public setClipped(param0: number, param1: boolean): void;
							public findByType(param0: ly.img.engine.DesignBlockType): java.util.List<java.lang.Integer>;
							public setWidthMode(param0: number, param1: ly.img.engine.SizeMode): void;
							public bringForward(param0: number): void;
							public export(param0: number, param1: ly.img.engine.MimeType, param2: ly.img.engine.ExportOptions, param3: any<any,any,any>, param4: any): any;
							public isMuted(param0: number): boolean;
							public isPlaceholderControlsOverlayEnabled(param0: number): boolean;
							public loadFromArchive(param0: globalAndroid.net.Uri, param1: any): any;
							public scale(param0: number, param1: number, param2: number, param3: number): void;
							public getHeight(param0: number): number;
							public getColor(param0: number, param1: string): ly.img.engine.Color;
							public findAllMetadata(param0: number): java.util.List<string>;
							public getVideoWidth(param0: number): number;
							public setStrokeCornerGeometry(param0: number, param1: ly.img.engine.StrokeCornerGeometry): void;
							public setKind(param0: number, param1: string): void;
							/** @deprecated */
							public hasPlaybackControl(param0: number): boolean;
							/** @deprecated */
							public getColorSpotTint(param0: number, param1: string): number;
							public generateVideoThumbnailSequence(param0: number, param1: number, param2: number, param3: number, param4: number): kotlinx.coroutines.flow.Flow<ly.img.engine.VideoThumbnailResult>;
							public findByType(param0: ly.img.engine.EffectType): java.util.List<java.lang.Integer>;
							/** @deprecated */
							public hasContentFillMode(param0: number): boolean;
							/** @deprecated */
							public hasPlaybackTime(param0: number): boolean;
							public getKind(param0: number): string;
							public getCropScaleX(param0: number): number;
							public setDropShadowBlurRadiusX(param0: number, param1: number): void;
							public ungroup(param0: number): void;
							public getDropShadowBlurRadiusX(param0: number): number;
							public setMuted(param0: number, param1: boolean): void;
							public resetCrop(param0: number): void;
							public exportWithColorMask(param0: number, param1: ly.img.engine.MimeType, param2: ly.img.engine.RGBAColor, param3: ly.img.engine.ExportOptions, param4: any<any,any,any>, param5: any): any;
							public isFlipVertical(param0: number): boolean;
							public alignVertically(param0: java.util.List<java.lang.Integer>, param1: ly.img.engine.VerticalBlockAlignment): void;
							public createEffect(param0: ly.img.engine.EffectType): number;
							public getStrokeCornerGeometry(param0: number): ly.img.engine.StrokeCornerGeometry;
							public setMetadata(param0: number, param1: string, param2: string): void;
							public saveToString(param0: java.util.List<java.lang.Integer>, param1: java.util.List<string>, param2: any): any;
							public setHeightMode(param0: number, param1: ly.img.engine.SizeMode): void;
							public resizeContentAware(param0: java.util.List<java.lang.Integer>, param1: number, param2: number): void;
							public setTransformLocked(param0: number, param1: boolean): void;
							public isPropertyReadable(param0: string): boolean;
							public setTextCase(param0: number, param1: ly.img.engine.TextCase, param2: number, param3: number): void;
							public setSoloPlaybackEnabled(param0: number, param1: boolean): void;
							public flipCropVertical(param0: number): void;
							public getUri(param0: number, param1: string): globalAndroid.net.Uri;
							public setPlaying(param0: number, param1: boolean): void;
							public getDropShadowOffsetY(param0: number): number;
							public getWidth(param0: number): number;
							public getInt(param0: number, param1: string): number;
							public getWidthMode(param0: number): ly.img.engine.SizeMode;
							public setPositionXMode(param0: number, param1: ly.img.engine.PositionMode): void;
							public isAlignable(param0: java.util.List<java.lang.Integer>): boolean;
							public supportsStroke(param0: number): boolean;
							public getSpotColorForCutoutType(param0: ly.img.engine.CutoutType): string;
							/** @deprecated */
							public hasEffectEnabled(param0: number): boolean;
							public supportsShape(param0: number): boolean;
							public isAllowedByScope(param0: number, param1: string): boolean;
							public getVolume(param0: number): number;
							public isAVResourceLoaded(param0: number): boolean;
							public getRotation(param0: number): number;
							/** @deprecated */
							public setColorSpot(param0: number, param1: string, param2: string, param3: number): void;
							public insertEffect(param0: number, param1: number, param2: number): void;
							public create(param0: ly.img.engine.DesignBlockType): number;
							public isPlaceholderBehaviorEnabled(param0: number): boolean;
							public getTextFontStyles(param0: number, param1: number, param2: number): java.util.List<ly.img.engine.FontStyle>;
							public removeText(param0: number, param1: number, param2: number): void;
							public getSourceSet(param0: number, param1: string): java.util.List<ly.img.engine.Source>;
							public supportsBlendMode(param0: number): boolean;
							public setVisible(param0: number, param1: boolean): void;
							public isPlaceholderControlsButtonEnabled(param0: number): boolean;
							public setScopeEnabled(param0: number, param1: string, param2: boolean): void;
							/** @deprecated */
							public hasDuration(param0: number): boolean;
							public supportsDropShadow(param0: number): boolean;
							public getGlobalBoundingBoxY(param0: number): number;
							public setCropScaleX(param0: number, param1: number): void;
							public supportsOpacity(param0: number): boolean;
							public toggleBoldFont(param0: number, param1: number, param2: number): void;
							public getOpacity(param0: number): number;
							/** @deprecated */
							public hasBlendMode(param0: number): boolean;
							public getPropertyType(param0: string): ly.img.engine.PropertyType;
							public setPlaceholderEnabled(param0: number, param1: boolean): void;
							/** @deprecated */
							public createEffect(param0: string): number;
							public findByType(param0: ly.img.engine.ShapeType): java.util.List<java.lang.Integer>;
							public setNativePixelBuffer(param0: number, param1: number, param2: number): number;
							public supportsTrim(param0: number): boolean;
							public supportsFill(param0: number): boolean;
							public getString(param0: number, param1: string): string;
							public isAlwaysOnBottom(param0: number): boolean;
							public getGlobalBoundingBoxWidth(param0: number): number;
							public setInt(param0: number, param1: string, param2: number): void;
							public createCutoutFromOperation(param0: java.util.List<java.lang.Integer>, param1: ly.img.engine.CutoutOperation): number;
							public setName(param0: number, param1: string): void;
							public setGradientColorStops(param0: number, param1: string, param2: java.util.List<ly.img.engine.GradientColorStop>): void;
							public getDropShadowClip(param0: number): boolean;
							public supportsPlaceholderControls(param0: number): boolean;
							public createCutoutFromPath(param0: string): number;
							public enterGroup(param0: number): void;
							/** @deprecated */
							public hasEffects(param0: number): boolean;
							public getStrokeWidth(param0: number): number;
							public setDropShadowClip(param0: number, param1: boolean): void;
							public getFrameX(param0: number): number;
							public removeMetadata(param0: number, param1: string): void;
							public createShape(param0: ly.img.engine.ShapeType): number;
							public destroy(param0: number): void;
							public isGroupable(param0: java.util.List<java.lang.Integer>): boolean;
							public setFloat(param0: number, param1: string, param2: number): void;
							public getDouble(param0: number, param1: string): number;
							public canToggleBoldFont(param0: number, param1: number, param2: number): boolean;
							public setAlwaysOnTop(param0: number, param1: boolean): void;
							public setCropScaleRatio(param0: number, param1: number): void;
							public isSoloPlaybackEnabled(param0: number): boolean;
							public supportsPlaybackTime(param0: number): boolean;
							/** @deprecated */
							public create(param0: string): number;
							public fillParent(param0: number): void;
							public setBackgroundColorEnabled(param0: number, param1: boolean): void;
							public onClicked(): kotlinx.coroutines.flow.Flow<java.lang.Integer>;
							public setBackgroundColor(param0: number, param1: ly.img.engine.RGBAColor): void;
							/** @deprecated */
							public hasStroke(param0: number): boolean;
							public alignHorizontally(param0: java.util.List<java.lang.Integer>, param1: ly.img.engine.HorizontalBlockAlignment): void;
							public isBackgroundColorEnabled(param0: number): boolean;
							public setSelected(param0: number, param1: boolean): void;
							public isScopeEnabled(param0: number, param1: string): boolean;
							public getStrokeStyle(param0: number): ly.img.engine.StrokeStyle;
							public getPositionY(param0: number): number;
							public setPlaceholderControlsButtonEnabled(param0: number, param1: boolean): void;
							public getStrokePosition(param0: number): ly.img.engine.StrokePosition;
							public setBlendMode(param0: number, param1: ly.img.engine.BlendMode): void;
							public exportVideo(param0: number, param1: number, param2: number, param3: ly.img.engine.MimeType, param4: any<any,any>, param5: ly.img.engine.ExportVideoOptions, param6: any<any,any,any>, param7: any): any;
							public getParent(param0: number): java.lang.Integer;
							public isBlurEnabled(param0: number): boolean;
							public getType(param0: number): string;
							public supportsCrop(param0: number): boolean;
							public sendToBack(param0: number): void;
							public toggleItalicFont(param0: number, param1: number, param2: number): void;
							public setString(param0: number, param1: string, param2: string): void;
							public setWidth(param0: number, param1: number): void;
							public setContentFillMode(param0: number, param1: ly.img.engine.ContentFillMode): void;
							public supportsEffects(param0: number): boolean;
							public isVisibleAtCurrentPlaybackTime(param0: number): boolean;
							public isLooping(param0: number): boolean;
							public isPropertyWritable(param0: string): boolean;
							public combine(param0: java.util.List<java.lang.Integer>, param1: ly.img.engine.BooleanOperation): number;
							public getCropScaleY(param0: number): number;
							public findByKind(param0: string): java.util.List<java.lang.Integer>;
							/** @deprecated */
							public isPropertyWriteable(param0: string): boolean;
							public getFrameWidth(param0: number): number;
							public appendChild(param0: number, param1: number): void;
							public setPlaceholderBehaviorEnabled(param0: number, param1: boolean): void;
							public setTimeOffset(param0: number, param1: number): void;
							public getCropTranslationY(param0: number): number;
							public bringToFront(param0: number): void;
							public supportsBlur(param0: number): boolean;
							public setStrokePosition(param0: number, param1: ly.img.engine.StrokePosition): void;
							public getGlobalBoundingBoxX(param0: number): number;
							public getBlur(param0: number): number;
							public isPlaceholderEnabled(param0: number): boolean;
							public adjustCropToFillFrame(param0: number, param1: number): void;
							public getGradientColorStops(param0: number, param1: string): java.util.List<ly.img.engine.GradientColorStop>;
							public isEffectEnabled(param0: number): boolean;
							public setRotation(param0: number, param1: number): void;
							public sendBackward(param0: number): void;
							public findAllProperties(param0: number): java.util.List<string>;
							public getEnum(param0: number, param1: string): string;
							public setBlurEnabled(param0: number, param1: boolean): void;
							public createCutoutFromBlocks(param0: java.util.List<java.lang.Integer>, param1: number, param2: number): number;
							public setStrokeStyle(param0: number, param1: ly.img.engine.StrokeStyle): void;
							public setDuration(param0: number, param1: number): void;
							public getCropRotation(param0: number): number;
							public findByName(param0: string): java.util.List<java.lang.Integer>;
							public getDropShadowColor(param0: number): ly.img.engine.Color;
							public getTypeface(param0: number): ly.img.engine.Typeface;
							public isFlipHorizontal(param0: number): boolean;
							public getName(param0: number): string;
							public setBoolean(param0: number, param1: string, param2: boolean): void;
							public getFloat(param0: number, param1: string): number;
							/** @deprecated */
							public hasDropShadow(param0: number): boolean;
							public getVideoHeight(param0: number): number;
							public findAllSelected(): java.util.List<java.lang.Integer>;
							public getUUID(param0: number): string;
							public setCropTranslationY(param0: number, param1: number): void;
							/** @deprecated */
							public createFill(param0: string): number;
							public setAlwaysOnBottom(param0: number, param1: boolean): void;
							/** @deprecated */
							public createBlur(param0: string): number;
							public getDropShadowOffsetX(param0: number): number;
							public getMetadata(param0: number, param1: string): string;
							public getScreenSpaceBoundingBoxRect(param0: java.util.List<java.lang.Integer>): globalAndroid.graphics.RectF;
							public createBlur(param0: ly.img.engine.BlurType): number;
							public getGlobalBoundingBoxHeight(param0: number): number;
							public setCropScaleY(param0: number, param1: number): void;
							public onSelectionChanged(): kotlinx.coroutines.flow.Flow<any>;
							public supportsPlaybackControl(param0: number): boolean;
							public isValid(param0: number): boolean;
							public getFrameHeight(param0: number): number;
							public supportsPlaceholderBehavior(param0: number): boolean;
							public setFill(param0: number, param1: number): void;
							public isVisible(param0: number): boolean;
							/** @deprecated */
							public hasPlaceholderControls(param0: number): boolean;
							public setFont(param0: number, param1: globalAndroid.net.Uri, param2: ly.img.engine.Typeface): void;
							public supportsContentFillMode(param0: number): boolean;
							public getChildren(param0: number): java.util.List<java.lang.Integer>;
							public setEffectEnabled(param0: number, param1: boolean): void;
							/** @deprecated */
							public hasFill(param0: number): boolean;
							/** @deprecated */
							public hasTrim(param0: number): boolean;
							public getStrokeColor(param0: number): ly.img.engine.Color;
							public getDropShadowBlurRadiusY(param0: number): number;
							public isDropShadowEnabled(param0: number): boolean;
							public select(param0: number): void;
							public setStrokeEnabled(param0: number, param1: boolean): void;
							public findAll(): java.util.List<java.lang.Integer>;
							public getBoolean(param0: number, param1: string): boolean;
							public getPositionXMode(param0: number): ly.img.engine.PositionMode;
							public isPlaying(param0: number): boolean;
							public isIncludedInExport(param0: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module api {
					export module block {
						export class BlockNativeApi {
							public static class: java.lang.Class<ly.img.engine.internal.api.block.BlockNativeApi>;
							public static INSTANCE: ly.img.engine.internal.api.block.BlockNativeApi;
							public setStrokeColor(param0: number, param1: number, param2: ly.img.engine.Color, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setPositionX(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setRotation(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getGradientColorStops(param0: number, param1: number, param2: string, param3: ly.img.engine.internal.api.NativeCallback<java.util.List<ly.img.engine.GradientColorStop>,any>): void;
							public getTextColors(param0: number, param1: number, param2: number, param3: number, param4: ly.img.engine.internal.api.NativeCallback<java.util.List<ly.img.engine.Color>,any>): void;
							public generateVideoThumbnailSequence(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: ly.img.engine.internal.api.NativeCallback<ly.img.engine.VideoThumbnailResult,any>): number;
							public alignHorizontally(param0: number, param1: java.util.List<java.lang.Integer>, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getTrimOffset(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Double,any>): void;
							public setBoolean(param0: number, param1: number, param2: string, param3: boolean, param4: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getKind(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<string,any>): void;
							public supportsFill(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public setCropScaleRatio(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setDropShadowEnabled(param0: number, param1: number, param2: boolean, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public hasParent(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public getStrokeColor(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<ly.img.engine.Color,any>): void;
							public supportsBlur(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public getDropShadowColor(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<ly.img.engine.Color,any>): void;
							public onSelectionChanged(param0: number, param1: ly.img.engine.internal.api.NativeCallback<any,any>): number;
							public setBackgroundColorEnabled(param0: number, param1: number, param2: boolean, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public supportsShape(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public findByType(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.util.List<java.lang.Integer>,any>): void;
							public setSoloPlaybackEnabled(param0: number, param1: number, param2: boolean, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setSelected(param0: number, param1: number, param2: boolean, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public sendToBack(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setEnum(param0: number, param1: number, param2: string, param3: string, param4: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getDropShadowOffsetY(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public createBlur(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public setScopeEnabled(param0: number, param1: number, param2: string, param3: boolean, param4: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getDuration(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Double,any>): void;
							public setWidth(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getCropScaleY(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public getPositionY(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public isPlaceholderBehaviorEnabled(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public isAVResourceLoaded(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public fillParent(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setPositionXMode(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setMuted(param0: number, param1: number, param2: boolean, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getParent(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public getBlur(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public isDropShadowEnabled(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public onClicked(param0: number, param1: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): number;
							public getGlobalBoundingBoxX(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public setPlaying(param0: number, param1: number, param2: boolean, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public isAlwaysOnTop(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public isSoloPlaybackEnabled(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public setWidthMode(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public findAllProperties(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.util.List<string>,any>): void;
							public removeText(param0: number, param1: number, param2: number, param3: number, param4: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setName(param0: number, param1: number, param2: string, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public findByName(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.util.List<java.lang.Integer>,any>): void;
							public insertEffect(param0: number, param1: number, param2: number, param3: number, param4: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public supportsDuration(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public createShape(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public getString(param0: number, param1: number, param2: string, param3: ly.img.engine.internal.api.NativeCallback<string,any>): void;
							public cancelVideoThumbnailSequenceGeneration(param0: number, param1: number): void;
							public getOpacity(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public isPropertyWritable(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public setBackgroundColor(param0: number, param1: number, param2: ly.img.engine.RGBAColor, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getDropShadowClip(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public getFloat(param0: number, param1: number, param2: string, param3: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public select(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public supportsBlendMode(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public addImageFileURIToSourceSet(param0: number, param1: number, param2: string, param3: string, param4: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getShape(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public supportsCrop(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public getType(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<string,any>): void;
							public getVolume(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public isAlwaysOnBottom(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public getStrokeWidth(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public setClipped(param0: number, param1: number, param2: boolean, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public isPlaceholderEnabled(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public isFlipVertical(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public findAllSelected(param0: number, param1: ly.img.engine.internal.api.NativeCallback<java.util.List<java.lang.Integer>,any>): void;
							public replaceText(param0: number, param1: number, param2: string, param3: number, param4: number, param5: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public isVisible(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public setOpacity(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public canToggleItalicFont(param0: number, param1: number, param2: number, param3: number, param4: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public createCutoutFromOperation(param0: number, param1: java.util.List<java.lang.Integer>, param2: number, param3: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public getScreenSpaceBoundingBoxRect(param0: number, param1: java.util.List<java.lang.Integer>, param2: ly.img.engine.internal.api.NativeCallback<globalAndroid.graphics.RectF,any>): void;
							public getFill(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public setSourceSet(param0: number, param1: number, param2: string, param3: java.util.List<ly.img.engine.Source>, param4: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setBlur(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setCropRotation(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getRotation(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public isPlaying(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public isMuted(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public getWidthMode(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public isAllowedByScope(param0: number, param1: number, param2: string, param3: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public setPlaybackTime(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getFillSolidColor(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<ly.img.engine.RGBAColor,any>): void;
							public isLooping(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public getPlaybackTime(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Double,any>): void;
							public supportsStroke(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public setTextColor(param0: number, param1: number, param2: ly.img.engine.Color, param3: number, param4: number, param5: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setStrokeStyle(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getDropShadowBlurRadiusY(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public referencesAnyVariables(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public isAlignable(param0: number, param1: java.util.List<java.lang.Integer>, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public getColorSpotTint(param0: number, param1: number, param2: string, param3: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public isIncludedInExport(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public createFill(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public setPositionY(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public isDistributable(param0: number, param1: java.util.List<java.lang.Integer>, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public setLooping(param0: number, param1: number, param2: boolean, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getPositionXMode(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public getTotalSceneDuration(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Double,any>): void;
							public isSelected(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public adjustCropToFillFrame(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public exportVideo(param0: number, param1: number, param2: number, param3: number, param4: string, param5: ly.img.engine.ExportVideoOptions, param6: ly.img.engine.internal.api.NativeCallback<ly.img.engine.ExportVideoProgress,any>, param7: ly.img.engine.internal.api.NativeCallback<java.nio.ByteBuffer,any>): void;
							public removeEffect(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getEnumValues(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.util.List<string>,any>): void;
							public getStrokeStyle(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public setDuration(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public appendChild(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getBackgroundColor(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<ly.img.engine.RGBAColor,any>): void;
							public getUUID(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<string,any>): void;
							public getDropShadowBlurRadiusX(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public setPositionYMode(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getTextCursorRange(param0: number, param1: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getInt(param0: number, param1: number, param2: string, param3: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public supportsEffects(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public getMetadata(param0: number, param1: number, param2: string, param3: ly.img.engine.internal.api.NativeCallback<string,any>): void;
							public supportsDropShadow(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public setFont(param0: number, param1: number, param2: string, param3: ly.img.engine.Typeface, param4: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setStrokeCornerGeometry(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public isFillEnabled(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public getFrameWidth(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public setCropTranslationY(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public isVisibleAtCurrentPlaybackTime(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public setPlaceholderControlsButtonEnabled(param0: number, param1: number, param2: boolean, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getTypeface(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<ly.img.engine.Typeface,any>): void;
							public getSpotColorForCutoutType(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<string,any>): void;
							public supportsOpacity(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public supportsBackgroundColor(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public getVideoHeight(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public isTransformLocked(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public setPlaceholderBehaviorEnabled(param0: number, param1: number, param2: boolean, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setFillSolidColor(param0: number, param1: number, param2: ly.img.engine.RGBAColor, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getAVResourceTotalDuration(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Double,any>): void;
							public getEnum(param0: number, param1: number, param2: string, param3: ly.img.engine.internal.api.NativeCallback<string,any>): void;
							public setDropShadowClip(param0: number, param1: number, param2: boolean, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public isPlaceholderControlsOverlayEnabled(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public setFillEnabled(param0: number, param1: number, param2: boolean, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getColor(param0: number, param1: number, param2: string, param3: ly.img.engine.internal.api.NativeCallback<ly.img.engine.Color,any>): void;
							public setTransformLocked(param0: number, param1: number, param2: boolean, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setGradientColorStops(param0: number, param1: number, param2: string, param3: java.util.List<ly.img.engine.GradientColorStop>, param4: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public isStrokeEnabled(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public getEffects(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.util.List<java.lang.Integer>,any>): void;
							public isPropertyReadable(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public findAllPlaceholders(param0: number, param1: ly.img.engine.internal.api.NativeCallback<java.util.List<java.lang.Integer>,any>): void;
							public flipCropHorizontal(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public isScopeEnabled(param0: number, param1: number, param2: string, param3: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public createCutoutFromPath(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public resizeContentAware(param0: number, param1: java.util.List<java.lang.Integer>, param2: number, param3: number, param4: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getStrokeCornerGeometry(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public saveToString(param0: number, param1: java.util.List<java.lang.Integer>, param2: java.util.List<string>, param3: ly.img.engine.internal.api.NativeCallback<string,any>): void;
							public isEffectEnabled(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public getTextFontWeights(param0: number, param1: number, param2: number, param3: number, param4: ly.img.engine.internal.api.NativeCallback<java.util.List<java.lang.Integer>,any>): void;
							public generateAudioThumbnailSequence(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: ly.img.engine.internal.api.NativeCallback<ly.img.engine.AudioThumbnailResult,any>): number;
							public setStrokePosition(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getContentFillMode(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public removeMetadata(param0: number, param1: number, param2: string, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setInt(param0: number, param1: number, param2: string, param3: number, param4: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getGlobalBoundingBoxY(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public setAlwaysOnTop(param0: number, param1: number, param2: boolean, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setNativePixelBuffer(param0: number, param1: number, param2: number, param3: number, param4: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public isFlipHorizontal(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public cancelAudioThumbnailSequenceGeneration(param0: number, param1: number): void;
							public getTextCases(param0: number, param1: number, param2: number, param3: number, param4: ly.img.engine.internal.api.NativeCallback<java.util.List<java.lang.Integer>,any>): void;
							public setCropScaleX(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getBoolean(param0: number, param1: number, param2: string, param3: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public getStrokePosition(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public setDropShadowBlurRadiusY(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setTrimLength(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getHeight(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public setDropShadowColor(param0: number, param1: number, param2: ly.img.engine.Color, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public bringForward(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public scale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getPositionX(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public duplicate(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public destroy(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getGlobalBoundingBoxWidth(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public distributeVertically(param0: number, param1: java.util.List<java.lang.Integer>, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public group(param0: number, param1: java.util.List<java.lang.Integer>, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public getWidth(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public export(param0: number, param1: number, param2: string, param3: ly.img.engine.ExportOptions, param4: ly.img.engine.internal.api.NativeCallback<java.nio.ByteBuffer,any>): void;
							public setKind(param0: number, param1: number, param2: string, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getCropTranslationY(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public canToggleBoldFont(param0: number, param1: number, param2: number, param3: number, param4: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public hasEffectEnabled(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public flipCropVertical(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public supportsTrim(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public getFrameHeight(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public setColorSpot(param0: number, param1: number, param2: string, param3: string, param4: number, param5: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public supportsTimeOffset(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public createEffect(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public isValid(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public isPlaceholderControlsButtonEnabled(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public supportsContentFillMode(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public alignVertically(param0: number, param1: java.util.List<java.lang.Integer>, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public insertChild(param0: number, param1: number, param2: number, param3: number, param4: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public isCombinable(param0: number, param1: java.util.List<java.lang.Integer>, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public bringToFront(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setString(param0: number, param1: number, param2: string, param3: string, param4: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public appendEffect(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setStrokeWidth(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setDropShadowOffsetY(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setPlaceholderControlsOverlayEnabled(param0: number, param1: number, param2: boolean, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setHeightMode(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setDropShadowOffsetX(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setShape(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getGlobalBoundingBoxHeight(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public setColor(param0: number, param1: number, param2: string, param3: ly.img.engine.Color, param4: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setDropShadowBlurRadiusX(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setFill(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public combine(param0: number, param1: java.util.List<java.lang.Integer>, param2: number, param3: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public getCropScaleX(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public getTrimLength(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Double,any>): void;
							public ungroup(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getBlendMode(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public toggleItalicFont(param0: number, param1: number, param2: number, param3: number, param4: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setMetadata(param0: number, param1: number, param2: string, param3: string, param4: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public isClipped(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public getDouble(param0: number, param1: number, param2: string, param3: ly.img.engine.internal.api.NativeCallback<java.lang.Double,any>): void;
							public getCropScaleRatio(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public getName(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<string,any>): void;
							public forceLoadAVResource(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public enterGroup(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getSourceSet(param0: number, param1: number, param2: string, param3: ly.img.engine.internal.api.NativeCallback<java.util.List<ly.img.engine.Source>,any>): void;
							public getTextFontStyles(param0: number, param1: number, param2: number, param3: number, param4: ly.img.engine.internal.api.NativeCallback<java.util.List<java.lang.Integer>,any>): void;
							public setHeight(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public toggleBoldFont(param0: number, param1: number, param2: number, param3: number, param4: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getCropRotation(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public isGroupable(param0: number, param1: java.util.List<java.lang.Integer>, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public isBlurEnabled(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public setPlaceholderEnabled(param0: number, param1: number, param2: boolean, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setBlendMode(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getColorSpotName(param0: number, param1: number, param2: string, param3: ly.img.engine.internal.api.NativeCallback<string,any>): void;
							public setTrimOffset(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setSpotColorForCutoutType(param0: number, param1: number, param2: string, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public findAllMetadata(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.util.List<string>,any>): void;
							public setStrokeEnabled(param0: number, param1: number, param2: boolean, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getPositionYMode(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public sendBackward(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public saveToArchive(param0: number, param1: java.util.List<java.lang.Integer>, param2: ly.img.engine.internal.api.NativeCallback<java.nio.ByteBuffer,any>): void;
							public setCropScaleY(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setVolume(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public supportsPlaceholderBehavior(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public setFloat(param0: number, param1: number, param2: string, param3: number, param4: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public supportsPlaceholderControls(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public getFrameY(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public findByKind(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.util.List<java.lang.Integer>,any>): void;
							public exitGroup(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getChildren(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.util.List<java.lang.Integer>,any>): void;
							public getDropShadowOffsetX(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public supportsPlaybackControl(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public getCropTranslationX(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public getHeightMode(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public setDouble(param0: number, param1: number, param2: string, param3: number, param4: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public create(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public setTextCase(param0: number, param1: number, param2: number, param3: number, param4: number, param5: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setFlipHorizontal(param0: number, param1: number, param2: boolean, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getFrameX(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public createCutoutFromBlocks(param0: number, param1: java.util.List<java.lang.Integer>, param2: number, param3: number, param4: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public getVideoWidth(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public getTimeOffset(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Double,any>): void;
							public exportWithColorMask(param0: number, param1: number, param2: string, param3: ly.img.engine.RGBAColor, param4: ly.img.engine.ExportOptions, param5: ly.img.engine.internal.api.NativeCallback<java.util.List<java.nio.ByteBuffer>,any>): void;
							public getPropertyType(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public setContentFillMode(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setEffectEnabled(param0: number, param1: number, param2: boolean, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public loadFromArchive(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.util.List<java.lang.Integer>,any>): void;
							public findAll(param0: number, param1: ly.img.engine.internal.api.NativeCallback<java.util.List<java.lang.Integer>,any>): void;
							public setVisible(param0: number, param1: number, param2: boolean, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public distributeHorizontally(param0: number, param1: java.util.List<java.lang.Integer>, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setCropTranslationX(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setAlwaysOnBottom(param0: number, param1: number, param2: boolean, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setTimeOffset(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setBlurEnabled(param0: number, param1: number, param2: boolean, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public resetCrop(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public loadFromString(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.util.List<java.lang.Integer>,any>): void;
							public supportsPlaybackTime(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public setFlipVertical(param0: number, param1: number, param2: boolean, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public hasMetadata(param0: number, param1: number, param2: string, param3: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public setIncludedInExport(param0: number, param1: number, param2: boolean, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public isBackgroundColorEnabled(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module api {
					export module core {
						export class CoreNativeApi {
							public static class: java.lang.Class<ly.img.engine.internal.api.core.CoreNativeApi>;
							public static INSTANCE: ly.img.engine.internal.api.core.CoreNativeApi;
							public touchRotateDown(param0: number, param1: number, param2: java.util.List<any<java.lang.Float,java.lang.Float>>, param3: number): void;
							public releaseCallback(param0: number, param1: number): void;
							public touchPanMove(param0: number, param1: any<java.lang.Float,java.lang.Float>, param2: java.util.List<any<java.lang.Float,java.lang.Float>>, param3: number): void;
							public replaceText(param0: number, param1: number, param2: number, param3: string): void;
							public deleteText(param0: number, param1: number, param2: number): void;
							public touchPinchMove(param0: number, param1: number, param2: java.util.List<any<java.lang.Float,java.lang.Float>>, param3: number): void;
							public unregisterTextChanges(param0: number): void;
							public renderFrame(param0: number, param1: number, param2: number, param3: number): boolean;
							public touchPinchDown(param0: number, param1: number, param2: java.util.List<any<java.lang.Float,java.lang.Float>>, param3: number): void;
							public exitTextInputMode(param0: number): void;
							public releaseSubscription(param0: number, param1: number): void;
							public touchDown(param0: number, param1: number, param2: number, param3: number): void;
							public releaseEngine(param0: number): void;
							public touchRotateUp(param0: number, param1: number, param2: java.util.List<any<java.lang.Float,java.lang.Float>>, param3: number): void;
							public createEngine(param0: number, param1: boolean, param2: boolean): number;
							public touchRotateMove(param0: number, param1: number, param2: java.util.List<any<java.lang.Float,java.lang.Float>>, param3: number): void;
							public touchPanDown(param0: number, param1: any<java.lang.Float,java.lang.Float>, param2: java.util.List<any<java.lang.Float,java.lang.Float>>, param3: number): void;
							public onTextCommand(param0: number, param1: string): void;
							public bindOffscreenContext(param0: number, param1: number, param2: number): boolean;
							public bindSurfaceContext(param0: number, param1: globalAndroid.view.Surface, param2: number, param3: number): boolean;
							public update(param0: number): boolean;
							public touchPanUp(param0: number, param1: any<java.lang.Float,java.lang.Float>, param2: java.util.List<any<java.lang.Float,java.lang.Float>>, param3: number): void;
							public touchPinchUp(param0: number, param1: number, param2: java.util.List<any<java.lang.Float,java.lang.Float>>, param3: number): void;
							public touchUp(param0: number, param1: number, param2: number, param3: number): void;
							public touchMove(param0: number, param1: number, param2: number, param3: number): void;
							public releaseContext(param0: number): boolean;
							public registerTextChanges(param0: number, param1: ly.img.engine.internal.api.NativeCallback<ly.img.engine.internal.text.TextInputData,any>): void;
							public setTextSelection(param0: number, param1: number, param2: number): void;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module api {
					export module editor {
						export class EditorApiImpl extends ly.img.engine.internal.api.BaseApi<ly.img.engine.internal.api.editor.EditorNativeApi> implements ly.img.engine.EditorApi  {
							public static class: java.lang.Class<ly.img.engine.internal.api.editor.EditorApiImpl>;
							public startTracking(param0: string, param1: string, param2: string): void;
							public setSettingEnum(param0: string, param1: string): void;
							public createHistory(): number;
							public overrideTrackingEndpoint(param0: string): void;
							public getEditMode(): string;
							public findAllSpotColors(): java.util.List<string>;
							public removeSpotColor(param0: string): void;
							public getSettingBoolean(param0: string): boolean;
							public findAllSettings(): java.util.List<string>;
							public getAvailableMemory(): number;
							public getUsedMemory(): number;
							public getTextCursorPositionInScreenSpaceY(): number;
							public getSpotColorCMYK(param0: string): ly.img.engine.CMYKColor;
							public getSettingEnumOptions(param0: string): java.util.List<string>;
							public convertColorToColorSpace(param0: ly.img.engine.Color, param1: ly.img.engine.ColorSpace): ly.img.engine.Color;
							public setSettingInt(param0: string, param1: number): void;
							public getAbsoluteUri(param0: globalAndroid.net.Uri): globalAndroid.net.Uri;
							public getTextCursorPositionInScreenSpaceX(): number;
							public setBufferLength(param0: globalAndroid.net.Uri, param1: number): void;
							public onSettingsChanged(): kotlinx.coroutines.flow.Flow<any>;
							public findAllScopes(): java.util.List<string>;
							public getSettingInt(param0: string): number;
							public undo(): void;
							public getSettingEnum(param0: string): string;
							public setSpotColor(param0: string, param1: ly.img.engine.CMYKColor): void;
							public unlockWithLicense(param0: string): void;
							public setGlobalScope(param0: string, param1: ly.img.engine.GlobalScope): void;
							public getRole(): string;
							public setRole(param0: string): void;
							public defaultUriResolver(param0: globalAndroid.net.Uri): globalAndroid.net.Uri;
							public onCarouselPageChanged(): kotlinx.coroutines.flow.Flow<java.lang.Integer>;
							public getSettingString(param0: string): string;
							public setUriResolver(param0: any<any,any>): void;
							public constructor(param0: ly.img.engine.Engine, param1: any);
							public getMaxExportSize(): number;
							public getSettingType(param0: string): ly.img.engine.PropertyType;
							/** @deprecated */
							public getSpotColor(param0: string): ly.img.engine.RGBAColor;
							public getBufferData(param0: globalAndroid.net.Uri, param1: number, param2: number): java.nio.ByteBuffer;
							public getSpotColorRGB(param0: string): ly.img.engine.RGBAColor;
							public restoreBuffers(param0: java.util.List<any>): void;
							public setActiveHistory(param0: number): void;
							public onStateChanged(): kotlinx.coroutines.flow.Flow<any>;
							public setSettingString(param0: string, param1: string): void;
							public setSettingBoolean(param0: string, param1: boolean): void;
							public getSettingFloat(param0: string): number;
							public setEditMode(param0: string): void;
							public getGlobalScope(param0: string): ly.img.engine.GlobalScope;
							public setSpotColor(param0: string, param1: ly.img.engine.RGBAColor): void;
							public getActiveHistory(): number;
							public canRedo(): boolean;
							public redo(): void;
							public canUndo(): boolean;
							public setSettingFloat(param0: string, param1: number): void;
							public setBufferData(param0: globalAndroid.net.Uri, param1: number, param2: java.nio.ByteBuffer): void;
							public setTrackingMetadata(param0: ly.img.engine.internal.model.TrackingMetadata): void;
							public cloneBuffers(): java.util.List<any<string,java.nio.ByteBuffer>>;
							public setSettingColor(param0: string, param1: ly.img.engine.RGBAColor): void;
							public createBuffer(): globalAndroid.net.Uri;
							public addUndoStep(): void;
							public destroyBuffer(param0: globalAndroid.net.Uri): void;
							public constructor(param0: ly.img.engine.Engine);
							public getBufferLength(param0: globalAndroid.net.Uri): number;
							public getTrackingMetadata(): ly.img.engine.internal.model.TrackingMetadata;
							public destroyHistory(param0: number): void;
							public getActiveLicense(): string;
							public getSettingColor(param0: string): ly.img.engine.RGBAColor;
							public onHistoryUpdated(): kotlinx.coroutines.flow.Flow<any>;
							public onRoleChanged(): kotlinx.coroutines.flow.Flow<string>;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module api {
					export module editor {
						export class EditorNativeApi {
							public static class: java.lang.Class<ly.img.engine.internal.api.editor.EditorNativeApi>;
							public static INSTANCE: ly.img.engine.internal.api.editor.EditorNativeApi;
							public getGlobalScope(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public addUndoStep(param0: number, param1: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public defaultURIResolver(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<string,any>): void;
							public restoreBuffers(param0: number, param1: java.util.List<any>, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public redo(param0: number, param1: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public destroyBuffer(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getBufferLength(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public setSettingString(param0: number, param1: string, param2: string, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setTrackingMetadata(param0: number, param1: ly.img.engine.internal.model.TrackingMetadata, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public cloneBuffers(param0: number, param1: ly.img.engine.internal.api.NativeCallback<java.util.List<any<string,java.nio.ByteBuffer>>,any>): void;
							public getSettingEnum(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<string,any>): void;
							public setSpotColorCMYK(param0: number, param1: string, param2: number, param3: number, param4: number, param5: number, param6: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public onSettingsChanged(param0: number, param1: ly.img.engine.internal.api.NativeCallback<any,any>): number;
							public getSettingFloat(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public getTextCursorPositionInScreenSpaceX(param0: number, param1: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public getSettingBoolean(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public setBufferData(param0: number, param1: string, param2: number, param3: java.nio.ByteBuffer, param4: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getActiveLicense(param0: number, param1: ly.img.engine.internal.api.NativeCallback<string,any>): void;
							public undo(param0: number, param1: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setSettingFloat(param0: number, param1: string, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setGlobalScope(param0: number, param1: string, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setBufferLength(param0: number, param1: string, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getMaxExportSize(param0: number, param1: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public destroyHistory(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public findAllSpotColors(param0: number, param1: ly.img.engine.internal.api.NativeCallback<java.util.List<string>,any>): void;
							public setSettingColor(param0: number, param1: string, param2: ly.img.engine.RGBAColor, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public removeSpotColor(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setSettingBoolean(param0: number, param1: string, param2: boolean, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public onRoleChanged(param0: number, param1: ly.img.engine.internal.api.NativeCallback<string,any>): number;
							public setActiveHistory(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setRole(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getSpotColorCMYK(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<ly.img.engine.CMYKColor,any>): void;
							public getBufferData(param0: number, param1: string, param2: number, param3: number, param4: ly.img.engine.internal.api.NativeCallback<java.nio.ByteBuffer,any>): void;
							public convertColorToColorSpace(param0: number, param1: ly.img.engine.Color, param2: number, param3: ly.img.engine.internal.api.NativeCallback<ly.img.engine.Color,any>): void;
							public getRole(param0: number, param1: ly.img.engine.internal.api.NativeCallback<string,any>): void;
							public getAbsoluteURI(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<string,any>): void;
							public unlockWithLicense(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public canRedo(param0: number, param1: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public setURIResolver(param0: number, param1: ly.img.engine.internal.api.NativeCallback<string,string>): void;
							public setEditMode(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getActiveHistory(param0: number, param1: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public getSettingInt(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public canUndo(param0: number, param1: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public startTracking(param0: number, param1: string, param2: string, param3: string, param4: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getSettingType(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public createBuffer(param0: number, param1: ly.img.engine.internal.api.NativeCallback<string,any>): void;
							public getUsedMemory(param0: number, param1: ly.img.engine.internal.api.NativeCallback<java.lang.Long,any>): void;
							public findAllScopes(param0: number, param1: ly.img.engine.internal.api.NativeCallback<java.util.List<string>,any>): void;
							public setSettingEnum(param0: number, param1: string, param2: string, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getAvailableMemory(param0: number, param1: ly.img.engine.internal.api.NativeCallback<java.lang.Long,any>): void;
							public setSettingInt(param0: number, param1: string, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setSpotColorRGB(param0: number, param1: string, param2: number, param3: number, param4: number, param5: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public overrideTrackingEndpoint(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public getEditMode(param0: number, param1: ly.img.engine.internal.api.NativeCallback<string,any>): void;
							public getTrackingMetadata(param0: number, param1: ly.img.engine.internal.api.NativeCallback<ly.img.engine.internal.model.TrackingMetadata,any>): void;
							public getSettingEnumOptions(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.util.List<string>,any>): void;
							public getSpotColorRGB(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<ly.img.engine.RGBAColor,any>): void;
							public onCarouselPageChanged(param0: number, param1: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): number;
							public getTextCursorPositionInScreenSpaceY(param0: number, param1: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public onStateChanged(param0: number, param1: ly.img.engine.internal.api.NativeCallback<any,any>): number;
							public getSettingColor(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<ly.img.engine.RGBAColor,any>): void;
							public getSettingString(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<string,any>): void;
							public findAllSettings(param0: number, param1: ly.img.engine.internal.api.NativeCallback<java.util.List<string>,any>): void;
							public onHistoryUpdated(param0: number, param1: ly.img.engine.internal.api.NativeCallback<any,any>): number;
							public createHistory(param0: number, param1: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module api {
					export module event {
						export class EventApiImpl extends ly.img.engine.internal.api.BaseApi<ly.img.engine.internal.api.event.EventNativeApi> implements ly.img.engine.EventApi  {
							public static class: java.lang.Class<ly.img.engine.internal.api.event.EventApiImpl>;
							public constructor(param0: ly.img.engine.Engine, param1: any);
							public constructor(param0: ly.img.engine.Engine);
							public subscribe(param0: java.util.List<java.lang.Integer>): kotlinx.coroutines.flow.Flow<java.util.List<ly.img.engine.DesignBlockEvent>>;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module api {
					export module event {
						export class EventNativeApi {
							public static class: java.lang.Class<ly.img.engine.internal.api.event.EventNativeApi>;
							public static INSTANCE: ly.img.engine.internal.api.event.EventNativeApi;
							public subscribe(param0: number, param1: java.util.List<java.lang.Integer>, param2: ly.img.engine.internal.api.NativeCallback<java.util.List<ly.img.engine.DesignBlockEvent>,any>): number;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module api {
					export module scene {
						export class SceneApiImpl extends ly.img.engine.internal.api.BaseApi<ly.img.engine.internal.api.scene.SceneNativeApi> implements ly.img.engine.SceneApi  {
							public static class: java.lang.Class<ly.img.engine.internal.api.scene.SceneApiImpl>;
							public getZoomLevel(): number;
							public constructor(param0: ly.img.engine.Engine, param1: any);
							public createFromImage(param0: globalAndroid.net.Uri, param1: number, param2: number, param3: any): any;
							public saveToString(param0: number, param1: java.util.List<string>, param2: any): any;
							public setDesignUnit(param0: ly.img.engine.DesignUnit): void;
							public loadArchive(param0: globalAndroid.net.Uri, param1: any): any;
							public saveToArchive(param0: number, param1: any): any;
							public disableZoomAutoFit(param0: number): void;
							public load(param0: globalAndroid.net.Uri, param1: any): any;
							public setZoomLevel(param0: number): void;
							public load(param0: string, param1: any): any;
							public create(): number;
							public getPages(): java.util.List<java.lang.Integer>;
							public enableCameraZoomClamping(param0: java.util.List<java.lang.Integer>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
							public onActiveChanged(): kotlinx.coroutines.flow.Flow<any>;
							public enableZoomAutoFit(param0: number, param1: ly.img.engine.ZoomAutoFitAxis, param2: number, param3: number, param4: number, param5: number): void;
							public disableCameraZoomClamping(): void;
							public get(): java.lang.Integer;
							/** @deprecated */
							public findNearestToViewPortCenterByType(param0: string): java.util.List<java.lang.Integer>;
							public createForVideo(): number;
							public getMode(): ly.img.engine.SceneMode;
							public isZoomAutoFitEnabled(param0: number): boolean;
							public onZoomLevelChanged(): kotlinx.coroutines.flow.Flow<any>;
							public enableCameraPositionClamping(param0: java.util.List<java.lang.Integer>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
							public getDesignUnit(): ly.img.engine.DesignUnit;
							public applyTemplate(param0: string, param1: any): any;
							public isCameraPositionClampingEnabled(param0: number): boolean;
							public isCameraZoomClampingEnabled(param0: number): boolean;
							public disableCameraPositionClamping(): void;
							public findNearestToViewPortCenterByKind(param0: string): java.util.List<java.lang.Integer>;
							public constructor(param0: ly.img.engine.Engine);
							public getCurrentPage(): java.lang.Integer;
							public findNearestToViewPortCenterByType(param0: ly.img.engine.DesignBlockType): java.util.List<java.lang.Integer>;
							public createFromVideo(param0: globalAndroid.net.Uri, param1: any): any;
							public zoomToBlock(param0: number, param1: number, param2: number, param3: number, param4: number, param5: any): any;
							public applyTemplate(param0: globalAndroid.net.Uri, param1: any): any;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module api {
					export module scene {
						export class SceneNativeApi {
							public static class: java.lang.Class<ly.img.engine.internal.api.scene.SceneNativeApi>;
							public static INSTANCE: ly.img.engine.internal.api.scene.SceneNativeApi;
							public getSceneList(param0: number, param1: ly.img.engine.internal.api.NativeCallback<java.util.List<java.lang.Integer>,any>): void;
							public createForVideo(param0: number, param1: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): number;
							public getCurrentPage(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public applyTemplate(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public saveToString(param0: number, param1: number, param2: java.util.List<string>, param3: ly.img.engine.internal.api.NativeCallback<string,any>): void;
							public disableZoomAutoFit(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public loadFromString(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public enableCameraPositionClamping(param0: number, param1: java.util.List<java.lang.Integer>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public onActiveChanged(param0: number, param1: ly.img.engine.internal.api.NativeCallback<any,any>): number;
							public applyTemplateFromResource(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setZoomLevel(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public zoomToBlock(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public loadFromResource(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public createFromVideo(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public getZoomLevel(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Float,any>): void;
							public findNearestToViewPortCenterByKind(param0: number, param1: number, param2: string, param3: ly.img.engine.internal.api.NativeCallback<java.util.List<java.lang.Integer>,any>): void;
							public getDesignUnit(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public getPages(param0: number, param1: ly.img.engine.internal.api.NativeCallback<java.util.List<java.lang.Integer>,any>): void;
							public onZoomLevelChanged(param0: number, param1: ly.img.engine.internal.api.NativeCallback<any,any>): number;
							public isZoomAutoFitEnabled(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public enableZoomAutoFit(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public disableCameraPositionClamping(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public setDesignUnit(param0: number, param1: number, param2: number, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public loadFromArchive(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public isCameraPositionClampingEnabled(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public saveToArchive(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.nio.ByteBuffer,any>): void;
							public disableCameraZoomClamping(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public create(param0: number, param1: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): number;
							public isCameraZoomClampingEnabled(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Boolean,any>): void;
							public createFromImage(param0: number, param1: string, param2: number, param3: number, param4: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public getMode(param0: number, param1: number, param2: ly.img.engine.internal.api.NativeCallback<java.lang.Integer,any>): void;
							public enableCameraZoomClamping(param0: number, param1: java.util.List<java.lang.Integer>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public findNearestToViewPortCenterByType(param0: number, param1: number, param2: string, param3: ly.img.engine.internal.api.NativeCallback<java.util.List<java.lang.Integer>,any>): void;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module api {
					export module variable {
						export class VariableApiImpl extends ly.img.engine.internal.api.BaseApi<ly.img.engine.internal.api.variable.VariableNativeApi> implements ly.img.engine.VariableApi  {
							public static class: java.lang.Class<ly.img.engine.internal.api.variable.VariableApiImpl>;
							public findAll(): java.util.List<string>;
							public constructor(param0: ly.img.engine.Engine, param1: any);
							public constructor(param0: ly.img.engine.Engine);
							public set(param0: string, param1: string): void;
							public get(param0: string): string;
							public remove(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module api {
					export module variable {
						export class VariableNativeApi {
							public static class: java.lang.Class<ly.img.engine.internal.api.variable.VariableNativeApi>;
							public static INSTANCE: ly.img.engine.internal.api.variable.VariableNativeApi;
							public findAll(param0: number, param1: ly.img.engine.internal.api.NativeCallback<java.util.List<string>,any>): void;
							public get(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<string,any>): void;
							public set(param0: number, param1: string, param2: string, param3: ly.img.engine.internal.api.NativeCallback<any,any>): void;
							public remove(param0: number, param1: string, param2: ly.img.engine.internal.api.NativeCallback<any,any>): void;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module context {
					export abstract class Context {
						public static class: java.lang.Class<ly.img.engine.internal.context.Context>;
						public constructor(param0: ly.img.engine.Engine);
						public release(): void;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module context {
					export class OffscreenContext extends ly.img.engine.internal.context.Context {
						public static class: java.lang.Class<ly.img.engine.internal.context.OffscreenContext>;
						public constructor(param0: ly.img.engine.Engine, param1: number, param2: number);
						public constructor(param0: ly.img.engine.Engine);
						public release(): void;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module context {
					export class SurfaceHolderContext extends ly.img.engine.internal.context.Context {
						public static class: java.lang.Class<ly.img.engine.internal.context.SurfaceHolderContext>;
						public constructor(param0: ly.img.engine.Engine);
						public constructor(param0: ly.img.engine.Engine, param1: globalAndroid.view.SurfaceHolder);
						public release(): void;
					}
					export module SurfaceHolderContext {
						export class Companion {
							public static class: java.lang.Class<ly.img.engine.internal.context.SurfaceHolderContext.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module context {
					export class TextureViewContext extends ly.img.engine.internal.context.Context {
						public static class: java.lang.Class<ly.img.engine.internal.context.TextureViewContext>;
						public constructor(param0: ly.img.engine.Engine);
						public constructor(param0: ly.img.engine.Engine, param1: globalAndroid.view.TextureView);
						public release(): void;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module model {
					export abstract class FetchResult {
						public static class: java.lang.Class<ly.img.engine.internal.model.FetchResult>;
						public static KEY_SUCCESS: number;
						public static KEY_ERROR: number;
						public static KEY_PENDING: number;
						public getKey(): number;
					}
					export module FetchResult {
						export class Companion {
							public static class: java.lang.Class<ly.img.engine.internal.model.FetchResult.Companion>;
						}
						export class Error extends ly.img.engine.internal.model.FetchResult {
							public static class: java.lang.Class<ly.img.engine.internal.model.FetchResult.Error>;
							public constructor(param0: java.lang.Exception);
							public getException(): java.lang.Exception;
						}
						export class Pending extends ly.img.engine.internal.model.FetchResult {
							public static class: java.lang.Class<ly.img.engine.internal.model.FetchResult.Pending>;
							public getProgress(): number;
							public constructor(param0: number);
						}
						export class Success extends ly.img.engine.internal.model.FetchResult {
							public static class: java.lang.Class<ly.img.engine.internal.model.FetchResult.Success>;
							public constructor(param0: java.io.File);
							public getFile(): java.io.File;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module model {
					export class SessionMetadata {
						public static class: java.lang.Class<ly.img.engine.internal.model.SessionMetadata>;
						public getUserId(): string;
						public constructor(param0: string, param1: string, param2: string);
						public getDeviceId(): string;
						public getLicense(): string;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module model {
					export class TrackingMetadata {
						public static class: java.lang.Class<ly.img.engine.internal.model.TrackingMetadata>;
						public getApiKey(): string;
						public getUserId(): string;
						public getEndpoint(): string;
						public getSessionId(): string;
						public getDeviceId(): string;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module text {
					export class EngineInputView {
						public static class: java.lang.Class<ly.img.engine.internal.text.EngineInputView>;
						public setTextInputData(param0: ly.img.engine.internal.text.TextInputData): void;
						public constructor(param0: globalAndroid.content.Context, param1: number, param2: ly.img.engine.Engine);
						public onFocusChange(param0: globalAndroid.view.View, param1: boolean): void;
						public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public onAction(param0: ly.img.engine.internal.text.TextActionModeCallback.Action): void;
						public onGlobalLayout(): void;
						public clear(): void;
						public onCreateInputConnection(param0: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
					}
					export module EngineInputView {
						export class Companion {
							public static class: java.lang.Class<ly.img.engine.internal.text.EngineInputView.Companion>;
							public mapToNative(param0: string, param1: number, param2: number): any<java.lang.Integer,java.lang.Integer>;
							public mapToGrapheme(param0: string, param1: number, param2: number): any<java.lang.Integer,java.lang.Integer>;
						}
						export class EngineInputConnection {
							public static class: java.lang.Class<ly.img.engine.internal.text.EngineInputView.EngineInputConnection>;
							public setTextAndSelection(param0: ly.img.engine.internal.text.TextInputData): void;
							public isActive(): boolean;
							public getExtractedText(param0: globalAndroid.view.inputmethod.ExtractedTextRequest, param1: number): globalAndroid.view.inputmethod.ExtractedText;
							public endBatchEdit(): boolean;
							public closeConnection(): void;
							public clear(): void;
							public getEditable(): globalAndroid.text.Editable;
							public constructor(param0: ly.img.engine.internal.text.EngineInputView);
							public setSelection(param0: number, param1: number): boolean;
							public beginBatchEdit(): boolean;
							public refreshSelection(): any;
							public performContextMenuAction(param0: number): boolean;
						}
						export class EngineStringBuilder {
							public static class: java.lang.Class<ly.img.engine.internal.text.EngineInputView.EngineStringBuilder>;
							public charAt(param0: number): string;
							public getLength(): number;
							public get(param0: number): string;
							public constructor(param0: string);
							public clear(): void;
							public replace(param0: number, param1: number, param2: string): globalAndroid.text.SpannableStringBuilder;
							public length(): number;
							public delete(param0: number, param1: number): globalAndroid.text.SpannableStringBuilder;
						}
						export class WhenMappings {
							public static class: java.lang.Class<ly.img.engine.internal.text.EngineInputView.WhenMappings>;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module text {
					export class TextActionModeCallback {
						public static class: java.lang.Class<ly.img.engine.internal.text.TextActionModeCallback>;
						public constructor(param0: globalAndroid.graphics.RectF, param1: ly.img.engine.internal.text.TextInputData, param2: any<any,any>);
						public onPrepareActionMode(param0: globalAndroid.view.ActionMode, param1: globalAndroid.view.Menu): boolean;
						public onDestroyActionMode(param0: globalAndroid.view.ActionMode): void;
						public onGetContentRect(param0: globalAndroid.view.ActionMode, param1: globalAndroid.view.View, param2: globalAndroid.graphics.Rect): void;
						public onCreateActionMode(param0: globalAndroid.view.ActionMode, param1: globalAndroid.view.Menu): boolean;
						public onActionItemClicked(param0: globalAndroid.view.ActionMode, param1: globalAndroid.view.MenuItem): boolean;
					}
					export module TextActionModeCallback {
						export class Action {
							public static class: java.lang.Class<ly.img.engine.internal.text.TextActionModeCallback.Action>;
							public static CUT: ly.img.engine.internal.text.TextActionModeCallback.Action;
							public static COPY: ly.img.engine.internal.text.TextActionModeCallback.Action;
							public static PASTE: ly.img.engine.internal.text.TextActionModeCallback.Action;
							public static SELECT_ALL: ly.img.engine.internal.text.TextActionModeCallback.Action;
							public static valueOf(param0: string): ly.img.engine.internal.text.TextActionModeCallback.Action;
							public static values(): androidNative.Array<ly.img.engine.internal.text.TextActionModeCallback.Action>;
							public getAlphabeticShortcut(): string;
							public getStringResId(): number;
						}
						export class WhenMappings {
							public static class: java.lang.Class<ly.img.engine.internal.text.TextActionModeCallback.WhenMappings>;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module text {
					export class TextHelper {
						public static class: java.lang.Class<ly.img.engine.internal.text.TextHelper>;
						public constructor(param0: globalAndroid.view.View, param1: number, param2: ly.img.engine.Engine);
						public release(): void;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module text {
					export class TextInputData {
						public static class: java.lang.Class<ly.img.engine.internal.text.TextInputData>;
						public getForceHideActionMode(): boolean;
						public component5(): boolean;
						public copy(param0: string, param1: number, param2: number, param3: globalAndroid.graphics.RectF, param4: boolean): ly.img.engine.internal.text.TextInputData;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getText(): string;
						public toString(): string;
						public getSelectionRect(): globalAndroid.graphics.RectF;
						public component4(): globalAndroid.graphics.RectF;
						public constructor(param0: string, param1: number, param2: number, param3: globalAndroid.graphics.RectF, param4: boolean);
						public getSelectionStart(): number;
						public component2(): number;
						public getSelectionEnd(): number;
						public component3(): number;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module touch {
					export class PanGestureDetector {
						public static class: java.lang.Class<ly.img.engine.internal.touch.PanGestureDetector>;
						public constructor(param0: ly.img.engine.internal.touch.PanGestureDetector.OnPanGestureListener);
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					}
					export module PanGestureDetector {
						export class Companion {
							public static class: java.lang.Class<ly.img.engine.internal.touch.PanGestureDetector.Companion>;
						}
						export class OnPanGestureListener {
							public static class: java.lang.Class<ly.img.engine.internal.touch.PanGestureDetector.OnPanGestureListener>;
							/**
							 * Constructs a new instance of the ly.img.engine.internal.touch.PanGestureDetector$OnPanGestureListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onPanBegin(param0: number, param1: number): void;
								onPan(param0: number, param1: number): void;
								onPanEnd(param0: number, param1: number): void;
							});
							public constructor();
							public onPanBegin(param0: number, param1: number): void;
							public onPanEnd(param0: number, param1: number): void;
							public onPan(param0: number, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module touch {
					export class RotationGestureDetector {
						public static class: java.lang.Class<ly.img.engine.internal.touch.RotationGestureDetector>;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public constructor(param0: ly.img.engine.internal.touch.RotationGestureDetector.OnRotationGestureListener);
					}
					export module RotationGestureDetector {
						export class Companion {
							public static class: java.lang.Class<ly.img.engine.internal.touch.RotationGestureDetector.Companion>;
						}
						export class OnRotationGestureListener {
							public static class: java.lang.Class<ly.img.engine.internal.touch.RotationGestureDetector.OnRotationGestureListener>;
							/**
							 * Constructs a new instance of the ly.img.engine.internal.touch.RotationGestureDetector$OnRotationGestureListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onRotateBegin(param0: number): void;
								onRotate(param0: number): void;
								onRotateEnd(param0: number): void;
							});
							public constructor();
							public onRotateEnd(param0: number): void;
							public onRotate(param0: number): void;
							public onRotateBegin(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module engine {
			export module internal {
				export module touch {
					export class TouchHelper implements ly.img.engine.internal.touch.RotationGestureDetector.OnRotationGestureListener, ly.img.engine.internal.touch.PanGestureDetector.OnPanGestureListener {
						public static class: java.lang.Class<ly.img.engine.internal.touch.TouchHelper>;
						public onScaleEnd(param0: globalAndroid.view.ScaleGestureDetector): void;
						public onPanBegin(param0: number, param1: number): void;
						public onPanEnd(param0: number, param1: number): void;
						public constructor(param0: globalAndroid.view.View, param1: number, param2: ly.img.engine.Engine);
						public onRotateEnd(param0: number): void;
						public onRotate(param0: number): void;
						public onScaleBegin(param0: globalAndroid.view.ScaleGestureDetector): boolean;
						public release(): void;
						public onScale(param0: globalAndroid.view.ScaleGestureDetector): boolean;
						public onPan(param0: number, param1: number): void;
						public onRotateBegin(param0: number): void;
					}
				}
			}
		}
	}
}

//Generics information:
//ly.img.engine.ObjectType.GenericBlockType:1
//ly.img.engine.internal.api.BaseApi:1
//ly.img.engine.internal.api.BaseApi.NativeCallbackImpl:2
//ly.img.engine.internal.api.NativeCallback:2

