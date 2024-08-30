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
				public static VERSION: string = "1.33.0";
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
				public constructor(initialState: STATE, uiMode: ly.img.editor.EditorUiMode, navigationIcon: androidx.compose.ui.graphics.vector.ImageVector, assetLibrary: ly.img.editor.core.library.AssetLibrary, colorPalette: java.util.List<androidx.compose.ui.graphics.Color>, onEvent: any<any,any,any,any>, overlay: any<any,any,any,any,any>);
				public getOnEvent(): any<globalAndroid.app.Activity,STATE,ly.img.editor.core.event.EditorEvent,STATE>;
				public getInitialState(): STATE;
				public getNavigationIcon(): androidx.compose.ui.graphics.vector.ImageVector;
				public getAssetLibrary(): ly.img.editor.core.library.AssetLibrary;
				public getUiMode(): ly.img.editor.EditorUiMode;
				public getColorPalette(): java.util.List<androidx.compose.ui.graphics.Color>;
				public getOverlay(): any<STATE,ly.img.editor.core.event.EditorEventHandler,androidx.compose.runtime.Composer,java.lang.Integer,any>;
			}
			export module EditorConfiguration {
				export class Companion {
					public static class: java.lang.Class<ly.img.editor.EditorConfiguration.Companion>;
					public getDefault(uiMode: ly.img.editor.EditorUiMode, navigationIcon: androidx.compose.ui.graphics.vector.ImageVector, assetLibrary: ly.img.editor.core.library.AssetLibrary, colorPalette: java.util.List<androidx.compose.ui.graphics.Color>): ly.img.editor.EditorConfiguration<ly.img.editor.EditorUiState>;
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
				public Loading($composer: androidx.compose.runtime.Composer, $changed: number): void;
				public writeToTempFile(mimeType: java.nio.ByteBuffer, $continuation: ly.img.engine.MimeType, $result: any): any;
				public onCreate(engine: ly.img.engine.Engine, sceneUri: globalAndroid.net.Uri, eventHandler: ly.img.editor.core.event.EditorEventHandler, $completion: any): any;
				public onCreateFromImage(engine: ly.img.engine.Engine, imageUri: globalAndroid.net.Uri, eventHandler: ly.img.editor.core.event.EditorEventHandler, size: any, $completion: any): any;
				public onEvent(activity: globalAndroid.app.Activity, state: ly.img.editor.EditorUiState, event: ly.img.editor.core.event.EditorEvent): ly.img.editor.EditorUiState;
				public shareFile(this_: globalAndroid.app.Activity, activity: java.io.File, file: string): void;
				public shareUri($this$shareUri_u24lambda_u240: globalAndroid.app.Activity, shareIntent: globalAndroid.net.Uri, this_: string): void;
				public CloseConfirmationDialog(eventHandler: ly.img.editor.core.event.EditorEventHandler, $composer: androidx.compose.runtime.Composer, $changed: number): void;
				public Overlay(this_: ly.img.editor.EditorUiState, state: ly.img.editor.core.event.EditorEventHandler, eventHandler: androidx.compose.runtime.Composer, $composer: number): void;
				public NoInternetDialog(eventHandler: ly.img.editor.core.event.EditorEventHandler, $composer: androidx.compose.runtime.Composer, $changed: number): void;
				public ErrorDialog(engineException: ly.img.engine.EngineException, eventHandler: ly.img.editor.core.event.EditorEventHandler, $composer: androidx.compose.runtime.Composer, $changed: number): void;
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
				public static valueOf(value: string): ly.img.editor.EditorUiMode;
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
				public constructor(showLoading: boolean, showCloseConfirmationDialog: boolean, error: java.lang.Throwable);
				public component2(): boolean;
				public getShowLoading(): boolean;
				public getShowCloseConfirmationDialog(): boolean;
				public component1(): boolean;
				public component3(): java.lang.Throwable;
				public toString(): string;
				public constructor();
				public writeToParcel(parcel: globalAndroid.os.Parcel, flags: number): void;
				public equals(other: any): boolean;
				public getError(): java.lang.Throwable;
				public hashCode(): number;
				public describeContents(): number;
				public copy(showLoading: boolean, showCloseConfirmationDialog: boolean, error: java.lang.Throwable): ly.img.editor.EditorUiState;
				public constructor(parcel: globalAndroid.os.Parcel);
			}
			export module EditorUiState {
				export class CREATOR extends globalAndroid.os.Parcelable.Creator<ly.img.editor.EditorUiState> {
					public static class: java.lang.Class<ly.img.editor.EditorUiState.CREATOR>;
					public newArray(size: number): androidNative.Array<ly.img.editor.EditorUiState>;
					public createFromParcel(parcel: globalAndroid.os.Parcel): ly.img.editor.EditorUiState;
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
				public constructor(license: string, userId: string, baseUri: globalAndroid.net.Uri, renderTarget: ly.img.editor.core.engine.EngineRenderTarget, onCreate: any<any,any,any,any>, onExport: any<any,any,any,any>, onUpload: any<any,any,any,any,any,any>, onClose: any<any,any,any,any,any>, onError: any<any,any,any,any,any>);
				public getOnError(): any<java.lang.Throwable,ly.img.engine.Engine,ly.img.editor.core.event.EditorEventHandler,any,any>;
				public getLicense(): string;
				public getOnCreate(): any<ly.img.engine.Engine,ly.img.editor.core.event.EditorEventHandler,any,any>;
				public getRenderTarget(): ly.img.editor.core.engine.EngineRenderTarget;
				public getUserId(): string;
				public getBaseUri(): globalAndroid.net.Uri;
			}
			export module EngineConfiguration {
				export class Companion {
					public static class: java.lang.Class<ly.img.editor.EngineConfiguration.Companion>;
					public getDefaultApparelSceneUri(): globalAndroid.net.Uri;
					public getForDesign(license: string, userId: string, baseUri: globalAndroid.net.Uri, sceneUri: globalAndroid.net.Uri, renderTarget: ly.img.editor.core.engine.EngineRenderTarget): ly.img.editor.EngineConfiguration;
					public getDefaultBaseUri(): globalAndroid.net.Uri;
					public getDefaultPostcardSceneUri(): globalAndroid.net.Uri;
					public getForApparel(license: string, userId: string, baseUri: globalAndroid.net.Uri, sceneUri: globalAndroid.net.Uri, renderTarget: ly.img.editor.core.engine.EngineRenderTarget): ly.img.editor.EngineConfiguration;
					public getDefaultDesignSceneUri(): globalAndroid.net.Uri;
					public getForPhoto(license: string, imageUri: globalAndroid.net.Uri, imageSize: any, userId: string, baseUri: globalAndroid.net.Uri, renderTarget: ly.img.editor.core.engine.EngineRenderTarget): ly.img.editor.EngineConfiguration;
					public getForPostcard(license: string, userId: string, baseUri: globalAndroid.net.Uri, sceneUri: globalAndroid.net.Uri, renderTarget: ly.img.editor.core.engine.EngineRenderTarget): ly.img.editor.EngineConfiguration;
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
				public constructor(file: java.io.File, mimeType: string);
				public getMimeType(): string;
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
				public constructor(error: java.lang.Throwable);
				public getError(): java.lang.Throwable;
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

