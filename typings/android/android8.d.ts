/// <reference path="android-declarations.d.ts"/>

declare module ly {
	export module img {
		export module editor {
			export module apparel {
				export class ApparelUiViewModel {
					public static class: java.lang.Class<ly.img.editor.apparel.ApparelUiViewModel>;
					public static $stable: number;
					public onPostExport(param0: any): any;
					public onPreExport(param0: any): any;
					public onCanvasMove(param0: boolean): void;
					public enterEditMode(): void;
					public enterPreviewMode(): void;
					public constructor(param0: globalAndroid.net.Uri, param1: any<any,any,any,any>, param2: any<any,any,any,any>, param3: any<any,any,any,any,any>, param4: any<any,any,any,any,any>, param5: java.util.List<androidx.compose.ui.graphics.Color>);
					public getUiState(): kotlinx.coroutines.flow.StateFlow<ly.img.editor.base.ui.EditorUiViewState>;
				}
			}
		}
	}
}

//Generics information:

