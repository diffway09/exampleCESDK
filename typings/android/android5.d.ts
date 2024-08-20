/// <reference path="android-declarations.d.ts"/>

declare module ly {
	export module img {
		export module editor {
			export module base {
				export module components {
					export class Property {
						public static class: java.lang.Class<ly.img.editor.base.components.Property>;
						public static $stable: number;
						public component2(): string;
						public getIcon(): androidx.compose.ui.graphics.vector.ImageVector;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: number, param1: string, param2: androidx.compose.ui.graphics.vector.ImageVector);
						public getValue(): string;
						public copy(param0: number, param1: string, param2: androidx.compose.ui.graphics.vector.ImageVector): ly.img.editor.base.components.Property;
						public component3(): androidx.compose.ui.graphics.vector.ImageVector;
						public component1(): number;
						public getTextRes(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module base {
				export module components {
					export class VectorIcon {
						public static class: java.lang.Class<ly.img.editor.base.components.VectorIcon>;
						public static $stable: number;
						public getImageVector(): androidx.compose.ui.graphics.vector.ImageVector;
						public getTint(): ly.img.editor.core.ui.ColorSchemeKeyToken;
						public constructor(param0: androidx.compose.ui.graphics.vector.ImageVector, param1: ly.img.editor.core.ui.ColorSchemeKeyToken);
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module base {
				export module components {
					export class VectorIconComposable extends ly.img.editor.core.ui.tab_item.TabIconComposable<ly.img.editor.base.components.VectorIcon> {
						public static class: java.lang.Class<ly.img.editor.base.components.VectorIconComposable>;
						public static INSTANCE: ly.img.editor.base.components.VectorIconComposable;
						public static $stable: number;
						public IconContent(param0: ly.img.editor.base.components.VectorIcon, param1: androidx.compose.runtime.Composer, param2: number): void;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module base {
				export module components {
					export module actionmenu {
						export class CanvasActionMenuUiState {
							public static class: java.lang.Class<ly.img.editor.base.components.actionmenu.CanvasActionMenuUiState>;
							public static $stable: number;
							public hashCode(): number;
							public getSelectedBlockRotation(): number;
							public component6(): boolean;
							public getCanBringForward(): java.lang.Boolean;
							public isDuplicateAllowed(): boolean;
							public copy(param0: number, param1: globalAndroid.graphics.RectF, param2: number, param3: java.lang.Boolean, param4: java.lang.Boolean, param5: boolean, param6: boolean, param7: boolean): ly.img.editor.base.components.actionmenu.CanvasActionMenuUiState;
							public component7(): boolean;
							public isDeleteAllowed(): boolean;
							public firstPageExists(): boolean;
							public toString(): string;
							public secondPageExists(): boolean;
							public component4(): java.lang.Boolean;
							public component8(): boolean;
							public getShow(): boolean;
							public component1(): number;
							public getSelectedBlock(): number;
							public getCanBringBackward(): java.lang.Boolean;
							public component3(): number;
							public getSelectedBlockRect(): globalAndroid.graphics.RectF;
							public component2(): globalAndroid.graphics.RectF;
							public component5(): java.lang.Boolean;
							public constructor(param0: number, param1: globalAndroid.graphics.RectF, param2: number, param3: java.lang.Boolean, param4: java.lang.Boolean, param5: boolean, param6: boolean, param7: boolean);
							public equals(param0: any): boolean;
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
			export module base {
				export module components {
					export module color_picker {
						export class HsvColor {
							public static class: java.lang.Class<ly.img.editor.base.components.color_picker.HsvColor>;
							public getHue(): number;
							public hashCode(): number;
							public component2(): number;
							public getSaturation(): number;
							public getAlpha(): number;
							public toString(): string;
							public copy(param0: number, param1: number, param2: number, param3: number): ly.img.editor.base.components.color_picker.HsvColor;
							public component1(): number;
							public component4(): number;
							public component3(): number;
							public equals(param0: any): boolean;
							public constructor(param0: number, param1: number, param2: number, param3: number);
							public getValue(): number;
						}
						export module HsvColor {
							export class Companion {
								public static class: java.lang.Class<ly.img.editor.base.components.color_picker.HsvColor.Companion>;
								public "from-8_81llA"(param0: number): ly.img.editor.base.components.color_picker.HsvColor;
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
			export module base {
				export module dock {
					export class AdjustmentSheetContent extends ly.img.editor.base.dock.BottomSheetContent {
						public static class: java.lang.Class<ly.img.editor.base.dock.AdjustmentSheetContent>;
						public static $stable: number;
						public constructor(param0: ly.img.editor.base.dock.options.adjustment.AdjustmentUiState);
						public isInitialExpandHalf(): boolean;
						public getType(): string;
						public getUiState(): ly.img.editor.base.dock.options.adjustment.AdjustmentUiState;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module base {
				export module dock {
					export class BottomSheetContent {
						public static class: java.lang.Class<ly.img.editor.base.dock.BottomSheetContent>;
						/**
						 * Constructs a new instance of the ly.img.editor.base.dock.BottomSheetContent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isInitialExpandHalf(): boolean;
							getType(): string;
						});
						public constructor();
						public isInitialExpandHalf(): boolean;
						public getType(): string;
					}
					export module BottomSheetContent {
						export class DefaultImpls {
							public static class: java.lang.Class<ly.img.editor.base.dock.BottomSheetContent.DefaultImpls>;
							public static isInitialExpandHalf(param0: ly.img.editor.base.dock.BottomSheetContent): boolean;
							public static getType(param0: ly.img.editor.base.dock.BottomSheetContent): string;
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
			export module base {
				export module dock {
					export class EffectSheetContent extends ly.img.editor.base.dock.BottomSheetContent {
						public static class: java.lang.Class<ly.img.editor.base.dock.EffectSheetContent>;
						public static $stable: number;
						public isInitialExpandHalf(): boolean;
						public constructor(param0: ly.img.editor.base.dock.options.effect.EffectUiState);
						public getType(): string;
						public getUiState(): ly.img.editor.base.dock.options.effect.EffectUiState;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module base {
				export module dock {
					export class FillStrokeBottomSheetContent extends ly.img.editor.base.dock.BottomSheetContent {
						public static class: java.lang.Class<ly.img.editor.base.dock.FillStrokeBottomSheetContent>;
						public static $stable: number;
						public constructor(param0: ly.img.editor.base.dock.options.fillstroke.FillStrokeUiState);
						public isInitialExpandHalf(): boolean;
						public getUiState(): ly.img.editor.base.dock.options.fillstroke.FillStrokeUiState;
						public getType(): string;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module base {
				export module dock {
					export class FillStrokeIcon {
						public static class: java.lang.Class<ly.img.editor.base.dock.FillStrokeIcon>;
						public static $stable: number;
						public "getStrokeColor-QN2ZGVo"(): androidx.compose.ui.graphics.Color;
						public getFill(): ly.img.editor.base.engine.Fill;
						public getHasFill(): boolean;
						public getHasStroke(): boolean;
					}
					export module FillStrokeIcon {
						export class Companion {
							public static class: java.lang.Class<ly.img.editor.base.dock.FillStrokeIcon.Companion>;
							public create(param0: ly.img.engine.Engine, param1: number): ly.img.editor.base.dock.FillStrokeIcon;
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
			export module base {
				export module dock {
					export class FillStrokeIconComposable extends ly.img.editor.core.ui.tab_item.TabIconComposable<ly.img.editor.base.dock.FillStrokeIcon> {
						public static class: java.lang.Class<ly.img.editor.base.dock.FillStrokeIconComposable>;
						public static INSTANCE: ly.img.editor.base.dock.FillStrokeIconComposable;
						public static $stable: number;
						public IconContent(param0: ly.img.editor.base.dock.FillStrokeIcon, param1: androidx.compose.runtime.Composer, param2: number): void;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module base {
				export module dock {
					export class FormatBottomSheetContent extends ly.img.editor.base.dock.BottomSheetContent {
						public static class: java.lang.Class<ly.img.editor.base.dock.FormatBottomSheetContent>;
						public static $stable: number;
						public isInitialExpandHalf(): boolean;
						public getType(): string;
						public constructor(param0: ly.img.editor.base.dock.options.format.FormatUiState);
						public getUiState(): ly.img.editor.base.dock.options.format.FormatUiState;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module base {
				export module dock {
					export class LayerBottomSheetContent extends ly.img.editor.base.dock.BottomSheetContent {
						public static class: java.lang.Class<ly.img.editor.base.dock.LayerBottomSheetContent>;
						public static $stable: number;
						public getUiState(): ly.img.editor.base.dock.options.layer.LayerUiState;
						public isInitialExpandHalf(): boolean;
						public getType(): string;
						public constructor(param0: ly.img.editor.base.dock.options.layer.LayerUiState);
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module base {
				export module dock {
					export class LibraryBottomSheetContent extends ly.img.editor.base.dock.BottomSheetContent {
						public static class: java.lang.Class<ly.img.editor.base.dock.LibraryBottomSheetContent>;
						public static INSTANCE: ly.img.editor.base.dock.LibraryBottomSheetContent;
						public static $stable: number;
						public isInitialExpandHalf(): boolean;
						public getType(): string;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module base {
				export module dock {
					export class LibraryCategoryBottomSheetContent extends ly.img.editor.base.dock.BottomSheetContent {
						public static class: java.lang.Class<ly.img.editor.base.dock.LibraryCategoryBottomSheetContent>;
						public static $stable: number;
						public getLibraryCategory(): ly.img.editor.core.library.LibraryCategory;
						public isInitialExpandHalf(): boolean;
						public getType(): string;
						public constructor(param0: ly.img.editor.core.library.LibraryCategory);
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module base {
				export module dock {
					export class OptionItemData {
						public static class: java.lang.Class<ly.img.editor.base.dock.OptionItemData>;
						public static $stable: number;
						public getTextColor(): ly.img.editor.core.ui.ColorSchemeKeyToken;
						public component4(): ly.img.editor.core.ui.ColorSchemeKeyToken;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getOptionType(): ly.img.editor.base.dock.OptionType;
						public getLabelStringRes(): number;
						public toString(): string;
						public component3(): ly.img.editor.core.ui.tab_item.TabIcon;
						public component2(): number;
						public getIcon(): ly.img.editor.core.ui.tab_item.TabIcon;
						public copy(param0: ly.img.editor.base.dock.OptionType, param1: number, param2: ly.img.editor.core.ui.tab_item.TabIcon, param3: ly.img.editor.core.ui.ColorSchemeKeyToken): ly.img.editor.base.dock.OptionItemData;
						public constructor(param0: ly.img.editor.base.dock.OptionType, param1: number, param2: ly.img.editor.core.ui.tab_item.TabIcon, param3: ly.img.editor.core.ui.ColorSchemeKeyToken);
						public component1(): ly.img.editor.base.dock.OptionType;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module base {
				export module dock {
					export class OptionType {
						public static class: java.lang.Class<ly.img.editor.base.dock.OptionType>;
						public static Replace: ly.img.editor.base.dock.OptionType;
						public static Layer: ly.img.editor.base.dock.OptionType;
						public static Edit: ly.img.editor.base.dock.OptionType;
						public static Format: ly.img.editor.base.dock.OptionType;
						public static ShapeOptions: ly.img.editor.base.dock.OptionType;
						public static FillStroke: ly.img.editor.base.dock.OptionType;
						public static EnterGroup: ly.img.editor.base.dock.OptionType;
						public static SelectGroup: ly.img.editor.base.dock.OptionType;
						public static Crop: ly.img.editor.base.dock.OptionType;
						public static Filter: ly.img.editor.base.dock.OptionType;
						public static Effect: ly.img.editor.base.dock.OptionType;
						public static Blur: ly.img.editor.base.dock.OptionType;
						public static Adjustments: ly.img.editor.base.dock.OptionType;
						public static Delete: ly.img.editor.base.dock.OptionType;
						public static Duplicate: ly.img.editor.base.dock.OptionType;
						public static valueOf(param0: string): ly.img.editor.base.dock.OptionType;
						public static values(): androidNative.Array<ly.img.editor.base.dock.OptionType>;
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
			export module base {
				export module dock {
					export class OptionsBottomSheetContent extends ly.img.editor.base.dock.BottomSheetContent {
						public static class: java.lang.Class<ly.img.editor.base.dock.OptionsBottomSheetContent>;
						public static $stable: number;
						public isInitialExpandHalf(): boolean;
						public getType(): string;
						public constructor(param0: ly.img.editor.base.dock.options.shapeoptions.ShapeOptionsUiState);
						public getUiState(): ly.img.editor.base.dock.options.shapeoptions.ShapeOptionsUiState;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module base {
				export module dock {
					export class ReplaceBottomSheetContent extends ly.img.editor.base.dock.BottomSheetContent {
						public static class: java.lang.Class<ly.img.editor.base.dock.ReplaceBottomSheetContent>;
						public static $stable: number;
						public constructor(param0: number, param1: ly.img.editor.core.ui.engine.BlockType);
						public getDesignBlock(): number;
						public isInitialExpandHalf(): boolean;
						public getType(): string;
						public getBlockType(): ly.img.editor.core.ui.engine.BlockType;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module base {
				export module dock {
					export module options {
						export module adjustment {
							export class AdjustmentUiState {
								public static class: java.lang.Class<ly.img.editor.base.dock.options.adjustment.AdjustmentUiState>;
								public static $stable: number;
								public toString(): string;
								public getAdjustments(): java.util.List<ly.img.editor.base.engine.AdjustmentState>;
								public constructor(param0: java.util.List<ly.img.editor.base.engine.AdjustmentState>);
								public equals(param0: any): boolean;
								public component1(): java.util.List<ly.img.editor.base.engine.AdjustmentState>;
								public copy(param0: java.util.List<ly.img.editor.base.engine.AdjustmentState>): ly.img.editor.base.dock.options.adjustment.AdjustmentUiState;
								public hashCode(): number;
							}
							export module AdjustmentUiState {
								export class Factory {
									public static class: java.lang.Class<ly.img.editor.base.dock.options.adjustment.AdjustmentUiState.Factory>;
									public create(param0: ly.img.editor.base.ui.Block, param1: ly.img.engine.Engine): ly.img.editor.base.dock.options.adjustment.AdjustmentUiState;
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
			export module base {
				export module dock {
					export module options {
						export module crop {
							export class CropBottomSheetContent extends ly.img.editor.base.dock.BottomSheetContent {
								public static class: java.lang.Class<ly.img.editor.base.dock.options.crop.CropBottomSheetContent>;
								public static $stable: number;
								public constructor(param0: ly.img.editor.base.dock.options.crop.CropUiState);
								public isInitialExpandHalf(): boolean;
								public getUiState(): ly.img.editor.base.dock.options.crop.CropUiState;
								public getType(): string;
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
			export module base {
				export module dock {
					export module options {
						export module crop {
							export class CropUiState {
								public static class: java.lang.Class<ly.img.editor.base.dock.options.crop.CropUiState>;
								public static $stable: number;
								public constructor(param0: number, param1: number, param2: boolean);
								public toString(): string;
								public component3(): boolean;
								public getStraightenAngle(): number;
								public component1(): number;
								public copy(param0: number, param1: number, param2: boolean): ly.img.editor.base.dock.options.crop.CropUiState;
								public getCropScaleRatio(): number;
								public equals(param0: any): boolean;
								public component2(): number;
								public hashCode(): number;
								public getCanResetCrop(): boolean;
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
			export module base {
				export module dock {
					export module options {
						export module crop {
							export class RangeInclusionType {
								public static class: java.lang.Class<ly.img.editor.base.dock.options.crop.RangeInclusionType>;
								public static RangeInclusiveInclusive: ly.img.editor.base.dock.options.crop.RangeInclusionType;
								public static RangeInclusiveExclusive: ly.img.editor.base.dock.options.crop.RangeInclusionType;
								public static RangeExclusiveInclusive: ly.img.editor.base.dock.options.crop.RangeInclusionType;
								public static RangeExclusiveExclusive: ly.img.editor.base.dock.options.crop.RangeInclusionType;
								public static getEntries(): any;
								public static valueOf(param0: string): ly.img.editor.base.dock.options.crop.RangeInclusionType;
								public isEndIncluded(): boolean;
								public isStartIncluded(): boolean;
								public static values(): androidNative.Array<ly.img.editor.base.dock.options.crop.RangeInclusionType>;
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
			export module base {
				export module dock {
					export module options {
						export module crop {
							export class SnapState {
								public static class: java.lang.Class<ly.img.editor.base.dock.options.crop.SnapState>;
								public static Armed: ly.img.editor.base.dock.options.crop.SnapState;
								public static Disarmed: ly.img.editor.base.dock.options.crop.SnapState;
								public static valueOf(param0: string): ly.img.editor.base.dock.options.crop.SnapState;
								public static getEntries(): any;
								public static values(): androidNative.Array<ly.img.editor.base.dock.options.crop.SnapState>;
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
			export module base {
				export module dock {
					export module options {
						export module effect {
							export class EffectUiState {
								public static class: java.lang.Class<ly.img.editor.base.dock.options.effect.EffectUiState>;
								public static $stable: number;
								public toString(): string;
								public getAdjustments(): java.util.List<ly.img.editor.base.engine.AdjustmentState>;
								public getLibraryCategory(): ly.img.editor.core.library.LibraryCategory;
								public getSelectedAsset(param0: java.util.List<any>): ly.img.editor.core.ui.library.state.WrappedAsset;
								public equals(param0: any): boolean;
								public getDesignBlock(): number;
								public component4(): ly.img.editor.core.library.LibraryCategory;
								public getTitleRes(): number;
								public component1(): ly.img.engine.Engine;
								public copy(param0: ly.img.engine.Engine, param1: number, param2: string, param3: ly.img.editor.core.library.LibraryCategory, param4: java.util.List<ly.img.editor.base.engine.AdjustmentState>): ly.img.editor.base.dock.options.effect.EffectUiState;
								public constructor(param0: ly.img.engine.Engine, param1: number, param2: string, param3: ly.img.editor.core.library.LibraryCategory, param4: java.util.List<ly.img.editor.base.engine.AdjustmentState>);
								public onAssetSelected(param0: any<any,any>, param1: ly.img.editor.core.ui.library.state.WrappedAsset): void;
								public component2(): number;
								public getEngine(): ly.img.engine.Engine;
								public component3(): string;
								public component5(): java.util.List<ly.img.editor.base.engine.AdjustmentState>;
								public hashCode(): number;
								public getAppliedEffectId(): string;
							}
							export module EffectUiState {
								export class Factory {
									public static class: java.lang.Class<ly.img.editor.base.dock.options.effect.EffectUiState.Factory>;
									public create(param0: ly.img.editor.base.ui.Block, param1: ly.img.engine.Engine, param2: ly.img.editor.core.library.LibraryCategory): ly.img.editor.base.dock.options.effect.EffectUiState;
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
			export module base {
				export module dock {
					export module options {
						export module effect {
							export class ScreenState {
								public static class: java.lang.Class<ly.img.editor.base.dock.options.effect.ScreenState>;
								/**
								 * Constructs a new instance of the ly.img.editor.base.dock.options.effect.ScreenState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
							export module ScreenState {
								export class AdjustmentPage extends ly.img.editor.base.dock.options.effect.ScreenState {
									public static class: java.lang.Class<ly.img.editor.base.dock.options.effect.ScreenState.AdjustmentPage>;
									public static INSTANCE: ly.img.editor.base.dock.options.effect.ScreenState.AdjustmentPage;
									public static $stable: number;
									public hashCode(): number;
									public equals(param0: any): boolean;
									public toString(): string;
								}
								export class ColorPicker extends ly.img.editor.base.dock.options.effect.ScreenState {
									public static class: java.lang.Class<ly.img.editor.base.dock.options.effect.ScreenState.ColorPicker>;
									public static $stable: number;
									public hashCode(): number;
									public constructor(param0: ly.img.editor.base.engine.EffectAndBlurOptions);
									public equals(param0: any): boolean;
									public toString(): string;
									public copy(param0: ly.img.editor.base.engine.EffectAndBlurOptions): ly.img.editor.base.dock.options.effect.ScreenState.ColorPicker;
									public getType(): ly.img.editor.base.engine.EffectAndBlurOptions;
									public component1(): ly.img.editor.base.engine.EffectAndBlurOptions;
								}
								export class Main extends ly.img.editor.base.dock.options.effect.ScreenState {
									public static class: java.lang.Class<ly.img.editor.base.dock.options.effect.ScreenState.Main>;
									public static INSTANCE: ly.img.editor.base.dock.options.effect.ScreenState.Main;
									public static $stable: number;
									public hashCode(): number;
									public equals(param0: any): boolean;
									public toString(): string;
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
			export module base {
				export module dock {
					export module options {
						export module fillstroke {
							export module FillStrokeOptionsSheetKt {
export module  {
								export class WhenMappings {
									public static class: java.lang.Class<ly.img.editor.base.dock.options.fillstroke.FillStrokeOptionsSheetKt.WhenMappings>;
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
			export module base {
				export module dock {
					export module options {
						export module fillstroke {
							export class FillStrokeUiState {
								public static class: java.lang.Class<ly.img.editor.base.dock.options.fillstroke.FillStrokeUiState>;
								public static $stable: number;
								public getTitleRes(): number;
								public toString(): string;
								public component3(): ly.img.editor.base.dock.options.fillstroke.StrokeUiState;
								public component1(): number;
								public copy(param0: number, param1: ly.img.editor.base.dock.options.fillstroke.FillUiState, param2: ly.img.editor.base.dock.options.fillstroke.StrokeUiState): ly.img.editor.base.dock.options.fillstroke.FillStrokeUiState;
								public component2(): ly.img.editor.base.dock.options.fillstroke.FillUiState;
								public equals(param0: any): boolean;
								public constructor(param0: number, param1: ly.img.editor.base.dock.options.fillstroke.FillUiState, param2: ly.img.editor.base.dock.options.fillstroke.StrokeUiState);
								public getFillUiState(): ly.img.editor.base.dock.options.fillstroke.FillUiState;
								public getStrokeUiState(): ly.img.editor.base.dock.options.fillstroke.StrokeUiState;
								public hashCode(): number;
							}
							export module FillStrokeUiState {
								export class Factory {
									public static class: java.lang.Class<ly.img.editor.base.dock.options.fillstroke.FillStrokeUiState.Factory>;
									public getFillStrokeTitleRes$editor_base_release(param0: boolean, param1: boolean): number;
									public create(param0: ly.img.editor.base.ui.Block, param1: ly.img.engine.Engine, param2: java.util.List<androidx.compose.ui.graphics.Color>): ly.img.editor.base.dock.options.fillstroke.FillStrokeUiState;
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
			export module base {
				export module dock {
					export module options {
						export module fillstroke {
							export class FillUiState {
								public static class: java.lang.Class<ly.img.editor.base.dock.options.fillstroke.FillUiState>;
								public static $stable: number;
								public toString(): string;
								public constructor(param0: boolean, param1: boolean, param2: java.util.List<androidx.compose.ui.graphics.Color>, param3: number, param4: ly.img.editor.base.engine.Fill);
								public getSupportFillTypes(): boolean;
								public component2(): boolean;
								public component3(): java.util.List<androidx.compose.ui.graphics.Color>;
								public equals(param0: any): boolean;
								public getColorPalette(): java.util.List<androidx.compose.ui.graphics.Color>;
								public copy(param0: boolean, param1: boolean, param2: java.util.List<androidx.compose.ui.graphics.Color>, param3: number, param4: ly.img.editor.base.engine.Fill): ly.img.editor.base.dock.options.fillstroke.FillUiState;
								public component5(): ly.img.editor.base.engine.Fill;
								public getFillTypeRes(): number;
								public component4(): number;
								public isFillEnabled(): boolean;
								public getFillState(): ly.img.editor.base.engine.Fill;
								public component1(): boolean;
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
			export module base {
				export module dock {
					export module options {
						export module fillstroke {
							export class ScreenState {
								public static class: java.lang.Class<ly.img.editor.base.dock.options.fillstroke.ScreenState>;
								public static Main: ly.img.editor.base.dock.options.fillstroke.ScreenState;
								public static StrokeColorPicker: ly.img.editor.base.dock.options.fillstroke.ScreenState;
								public static FillColorPicker: ly.img.editor.base.dock.options.fillstroke.ScreenState;
								public static FirstGradientColorPicker: ly.img.editor.base.dock.options.fillstroke.ScreenState;
								public static SecondGradientColorPicker: ly.img.editor.base.dock.options.fillstroke.ScreenState;
								public static getEntries(): any;
								public static values(): androidNative.Array<ly.img.editor.base.dock.options.fillstroke.ScreenState>;
								public static valueOf(param0: string): ly.img.editor.base.dock.options.fillstroke.ScreenState;
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
			export module base {
				export module dock {
					export module options {
						export module fillstroke {
							export class StrokeUiState {
								public static class: java.lang.Class<ly.img.editor.base.dock.options.fillstroke.StrokeUiState>;
								public static $stable: number;
								public "copy-FU0evQE"(param0: java.util.List<androidx.compose.ui.graphics.Color>, param1: boolean, param2: number, param3: number, param4: number, param5: boolean, param6: boolean, param7: number, param8: number): ly.img.editor.base.dock.options.fillstroke.StrokeUiState;
								public toString(): string;
								public component2(): boolean;
								public component5(): number;
								public component6(): boolean;
								public equals(param0: any): boolean;
								public "component3-0d7_KjU"(): number;
								public component8(): number;
								public getStrokeJoinRes(): number;
								public getColorPalette(): java.util.List<androidx.compose.ui.graphics.Color>;
								public getStrokeStyleRes(): number;
								public component4(): number;
								public isStrokeJointEnabled(): boolean;
								public component1(): java.util.List<androidx.compose.ui.graphics.Color>;
								public component9(): number;
								public isStrokePositionEnabled(): boolean;
								public component7(): boolean;
								public isStrokeEnabled(): boolean;
								public getStrokePositionRes(): number;
								public hashCode(): number;
								public "getStrokeColor-0d7_KjU"(): number;
								public getStrokeWidth(): number;
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
			export module base {
				export module dock {
					export module options {
						export module format {
							export class Alignment {
								public static class: java.lang.Class<ly.img.editor.base.dock.options.format.Alignment>;
								/**
								 * Constructs a new instance of the ly.img.editor.base.dock.options.format.Alignment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
}

declare module ly {
	export module img {
		export module editor {
			export module base {
				export module dock {
					export module options {
						export module format {
							export class FormatUiState {
								public static class: java.lang.Class<ly.img.editor.base.dock.options.format.FormatUiState>;
								public static $stable: number;
								public toString(): string;
								public getFontFamilyStyle(): ly.img.engine.FontStyle;
								public component4(): ly.img.engine.FontStyle;
								public component13(): number;
								public equals(param0: any): boolean;
								public getCanToggleBold(): boolean;
								public component2(): string;
								public copy(param0: ly.img.editor.core.library.LibraryCategory, param1: string, param2: ly.img.engine.FontWeight, param3: ly.img.engine.FontStyle, param4: boolean, param5: boolean, param6: boolean, param7: boolean, param8: ly.img.engine.TextCase, param9: ly.img.editor.base.dock.options.format.HorizontalAlignment, param10: ly.img.editor.base.dock.options.format.VerticalAlignment, param11: number, param12: number, param13: number, param14: number, param15: boolean, param16: boolean, param17: number, param18: boolean, param19: java.util.List<ly.img.editor.core.ui.library.data.font.FontData>): ly.img.editor.base.dock.options.format.FormatUiState;
								public component14(): number;
								public getFontSize(): number;
								public getAvailableWeights(): java.util.List<ly.img.editor.core.ui.library.data.font.FontData>;
								public getLetterSpacing(): number;
								public getHorizontalAlignment(): ly.img.editor.base.dock.options.format.HorizontalAlignment;
								public getCanToggleItalic(): boolean;
								public getFontFamilyWeight(): ly.img.engine.FontWeight;
								public component3(): ly.img.engine.FontWeight;
								public getCasing(): ly.img.engine.TextCase;
								public getHasClippingOption(): boolean;
								public component5(): boolean;
								public component16(): boolean;
								public component18(): number;
								public getLibraryCategory(): ly.img.editor.core.library.LibraryCategory;
								public getLineHeight(): number;
								public component6(): boolean;
								public component19(): boolean;
								public getVerticalAlignment(): ly.img.editor.base.dock.options.format.VerticalAlignment;
								public component15(): number;
								public getParagraphSpacing(): number;
								public component1(): ly.img.editor.core.library.LibraryCategory;
								public isItalic(): boolean;
								public getFontFamily(): string;
								public component11(): ly.img.editor.base.dock.options.format.VerticalAlignment;
								public component17(): boolean;
								public component10(): ly.img.editor.base.dock.options.format.HorizontalAlignment;
								public component9(): ly.img.engine.TextCase;
								public isClipped(): boolean;
								public isBold(): boolean;
								public component20(): java.util.List<ly.img.editor.core.ui.library.data.font.FontData>;
								public constructor(param0: ly.img.editor.core.library.LibraryCategory, param1: string, param2: ly.img.engine.FontWeight, param3: ly.img.engine.FontStyle, param4: boolean, param5: boolean, param6: boolean, param7: boolean, param8: ly.img.engine.TextCase, param9: ly.img.editor.base.dock.options.format.HorizontalAlignment, param10: ly.img.editor.base.dock.options.format.VerticalAlignment, param11: number, param12: number, param13: number, param14: number, param15: boolean, param16: boolean, param17: number, param18: boolean, param19: java.util.List<ly.img.editor.core.ui.library.data.font.FontData>);
								public getSizeModeRes(): number;
								public isArrangeResizeAllowed(): boolean;
								public component12(): number;
								public component7(): boolean;
								public hashCode(): number;
								public component8(): boolean;
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
			export module base {
				export module dock {
					export module options {
						export module format {
							export module FormatUiStateKt {
export module  {
								export class WhenMappings {
									public static class: java.lang.Class<ly.img.editor.base.dock.options.format.FormatUiStateKt.WhenMappings>;
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
			export module base {
				export module dock {
					export module options {
						export module format {
							export class HorizontalAlignment extends ly.img.editor.base.dock.options.format.Alignment {
								public static class: java.lang.Class<ly.img.editor.base.dock.options.format.HorizontalAlignment>;
								public static Left: ly.img.editor.base.dock.options.format.HorizontalAlignment;
								public static Center: ly.img.editor.base.dock.options.format.HorizontalAlignment;
								public static Right: ly.img.editor.base.dock.options.format.HorizontalAlignment;
								public static getEntries(): any;
								public static valueOf(param0: string): ly.img.editor.base.dock.options.format.HorizontalAlignment;
								public static values(): androidNative.Array<ly.img.editor.base.dock.options.format.HorizontalAlignment>;
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
			export module base {
				export module dock {
					export module options {
						export module format {
							export class ScreenState {
								public static class: java.lang.Class<ly.img.editor.base.dock.options.format.ScreenState>;
								public static Main: ly.img.editor.base.dock.options.format.ScreenState;
								public static SelectFont: ly.img.editor.base.dock.options.format.ScreenState;
								public static SelectFontWeight: ly.img.editor.base.dock.options.format.ScreenState;
								public static getEntries(): any;
								public static values(): androidNative.Array<ly.img.editor.base.dock.options.format.ScreenState>;
								public static valueOf(param0: string): ly.img.editor.base.dock.options.format.ScreenState;
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
			export module base {
				export module dock {
					export module options {
						export module format {
							export class SizeModeUi {
								public static class: java.lang.Class<ly.img.editor.base.dock.options.format.SizeModeUi>;
								public static ABSOLUTE: ly.img.editor.base.dock.options.format.SizeModeUi;
								public static AUTO_HEIGHT: ly.img.editor.base.dock.options.format.SizeModeUi;
								public static AUTO_SIZE: ly.img.editor.base.dock.options.format.SizeModeUi;
								public static UNKNOWN: ly.img.editor.base.dock.options.format.SizeModeUi;
								public static getEntries(): any;
								public static values(): androidNative.Array<ly.img.editor.base.dock.options.format.SizeModeUi>;
								public static valueOf(param0: string): ly.img.editor.base.dock.options.format.SizeModeUi;
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
			export module base {
				export module dock {
					export module options {
						export module format {
							export class VerticalAlignment extends ly.img.editor.base.dock.options.format.Alignment {
								public static class: java.lang.Class<ly.img.editor.base.dock.options.format.VerticalAlignment>;
								public static Top: ly.img.editor.base.dock.options.format.VerticalAlignment;
								public static Center: ly.img.editor.base.dock.options.format.VerticalAlignment;
								public static Bottom: ly.img.editor.base.dock.options.format.VerticalAlignment;
								public static values(): androidNative.Array<ly.img.editor.base.dock.options.format.VerticalAlignment>;
								public static valueOf(param0: string): ly.img.editor.base.dock.options.format.VerticalAlignment;
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
			export module base {
				export module dock {
					export module options {
						export module layer {
							export class LayerUiState {
								public static class: java.lang.Class<ly.img.editor.base.dock.options.layer.LayerUiState>;
								public static $stable: number;
								public component1(): java.lang.Float;
								public toString(): string;
								public component3(): boolean;
								public component5(): boolean;
								public getCanBringForward(): boolean;
								public component6(): boolean;
								public equals(param0: any): boolean;
								public constructor(param0: java.lang.Float, param1: java.lang.Integer, param2: boolean, param3: boolean, param4: boolean, param5: boolean, param6: boolean);
								public component2(): java.lang.Integer;
								public copy(param0: java.lang.Float, param1: java.lang.Integer, param2: boolean, param3: boolean, param4: boolean, param5: boolean, param6: boolean): ly.img.editor.base.dock.options.layer.LayerUiState;
								public getOpacity(): java.lang.Float;
								public getBlendMode(): java.lang.Integer;
								public component4(): boolean;
								public isDeleteAllowed(): boolean;
								public isDuplicateAllowed(): boolean;
								public getCanSendBackward(): boolean;
								public isMoveAllowed(): boolean;
								public component7(): boolean;
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
			export module base {
				export module dock {
					export module options {
						export module shapeoptions {
							export class LineShapeOptionsUiState extends ly.img.editor.base.dock.options.shapeoptions.ShapeOptionsUiState {
								public static class: java.lang.Class<ly.img.editor.base.dock.options.shapeoptions.LineShapeOptionsUiState>;
								public static $stable: number;
								public toString(): string;
								public constructor(param0: number);
								public component1(): number;
								public equals(param0: any): boolean;
								public copy(param0: number): ly.img.editor.base.dock.options.shapeoptions.LineShapeOptionsUiState;
								public hashCode(): number;
								public getWidth(): number;
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
			export module base {
				export module dock {
					export module options {
						export module shapeoptions {
							export class PolygonShapeOptionsUiState extends ly.img.editor.base.dock.options.shapeoptions.ShapeOptionsUiState {
								public static class: java.lang.Class<ly.img.editor.base.dock.options.shapeoptions.PolygonShapeOptionsUiState>;
								public static $stable: number;
								public toString(): string;
								public constructor(param0: number);
								public component1(): number;
								public getSides(): number;
								public equals(param0: any): boolean;
								public hashCode(): number;
								public copy(param0: number): ly.img.editor.base.dock.options.shapeoptions.PolygonShapeOptionsUiState;
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
			export module base {
				export module dock {
					export module options {
						export module shapeoptions {
							export class ShapeOptionsUiState {
								public static class: java.lang.Class<ly.img.editor.base.dock.options.shapeoptions.ShapeOptionsUiState>;
								/**
								 * Constructs a new instance of the ly.img.editor.base.dock.options.shapeoptions.ShapeOptionsUiState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
}

declare module ly {
	export module img {
		export module editor {
			export module base {
				export module dock {
					export module options {
						export module shapeoptions {
							export class StarShapeOptionsUiState extends ly.img.editor.base.dock.options.shapeoptions.ShapeOptionsUiState {
								public static class: java.lang.Class<ly.img.editor.base.dock.options.shapeoptions.StarShapeOptionsUiState>;
								public static $stable: number;
								public getInnerDiameter(): number;
								public toString(): string;
								public component1(): number;
								public constructor(param0: number, param1: number);
								public equals(param0: any): boolean;
								public copy(param0: number, param1: number): ly.img.editor.base.dock.options.shapeoptions.StarShapeOptionsUiState;
								public getPoints(): number;
								public component2(): number;
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
			export module base {
				export module engine {
					export class AdjustmentState {
						public static class: java.lang.Class<ly.img.editor.base.engine.AdjustmentState>;
						public static $stable: number;
						public copy(param0: ly.img.editor.base.engine.EffectAndBlurOptions, param1: ly.img.editor.base.engine.AdjustmentState.Value): ly.img.editor.base.engine.AdjustmentState;
						public constructor(param0: ly.img.editor.base.engine.EffectAndBlurOptions, param1: ly.img.editor.base.engine.AdjustmentState.Value);
						public getValue(): ly.img.editor.base.engine.AdjustmentState.Value;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component1(): ly.img.editor.base.engine.EffectAndBlurOptions;
						public getType(): ly.img.editor.base.engine.EffectAndBlurOptions;
						public toString(): string;
						public component2(): ly.img.editor.base.engine.AdjustmentState.Value;
					}
					export module AdjustmentState {
						export class Value {
							public static class: java.lang.Class<ly.img.editor.base.engine.AdjustmentState.Value>;
							/**
							 * Constructs a new instance of the ly.img.editor.base.engine.AdjustmentState$Value interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export module Value {
							export class Color extends ly.img.editor.base.engine.AdjustmentState.Value {
								public static class: java.lang.Class<ly.img.editor.base.engine.AdjustmentState.Value.Color>;
								public static $stable: number;
								public toString(): string;
								public "copy-8_81llA"(param0: number): ly.img.editor.base.engine.AdjustmentState.Value.Color;
								public "getValue-0d7_KjU"(): number;
								public equals(param0: any): boolean;
								public "component1-0d7_KjU"(): number;
								public hashCode(): number;
							}
							export class Float extends ly.img.editor.base.engine.AdjustmentState.Value {
								public static class: java.lang.Class<ly.img.editor.base.engine.AdjustmentState.Value.Float>;
								public static $stable: number;
								public toString(): string;
								public constructor(param0: number);
								public getValue(): number;
								public component1(): number;
								public copy(param0: number): ly.img.editor.base.engine.AdjustmentState.Value.Float;
								public equals(param0: any): boolean;
								public hashCode(): number;
							}
							export class Int extends ly.img.editor.base.engine.AdjustmentState.Value {
								public static class: java.lang.Class<ly.img.editor.base.engine.AdjustmentState.Value.Int>;
								public static $stable: number;
								public toString(): string;
								public constructor(param0: number);
								public getValue(): number;
								public component1(): number;
								public copy(param0: number): ly.img.editor.base.engine.AdjustmentState.Value.Int;
								public equals(param0: any): boolean;
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
			export module base {
				export module engine {
					export class ConicalGradientFill extends ly.img.editor.base.engine.GradientFill {
						public static class: java.lang.Class<ly.img.editor.base.engine.ConicalGradientFill>;
						public static $stable: number;
						public "getFillColor-0d7_KjU"(): number;
						public constructor(param0: number, param1: number, param2: java.util.List<ly.img.engine.GradientColorStop>);
						public getColorStops(): java.util.List<ly.img.engine.GradientColorStop>;
						public getCenterY(): number;
						public getCenterX(): number;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module base {
				export module engine {
					export class EffectAndBlurOptions {
						public static class: java.lang.Class<ly.img.editor.base.engine.EffectAndBlurOptions>;
						public static ADJUSTMENT_BRIGHTNESS: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static ADJUSTMENT_SATURATION: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static ADJUSTMENT_CONTRAST: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static ADJUSTMENT_GAMMA: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static ADJUSTMENT_CLARITY: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static ADJUSTMENT_EXPOSURE: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static ADJUSTMENT_SHADOWS: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static ADJUSTMENT_HIGHLIGHTS: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static ADJUSTMENT_BLACKS: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static ADJUSTMENT_WHITES: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static ADJUSTMENT_TEMPERATURE: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static ADJUSTMENT_SHARPNESS: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static LUT_INTENSITY: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static DUOTONE_INTENSITY: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static PIXELIZE_HORIZONTALPIXELSIZE: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static PIXELIZE_VERTICALPIXELSIZE: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static RADIAL_PIXEL_RADIUS: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static RADIAL_PIXEL_SEGMENTS: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static CROSS_CUT_SLICES: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static CROSS_CUT_OFFSET: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static CROSS_CUT_SPEEDV: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static CROSS_CUT_TIME: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static LIQUID_AMOUNT: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static LIQUID_SCALE: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static LIQUID_TIME: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static OUTLINER_AMOUNT: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static OUTLINER_PASSTHROUGH: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static DOT_PATTERN_DOTS: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static DOT_PATTERN_SIZE: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static DOT_PATTERN_BLUR: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static POSTERIZE_LEVELS: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static TV_GLITCH_DISTORTION: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static TV_GLITCH_DISTORTION2: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static TV_GLITCH_SPEED: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static TV_GLITCH_ROLLSPEED: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static HALF_TONE_ANGLE: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static HALF_TONE_SCALE: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static LINOCUT_SCALE: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static SHIFTER_AMOUNT: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static SHIFTER_ANGLE: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static MIRROR_SIDE: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static GLOW_SIZE: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static GLOW_AMOUNT: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static GLOW_DARKNESS: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static VIGNETTE_OFFSET: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static VIGNETTE_DARKNESS: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static TILT_SHIFT_AMOUNT: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static TILT_SHIFT_POSITION: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static RECOLOR_FROM_COLOR: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static RECOLOR_TO_COLOR: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static RECOLOR_COLOR_MATCH: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static RECOLOR_BRIGHTNESS_MATCH: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static RECOLOR_SMOOTHNESS: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static GREEN_SCREEN_FROM_COLOR: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static GREEN_SCREEN_COLOR_MATCH: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static GREEN_SCREEN_SMOOTHNESS: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static GREEN_SCREEN_SPILL: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static EXTRUDE_BLUR_AMOUNT: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static BLUR_UNIFORM_INTENSITY: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static BLUR_LINEAR_BLURRADIUS: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static BLUR_LINEAR_X1: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static BLUR_LINEAR_Y1: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static BLUR_LINEAR_X2: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static BLUR_LINEAR_Y2: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static BLUR_MIRRORED_BLURRADIUS: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static BLUR_MIRRORED_GRADIENTSIZE: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static BLUR_MIRRORED_SIZE: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static BLUR_MIRRORED_X1: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static BLUR_MIRRORED_Y1: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static BLUR_MIRRORED_X2: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static BLUR_MIRRORED_Y2: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static BLUR_RADIAL_BLURRADIUS: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static BLUR_RADIAL_GRADIENTRADIUS: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static BLUR_RADIAL_RADIUS: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static BLUR_RADIAL_X: ly.img.editor.base.engine.EffectAndBlurOptions;
						public static BLUR_RADIAL_Y: ly.img.editor.base.engine.EffectAndBlurOptions;
						public getPropertyPath(): string;
						public static getEntries(): any;
						public static values(): androidNative.Array<ly.img.editor.base.engine.EffectAndBlurOptions>;
						public getValueOptions(): ly.img.editor.base.engine.EffectAndBlurOptions.ValueOptions;
						public getType(): ly.img.engine.ObjectType;
						public static valueOf(param0: string): ly.img.editor.base.engine.EffectAndBlurOptions;
						public getNameRes(): number;
					}
					export module EffectAndBlurOptions {
						export class Companion {
							public static class: java.lang.Class<ly.img.editor.base.engine.EffectAndBlurOptions.Companion>;
							public getEffectAdjustments(param0: ly.img.engine.Engine, param1: number, param2: ly.img.engine.ObjectType): java.util.List<ly.img.editor.base.engine.AdjustmentState>;
							public getEffectAdjustments(param0: ly.img.engine.Engine, param1: java.lang.Integer): java.util.List<ly.img.editor.base.engine.AdjustmentState>;
						}
						export class ValueOptions {
							public static class: java.lang.Class<ly.img.editor.base.engine.EffectAndBlurOptions.ValueOptions>;
							/**
							 * Constructs a new instance of the ly.img.editor.base.engine.EffectAndBlurOptions$ValueOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export module ValueOptions {
							export class Color extends ly.img.editor.base.engine.EffectAndBlurOptions.ValueOptions {
								public static class: java.lang.Class<ly.img.editor.base.engine.EffectAndBlurOptions.ValueOptions.Color>;
								public static $stable: number;
								public toString(): string;
								public "getDefaultValue-0d7_KjU"(): number;
								public equals(param0: any): boolean;
								public "component1-0d7_KjU"(): number;
								public "copy-8_81llA"(param0: number): ly.img.editor.base.engine.EffectAndBlurOptions.ValueOptions.Color;
								public hashCode(): number;
							}
							export class Float extends ly.img.editor.base.engine.EffectAndBlurOptions.ValueOptions {
								public static class: java.lang.Class<ly.img.editor.base.engine.EffectAndBlurOptions.ValueOptions.Float>;
								public static $stable: number;
								public getRange(): any;
								public getStep(): number;
								public toString(): string;
								public getDefaultValue(): number;
								public equals(param0: any): boolean;
								public copy(param0: any, param1: number, param2: number): ly.img.editor.base.engine.EffectAndBlurOptions.ValueOptions.Float;
								public component2(): number;
								public component3(): number;
								public hashCode(): number;
								public constructor(param0: any, param1: number, param2: number);
								public component1(): any;
							}
							export class Int extends ly.img.editor.base.engine.EffectAndBlurOptions.ValueOptions {
								public static class: java.lang.Class<ly.img.editor.base.engine.EffectAndBlurOptions.ValueOptions.Int>;
								public static $stable: number;
								public getStep(): number;
								public toString(): string;
								public getRange(): any;
								public constructor(param0: any, param1: number, param2: number);
								public copy(param0: any, param1: number, param2: number): ly.img.editor.base.engine.EffectAndBlurOptions.ValueOptions.Int;
								public getDefaultValue(): number;
								public equals(param0: any): boolean;
								public component2(): number;
								public component3(): number;
								public component1(): any;
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
			export module base {
				export module engine {
					export class EffectGroup {
						public static class: java.lang.Class<ly.img.editor.base.engine.EffectGroup>;
						public static Filter: ly.img.editor.base.engine.EffectGroup;
						public static FxEffect: ly.img.editor.base.engine.EffectGroup;
						public static Adjustments: ly.img.editor.base.engine.EffectGroup;
						public static valueOf(param0: string): ly.img.editor.base.engine.EffectGroup;
						public static values(): androidNative.Array<ly.img.editor.base.engine.EffectGroup>;
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
			export module base {
				export module engine {
					export module EngineCanvasViewKt {
export module  {
						export class WhenMappings {
							public static class: java.lang.Class<ly.img.editor.base.engine.EngineCanvasViewKt.WhenMappings>;
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
			export module base {
				export module engine {
					export class Fill {
						public static class: java.lang.Class<ly.img.editor.base.engine.Fill>;
						/**
						 * Constructs a new instance of the ly.img.editor.base.engine.Fill interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							"getFillColor-0d7_KjU"(): number;
						});
						public constructor();
						public "getFillColor-0d7_KjU"(): number;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module base {
				export module engine {
					export class GradientFill extends ly.img.editor.base.engine.Fill {
						public static class: java.lang.Class<ly.img.editor.base.engine.GradientFill>;
						/**
						 * Constructs a new instance of the ly.img.editor.base.engine.GradientFill interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getColorStops(): java.util.List<ly.img.engine.GradientColorStop>;
							"getFillColor-0d7_KjU"(): number;
							"getFillColor-0d7_KjU"(): number;
						});
						public constructor();
						public "getFillColor-0d7_KjU"(): number;
						public getColorStops(): java.util.List<ly.img.engine.GradientColorStop>;
					}
					export module GradientFill {
						export class DefaultImpls {
							public static class: java.lang.Class<ly.img.editor.base.engine.GradientFill.DefaultImpls>;
							public static "getFillColor-0d7_KjU"(param0: ly.img.editor.base.engine.GradientFill): number;
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
			export module base {
				export module engine {
					export class LayoutAxis {
						public static class: java.lang.Class<ly.img.editor.base.engine.LayoutAxis>;
						public static Vertical: ly.img.editor.base.engine.LayoutAxis;
						public static Horizontal: ly.img.editor.base.engine.LayoutAxis;
						public static Depth: ly.img.editor.base.engine.LayoutAxis;
						public static values(): androidNative.Array<ly.img.editor.base.engine.LayoutAxis>;
						public static getEntries(): any;
						public static valueOf(param0: string): ly.img.editor.base.engine.LayoutAxis;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module base {
				export module engine {
					export class LinearGradientFill extends ly.img.editor.base.engine.GradientFill {
						public static class: java.lang.Class<ly.img.editor.base.engine.LinearGradientFill>;
						public static $stable: number;
						public "getFillColor-0d7_KjU"(): number;
						public getEndPointX(): number;
						public copy(param0: number, param1: number, param2: number, param3: number, param4: java.util.List<ly.img.engine.GradientColorStop>): ly.img.editor.base.engine.LinearGradientFill;
						public getColorStops(): java.util.List<ly.img.engine.GradientColorStop>;
						public component5(): java.util.List<ly.img.engine.GradientColorStop>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getGradientRotation(): number;
						public component4(): number;
						public toString(): string;
						public getEndPointY(): number;
						public component2(): number;
						public getStartPointY(): number;
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: java.util.List<ly.img.engine.GradientColorStop>);
						public getStartPointX(): number;
						public component1(): number;
						public component3(): number;
					}
					export module LinearGradientFill {
						export class Companion {
							public static class: java.lang.Class<ly.img.editor.base.engine.LinearGradientFill.Companion>;
							public calculateLinearGradientFromRotation(param0: number, param1: java.util.List<ly.img.engine.GradientColorStop>): ly.img.editor.base.engine.LinearGradientFill;
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
			export module base {
				export module engine {
					export class RadialGradientFill extends ly.img.editor.base.engine.GradientFill {
						public static class: java.lang.Class<ly.img.editor.base.engine.RadialGradientFill>;
						public static $stable: number;
						public "getFillColor-0d7_KjU"(): number;
						public getColorStops(): java.util.List<ly.img.engine.GradientColorStop>;
						public getRadius(): number;
						public constructor(param0: number, param1: number, param2: number, param3: java.util.List<ly.img.engine.GradientColorStop>);
						public getCenterY(): number;
						public getCenterX(): number;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module base {
				export module engine {
					export class SolidFill extends ly.img.editor.base.engine.Fill {
						public static class: java.lang.Class<ly.img.editor.base.engine.SolidFill>;
						public static $stable: number;
						public "getFillColor-0d7_KjU"(): number;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module base {
				export module migration {
					export class EditorMigrationHelper {
						public static class: java.lang.Class<ly.img.editor.base.migration.EditorMigrationHelper>;
						public static $stable: number;
						public constructor();
						public migrate(param0: any): any;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module base {
				export module rootdock {
					export class RootDockItemActionType {
						public static class: java.lang.Class<ly.img.editor.base.rootdock.RootDockItemActionType>;
						/**
						 * Constructs a new instance of the ly.img.editor.base.rootdock.RootDockItemActionType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export module RootDockItemActionType {
						export class OnEvent extends ly.img.editor.base.rootdock.RootDockItemActionType {
							public static class: java.lang.Class<ly.img.editor.base.rootdock.RootDockItemActionType.OnEvent>;
							public static $stable: number;
							public hashCode(): number;
							public component1(): ly.img.editor.base.ui.Event;
							public toString(): string;
							public copy(param0: ly.img.editor.base.ui.Event): ly.img.editor.base.rootdock.RootDockItemActionType.OnEvent;
							public constructor(param0: ly.img.editor.base.ui.Event);
							public equals(param0: any): boolean;
							public getEvent(): ly.img.editor.base.ui.Event;
						}
						export class OpenCamera extends ly.img.editor.base.rootdock.RootDockItemActionType {
							public static class: java.lang.Class<ly.img.editor.base.rootdock.RootDockItemActionType.OpenCamera>;
							public static INSTANCE: ly.img.editor.base.rootdock.RootDockItemActionType.OpenCamera;
							public static $stable: number;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export class OpenGallery extends ly.img.editor.base.rootdock.RootDockItemActionType {
							public static class: java.lang.Class<ly.img.editor.base.rootdock.RootDockItemActionType.OpenGallery>;
							public static INSTANCE: ly.img.editor.base.rootdock.RootDockItemActionType.OpenGallery;
							public static $stable: number;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
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
			export module base {
				export module rootdock {
					export class RootDockItemData {
						public static class: java.lang.Class<ly.img.editor.base.rootdock.RootDockItemData>;
						public static $stable: number;
						public component2(): number;
						public copy(param0: ly.img.editor.base.rootdock.RootDockItemActionType, param1: number, param2: ly.img.editor.core.ui.tab_item.TabIcon): ly.img.editor.base.rootdock.RootDockItemData;
						public component1(): ly.img.editor.base.rootdock.RootDockItemActionType;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getType(): ly.img.editor.base.rootdock.RootDockItemActionType;
						public constructor(param0: ly.img.editor.base.rootdock.RootDockItemActionType, param1: number, param2: ly.img.editor.core.ui.tab_item.TabIcon);
						public getIcon(): ly.img.editor.core.ui.tab_item.TabIcon;
						public getLabelStringRes(): number;
						public toString(): string;
						public component3(): ly.img.editor.core.ui.tab_item.TabIcon;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module base {
				export module ui {
					export class Block {
						public static class: java.lang.Class<ly.img.editor.base.ui.Block>;
						public static $stable: number;
						public component2(): ly.img.editor.core.ui.engine.BlockType;
						public getDesignBlock(): number;
						public component3(): java.util.List<ly.img.editor.base.dock.OptionItemData>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: number, param1: ly.img.editor.core.ui.engine.BlockType, param2: java.util.List<ly.img.editor.base.dock.OptionItemData>);
						public component1(): number;
						public getOptions(): java.util.List<ly.img.editor.base.dock.OptionItemData>;
						public toString(): string;
						public getType(): ly.img.editor.core.ui.engine.BlockType;
						public copy(param0: number, param1: ly.img.editor.core.ui.engine.BlockType, param2: java.util.List<ly.img.editor.base.dock.OptionItemData>): ly.img.editor.base.ui.Block;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module base {
				export module ui {
					export class BlockEvent extends ly.img.editor.base.ui.Event {
						public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent>;
						/**
						 * Constructs a new instance of the ly.img.editor.base.ui.BlockEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export module BlockEvent {
						export class OnBackward extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnBackward>;
							public static INSTANCE: ly.img.editor.base.ui.BlockEvent.OnBackward;
							public static $stable: number;
						}
						export class OnBoldToggle extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnBoldToggle>;
							public static INSTANCE: ly.img.editor.base.ui.BlockEvent.OnBoldToggle;
							public static $stable: number;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export class OnChangeBlendMode extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeBlendMode>;
							public static $stable: number;
							public component1(): ly.img.engine.BlendMode;
							public hashCode(): number;
							public constructor(param0: ly.img.engine.BlendMode);
							public getBlendMode(): ly.img.engine.BlendMode;
							public toString(): string;
							public equals(param0: any): boolean;
							public copy(param0: ly.img.engine.BlendMode): ly.img.editor.base.ui.BlockEvent.OnChangeBlendMode;
						}
						export class OnChangeClipping extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeClipping>;
							public static $stable: number;
							public getEnabled(): boolean;
							public component1(): boolean;
							public hashCode(): number;
							public constructor(param0: boolean);
							public copy(param0: boolean): ly.img.editor.base.ui.BlockEvent.OnChangeClipping;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export class OnChangeConicalGradientParams extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeConicalGradientParams>;
							public static $stable: number;
							public component1(): number;
							public copy(param0: number, param1: number): ly.img.editor.base.ui.BlockEvent.OnChangeConicalGradientParams;
							public constructor(param0: number, param1: number);
							public hashCode(): number;
							public component2(): number;
							public getCenterY(): number;
							public getCenterX(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export class OnChangeEffectSettings extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeEffectSettings>;
							public static $stable: number;
							public component1(): ly.img.editor.base.engine.EffectAndBlurOptions;
							public hashCode(): number;
							public copy(param0: ly.img.editor.base.engine.EffectAndBlurOptions, param1: ly.img.editor.base.engine.AdjustmentState.Value): ly.img.editor.base.ui.BlockEvent.OnChangeEffectSettings;
							public component2(): ly.img.editor.base.engine.AdjustmentState.Value;
							public getValue(): ly.img.editor.base.engine.AdjustmentState.Value;
							public constructor(param0: ly.img.editor.base.engine.EffectAndBlurOptions, param1: ly.img.editor.base.engine.AdjustmentState.Value);
							public toString(): string;
							public equals(param0: any): boolean;
							public getAdjustment(): ly.img.editor.base.engine.EffectAndBlurOptions;
						}
						export class OnChangeFillColor extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeFillColor>;
							public static $stable: number;
							public hashCode(): number;
							public "component1-0d7_KjU"(): number;
							public "copy-8_81llA"(param0: number): ly.img.editor.base.ui.BlockEvent.OnChangeFillColor;
							public "getColor-0d7_KjU"(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export class OnChangeFillStyle extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeFillStyle>;
							public static $stable: number;
							public getStyle(): string;
							public hashCode(): number;
							public constructor(param0: string);
							public copy(param0: string): ly.img.editor.base.ui.BlockEvent.OnChangeFillStyle;
							public toString(): string;
							public equals(param0: any): boolean;
							public component1(): string;
						}
						export class OnChangeFinish extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeFinish>;
							public static INSTANCE: ly.img.editor.base.ui.BlockEvent.OnChangeFinish;
							public static $stable: number;
						}
						export class OnChangeFont extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeFont>;
							public static $stable: number;
							public getFontUri(): globalAndroid.net.Uri;
							public hashCode(): number;
							public constructor(param0: globalAndroid.net.Uri, param1: ly.img.engine.Typeface);
							public copy(param0: globalAndroid.net.Uri, param1: ly.img.engine.Typeface): ly.img.editor.base.ui.BlockEvent.OnChangeFont;
							public component2(): ly.img.engine.Typeface;
							public component1(): globalAndroid.net.Uri;
							public toString(): string;
							public equals(param0: any): boolean;
							public getTypeface(): ly.img.engine.Typeface;
						}
						export class OnChangeFontSize extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeFontSize>;
							public static $stable: number;
							public getFontSize(): number;
							public component1(): number;
							public hashCode(): number;
							public copy(param0: number): ly.img.editor.base.ui.BlockEvent.OnChangeFontSize;
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: number);
						}
						export class OnChangeGradientFillColors extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeGradientFillColors>;
							public static $stable: number;
							public component1(): number;
							public hashCode(): number;
							public getIndex(): number;
							public "getColor-0d7_KjU"(): number;
							public toString(): string;
							public "copy-4WTKRHQ"(param0: number, param1: number): ly.img.editor.base.ui.BlockEvent.OnChangeGradientFillColors;
							public equals(param0: any): boolean;
							public "component2-0d7_KjU"(): number;
						}
						export class OnChangeHorizontalAlignment extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeHorizontalAlignment>;
							public static $stable: number;
							public constructor(param0: ly.img.editor.base.dock.options.format.HorizontalAlignment);
							public component1(): ly.img.editor.base.dock.options.format.HorizontalAlignment;
							public hashCode(): number;
							public copy(param0: ly.img.editor.base.dock.options.format.HorizontalAlignment): ly.img.editor.base.ui.BlockEvent.OnChangeHorizontalAlignment;
							public toString(): string;
							public equals(param0: any): boolean;
							public getAlignment(): ly.img.editor.base.dock.options.format.HorizontalAlignment;
						}
						export class OnChangeLetterCasing extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeLetterCasing>;
							public static $stable: number;
							public hashCode(): number;
							public getCasing(): ly.img.engine.TextCase;
							public component1(): ly.img.engine.TextCase;
							public copy(param0: ly.img.engine.TextCase): ly.img.editor.base.ui.BlockEvent.OnChangeLetterCasing;
							public toString(): string;
							public constructor(param0: ly.img.engine.TextCase);
							public equals(param0: any): boolean;
						}
						export class OnChangeLetterSpacing extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeLetterSpacing>;
							public static $stable: number;
							public component1(): number;
							public hashCode(): number;
							public toString(): string;
							public getSpacing(): number;
							public equals(param0: any): boolean;
							public constructor(param0: number);
							public copy(param0: number): ly.img.editor.base.ui.BlockEvent.OnChangeLetterSpacing;
						}
						export class OnChangeLineHeight extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeLineHeight>;
							public static $stable: number;
							public getHeight(): number;
							public component1(): number;
							public hashCode(): number;
							public copy(param0: number): ly.img.editor.base.ui.BlockEvent.OnChangeLineHeight;
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: number);
						}
						export class OnChangeLineWidth extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeLineWidth>;
							public static $stable: number;
							public getWidth(): number;
							public component1(): number;
							public copy(param0: number): ly.img.editor.base.ui.BlockEvent.OnChangeLineWidth;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: number);
						}
						export class OnChangeLinearGradientParams extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeLinearGradientParams>;
							public static $stable: number;
							public hashCode(): number;
							public component2(): number;
							public getStartX(): number;
							public toString(): string;
							public component1(): number;
							public getStartY(): number;
							public getEndY(): number;
							public component4(): number;
							public copy(param0: number, param1: number, param2: number, param3: number): ly.img.editor.base.ui.BlockEvent.OnChangeLinearGradientParams;
							public getEndX(): number;
							public component3(): number;
							public equals(param0: any): boolean;
							public constructor(param0: number, param1: number, param2: number, param3: number);
						}
						export class OnChangeOpacity extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeOpacity>;
							public static $stable: number;
							public component1(): number;
							public copy(param0: number): ly.img.editor.base.ui.BlockEvent.OnChangeOpacity;
							public hashCode(): number;
							public toString(): string;
							public getOpacity(): number;
							public equals(param0: any): boolean;
							public constructor(param0: number);
						}
						export class OnChangeParagraphSpacing extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeParagraphSpacing>;
							public static $stable: number;
							public component1(): number;
							public copy(param0: number): ly.img.editor.base.ui.BlockEvent.OnChangeParagraphSpacing;
							public hashCode(): number;
							public toString(): string;
							public getSpacing(): number;
							public equals(param0: any): boolean;
							public constructor(param0: number);
						}
						export class OnChangePolygonSides extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangePolygonSides>;
							public static $stable: number;
							public component1(): number;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public getSides(): number;
							public copy(param0: number): ly.img.editor.base.ui.BlockEvent.OnChangePolygonSides;
							public constructor(param0: number);
						}
						export class OnChangeRadialGradientParams extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeRadialGradientParams>;
							public static $stable: number;
							public getRadius(): number;
							public constructor(param0: number, param1: number, param2: number);
							public component1(): number;
							public hashCode(): number;
							public component2(): number;
							public getCenterY(): number;
							public getCenterX(): number;
							public component3(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public copy(param0: number, param1: number, param2: number): ly.img.editor.base.ui.BlockEvent.OnChangeRadialGradientParams;
						}
						export class OnChangeSizeMode extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeSizeMode>;
							public static $stable: number;
							public hashCode(): number;
							public constructor(param0: string);
							public toString(): string;
							public equals(param0: any): boolean;
							public getSizeMode(): string;
							public component1(): string;
							public copy(param0: string): ly.img.editor.base.ui.BlockEvent.OnChangeSizeMode;
						}
						export class OnChangeStarInnerDiameter extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeStarInnerDiameter>;
							public static $stable: number;
							public component1(): number;
							public hashCode(): number;
							public getDiameter(): number;
							public copy(param0: number): ly.img.editor.base.ui.BlockEvent.OnChangeStarInnerDiameter;
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: number);
						}
						export class OnChangeStarPoints extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeStarPoints>;
							public static $stable: number;
							public getPoints(): number;
							public component1(): number;
							public hashCode(): number;
							public copy(param0: number): ly.img.editor.base.ui.BlockEvent.OnChangeStarPoints;
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: number);
						}
						export class OnChangeStrokeColor extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeStrokeColor>;
							public static $stable: number;
							public hashCode(): number;
							public "component1-0d7_KjU"(): number;
							public "copy-8_81llA"(param0: number): ly.img.editor.base.ui.BlockEvent.OnChangeStrokeColor;
							public "getColor-0d7_KjU"(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export class OnChangeStrokeJoin extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeStrokeJoin>;
							public static $stable: number;
							public hashCode(): number;
							public constructor(param0: string);
							public toString(): string;
							public copy(param0: string): ly.img.editor.base.ui.BlockEvent.OnChangeStrokeJoin;
							public equals(param0: any): boolean;
							public getJoin(): string;
							public component1(): string;
						}
						export class OnChangeStrokePosition extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeStrokePosition>;
							public static $stable: number;
							public getPosition(): string;
							public hashCode(): number;
							public constructor(param0: string);
							public toString(): string;
							public copy(param0: string): ly.img.editor.base.ui.BlockEvent.OnChangeStrokePosition;
							public equals(param0: any): boolean;
							public component1(): string;
						}
						export class OnChangeStrokeStyle extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeStrokeStyle>;
							public static $stable: number;
							public getStyle(): string;
							public hashCode(): number;
							public constructor(param0: string);
							public copy(param0: string): ly.img.editor.base.ui.BlockEvent.OnChangeStrokeStyle;
							public toString(): string;
							public equals(param0: any): boolean;
							public component1(): string;
						}
						export class OnChangeStrokeWidth extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeStrokeWidth>;
							public static $stable: number;
							public getWidth(): number;
							public component1(): number;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public copy(param0: number): ly.img.editor.base.ui.BlockEvent.OnChangeStrokeWidth;
							public constructor(param0: number);
						}
						export class OnChangeVerticalAlignment extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnChangeVerticalAlignment>;
							public static $stable: number;
							public getAlignment(): ly.img.editor.base.dock.options.format.VerticalAlignment;
							public component1(): ly.img.editor.base.dock.options.format.VerticalAlignment;
							public hashCode(): number;
							public constructor(param0: ly.img.editor.base.dock.options.format.VerticalAlignment);
							public toString(): string;
							public equals(param0: any): boolean;
							public copy(param0: ly.img.editor.base.dock.options.format.VerticalAlignment): ly.img.editor.base.ui.BlockEvent.OnChangeVerticalAlignment;
						}
						export class OnCropRotate extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnCropRotate>;
							public static $stable: number;
							public component1(): number;
							public getScaleRatio(): number;
							public hashCode(): number;
							public copy(param0: number): ly.img.editor.base.ui.BlockEvent.OnCropRotate;
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: number);
						}
						export class OnCropStraighten extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnCropStraighten>;
							public static $stable: number;
							public component1(): number;
							public constructor(param0: number, param1: number);
							public getScaleRatio(): number;
							public hashCode(): number;
							public component2(): number;
							public getAngle(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public copy(param0: number, param1: number): ly.img.editor.base.ui.BlockEvent.OnCropStraighten;
						}
						export class OnDelete extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnDelete>;
							public static INSTANCE: ly.img.editor.base.ui.BlockEvent.OnDelete;
							public static $stable: number;
						}
						export class OnDisableFill extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnDisableFill>;
							public static INSTANCE: ly.img.editor.base.ui.BlockEvent.OnDisableFill;
							public static $stable: number;
						}
						export class OnDisableStroke extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnDisableStroke>;
							public static INSTANCE: ly.img.editor.base.ui.BlockEvent.OnDisableStroke;
							public static $stable: number;
						}
						export class OnDuplicate extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnDuplicate>;
							public static INSTANCE: ly.img.editor.base.ui.BlockEvent.OnDuplicate;
							public static $stable: number;
						}
						export class OnEnableFill extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnEnableFill>;
							public static INSTANCE: ly.img.editor.base.ui.BlockEvent.OnEnableFill;
							public static $stable: number;
						}
						export class OnFlipCropHorizontal extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnFlipCropHorizontal>;
							public static INSTANCE: ly.img.editor.base.ui.BlockEvent.OnFlipCropHorizontal;
							public static $stable: number;
						}
						export class OnForward extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnForward>;
							public static INSTANCE: ly.img.editor.base.ui.BlockEvent.OnForward;
							public static $stable: number;
						}
						export class OnItalicToggle extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnItalicToggle>;
							public static INSTANCE: ly.img.editor.base.ui.BlockEvent.OnItalicToggle;
							public static $stable: number;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export class OnReplaceBlurEffect extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnReplaceBlurEffect>;
							public static $stable: number;
							public constructor(param0: number, param1: ly.img.engine.BlurType);
							public getEffect(): ly.img.engine.BlurType;
							public component1(): number;
							public copy(param0: number, param1: ly.img.engine.BlurType): ly.img.editor.base.ui.BlockEvent.OnReplaceBlurEffect;
							public hashCode(): number;
							public getDesignBlock(): number;
							public component2(): ly.img.engine.BlurType;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export class OnReplaceColorFilter extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnReplaceColorFilter>;
							public static $stable: number;
							public component1(): number;
							public hashCode(): number;
							public getDesignBlock(): number;
							public copy(param0: number, param1: ly.img.editor.core.library.data.AssetSourceType, param2: ly.img.engine.Asset): ly.img.editor.base.ui.BlockEvent.OnReplaceColorFilter;
							public component3(): ly.img.engine.Asset;
							public component2(): ly.img.editor.core.library.data.AssetSourceType;
							public getAsset(): ly.img.engine.Asset;
							public toString(): string;
							public constructor(param0: number, param1: ly.img.editor.core.library.data.AssetSourceType, param2: ly.img.engine.Asset);
							public equals(param0: any): boolean;
							public getAssetSourceType(): ly.img.editor.core.library.data.AssetSourceType;
						}
						export class OnReplaceFxEffect extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnReplaceFxEffect>;
							public static $stable: number;
							public component1(): number;
							public getEffect(): ly.img.engine.EffectType;
							public hashCode(): number;
							public getDesignBlock(): number;
							public component2(): ly.img.engine.EffectType;
							public toString(): string;
							public constructor(param0: number, param1: ly.img.engine.EffectType);
							public equals(param0: any): boolean;
							public copy(param0: number, param1: ly.img.engine.EffectType): ly.img.editor.base.ui.BlockEvent.OnReplaceFxEffect;
						}
						export class OnResetCrop extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.OnResetCrop>;
							public static INSTANCE: ly.img.editor.base.ui.BlockEvent.OnResetCrop;
							public static $stable: number;
						}
						export class ToBack extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.ToBack>;
							public static INSTANCE: ly.img.editor.base.ui.BlockEvent.ToBack;
							public static $stable: number;
						}
						export class ToFront extends ly.img.editor.base.ui.BlockEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockEvent.ToFront>;
							public static INSTANCE: ly.img.editor.base.ui.BlockEvent.ToFront;
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
			export module base {
				export module ui {
					export module BlockKt {
export module  {
						export class WhenMappings {
							public static class: java.lang.Class<ly.img.editor.base.ui.BlockKt.WhenMappings>;
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
			export module base {
				export module ui {
					export class EditorUiTabIconMappings {
						public static class: java.lang.Class<ly.img.editor.base.ui.EditorUiTabIconMappings>;
						public static $stable: number;
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
			export module base {
				export module ui {
					export abstract class EditorUiViewModel {
						public static class: java.lang.Class<ly.img.editor.base.ui.EditorUiViewModel>;
						public static $stable: number;
						public static DEFAULT_PAGE_INSET: number;
						public onEvent(param0: ly.img.editor.base.ui.Event): void;
						public getRootDockItems(param0: ly.img.editor.core.library.AssetLibrary): java.util.List<ly.img.editor.base.rootdock.RootDockItemData>;
						public getEngine(): ly.img.engine.Engine;
						public get_isSceneLoaded(): kotlinx.coroutines.flow.MutableStateFlow<java.lang.Boolean>;
						public handleBackPress(): boolean;
						public sendCloseEditorEvent(): void;
						public getInPortraitMode(): boolean;
						public setPage(param0: number): void;
						public onPreExport(param0: any): any;
						public hasUnsavedChanges(): boolean;
						public onCleared(): void;
						public isKeyboardShowing(): kotlinx.coroutines.flow.MutableStateFlow<java.lang.Boolean>;
						public send(param0: ly.img.editor.core.event.EditorEvent): void;
						public onEditModeChanged(param0: string): void;
						public getHistoryChangeTrigger(): kotlinx.coroutines.flow.MutableSharedFlow<any>;
						public get_uiState(): kotlinx.coroutines.flow.MutableStateFlow<ly.img.editor.base.ui.EditorUiViewState>;
						public constructor(param0: globalAndroid.net.Uri, param1: any<any,any,any,any>, param2: any<any,any,any,any>, param3: any<any,any,any,any,any>, param4: any<any,any,any,any,any>, param5: java.util.List<androidx.compose.ui.graphics.Color>, param6: boolean);
						public getPageIndex(): kotlinx.coroutines.flow.MutableStateFlow<java.lang.Integer>;
						public setSelectedBlock(param0: ly.img.editor.base.ui.Block): void;
						public getBottomSheetContent(): kotlinx.coroutines.flow.StateFlow<ly.img.editor.base.dock.BottomSheetContent>;
						public preEnterPreviewMode(): void;
						public onPostExport(param0: any): any;
						public getVerticalPageInset(): number;
						public getSelectedBlock(): java.lang.Integer;
						public isZoomedIn(): kotlinx.coroutines.flow.MutableStateFlow<java.lang.Boolean>;
						public getHorizontalPageInset(): number;
						public enterEditMode(): void;
						public getColorPalette(): java.util.List<androidx.compose.ui.graphics.Color>;
						public setCurrentInsets(param0: androidx.compose.ui.geometry.Rect): void;
						public getUiEvent(): kotlinx.coroutines.flow.Flow<ly.img.editor.base.ui.SingleEvent>;
						public enterPreviewMode(): void;
						public setInPortraitMode(param0: boolean): void;
						public getSelectedBlock(): kotlinx.coroutines.flow.MutableStateFlow<ly.img.editor.base.ui.Block>;
						public getCanvasActionMenuUiState(): kotlinx.coroutines.flow.StateFlow<ly.img.editor.base.components.actionmenu.CanvasActionMenuUiState>;
						public getExternalEvent(): kotlinx.coroutines.flow.Flow<ly.img.editor.core.event.EditorEvent>;
						public getBlockForEvents(): ly.img.editor.base.ui.Block;
						public onCanvasMove(param0: boolean): void;
						public getCurrentInsets(): androidx.compose.ui.geometry.Rect;
						public updateBottomSheetUiState(): void;
						public setBottomSheetContent(param0: any<any,any>): void;
						public setSettings(): void;
					}
					export module EditorUiViewModel {
						export class Companion {
							public static class: java.lang.Class<ly.img.editor.base.ui.EditorUiViewModel.Companion>;
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
			export module base {
				export module ui {
					export class EditorUiViewState {
						public static class: java.lang.Class<ly.img.editor.base.ui.EditorUiViewState>;
						public static $stable: number;
						public isLoading(): boolean;
						public component9(): ly.img.editor.compose.bottomsheet.ModalBottomSheetState;
						public isCanvasVisible(): boolean;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public isInPreviewMode(): boolean;
						public isRedoEnabled(): boolean;
						public component10(): number;
						public isEditingText(): boolean;
						public component1(): boolean;
						public getPageCount(): number;
						public component4(): boolean;
						public copy(param0: boolean, param1: boolean, param2: boolean, param3: boolean, param4: boolean, param5: ly.img.editor.base.ui.Block, param6: boolean, param7: boolean, param8: ly.img.editor.compose.bottomsheet.ModalBottomSheetState, param9: number, param10: java.util.List<ly.img.editor.base.rootdock.RootDockItemData>): ly.img.editor.base.ui.EditorUiViewState;
						public component3(): boolean;
						public component5(): boolean;
						public constructor();
						public component2(): boolean;
						public getAllowEditorInteraction(): boolean;
						public constructor(param0: boolean, param1: boolean, param2: boolean, param3: boolean, param4: boolean, param5: ly.img.editor.base.ui.Block, param6: boolean, param7: boolean, param8: ly.img.editor.compose.bottomsheet.ModalBottomSheetState, param9: number, param10: java.util.List<ly.img.editor.base.rootdock.RootDockItemData>);
						public getSelectedBlock(): ly.img.editor.base.ui.Block;
						public isUndoEnabled(): boolean;
						public toString(): string;
						public getBottomSheetState(): ly.img.editor.compose.bottomsheet.ModalBottomSheetState;
						public component6(): ly.img.editor.base.ui.Block;
						public component8(): boolean;
						public getRootDockItems(): java.util.List<ly.img.editor.base.rootdock.RootDockItemData>;
						public component7(): boolean;
						public component11(): java.util.List<ly.img.editor.base.rootdock.RootDockItemData>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module base {
				export module ui {
					export class Event {
						public static class: java.lang.Class<ly.img.editor.base.ui.Event>;
						/**
						 * Constructs a new instance of the ly.img.editor.base.ui.Event interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export module Event {
						export class EnableHistory extends ly.img.editor.base.ui.Event {
							public static class: java.lang.Class<ly.img.editor.base.ui.Event.EnableHistory>;
							public static $stable: number;
							public getEnable(): boolean;
							public component1(): boolean;
							public hashCode(): number;
							public constructor(param0: boolean);
							public toString(): string;
							public copy(param0: boolean): ly.img.editor.base.ui.Event.EnableHistory;
							public equals(param0: any): boolean;
						}
						export class OnAddLibraryCategoryClick extends ly.img.editor.base.ui.Event {
							public static class: java.lang.Class<ly.img.editor.base.ui.Event.OnAddLibraryCategoryClick>;
							public static $stable: number;
							public constructor(param0: ly.img.editor.core.library.LibraryCategory);
							public copy(param0: ly.img.editor.core.library.LibraryCategory): ly.img.editor.base.ui.Event.OnAddLibraryCategoryClick;
							public component1(): ly.img.editor.core.library.LibraryCategory;
							public hashCode(): number;
							public toString(): string;
							public getLibraryCategory(): ly.img.editor.core.library.LibraryCategory;
							public equals(param0: any): boolean;
						}
						export class OnAddLibraryClick extends ly.img.editor.base.ui.Event {
							public static class: java.lang.Class<ly.img.editor.base.ui.Event.OnAddLibraryClick>;
							public static INSTANCE: ly.img.editor.base.ui.Event.OnAddLibraryClick;
							public static $stable: number;
						}
						export class OnBack extends ly.img.editor.base.ui.Event {
							public static class: java.lang.Class<ly.img.editor.base.ui.Event.OnBack>;
							public static INSTANCE: ly.img.editor.base.ui.Event.OnBack;
							public static $stable: number;
						}
						export class OnBackPress extends ly.img.editor.base.ui.Event {
							public static class: java.lang.Class<ly.img.editor.base.ui.Event.OnBackPress>;
							public static INSTANCE: ly.img.editor.base.ui.Event.OnBackPress;
							public static $stable: number;
						}
						export class OnBottomSheetHeightChange extends ly.img.editor.base.ui.Event {
							public static class: java.lang.Class<ly.img.editor.base.ui.Event.OnBottomSheetHeightChange>;
							public static $stable: number;
							public getHeightInDp(): number;
							public component1(): number;
							public hashCode(): number;
							public toString(): string;
							public copy(param0: number): ly.img.editor.base.ui.Event.OnBottomSheetHeightChange;
							public equals(param0: any): boolean;
							public constructor(param0: number);
						}
						export class OnCanvasMove extends ly.img.editor.base.ui.Event {
							public static class: java.lang.Class<ly.img.editor.base.ui.Event.OnCanvasMove>;
							public static $stable: number;
							public copy(param0: boolean): ly.img.editor.base.ui.Event.OnCanvasMove;
							public component1(): boolean;
							public hashCode(): number;
							public constructor(param0: boolean);
							public toString(): string;
							public equals(param0: any): boolean;
							public getMove(): boolean;
						}
						export class OnCanvasTouch extends ly.img.editor.base.ui.Event {
							public static class: java.lang.Class<ly.img.editor.base.ui.Event.OnCanvasTouch>;
							public static INSTANCE: ly.img.editor.base.ui.Event.OnCanvasTouch;
							public static $stable: number;
						}
						export class OnCloseDock extends ly.img.editor.base.ui.Event {
							public static class: java.lang.Class<ly.img.editor.base.ui.Event.OnCloseDock>;
							public static INSTANCE: ly.img.editor.base.ui.Event.OnCloseDock;
							public static $stable: number;
						}
						export class OnError extends ly.img.editor.base.ui.Event {
							public static class: java.lang.Class<ly.img.editor.base.ui.Event.OnError>;
							public static $stable: number;
							public hashCode(): number;
							public constructor(param0: java.lang.Throwable);
							public copy(param0: java.lang.Throwable): ly.img.editor.base.ui.Event.OnError;
							public toString(): string;
							public getThrowable(): java.lang.Throwable;
							public equals(param0: any): boolean;
							public component1(): java.lang.Throwable;
						}
						export class OnExpandSheet extends ly.img.editor.base.ui.Event {
							public static class: java.lang.Class<ly.img.editor.base.ui.Event.OnExpandSheet>;
							public static INSTANCE: ly.img.editor.base.ui.Event.OnExpandSheet;
							public static $stable: number;
						}
						export class OnExportClick extends ly.img.editor.base.ui.Event {
							public static class: java.lang.Class<ly.img.editor.base.ui.Event.OnExportClick>;
							public static INSTANCE: ly.img.editor.base.ui.Event.OnExportClick;
							public static $stable: number;
						}
						export class OnHideScrimSheet extends ly.img.editor.base.ui.Event {
							public static class: java.lang.Class<ly.img.editor.base.ui.Event.OnHideScrimSheet>;
							public static INSTANCE: ly.img.editor.base.ui.Event.OnHideScrimSheet;
							public static $stable: number;
						}
						export class OnHideSheet extends ly.img.editor.base.ui.Event {
							public static class: java.lang.Class<ly.img.editor.base.ui.Event.OnHideSheet>;
							public static INSTANCE: ly.img.editor.base.ui.Event.OnHideSheet;
							public static $stable: number;
						}
						export class OnKeyboardClose extends ly.img.editor.base.ui.Event {
							public static class: java.lang.Class<ly.img.editor.base.ui.Event.OnKeyboardClose>;
							public static INSTANCE: ly.img.editor.base.ui.Event.OnKeyboardClose;
							public static $stable: number;
						}
						export class OnKeyboardHeightChange extends ly.img.editor.base.ui.Event {
							public static class: java.lang.Class<ly.img.editor.base.ui.Event.OnKeyboardHeightChange>;
							public static $stable: number;
							public getHeightInDp(): number;
							public component1(): number;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public copy(param0: number): ly.img.editor.base.ui.Event.OnKeyboardHeightChange;
							public constructor(param0: number);
						}
						export class OnLoadScene extends ly.img.editor.base.ui.Event {
							public static class: java.lang.Class<ly.img.editor.base.ui.Event.OnLoadScene>;
							public static $stable: number;
							public getHeight(): number;
							public component3(): boolean;
							public component1(): number;
							public hashCode(): number;
							public getInPortraitMode(): boolean;
							public copy(param0: number, param1: androidx.compose.ui.geometry.Rect, param2: boolean): ly.img.editor.base.ui.Event.OnLoadScene;
							public toString(): string;
							public component2(): androidx.compose.ui.geometry.Rect;
							public equals(param0: any): boolean;
							public constructor(param0: number, param1: androidx.compose.ui.geometry.Rect, param2: boolean);
							public getInsets(): androidx.compose.ui.geometry.Rect;
						}
						export class OnNextPage extends ly.img.editor.base.ui.Event {
							public static class: java.lang.Class<ly.img.editor.base.ui.Event.OnNextPage>;
							public static INSTANCE: ly.img.editor.base.ui.Event.OnNextPage;
							public static $stable: number;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export class OnOptionClick extends ly.img.editor.base.ui.Event {
							public static class: java.lang.Class<ly.img.editor.base.ui.Event.OnOptionClick>;
							public static $stable: number;
							public getOptionType(): ly.img.editor.base.dock.OptionType;
							public component1(): ly.img.editor.base.dock.OptionType;
							public copy(param0: ly.img.editor.base.dock.OptionType): ly.img.editor.base.ui.Event.OnOptionClick;
							public hashCode(): number;
							public constructor(param0: ly.img.editor.base.dock.OptionType);
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export class OnPreviousPage extends ly.img.editor.base.ui.Event {
							public static class: java.lang.Class<ly.img.editor.base.ui.Event.OnPreviousPage>;
							public static INSTANCE: ly.img.editor.base.ui.Event.OnPreviousPage;
							public static $stable: number;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export class OnRedoClick extends ly.img.editor.base.ui.Event {
							public static class: java.lang.Class<ly.img.editor.base.ui.Event.OnRedoClick>;
							public static INSTANCE: ly.img.editor.base.ui.Event.OnRedoClick;
							public static $stable: number;
						}
						export class OnTogglePreviewMode extends ly.img.editor.base.ui.Event {
							public static class: java.lang.Class<ly.img.editor.base.ui.Event.OnTogglePreviewMode>;
							public static $stable: number;
							public component1(): boolean;
							public hashCode(): number;
							public constructor(param0: boolean);
							public copy(param0: boolean): ly.img.editor.base.ui.Event.OnTogglePreviewMode;
							public isChecked(): boolean;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export class OnUndoClick extends ly.img.editor.base.ui.Event {
							public static class: java.lang.Class<ly.img.editor.base.ui.Event.OnUndoClick>;
							public static INSTANCE: ly.img.editor.base.ui.Event.OnUndoClick;
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
			export module base {
				export module ui {
					export class SingleEvent {
						public static class: java.lang.Class<ly.img.editor.base.ui.SingleEvent>;
						/**
						 * Constructs a new instance of the ly.img.editor.base.ui.SingleEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export module SingleEvent {
						export class ChangeSheetState extends ly.img.editor.base.ui.SingleEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.SingleEvent.ChangeSheetState>;
							public static $stable: number;
							public copy(param0: ly.img.editor.compose.bottomsheet.ModalBottomSheetValue, param1: boolean): ly.img.editor.base.ui.SingleEvent.ChangeSheetState;
							public hashCode(): number;
							public component2(): boolean;
							public toString(): string;
							public getAnimate(): boolean;
							public equals(param0: any): boolean;
							public constructor(param0: ly.img.editor.compose.bottomsheet.ModalBottomSheetValue, param1: boolean);
							public getState(): ly.img.editor.compose.bottomsheet.ModalBottomSheetValue;
							public component1(): ly.img.editor.compose.bottomsheet.ModalBottomSheetValue;
						}
						export class Exit extends ly.img.editor.base.ui.SingleEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.SingleEvent.Exit>;
							public static INSTANCE: ly.img.editor.base.ui.SingleEvent.Exit;
							public static $stable: number;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export class HideScrimSheet extends ly.img.editor.base.ui.SingleEvent {
							public static class: java.lang.Class<ly.img.editor.base.ui.SingleEvent.HideScrimSheet>;
							public static INSTANCE: ly.img.editor.base.ui.SingleEvent.HideScrimSheet;
							public static $stable: number;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

//Generics information:

