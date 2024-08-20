/// <reference path="android-declarations.d.ts"/>

declare module ly {
	export module img {
		export module editor {
			export module core {
				export module engine {
					export class EngineRenderTarget {
						public static class: java.lang.Class<ly.img.editor.core.engine.EngineRenderTarget>;
						public static SURFACE_VIEW: ly.img.editor.core.engine.EngineRenderTarget;
						public static TEXTURE_VIEW: ly.img.editor.core.engine.EngineRenderTarget;
						public static valueOf(param0: string): ly.img.editor.core.engine.EngineRenderTarget;
						public static values(): androidNative.Array<ly.img.editor.core.engine.EngineRenderTarget>;
						public static getEntries(): any;
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
						public getImages(): any<ly.img.engine.SceneMode,ly.img.editor.core.library.LibraryCategory>;
						public component2(): any<ly.img.engine.SceneMode,ly.img.editor.core.library.LibraryCategory>;
						public constructor(param0: any<any,any>, param1: any<any,ly.img.editor.core.library.LibraryCategory>, param2: any<any,ly.img.editor.core.library.LibraryCategory>, param3: any<any,ly.img.editor.core.library.LibraryCategory>, param4: any<any,ly.img.editor.core.library.LibraryCategory>, param5: any<any,ly.img.editor.core.library.LibraryCategory>, param6: any<any,ly.img.editor.core.library.LibraryCategory>, param7: any<any,ly.img.editor.core.library.LibraryCategory>);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component8(): any<ly.img.engine.SceneMode,ly.img.editor.core.library.LibraryCategory>;
						public getTabs(): any<ly.img.engine.SceneMode,java.util.List<ly.img.editor.core.library.LibraryCategory>>;
						public component3(): any<ly.img.engine.SceneMode,ly.img.editor.core.library.LibraryCategory>;
						public toString(): string;
						public component7(): any<ly.img.engine.SceneMode,ly.img.editor.core.library.LibraryCategory>;
						public getShapes(): any<ly.img.engine.SceneMode,ly.img.editor.core.library.LibraryCategory>;
						public component1(): any<ly.img.engine.SceneMode,java.util.List<ly.img.editor.core.library.LibraryCategory>>;
						public component4(): any<ly.img.engine.SceneMode,ly.img.editor.core.library.LibraryCategory>;
						public getText(): any<ly.img.engine.SceneMode,ly.img.editor.core.library.LibraryCategory>;
						public component6(): any<ly.img.engine.SceneMode,ly.img.editor.core.library.LibraryCategory>;
						public copy(param0: any<any,any>, param1: any<any,ly.img.editor.core.library.LibraryCategory>, param2: any<any,ly.img.editor.core.library.LibraryCategory>, param3: any<any,ly.img.editor.core.library.LibraryCategory>, param4: any<any,ly.img.editor.core.library.LibraryCategory>, param5: any<any,ly.img.editor.core.library.LibraryCategory>, param6: any<any,ly.img.editor.core.library.LibraryCategory>, param7: any<any,ly.img.editor.core.library.LibraryCategory>): ly.img.editor.core.library.AssetLibrary;
						public getElements(): any<ly.img.engine.SceneMode,ly.img.editor.core.library.LibraryCategory>;
						public getVideos(): any<ly.img.engine.SceneMode,ly.img.editor.core.library.LibraryCategory>;
						public getAudios(): any<ly.img.engine.SceneMode,ly.img.editor.core.library.LibraryCategory>;
						public component5(): any<ly.img.engine.SceneMode,ly.img.editor.core.library.LibraryCategory>;
						public getStickers(): any<ly.img.engine.SceneMode,ly.img.editor.core.library.LibraryCategory>;
					}
					export module AssetLibrary {
						export class Companion {
							public static class: java.lang.Class<ly.img.editor.core.library.AssetLibrary.Companion>;
							public getDefault(param0: java.util.List<any>, param1: ly.img.editor.core.library.LibraryCategory, param2: ly.img.editor.core.library.LibraryCategory, param3: ly.img.editor.core.library.LibraryCategory, param4: ly.img.editor.core.library.LibraryCategory, param5: ly.img.editor.core.library.LibraryCategory, param6: ly.img.editor.core.library.LibraryCategory): ly.img.editor.core.library.AssetLibrary;
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
							public static valueOf(param0: string): ly.img.editor.core.library.AssetLibrary.Tab;
							public static getEntries(): any;
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
						public static valueOf(param0: string): ly.img.editor.core.library.AssetType;
						public static getEntries(): any;
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
						public isHalfExpandedInitially(): boolean;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getTabSelectedIcon(): androidx.compose.ui.graphics.vector.ImageVector;
						public copy(param0: number, param1: androidx.compose.ui.graphics.vector.ImageVector, param2: androidx.compose.ui.graphics.vector.ImageVector, param3: boolean, param4: ly.img.editor.core.library.LibraryContent): ly.img.editor.core.library.LibraryCategory;
						public toString(): string;
						public getTabTitleRes(): number;
						public getContent(): ly.img.editor.core.library.LibraryContent;
						public constructor(param0: number, param1: androidx.compose.ui.graphics.vector.ImageVector, param2: androidx.compose.ui.graphics.vector.ImageVector, param3: boolean, param4: ly.img.editor.core.library.LibraryContent);
						public getTabUnselectedIcon(): androidx.compose.ui.graphics.vector.ImageVector;
						public component3(): androidx.compose.ui.graphics.vector.ImageVector;
						public component5(): ly.img.editor.core.library.LibraryContent;
						public component1(): number;
						public component2(): androidx.compose.ui.graphics.vector.ImageVector;
					}
					export module LibraryCategory {
						export class Companion {
							public static class: java.lang.Class<ly.img.editor.core.library.LibraryCategory.Companion>;
							public getElements(param0: ly.img.engine.SceneMode, param1: ly.img.editor.core.library.LibraryCategory, param2: ly.img.editor.core.library.LibraryCategory, param3: ly.img.editor.core.library.LibraryCategory, param4: ly.img.editor.core.library.LibraryCategory, param5: ly.img.editor.core.library.LibraryCategory, param6: ly.img.editor.core.library.LibraryCategory): ly.img.editor.core.library.LibraryCategory;
							public getVideo(): ly.img.editor.core.library.LibraryCategory;
							public getShapes(): ly.img.editor.core.library.LibraryCategory;
							public getStickers(): ly.img.editor.core.library.LibraryCategory;
							public getSourceTypes(param0: ly.img.editor.core.library.LibraryContent): java.util.List<ly.img.editor.core.library.data.AssetSourceType>;
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
							public constructor(param0: number, param1: ly.img.editor.core.library.data.AssetSourceType, param2: java.util.List<string>, param3: number, param4: ly.img.editor.core.library.AssetType);
							public getPerPage(): number;
							public getAssetType(): ly.img.editor.core.library.AssetType;
							public component1(): number;
							public component3(): java.util.List<string>;
							public getGroups(): java.util.List<string>;
							public getTitleRes(): number;
							public component4(): number;
							public component2(): ly.img.editor.core.library.data.AssetSourceType;
							public copy(param0: number, param1: ly.img.editor.core.library.data.AssetSourceType, param2: java.util.List<string>, param3: number, param4: ly.img.editor.core.library.AssetType): ly.img.editor.core.library.LibraryContent.Grid;
							public equals(param0: any): boolean;
						}
						export class Section {
							public static class: java.lang.Class<ly.img.editor.core.library.LibraryContent.Section>;
							public static $stable: number;
							public getTitleRes(): java.lang.Integer;
							public getSourceTypes(): java.util.List<ly.img.editor.core.library.data.AssetSourceType>;
							public component5(): boolean;
							public hashCode(): number;
							public component2(): java.util.List<ly.img.editor.core.library.data.AssetSourceType>;
							public toString(): string;
							public getExpandContent(): ly.img.editor.core.library.LibraryContent;
							public component1(): java.lang.Integer;
							public getCount(): number;
							public getAddGroupedSubSections(): boolean;
							public component8(): ly.img.editor.core.library.LibraryContent;
							public component7(): ly.img.editor.core.library.AssetType;
							public getAssetType(): ly.img.editor.core.library.AssetType;
							public component3(): java.util.List<string>;
							public getGroups(): java.util.List<string>;
							public component6(): number;
							public equals(param0: any): boolean;
							public component4(): boolean;
							public constructor(param0: java.lang.Integer, param1: java.util.List<any>, param2: java.util.List<string>, param3: boolean, param4: boolean, param5: number, param6: ly.img.editor.core.library.AssetType, param7: ly.img.editor.core.library.LibraryContent);
							public getShowUpload(): boolean;
							public copy(param0: java.lang.Integer, param1: java.util.List<any>, param2: java.util.List<string>, param3: boolean, param4: boolean, param5: number, param6: ly.img.editor.core.library.AssetType, param7: ly.img.editor.core.library.LibraryContent): ly.img.editor.core.library.LibraryContent.Section;
						}
						export class Sections extends ly.img.editor.core.library.LibraryContent {
							public static class: java.lang.Class<ly.img.editor.core.library.LibraryContent.Sections>;
							public static $stable: number;
							public component1(): number;
							public hashCode(): number;
							public getTitleRes(): number;
							public constructor(param0: number, param1: java.util.List<ly.img.editor.core.library.LibraryContent.Section>);
							public toString(): string;
							public getSections(): java.util.List<ly.img.editor.core.library.LibraryContent.Section>;
							public equals(param0: any): boolean;
							public copy(param0: number, param1: java.util.List<ly.img.editor.core.library.LibraryContent.Section>): ly.img.editor.core.library.LibraryContent.Sections;
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
							public constructor(param0: string);
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
							public applyAsset(param0: ly.img.engine.Asset, param1: any): any;
							public findAssets(param0: ly.img.engine.FindAssetsQuery, param1: any): any;
							public getGroups(param0: any): any;
							public constructor(param0: ly.img.engine.Engine, param1: ly.img.engine.Typeface);
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
							public provideTypeface(param0: ly.img.engine.Engine, param1: string, param2: any): any;
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
							public constructor(param0: string);
							public constructor(param0: string, param1: string);
						}
					}
				}
			}
		}
	}
}

//Generics information:

