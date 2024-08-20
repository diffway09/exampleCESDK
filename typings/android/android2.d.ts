/// <reference path="android-declarations.d.ts"/>

declare module ly {
	export module img {
		export module editor {
			export module core {
				export module ui {
					export abstract class AnyComposable {
						public static class: java.lang.Class<ly.img.editor.core.ui.AnyComposable>;
						public static $stable: number;
						public constructor();
						public Content(param0: androidx.compose.runtime.Composer, param1: number): void;
						public ComposableContent(param0: androidx.compose.runtime.Composer, param1: number): void;
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
				export module ui {
					export class BaseEvent {
						public static class: java.lang.Class<ly.img.editor.core.ui.BaseEvent>;
						/**
						 * Constructs a new instance of the ly.img.editor.core.ui.BaseEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export module ui {
					export class ColorSchemeKeyToken {
						public static class: java.lang.Class<ly.img.editor.core.ui.ColorSchemeKeyToken>;
						public static Error: ly.img.editor.core.ui.ColorSchemeKeyToken;
						public static values(): androidNative.Array<ly.img.editor.core.ui.ColorSchemeKeyToken>;
						public static valueOf(param0: string): ly.img.editor.core.ui.ColorSchemeKeyToken;
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
				export module ui {
					export module ColorSchemeTokenKt {
export module  {
						export class WhenMappings {
							public static class: java.lang.Class<ly.img.editor.core.ui.ColorSchemeTokenKt.WhenMappings>;
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
				export module ui {
					export class Environment {
						public static class: java.lang.Class<ly.img.editor.core.ui.Environment>;
						public static INSTANCE: ly.img.editor.core.ui.Environment;
						public static $stable: number;
						public getOnClose(): any<ly.img.engine.Engine,ly.img.editor.core.event.EditorEventHandler,any,any>;
						public getEditorDir(): java.io.File;
						public getEngine(): ly.img.engine.Engine;
						public setOnClose(param0: any<any,any,any,any>): void;
						public getAssetLibrary(): ly.img.editor.core.library.AssetLibrary;
						public getImageLoader(): coil.ImageLoader;
						public newImageRequest(param0: globalAndroid.net.Uri): coil.request.ImageRequest;
						public getOnUpload(): any<ly.img.engine.AssetDefinition,ly.img.engine.Engine,ly.img.editor.core.library.data.UploadAssetSourceType,any,any>;
						public getTabIconMappings(): ly.img.editor.core.ui.tab_item.TabIconMappings;
						public setTabIconMappings(param0: ly.img.editor.core.ui.tab_item.TabIconMappings): void;
						public init(param0: globalAndroid.app.Application): void;
						public getEditorCacheDir(): java.io.File;
						public clear(): void;
						public setAssetLibrary(param0: ly.img.editor.core.library.AssetLibrary): void;
						public setOnUpload(param0: any<any,any,any,any,any>): void;
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
				export module ui {
					export class EventsHandler {
						public static class: java.lang.Class<ly.img.editor.core.ui.EventsHandler>;
						public static $stable: number;
						public constructor(param0: any<any,any>);
						public handleEvent(param0: ly.img.editor.core.ui.BaseEvent): void;
						public set(param0: any, param1: any): void;
						public to(param0: any, param1: any): void;
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
				export module ui {
					export class Inject<Type>  extends java.lang.Object {
						public static class: java.lang.Class<ly.img.editor.core.ui.Inject<any>>;
						public static $stable: number;
						public getValue(param0: any, param1: any): Type;
						public constructor(param0: any);
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
				export module ui {
					export class InjectBoolean {
						public static class: java.lang.Class<ly.img.editor.core.ui.InjectBoolean>;
						public static $stable: number;
						public constructor(param0: any);
						public getValue(param0: any, param1: any): boolean;
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
				export module ui {
					export class InjectDouble {
						public static class: java.lang.Class<ly.img.editor.core.ui.InjectDouble>;
						public static $stable: number;
						public constructor(param0: any);
						public getValue(param0: any, param1: any): number;
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
				export module ui {
					export class InjectFloat {
						public static class: java.lang.Class<ly.img.editor.core.ui.InjectFloat>;
						public static $stable: number;
						public getValue(param0: any, param1: any): number;
						public constructor(param0: any);
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
				export module ui {
					export class InjectInt {
						public static class: java.lang.Class<ly.img.editor.core.ui.InjectInt>;
						public static $stable: number;
						public constructor(param0: any);
						public getValue(param0: any, param1: any): number;
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
				export module ui {
					export class InjectLong {
						public static class: java.lang.Class<ly.img.editor.core.ui.InjectLong>;
						public static $stable: number;
						public getValue(param0: any, param1: any): number;
						public constructor(param0: any);
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
				export module ui {
					export class UiDefaults {
						public static class: java.lang.Class<ly.img.editor.core.ui.UiDefaults>;
						public static INSTANCE: ly.img.editor.core.ui.UiDefaults;
						public static $stable: number;
						public getCardColors(param0: androidx.compose.runtime.Composer, param1: number): androidx.compose.material3.CardColors;
						public getCardColorsExperimental(param0: androidx.compose.runtime.Composer, param1: number): ly.img.editor.compose.material3.CardColors;
						public "getSheetHeaderHeight-D9Ej5fM"(): number;
						public getCornerLargeTop(): androidx.compose.foundation.shape.RoundedCornerShape;
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
				export module ui {
					export module engine {
						export class BlockKind {
							public static class: java.lang.Class<ly.img.editor.core.ui.engine.BlockKind>;
							public static Image: ly.img.editor.core.ui.engine.BlockKind;
							public static Sticker: ly.img.editor.core.ui.engine.BlockKind;
							public static Shape: ly.img.editor.core.ui.engine.BlockKind;
							public static values(): androidNative.Array<ly.img.editor.core.ui.engine.BlockKind>;
							public getKey(): string;
							public static valueOf(param0: string): ly.img.editor.core.ui.engine.BlockKind;
							public static getEntries(): any;
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
				export module ui {
					export module engine {
						export class BlockType {
							public static class: java.lang.Class<ly.img.editor.core.ui.engine.BlockType>;
							public static Image: ly.img.editor.core.ui.engine.BlockType;
							public static Sticker: ly.img.editor.core.ui.engine.BlockType;
							public static Text: ly.img.editor.core.ui.engine.BlockType;
							public static Shape: ly.img.editor.core.ui.engine.BlockType;
							public static Group: ly.img.editor.core.ui.engine.BlockType;
							public static Page: ly.img.editor.core.ui.engine.BlockType;
							public getTitleRes(): number;
							public static values(): androidNative.Array<ly.img.editor.core.ui.engine.BlockType>;
							public static valueOf(param0: string): ly.img.editor.core.ui.engine.BlockType;
							public static getEntries(): any;
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
				export module ui {
					export module engine {
						export class Scope {
							public static class: java.lang.Class<ly.img.editor.core.ui.engine.Scope>;
							public static INSTANCE: ly.img.editor.core.ui.engine.Scope;
							public static FillChange: string;
							public static FillChangeType: string;
							public static StrokeChange: string;
							public static ShapeChange: string;
							public static LayerMove: string;
							public static LayerResize: string;
							public static LayerRotate: string;
							public static LayerFlip: string;
							public static LayerCrop: string;
							public static LayerOpacity: string;
							public static LayerBlendMode: string;
							public static LayerClipping: string;
							public static LayerVisibility: string;
							public static TextEdit: string;
							public static TextCharacter: string;
							public static EditorAdd: string;
							public static EditorSelect: string;
							public static LifecycleDuplicate: string;
							public static LifecycleDestroy: string;
							public static AppearanceAdjustment: string;
							public static AppearanceFilter: string;
							public static AppearanceEffect: string;
							public static AppearanceBlur: string;
							public static $stable: number;
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
				export module ui {
					export module iconpack {
						export class IconPack {
							public static class: java.lang.Class<ly.img.editor.core.ui.iconpack.IconPack>;
							public static INSTANCE: ly.img.editor.core.ui.iconpack.IconPack;
							public static $stable: number;
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
				export module ui {
					export module library {
						export class AppearanceAssetSourceType {
							public static class: java.lang.Class<ly.img.editor.core.ui.library.AppearanceAssetSourceType>;
							public static INSTANCE: ly.img.editor.core.ui.library.AppearanceAssetSourceType;
							public static $stable: number;
							public getLutFilter(): ly.img.editor.core.library.data.AssetSourceType;
							public getFxEffect(): ly.img.editor.core.library.data.AssetSourceType;
							public getBlur(): ly.img.editor.core.library.data.AssetSourceType;
							public getDuoToneFilter(): ly.img.editor.core.library.data.AssetSourceType;
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
				export module ui {
					export module library {
						export class AppearanceLibraryCategory {
							public static class: java.lang.Class<ly.img.editor.core.ui.library.AppearanceLibraryCategory>;
							public static INSTANCE: ly.img.editor.core.ui.library.AppearanceLibraryCategory;
							public static $stable: number;
							public getFxEffects(): ly.img.editor.core.library.LibraryCategory;
							public getFilters(): ly.img.editor.core.library.LibraryCategory;
							public getBlur(): ly.img.editor.core.library.LibraryCategory;
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
				export module ui {
					export module library {
						export class LibraryViewModel {
							public static class: java.lang.Class<ly.img.editor.core.ui.library.LibraryViewModel>;
							public static $stable: number;
							public constructor();
							public getUiEvent(): kotlinx.coroutines.flow.Flow<ly.img.editor.core.ui.library.util.LibraryUiEvent>;
							public onEvent(param0: ly.img.editor.core.ui.library.util.LibraryEvent): void;
							public getNavBarItems(): java.util.List<ly.img.editor.core.library.LibraryCategory>;
							public getAssetLibraryUiState(param0: ly.img.editor.core.library.LibraryCategory): kotlinx.coroutines.flow.StateFlow<ly.img.editor.core.ui.library.state.AssetLibraryUiState>;
							public getReplaceStickerCategory(): ly.img.editor.core.library.LibraryCategory;
							public getReplaceImageCategory(): ly.img.editor.core.library.LibraryCategory;
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
				export module ui {
					export module library {
						export class OffsetWrapper {
							public static class: java.lang.Class<ly.img.editor.core.ui.library.OffsetWrapper>;
							public constructor();
							public setOffset(param0: number): void;
							public getOffset(): number;
							public constructor(param0: number);
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
				export module ui {
					export module library {
						export module ReplaceLibrarySheetKt {
export module  {
							export class WhenMappings {
								public static class: java.lang.Class<ly.img.editor.core.ui.library.ReplaceLibrarySheetKt.WhenMappings>;
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
				export module ui {
					export module library {
						export module components {
							export class GradientPainter {
								public static class: java.lang.Class<ly.img.editor.core.ui.library.components.GradientPainter>;
								public static $stable: number;
								public "getIntrinsicSize-NH-jbRc"(): number;
								public onDraw(param0: androidx.compose.ui.graphics.drawscope.DrawScope): void;
								public constructor(param0: androidx.compose.ui.graphics.Brush);
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
				export module ui {
					export module library {
						export module components {
							export class ImageState {
								public static class: java.lang.Class<ly.img.editor.core.ui.library.components.ImageState>;
								public static Loading: ly.img.editor.core.ui.library.components.ImageState;
								public static Error: ly.img.editor.core.ui.library.components.ImageState;
								public static Success: ly.img.editor.core.ui.library.components.ImageState;
								public static valueOf(param0: string): ly.img.editor.core.ui.library.components.ImageState;
								public static getEntries(): any;
								public static values(): androidNative.Array<ly.img.editor.core.ui.library.components.ImageState>;
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
				export module ui {
					export module library {
						export module components {
							export class MappedInteractionSource {
								public static class: java.lang.Class<ly.img.editor.core.ui.library.components.MappedInteractionSource>;
								public getInteractions(): kotlinx.coroutines.flow.Flow<androidx.compose.foundation.interaction.Interaction>;
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
				export module ui {
					export module library {
						export module components {
							export module asset {
								export class IntermediateState {
									public static class: java.lang.Class<ly.img.editor.core.ui.library.components.asset.IntermediateState>;
									public static Loading: ly.img.editor.core.ui.library.components.asset.IntermediateState;
									public static Empty: ly.img.editor.core.ui.library.components.asset.IntermediateState;
									public static getEntries(): any;
									public static valueOf(param0: string): ly.img.editor.core.ui.library.components.asset.IntermediateState;
									public static values(): androidNative.Array<ly.img.editor.core.ui.library.components.asset.IntermediateState>;
								}
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
				export module ui {
					export module library {
						export module components {
							export module grid {
								export module AssetGridItemContentKt {
export module  {
									export class WhenMappings {
										public static class: java.lang.Class<ly.img.editor.core.ui.library.components.grid.AssetGridItemContentKt.WhenMappings>;
									}
								}
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
				export module ui {
					export module library {
						export module components {
							export module grid {
								export module AssetGridKt {
export module  {
									export class WhenMappings {
										public static class: java.lang.Class<ly.img.editor.core.ui.library.components.grid.AssetGridKt.WhenMappings>;
									}
								}
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
				export module ui {
					export module library {
						export module components {
							export module section {
								export module LibrarySectionContentKt {
export module  {
									export class WhenMappings {
										public static class: java.lang.Class<ly.img.editor.core.ui.library.components.section.LibrarySectionContentKt.WhenMappings>;
									}
								}
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
				export module ui {
					export module library {
						export module components {
							export module section {
								export abstract class LibrarySectionItem {
									public static class: java.lang.Class<ly.img.editor.core.ui.library.components.section.LibrarySectionItem>;
									public static $stable: number;
									public getId(): string;
								}
								export module LibrarySectionItem {
									export class Content extends ly.img.editor.core.ui.library.components.section.LibrarySectionItem {
										public static class: java.lang.Class<ly.img.editor.core.ui.library.components.section.LibrarySectionItem.Content>;
										public static $stable: number;
										public equals(param0: any): boolean;
										public constructor(param0: number, param1: number, param2: java.util.List<any>, param3: ly.img.editor.core.library.AssetType, param4: ly.img.editor.core.library.LibraryContent);
										public component1(): number;
										public hashCode(): number;
										public getAssetType(): ly.img.editor.core.library.AssetType;
										public component2(): number;
										public component4(): ly.img.editor.core.library.AssetType;
										public component5(): ly.img.editor.core.library.LibraryContent;
										public getStackIndex(): number;
										public getExpandContent(): ly.img.editor.core.library.LibraryContent;
										public getWrappedAssets(): java.util.List<ly.img.editor.core.ui.library.state.WrappedAsset>;
										public copy(param0: number, param1: number, param2: java.util.List<any>, param3: ly.img.editor.core.library.AssetType, param4: ly.img.editor.core.library.LibraryContent): ly.img.editor.core.ui.library.components.section.LibrarySectionItem.Content;
										public toString(): string;
										public component3(): java.util.List<ly.img.editor.core.ui.library.state.WrappedAsset>;
										public getSectionIndex(): number;
									}
									export class ContentLoading extends ly.img.editor.core.ui.library.components.section.LibrarySectionItem {
										public static class: java.lang.Class<ly.img.editor.core.ui.library.components.section.LibrarySectionItem.ContentLoading>;
										public static $stable: number;
										public component4(): ly.img.editor.core.library.LibraryContent.Section;
										public equals(param0: any): boolean;
										public component1(): number;
										public hashCode(): number;
										public getSection(): ly.img.editor.core.library.LibraryContent.Section;
										public component2(): number;
										public constructor(param0: number, param1: number, param2: number, param3: ly.img.editor.core.library.LibraryContent.Section);
										public getStackIndex(): number;
										public copy(param0: number, param1: number, param2: number, param3: ly.img.editor.core.library.LibraryContent.Section): ly.img.editor.core.ui.library.components.section.LibrarySectionItem.ContentLoading;
										public toString(): string;
										public getSubSectionIndex(): number;
										public component3(): number;
										public getSectionIndex(): number;
									}
									export class Error extends ly.img.editor.core.ui.library.components.section.LibrarySectionItem {
										public static class: java.lang.Class<ly.img.editor.core.ui.library.components.section.LibrarySectionItem.Error>;
										public static $stable: number;
										public equals(param0: any): boolean;
										public component1(): number;
										public getStackIndex(): number;
										public hashCode(): number;
										public toString(): string;
										public constructor(param0: number, param1: number, param2: ly.img.editor.core.library.AssetType);
										public getAssetType(): ly.img.editor.core.library.AssetType;
										public component3(): ly.img.editor.core.library.AssetType;
										public copy(param0: number, param1: number, param2: ly.img.editor.core.library.AssetType): ly.img.editor.core.ui.library.components.section.LibrarySectionItem.Error;
										public component2(): number;
										public getSectionIndex(): number;
									}
									export class Header extends ly.img.editor.core.ui.library.components.section.LibrarySectionItem {
										public static class: java.lang.Class<ly.img.editor.core.ui.library.components.section.LibrarySectionItem.Header>;
										public static $stable: number;
										public getTitleRes(): number;
										public equals(param0: any): boolean;
										public component1(): number;
										public hashCode(): number;
										public getCount(): java.lang.Integer;
										public component4(): ly.img.editor.core.library.data.UploadAssetSourceType;
										public component2(): number;
										public copy(param0: number, param1: number, param2: number, param3: ly.img.editor.core.library.data.UploadAssetSourceType, param4: java.lang.Integer, param5: ly.img.editor.core.library.LibraryContent): ly.img.editor.core.ui.library.components.section.LibrarySectionItem.Header;
										public getStackIndex(): number;
										public getUploadAssetSource(): ly.img.editor.core.library.data.UploadAssetSourceType;
										public getExpandContent(): ly.img.editor.core.library.LibraryContent;
										public component6(): ly.img.editor.core.library.LibraryContent;
										public toString(): string;
										public component3(): number;
										public constructor(param0: number, param1: number, param2: number, param3: ly.img.editor.core.library.data.UploadAssetSourceType, param4: java.lang.Integer, param5: ly.img.editor.core.library.LibraryContent);
										public getSectionIndex(): number;
										public component5(): java.lang.Integer;
									}
									export class Loading extends ly.img.editor.core.ui.library.components.section.LibrarySectionItem {
										public static class: java.lang.Class<ly.img.editor.core.ui.library.components.section.LibrarySectionItem.Loading>;
										public static $stable: number;
										public equals(param0: any): boolean;
										public component1(): number;
										public getStackIndex(): number;
										public hashCode(): number;
										public toString(): string;
										public constructor(param0: number);
										public copy(param0: number): ly.img.editor.core.ui.library.components.section.LibrarySectionItem.Loading;
									}
								}
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
				export module ui {
					export module library {
						export module data {
							export module font {
								export class FontData {
									public static class: java.lang.Class<ly.img.editor.core.ui.library.data.font.FontData>;
									public static $stable: number;
									public component4(): ly.img.engine.FontStyle;
									public getWeight(): androidx.compose.ui.text.font.FontWeight;
									public hashCode(): number;
									public component1(): ly.img.engine.Typeface;
									public getStyle(): ly.img.engine.FontStyle;
									public getTypeface(): ly.img.engine.Typeface;
									public copy(param0: ly.img.engine.Typeface, param1: globalAndroid.net.Uri, param2: androidx.compose.ui.text.font.FontWeight, param3: ly.img.engine.FontStyle): ly.img.editor.core.ui.library.data.font.FontData;
									public equals(param0: any): boolean;
									public toString(): string;
									public getUri(): globalAndroid.net.Uri;
									public component3(): androidx.compose.ui.text.font.FontWeight;
									public constructor(param0: ly.img.engine.Typeface, param1: globalAndroid.net.Uri, param2: androidx.compose.ui.text.font.FontWeight, param3: ly.img.engine.FontStyle);
									public component2(): globalAndroid.net.Uri;
								}
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
				export module ui {
					export module library {
						export module data {
							export module font {
								export class FontDataMapper {
									public static class: java.lang.Class<ly.img.editor.core.ui.library.data.font.FontDataMapper>;
									public static $stable: number;
									public constructor();
									public map(param0: ly.img.editor.core.ui.library.state.WrappedAsset): ly.img.editor.core.ui.library.data.font.FontData;
									public getFontData(param0: ly.img.engine.Typeface, param1: java.lang.Integer): ly.img.editor.core.ui.library.data.font.FontData;
								}
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
				export module ui {
					export module library {
						export module resultcontract {
							export class GalleryMimeType {
								public static class: java.lang.Class<ly.img.editor.core.ui.library.resultcontract.GalleryMimeType>;
								public static INSTANCE: ly.img.editor.core.ui.library.resultcontract.GalleryMimeType;
								public static $stable: number;
								public getAll(): androidNative.Array<string>;
								public getImage(): androidNative.Array<string>;
								public getVideo(): androidNative.Array<string>;
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
				export module ui {
					export module library {
						export module resultcontract {
							export class GetMimeTypesContent extends androidx.activity.result.contract.ActivityResultContract<androidNative.Array<string>,globalAndroid.net.Uri> {
								public static class: java.lang.Class<ly.img.editor.core.ui.library.resultcontract.GetMimeTypesContent>;
								public createIntent(param0: globalAndroid.content.Context, param1: androidNative.Array<string>): globalAndroid.content.Intent;
								public constructor();
								public parseResult(param0: number, param1: globalAndroid.content.Intent): globalAndroid.net.Uri;
								public getSynchronousResult(param0: globalAndroid.content.Context, param1: androidNative.Array<string>): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<globalAndroid.net.Uri>;
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
				export module ui {
					export module library {
						export module state {
							export class AssetLibraryUiState {
								public static class: java.lang.Class<ly.img.editor.core.ui.library.state.AssetLibraryUiState>;
								public static $stable: number;
								public component6(): ly.img.editor.core.ui.library.state.CategoryLoadState;
								public isRoot(): boolean;
								public toString(): string;
								public getLibraryCategory(): ly.img.editor.core.library.LibraryCategory;
								public getSearchText(): string;
								public equals(param0: any): boolean;
								public isInSearchMode(): boolean;
								public getLoadState(): ly.img.editor.core.ui.library.state.CategoryLoadState;
								public component1(): ly.img.editor.core.library.LibraryCategory;
								public component4(): boolean;
								public getTitleRes(): number;
								public copy(param0: ly.img.editor.core.library.LibraryCategory, param1: number, param2: string, param3: boolean, param4: java.util.List<any>, param5: ly.img.editor.core.ui.library.state.CategoryLoadState, param6: boolean, param7: ly.img.editor.core.ui.library.state.AssetsData): ly.img.editor.core.ui.library.state.AssetLibraryUiState;
								public component8(): ly.img.editor.core.ui.library.state.AssetsData;
								public getSectionItems(): java.util.List<ly.img.editor.core.ui.library.components.section.LibrarySectionItem>;
								public getAssetsData(): ly.img.editor.core.ui.library.state.AssetsData;
								public component2(): number;
								public component7(): boolean;
								public constructor(param0: ly.img.editor.core.library.LibraryCategory, param1: number, param2: string, param3: boolean, param4: java.util.List<any>, param5: ly.img.editor.core.ui.library.state.CategoryLoadState, param6: boolean, param7: ly.img.editor.core.ui.library.state.AssetsData);
								public component3(): string;
								public hashCode(): number;
								public component5(): java.util.List<ly.img.editor.core.ui.library.components.section.LibrarySectionItem>;
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
				export module ui {
					export module library {
						export module state {
							export class AssetsData {
								public static class: java.lang.Class<ly.img.editor.core.ui.library.state.AssetsData>;
								public static $stable: number;
								public toString(): string;
								public getAssetSourceType(): ly.img.editor.core.library.data.AssetSourceType;
								public component4(): ly.img.editor.core.library.data.AssetSourceType;
								public component2(): boolean;
								public equals(param0: any): boolean;
								public getAssets(): java.util.List<ly.img.editor.core.ui.library.state.WrappedAsset>;
								public getAssetType(): ly.img.editor.core.library.AssetType;
								public constructor();
								public getAssetsLoadState(): ly.img.editor.core.ui.library.state.AssetsLoadState;
								public component6(): ly.img.editor.core.ui.library.state.AssetsLoadState;
								public constructor(param0: number, param1: boolean, param2: java.util.List<any>, param3: ly.img.editor.core.library.data.AssetSourceType, param4: ly.img.editor.core.library.AssetType, param5: ly.img.editor.core.ui.library.state.AssetsLoadState);
								public getPage(): number;
								public copy(param0: number, param1: boolean, param2: java.util.List<any>, param3: ly.img.editor.core.library.data.AssetSourceType, param4: ly.img.editor.core.library.AssetType, param5: ly.img.editor.core.ui.library.state.AssetsLoadState): ly.img.editor.core.ui.library.state.AssetsData;
								public component1(): number;
								public component3(): java.util.List<ly.img.editor.core.ui.library.state.WrappedAsset>;
								public getCanPaginate(): boolean;
								public component5(): ly.img.editor.core.library.AssetType;
								public hashCode(): number;
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
				export module ui {
					export module library {
						export module state {
							export class AssetsLoadState {
								public static class: java.lang.Class<ly.img.editor.core.ui.library.state.AssetsLoadState>;
								public static Idle: ly.img.editor.core.ui.library.state.AssetsLoadState;
								public static Loading: ly.img.editor.core.ui.library.state.AssetsLoadState;
								public static Paginating: ly.img.editor.core.ui.library.state.AssetsLoadState;
								public static Error: ly.img.editor.core.ui.library.state.AssetsLoadState;
								public static EmptyResult: ly.img.editor.core.ui.library.state.AssetsLoadState;
								public static PaginationError: ly.img.editor.core.ui.library.state.AssetsLoadState;
								public static values(): androidNative.Array<ly.img.editor.core.ui.library.state.AssetsLoadState>;
								public static getEntries(): any;
								public static valueOf(param0: string): ly.img.editor.core.ui.library.state.AssetsLoadState;
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
				export module ui {
					export module library {
						export module state {
							export class CategoryLoadState {
								public static class: java.lang.Class<ly.img.editor.core.ui.library.state.CategoryLoadState>;
								public static Idle: ly.img.editor.core.ui.library.state.CategoryLoadState;
								public static Loading: ly.img.editor.core.ui.library.state.CategoryLoadState;
								public static LoadingAssets: ly.img.editor.core.ui.library.state.CategoryLoadState;
								public static LoadingSections: ly.img.editor.core.ui.library.state.CategoryLoadState;
								public static Success: ly.img.editor.core.ui.library.state.CategoryLoadState;
								public static valueOf(param0: string): ly.img.editor.core.ui.library.state.CategoryLoadState;
								public static values(): androidNative.Array<ly.img.editor.core.ui.library.state.CategoryLoadState>;
								public static getEntries(): any;
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
				export module ui {
					export module library {
						export module state {
							export class LibraryCategoryStackData {
								public static class: java.lang.Class<ly.img.editor.core.ui.library.state.LibraryCategoryStackData>;
								public toString(): string;
								public constructor(param0: java.util.Stack<ly.img.editor.core.library.LibraryContent>, param1: kotlinx.coroutines.flow.MutableStateFlow<ly.img.editor.core.ui.library.state.AssetLibraryUiState>, param2: boolean, param3: kotlinx.coroutines.Job, param4: kotlinx.coroutines.Job);
								public component3(): boolean;
								public getSearchJob(): kotlinx.coroutines.Job;
								public setDirty(param0: boolean): void;
								public getDataStack(): java.util.Stack<ly.img.editor.core.library.LibraryContent>;
								public setFetchJob(param0: kotlinx.coroutines.Job): void;
								public equals(param0: any): boolean;
								public getUiStateFlow(): kotlinx.coroutines.flow.MutableStateFlow<ly.img.editor.core.ui.library.state.AssetLibraryUiState>;
								public component1(): java.util.Stack<ly.img.editor.core.library.LibraryContent>;
								public copy(param0: java.util.Stack<ly.img.editor.core.library.LibraryContent>, param1: kotlinx.coroutines.flow.MutableStateFlow<ly.img.editor.core.ui.library.state.AssetLibraryUiState>, param2: boolean, param3: kotlinx.coroutines.Job, param4: kotlinx.coroutines.Job): ly.img.editor.core.ui.library.state.LibraryCategoryStackData;
								public component2(): kotlinx.coroutines.flow.MutableStateFlow<ly.img.editor.core.ui.library.state.AssetLibraryUiState>;
								public component5(): kotlinx.coroutines.Job;
								public getFetchJob(): kotlinx.coroutines.Job;
								public getDirty(): boolean;
								public component4(): kotlinx.coroutines.Job;
								public hashCode(): number;
								public setSearchJob(param0: kotlinx.coroutines.Job): void;
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
				export module ui {
					export module library {
						export module state {
							export class WrappedAsset {
								public static class: java.lang.Class<ly.img.editor.core.ui.library.state.WrappedAsset>;
								/**
								 * Constructs a new instance of the ly.img.editor.core.ui.library.state.WrappedAsset interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getAsset(): ly.img.engine.Asset;
									getAssetSourceType(): ly.img.editor.core.library.data.AssetSourceType;
									getAssetType(): ly.img.editor.core.library.AssetType;
								});
								public constructor();
								public getAssetSourceType(): ly.img.editor.core.library.data.AssetSourceType;
								public getAssetType(): ly.img.editor.core.library.AssetType;
								public getAsset(): ly.img.engine.Asset;
							}
							export module WrappedAsset {
								export class GenericAsset extends ly.img.editor.core.ui.library.state.WrappedAsset {
									public static class: java.lang.Class<ly.img.editor.core.ui.library.state.WrappedAsset.GenericAsset>;
									public static $stable: number;
									public component3(): ly.img.editor.core.library.AssetType;
									public hashCode(): number;
									public getAsset(): ly.img.engine.Asset;
									public getAssetType(): ly.img.editor.core.library.AssetType;
									public equals(param0: any): boolean;
									public component1(): ly.img.engine.Asset;
									public toString(): string;
									public getAssetSourceType(): ly.img.editor.core.library.data.AssetSourceType;
									public component2(): ly.img.editor.core.library.data.AssetSourceType;
									public copy(param0: ly.img.engine.Asset, param1: ly.img.editor.core.library.data.AssetSourceType, param2: ly.img.editor.core.library.AssetType): ly.img.editor.core.ui.library.state.WrappedAsset.GenericAsset;
									public constructor(param0: ly.img.engine.Asset, param1: ly.img.editor.core.library.data.AssetSourceType, param2: ly.img.editor.core.library.AssetType);
								}
								export class TextAsset extends ly.img.editor.core.ui.library.state.WrappedAsset {
									public static class: java.lang.Class<ly.img.editor.core.ui.library.state.WrappedAsset.TextAsset>;
									public static $stable: number;
									public getAsset(): ly.img.engine.Asset;
									public getAssetType(): ly.img.editor.core.library.AssetType;
									public getAssetSourceType(): ly.img.editor.core.library.data.AssetSourceType;
									public getFontData(): ly.img.editor.core.ui.library.data.font.FontData;
									public constructor(param0: ly.img.engine.Asset, param1: ly.img.editor.core.library.data.AssetSourceType, param2: ly.img.editor.core.library.AssetType, param3: ly.img.editor.core.ui.library.data.font.FontData);
								}
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
				export module ui {
					export module library {
						export module state {
							export class WrappedFindAssetsResult {
								public static class: java.lang.Class<ly.img.editor.core.ui.library.state.WrappedFindAssetsResult>;
								public getFindAssetsResult(): ly.img.engine.FindAssetsResult;
								public component2(): ly.img.engine.FindAssetsResult;
								public toString(): string;
								public constructor(param0: ly.img.editor.core.library.data.AssetSourceType, param1: ly.img.engine.FindAssetsResult);
								public getAssetSourceType(): ly.img.editor.core.library.data.AssetSourceType;
								public equals(param0: any): boolean;
								public component1(): ly.img.editor.core.library.data.AssetSourceType;
								public copy(param0: ly.img.editor.core.library.data.AssetSourceType, param1: ly.img.engine.FindAssetsResult): ly.img.editor.core.ui.library.state.WrappedFindAssetsResult;
								public hashCode(): number;
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
				export module ui {
					export module library {
						export module util {
							export class AssetLibraryUiConfig {
								public static class: java.lang.Class<ly.img.editor.core.ui.library.util.AssetLibraryUiConfig>;
								public static INSTANCE: ly.img.editor.core.ui.library.util.AssetLibraryUiConfig;
								public "contentRowWidth-u2uoSUM"(param0: ly.img.editor.core.library.AssetType): number;
								public assetGridColumns(param0: ly.img.editor.core.library.AssetType): number;
								public "contentRowHeight-u2uoSUM"(param0: ly.img.editor.core.library.AssetType): number;
								public "contentPadding-u2uoSUM"(param0: ly.img.editor.core.library.AssetType): number;
								public contentScale(param0: ly.img.editor.core.library.AssetType): androidx.compose.ui.layout.ContentScale;
								public assetGridVerticalArrangement(param0: ly.img.editor.core.library.AssetType): androidx.compose.foundation.layout.Arrangement.Vertical;
								public shouldTintImages(param0: ly.img.editor.core.library.AssetType): boolean;
								public assetGridHorizontalArrangement(param0: ly.img.editor.core.library.AssetType): androidx.compose.foundation.layout.Arrangement.Horizontal;
							}
							export module AssetLibraryUiConfig {
								export class WhenMappings {
									public static class: java.lang.Class<ly.img.editor.core.ui.library.util.AssetLibraryUiConfig.WhenMappings>;
								}
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
				export module ui {
					export module library {
						export module util {
							export class LibraryEvent extends ly.img.editor.core.ui.BaseEvent {
								public static class: java.lang.Class<ly.img.editor.core.ui.library.util.LibraryEvent>;
								/**
								 * Constructs a new instance of the ly.img.editor.core.ui.library.util.LibraryEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
							export module LibraryEvent {
								export class OnAddAsset extends ly.img.editor.core.ui.library.util.LibraryEvent {
									public static class: java.lang.Class<ly.img.editor.core.ui.library.util.LibraryEvent.OnAddAsset>;
									public static $stable: number;
									public constructor(param0: ly.img.editor.core.ui.library.state.WrappedAsset);
									public hashCode(): number;
									public equals(param0: any): boolean;
									public getWrappedAsset(): ly.img.editor.core.ui.library.state.WrappedAsset;
									public copy(param0: ly.img.editor.core.ui.library.state.WrappedAsset): ly.img.editor.core.ui.library.util.LibraryEvent.OnAddAsset;
									public toString(): string;
									public component1(): ly.img.editor.core.ui.library.state.WrappedAsset;
								}
								export class OnAddUri extends ly.img.editor.core.ui.library.util.LibraryEvent {
									public static class: java.lang.Class<ly.img.editor.core.ui.library.util.LibraryEvent.OnAddUri>;
									public static $stable: number;
									public hashCode(): number;
									public copy(param0: ly.img.editor.core.library.data.UploadAssetSourceType, param1: globalAndroid.net.Uri): ly.img.editor.core.ui.library.util.LibraryEvent.OnAddUri;
									public getAssetSource(): ly.img.editor.core.library.data.UploadAssetSourceType;
									public getUri(): globalAndroid.net.Uri;
									public equals(param0: any): boolean;
									public toString(): string;
									public constructor(param0: ly.img.editor.core.library.data.UploadAssetSourceType, param1: globalAndroid.net.Uri);
									public component1(): ly.img.editor.core.library.data.UploadAssetSourceType;
									public component2(): globalAndroid.net.Uri;
								}
								export class OnAssetLongClick extends ly.img.editor.core.ui.library.util.LibraryEvent {
									public static class: java.lang.Class<ly.img.editor.core.ui.library.util.LibraryEvent.OnAssetLongClick>;
									public static $stable: number;
									public constructor(param0: ly.img.editor.core.ui.library.state.WrappedAsset);
									public hashCode(): number;
									public equals(param0: any): boolean;
									public getWrappedAsset(): ly.img.editor.core.ui.library.state.WrappedAsset;
									public copy(param0: ly.img.editor.core.ui.library.state.WrappedAsset): ly.img.editor.core.ui.library.util.LibraryEvent.OnAssetLongClick;
									public toString(): string;
									public component1(): ly.img.editor.core.ui.library.state.WrappedAsset;
								}
								export class OnDispose extends ly.img.editor.core.ui.library.util.LibraryEvent {
									public static class: java.lang.Class<ly.img.editor.core.ui.library.util.LibraryEvent.OnDispose>;
									public static INSTANCE: ly.img.editor.core.ui.library.util.LibraryEvent.OnDispose;
									public static $stable: number;
									public hashCode(): number;
									public equals(param0: any): boolean;
									public toString(): string;
								}
								export class OnDrillDown extends ly.img.editor.core.ui.library.util.LibraryEvent {
									public static class: java.lang.Class<ly.img.editor.core.ui.library.util.LibraryEvent.OnDrillDown>;
									public static $stable: number;
									public hashCode(): number;
									public constructor(param0: ly.img.editor.core.library.LibraryCategory, param1: ly.img.editor.core.library.LibraryContent);
									public component2(): ly.img.editor.core.library.LibraryContent;
									public component1(): ly.img.editor.core.library.LibraryCategory;
									public equals(param0: any): boolean;
									public getLibraryCategory(): ly.img.editor.core.library.LibraryCategory;
									public toString(): string;
									public copy(param0: ly.img.editor.core.library.LibraryCategory, param1: ly.img.editor.core.library.LibraryContent): ly.img.editor.core.ui.library.util.LibraryEvent.OnDrillDown;
									public getExpandContent(): ly.img.editor.core.library.LibraryContent;
								}
								export class OnEnterSearchMode extends ly.img.editor.core.ui.library.util.LibraryEvent {
									public static class: java.lang.Class<ly.img.editor.core.ui.library.util.LibraryEvent.OnEnterSearchMode>;
									public static $stable: number;
									public hashCode(): number;
									public constructor(param0: boolean, param1: ly.img.editor.core.library.LibraryCategory);
									public equals(param0: any): boolean;
									public getLibraryCategory(): ly.img.editor.core.library.LibraryCategory;
									public toString(): string;
									public component1(): boolean;
									public copy(param0: boolean, param1: ly.img.editor.core.library.LibraryCategory): ly.img.editor.core.ui.library.util.LibraryEvent.OnEnterSearchMode;
									public getEnter(): boolean;
									public component2(): ly.img.editor.core.library.LibraryCategory;
								}
								export class OnFetch extends ly.img.editor.core.ui.library.util.LibraryEvent {
									public static class: java.lang.Class<ly.img.editor.core.ui.library.util.LibraryEvent.OnFetch>;
									public static $stable: number;
									public hashCode(): number;
									public component1(): ly.img.editor.core.library.LibraryCategory;
									public copy(param0: ly.img.editor.core.library.LibraryCategory): ly.img.editor.core.ui.library.util.LibraryEvent.OnFetch;
									public equals(param0: any): boolean;
									public getLibraryCategory(): ly.img.editor.core.library.LibraryCategory;
									public toString(): string;
									public constructor(param0: ly.img.editor.core.library.LibraryCategory);
								}
								export class OnPopStack extends ly.img.editor.core.ui.library.util.LibraryEvent {
									public static class: java.lang.Class<ly.img.editor.core.ui.library.util.LibraryEvent.OnPopStack>;
									public static $stable: number;
									public hashCode(): number;
									public component1(): ly.img.editor.core.library.LibraryCategory;
									public equals(param0: any): boolean;
									public getLibraryCategory(): ly.img.editor.core.library.LibraryCategory;
									public toString(): string;
									public constructor(param0: ly.img.editor.core.library.LibraryCategory);
									public copy(param0: ly.img.editor.core.library.LibraryCategory): ly.img.editor.core.ui.library.util.LibraryEvent.OnPopStack;
								}
								export class OnReplaceAsset extends ly.img.editor.core.ui.library.util.LibraryEvent {
									public static class: java.lang.Class<ly.img.editor.core.ui.library.util.LibraryEvent.OnReplaceAsset>;
									public static $stable: number;
									public hashCode(): number;
									public component2(): number;
									public getDesignBlock(): number;
									public copy(param0: ly.img.editor.core.ui.library.state.WrappedAsset, param1: number): ly.img.editor.core.ui.library.util.LibraryEvent.OnReplaceAsset;
									public equals(param0: any): boolean;
									public getWrappedAsset(): ly.img.editor.core.ui.library.state.WrappedAsset;
									public toString(): string;
									public constructor(param0: ly.img.editor.core.ui.library.state.WrappedAsset, param1: number);
									public component1(): ly.img.editor.core.ui.library.state.WrappedAsset;
								}
								export class OnReplaceUri extends ly.img.editor.core.ui.library.util.LibraryEvent {
									public static class: java.lang.Class<ly.img.editor.core.ui.library.util.LibraryEvent.OnReplaceUri>;
									public static $stable: number;
									public copy(param0: ly.img.editor.core.library.data.UploadAssetSourceType, param1: globalAndroid.net.Uri, param2: number): ly.img.editor.core.ui.library.util.LibraryEvent.OnReplaceUri;
									public hashCode(): number;
									public getAssetSource(): ly.img.editor.core.library.data.UploadAssetSourceType;
									public getDesignBlock(): number;
									public constructor(param0: ly.img.editor.core.library.data.UploadAssetSourceType, param1: globalAndroid.net.Uri, param2: number);
									public getUri(): globalAndroid.net.Uri;
									public equals(param0: any): boolean;
									public component3(): number;
									public toString(): string;
									public component1(): ly.img.editor.core.library.data.UploadAssetSourceType;
									public component2(): globalAndroid.net.Uri;
								}
								export class OnSearchTextChange extends ly.img.editor.core.ui.library.util.LibraryEvent {
									public static class: java.lang.Class<ly.img.editor.core.ui.library.util.LibraryEvent.OnSearchTextChange>;
									public static $stable: number;
									public hashCode(): number;
									public component3(): boolean;
									public constructor(param0: string, param1: ly.img.editor.core.library.LibraryCategory, param2: boolean);
									public getValue(): string;
									public equals(param0: any): boolean;
									public copy(param0: string, param1: ly.img.editor.core.library.LibraryCategory, param2: boolean): ly.img.editor.core.ui.library.util.LibraryEvent.OnSearchTextChange;
									public getLibraryCategory(): ly.img.editor.core.library.LibraryCategory;
									public toString(): string;
									public getDebounce(): boolean;
									public component1(): string;
									public component2(): ly.img.editor.core.library.LibraryCategory;
								}
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
				export module ui {
					export module library {
						export module util {
							export class LibraryUiEvent {
								public static class: java.lang.Class<ly.img.editor.core.ui.library.util.LibraryUiEvent>;
								/**
								 * Constructs a new instance of the ly.img.editor.core.ui.library.util.LibraryUiEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
							export module LibraryUiEvent {
								export class ShowAssetCredits extends ly.img.editor.core.ui.library.util.LibraryUiEvent {
									public static class: java.lang.Class<ly.img.editor.core.ui.library.util.LibraryUiEvent.ShowAssetCredits>;
									public static $stable: number;
									public hashCode(): number;
									public component4(): ly.img.engine.AssetCredits;
									public equals(param0: any): boolean;
									public toString(): string;
									public constructor(param0: string, param1: ly.img.engine.AssetCredits, param2: ly.img.engine.AssetLicense, param3: ly.img.engine.AssetCredits, param4: ly.img.engine.AssetLicense);
									public getAssetLabel(): string;
									public getAssetSourceCredits(): ly.img.engine.AssetCredits;
									public component1(): string;
									public getAssetSourceLicense(): ly.img.engine.AssetLicense;
									public getAssetLicense(): ly.img.engine.AssetLicense;
									public component5(): ly.img.engine.AssetLicense;
									public component3(): ly.img.engine.AssetLicense;
									public copy(param0: string, param1: ly.img.engine.AssetCredits, param2: ly.img.engine.AssetLicense, param3: ly.img.engine.AssetCredits, param4: ly.img.engine.AssetLicense): ly.img.editor.core.ui.library.util.LibraryUiEvent.ShowAssetCredits;
									public getAssetCredits(): ly.img.engine.AssetCredits;
									public component2(): ly.img.engine.AssetCredits;
								}
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
				export module ui {
					export module scope {
						export class EditorScopeViewModel {
							public static class: java.lang.Class<ly.img.editor.core.ui.scope.EditorScopeViewModel>;
							public constructor();
							public getViewModelStore(): androidx.lifecycle.ViewModelStore;
							public clear(): void;
							public onCleared(): void;
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
				export module ui {
					export module tab_item {
						export class TabIcon {
							public static class: java.lang.Class<ly.img.editor.core.ui.tab_item.TabIcon>;
							/**
							 * Constructs a new instance of the ly.img.editor.core.ui.tab_item.TabIcon interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
}

declare module ly {
	export module img {
		export module editor {
			export module core {
				export module ui {
					export module tab_item {
						export abstract class TabIconComposable<T>  extends java.lang.Object {
							public static class: java.lang.Class<ly.img.editor.core.ui.tab_item.TabIconComposable<any>>;
							public static $stable: number;
							public constructor();
							public IconContent(param0: T, param1: androidx.compose.runtime.Composer, param2: number): void;
							public Content(param0: T, param1: androidx.compose.runtime.Composer, param2: number): void;
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
				export module ui {
					export module tab_item {
						export class TabIconMappings {
							public static class: java.lang.Class<ly.img.editor.core.ui.tab_item.TabIconMappings>;
							public static $stable: number;
							public constructor();
							public TabIconContent(param0: ly.img.editor.core.ui.tab_item.TabIcon, param1: androidx.compose.runtime.Composer, param2: number): void;
							public getMappings(): java.util.Map<any,ly.img.editor.core.ui.tab_item.TabIconComposable<any>>;
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
				export module ui {
					export module utils {
						export class RemoteFont {
							public static class: java.lang.Class<ly.img.editor.core.ui.utils.RemoteFont>;
							public static $stable: number;
							public getUri(): globalAndroid.net.Uri;
							public getWeight(): androidx.compose.ui.text.font.FontWeight;
							public "getStyle-_-LCdwA"(): number;
							public constructor(param0: globalAndroid.net.Uri, param1: androidx.compose.ui.text.font.FontWeight);
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
				export module ui {
					export module utils {
						export class RemoteTypefaceLoader {
							public static class: java.lang.Class<ly.img.editor.core.ui.utils.RemoteTypefaceLoader>;
							public static $stable: number;
							public constructor();
							public awaitLoad(param0: globalAndroid.content.Context, param1: androidx.compose.ui.text.font.AndroidFont, param2: any): any;
							public loadBlocking(param0: globalAndroid.content.Context, param1: androidx.compose.ui.text.font.AndroidFont): globalAndroid.graphics.Typeface;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//ly.img.editor.core.ui.Inject:1
//ly.img.editor.core.ui.tab_item.TabIconComposable:1

