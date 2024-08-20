/// <reference path="android-declarations.d.ts"/>

declare module ly {
	export module img {
		export module editor {
			export class DismissCloseConfirmationDialogEvent {
				public static class: java.lang.Class<ly.img.editor.DismissCloseConfirmationDialogEvent>;
				public static INSTANCE: ly.img.editor.DismissCloseConfirmationDialogEvent;
				public static $stable: number;
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export class EditorBuildConfig {
				public static class: java.lang.Class<ly.img.editor.EditorBuildConfig>;
				public static INSTANCE: ly.img.editor.EditorBuildConfig;
				public static VERSION: string;
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export class EditorConfiguration<STATE>  extends java.lang.Object {
				public static class: java.lang.Class<ly.img.editor.EditorConfiguration<any>>;
				public static $stable: number;
				public getOnEvent(): any<globalAndroid.app.Activity,STATE,ly.img.editor.core.event.EditorEvent,STATE>;
				public getInitialState(): STATE;
				public getNavigationIcon(): androidx.compose.ui.graphics.vector.ImageVector;
				public getAssetLibrary(): ly.img.editor.core.library.AssetLibrary;
				public getUiMode(): ly.img.editor.EditorUiMode;
				public constructor(param0: STATE, param1: ly.img.editor.EditorUiMode, param2: androidx.compose.ui.graphics.vector.ImageVector, param3: ly.img.editor.core.library.AssetLibrary, param4: java.util.List<androidx.compose.ui.graphics.Color>, param5: any<any,any,any,any>, param6: any<any,any,any,any,any>);
				public getColorPalette(): java.util.List<androidx.compose.ui.graphics.Color>;
				public getOverlay(): any<STATE,ly.img.editor.core.event.EditorEventHandler,androidx.compose.runtime.Composer,java.lang.Integer,any>;
			}
			export module EditorConfiguration {
				export class Companion {
					public static class: java.lang.Class<ly.img.editor.EditorConfiguration.Companion>;
					public getDefault(param0: ly.img.editor.EditorUiMode, param1: androidx.compose.ui.graphics.vector.ImageVector, param2: ly.img.editor.core.library.AssetLibrary, param3: java.util.List<androidx.compose.ui.graphics.Color>): ly.img.editor.EditorConfiguration<ly.img.editor.EditorUiState>;
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export class EditorDefaults {
				public static class: java.lang.Class<ly.img.editor.EditorDefaults>;
				public static INSTANCE: ly.img.editor.EditorDefaults;
				public static $stable: number;
				public onEvent(param0: globalAndroid.app.Activity, param1: ly.img.editor.EditorUiState, param2: ly.img.editor.core.event.EditorEvent): ly.img.editor.EditorUiState;
				public writeToTempFile(param0: java.nio.ByteBuffer, param1: ly.img.engine.MimeType, param2: any): any;
				public Loading(param0: androidx.compose.runtime.Composer, param1: number): void;
				public ErrorDialog(param0: ly.img.engine.EngineException, param1: ly.img.editor.core.event.EditorEventHandler, param2: androidx.compose.runtime.Composer, param3: number): void;
				public onCreate(param0: ly.img.engine.Engine, param1: globalAndroid.net.Uri, param2: ly.img.editor.core.event.EditorEventHandler, param3: any): any;
				public onCreateFromImage(param0: ly.img.engine.Engine, param1: globalAndroid.net.Uri, param2: ly.img.editor.core.event.EditorEventHandler, param3: any, param4: any): any;
				public shareFile(param0: globalAndroid.app.Activity, param1: java.io.File, param2: string): void;
				public shareUri(param0: globalAndroid.app.Activity, param1: globalAndroid.net.Uri, param2: string): void;
				public NoInternetDialog(param0: ly.img.editor.core.event.EditorEventHandler, param1: androidx.compose.runtime.Composer, param2: number): void;
				public Overlay(param0: ly.img.editor.EditorUiState, param1: ly.img.editor.core.event.EditorEventHandler, param2: androidx.compose.runtime.Composer, param3: number): void;
				public CloseConfirmationDialog(param0: ly.img.editor.core.event.EditorEventHandler, param1: androidx.compose.runtime.Composer, param2: number): void;
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export class EditorUiMode {
				public static class: java.lang.Class<ly.img.editor.EditorUiMode>;
				public static SYSTEM: ly.img.editor.EditorUiMode;
				public static LIGHT: ly.img.editor.EditorUiMode;
				public static DARK: ly.img.editor.EditorUiMode;
				public static getEntries(): any;
				public static values(): androidNative.Array<ly.img.editor.EditorUiMode>;
				public static valueOf(param0: string): ly.img.editor.EditorUiMode;
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export class EditorUiState {
				public static class: java.lang.Class<ly.img.editor.EditorUiState>;
				public static $stable: number;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public component2(): boolean;
				public constructor(param0: boolean, param1: boolean, param2: java.lang.Throwable);
				public getShowLoading(): boolean;
				public getShowCloseConfirmationDialog(): boolean;
				public component1(): boolean;
				public component3(): java.lang.Throwable;
				public toString(): string;
				public constructor(param0: globalAndroid.os.Parcel);
				public constructor();
				public getError(): java.lang.Throwable;
				public hashCode(): number;
				public describeContents(): number;
				public equals(param0: any): boolean;
				public copy(param0: boolean, param1: boolean, param2: java.lang.Throwable): ly.img.editor.EditorUiState;
			}
			export module EditorUiState {
				export class CREATOR extends globalAndroid.os.Parcelable.Creator<ly.img.editor.EditorUiState> {
					public static class: java.lang.Class<ly.img.editor.EditorUiState.CREATOR>;
					public createFromParcel(param0: globalAndroid.os.Parcel): ly.img.editor.EditorUiState;
					public newArray(param0: number): androidNative.Array<ly.img.editor.EditorUiState>;
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export class EngineConfiguration {
				public static class: java.lang.Class<ly.img.editor.EngineConfiguration>;
				public static $stable: number;
				public getOnClose(): any<ly.img.engine.Engine,java.lang.Boolean,ly.img.editor.core.event.EditorEventHandler,any,any>;
				public getOnExport(): any<ly.img.engine.Engine,ly.img.editor.core.event.EditorEventHandler,any,any>;
				public getOnUpload(): any<ly.img.engine.AssetDefinition,ly.img.engine.Engine,ly.img.editor.core.event.EditorEventHandler,ly.img.editor.core.library.data.UploadAssetSourceType,any,any>;
				public getOnError(): any<java.lang.Throwable,ly.img.engine.Engine,ly.img.editor.core.event.EditorEventHandler,any,any>;
				public getLicense(): string;
				public getOnCreate(): any<ly.img.engine.Engine,ly.img.editor.core.event.EditorEventHandler,any,any>;
				public getRenderTarget(): ly.img.editor.core.engine.EngineRenderTarget;
				public getUserId(): string;
				public getBaseUri(): globalAndroid.net.Uri;
				public constructor(param0: string, param1: string, param2: globalAndroid.net.Uri, param3: ly.img.editor.core.engine.EngineRenderTarget, param4: any<any,any,any,any>, param5: any<any,any,any,any>, param6: any<any,any,any,any,any,any>, param7: any<any,any,any,any,any>, param8: any<any,any,any,any,any>);
			}
			export module EngineConfiguration {
				export class Companion {
					public static class: java.lang.Class<ly.img.editor.EngineConfiguration.Companion>;
					public getDefaultApparelSceneUri(): globalAndroid.net.Uri;
					public getForDesign(param0: string, param1: string, param2: globalAndroid.net.Uri, param3: globalAndroid.net.Uri, param4: ly.img.editor.core.engine.EngineRenderTarget): ly.img.editor.EngineConfiguration;
					public getDefaultBaseUri(): globalAndroid.net.Uri;
					public getForApparel(param0: string, param1: string, param2: globalAndroid.net.Uri, param3: globalAndroid.net.Uri, param4: ly.img.editor.core.engine.EngineRenderTarget): ly.img.editor.EngineConfiguration;
					public getDefaultPostcardSceneUri(): globalAndroid.net.Uri;
					public getForPhoto(param0: string, param1: globalAndroid.net.Uri, param2: any, param3: string, param4: globalAndroid.net.Uri, param5: ly.img.editor.core.engine.EngineRenderTarget): ly.img.editor.EngineConfiguration;
					public getDefaultDesignSceneUri(): globalAndroid.net.Uri;
					public getForPostcard(param0: string, param1: string, param2: globalAndroid.net.Uri, param3: globalAndroid.net.Uri, param4: ly.img.editor.core.engine.EngineRenderTarget): ly.img.editor.EngineConfiguration;
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export class HideErrorDialogEvent {
				public static class: java.lang.Class<ly.img.editor.HideErrorDialogEvent>;
				public static INSTANCE: ly.img.editor.HideErrorDialogEvent;
				public static $stable: number;
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export class HideLoading {
				public static class: java.lang.Class<ly.img.editor.HideLoading>;
				public static INSTANCE: ly.img.editor.HideLoading;
				public static $stable: number;
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export class ShareFileEvent {
				public static class: java.lang.Class<ly.img.editor.ShareFileEvent>;
				public static $stable: number;
				public getMimeType(): string;
				public constructor(param0: java.io.File, param1: string);
				public getFile(): java.io.File;
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export class ShowCloseConfirmationDialogEvent {
				public static class: java.lang.Class<ly.img.editor.ShowCloseConfirmationDialogEvent>;
				public static INSTANCE: ly.img.editor.ShowCloseConfirmationDialogEvent;
				public static $stable: number;
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export class ShowErrorDialogEvent {
				public static class: java.lang.Class<ly.img.editor.ShowErrorDialogEvent>;
				public static $stable: number;
				public getError(): java.lang.Throwable;
				public constructor(param0: java.lang.Throwable);
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export class ShowLoading {
				public static class: java.lang.Class<ly.img.editor.ShowLoading>;
				public static INSTANCE: ly.img.editor.ShowLoading;
				public static $stable: number;
			}
		}
	}
}

//Generics information:
//ly.img.editor.EditorConfiguration:1

