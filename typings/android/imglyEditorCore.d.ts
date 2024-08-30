/// <reference path="android_declarations.d.ts"/>

declare module ly {
	export module img {
		export module editor {
			export module core {
				export module engine {
					export class EngineRenderTarget {
						public static class: java.lang.Class<ly.img.editor.core.engine.EngineRenderTarget>;
						public static SURFACE_VIEW: ly.img.editor.core.engine.EngineRenderTarget;
						public static TEXTURE_VIEW: ly.img.editor.core.engine.EngineRenderTarget;
						public static values(): androidNative.Array<ly.img.editor.core.engine.EngineRenderTarget>;
						public static getEntries(): any;
						public static valueOf(value: string): ly.img.editor.core.engine.EngineRenderTarget;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module core {
				export module event {
					export class EditorEvent {
						public static class: java.lang.Class<ly.img.editor.core.event.EditorEvent>;
						/**
						 * Constructs a new instance of the ly.img.editor.core.event.EditorEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module core {
				export module event {
					export class EditorEventHandler {
						public static class: java.lang.Class<ly.img.editor.core.event.EditorEventHandler>;
						/**
						 * Constructs a new instance of the ly.img.editor.core.event.EditorEventHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							send(param0: ly.img.editor.core.event.EditorEvent): void;
							sendCloseEditorEvent(): void;
						});
						public constructor();
						public sendCloseEditorEvent(): void;
						public send(param0: ly.img.editor.core.event.EditorEvent): void;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module core {
				export module iconpack {
					export class IconPack {
						public static class: java.lang.Class<ly.img.editor.core.iconpack.IconPack>;
						public static INSTANCE: ly.img.editor.core.iconpack.IconPack;
						public static $stable: number;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module core {
				export module library {
					export class AssetLibrary {
						public static class: java.lang.Class<ly.img.editor.core.library.AssetLibrary>;
						public static $stable: number;
						public constructor(tabs: any, elements: any, images: any, videos: any, audios: any, text: any, shapes: any, stickers: any);
						public getImages(): any;
						public equals(other: any): boolean;
						public component2(): any;
						public hashCode(): number;
						public component8(): any;
						public getTabs(): any;
						public component3(): any;
						public toString(): string;
						public component7(): any;
						public getShapes(): any;
						public component1(): any;
						public component4(): any;
						public getText(): any;
						public component6(): any;
						public copy(tabs: any, elements: any, images: any, videos: any, audios: any, text: any, shapes: any, stickers: any): ly.img.editor.core.library.AssetLibrary;
						public getElements(): any;
						public getVideos(): any;
						public getAudios(): any;
						public component5(): any;
						public getStickers(): any;
					}
					export module AssetLibrary {
						export class Companion {
							public static class: java.lang.Class<ly.img.editor.core.library.AssetLibrary.Companion>;
							public getDefault(tabs: java.util.List<any>, images: ly.img.editor.core.library.LibraryCategory, videos: ly.img.editor.core.library.LibraryCategory, audios: ly.img.editor.core.library.LibraryCategory, text: ly.img.editor.core.library.LibraryCategory, shapes: ly.img.editor.core.library.LibraryCategory, stickers: ly.img.editor.core.library.LibraryCategory): ly.img.editor.core.library.AssetLibrary;
						}
						export class Tab {
							public static class: java.lang.Class<ly.img.editor.core.library.AssetLibrary.Tab>;
							public static ELEMENTS: ly.img.editor.core.library.AssetLibrary.Tab;
							public static IMAGES: ly.img.editor.core.library.AssetLibrary.Tab;
							public static VIDEOS: ly.img.editor.core.library.AssetLibrary.Tab;
							public static AUDIOS: ly.img.editor.core.library.AssetLibrary.Tab;
							public static TEXT: ly.img.editor.core.library.AssetLibrary.Tab;
							public static SHAPES: ly.img.editor.core.library.AssetLibrary.Tab;
							public static STICKERS: ly.img.editor.core.library.AssetLibrary.Tab;
							public static getEntries(): any;
							public static valueOf(value: string): ly.img.editor.core.library.AssetLibrary.Tab;
							public static values(): androidNative.Array<ly.img.editor.core.library.AssetLibrary.Tab>;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module core {
				export module library {
					export class AssetType {
						public static class: java.lang.Class<ly.img.editor.core.library.AssetType>;
						public static Image: ly.img.editor.core.library.AssetType;
						public static Audio: ly.img.editor.core.library.AssetType;
						public static Video: ly.img.editor.core.library.AssetType;
						public static Gallery: ly.img.editor.core.library.AssetType;
						public static Shape: ly.img.editor.core.library.AssetType;
						public static Sticker: ly.img.editor.core.library.AssetType;
						public static Text: ly.img.editor.core.library.AssetType;
						public static Typeface: ly.img.editor.core.library.AssetType;
						public static Filter: ly.img.editor.core.library.AssetType;
						public static Effect: ly.img.editor.core.library.AssetType;
						public static Blur: ly.img.editor.core.library.AssetType;
						public static values(): androidNative.Array<ly.img.editor.core.library.AssetType>;
						public static getEntries(): any;
						public static valueOf(value: string): ly.img.editor.core.library.AssetType;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module core {
				export module library {
					export class LibraryCategory {
						public static class: java.lang.Class<ly.img.editor.core.library.LibraryCategory>;
						public static $stable: number;
						public component4(): boolean;
						public equals(other: any): boolean;
						public isHalfExpandedInitially(): boolean;
						public hashCode(): number;
						public getTabSelectedIcon(): androidx.compose.ui.graphics.vector.ImageVector;
						public constructor(tabTitleRes: number, tabSelectedIcon: androidx.compose.ui.graphics.vector.ImageVector, tabUnselectedIcon: androidx.compose.ui.graphics.vector.ImageVector, isHalfExpandedInitially: boolean, content: ly.img.editor.core.library.LibraryContent);
						public copy(tabTitleRes: number, tabSelectedIcon: androidx.compose.ui.graphics.vector.ImageVector, tabUnselectedIcon: androidx.compose.ui.graphics.vector.ImageVector, isHalfExpandedInitially: boolean, content: ly.img.editor.core.library.LibraryContent): ly.img.editor.core.library.LibraryCategory;
						public toString(): string;
						public getTabTitleRes(): number;
						public getContent(): ly.img.editor.core.library.LibraryContent;
						public getTabUnselectedIcon(): androidx.compose.ui.graphics.vector.ImageVector;
						public component3(): androidx.compose.ui.graphics.vector.ImageVector;
						public component5(): ly.img.editor.core.library.LibraryContent;
						public component1(): number;
						public component2(): androidx.compose.ui.graphics.vector.ImageVector;
					}
					export module LibraryCategory {
						export class Companion {
							public static class: java.lang.Class<ly.img.editor.core.library.LibraryCategory.Companion>;
							public getSourceTypes(it: ly.img.editor.core.library.LibraryContent): java.util.List<ly.img.editor.core.library.data.AssetSourceType>;
							public getVideo(): ly.img.editor.core.library.LibraryCategory;
							public getShapes(): ly.img.editor.core.library.LibraryCategory;
							public getStickers(): ly.img.editor.core.library.LibraryCategory;
							public getElements($this$getElements_u24lambda_u2416_u24lambda_u240: ly.img.engine.SceneMode, $i$a$_let_LibraryCategory$Companion$getElements$1$2$1: ly.img.editor.core.library.LibraryCategory, p0: ly.img.editor.core.library.LibraryCategory, $i$a$_let_LibraryCategory$Companion$getElements$1$2$2: ly.img.editor.core.library.LibraryCategory, p0: ly.img.editor.core.library.LibraryCategory, $i$a$_buildList_LibraryCategory$Companion$getElements$1$2: ly.img.editor.core.library.LibraryCategory, $this$getElements_u24lambda_u2416_u24lambda_u242: ly.img.editor.core.library.LibraryCategory): ly.img.editor.core.library.LibraryCategory;
							public getImages(): ly.img.editor.core.library.LibraryCategory;
							public getAudio(): ly.img.editor.core.library.LibraryCategory;
							public getText(): ly.img.editor.core.library.LibraryCategory;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module core {
				export module library {
					export class LibraryContent {
						public static class: java.lang.Class<ly.img.editor.core.library.LibraryContent>;
						/**
						 * Constructs a new instance of the ly.img.editor.core.library.LibraryContent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							"<clinit>"(): void;
						});
						public constructor();
					}
					export module LibraryContent {
						export class Companion {
							public static class: java.lang.Class<ly.img.editor.core.library.LibraryContent.Companion>;
							public getVideo(): ly.img.editor.core.library.LibraryContent.Sections;
							public getStickers(): ly.img.editor.core.library.LibraryContent.Sections;
							public getAudio(): ly.img.editor.core.library.LibraryContent.Sections;
							public getText(): ly.img.editor.core.library.LibraryContent.Sections;
							public getShapes(): ly.img.editor.core.library.LibraryContent.Sections;
							public getImages(): ly.img.editor.core.library.LibraryContent.Sections;
						}
						export class Grid extends ly.img.editor.core.library.LibraryContent {
							public static class: java.lang.Class<ly.img.editor.core.library.LibraryContent.Grid>;
							public static $stable: number;
							public component5(): ly.img.editor.core.library.AssetType;
							public hashCode(): number;
							public getSourceType(): ly.img.editor.core.library.data.AssetSourceType;
							public toString(): string;
							public constructor(titleRes: number, sourceType: ly.img.editor.core.library.data.AssetSourceType, groups: java.util.List<string>, perPage: number, assetType: ly.img.editor.core.library.AssetType);
							public getPerPage(): number;
							public getAssetType(): ly.img.editor.core.library.AssetType;
							public component1(): number;
							public component3(): java.util.List<string>;
							public getGroups(): java.util.List<string>;
							public getTitleRes(): number;
							public component4(): number;
							public equals(other: any): boolean;
							public component2(): ly.img.editor.core.library.data.AssetSourceType;
							public copy(titleRes: number, sourceType: ly.img.editor.core.library.data.AssetSourceType, groups: java.util.List<string>, perPage: number, assetType: ly.img.editor.core.library.AssetType): ly.img.editor.core.library.LibraryContent.Grid;
						}
						export class Section {
							public static class: java.lang.Class<ly.img.editor.core.library.LibraryContent.Section>;
							public static $stable: number;
							public getTitleRes(): java.lang.Integer;
							public getSourceTypes(): java.util.List<ly.img.editor.core.library.data.AssetSourceType>;
							public component5(): boolean;
							public hashCode(): number;
							public copy(titleRes: java.lang.Integer, sourceTypes: java.util.List<any>, groups: java.util.List<string>, addGroupedSubSections: boolean, showUpload: boolean, count: number, assetType: ly.img.editor.core.library.AssetType, expandContent: ly.img.editor.core.library.LibraryContent): ly.img.editor.core.library.LibraryContent.Section;
							public component2(): java.util.List<ly.img.editor.core.library.data.AssetSourceType>;
							public toString(): string;
							public getExpandContent(): ly.img.editor.core.library.LibraryContent;
							public component1(): java.lang.Integer;
							public getCount(): number;
							public getAddGroupedSubSections(): boolean;
							public component8(): ly.img.editor.core.library.LibraryContent;
							public constructor($i$a$_require_LibraryContent$Section$2: java.lang.Integer, $i$a$_require_LibraryContent$Section$3: java.util.List<any>, $i$a$_require_LibraryContent$Section$4: java.util.List<string>, this_: boolean, titleRes: boolean, sourceTypes: number, groups: ly.img.editor.core.library.AssetType, addGroupedSubSections: ly.img.editor.core.library.LibraryContent);
							public component7(): ly.img.editor.core.library.AssetType;
							public getAssetType(): ly.img.editor.core.library.AssetType;
							public component3(): java.util.List<string>;
							public getGroups(): java.util.List<string>;
							public equals(other: any): boolean;
							public component6(): number;
							public component4(): boolean;
							public getShowUpload(): boolean;
						}
						export class Sections extends ly.img.editor.core.library.LibraryContent {
							public static class: java.lang.Class<ly.img.editor.core.library.LibraryContent.Sections>;
							public static $stable: number;
							public component1(): number;
							public hashCode(): number;
							public getTitleRes(): number;
							public equals(other: any): boolean;
							public constructor(titleRes: number, sections: java.util.List<ly.img.editor.core.library.LibraryContent.Section>);
							public toString(): string;
							public getSections(): java.util.List<ly.img.editor.core.library.LibraryContent.Section>;
							public copy(titleRes: number, sections: java.util.List<ly.img.editor.core.library.LibraryContent.Section>): ly.img.editor.core.library.LibraryContent.Sections;
							public component2(): java.util.List<ly.img.editor.core.library.LibraryContent.Section>;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module core {
				export module library {
					export module data {
						export class AssetSourceType {
							public static class: java.lang.Class<ly.img.editor.core.library.data.AssetSourceType>;
							public static $stable: number;
							public constructor(sourceId: string);
							public getSourceId(): string;
						}
						export module AssetSourceType {
							export class Companion {
								public static class: java.lang.Class<ly.img.editor.core.library.data.AssetSourceType.Companion>;
								public getShapes(): ly.img.editor.core.library.data.AssetSourceType;
								public getAudioUploads(): ly.img.editor.core.library.data.UploadAssetSourceType;
								public getText(): ly.img.editor.core.library.data.AssetSourceType;
								public getImages(): ly.img.editor.core.library.data.AssetSourceType;
								public getStickers(): ly.img.editor.core.library.data.AssetSourceType;
								public getTypeface(): ly.img.editor.core.library.data.AssetSourceType;
								public getAudio(): ly.img.editor.core.library.data.AssetSourceType;
								public getVideoUploads(): ly.img.editor.core.library.data.UploadAssetSourceType;
								public getImageUploads(): ly.img.editor.core.library.data.UploadAssetSourceType;
								public getVideos(): ly.img.editor.core.library.data.AssetSourceType;
							}
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module core {
				export module library {
					export module data {
						export class TextAssetSource {
							public static class: java.lang.Class<ly.img.editor.core.library.data.TextAssetSource>;
							public static $stable: number;
							public constructor(engine: ly.img.engine.Engine, typeface: ly.img.engine.Typeface);
							public applyAsset(this_: ly.img.engine.Asset, this_: any): any;
							public findAssets(it: ly.img.engine.FindAssetsQuery, element$iv$iv: any): any;
							public getGroups($completion: any): any;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module core {
				export module library {
					export module data {
						export class TypefaceProvider {
							public static class: java.lang.Class<ly.img.editor.core.library.data.TypefaceProvider>;
							public static $stable: number;
							public constructor();
							public provideTypeface(name: ly.img.engine.Engine, $continuation: string, $result: any): any;
						}
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module core {
				export module library {
					export module data {
						export class UploadAssetSourceType extends ly.img.editor.core.library.data.AssetSourceType {
							public static class: java.lang.Class<ly.img.editor.core.library.data.UploadAssetSourceType>;
							public static $stable: number;
							public getMimeTypeFilter(): string;
							public constructor(sourceId: string);
							public constructor(sourceId: string, mimeTypeFilter: string);
						}
					}
				}
			}
		}
	}
}

//Generics information:

