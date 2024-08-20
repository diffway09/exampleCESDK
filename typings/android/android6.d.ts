/// <reference path="android-declarations.d.ts"/>

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation {
					export class AnimatedContentMeasurePolicy {
						public static class: java.lang.Class<ly.img.editor.compose.animation.AnimatedContentMeasurePolicy>;
						public maxIntrinsicWidth(param0: androidx.compose.ui.layout.IntrinsicMeasureScope, param1: java.util.List<any>, param2: number): number;
						public minIntrinsicWidth(param0: androidx.compose.ui.layout.IntrinsicMeasureScope, param1: java.util.List<any>, param2: number): number;
						public minIntrinsicHeight(param0: androidx.compose.ui.layout.IntrinsicMeasureScope, param1: java.util.List<any>, param2: number): number;
						public maxIntrinsicHeight(param0: androidx.compose.ui.layout.IntrinsicMeasureScope, param1: java.util.List<any>, param2: number): number;
						public constructor(param0: ly.img.editor.compose.animation.AnimatedContentScope<any>);
						public getRootScope(): ly.img.editor.compose.animation.AnimatedContentScope<any>;
						public "measure-3p2s80s"(param0: androidx.compose.ui.layout.MeasureScope, param1: java.util.List<any>, param2: number): androidx.compose.ui.layout.MeasureResult;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation {
					export class AnimatedContentScope<S>  extends ly.img.editor.compose.animation_core.Transition.Segment<any> {
						public static class: java.lang.Class<ly.img.editor.compose.animation.AnimatedContentScope<any>>;
						public static $stable: number;
						public "getMeasuredSize-YbymL2g$editor_experimental_release"(): number;
						public setContentAlignment$editor_experimental_release(param0: androidx.compose.ui.Alignment): void;
						public setAnimatedSize$editor_experimental_release(param0: androidx.compose.runtime.State<androidx.compose.ui.unit.IntSize>): void;
						public getTransition$editor_experimental_release(): ly.img.editor.compose.animation_core.Transition<any>;
						public "setMeasuredSize-ozmzZPI$editor_experimental_release"(param0: number): void;
						public "slideOutOfContainer-9XILnWY"(param0: number, param1: ly.img.editor.compose.animation_core.FiniteAnimationSpec<androidx.compose.ui.unit.IntOffset>, param2: any<any,java.lang.Integer>): ly.img.editor.compose.animation_core.ExitTransition;
						public constructor(param0: ly.img.editor.compose.animation_core.Transition<any>, param1: androidx.compose.ui.Alignment, param2: androidx.compose.ui.unit.LayoutDirection);
						public getLayoutDirection$editor_experimental_release(): androidx.compose.ui.unit.LayoutDirection;
						public getTargetState(): any;
						public getInitialState(): any;
						public getContentAlignment$editor_experimental_release(): androidx.compose.ui.Alignment;
						public using(param0: ly.img.editor.compose.animation.ContentTransform, param1: ly.img.editor.compose.animation.SizeTransform): ly.img.editor.compose.animation.ContentTransform;
						public getAnimatedSize$editor_experimental_release(): androidx.compose.runtime.State<androidx.compose.ui.unit.IntSize>;
						public isTransitioningTo(param0: any, param1: any): boolean;
						public "slideIntoContainer-9XILnWY"(param0: number, param1: ly.img.editor.compose.animation_core.FiniteAnimationSpec<androidx.compose.ui.unit.IntOffset>, param2: any<any,java.lang.Integer>): ly.img.editor.compose.animation_core.EnterTransition;
						public createSizeAnimationModifier$editor_experimental_release(param0: ly.img.editor.compose.animation.ContentTransform, param1: androidx.compose.runtime.Composer, param2: number): androidx.compose.ui.Modifier;
						public setLayoutDirection$editor_experimental_release(param0: androidx.compose.ui.unit.LayoutDirection): void;
						public getTargetSizeMap$editor_experimental_release(): java.util.Map<any,androidx.compose.runtime.State<androidx.compose.ui.unit.IntSize>>;
					}
					export module AnimatedContentScope {
						export class ChildData {
							public static class: java.lang.Class<ly.img.editor.compose.animation.AnimatedContentScope.ChildData>;
							public setTarget(param0: boolean): void;
							public copy(param0: boolean): ly.img.editor.compose.animation.AnimatedContentScope.ChildData;
							public component1(): boolean;
							public hashCode(): number;
							public isTarget(): boolean;
							public constructor(param0: boolean);
							public modifyParentData(param0: androidx.compose.ui.unit.Density, param1: any): any;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export class SizeModifier extends ly.img.editor.compose.animation_core.LayoutModifierWithPassThroughIntrinsics {
							public static class: java.lang.Class<ly.img.editor.compose.animation.AnimatedContentScope.SizeModifier>;
							public constructor();
							public constructor(param0: ly.img.editor.compose.animation_core.Transition.DeferredAnimation<androidx.compose.ui.unit.IntSize,ly.img.editor.compose.animation_core.AnimationVector2D>, param1: androidx.compose.runtime.State<any>);
							public getSizeTransform(): androidx.compose.runtime.State<ly.img.editor.compose.animation.SizeTransform>;
							public "measure-3p2s80s"(param0: androidx.compose.ui.layout.MeasureScope, param1: androidx.compose.ui.layout.Measurable, param2: number): androidx.compose.ui.layout.MeasureResult;
							public getSizeAnimation(): ly.img.editor.compose.animation_core.Transition.DeferredAnimation<androidx.compose.ui.unit.IntSize,ly.img.editor.compose.animation_core.AnimationVector2D>;
						}
						export class SlideDirection {
							public static class: java.lang.Class<ly.img.editor.compose.animation.AnimatedContentScope.SlideDirection>;
							public static "equals-impl0"(param0: number, param1: number): boolean;
							public hashCode(): number;
							public static "equals-impl"(param0: number, param1: any): boolean;
							public static "toString-impl"(param0: number): string;
							public toString(): string;
							public equals(param0: any): boolean;
							public static "hashCode-impl"(param0: number): number;
							public static "constructor-impl"(param0: number): number;
						}
						export module SlideDirection {
							export class Companion {
								public static class: java.lang.Class<ly.img.editor.compose.animation.AnimatedContentScope.SlideDirection.Companion>;
								public "getRight-BjeOiU8"(): number;
								public "getUp-BjeOiU8"(): number;
								public "getLeft-BjeOiU8"(): number;
								public "getStart-BjeOiU8"(): number;
								public "getEnd-BjeOiU8"(): number;
								public "getDown-BjeOiU8"(): number;
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
			export module compose {
				export module animation {
					export class AnimatedEnterExitMeasurePolicy {
						public static class: java.lang.Class<ly.img.editor.compose.animation.AnimatedEnterExitMeasurePolicy>;
						public constructor(param0: ly.img.editor.compose.animation.AnimatedVisibilityScopeImpl);
						public getScope(): ly.img.editor.compose.animation.AnimatedVisibilityScopeImpl;
						public maxIntrinsicWidth(param0: androidx.compose.ui.layout.IntrinsicMeasureScope, param1: java.util.List<any>, param2: number): number;
						public minIntrinsicWidth(param0: androidx.compose.ui.layout.IntrinsicMeasureScope, param1: java.util.List<any>, param2: number): number;
						public minIntrinsicHeight(param0: androidx.compose.ui.layout.IntrinsicMeasureScope, param1: java.util.List<any>, param2: number): number;
						public maxIntrinsicHeight(param0: androidx.compose.ui.layout.IntrinsicMeasureScope, param1: java.util.List<any>, param2: number): number;
						public "measure-3p2s80s"(param0: androidx.compose.ui.layout.MeasureScope, param1: java.util.List<any>, param2: number): androidx.compose.ui.layout.MeasureResult;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation {
					export class AnimatedVisibilityScope {
						public static class: java.lang.Class<ly.img.editor.compose.animation.AnimatedVisibilityScope>;
						/**
						 * Constructs a new instance of the ly.img.editor.compose.animation.AnimatedVisibilityScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getTransition(): ly.img.editor.compose.animation_core.Transition<ly.img.editor.compose.animation.EnterExitState>;
							animateEnterExit(param0: androidx.compose.ui.Modifier, param1: ly.img.editor.compose.animation_core.EnterTransition, param2: ly.img.editor.compose.animation_core.ExitTransition, param3: string): androidx.compose.ui.Modifier;
						});
						public constructor();
						public getTransition(): ly.img.editor.compose.animation_core.Transition<ly.img.editor.compose.animation.EnterExitState>;
						public animateEnterExit(param0: androidx.compose.ui.Modifier, param1: ly.img.editor.compose.animation_core.EnterTransition, param2: ly.img.editor.compose.animation_core.ExitTransition, param3: string): androidx.compose.ui.Modifier;
					}
					export module AnimatedVisibilityScope {
						export class DefaultImpls {
							public static class: java.lang.Class<ly.img.editor.compose.animation.AnimatedVisibilityScope.DefaultImpls>;
							public static animateEnterExit(param0: ly.img.editor.compose.animation.AnimatedVisibilityScope, param1: androidx.compose.ui.Modifier, param2: ly.img.editor.compose.animation_core.EnterTransition, param3: ly.img.editor.compose.animation_core.ExitTransition, param4: string): androidx.compose.ui.Modifier;
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
			export module compose {
				export module animation {
					export class AnimatedVisibilityScopeImpl extends ly.img.editor.compose.animation.AnimatedVisibilityScope {
						public static class: java.lang.Class<ly.img.editor.compose.animation.AnimatedVisibilityScopeImpl>;
						public getTargetSize$editor_experimental_release(): androidx.compose.runtime.MutableState<androidx.compose.ui.unit.IntSize>;
						public getTransition(): ly.img.editor.compose.animation_core.Transition<ly.img.editor.compose.animation.EnterExitState>;
						public setTransition(param0: ly.img.editor.compose.animation_core.Transition<ly.img.editor.compose.animation.EnterExitState>): void;
						public animateEnterExit(param0: androidx.compose.ui.Modifier, param1: ly.img.editor.compose.animation_core.EnterTransition, param2: ly.img.editor.compose.animation_core.ExitTransition, param3: string): androidx.compose.ui.Modifier;
						public constructor(param0: ly.img.editor.compose.animation_core.Transition<ly.img.editor.compose.animation.EnterExitState>);
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation {
					export class ContentTransform {
						public static class: java.lang.Class<ly.img.editor.compose.animation.ContentTransform>;
						public static $stable: number;
						public getInitialContentExit(): ly.img.editor.compose.animation_core.ExitTransition;
						public getSizeTransform(): ly.img.editor.compose.animation.SizeTransform;
						public setTargetContentZIndex(param0: number): void;
						public getTargetContentZIndex(): number;
						public constructor(param0: ly.img.editor.compose.animation_core.EnterTransition, param1: ly.img.editor.compose.animation_core.ExitTransition, param2: number, param3: ly.img.editor.compose.animation.SizeTransform);
						public setSizeTransform$editor_experimental_release(param0: ly.img.editor.compose.animation.SizeTransform): void;
						public getTargetContentEnter(): ly.img.editor.compose.animation_core.EnterTransition;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation {
					export class EnterExitState {
						public static class: java.lang.Class<ly.img.editor.compose.animation.EnterExitState>;
						public static PreEnter: ly.img.editor.compose.animation.EnterExitState;
						public static Visible: ly.img.editor.compose.animation.EnterExitState;
						public static PostExit: ly.img.editor.compose.animation.EnterExitState;
						public static getEntries(): any;
						public static values(): androidNative.Array<ly.img.editor.compose.animation.EnterExitState>;
						public static valueOf(param0: string): ly.img.editor.compose.animation.EnterExitState;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation {
					export class SizeTransform {
						public static class: java.lang.Class<ly.img.editor.compose.animation.SizeTransform>;
						/**
						 * Constructs a new instance of the ly.img.editor.compose.animation.SizeTransform interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getClip(): boolean;
							"createAnimationSpec-TemP2vQ"(param0: number, param1: number): ly.img.editor.compose.animation_core.FiniteAnimationSpec<androidx.compose.ui.unit.IntSize>;
						});
						public constructor();
						public getClip(): boolean;
						public "createAnimationSpec-TemP2vQ"(param0: number, param1: number): ly.img.editor.compose.animation_core.FiniteAnimationSpec<androidx.compose.ui.unit.IntSize>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation {
					export class SizeTransformImpl extends ly.img.editor.compose.animation.SizeTransform {
						public static class: java.lang.Class<ly.img.editor.compose.animation.SizeTransformImpl>;
						public getSizeAnimationSpec(): any<androidx.compose.ui.unit.IntSize,androidx.compose.ui.unit.IntSize,ly.img.editor.compose.animation_core.FiniteAnimationSpec<androidx.compose.ui.unit.IntSize>>;
						public constructor(param0: boolean, param1: any<any,any,any>);
						public getClip(): boolean;
						public "createAnimationSpec-TemP2vQ"(param0: number, param1: number): ly.img.editor.compose.animation_core.FiniteAnimationSpec<androidx.compose.ui.unit.IntSize>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class Animatable<T, V>  extends java.lang.Object {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.Animatable<any,any>>;
						public static $stable: number;
						public constructor(param0: T, param1: ly.img.editor.compose.animation_core.TwoWayConverter<T,V>, param2: T, param3: string);
						public getTypeConverter(): ly.img.editor.compose.animation_core.TwoWayConverter<T,V>;
						public getVelocity(): T;
						public getLowerBound(): T;
						public getLabel(): string;
						public getTargetValue(): T;
						public getValue(): T;
						public animateTo(param0: T, param1: ly.img.editor.compose.animation_core.AnimationSpec<T>, param2: T, param3: any<any,any>, param4: any): any;
						public getInternalState$editor_experimental_release(): ly.img.editor.compose.animation_core.AnimationState<T,V>;
						public asState(): androidx.compose.runtime.State<T>;
						public isRunning(): boolean;
						public updateBounds(param0: T, param1: T): void;
						public getDefaultSpringSpec$editor_experimental_release(): ly.img.editor.compose.animation_core.SpringSpec<T>;
						public stop(param0: any): any;
						public snapTo(param0: T, param1: any): any;
						public getVelocityVector(): V;
						public getUpperBound(): T;
						public animateDecay(param0: T, param1: ly.img.editor.compose.animation_core.DecayAnimationSpec<T>, param2: any<any,any>, param3: any): any;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class Animation<T, V>  extends java.lang.Object {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.Animation<any,any>>;
						/**
						 * Constructs a new instance of the ly.img.editor.compose.animation_core.Animation<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getDurationNanos(): number;
							getTypeConverter(): ly.img.editor.compose.animation_core.TwoWayConverter<T,V>;
							getTargetValue(): T;
							isInfinite(): boolean;
							getValueFromNanos(param0: number): T;
							getVelocityVectorFromNanos(param0: number): V;
							isFinishedFromNanos(param0: number): boolean;
						});
						public constructor();
						public getTypeConverter(): ly.img.editor.compose.animation_core.TwoWayConverter<T,V>;
						public getValueFromNanos(param0: number): T;
						public getTargetValue(): T;
						public getVelocityVectorFromNanos(param0: number): V;
						public getDurationNanos(): number;
						public isInfinite(): boolean;
						public isFinishedFromNanos(param0: number): boolean;
					}
					export module Animation {
						export class DefaultImpls {
							public static class: java.lang.Class<ly.img.editor.compose.animation_core.Animation.DefaultImpls>;
							public static isFinishedFromNanos(param0: ly.img.editor.compose.animation_core.Animation<any,any>, param1: number): boolean;
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
			export module compose {
				export module animation_core {
					export class AnimationConstants {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.AnimationConstants>;
						public static INSTANCE: ly.img.editor.compose.animation_core.AnimationConstants;
						public static DefaultDurationMillis: number;
						public static UnspecifiedTime: number;
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
			export module compose {
				export module animation_core {
					export class AnimationResult<T, V>  extends java.lang.Object {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.AnimationResult<any,any>>;
						public static $stable: number;
						public getEndReason(): androidx.compose.animation.core.AnimationEndReason;
						public constructor(param0: ly.img.editor.compose.animation_core.AnimationState<T,V>, param1: androidx.compose.animation.core.AnimationEndReason);
						public getEndState(): ly.img.editor.compose.animation_core.AnimationState<T,V>;
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
			export module compose {
				export module animation_core {
					export class AnimationScope<T, V>  extends java.lang.Object {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.AnimationScope<any,any>>;
						public static $stable: number;
						public getTypeConverter(): ly.img.editor.compose.animation_core.TwoWayConverter<T,V>;
						public setRunning$editor_experimental_release(param0: boolean): void;
						public getStartTimeNanos(): number;
						public getVelocity(): T;
						public getTargetValue(): T;
						public toAnimationState(): ly.img.editor.compose.animation_core.AnimationState<T,V>;
						public getValue(): T;
						public setFinishedTimeNanos$editor_experimental_release(param0: number): void;
						public isRunning(): boolean;
						public setVelocityVector$editor_experimental_release(param0: V): void;
						public constructor(param0: T, param1: ly.img.editor.compose.animation_core.TwoWayConverter<T,V>, param2: V, param3: number, param4: T, param5: number, param6: boolean, param7: any);
						public setValue$editor_experimental_release(param0: T): void;
						public cancelAnimation(): void;
						public getVelocityVector(): V;
						public getFinishedTimeNanos(): number;
						public setLastFrameTimeNanos$editor_experimental_release(param0: number): void;
						public getLastFrameTimeNanos(): number;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class AnimationSpec<T>  extends java.lang.Object {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.AnimationSpec<any>>;
						/**
						 * Constructs a new instance of the ly.img.editor.compose.animation_core.AnimationSpec<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedAnimationSpec<any>;
						});
						public constructor();
						public vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedAnimationSpec<any>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class AnimationState<T, V>  extends androidx.compose.runtime.State<any> {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.AnimationState<any,any>>;
						public static $stable: number;
						public setVelocityVector$editor_experimental_release(param0: any): void;
						public setRunning$editor_experimental_release(param0: boolean): void;
						public getValue(): any;
						public getTypeConverter(): ly.img.editor.compose.animation_core.TwoWayConverter<any,any>;
						public setFinishedTimeNanos$editor_experimental_release(param0: number): void;
						public isRunning(): boolean;
						public setValue$editor_experimental_release(param0: any): void;
						public getVelocity(): any;
						public toString(): string;
						public constructor(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>, param1: any, param2: any, param3: number, param4: number, param5: boolean);
						public getFinishedTimeNanos(): number;
						public getVelocityVector(): any;
						public setLastFrameTimeNanos$editor_experimental_release(param0: number): void;
						public getLastFrameTimeNanos(): number;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export abstract class AnimationVector {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.AnimationVector>;
						public static $stable: number;
						public get$editor_experimental_release(param0: number): number;
						public getSize$editor_experimental_release(): number;
						public set$editor_experimental_release(param0: number, param1: number): void;
						public newVector$editor_experimental_release(): ly.img.editor.compose.animation_core.AnimationVector;
						public reset$editor_experimental_release(): void;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class AnimationVector1D extends ly.img.editor.compose.animation_core.AnimationVector {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.AnimationVector1D>;
						public static $stable: number;
						public get$editor_experimental_release(param0: number): number;
						public setValue$editor_experimental_release(param0: number): void;
						public getSize$editor_experimental_release(): number;
						public set$editor_experimental_release(param0: number, param1: number): void;
						public constructor(param0: number);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public newVector$editor_experimental_release(): ly.img.editor.compose.animation_core.AnimationVector;
						public newVector$editor_experimental_release(): ly.img.editor.compose.animation_core.AnimationVector1D;
						public reset$editor_experimental_release(): void;
						public toString(): string;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class AnimationVector2D extends ly.img.editor.compose.animation_core.AnimationVector {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.AnimationVector2D>;
						public static $stable: number;
						public get$editor_experimental_release(param0: number): number;
						public setV2$editor_experimental_release(param0: number): void;
						public getV2(): number;
						public set$editor_experimental_release(param0: number, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public newVector$editor_experimental_release(): ly.img.editor.compose.animation_core.AnimationVector;
						public reset$editor_experimental_release(): void;
						public toString(): string;
						public getSize$editor_experimental_release(): number;
						public getV1(): number;
						public setV1$editor_experimental_release(param0: number): void;
						public newVector$editor_experimental_release(): ly.img.editor.compose.animation_core.AnimationVector2D;
						public constructor(param0: number, param1: number);
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class AnimationVector3D extends ly.img.editor.compose.animation_core.AnimationVector {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.AnimationVector3D>;
						public static $stable: number;
						public get$editor_experimental_release(param0: number): number;
						public setV2$editor_experimental_release(param0: number): void;
						public getV2(): number;
						public setV3$editor_experimental_release(param0: number): void;
						public set$editor_experimental_release(param0: number, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getV3(): number;
						public newVector$editor_experimental_release(): ly.img.editor.compose.animation_core.AnimationVector;
						public reset$editor_experimental_release(): void;
						public toString(): string;
						public getSize$editor_experimental_release(): number;
						public getV1(): number;
						public setV1$editor_experimental_release(param0: number): void;
						public constructor(param0: number, param1: number, param2: number);
						public newVector$editor_experimental_release(): ly.img.editor.compose.animation_core.AnimationVector3D;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class AnimationVector4D extends ly.img.editor.compose.animation_core.AnimationVector {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.AnimationVector4D>;
						public static $stable: number;
						public get$editor_experimental_release(param0: number): number;
						public setV2$editor_experimental_release(param0: number): void;
						public getV2(): number;
						public setV3$editor_experimental_release(param0: number): void;
						public set$editor_experimental_release(param0: number, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getV3(): number;
						public newVector$editor_experimental_release(): ly.img.editor.compose.animation_core.AnimationVector;
						public setV4$editor_experimental_release(param0: number): void;
						public reset$editor_experimental_release(): void;
						public toString(): string;
						public constructor(param0: number, param1: number, param2: number, param3: number);
						public getSize$editor_experimental_release(): number;
						public getV1(): number;
						public setV1$editor_experimental_release(param0: number): void;
						public getV4(): number;
						public newVector$editor_experimental_release(): ly.img.editor.compose.animation_core.AnimationVector4D;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class Animations {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.Animations>;
						/**
						 * Constructs a new instance of the ly.img.editor.compose.animation_core.Animations interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							get(param0: number): androidx.compose.animation.core.FloatAnimationSpec;
						});
						public constructor();
						public get(param0: number): androidx.compose.animation.core.FloatAnimationSpec;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class ChangeSize {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.ChangeSize>;
						public component4(): boolean;
						public copy(param0: androidx.compose.ui.Alignment, param1: any<any,androidx.compose.ui.unit.IntSize>, param2: ly.img.editor.compose.animation_core.FiniteAnimationSpec<androidx.compose.ui.unit.IntSize>, param3: boolean): ly.img.editor.compose.animation_core.ChangeSize;
						public getAlignment(): androidx.compose.ui.Alignment;
						public component1(): androidx.compose.ui.Alignment;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getClip(): boolean;
						public getSize(): any<androidx.compose.ui.unit.IntSize,androidx.compose.ui.unit.IntSize>;
						public toString(): string;
						public constructor(param0: androidx.compose.ui.Alignment, param1: any<any,androidx.compose.ui.unit.IntSize>, param2: ly.img.editor.compose.animation_core.FiniteAnimationSpec<androidx.compose.ui.unit.IntSize>, param3: boolean);
						public getAnimationSpec(): ly.img.editor.compose.animation_core.FiniteAnimationSpec<androidx.compose.ui.unit.IntSize>;
						public component2(): any<androidx.compose.ui.unit.IntSize,androidx.compose.ui.unit.IntSize>;
						public component3(): ly.img.editor.compose.animation_core.FiniteAnimationSpec<androidx.compose.ui.unit.IntSize>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class DecayAnimation<T, V>  extends ly.img.editor.compose.animation_core.Animation<any,any> {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.DecayAnimation<any,any>>;
						public static $stable: number;
						public constructor(param0: ly.img.editor.compose.animation_core.VectorizedDecayAnimationSpec<any>, param1: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>, param2: any, param3: any);
						public getInitialValue(): any;
						public getTargetValue(): any;
						public constructor(param0: ly.img.editor.compose.animation_core.DecayAnimationSpec<any>, param1: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>, param2: any, param3: any);
						public getTypeConverter(): ly.img.editor.compose.animation_core.TwoWayConverter<any,any>;
						public getInitialVelocityVector(): any;
						public getDurationNanos(): number;
						public getValueFromNanos(param0: number): any;
						public isInfinite(): boolean;
						public isFinishedFromNanos(param0: number): boolean;
						public getVelocityVectorFromNanos(param0: number): any;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class DecayAnimationSpec<T>  extends java.lang.Object {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.DecayAnimationSpec<any>>;
						/**
						 * Constructs a new instance of the ly.img.editor.compose.animation_core.DecayAnimationSpec<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedDecayAnimationSpec<any>;
						});
						public constructor();
						public vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedDecayAnimationSpec<any>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class DecayAnimationSpecImpl<T>  extends ly.img.editor.compose.animation_core.DecayAnimationSpec<any> {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.DecayAnimationSpecImpl<any>>;
						public vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedDecayAnimationSpec<any>;
						public constructor(param0: androidx.compose.animation.core.FloatDecayAnimationSpec);
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class DurationBasedAnimationSpec<T>  extends ly.img.editor.compose.animation_core.FiniteAnimationSpec<any> {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.DurationBasedAnimationSpec<any>>;
						/**
						 * Constructs a new instance of the ly.img.editor.compose.animation_core.DurationBasedAnimationSpec<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedDurationBasedAnimationSpec<any>;
							vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedFiniteAnimationSpec<any>;
							vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedAnimationSpec<any>;
						});
						public constructor();
						public vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedAnimationSpec<any>;
						public vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedFiniteAnimationSpec<any>;
						public vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedDurationBasedAnimationSpec<any>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export module EnterExitTransitionKt {
export module  {
						export class WhenMappings {
							public static class: java.lang.Class<ly.img.editor.compose.animation_core.EnterExitTransitionKt.WhenMappings>;
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
			export module compose {
				export module animation_core {
					export abstract class EnterTransition {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.EnterTransition>;
						public static $stable: number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getData$editor_experimental_release(): ly.img.editor.compose.animation_core.TransitionData;
						public plus(param0: ly.img.editor.compose.animation_core.EnterTransition): ly.img.editor.compose.animation_core.EnterTransition;
						public toString(): string;
					}
					export module EnterTransition {
						export class Companion {
							public static class: java.lang.Class<ly.img.editor.compose.animation_core.EnterTransition.Companion>;
							public getNone(): ly.img.editor.compose.animation_core.EnterTransition;
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
			export module compose {
				export module animation_core {
					export class EnterTransitionImpl extends ly.img.editor.compose.animation_core.EnterTransition {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.EnterTransitionImpl>;
						public constructor(param0: ly.img.editor.compose.animation_core.TransitionData);
						public getData$editor_experimental_release(): ly.img.editor.compose.animation_core.TransitionData;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export abstract class ExitTransition {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.ExitTransition>;
						public static $stable: number;
						public plus(param0: ly.img.editor.compose.animation_core.ExitTransition): ly.img.editor.compose.animation_core.ExitTransition;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getData$editor_experimental_release(): ly.img.editor.compose.animation_core.TransitionData;
						public toString(): string;
					}
					export module ExitTransition {
						export class Companion {
							public static class: java.lang.Class<ly.img.editor.compose.animation_core.ExitTransition.Companion>;
							public getNone(): ly.img.editor.compose.animation_core.ExitTransition;
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
			export module compose {
				export module animation_core {
					export class ExitTransitionImpl extends ly.img.editor.compose.animation_core.ExitTransition {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.ExitTransitionImpl>;
						public constructor(param0: ly.img.editor.compose.animation_core.TransitionData);
						public getData$editor_experimental_release(): ly.img.editor.compose.animation_core.TransitionData;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class ExpandShrinkModifier extends ly.img.editor.compose.animation_core.LayoutModifierWithPassThroughIntrinsics {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.ExpandShrinkModifier>;
						public getOffsetAnimation(): ly.img.editor.compose.animation_core.Transition.DeferredAnimation<androidx.compose.ui.unit.IntOffset,ly.img.editor.compose.animation_core.AnimationVector2D>;
						public constructor();
						public getExpand(): androidx.compose.runtime.State<ly.img.editor.compose.animation_core.ChangeSize>;
						public constructor(param0: ly.img.editor.compose.animation_core.Transition.DeferredAnimation<androidx.compose.ui.unit.IntSize,ly.img.editor.compose.animation_core.AnimationVector2D>, param1: ly.img.editor.compose.animation_core.Transition.DeferredAnimation<androidx.compose.ui.unit.IntOffset,ly.img.editor.compose.animation_core.AnimationVector2D>, param2: androidx.compose.runtime.State<ly.img.editor.compose.animation_core.ChangeSize>, param3: androidx.compose.runtime.State<ly.img.editor.compose.animation_core.ChangeSize>, param4: androidx.compose.runtime.State<any>);
						public setCurrentAlignment(param0: androidx.compose.ui.Alignment): void;
						public "targetOffsetByState-oFUgxo0"(param0: ly.img.editor.compose.animation.EnterExitState, param1: number): number;
						public "measure-3p2s80s"(param0: androidx.compose.ui.layout.MeasureScope, param1: androidx.compose.ui.layout.Measurable, param2: number): androidx.compose.ui.layout.MeasureResult;
						public "sizeByState-Uzc_VyU"(param0: ly.img.editor.compose.animation.EnterExitState, param1: number): number;
						public getSizeAnimation(): ly.img.editor.compose.animation_core.Transition.DeferredAnimation<androidx.compose.ui.unit.IntSize,ly.img.editor.compose.animation_core.AnimationVector2D>;
						public getAlignment(): androidx.compose.runtime.State<androidx.compose.ui.Alignment>;
						public getShrink(): androidx.compose.runtime.State<ly.img.editor.compose.animation_core.ChangeSize>;
						public getCurrentAlignment(): androidx.compose.ui.Alignment;
						public getSizeTransitionSpec(): any<ly.img.editor.compose.animation_core.Transition.Segment<ly.img.editor.compose.animation.EnterExitState>,ly.img.editor.compose.animation_core.FiniteAnimationSpec<androidx.compose.ui.unit.IntSize>>;
					}
					export module ExpandShrinkModifier {
						export class WhenMappings {
							public static class: java.lang.Class<ly.img.editor.compose.animation_core.ExpandShrinkModifier.WhenMappings>;
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
			export module compose {
				export module animation_core {
					export class Fade {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.Fade>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getAlpha(): number;
						public component2(): ly.img.editor.compose.animation_core.FiniteAnimationSpec<java.lang.Float>;
						public copy(param0: number, param1: ly.img.editor.compose.animation_core.FiniteAnimationSpec<java.lang.Float>): ly.img.editor.compose.animation_core.Fade;
						public constructor(param0: number, param1: ly.img.editor.compose.animation_core.FiniteAnimationSpec<java.lang.Float>);
						public component1(): number;
						public getAnimationSpec(): ly.img.editor.compose.animation_core.FiniteAnimationSpec<java.lang.Float>;
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
			export module compose {
				export module animation_core {
					export class FiniteAnimationSpec<T>  extends ly.img.editor.compose.animation_core.AnimationSpec<any> {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.FiniteAnimationSpec<any>>;
						/**
						 * Constructs a new instance of the ly.img.editor.compose.animation_core.FiniteAnimationSpec<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedFiniteAnimationSpec<any>;
							vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedAnimationSpec<any>;
						});
						public constructor();
						public vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedAnimationSpec<any>;
						public vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedFiniteAnimationSpec<any>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class InfiniteRepeatableSpec<T>  extends ly.img.editor.compose.animation_core.AnimationSpec<any> {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.InfiniteRepeatableSpec<any>>;
						public static $stable: number;
						public getRepeatMode(): ly.img.editor.compose.animation_core.RepeatMode;
						public "getInitialStartOffset-LQYxR2s"(): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedAnimationSpec<any>;
						public getAnimation(): ly.img.editor.compose.animation_core.DurationBasedAnimationSpec<any>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class KeyframesSpec<T>  extends ly.img.editor.compose.animation_core.DurationBasedAnimationSpec<any> {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.KeyframesSpec<any>>;
						public static $stable: number;
						public getConfig(): ly.img.editor.compose.animation_core.KeyframesSpec.KeyframesSpecConfig<any>;
						public vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedKeyframesSpec<any>;
						public constructor(param0: ly.img.editor.compose.animation_core.KeyframesSpec.KeyframesSpecConfig<any>);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedAnimationSpec<any>;
						public vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedFiniteAnimationSpec<any>;
						public vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedDurationBasedAnimationSpec<any>;
					}
					export module KeyframesSpec {
						export class KeyframeEntity<T>  extends java.lang.Object {
							public static class: java.lang.Class<ly.img.editor.compose.animation_core.KeyframesSpec.KeyframeEntity<any>>;
							public static $stable: number;
							public getValue$editor_experimental_release(): T;
							public setEasing$editor_experimental_release(param0: androidx.compose.animation.core.Easing): void;
							public hashCode(): number;
							public getEasing$editor_experimental_release(): androidx.compose.animation.core.Easing;
							public constructor(param0: T, param1: androidx.compose.animation.core.Easing);
							public toPair$editor_experimental_release(param0: any): any;
							public equals(param0: any): boolean;
						}
						export class KeyframesSpecConfig<T>  extends java.lang.Object {
							public static class: java.lang.Class<ly.img.editor.compose.animation_core.KeyframesSpec.KeyframesSpecConfig<any>>;
							public static $stable: number;
							public constructor();
							public hashCode(): number;
							public setDurationMillis(param0: number): void;
							public with(param0: ly.img.editor.compose.animation_core.KeyframesSpec.KeyframeEntity<T>, param1: androidx.compose.animation.core.Easing): void;
							public at(param0: T, param1: number): ly.img.editor.compose.animation_core.KeyframesSpec.KeyframeEntity<T>;
							public getDelayMillis(): number;
							public getDurationMillis(): number;
							public getKeyframes$editor_experimental_release(): java.util.Map<java.lang.Integer,ly.img.editor.compose.animation_core.KeyframesSpec.KeyframeEntity<T>>;
							public setDelayMillis(param0: number): void;
							public atFraction(param0: T, param1: number): ly.img.editor.compose.animation_core.KeyframesSpec.KeyframeEntity<T>;
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
			export module compose {
				export module animation_core {
					export abstract class LayoutModifierWithPassThroughIntrinsics {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.LayoutModifierWithPassThroughIntrinsics>;
						public minIntrinsicWidth(param0: androidx.compose.ui.layout.IntrinsicMeasureScope, param1: androidx.compose.ui.layout.IntrinsicMeasurable, param2: number): number;
						public minIntrinsicHeight(param0: androidx.compose.ui.layout.IntrinsicMeasureScope, param1: androidx.compose.ui.layout.IntrinsicMeasurable, param2: number): number;
						public constructor();
						public maxIntrinsicWidth(param0: androidx.compose.ui.layout.IntrinsicMeasureScope, param1: androidx.compose.ui.layout.IntrinsicMeasurable, param2: number): number;
						public maxIntrinsicHeight(param0: androidx.compose.ui.layout.IntrinsicMeasureScope, param1: androidx.compose.ui.layout.IntrinsicMeasurable, param2: number): number;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class MutableTransitionState<S>  extends java.lang.Object {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.MutableTransitionState<any>>;
						public static $stable: number;
						public setRunning$editor_experimental_release(param0: boolean): void;
						public constructor(param0: S);
						public setCurrentState$editor_experimental_release(param0: S): void;
						public setTargetState(param0: S): void;
						public isRunning$editor_experimental_release(): boolean;
						public getTargetState(): S;
						public getCurrentState(): S;
						public isIdle(): boolean;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class MutatePriority {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.MutatePriority>;
						public static Default: ly.img.editor.compose.animation_core.MutatePriority;
						public static UserInput: ly.img.editor.compose.animation_core.MutatePriority;
						public static PreventUserInput: ly.img.editor.compose.animation_core.MutatePriority;
						public static valueOf(param0: string): ly.img.editor.compose.animation_core.MutatePriority;
						public static values(): androidNative.Array<ly.img.editor.compose.animation_core.MutatePriority>;
						public static getEntries(): any<ly.img.editor.compose.animation_core.MutatePriority>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class MutatorMutex {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.MutatorMutex>;
						public constructor();
						public mutate(param0: ly.img.editor.compose.animation_core.MutatePriority, param1: any, param2: any): any;
						public mutateWith(param0: any, param1: ly.img.editor.compose.animation_core.MutatePriority, param2: any, param3: any): any;
					}
					export module MutatorMutex {
						export class Mutator {
							public static class: java.lang.Class<ly.img.editor.compose.animation_core.MutatorMutex.Mutator>;
							public canInterrupt(param0: ly.img.editor.compose.animation_core.MutatorMutex.Mutator): boolean;
							public cancel(): void;
							public constructor(param0: ly.img.editor.compose.animation_core.MutatePriority, param1: kotlinx.coroutines.Job);
							public getJob(): kotlinx.coroutines.Job;
							public getPriority(): ly.img.editor.compose.animation_core.MutatePriority;
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
			export module compose {
				export module animation_core {
					export class RepeatMode {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.RepeatMode>;
						public static Restart: ly.img.editor.compose.animation_core.RepeatMode;
						public static Reverse: ly.img.editor.compose.animation_core.RepeatMode;
						public static values(): androidNative.Array<ly.img.editor.compose.animation_core.RepeatMode>;
						public static valueOf(param0: string): ly.img.editor.compose.animation_core.RepeatMode;
						public static getEntries(): any<ly.img.editor.compose.animation_core.RepeatMode>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class RepeatableSpec<T>  extends ly.img.editor.compose.animation_core.FiniteAnimationSpec<any> {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.RepeatableSpec<any>>;
						public static $stable: number;
						public getRepeatMode(): ly.img.editor.compose.animation_core.RepeatMode;
						public "getInitialStartOffset-LQYxR2s"(): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedAnimationSpec<any>;
						public getIterations(): number;
						public getAnimation(): ly.img.editor.compose.animation_core.DurationBasedAnimationSpec<any>;
						public vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedFiniteAnimationSpec<any>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class Scale {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.Scale>;
						public getScale(): number;
						public component3(): ly.img.editor.compose.animation_core.FiniteAnimationSpec<java.lang.Float>;
						public "getTransformOrigin-SzJe1aQ"(): number;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component1(): number;
						public "component2-SzJe1aQ"(): number;
						public getAnimationSpec(): ly.img.editor.compose.animation_core.FiniteAnimationSpec<java.lang.Float>;
						public toString(): string;
						public "copy-bnNdC4k"(param0: number, param1: number, param2: ly.img.editor.compose.animation_core.FiniteAnimationSpec<java.lang.Float>): ly.img.editor.compose.animation_core.Scale;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class SizeAnimationModifier extends ly.img.editor.compose.animation_core.LayoutModifierWithPassThroughIntrinsics {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.SizeAnimationModifier>;
						public constructor();
						public setListener(param0: any<any,any,any>): void;
						public getListener(): any<androidx.compose.ui.unit.IntSize,androidx.compose.ui.unit.IntSize,any>;
						public constructor(param0: ly.img.editor.compose.animation_core.AnimationSpec<androidx.compose.ui.unit.IntSize>, param1: kotlinx.coroutines.CoroutineScope);
						public getScope(): kotlinx.coroutines.CoroutineScope;
						public setAnimData(param0: ly.img.editor.compose.animation_core.SizeAnimationModifier.AnimData): void;
						public getAnimSpec(): ly.img.editor.compose.animation_core.AnimationSpec<androidx.compose.ui.unit.IntSize>;
						public "animateTo-mzRDjE0"(param0: number): number;
						public "measure-3p2s80s"(param0: androidx.compose.ui.layout.MeasureScope, param1: androidx.compose.ui.layout.Measurable, param2: number): androidx.compose.ui.layout.MeasureResult;
						public getAnimData(): ly.img.editor.compose.animation_core.SizeAnimationModifier.AnimData;
					}
					export module SizeAnimationModifier {
						export class AnimData {
							public static class: java.lang.Class<ly.img.editor.compose.animation_core.SizeAnimationModifier.AnimData>;
							public static $stable: number;
							public getAnim(): ly.img.editor.compose.animation_core.Animatable<androidx.compose.ui.unit.IntSize,ly.img.editor.compose.animation_core.AnimationVector2D>;
							public "component2-YbymL2g"(): number;
							public hashCode(): number;
							public "setStartSize-ozmzZPI"(param0: number): void;
							public component1(): ly.img.editor.compose.animation_core.Animatable<androidx.compose.ui.unit.IntSize,ly.img.editor.compose.animation_core.AnimationVector2D>;
							public toString(): string;
							public equals(param0: any): boolean;
							public "getStartSize-YbymL2g"(): number;
							public "copy-O0kMr_c"(param0: ly.img.editor.compose.animation_core.Animatable<androidx.compose.ui.unit.IntSize,ly.img.editor.compose.animation_core.AnimationVector2D>, param1: number): ly.img.editor.compose.animation_core.SizeAnimationModifier.AnimData;
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
			export module compose {
				export module animation_core {
					export class Slide {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.Slide>;
						public constructor(param0: any<any,androidx.compose.ui.unit.IntOffset>, param1: ly.img.editor.compose.animation_core.FiniteAnimationSpec<androidx.compose.ui.unit.IntOffset>);
						public copy(param0: any<any,androidx.compose.ui.unit.IntOffset>, param1: ly.img.editor.compose.animation_core.FiniteAnimationSpec<androidx.compose.ui.unit.IntOffset>): ly.img.editor.compose.animation_core.Slide;
						public getSlideOffset(): any<androidx.compose.ui.unit.IntSize,androidx.compose.ui.unit.IntOffset>;
						public component2(): ly.img.editor.compose.animation_core.FiniteAnimationSpec<androidx.compose.ui.unit.IntOffset>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getAnimationSpec(): ly.img.editor.compose.animation_core.FiniteAnimationSpec<androidx.compose.ui.unit.IntOffset>;
						public component1(): any<androidx.compose.ui.unit.IntSize,androidx.compose.ui.unit.IntOffset>;
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
			export module compose {
				export module animation_core {
					export class SlideModifier extends ly.img.editor.compose.animation_core.LayoutModifierWithPassThroughIntrinsics {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.SlideModifier>;
						public constructor();
						public "targetValueByState-oFUgxo0"(param0: ly.img.editor.compose.animation.EnterExitState, param1: number): number;
						public getSlideOut(): androidx.compose.runtime.State<ly.img.editor.compose.animation_core.Slide>;
						public constructor(param0: ly.img.editor.compose.animation_core.Transition.DeferredAnimation<androidx.compose.ui.unit.IntOffset,ly.img.editor.compose.animation_core.AnimationVector2D>, param1: androidx.compose.runtime.State<ly.img.editor.compose.animation_core.Slide>, param2: androidx.compose.runtime.State<ly.img.editor.compose.animation_core.Slide>);
						public "measure-3p2s80s"(param0: androidx.compose.ui.layout.MeasureScope, param1: androidx.compose.ui.layout.Measurable, param2: number): androidx.compose.ui.layout.MeasureResult;
						public getSlideIn(): androidx.compose.runtime.State<ly.img.editor.compose.animation_core.Slide>;
						public getLazyAnimation(): ly.img.editor.compose.animation_core.Transition.DeferredAnimation<androidx.compose.ui.unit.IntOffset,ly.img.editor.compose.animation_core.AnimationVector2D>;
						public getTransitionSpec(): any<ly.img.editor.compose.animation_core.Transition.Segment<ly.img.editor.compose.animation.EnterExitState>,ly.img.editor.compose.animation_core.FiniteAnimationSpec<androidx.compose.ui.unit.IntOffset>>;
					}
					export module SlideModifier {
						export class WhenMappings {
							public static class: java.lang.Class<ly.img.editor.compose.animation_core.SlideModifier.WhenMappings>;
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
			export module compose {
				export module animation_core {
					export class SnapSpec<T>  extends ly.img.editor.compose.animation_core.DurationBasedAnimationSpec<any> {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.SnapSpec<any>>;
						public static $stable: number;
						public getDelay(): number;
						public constructor();
						public constructor(param0: number);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedAnimationSpec<any>;
						public vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedFiniteAnimationSpec<any>;
						public vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedDurationBasedAnimationSpec<any>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class Spring {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.Spring>;
						public static INSTANCE: ly.img.editor.compose.animation_core.Spring;
						public static StiffnessHigh: number;
						public static StiffnessMedium: number;
						public static StiffnessMediumLow: number;
						public static StiffnessLow: number;
						public static StiffnessVeryLow: number;
						public static DampingRatioHighBouncy: number;
						public static DampingRatioMediumBouncy: number;
						public static DampingRatioLowBouncy: number;
						public static DampingRatioNoBouncy: number;
						public static DefaultDisplacementThreshold: number;
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
			export module compose {
				export module animation_core {
					export class SpringSpec<T>  extends ly.img.editor.compose.animation_core.FiniteAnimationSpec<any> {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.SpringSpec<any>>;
						public static $stable: number;
						public getVisibilityThreshold(): any;
						public constructor();
						public vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedSpringSpec<any>;
						public constructor(param0: number, param1: number, param2: any);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getDampingRatio(): number;
						public vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedAnimationSpec<any>;
						public vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedFiniteAnimationSpec<any>;
						public getStiffness(): number;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class StartOffset {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.StartOffset>;
						public static "equals-impl"(param0: number, param1: any): boolean;
						public static "getOffsetType-VVugAho"(param0: number): number;
						public static "equals-impl0"(param0: number, param1: number): boolean;
						public static "getOffsetMillis-impl"(param0: number): number;
						public static "toString-impl"(param0: number): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static "constructor-impl"(param0: number, param1: number): number;
						public static "hashCode-impl"(param0: number): number;
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
			export module compose {
				export module animation_core {
					export class StartOffsetType {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.StartOffsetType>;
						public static "equals-impl"(param0: number, param1: any): boolean;
						public static "equals-impl0"(param0: number, param1: number): boolean;
						public static "toString-impl"(param0: number): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static "hashCode-impl"(param0: number): number;
						public toString(): string;
					}
					export module StartOffsetType {
						export class Companion {
							public static class: java.lang.Class<ly.img.editor.compose.animation_core.StartOffsetType.Companion>;
							public "getDelay-VVugAho"(): number;
							public "getFastForward-VVugAho"(): number;
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
			export module compose {
				export module animation_core {
					export class TargetBasedAnimation<T, V>  extends ly.img.editor.compose.animation_core.Animation<any,any> {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.TargetBasedAnimation<any,any>>;
						public static $stable: number;
						public getAnimationSpec$editor_experimental_release(): ly.img.editor.compose.animation_core.VectorizedAnimationSpec<any>;
						public getInitialValue(): any;
						public constructor(param0: ly.img.editor.compose.animation_core.AnimationSpec<any>, param1: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>, param2: any, param3: any, param4: any);
						public getTargetValue(): any;
						public getTypeConverter(): ly.img.editor.compose.animation_core.TwoWayConverter<any,any>;
						public constructor(param0: ly.img.editor.compose.animation_core.VectorizedAnimationSpec<any>, param1: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>, param2: any, param3: any, param4: any);
						public getValueFromNanos(param0: number): any;
						public getDurationNanos(): number;
						public isInfinite(): boolean;
						public toString(): string;
						public isFinishedFromNanos(param0: number): boolean;
						public getVelocityVectorFromNanos(param0: number): any;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class Transition<S>  extends java.lang.Object {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.Transition<any>>;
						public static $stable: number;
						public animateTo$editor_experimental_release(param0: S, param1: androidx.compose.runtime.Composer, param2: number): void;
						public setSeeking$editor_experimental_release(param0: boolean): void;
						public removeAnimation$editor_experimental_release(param0: ly.img.editor.compose.animation_core.Transition.DeferredAnimation<any,any>): void;
						public getTotalDurationNanos(): number;
						public onFrame$editor_experimental_release(param0: number, param1: number): void;
						public addAnimation$editor_experimental_release(param0: ly.img.editor.compose.animation_core.Transition.TransitionAnimationState<any,any>): boolean;
						public constructor(param0: ly.img.editor.compose.animation_core.MutableTransitionState<S>, param1: string);
						public getLabel(): string;
						public getTargetState(): S;
						public isRunning(): boolean;
						public getLastSeekedTimeNanos$editor_experimental_release(): number;
						public constructor(param0: S, param1: string);
						public removeTransition$editor_experimental_release(param0: ly.img.editor.compose.animation_core.Transition<any>): boolean;
						public removeAnimation$editor_experimental_release(param0: ly.img.editor.compose.animation_core.Transition.TransitionAnimationState<any,any>): void;
						public getUpdateChildrenNeeded$editor_experimental_release(): boolean;
						public onTransitionStart$editor_experimental_release(param0: number): void;
						public setUpdateChildrenNeeded$editor_experimental_release(param0: boolean): void;
						public getTransitions(): java.util.List<ly.img.editor.compose.animation_core.Transition<any>>;
						public setPlayTimeNanos(param0: number): void;
						public setCurrentState$editor_experimental_release(param0: S): void;
						public getPlayTimeNanos(): number;
						public getAnimations(): java.util.List<ly.img.editor.compose.animation_core.Transition.TransitionAnimationState<any,any>>;
						public getSegment(): ly.img.editor.compose.animation_core.Transition.Segment<S>;
						public getCurrentState(): S;
						public setTargetState$editor_experimental_release(param0: S): void;
						public isSeeking(): boolean;
						public setLastSeekedTimeNanos$editor_experimental_release(param0: number): void;
						public updateTarget$editor_experimental_release(param0: S, param1: androidx.compose.runtime.Composer, param2: number): void;
						public onTransitionEnd$editor_experimental_release(): void;
						public addTransition$editor_experimental_release(param0: ly.img.editor.compose.animation_core.Transition<any>): boolean;
						public seek(param0: S, param1: S, param2: number): void;
					}
					export module Transition {
						export class DeferredAnimation<T, V>  extends java.lang.Object {
							public static class: java.lang.Class<ly.img.editor.compose.animation_core.Transition.DeferredAnimation<any,any>>;
							public getData$editor_experimental_release(): ly.img.editor.compose.animation_core.Transition.DeferredAnimation.DeferredAnimationData<T,V>;
							public animate(param0: any<any,any>, param1: any<any,any>): androidx.compose.runtime.State<T>;
							public constructor(param0: ly.img.editor.compose.animation_core.TwoWayConverter<T,V>, param1: string);
							public getLabel(): string;
							public setData$editor_experimental_release(param0: ly.img.editor.compose.animation_core.Transition.DeferredAnimation.DeferredAnimationData<T,V>): void;
							public getTypeConverter(): ly.img.editor.compose.animation_core.TwoWayConverter<T,V>;
							public setupSeeking$editor_experimental_release(): void;
						}
						export module DeferredAnimation {
							export class DeferredAnimationData<T, V>  extends androidx.compose.runtime.State<any> {
								public static class: java.lang.Class<ly.img.editor.compose.animation_core.Transition.DeferredAnimation.DeferredAnimationData<any,any>>;
								public getTransitionSpec(): any<ly.img.editor.compose.animation_core.Transition.Segment<any>,ly.img.editor.compose.animation_core.FiniteAnimationSpec<any>>;
								public setTargetValueByState(param0: any<any,any>): void;
								public getTargetValueByState(): any<any,any>;
								public updateAnimationStates(param0: ly.img.editor.compose.animation_core.Transition.Segment<any>): void;
								public getValue(): any;
								public setTransitionSpec(param0: any<any,any>): void;
								public constructor(param0: ly.img.editor.compose.animation_core.Transition.TransitionAnimationState<any,any>, param1: any<any,any>, param2: any<any,any>);
								public getAnimation(): ly.img.editor.compose.animation_core.Transition.TransitionAnimationState<any,any>;
							}
						}
						export class Segment<S>  extends java.lang.Object {
							public static class: java.lang.Class<ly.img.editor.compose.animation_core.Transition.Segment<any>>;
							/**
							 * Constructs a new instance of the ly.img.editor.compose.animation_core.Transition$Segment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getInitialState(): S;
								getTargetState(): S;
								isTransitioningTo(param0: S, param1: S): boolean;
							});
							public constructor();
							public getInitialState(): S;
							public isTransitioningTo(param0: S, param1: S): boolean;
							public getTargetState(): S;
						}
						export module Segment {
							export class DefaultImpls {
								public static class: java.lang.Class<ly.img.editor.compose.animation_core.Transition.Segment.DefaultImpls>;
								public static isTransitioningTo(param0: ly.img.editor.compose.animation_core.Transition.Segment<any>, param1: any, param2: any): boolean;
							}
						}
						export class SegmentImpl<S>  extends ly.img.editor.compose.animation_core.Transition.Segment<any> {
							public static class: java.lang.Class<ly.img.editor.compose.animation_core.Transition.SegmentImpl<any>>;
							public isTransitioningTo(param0: any, param1: any): boolean;
							public hashCode(): number;
							public constructor(param0: any, param1: any);
							public equals(param0: any): boolean;
							public getInitialState(): any;
							public getTargetState(): any;
						}
						export class TransitionAnimationState<T, V>  extends androidx.compose.runtime.State<any> {
							public static class: java.lang.Class<ly.img.editor.compose.animation_core.Transition.TransitionAnimationState<any,any>>;
							public getValue(): any;
							public getTypeConverter(): ly.img.editor.compose.animation_core.TwoWayConverter<any,any>;
							public getAnimationSpec(): ly.img.editor.compose.animation_core.FiniteAnimationSpec<any>;
							public getLabel(): string;
							public isFinished$editor_experimental_release(): boolean;
							public getDurationNanos$editor_experimental_release(): number;
							public resetAnimation$editor_experimental_release(): void;
							public seekTo$editor_experimental_release(param0: number): void;
							public setValue$editor_experimental_release(param0: any): void;
							public getAnimation(): ly.img.editor.compose.animation_core.TargetBasedAnimation<any,any>;
							public setFinished$editor_experimental_release(param0: boolean): void;
							public updateInitialAndTargetValue$editor_experimental_release(param0: any, param1: any, param2: ly.img.editor.compose.animation_core.FiniteAnimationSpec<any>): void;
							public constructor(param0: any, param1: any, param2: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>, param3: string);
							public onPlayTimeChanged$editor_experimental_release(param0: number, param1: number): void;
							public updateTargetValue$editor_experimental_release(param0: any, param1: ly.img.editor.compose.animation_core.FiniteAnimationSpec<any>): void;
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
			export module compose {
				export module animation_core {
					export class TransitionData {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.TransitionData>;
						public constructor();
						public getFade(): ly.img.editor.compose.animation_core.Fade;
						public constructor(param0: ly.img.editor.compose.animation_core.Fade, param1: ly.img.editor.compose.animation_core.Slide, param2: ly.img.editor.compose.animation_core.ChangeSize, param3: ly.img.editor.compose.animation_core.Scale);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getScale(): ly.img.editor.compose.animation_core.Scale;
						public copy(param0: ly.img.editor.compose.animation_core.Fade, param1: ly.img.editor.compose.animation_core.Slide, param2: ly.img.editor.compose.animation_core.ChangeSize, param3: ly.img.editor.compose.animation_core.Scale): ly.img.editor.compose.animation_core.TransitionData;
						public toString(): string;
						public component1(): ly.img.editor.compose.animation_core.Fade;
						public component2(): ly.img.editor.compose.animation_core.Slide;
						public component3(): ly.img.editor.compose.animation_core.ChangeSize;
						public getSlide(): ly.img.editor.compose.animation_core.Slide;
						public getChangeSize(): ly.img.editor.compose.animation_core.ChangeSize;
						public component4(): ly.img.editor.compose.animation_core.Scale;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class TweenSpec<T>  extends ly.img.editor.compose.animation_core.DurationBasedAnimationSpec<any> {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.TweenSpec<any>>;
						public static $stable: number;
						public getDelay(): number;
						public getEasing(): androidx.compose.animation.core.Easing;
						public constructor();
						public getDurationMillis(): number;
						public vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedTweenSpec<any>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedAnimationSpec<any>;
						public vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedFiniteAnimationSpec<any>;
						public constructor(param0: number, param1: number, param2: androidx.compose.animation.core.Easing);
						public vectorize(param0: ly.img.editor.compose.animation_core.TwoWayConverter<any,any>): ly.img.editor.compose.animation_core.VectorizedDurationBasedAnimationSpec<any>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class TwoWayConverter<T, V>  extends java.lang.Object {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.TwoWayConverter<any,any>>;
						/**
						 * Constructs a new instance of the ly.img.editor.compose.animation_core.TwoWayConverter<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getConvertToVector(): any<T,V>;
							getConvertFromVector(): any<V,T>;
						});
						public constructor();
						public getConvertToVector(): any<T,V>;
						public getConvertFromVector(): any<V,T>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class TwoWayConverterImpl<T, V>  extends ly.img.editor.compose.animation_core.TwoWayConverter<any,any> {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.TwoWayConverterImpl<any,any>>;
						public getConvertFromVector(): any<any,any>;
						public constructor(param0: any<any,any>, param1: any<any,any>);
						public getConvertToVector(): any<any,any>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class VectorizedAnimationSpec<V>  extends java.lang.Object {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.VectorizedAnimationSpec<any>>;
						/**
						 * Constructs a new instance of the ly.img.editor.compose.animation_core.VectorizedAnimationSpec<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isInfinite(): boolean;
							getValueFromNanos(param0: number, param1: V, param2: V, param3: V): V;
							getVelocityFromNanos(param0: number, param1: V, param2: V, param3: V): V;
							getDurationNanos(param0: V, param1: V, param2: V): number;
							getEndVelocity(param0: V, param1: V, param2: V): V;
						});
						public constructor();
						public getEndVelocity(param0: V, param1: V, param2: V): V;
						public getValueFromNanos(param0: number, param1: V, param2: V, param3: V): V;
						public getVelocityFromNanos(param0: number, param1: V, param2: V, param3: V): V;
						public isInfinite(): boolean;
						public getDurationNanos(param0: V, param1: V, param2: V): number;
					}
					export module VectorizedAnimationSpec {
						export class DefaultImpls {
							public static class: java.lang.Class<ly.img.editor.compose.animation_core.VectorizedAnimationSpec.DefaultImpls>;
							public static getEndVelocity(param0: ly.img.editor.compose.animation_core.VectorizedAnimationSpec<any>, param1: ly.img.editor.compose.animation_core.AnimationVector, param2: ly.img.editor.compose.animation_core.AnimationVector, param3: ly.img.editor.compose.animation_core.AnimationVector): ly.img.editor.compose.animation_core.AnimationVector;
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
			export module compose {
				export module animation_core {
					export class VectorizedDecayAnimationSpec<V>  extends java.lang.Object {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.VectorizedDecayAnimationSpec<any>>;
						/**
						 * Constructs a new instance of the ly.img.editor.compose.animation_core.VectorizedDecayAnimationSpec<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getAbsVelocityThreshold(): number;
							getValueFromNanos(param0: number, param1: V, param2: V): V;
							getDurationNanos(param0: V, param1: V): number;
							getVelocityFromNanos(param0: number, param1: V, param2: V): V;
							getTargetValue(param0: V, param1: V): V;
						});
						public constructor();
						public getTargetValue(param0: V, param1: V): V;
						public getAbsVelocityThreshold(): number;
						public getDurationNanos(param0: V, param1: V): number;
						public getVelocityFromNanos(param0: number, param1: V, param2: V): V;
						public getValueFromNanos(param0: number, param1: V, param2: V): V;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class VectorizedDurationBasedAnimationSpec<V>  extends ly.img.editor.compose.animation_core.VectorizedFiniteAnimationSpec<any> {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.VectorizedDurationBasedAnimationSpec<any>>;
						/**
						 * Constructs a new instance of the ly.img.editor.compose.animation_core.VectorizedDurationBasedAnimationSpec<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getDurationMillis(): number;
							getDelayMillis(): number;
							getDurationNanos(param0: any, param1: any, param2: any): number;
							isInfinite(): boolean;
							isInfinite(): boolean;
							getValueFromNanos(param0: number, param1: any, param2: any, param3: any): any;
							getVelocityFromNanos(param0: number, param1: any, param2: any, param3: any): any;
							getDurationNanos(param0: any, param1: any, param2: any): number;
							getEndVelocity(param0: any, param1: any, param2: any): any;
						});
						public constructor();
						public getDurationMillis(): number;
						public getDurationNanos(param0: any, param1: any, param2: any): number;
						public getDelayMillis(): number;
						public getValueFromNanos(param0: number, param1: any, param2: any, param3: any): any;
						public getEndVelocity(param0: any, param1: any, param2: any): any;
						public getVelocityFromNanos(param0: number, param1: any, param2: any, param3: any): any;
						public isInfinite(): boolean;
					}
					export module VectorizedDurationBasedAnimationSpec {
						export class DefaultImpls {
							public static class: java.lang.Class<ly.img.editor.compose.animation_core.VectorizedDurationBasedAnimationSpec.DefaultImpls>;
							public static getDurationNanos(param0: ly.img.editor.compose.animation_core.VectorizedDurationBasedAnimationSpec<any>, param1: ly.img.editor.compose.animation_core.AnimationVector, param2: ly.img.editor.compose.animation_core.AnimationVector, param3: ly.img.editor.compose.animation_core.AnimationVector): number;
							public static isInfinite(param0: ly.img.editor.compose.animation_core.VectorizedDurationBasedAnimationSpec<any>): boolean;
							public static getEndVelocity(param0: ly.img.editor.compose.animation_core.VectorizedDurationBasedAnimationSpec<any>, param1: ly.img.editor.compose.animation_core.AnimationVector, param2: ly.img.editor.compose.animation_core.AnimationVector, param3: ly.img.editor.compose.animation_core.AnimationVector): ly.img.editor.compose.animation_core.AnimationVector;
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
			export module compose {
				export module animation_core {
					export class VectorizedFiniteAnimationSpec<V>  extends ly.img.editor.compose.animation_core.VectorizedAnimationSpec<any> {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.VectorizedFiniteAnimationSpec<any>>;
						/**
						 * Constructs a new instance of the ly.img.editor.compose.animation_core.VectorizedFiniteAnimationSpec<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isInfinite(): boolean;
							isInfinite(): boolean;
							getValueFromNanos(param0: number, param1: any, param2: any, param3: any): any;
							getVelocityFromNanos(param0: number, param1: any, param2: any, param3: any): any;
							getDurationNanos(param0: any, param1: any, param2: any): number;
							getEndVelocity(param0: any, param1: any, param2: any): any;
						});
						public constructor();
						public getDurationNanos(param0: any, param1: any, param2: any): number;
						public getValueFromNanos(param0: number, param1: any, param2: any, param3: any): any;
						public getEndVelocity(param0: any, param1: any, param2: any): any;
						public getVelocityFromNanos(param0: number, param1: any, param2: any, param3: any): any;
						public isInfinite(): boolean;
					}
					export module VectorizedFiniteAnimationSpec {
						export class DefaultImpls {
							public static class: java.lang.Class<ly.img.editor.compose.animation_core.VectorizedFiniteAnimationSpec.DefaultImpls>;
							public static getEndVelocity(param0: ly.img.editor.compose.animation_core.VectorizedFiniteAnimationSpec<any>, param1: ly.img.editor.compose.animation_core.AnimationVector, param2: ly.img.editor.compose.animation_core.AnimationVector, param3: ly.img.editor.compose.animation_core.AnimationVector): ly.img.editor.compose.animation_core.AnimationVector;
							public static isInfinite(param0: ly.img.editor.compose.animation_core.VectorizedFiniteAnimationSpec<any>): boolean;
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
			export module compose {
				export module animation_core {
					export class VectorizedFloatAnimationSpec<V>  extends ly.img.editor.compose.animation_core.VectorizedFiniteAnimationSpec<any> {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.VectorizedFloatAnimationSpec<any>>;
						public static $stable: number;
						public getDurationNanos(param0: any, param1: any, param2: any): number;
						public getValueFromNanos(param0: number, param1: any, param2: any, param3: any): any;
						public getEndVelocity(param0: any, param1: any, param2: any): any;
						public getVelocityFromNanos(param0: number, param1: any, param2: any, param3: any): any;
						public constructor(param0: ly.img.editor.compose.animation_core.Animations);
						public constructor(param0: androidx.compose.animation.core.FloatAnimationSpec);
						public isInfinite(): boolean;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class VectorizedFloatDecaySpec<V>  extends ly.img.editor.compose.animation_core.VectorizedDecayAnimationSpec<any> {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.VectorizedFloatDecaySpec<any>>;
						public getValueFromNanos(param0: number, param1: any, param2: any): any;
						public constructor(param0: androidx.compose.animation.core.FloatDecayAnimationSpec);
						public getAbsVelocityThreshold(): number;
						public getFloatDecaySpec(): androidx.compose.animation.core.FloatDecayAnimationSpec;
						public getVelocityFromNanos(param0: number, param1: any, param2: any): any;
						public getDurationNanos(param0: any, param1: any): number;
						public getTargetValue(param0: any, param1: any): any;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class VectorizedInfiniteRepeatableSpec<V>  extends ly.img.editor.compose.animation_core.VectorizedAnimationSpec<any> {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.VectorizedInfiniteRepeatableSpec<any>>;
						public static $stable: number;
						public getDurationNanos$editor_experimental_release(): number;
						public getDurationNanos(param0: any, param1: any, param2: any): number;
						public getValueFromNanos(param0: number, param1: any, param2: any, param3: any): any;
						public getEndVelocity(param0: any, param1: any, param2: any): any;
						public getVelocityFromNanos(param0: number, param1: any, param2: any, param3: any): any;
						public isInfinite(): boolean;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class VectorizedKeyframesSpec<V>  extends ly.img.editor.compose.animation_core.VectorizedDurationBasedAnimationSpec<any> {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.VectorizedKeyframesSpec<any>>;
						public static $stable: number;
						public getDurationMillis(): number;
						public getDurationNanos(param0: any, param1: any, param2: any): number;
						public getDelayMillis(): number;
						public getValueFromNanos(param0: number, param1: any, param2: any, param3: any): any;
						public getEndVelocity(param0: any, param1: any, param2: any): any;
						public getVelocityFromNanos(param0: number, param1: any, param2: any, param3: any): any;
						public constructor(param0: java.util.Map<java.lang.Integer,any>, param1: number, param2: number);
						public isInfinite(): boolean;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class VectorizedRepeatableSpec<V>  extends ly.img.editor.compose.animation_core.VectorizedFiniteAnimationSpec<any> {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.VectorizedRepeatableSpec<any>>;
						public static $stable: number;
						public getDurationNanos$editor_experimental_release(): number;
						public getDurationNanos(param0: any, param1: any, param2: any): number;
						public getValueFromNanos(param0: number, param1: any, param2: any, param3: any): any;
						public getEndVelocity(param0: any, param1: any, param2: any): any;
						public getVelocityFromNanos(param0: number, param1: any, param2: any, param3: any): any;
						public isInfinite(): boolean;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class VectorizedSnapSpec<V>  extends ly.img.editor.compose.animation_core.VectorizedDurationBasedAnimationSpec<any> {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.VectorizedSnapSpec<any>>;
						public static $stable: number;
						public constructor();
						public getDurationMillis(): number;
						public getDurationNanos(param0: any, param1: any, param2: any): number;
						public getDelayMillis(): number;
						public getValueFromNanos(param0: number, param1: any, param2: any, param3: any): any;
						public getEndVelocity(param0: any, param1: any, param2: any): any;
						public constructor(param0: number);
						public getVelocityFromNanos(param0: number, param1: any, param2: any, param3: any): any;
						public isInfinite(): boolean;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class VectorizedSpringSpec<V>  extends ly.img.editor.compose.animation_core.VectorizedFiniteAnimationSpec<any> {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.VectorizedSpringSpec<any>>;
						public static $stable: number;
						public getDurationNanos(param0: any, param1: any, param2: any): number;
						public getEndVelocity(param0: any, param1: any, param2: any): any;
						public getValueFromNanos(param0: number, param1: any, param2: any, param3: any): any;
						public getVelocityFromNanos(param0: number, param1: any, param2: any, param3: any): any;
						public constructor(param0: number, param1: number, param2: any);
						public getDampingRatio(): number;
						public getStiffness(): number;
						public isInfinite(): boolean;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module animation_core {
					export class VectorizedTweenSpec<V>  extends ly.img.editor.compose.animation_core.VectorizedDurationBasedAnimationSpec<any> {
						public static class: java.lang.Class<ly.img.editor.compose.animation_core.VectorizedTweenSpec<any>>;
						public static $stable: number;
						public getEasing(): androidx.compose.animation.core.Easing;
						public constructor();
						public getDurationMillis(): number;
						public getDurationNanos(param0: any, param1: any, param2: any): number;
						public getDelayMillis(): number;
						public getValueFromNanos(param0: number, param1: any, param2: any, param3: any): any;
						public getEndVelocity(param0: any, param1: any, param2: any): any;
						public getVelocityFromNanos(param0: number, param1: any, param2: any, param3: any): any;
						public constructor(param0: number, param1: number, param2: androidx.compose.animation.core.Easing);
						public isInfinite(): boolean;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module bottomsheet {
					export class AnchorChangeHandler<T>  extends java.lang.Object {
						public static class: java.lang.Class<ly.img.editor.compose.bottomsheet.AnchorChangeHandler<any>>;
						/**
						 * Constructs a new instance of the ly.img.editor.compose.bottomsheet.AnchorChangeHandler<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAnchorsChanged(param0: T, param1: java.util.Map<T,java.lang.Float>, param2: java.util.Map<T,java.lang.Float>): void;
						});
						public constructor();
						public onAnchorsChanged(param0: T, param1: java.util.Map<T,java.lang.Float>, param2: java.util.Map<T,java.lang.Float>): void;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module bottomsheet {
					export class ModalBottomSheetDefaults {
						public static class: java.lang.Class<ly.img.editor.compose.bottomsheet.ModalBottomSheetDefaults>;
						public static INSTANCE: ly.img.editor.compose.bottomsheet.ModalBottomSheetDefaults;
						public static $stable: number;
						public "getElevation-D9Ej5fM"(): number;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module bottomsheet {
					export module ModalBottomSheetKt {
export module  {
						export class WhenMappings {
							public static class: java.lang.Class<ly.img.editor.compose.bottomsheet.ModalBottomSheetKt.WhenMappings>;
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
			export module compose {
				export module bottomsheet {
					export class ModalBottomSheetState {
						public static class: java.lang.Class<ly.img.editor.compose.bottomsheet.ModalBottomSheetState>;
						public static $stable: number;
						public animateTo(param0: ly.img.editor.compose.bottomsheet.ModalBottomSheetValue, param1: number, param2: any): any;
						public getLastVelocity$editor_experimental_release(): number;
						public getAnimationSpec$editor_experimental_release(): androidx.compose.animation.core.AnimationSpec<java.lang.Float>;
						public getCurrentValue(): ly.img.editor.compose.bottomsheet.ModalBottomSheetValue;
						public snapTo(param0: ly.img.editor.compose.bottomsheet.ModalBottomSheetValue, param1: any): any;
						public show(param0: any): any;
						/** @deprecated */
						public constructor(param0: ly.img.editor.compose.bottomsheet.ModalBottomSheetValue, param1: androidx.compose.animation.core.AnimationSpec<java.lang.Float>, param2: boolean, param3: any<any,java.lang.Boolean>);
						public getHasHalfExpandedState$editor_experimental_release(): boolean;
						public hide(param0: any): any;
						public getSwipeableState(): ly.img.editor.compose.bottomsheet.SwipeableV2State<ly.img.editor.compose.bottomsheet.ModalBottomSheetValue>;
						public isSkipHalfExpanded$editor_experimental_release(): boolean;
						public expand(param0: any): any;
						public isVisible(): boolean;
						public getTargetValue(): ly.img.editor.compose.bottomsheet.ModalBottomSheetValue;
						public isAnimationRunning$editor_experimental_release(): boolean;
						public requireOffset$editor_experimental_release(): number;
						public halfExpand(param0: any): any;
					}
					export module ModalBottomSheetState {
						export class Companion {
							public static class: java.lang.Class<ly.img.editor.compose.bottomsheet.ModalBottomSheetState.Companion>;
							public Saver(param0: androidx.compose.animation.core.AnimationSpec<java.lang.Float>, param1: any<any,java.lang.Boolean>, param2: boolean): androidx.compose.runtime.saveable.Saver<ly.img.editor.compose.bottomsheet.ModalBottomSheetState,any>;
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
			export module compose {
				export module bottomsheet {
					export class ModalBottomSheetValue {
						public static class: java.lang.Class<ly.img.editor.compose.bottomsheet.ModalBottomSheetValue>;
						public static Hidden: ly.img.editor.compose.bottomsheet.ModalBottomSheetValue;
						public static Expanded: ly.img.editor.compose.bottomsheet.ModalBottomSheetValue;
						public static HalfExpanded: ly.img.editor.compose.bottomsheet.ModalBottomSheetValue;
						public static valueOf(param0: string): ly.img.editor.compose.bottomsheet.ModalBottomSheetValue;
						public static getEntries(): any;
						public static values(): androidNative.Array<ly.img.editor.compose.bottomsheet.ModalBottomSheetValue>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module bottomsheet {
					export class SwipeAnchorsModifier {
						public static class: java.lang.Class<ly.img.editor.compose.bottomsheet.SwipeAnchorsModifier>;
						public "measure-3p2s80s"(param0: androidx.compose.ui.layout.MeasureScope, param1: androidx.compose.ui.layout.Measurable, param2: number): androidx.compose.ui.layout.MeasureResult;
						public constructor(param0: any<any,any>, param1: any<any,any>, param2: any<any,any>);
						public "onRemeasured-ozmzZPI"(param0: number): void;
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
			export module compose {
				export module bottomsheet {
					export class SwipeableDefaults {
						public static class: java.lang.Class<ly.img.editor.compose.bottomsheet.SwipeableDefaults>;
						public static INSTANCE: ly.img.editor.compose.bottomsheet.SwipeableDefaults;
						public static $stable: number;
						public getAnimationSpec(): androidx.compose.animation.core.SpringSpec<java.lang.Float>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module bottomsheet {
					export class SwipeableV2Defaults {
						public static class: java.lang.Class<ly.img.editor.compose.bottomsheet.SwipeableV2Defaults>;
						public static INSTANCE: ly.img.editor.compose.bottomsheet.SwipeableV2Defaults;
						public getPositionalThreshold(): any<androidx.compose.ui.unit.Density,java.lang.Float,java.lang.Float>;
						public ReconcileAnimationOnAnchorChangeHandler$editor_experimental_release(param0: ly.img.editor.compose.bottomsheet.SwipeableV2State<any>, param1: any, param2: any): ly.img.editor.compose.bottomsheet.AnchorChangeHandler<any>;
						public getAnimationSpec(): androidx.compose.animation.core.SpringSpec<java.lang.Float>;
						public "getVelocityThreshold-D9Ej5fM"(): number;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module bottomsheet {
					export class SwipeableV2State<T>  extends java.lang.Object {
						public static class: java.lang.Class<ly.img.editor.compose.bottomsheet.SwipeableV2State<any>>;
						public static $stable: number;
						public isAnimationRunning(): boolean;
						public getDensity$editor_experimental_release(): androidx.compose.ui.unit.Density;
						public getAnimationSpec$editor_experimental_release(): androidx.compose.animation.core.AnimationSpec<java.lang.Float>;
						public "getVelocityThreshold-D9Ej5fM$editor_experimental_release"(): number;
						public getTargetValue(): T;
						public animateTo(param0: T, param1: number, param2: any): any;
						public getLastVelocity(): number;
						public getMinOffset(): number;
						public getCurrentValue(): T;
						public setDensity$editor_experimental_release(param0: androidx.compose.ui.unit.Density): void;
						public updateAnchors$editor_experimental_release(param0: java.util.Map<T,java.lang.Float>): boolean;
						public getAnchors$editor_experimental_release(): java.util.Map<T,java.lang.Float>;
						public hasAnchorForValue(param0: T): boolean;
						public snapTo(param0: T, param1: any): any;
						public settle(param0: number, param1: any): any;
						public getMaxOffset(): number;
						public dispatchRawDelta(param0: number): number;
						public getConfirmValueChange$editor_experimental_release(): any<T,java.lang.Boolean>;
						public getProgress(): number;
						public getOffset(): java.lang.Float;
						public requireOffset(): number;
						public getDraggableState$editor_experimental_release(): androidx.compose.foundation.gestures.DraggableState;
						public getPositionalThreshold$editor_experimental_release(): any<androidx.compose.ui.unit.Density,java.lang.Float,java.lang.Float>;
						public setAnchors$editor_experimental_release(param0: java.util.Map<T,java.lang.Float>): void;
					}
					export module SwipeableV2State {
						export class Companion {
							public static class: java.lang.Class<ly.img.editor.compose.bottomsheet.SwipeableV2State.Companion>;
							public "Saver-eqLRuRQ"(param0: androidx.compose.animation.core.AnimationSpec, param1: any, param2: any, param3: number): androidx.compose.runtime.saveable.Saver;
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
			export module compose {
				export module foundation {
					export class AndroidEdgeEffectOverscrollEffect extends ly.img.editor.compose.foundation.OverscrollEffect {
						public static class: java.lang.Class<ly.img.editor.compose.foundation.AndroidEdgeEffectOverscrollEffect>;
						public getInvalidationEnabled$editor_experimental_release(): boolean;
						public "applyToScroll-Rhakbz0"(param0: number, param1: number, param2: any<any,androidx.compose.ui.geometry.Offset>): number;
						public isInProgress(): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: ly.img.editor.compose.foundation.OverscrollConfiguration);
						public "applyToFling-BMRW4eQ"(param0: number, param1: any<any,any,any>, param2: any): any;
						public getEffectModifier(): androidx.compose.ui.Modifier;
						public setInvalidationEnabled$editor_experimental_release(param0: boolean): void;
						public drawOverscroll(param0: androidx.compose.ui.graphics.drawscope.DrawScope): void;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module foundation {
					export class Api31Impl {
						public static class: java.lang.Class<ly.img.editor.compose.foundation.Api31Impl>;
						public static INSTANCE: ly.img.editor.compose.foundation.Api31Impl;
						public onPullDistance(param0: globalAndroid.widget.EdgeEffect, param1: number, param2: number): number;
						public getDistance(param0: globalAndroid.widget.EdgeEffect): number;
						public create(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): globalAndroid.widget.EdgeEffect;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module foundation {
					export class DrawOverscrollModifier {
						public static class: java.lang.Class<ly.img.editor.compose.foundation.DrawOverscrollModifier>;
						public draw(param0: androidx.compose.ui.graphics.drawscope.ContentDrawScope): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public constructor(param0: ly.img.editor.compose.foundation.AndroidEdgeEffectOverscrollEffect, param1: any<any,any>);
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
			export module compose {
				export module foundation {
					export class EdgeEffectCompat {
						public static class: java.lang.Class<ly.img.editor.compose.foundation.EdgeEffectCompat>;
						public static INSTANCE: ly.img.editor.compose.foundation.EdgeEffectCompat;
						public onPullDistanceCompat(param0: globalAndroid.widget.EdgeEffect, param1: number, param2: number): number;
						public onAbsorbCompat(param0: globalAndroid.widget.EdgeEffect, param1: number): void;
						public onReleaseWithOppositeDelta(param0: globalAndroid.widget.EdgeEffect, param1: number): void;
						public getDistanceCompat(param0: globalAndroid.widget.EdgeEffect): number;
						public create(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): globalAndroid.widget.EdgeEffect;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module foundation {
					export class FixedMotionDurationScale {
						public static class: java.lang.Class<ly.img.editor.compose.foundation.FixedMotionDurationScale>;
						public static INSTANCE: ly.img.editor.compose.foundation.FixedMotionDurationScale;
						public fold(param0: any, param1: any): any;
						public get(param0: any): any;
						public getScaleFactor(): number;
						public minusKey(param0: any): any;
						public plus(param0: any): any;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module foundation {
					export class FocusedBoundsModifier {
						public static class: java.lang.Class<ly.img.editor.compose.foundation.FocusedBoundsModifier>;
						public constructor();
						public onGloballyPositioned(param0: androidx.compose.ui.layout.LayoutCoordinates): void;
						public onModifierLocalsUpdated(param0: androidx.compose.ui.modifier.ModifierLocalReadScope): void;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module foundation {
					export class FocusedBoundsObserverModifier extends java.lang.Object {
						public static class: java.lang.Class<ly.img.editor.compose.foundation.FocusedBoundsObserverModifier>;
						public constructor(param0: any<any,any>);
						public invoke(param0: androidx.compose.ui.layout.LayoutCoordinates): void;
						public getKey(): androidx.compose.ui.modifier.ProvidableModifierLocal<any<androidx.compose.ui.layout.LayoutCoordinates,any>>;
						public onModifierLocalsUpdated(param0: androidx.compose.ui.modifier.ModifierLocalReadScope): void;
						public getValue(): any<androidx.compose.ui.layout.LayoutCoordinates,any>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module foundation {
					export class GlowEdgeEffectCompat {
						public static class: java.lang.Class<ly.img.editor.compose.foundation.GlowEdgeEffectCompat>;
						public onPull(param0: number, param1: number): void;
						public onRelease(): void;
						public onPull(param0: number): void;
						public constructor(param0: globalAndroid.content.Context);
						public onAbsorb(param0: number): void;
						public releaseWithOppositeDelta(param0: number): void;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module foundation {
					export class MarqueeAnimationMode {
						public static class: java.lang.Class<ly.img.editor.compose.foundation.MarqueeAnimationMode>;
						public static "equals-impl"(param0: number, param1: any): boolean;
						public static "equals-impl0"(param0: number, param1: number): boolean;
						public static "toString-impl"(param0: number): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static "hashCode-impl"(param0: number): number;
						public toString(): string;
					}
					export module MarqueeAnimationMode {
						export class Companion {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.MarqueeAnimationMode.Companion>;
							public "getWhileFocused-uaELbmw"(): number;
							public "getImmediately-uaELbmw"(): number;
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
			export module compose {
				export module foundation {
					export class MarqueeModifier {
						public static class: java.lang.Class<ly.img.editor.compose.foundation.MarqueeModifier>;
						public "setAnimationMode-jwLHK3Y"(param0: number): void;
						public getSpacing(): ly.img.editor.compose.foundation.MarqueeSpacing;
						public "getAnimationMode-uaELbmw"(): number;
						public draw(param0: androidx.compose.ui.graphics.drawscope.ContentDrawScope): void;
						public setSpacing(param0: ly.img.editor.compose.foundation.MarqueeSpacing): void;
						public onFocusEvent(param0: androidx.compose.ui.focus.FocusState): void;
						public runAnimation(param0: any): any;
						public "measure-3p2s80s"(param0: androidx.compose.ui.layout.MeasureScope, param1: androidx.compose.ui.layout.Measurable, param2: number): androidx.compose.ui.layout.MeasureResult;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module foundation {
					export class MarqueeSpacing {
						public static class: java.lang.Class<ly.img.editor.compose.foundation.MarqueeSpacing>;
						/**
						 * Constructs a new instance of the ly.img.editor.compose.foundation.MarqueeSpacing interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							calculateSpacing(param0: androidx.compose.ui.unit.Density, param1: number, param2: number): number;
							"<clinit>"(): void;
						});
						public constructor();
						public calculateSpacing(param0: androidx.compose.ui.unit.Density, param1: number, param2: number): number;
					}
					export module MarqueeSpacing {
						export class Companion {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.MarqueeSpacing.Companion>;
							public fractionOfContainer(param0: number): ly.img.editor.compose.foundation.MarqueeSpacing;
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
			export module compose {
				export module foundation {
					export class NoOpOverscrollEffect extends ly.img.editor.compose.foundation.OverscrollEffect {
						public static class: java.lang.Class<ly.img.editor.compose.foundation.NoOpOverscrollEffect>;
						public static INSTANCE: ly.img.editor.compose.foundation.NoOpOverscrollEffect;
						public "applyToScroll-Rhakbz0"(param0: number, param1: number, param2: any<any,androidx.compose.ui.geometry.Offset>): number;
						public isInProgress(): boolean;
						public "applyToFling-BMRW4eQ"(param0: number, param1: any<any,any,any>, param2: any): any;
						public getEffectModifier(): androidx.compose.ui.Modifier;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module foundation {
					export class OverscrollConfiguration {
						public static class: java.lang.Class<ly.img.editor.compose.foundation.OverscrollConfiguration>;
						public static $stable: number;
						public getDrawPadding(): androidx.compose.foundation.layout.PaddingValues;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public "getGlowColor-0d7_KjU"(): number;
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
			export module compose {
				export module foundation {
					export class OverscrollEffect {
						public static class: java.lang.Class<ly.img.editor.compose.foundation.OverscrollEffect>;
						/**
						 * Constructs a new instance of the ly.img.editor.compose.foundation.OverscrollEffect interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							"applyToScroll-Rhakbz0"(param0: number, param1: number, param2: any<any,androidx.compose.ui.geometry.Offset>): number;
							"applyToFling-BMRW4eQ"(param0: number, param1: any<any,any,any>, param2: any): any;
							isInProgress(): boolean;
							getEffectModifier(): androidx.compose.ui.Modifier;
						});
						public constructor();
						public "applyToScroll-Rhakbz0"(param0: number, param1: number, param2: any<any,androidx.compose.ui.geometry.Offset>): number;
						public isInProgress(): boolean;
						public "applyToFling-BMRW4eQ"(param0: number, param1: any<any,any,any>, param2: any): any;
						public getEffectModifier(): androidx.compose.ui.Modifier;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module foundation {
					export module gestures {
						export class AndroidConfig extends ly.img.editor.compose.foundation.gestures.ScrollConfig {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.AndroidConfig>;
							public static INSTANCE: ly.img.editor.compose.foundation.gestures.AndroidConfig;
							public "calculateMouseWheelScroll-8xgXZGE"(param0: androidx.compose.ui.unit.Density, param1: androidx.compose.ui.input.pointer.PointerEvent, param2: number): number;
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
			export module compose {
				export module foundation {
					export module gestures {
						export class ContentInViewModifier extends ly.img.editor.compose.foundation.relocation.BringIntoViewResponder {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.ContentInViewModifier>;
							public getModifier(): androidx.compose.ui.Modifier;
							public bringChildIntoView(param0: any, param1: any): any;
							public "onRemeasured-ozmzZPI"(param0: number): void;
							public calculateRectForParent(param0: androidx.compose.ui.geometry.Rect): androidx.compose.ui.geometry.Rect;
							public onPlaced(param0: androidx.compose.ui.layout.LayoutCoordinates): void;
							public constructor(param0: kotlinx.coroutines.CoroutineScope, param1: androidx.compose.foundation.gestures.Orientation, param2: androidx.compose.foundation.gestures.ScrollableState, param3: boolean);
						}
						export module ContentInViewModifier {
							export class Request {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.ContentInViewModifier.Request>;
								public toString(): string;
								public constructor(param0: any, param1: kotlinx.coroutines.CancellableContinuation<any>);
								public getCurrentBounds(): any;
								public getContinuation(): kotlinx.coroutines.CancellableContinuation<any>;
							}
							export class WhenMappings {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.ContentInViewModifier.WhenMappings>;
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
			export module compose {
				export module foundation {
					export module gestures {
						export class DefaultDraggableState extends ly.img.editor.compose.foundation.gestures.DraggableState {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.DefaultDraggableState>;
							public getOnDelta(): any<java.lang.Float,any>;
							public constructor(param0: any<any,any>);
							public drag(param0: androidx.compose.foundation.MutatePriority, param1: any<any,any,any>, param2: any): any;
							public dispatchRawDelta(param0: number): void;
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
			export module compose {
				export module foundation {
					export module gestures {
						export class DefaultFlingBehavior {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.DefaultFlingBehavior>;
							public getLastAnimationCycleCount(): number;
							public constructor(param0: androidx.compose.animation.core.DecayAnimationSpec<java.lang.Float>, param1: androidx.compose.ui.MotionDurationScale);
							public setLastAnimationCycleCount(param0: number): void;
							public performFling(param0: androidx.compose.foundation.gestures.ScrollScope, param1: number, param2: any): any;
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
			export module compose {
				export module foundation {
					export module gestures {
						export abstract class DragEvent {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.DragEvent>;
						}
						export module DragEvent {
							export class DragCancelled extends ly.img.editor.compose.foundation.gestures.DragEvent {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.DragEvent.DragCancelled>;
								public static INSTANCE: ly.img.editor.compose.foundation.gestures.DragEvent.DragCancelled;
								public static $stable: number;
							}
							export class DragDelta extends ly.img.editor.compose.foundation.gestures.DragEvent {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.DragEvent.DragDelta>;
								public static $stable: number;
								public "getDelta-F1C5BW0"(): number;
							}
							export class DragStarted extends ly.img.editor.compose.foundation.gestures.DragEvent {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.DragEvent.DragStarted>;
								public static $stable: number;
								public "getStartPoint-F1C5BW0"(): number;
							}
							export class DragStopped extends ly.img.editor.compose.foundation.gestures.DragEvent {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.DragEvent.DragStopped>;
								public static $stable: number;
								public "getVelocity-9UxMQ8M"(): number;
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
			export module compose {
				export module foundation {
					export module gestures {
						export class DragLogic {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.DragLogic>;
							public getOnDragStopped(): any<kotlinx.coroutines.CoroutineScope,androidx.compose.ui.unit.Velocity,any,any>;
							public getOnDragStarted(): any<kotlinx.coroutines.CoroutineScope,androidx.compose.ui.geometry.Offset,any,any>;
							public getInteractionSource(): androidx.compose.foundation.interaction.MutableInteractionSource;
							public getDragStartInteraction(): androidx.compose.runtime.MutableState<androidx.compose.foundation.interaction.DragInteraction.Start>;
							public processDragStart(param0: kotlinx.coroutines.CoroutineScope, param1: ly.img.editor.compose.foundation.gestures.DragEvent.DragStarted, param2: any): any;
							public constructor(param0: any<any,any,any,any>, param1: any<any,any,any,any>, param2: androidx.compose.runtime.MutableState<androidx.compose.foundation.interaction.DragInteraction.Start>, param3: androidx.compose.foundation.interaction.MutableInteractionSource);
							public processDragStop(param0: kotlinx.coroutines.CoroutineScope, param1: ly.img.editor.compose.foundation.gestures.DragEvent.DragStopped, param2: any): any;
							public processDragCancel(param0: kotlinx.coroutines.CoroutineScope, param1: any): any;
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
			export module compose {
				export module foundation {
					export module gestures {
						export class DragScope {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.DragScope>;
							/**
							 * Constructs a new instance of the ly.img.editor.compose.foundation.gestures.DragScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								dragBy(param0: number): void;
							});
							public constructor();
							public dragBy(param0: number): void;
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
			export module compose {
				export module foundation {
					export module gestures {
						export class DraggableState {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.DraggableState>;
							/**
							 * Constructs a new instance of the ly.img.editor.compose.foundation.gestures.DraggableState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								drag(param0: androidx.compose.foundation.MutatePriority, param1: any<any,any,any>, param2: any): any;
								dispatchRawDelta(param0: number): void;
							});
							public constructor();
							public drag(param0: androidx.compose.foundation.MutatePriority, param1: any<any,any,any>, param2: any): any;
							public dispatchRawDelta(param0: number): void;
						}
						export module DraggableState {
							export class DefaultImpls {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.DraggableState.DefaultImpls>;
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
			export module compose {
				export module foundation {
					export module gestures {
						export class ModifierLocalScrollableContainerProvider extends androidx.compose.ui.modifier.ModifierLocalProvider<java.lang.Boolean> {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.ModifierLocalScrollableContainerProvider>;
							public static INSTANCE: ly.img.editor.compose.foundation.gestures.ModifierLocalScrollableContainerProvider;
							public getValue(): java.lang.Boolean;
							public getKey(): androidx.compose.ui.modifier.ProvidableModifierLocal<java.lang.Boolean>;
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
			export module compose {
				export module foundation {
					export module gestures {
						export class PointerDirectionConfig {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.PointerDirectionConfig>;
							/**
							 * Constructs a new instance of the ly.img.editor.compose.foundation.gestures.PointerDirectionConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								"mainAxisDelta-k-4lQ0M"(param0: number): number;
								"crossAxisDelta-k-4lQ0M"(param0: number): number;
								"offsetFromChanges-dBAh8RU"(param0: number, param1: number): number;
							});
							public constructor();
							public "mainAxisDelta-k-4lQ0M"(param0: number): number;
							public "crossAxisDelta-k-4lQ0M"(param0: number): number;
							public "offsetFromChanges-dBAh8RU"(param0: number, param1: number): number;
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
			export module compose {
				export module foundation {
					export module gestures {
						export class PressGestureScope {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.PressGestureScope>;
							/**
							 * Constructs a new instance of the ly.img.editor.compose.foundation.gestures.PressGestureScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								awaitRelease(param0: any): any;
								tryAwaitRelease(param0: any): any;
							});
							public constructor();
							public awaitRelease(param0: any): any;
							public tryAwaitRelease(param0: any): any;
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
			export module compose {
				export module foundation {
					export module gestures {
						export class PressGestureScopeImpl extends ly.img.editor.compose.foundation.gestures.PressGestureScope {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.PressGestureScopeImpl>;
							public cancel(): void;
							public "toSp-0xMU5do"(param0: number): number;
							public "toSp-kPz2Gy4"(param0: number): number;
							public awaitRelease(param0: any): any;
							public getFontScale(): number;
							public "roundToPx--R2X_6o"(param0: number): number;
							public toRect(param0: androidx.compose.ui.unit.DpRect): androidx.compose.ui.geometry.Rect;
							public "toDpSize-k-rfVVM"(param0: number): number;
							public getDensity(): number;
							public release(): void;
							public "toDp-u2uoSUM"(param0: number): number;
							public constructor(param0: androidx.compose.ui.unit.Density);
							public tryAwaitRelease(param0: any): any;
							public reset(param0: any): any;
							public "toPx-0680j_4"(param0: number): number;
							public "toPx--R2X_6o"(param0: number): number;
							public "toSize-XkaWNTQ"(param0: number): number;
							public "toDp-GaN1DYA"(param0: number): number;
							public "roundToPx-0680j_4"(param0: number): number;
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
			export module compose {
				export module foundation {
					export module gestures {
						export class ScrollConfig {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.ScrollConfig>;
							/**
							 * Constructs a new instance of the ly.img.editor.compose.foundation.gestures.ScrollConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								"calculateMouseWheelScroll-8xgXZGE"(param0: androidx.compose.ui.unit.Density, param1: androidx.compose.ui.input.pointer.PointerEvent, param2: number): number;
							});
							public constructor();
							public "calculateMouseWheelScroll-8xgXZGE"(param0: androidx.compose.ui.unit.Density, param1: androidx.compose.ui.input.pointer.PointerEvent, param2: number): number;
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
			export module compose {
				export module foundation {
					export module gestures {
						export class ScrollDraggableState implements ly.img.editor.compose.foundation.gestures.DraggableState, ly.img.editor.compose.foundation.gestures.DragScope {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.ScrollDraggableState>;
							public getLatestScrollScope(): androidx.compose.foundation.gestures.ScrollScope;
							public setLatestScrollScope(param0: androidx.compose.foundation.gestures.ScrollScope): void;
							public getScrollLogic(): androidx.compose.runtime.State<ly.img.editor.compose.foundation.gestures.ScrollingLogic>;
							public constructor(param0: androidx.compose.runtime.State<ly.img.editor.compose.foundation.gestures.ScrollingLogic>);
							public dragBy(param0: number): void;
							public drag(param0: androidx.compose.foundation.MutatePriority, param1: any<any,any,any>, param2: any): any;
							public dispatchRawDelta(param0: number): void;
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
			export module compose {
				export module foundation {
					export module gestures {
						export class ScrollableDefaults {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.ScrollableDefaults>;
							public static INSTANCE: ly.img.editor.compose.foundation.gestures.ScrollableDefaults;
							public static $stable: number;
							public flingBehavior(param0: androidx.compose.runtime.Composer, param1: number): androidx.compose.foundation.gestures.FlingBehavior;
							public reverseDirection(param0: androidx.compose.ui.unit.LayoutDirection, param1: androidx.compose.foundation.gestures.Orientation, param2: boolean): boolean;
							public overscrollEffect(param0: androidx.compose.runtime.Composer, param1: number): ly.img.editor.compose.foundation.OverscrollEffect;
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
			export module compose {
				export module foundation {
					export module gestures {
						export class ScrollingLogic {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.ScrollingLogic>;
							public "toOffset-tuRUvjQ"(param0: number): number;
							public "doFlingAnimation-QWom1Mo"(param0: number, param1: any): any;
							public "singleAxisOffset-MK-Hz9U"(param0: number): number;
							public getReverseDirection(): boolean;
							public "reverseIfNeeded-MK-Hz9U"(param0: number): number;
							public "onDragStopped-sF-c-tU"(param0: number, param1: any): any;
							public getNestedScrollDispatcher(): androidx.compose.runtime.State<androidx.compose.ui.input.nestedscroll.NestedScrollDispatcher>;
							public shouldScrollImmediately(): boolean;
							public registerNestedFling(param0: boolean): void;
							public getOrientation(): androidx.compose.foundation.gestures.Orientation;
							public "toFloat-k-4lQ0M"(param0: number): number;
							public getScrollableState(): androidx.compose.foundation.gestures.ScrollableState;
							public "toFloat-TH1AsA0"(param0: number): number;
							public "performRawScroll-MK-Hz9U"(param0: number): number;
							public "update-QWom1Mo"(param0: number, param1: number): number;
							public constructor(param0: androidx.compose.foundation.gestures.Orientation, param1: boolean, param2: androidx.compose.runtime.State<androidx.compose.ui.input.nestedscroll.NestedScrollDispatcher>, param3: androidx.compose.foundation.gestures.ScrollableState, param4: androidx.compose.foundation.gestures.FlingBehavior, param5: ly.img.editor.compose.foundation.OverscrollEffect);
							public getFlingBehavior(): androidx.compose.foundation.gestures.FlingBehavior;
							public "dispatchScroll-3eAAhYA"(param0: androidx.compose.foundation.gestures.ScrollScope, param1: number, param2: number): number;
							public getOverscrollEffect(): ly.img.editor.compose.foundation.OverscrollEffect;
							public "singleAxisVelocity-AH228Gc"(param0: number): number;
							public reverseIfNeeded(param0: number): number;
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
			export module compose {
				export module foundation {
					export module gestures {
						export class UpdatableAnimationState {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.UpdatableAnimationState>;
							public static VisibilityThreshold: number;
							public constructor();
							public animateToZero(param0: any<any,any>, param1: any, param2: any): any;
							public setValue(param0: number): void;
							public getValue(): number;
						}
						export module UpdatableAnimationState {
							export class Companion {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.UpdatableAnimationState.Companion>;
								public getZeroVector(): androidx.compose.animation.core.AnimationVector1D;
								public getRebasableAnimationSpec(): androidx.compose.animation.core.VectorizedSpringSpec<androidx.compose.animation.core.AnimationVector1D>;
								public isZeroish(param0: number): boolean;
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
			export module compose {
				export module foundation {
					export module gestures {
						export module snapping {
							export class AnimationResult<T, V>  extends java.lang.Object {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.snapping.AnimationResult<any,any>>;
								public component1(): T;
								public getRemainingOffset(): T;
								public component2(): androidx.compose.animation.core.AnimationState<T,V>;
								public getCurrentAnimationState(): androidx.compose.animation.core.AnimationState<T,V>;
								public constructor(param0: T, param1: androidx.compose.animation.core.AnimationState<T,V>);
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
			export module compose {
				export module foundation {
					export module gestures {
						export module snapping {
							export class ApproachAnimation<T, V>  extends java.lang.Object {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.snapping.ApproachAnimation<any,any>>;
								/**
								 * Constructs a new instance of the ly.img.editor.compose.foundation.gestures.snapping.ApproachAnimation<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									approachAnimation(param0: androidx.compose.foundation.gestures.ScrollScope, param1: T, param2: T, param3: any<any,any>, param4: any): any;
								});
								public constructor();
								public approachAnimation(param0: androidx.compose.foundation.gestures.ScrollScope, param1: T, param2: T, param3: any<any,any>, param4: any): any;
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
			export module compose {
				export module foundation {
					export module gestures {
						export module snapping {
							export class HighVelocityApproachAnimation extends ly.img.editor.compose.foundation.gestures.snapping.ApproachAnimation<java.lang.Float,androidx.compose.animation.core.AnimationVector1D> {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.snapping.HighVelocityApproachAnimation>;
								public approachAnimation(param0: androidx.compose.foundation.gestures.ScrollScope, param1: any, param2: any, param3: any<any,any>, param4: any): any;
								public approachAnimation(param0: androidx.compose.foundation.gestures.ScrollScope, param1: number, param2: number, param3: any<any,any>, param4: any): any;
								public constructor(param0: androidx.compose.animation.core.DecayAnimationSpec<java.lang.Float>);
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
			export module compose {
				export module foundation {
					export module gestures {
						export module snapping {
							export class LowVelocityApproachAnimation extends ly.img.editor.compose.foundation.gestures.snapping.ApproachAnimation<java.lang.Float,androidx.compose.animation.core.AnimationVector1D> {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.snapping.LowVelocityApproachAnimation>;
								public approachAnimation(param0: androidx.compose.foundation.gestures.ScrollScope, param1: any, param2: any, param3: any<any,any>, param4: any): any;
								public approachAnimation(param0: androidx.compose.foundation.gestures.ScrollScope, param1: number, param2: number, param3: any<any,any>, param4: any): any;
								public constructor(param0: androidx.compose.animation.core.AnimationSpec<java.lang.Float>, param1: ly.img.editor.compose.foundation.gestures.snapping.SnapLayoutInfoProvider, param2: androidx.compose.ui.unit.Density);
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
			export module compose {
				export module foundation {
					export module gestures {
						export module snapping {
							export class SnapFlingBehavior {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.snapping.SnapFlingBehavior>;
								public static $stable: number;
								public setMotionScaleDuration$editor_experimental_release(param0: androidx.compose.ui.MotionDurationScale): void;
								public getMotionScaleDuration$editor_experimental_release(): androidx.compose.ui.MotionDurationScale;
								public performFling(param0: androidx.compose.foundation.gestures.ScrollScope, param1: number, param2: any): any;
								public performFling(param0: androidx.compose.foundation.gestures.ScrollScope, param1: number, param2: any<any,any>, param3: any): any;
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
			export module compose {
				export module foundation {
					export module gestures {
						export module snapping {
							export class SnapLayoutInfoProvider {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.gestures.snapping.SnapLayoutInfoProvider>;
								/**
								 * Constructs a new instance of the ly.img.editor.compose.foundation.gestures.snapping.SnapLayoutInfoProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									calculateSnapStepSize(param0: androidx.compose.ui.unit.Density): number;
									calculateApproachOffset(param0: androidx.compose.ui.unit.Density, param1: number): number;
									calculateSnappingOffsetBounds(param0: androidx.compose.ui.unit.Density): any;
								});
								public constructor();
								public calculateSnappingOffsetBounds(param0: androidx.compose.ui.unit.Density): any;
								public calculateApproachOffset(param0: androidx.compose.ui.unit.Density, param1: number): number;
								public calculateSnapStepSize(param0: androidx.compose.ui.unit.Density): number;
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
			export module compose {
				export module foundation {
					export module lazy {
						export class AnimateItemPlacementModifier {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.AnimateItemPlacementModifier>;
							public constructor(param0: androidx.compose.animation.core.FiniteAnimationSpec<androidx.compose.ui.unit.IntOffset>, param1: any<any,any>);
							public hashCode(): number;
							public modifyParentData(param0: androidx.compose.ui.unit.Density, param1: any): any;
							public getAnimationSpec(): androidx.compose.animation.core.FiniteAnimationSpec<androidx.compose.ui.unit.IntOffset>;
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
			export module compose {
				export module foundation {
					export module lazy {
						export class AwaitFirstLayoutModifier {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.AwaitFirstLayoutModifier>;
							public constructor();
							public waitForFirstLayout(param0: any): any;
							public onGloballyPositioned(param0: androidx.compose.ui.layout.LayoutCoordinates): void;
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
			export module compose {
				export module foundation {
					export module lazy {
						export class DataIndex {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.DataIndex>;
							public static "equals-impl0"(param0: number, param1: number): boolean;
							public static "dec-Ppig2Hs"(param0: number): number;
							public hashCode(): number;
							public static "minus-k0RtJ1o"(param0: number, param1: number): number;
							public static "toString-impl"(param0: number): string;
							public toString(): string;
							public static "hashCode-impl"(param0: number): number;
							public static "constructor-impl"(param0: number): number;
							public static "plus-k0RtJ1o"(param0: number, param1: number): number;
							public static "compareTo-yiv5dO4"(param0: number, param1: number): number;
							public static "equals-impl"(param0: number, param1: any): boolean;
							public equals(param0: any): boolean;
							public static "minus-HfAswkc"(param0: number, param1: number): number;
							public getValue(): number;
							public static "inc-Ppig2Hs"(param0: number): number;
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
			export module compose {
				export module foundation {
					export module lazy {
						export class EmptyLazyListLayoutInfo {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.EmptyLazyListLayoutInfo>;
							public static INSTANCE: ly.img.editor.compose.foundation.lazy.EmptyLazyListLayoutInfo;
							public "getViewportSize-YbymL2g"(): number;
							public getTotalItemsCount(): number;
							public getBeforeContentPadding(): number;
							public getVisibleItemsInfo(): java.util.List<androidx.compose.foundation.lazy.LazyListItemInfo>;
							public getAfterContentPadding(): number;
							public getOrientation(): androidx.compose.foundation.gestures.Orientation;
							public getReverseLayout(): boolean;
							public getViewportEndOffset(): number;
							public getMainAxisItemSpacing(): number;
							public getViewportStartOffset(): number;
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
			export module compose {
				export module foundation {
					export module lazy {
						export class ItemInfo {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.ItemInfo>;
							public constructor();
							public "getNotAnimatableDelta-nOcc-ac"(): number;
							public "setNotAnimatableDelta--gyyYBs"(param0: number): void;
							public getPlaceables(): java.util.List<ly.img.editor.compose.foundation.lazy.PlaceableInfo>;
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
			export module compose {
				export module foundation {
					export module lazy {
						export class LazyItemScope {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.LazyItemScope>;
							/**
							 * Constructs a new instance of the ly.img.editor.compose.foundation.lazy.LazyItemScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								fillParentMaxSize(param0: androidx.compose.ui.Modifier, param1: number): androidx.compose.ui.Modifier;
								fillParentMaxWidth(param0: androidx.compose.ui.Modifier, param1: number): androidx.compose.ui.Modifier;
								fillParentMaxHeight(param0: androidx.compose.ui.Modifier, param1: number): androidx.compose.ui.Modifier;
								animateItemPlacement(param0: androidx.compose.ui.Modifier, param1: androidx.compose.animation.core.FiniteAnimationSpec<androidx.compose.ui.unit.IntOffset>): androidx.compose.ui.Modifier;
							});
							public constructor();
							public animateItemPlacement(param0: androidx.compose.ui.Modifier, param1: androidx.compose.animation.core.FiniteAnimationSpec<androidx.compose.ui.unit.IntOffset>): androidx.compose.ui.Modifier;
							public fillParentMaxHeight(param0: androidx.compose.ui.Modifier, param1: number): androidx.compose.ui.Modifier;
							public fillParentMaxWidth(param0: androidx.compose.ui.Modifier, param1: number): androidx.compose.ui.Modifier;
							public fillParentMaxSize(param0: androidx.compose.ui.Modifier, param1: number): androidx.compose.ui.Modifier;
						}
						export module LazyItemScope {
							export class DefaultImpls {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.LazyItemScope.DefaultImpls>;
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
			export module compose {
				export module foundation {
					export module lazy {
						export class LazyItemScopeImpl extends ly.img.editor.compose.foundation.lazy.LazyItemScope {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.LazyItemScopeImpl>;
							public constructor();
							public animateItemPlacement(param0: androidx.compose.ui.Modifier, param1: androidx.compose.animation.core.FiniteAnimationSpec<androidx.compose.ui.unit.IntOffset>): androidx.compose.ui.Modifier;
							public fillParentMaxHeight(param0: androidx.compose.ui.Modifier, param1: number): androidx.compose.ui.Modifier;
							public fillParentMaxWidth(param0: androidx.compose.ui.Modifier, param1: number): androidx.compose.ui.Modifier;
							public fillParentMaxSize(param0: androidx.compose.ui.Modifier, param1: number): androidx.compose.ui.Modifier;
							public setMaxSize(param0: number, param1: number): void;
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
			export module compose {
				export module foundation {
					export module lazy {
						export class LazyListAnimateScrollScope extends ly.img.editor.compose.foundation.lazy.layout.LazyAnimateScrollScope {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.LazyListAnimateScrollScope>;
							public getDensity(): androidx.compose.ui.unit.Density;
							public getFirstVisibleItemScrollOffset(): number;
							public getLastVisibleItemIndex(): number;
							public getItemCount(): number;
							public expectedDistanceTo(param0: number, param1: number): number;
							public getFirstVisibleItemIndex(): number;
							public getTargetItemOffset(param0: number): java.lang.Integer;
							public getNumOfItemsForTeleport(): number;
							public scroll(param0: any<any,any,any>, param1: any): any;
							public constructor(param0: ly.img.editor.compose.foundation.lazy.LazyListState);
							public snapToItem(param0: androidx.compose.foundation.gestures.ScrollScope, param1: number, param2: number): void;
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
			export module compose {
				export module foundation {
					export module lazy {
						export class LazyListBeyondBoundsInfo {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.LazyListBeyondBoundsInfo>;
							public constructor();
							public removeInterval(param0: ly.img.editor.compose.foundation.lazy.LazyListBeyondBoundsInfo.Interval): void;
							public hasIntervals(): boolean;
							public getStart(): number;
							public getEnd(): number;
							public addInterval(param0: number, param1: number): ly.img.editor.compose.foundation.lazy.LazyListBeyondBoundsInfo.Interval;
						}
						export module LazyListBeyondBoundsInfo {
							export class Interval {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.LazyListBeyondBoundsInfo.Interval>;
								public toString(): string;
								public component1(): number;
								public constructor(param0: number, param1: number);
								public equals(param0: any): boolean;
								public component2(): number;
								public copy(param0: number, param1: number): ly.img.editor.compose.foundation.lazy.LazyListBeyondBoundsInfo.Interval;
								public getStart(): number;
								public hashCode(): number;
								public getEnd(): number;
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
			export module compose {
				export module foundation {
					export module lazy {
						export class LazyListBeyondBoundsState extends ly.img.editor.compose.foundation.lazy.layout.BeyondBoundsState {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.LazyListBeyondBoundsState>;
							public getState(): ly.img.editor.compose.foundation.lazy.LazyListState;
							public getItemCount(): number;
							public getHasVisibleItems(): boolean;
							public getFirstVisibleIndex(): number;
							public getLastVisibleIndex(): number;
							public remeasure(): void;
							public constructor(param0: ly.img.editor.compose.foundation.lazy.LazyListState);
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
			export module compose {
				export module foundation {
					export module lazy {
						export class LazyListIntervalContent extends ly.img.editor.compose.foundation.lazy.layout.LazyLayoutIntervalContent {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.LazyListIntervalContent>;
							public getKey(): any<java.lang.Integer,any>;
							public getItem(): any<ly.img.editor.compose.foundation.lazy.LazyItemScope,java.lang.Integer,androidx.compose.runtime.Composer,java.lang.Integer,any>;
							public constructor(param0: any<any,any>, param1: any<any,any>, param2: any<any,any,any,any,any>);
							public getType(): any<java.lang.Integer,any>;
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
			export module compose {
				export module foundation {
					export module lazy {
						export class LazyListItemPlacementAnimator {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.LazyListItemPlacementAnimator>;
							public "getAnimatedOffset-YT5a7pE"(param0: any, param1: number, param2: number, param3: number, param4: number): number;
							public constructor(param0: kotlinx.coroutines.CoroutineScope, param1: boolean);
							public onMeasured(param0: number, param1: number, param2: number, param3: java.util.List<ly.img.editor.compose.foundation.lazy.LazyListPositionedItem>, param4: ly.img.editor.compose.foundation.lazy.LazyMeasuredItemProvider): void;
							public reset(): void;
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
			export module compose {
				export module foundation {
					export module lazy {
						export class LazyListItemProvider extends ly.img.editor.compose.foundation.lazy.layout.LazyLayoutItemProvider {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.LazyListItemProvider>;
							/**
							 * Constructs a new instance of the ly.img.editor.compose.foundation.lazy.LazyListItemProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getHeaderIndexes(): java.util.List<java.lang.Integer>;
								getItemScope(): ly.img.editor.compose.foundation.lazy.LazyItemScopeImpl;
								getItemCount(): number;
								Item(param0: number, param1: androidx.compose.runtime.Composer, param2: number): void;
								getContentType(param0: number): any;
								getKey(param0: number): any;
								getKeyToIndexMap(): java.util.Map<any,java.lang.Integer>;
							});
							public constructor();
							public getHeaderIndexes(): java.util.List<java.lang.Integer>;
							public getContentType(param0: number): any;
							public Item(param0: number, param1: androidx.compose.runtime.Composer, param2: number): void;
							public getKeyToIndexMap(): java.util.Map<any,java.lang.Integer>;
							public getItemCount(): number;
							public getKey(param0: number): any;
							public getItemScope(): ly.img.editor.compose.foundation.lazy.LazyItemScopeImpl;
						}
						export module LazyListItemProvider {
							export class DefaultImpls {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.LazyListItemProvider.DefaultImpls>;
								public static getKey(param0: ly.img.editor.compose.foundation.lazy.LazyListItemProvider, param1: number): any;
								public static getKeyToIndexMap(param0: ly.img.editor.compose.foundation.lazy.LazyListItemProvider): java.util.Map<any,java.lang.Integer>;
								public static getContentType(param0: ly.img.editor.compose.foundation.lazy.LazyListItemProvider, param1: number): any;
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
			export module compose {
				export module foundation {
					export module lazy {
						export class LazyListItemProviderImpl implements ly.img.editor.compose.foundation.lazy.LazyListItemProvider, ly.img.editor.compose.foundation.lazy.layout.LazyLayoutItemProvider {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.LazyListItemProviderImpl>;
							public getHeaderIndexes(): java.util.List<java.lang.Integer>;
							public getContentType(param0: number): any;
							public getKeyToIndexMap(): java.util.Map<any,java.lang.Integer>;
							public Item(param0: number, param1: androidx.compose.runtime.Composer, param2: number): void;
							public constructor(param0: ly.img.editor.compose.foundation.lazy.layout.IntervalList<ly.img.editor.compose.foundation.lazy.LazyListIntervalContent>, param1: any, param2: java.util.List<java.lang.Integer>, param3: ly.img.editor.compose.foundation.lazy.LazyItemScopeImpl, param4: ly.img.editor.compose.foundation.lazy.LazyListState);
							public getItemCount(): number;
							public getKey(param0: number): any;
							public getItemScope(): ly.img.editor.compose.foundation.lazy.LazyItemScopeImpl;
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
			export module compose {
				export module foundation {
					export module lazy {
						export class LazyListMeasureResult {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.LazyListMeasureResult>;
							public getWidth(): number;
							public "getViewportSize-YbymL2g"(): number;
							public constructor(param0: ly.img.editor.compose.foundation.lazy.LazyMeasuredItem, param1: number, param2: boolean, param3: number, param4: androidx.compose.ui.layout.MeasureResult, param5: java.util.List<any>, param6: number, param7: number, param8: number, param9: boolean, param10: androidx.compose.foundation.gestures.Orientation, param11: number, param12: number);
							public getTotalItemsCount(): number;
							public getAlignmentLines(): java.util.Map<androidx.compose.ui.layout.AlignmentLine,java.lang.Integer>;
							public placeChildren(): void;
							public getFirstVisibleItem(): ly.img.editor.compose.foundation.lazy.LazyMeasuredItem;
							public getAfterContentPadding(): number;
							public getOrientation(): androidx.compose.foundation.gestures.Orientation;
							public getMainAxisItemSpacing(): number;
							public getHeight(): number;
							public getFirstVisibleItemScrollOffset(): number;
							public getConsumedScroll(): number;
							public getBeforeContentPadding(): number;
							public getVisibleItemsInfo(): java.util.List<androidx.compose.foundation.lazy.LazyListItemInfo>;
							public getReverseLayout(): boolean;
							public getViewportEndOffset(): number;
							public getCanScrollForward(): boolean;
							public getViewportStartOffset(): number;
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
			export module compose {
				export module foundation {
					export module lazy {
						export class LazyListPlaceableWrapper {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.LazyListPlaceableWrapper>;
							public getPlaceable(): androidx.compose.ui.layout.Placeable;
							public "getOffset-nOcc-ac"(): number;
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
			export module compose {
				export module foundation {
					export module lazy {
						export class LazyListPositionedItem {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.LazyListPositionedItem>;
							public place(param0: androidx.compose.ui.layout.Placeable.PlacementScope): void;
							public getSize(): number;
							public getAnimationSpec(param0: number): androidx.compose.animation.core.FiniteAnimationSpec<androidx.compose.ui.unit.IntOffset>;
							public getKey(): any;
							public getMainAxisSize(param0: number): number;
							public getIndex(): number;
							public getPlaceablesCount(): number;
							public "getOffset-Bjo55l4"(param0: number): number;
							public getHasAnimations(): boolean;
							public getOffset(): number;
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
			export module compose {
				export module foundation {
					export module lazy {
						export class LazyListScope {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.LazyListScope>;
							/**
							 * Constructs a new instance of the ly.img.editor.compose.foundation.lazy.LazyListScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								item(param0: any, param1: any, param2: any<any,any,any,any>): void;
								item(param0: any, param1: any): void;
								items(param0: number, param1: any<any,any>, param2: any<any,any>, param3: any<any,any,any,any,any>): void;
								items(param0: number, param1: any, param2: any): void;
								stickyHeader(param0: any, param1: any, param2: any<any,any,any,any>): void;
							});
							public constructor();
							public item(param0: any, param1: any, param2: any<any,any,any,any>): void;
							public stickyHeader(param0: any, param1: any, param2: any<any,any,any,any>): void;
							public items(param0: number, param1: any<any,any>, param2: any<any,any>, param3: any<any,any,any,any,any>): void;
						}
						export module LazyListScope {
							export class DefaultImpls {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.LazyListScope.DefaultImpls>;
								public static items(param0: ly.img.editor.compose.foundation.lazy.LazyListScope, param1: number, param2: any<any,any>, param3: any<any,any>, param4: any<any,any,any,any,any>): void;
								public static item(param0: ly.img.editor.compose.foundation.lazy.LazyListScope, param1: any, param2: any, param3: any<any,any,any,any>): void;
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
			export module compose {
				export module foundation {
					export module lazy {
						export class LazyListScopeImpl extends ly.img.editor.compose.foundation.lazy.LazyListScope {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.LazyListScopeImpl>;
							public constructor();
							public item(param0: any, param1: any, param2: any<any,any,any,any>): void;
							public getHeaderIndexes(): java.util.List<java.lang.Integer>;
							public stickyHeader(param0: any, param1: any, param2: any<any,any,any,any>): void;
							public getIntervals(): ly.img.editor.compose.foundation.lazy.layout.IntervalList<ly.img.editor.compose.foundation.lazy.LazyListIntervalContent>;
							public items(param0: number, param1: any<any,any>, param2: any<any,any>, param3: any<any,any,any,any,any>): void;
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
			export module compose {
				export module foundation {
					export module lazy {
						export class LazyListScrollPosition {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.LazyListScrollPosition>;
							public updateScrollPositionIfTheFirstItemWasMoved(param0: ly.img.editor.compose.foundation.lazy.LazyListItemProvider): void;
							public constructor();
							public getScrollOffset(): number;
							public constructor(param0: number, param1: number);
							public "requestPosition-g84sRqQ"(param0: number, param1: number): void;
							public "setIndex-yiv5dO4"(param0: number): void;
							public updateFromMeasureResult(param0: ly.img.editor.compose.foundation.lazy.LazyListMeasureResult): void;
							public "getIndex-Ppig2Hs"(): number;
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
			export module compose {
				export module foundation {
					export module lazy {
						export class LazyListState {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.LazyListState>;
							public static $stable: number;
							public getRemeasurement$editor_experimental_release(): androidx.compose.ui.layout.Remeasurement;
							public setPlacementAnimator$editor_experimental_release(param0: ly.img.editor.compose.foundation.lazy.LazyListItemPlacementAnimator): void;
							public constructor(param0: number, param1: number);
							public getInternalInteractionSource$editor_experimental_release(): androidx.compose.foundation.interaction.MutableInteractionSource;
							public getAwaitLayoutModifier$editor_experimental_release(): ly.img.editor.compose.foundation.lazy.AwaitFirstLayoutModifier;
							public scroll(param0: androidx.compose.foundation.MutatePriority, param1: any<any,any,any>, param2: any): any;
							public getNumMeasurePasses$editor_experimental_release(): number;
							public getInteractionSource(): androidx.compose.foundation.interaction.InteractionSource;
							public updateScrollPositionIfTheFirstItemWasMoved$editor_experimental_release(param0: ly.img.editor.compose.foundation.lazy.LazyListItemProvider): void;
							public getScrollToBeConsumed$editor_experimental_release(): number;
							public getPrefetchingEnabled$editor_experimental_release(): boolean;
							public getPinnedItems$editor_experimental_release(): ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPinnedItemList;
							public animateScrollToItem(param0: number, param1: number, param2: any): any;
							public "getPremeasureConstraints-msEJaDk$editor_experimental_release"(): number;
							public isScrollInProgress(): boolean;
							public getCanScrollForward(): boolean;
							public scrollToItem(param0: number, param1: number, param2: any): any;
							public dispatchRawDelta(param0: number): number;
							public applyMeasureResult$editor_experimental_release(param0: ly.img.editor.compose.foundation.lazy.LazyListMeasureResult): void;
							public constructor();
							public getDensity$editor_experimental_release(): androidx.compose.ui.unit.Density;
							public "setPremeasureConstraints-BRTryo0$editor_experimental_release"(param0: number): void;
							public getFirstVisibleItemIndex(): number;
							public getRemeasurementModifier$editor_experimental_release(): androidx.compose.ui.layout.RemeasurementModifier;
							public getPlacementAnimator$editor_experimental_release(): ly.img.editor.compose.foundation.lazy.LazyListItemPlacementAnimator;
							public getPrefetchState$editor_experimental_release(): ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPrefetchState;
							public getFirstVisibleItemScrollOffset(): number;
							public setDensity$editor_experimental_release(param0: androidx.compose.ui.unit.Density): void;
							public onScroll$editor_experimental_release(param0: number): number;
							public getLayoutInfo(): androidx.compose.foundation.lazy.LazyListLayoutInfo;
							public getCanScrollBackward(): boolean;
							public snapToItemIndexInternal$editor_experimental_release(param0: number, param1: number): void;
							public setPrefetchingEnabled$editor_experimental_release(param0: boolean): void;
						}
						export module LazyListState {
							export class Companion {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.LazyListState.Companion>;
								public getSaver(): androidx.compose.runtime.saveable.Saver<ly.img.editor.compose.foundation.lazy.LazyListState,any>;
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
			export module compose {
				export module foundation {
					export module lazy {
						export class LazyMeasuredItem {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.LazyMeasuredItem>;
							public getSize(): number;
							public getSizeWithSpacings(): number;
							public position(param0: number, param1: number, param2: number): ly.img.editor.compose.foundation.lazy.LazyListPositionedItem;
							public getKey(): any;
							public getCrossAxisSize(): number;
							public getIndex(): number;
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
			export module compose {
				export module foundation {
					export module lazy {
						export class LazyMeasuredItemProvider {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.LazyMeasuredItemProvider>;
							public "getChildConstraints-msEJaDk"(): number;
							public getKeyToIndexMap(): java.util.Map<any,java.lang.Integer>;
							public "getAndMeasure-yiv5dO4"(param0: number): ly.img.editor.compose.foundation.lazy.LazyMeasuredItem;
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
			export module compose {
				export module foundation {
					export module lazy {
						export class MeasuredItemFactory {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.MeasuredItemFactory>;
							/**
							 * Constructs a new instance of the ly.img.editor.compose.foundation.lazy.MeasuredItemFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								"createItem-CeHw3rE"(param0: number, param1: any, param2: java.util.List<any>): ly.img.editor.compose.foundation.lazy.LazyMeasuredItem;
							});
							public constructor();
							public "createItem-CeHw3rE"(param0: number, param1: any, param2: java.util.List<any>): ly.img.editor.compose.foundation.lazy.LazyMeasuredItem;
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
			export module compose {
				export module foundation {
					export module lazy {
						export class ParentSizeModifier {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.ParentSizeModifier>;
							public getWidthState(): androidx.compose.runtime.State<java.lang.Integer>;
							public getHeightState(): androidx.compose.runtime.State<java.lang.Integer>;
							public hashCode(): number;
							public constructor(param0: number, param1: any<any,any>, param2: androidx.compose.runtime.State<java.lang.Integer>, param3: androidx.compose.runtime.State<java.lang.Integer>);
							public "measure-3p2s80s"(param0: androidx.compose.ui.layout.MeasureScope, param1: androidx.compose.ui.layout.Measurable, param2: number): androidx.compose.ui.layout.MeasureResult;
							public equals(param0: any): boolean;
							public getFraction(): number;
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
			export module compose {
				export module foundation {
					export module lazy {
						export class PlaceableInfo {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.PlaceableInfo>;
							public getInProgress(): boolean;
							public setMainAxisSize(param0: number): void;
							public getAnimatedOffset(): androidx.compose.animation.core.Animatable<androidx.compose.ui.unit.IntOffset,androidx.compose.animation.core.AnimationVector2D>;
							public getMainAxisSize(): number;
							public "getTargetOffset-nOcc-ac"(): number;
							public setInProgress(param0: boolean): void;
							public "setTargetOffset--gyyYBs"(param0: number): void;
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
			export module compose {
				export module foundation {
					export module lazy {
						export module layout {
							export class BeyondBoundsState {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.BeyondBoundsState>;
								/**
								 * Constructs a new instance of the ly.img.editor.compose.foundation.lazy.layout.BeyondBoundsState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									remeasure(): void;
									getItemCount(): number;
									getHasVisibleItems(): boolean;
									getFirstVisibleIndex(): number;
									getLastVisibleIndex(): number;
								});
								public constructor();
								public getFirstVisibleIndex(): number;
								public remeasure(): void;
								public getItemCount(): number;
								public getHasVisibleItems(): boolean;
								public getLastVisibleIndex(): number;
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
			export module compose {
				export module foundation {
					export module lazy {
						export module layout {
							export class DefaultDelegatingLazyLayoutItemProvider extends ly.img.editor.compose.foundation.lazy.layout.LazyLayoutItemProvider {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.DefaultDelegatingLazyLayoutItemProvider>;
								public getKey(param0: number): any;
								public Item(param0: number, param1: androidx.compose.runtime.Composer, param2: number): void;
								public constructor(param0: androidx.compose.runtime.State<any>);
								public getContentType(param0: number): any;
								public getItemCount(): number;
								public getKeyToIndexMap(): java.util.Map<any,java.lang.Integer>;
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
			export module compose {
				export module foundation {
					export module lazy {
						export module layout {
							export class DefaultLazyKey {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.DefaultLazyKey>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<ly.img.editor.compose.foundation.lazy.layout.DefaultLazyKey>;
								public toString(): string;
								public constructor(param0: number);
								public describeContents(): number;
								public copy(param0: number): ly.img.editor.compose.foundation.lazy.layout.DefaultLazyKey;
								public equals(param0: any): boolean;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public hashCode(): number;
							}
							export module DefaultLazyKey {
								export class Companion {
									public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.DefaultLazyKey.Companion>;
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
			export module compose {
				export module foundation {
					export module lazy {
						export module layout {
							export class DefaultLazyLayoutItemsProvider<IntervalContent>  extends ly.img.editor.compose.foundation.lazy.layout.LazyLayoutItemProvider {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.DefaultLazyLayoutItemsProvider<any>>;
								public getItemContentProvider(): any,java.lang.Integer,androidx.compose.runtime.Composer,java.lang.Integer,any>;
								public getKey(param0: number): any;
								public Item(param0: number, param1: androidx.compose.runtime.Composer, param2: number): void;
								public getIntervals(): ly.img.editor.compose.foundation.lazy.layout.IntervalList<any>;
								public getContentType(param0: number): any;
								public getItemCount(): number;
								public constructor(param0: any<any,any,any,any,any>, param1: ly.img.editor.compose.foundation.lazy.layout.IntervalList<any>, param2: any);
								public getKeyToIndexMap(): java.util.Map<any,java.lang.Integer>;
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
			export module compose {
				export module foundation {
					export module lazy {
						export module layout {
							export class DummyHandle extends ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPrefetchState.PrefetchHandle {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.DummyHandle>;
								public static INSTANCE: ly.img.editor.compose.foundation.lazy.layout.DummyHandle;
								public cancel(): void;
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
			export module compose {
				export module foundation {
					export module lazy {
						export module layout {
							export class IntervalList<T>  extends java.lang.Object {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.IntervalList<any>>;
								/**
								 * Constructs a new instance of the ly.img.editor.compose.foundation.lazy.layout.IntervalList<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getSize(): number;
									get(param0: number): ly.img.editor.compose.foundation.lazy.layout.IntervalList.Interval<T>;
									forEach(param0: number, param1: number, param2: any<any,any>): void;
								});
								public constructor();
								public forEach(param0: number, param1: number, param2: any<any,any>): void;
								public get(param0: number): ly.img.editor.compose.foundation.lazy.layout.IntervalList.Interval<T>;
								public getSize(): number;
							}
							export module IntervalList {
								export class DefaultImpls {
									public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.IntervalList.DefaultImpls>;
								}
								export class Interval<T>  extends java.lang.Object {
									public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.IntervalList.Interval<any>>;
									public static $stable: number;
									public getValue(): T;
									public getSize(): number;
									public getStartIndex(): number;
									public constructor(param0: number, param1: number, param2: T);
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
			export module compose {
				export module foundation {
					export module lazy {
						export module layout {
							export class ItemFoundInScroll {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.ItemFoundInScroll>;
								public getItemOffset(): number;
								public constructor(param0: number, param1: androidx.compose.animation.core.AnimationState<java.lang.Float,androidx.compose.animation.core.AnimationVector1D>);
								public getPreviousAnimation(): androidx.compose.animation.core.AnimationState<java.lang.Float,androidx.compose.animation.core.AnimationVector1D>;
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
			export module compose {
				export module foundation {
					export module lazy {
						export module layout {
							export class LazyAnimateScrollScope {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.LazyAnimateScrollScope>;
								/**
								 * Constructs a new instance of the ly.img.editor.compose.foundation.lazy.layout.LazyAnimateScrollScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getDensity(): androidx.compose.ui.unit.Density;
									getFirstVisibleItemIndex(): number;
									getFirstVisibleItemScrollOffset(): number;
									getLastVisibleItemIndex(): number;
									getItemCount(): number;
									getTargetItemOffset(param0: number): java.lang.Integer;
									snapToItem(param0: androidx.compose.foundation.gestures.ScrollScope, param1: number, param2: number): void;
									expectedDistanceTo(param0: number, param1: number): number;
									getNumOfItemsForTeleport(): number;
									scroll(param0: any<any,any,any>, param1: any): any;
								});
								public constructor();
								public getLastVisibleItemIndex(): number;
								public getDensity(): androidx.compose.ui.unit.Density;
								public getFirstVisibleItemScrollOffset(): number;
								public expectedDistanceTo(param0: number, param1: number): number;
								public getItemCount(): number;
								public scroll(param0: any<any,any,any>, param1: any): any;
								public getFirstVisibleItemIndex(): number;
								public snapToItem(param0: androidx.compose.foundation.gestures.ScrollScope, param1: number, param2: number): void;
								public getTargetItemOffset(param0: number): java.lang.Integer;
								public getNumOfItemsForTeleport(): number;
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
			export module compose {
				export module foundation {
					export module lazy {
						export module layout {
							export class LazyLayoutBeyondBoundsModifierLocal extends java.lang.Object {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutBeyondBoundsModifierLocal>;
								public constructor(param0: ly.img.editor.compose.foundation.lazy.layout.BeyondBoundsState, param1: ly.img.editor.compose.foundation.lazy.LazyListBeyondBoundsInfo, param2: boolean, param3: androidx.compose.ui.unit.LayoutDirection, param4: androidx.compose.foundation.gestures.Orientation);
								public "layout-o7g1Pn8"(param0: number, param1: any): any;
								public getValue(): androidx.compose.ui.layout.BeyondBoundsLayout;
								public getKey(): androidx.compose.ui.modifier.ProvidableModifierLocal<androidx.compose.ui.layout.BeyondBoundsLayout>;
							}
							export module LazyLayoutBeyondBoundsModifierLocal {
								export class Companion {
									public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutBeyondBoundsModifierLocal.Companion>;
								}
								export class WhenMappings {
									public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutBeyondBoundsModifierLocal.WhenMappings>;
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
			export module compose {
				export module foundation {
					export module lazy {
						export module layout {
							export class LazyLayoutIntervalContent {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutIntervalContent>;
								/**
								 * Constructs a new instance of the ly.img.editor.compose.foundation.lazy.layout.LazyLayoutIntervalContent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getKey(): any<java.lang.Integer,any>;
									getType(): any<java.lang.Integer,any>;
								});
								public constructor();
								public getType(): any<java.lang.Integer,any>;
								public getKey(): any<java.lang.Integer,any>;
							}
							export module LazyLayoutIntervalContent {
								export class DefaultImpls {
									public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutIntervalContent.DefaultImpls>;
									public static getType(param0: ly.img.editor.compose.foundation.lazy.layout.LazyLayoutIntervalContent): any<java.lang.Integer,any>;
									public static getKey(param0: ly.img.editor.compose.foundation.lazy.layout.LazyLayoutIntervalContent): any<java.lang.Integer,any>;
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
			export module compose {
				export module foundation {
					export module lazy {
						export module layout {
							export class LazyLayoutItemContentFactory {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutItemContentFactory>;
								public getContentType(param0: any): any;
								public getItemProvider(): any;
								public constructor(param0: androidx.compose.runtime.saveable.SaveableStateHolder, param1: any);
								public getContent(param0: number, param1: any): any<androidx.compose.runtime.Composer,java.lang.Integer,any>;
							}
							export module LazyLayoutItemContentFactory {
								export class CachedItemContent {
									public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutItemContentFactory.CachedItemContent>;
									public getType(): any;
									public getKey(): any;
									public getLastKnownIndex(): number;
									public constructor(param0: number, param1: any, param2: any);
									public getContent(): any<androidx.compose.runtime.Composer,java.lang.Integer,any>;
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
			export module compose {
				export module foundation {
					export module lazy {
						export module layout {
							export class LazyLayoutItemProvider {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutItemProvider>;
								/**
								 * Constructs a new instance of the ly.img.editor.compose.foundation.lazy.layout.LazyLayoutItemProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getItemCount(): number;
									Item(param0: number, param1: androidx.compose.runtime.Composer, param2: number): void;
									getContentType(param0: number): any;
									getKey(param0: number): any;
									getKeyToIndexMap(): java.util.Map<any,java.lang.Integer>;
								});
								public constructor();
								public getKey(param0: number): any;
								public Item(param0: number, param1: androidx.compose.runtime.Composer, param2: number): void;
								public getContentType(param0: number): any;
								public getItemCount(): number;
								public getKeyToIndexMap(): java.util.Map<any,java.lang.Integer>;
							}
							export module LazyLayoutItemProvider {
								export class DefaultImpls {
									public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutItemProvider.DefaultImpls>;
									public static getContentType(param0: ly.img.editor.compose.foundation.lazy.layout.LazyLayoutItemProvider, param1: number): any;
									public static getKeyToIndexMap(param0: ly.img.editor.compose.foundation.lazy.layout.LazyLayoutItemProvider): java.util.Map<any,java.lang.Integer>;
									public static getKey(param0: ly.img.editor.compose.foundation.lazy.layout.LazyLayoutItemProvider, param1: number): any;
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
			export module compose {
				export module foundation {
					export module lazy {
						export module layout {
							export class LazyLayoutItemReusePolicy {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutItemReusePolicy>;
								public constructor(param0: ly.img.editor.compose.foundation.lazy.layout.LazyLayoutItemContentFactory);
								public getSlotsToRetain(param0: androidx.compose.ui.layout.SubcomposeSlotReusePolicy.SlotIdsSet): void;
								public areCompatible(param0: any, param1: any): boolean;
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
			export module compose {
				export module foundation {
					export module lazy {
						export module layout {
							export class LazyLayoutMeasureScope {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutMeasureScope>;
								/**
								 * Constructs a new instance of the ly.img.editor.compose.foundation.lazy.layout.LazyLayoutMeasureScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									"measure-0kLqBqw"(param0: number, param1: number): java.util.List<androidx.compose.ui.layout.Placeable>;
									"toDp-GaN1DYA"(param0: number): number;
									"toDp-u2uoSUM"(param0: number): number;
									"toDp-u2uoSUM"(param0: number): number;
									"toSp-kPz2Gy4"(param0: number): number;
									"toSp-kPz2Gy4"(param0: number): number;
									"toSp-0xMU5do"(param0: number): number;
									"toSize-XkaWNTQ"(param0: number): number;
									"toDpSize-k-rfVVM"(param0: number): number;
								});
								public constructor();
								public "toDp-u2uoSUM"(param0: number): number;
								public "toDp-GaN1DYA"(param0: number): number;
								public "toSize-XkaWNTQ"(param0: number): number;
								public "toSp-kPz2Gy4"(param0: number): number;
								public "toSp-0xMU5do"(param0: number): number;
								public "measure-0kLqBqw"(param0: number, param1: number): java.util.List<androidx.compose.ui.layout.Placeable>;
								public "toDpSize-k-rfVVM"(param0: number): number;
							}
							export module LazyLayoutMeasureScope {
								export class DefaultImpls {
									public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutMeasureScope.DefaultImpls>;
									public static "toSp-kPz2Gy4"(param0: ly.img.editor.compose.foundation.lazy.layout.LazyLayoutMeasureScope, param1: number): number;
									public static "toDpSize-k-rfVVM"(param0: ly.img.editor.compose.foundation.lazy.layout.LazyLayoutMeasureScope, param1: number): number;
									public static "toSize-XkaWNTQ"(param0: ly.img.editor.compose.foundation.lazy.layout.LazyLayoutMeasureScope, param1: number): number;
									public static "toDp-GaN1DYA"(param0: ly.img.editor.compose.foundation.lazy.layout.LazyLayoutMeasureScope, param1: number): number;
									public static "toDp-u2uoSUM"(param0: ly.img.editor.compose.foundation.lazy.layout.LazyLayoutMeasureScope, param1: number): number;
									public static "toSp-0xMU5do"(param0: ly.img.editor.compose.foundation.lazy.layout.LazyLayoutMeasureScope, param1: number): number;
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
			export module compose {
				export module foundation {
					export module lazy {
						export module layout {
							export class LazyLayoutMeasureScopeImpl extends ly.img.editor.compose.foundation.lazy.layout.LazyLayoutMeasureScope {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutMeasureScopeImpl>;
								public getLayoutDirection(): androidx.compose.ui.unit.LayoutDirection;
								public constructor(param0: ly.img.editor.compose.foundation.lazy.layout.LazyLayoutItemContentFactory, param1: androidx.compose.ui.layout.SubcomposeMeasureScope);
								public "roundToPx-0680j_4"(param0: number): number;
								public "roundToPx--R2X_6o"(param0: number): number;
								public "toSp-kPz2Gy4"(param0: number): number;
								public "toSp-0xMU5do"(param0: number): number;
								public "toDpSize-k-rfVVM"(param0: number): number;
								public getFontScale(): number;
								public "toPx-0680j_4"(param0: number): number;
								public "toDp-u2uoSUM"(param0: number): number;
								public "toDp-GaN1DYA"(param0: number): number;
								public "toSize-XkaWNTQ"(param0: number): number;
								public "measure-0kLqBqw"(param0: number, param1: number): java.util.List<androidx.compose.ui.layout.Placeable>;
								public "toPx--R2X_6o"(param0: number): number;
								public toRect(param0: androidx.compose.ui.unit.DpRect): androidx.compose.ui.geometry.Rect;
								public getDensity(): number;
								public layout(param0: number, param1: number, param2: java.util.Map<androidx.compose.ui.layout.AlignmentLine,java.lang.Integer>, param3: any<any,any>): androidx.compose.ui.layout.MeasureResult;
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
			export module compose {
				export module foundation {
					export module lazy {
						export module layout {
							export class LazyLayoutPinnableItem extends ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPinnedItemList.PinnedItem {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPinnableItem>;
								public setIndex(param0: number): void;
								public constructor(param0: any, param1: ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPinnedItemList);
								public pin(): androidx.compose.ui.layout.PinnableContainer.PinnedHandle;
								public onDisposed(): void;
								public setParentPinnableContainer(param0: androidx.compose.ui.layout.PinnableContainer): void;
								public release(): void;
								public getParentPinnableContainer(): androidx.compose.ui.layout.PinnableContainer;
								public getKey(): any;
								public getIndex(): number;
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
			export module compose {
				export module foundation {
					export module lazy {
						export module layout {
							export class LazyLayoutPinnedItemList extends java.lang.Object {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPinnedItemList>;
								public static $stable: number;
								public replaceAll(param0: any /* any*/): void;
								public removeAll(param0: java.util.Collection<any>): boolean;
								public size(): number;
								public release$editor_experimental_release(param0: ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPinnedItemList.PinnedItem): void;
								public remove(param0: number): ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPinnedItemList.PinnedItem;
								public indexOf(param0: ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPinnedItemList.PinnedItem): number;
								public lastIndexOf(param0: ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPinnedItemList.PinnedItem): number;
								public remove(param0: any): boolean;
								public set(param0: number, param1: ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPinnedItemList.PinnedItem): ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPinnedItemList.PinnedItem;
								public listIterator(): java.util.ListIterator<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPinnedItemList.PinnedItem>;
								public sort(param0: java.util.Comparator<any>): void;
								public toArray(param0: androidNative.Array<any>): androidNative.Array<any>;
								public addAll(param0: number, param1: java.util.Collection<any>): boolean;
								public lastIndexOf(param0: any): number;
								public add(param0: number, param1: ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPinnedItemList.PinnedItem): void;
								public toArray(): androidNative.Array<any>;
								public contains(param0: ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPinnedItemList.PinnedItem): boolean;
								public get(param0: number): ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPinnedItemList.PinnedItem;
								public iterator(): java.util.Iterator<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPinnedItemList.PinnedItem>;
								public addAll(param0: java.util.Collection<any>): boolean;
								public constructor();
								public containsAll(param0: java.util.Collection<any>): boolean;
								public getSize(): number;
								public subList(param0: number, param1: number): java.util.List<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPinnedItemList.PinnedItem>;
								public pin$editor_experimental_release(param0: ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPinnedItemList.PinnedItem): void;
								public indexOf(param0: any): number;
								public add(param0: ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPinnedItemList.PinnedItem): boolean;
								public clear(): void;
								public listIterator(param0: number): java.util.ListIterator<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPinnedItemList.PinnedItem>;
								public retainAll(param0: java.util.Collection<any>): boolean;
								public isEmpty(): boolean;
								public contains(param0: any): boolean;
							}
							export module LazyLayoutPinnedItemList {
								export class PinnedItem {
									public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPinnedItemList.PinnedItem>;
									/**
									 * Constructs a new instance of the ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPinnedItemList$PinnedItem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getKey(): any;
										getIndex(): number;
									});
									public constructor();
									public getIndex(): number;
									public getKey(): any;
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
			export module compose {
				export module foundation {
					export module lazy {
						export module layout {
							export class LazyLayoutPrefetchState {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPrefetchState>;
								public static $stable: number;
								public getPrefetcher$editor_experimental_release(): ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPrefetchState.Prefetcher;
								public setPrefetcher$editor_experimental_release(param0: ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPrefetchState.Prefetcher): void;
								public "schedulePrefetch-0kLqBqw"(param0: number, param1: number): ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPrefetchState.PrefetchHandle;
								public constructor();
							}
							export module LazyLayoutPrefetchState {
								export class PrefetchHandle {
									public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPrefetchState.PrefetchHandle>;
									/**
									 * Constructs a new instance of the ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPrefetchState$PrefetchHandle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										cancel(): void;
									});
									public constructor();
									public cancel(): void;
								}
								export class Prefetcher {
									public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPrefetchState.Prefetcher>;
									/**
									 * Constructs a new instance of the ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPrefetchState$Prefetcher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										"schedulePrefetch-0kLqBqw"(param0: number, param1: number): ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPrefetchState.PrefetchHandle;
									});
									public constructor();
									public "schedulePrefetch-0kLqBqw"(param0: number, param1: number): ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPrefetchState.PrefetchHandle;
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
			export module compose {
				export module foundation {
					export module lazy {
						export module layout {
							export class LazyLayoutPrefetcher extends ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPrefetchState.Prefetcher {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPrefetcher>;
								public constructor(param0: ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPrefetchState, param1: androidx.compose.ui.layout.SubcomposeLayoutState, param2: ly.img.editor.compose.foundation.lazy.layout.LazyLayoutItemContentFactory, param3: globalAndroid.view.View);
								public onForgotten(): void;
								public onAbandoned(): void;
								public onRemembered(): void;
								public "schedulePrefetch-0kLqBqw"(param0: number, param1: number): ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPrefetchState.PrefetchHandle;
								public doFrame(param0: number): void;
								public run(): void;
							}
							export module LazyLayoutPrefetcher {
								export class Companion {
									public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPrefetcher.Companion>;
								}
								export class PrefetchRequest extends ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPrefetchState.PrefetchHandle {
									public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutPrefetcher.PrefetchRequest>;
									public cancel(): void;
									public getIndex(): number;
									public getCanceled(): boolean;
									public setCanceled(param0: boolean): void;
									public "getConstraints-msEJaDk"(): number;
									public getPrecomposeHandle(): androidx.compose.ui.layout.SubcomposeLayoutState.PrecomposedSlotHandle;
									public setMeasured(param0: boolean): void;
									public getMeasured(): boolean;
									public setPrecomposeHandle(param0: androidx.compose.ui.layout.SubcomposeLayoutState.PrecomposedSlotHandle): void;
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
			export module compose {
				export module foundation {
					export module lazy {
						export module layout {
							export class LazyLayoutSemanticState {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.LazyLayoutSemanticState>;
								/**
								 * Constructs a new instance of the ly.img.editor.compose.foundation.lazy.layout.LazyLayoutSemanticState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getCurrentPosition(): number;
									getCanScrollForward(): boolean;
									collectionInfo(): androidx.compose.ui.semantics.CollectionInfo;
									animateScrollBy(param0: number, param1: any): any;
									scrollToItem(param0: number, param1: any): any;
								});
								public constructor();
								public animateScrollBy(param0: number, param1: any): any;
								public scrollToItem(param0: number, param1: any): any;
								public collectionInfo(): androidx.compose.ui.semantics.CollectionInfo;
								public getCanScrollForward(): boolean;
								public getCurrentPosition(): number;
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
			export module compose {
				export module foundation {
					export module lazy {
						export module layout {
							export class LazySaveableStateHolder {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.LazySaveableStateHolder>;
								public setWrappedHolder(param0: androidx.compose.runtime.saveable.SaveableStateHolder): void;
								public getWrappedHolder(): androidx.compose.runtime.saveable.SaveableStateHolder;
								public constructor(param0: androidx.compose.runtime.saveable.SaveableStateRegistry, param1: java.util.Map<string,any>);
								public constructor(param0: androidx.compose.runtime.saveable.SaveableStateRegistry);
								public registerProvider(param0: string, param1: any): androidx.compose.runtime.saveable.SaveableStateRegistry.Entry;
								public removeState(param0: any): void;
								public canBeSaved(param0: any): boolean;
								public performSave(): java.util.Map<string,java.util.List<any>>;
								public consumeRestored(param0: string): any;
								public SaveableStateProvider(param0: any, param1: any<any,any,any>, param2: androidx.compose.runtime.Composer, param3: number): void;
							}
							export module LazySaveableStateHolder {
								export class Companion {
									public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.LazySaveableStateHolder.Companion>;
									public saver(param0: androidx.compose.runtime.saveable.SaveableStateRegistry): androidx.compose.runtime.saveable.Saver<ly.img.editor.compose.foundation.lazy.layout.LazySaveableStateHolder,java.util.Map<string,java.util.List<any>>>;
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
			export module compose {
				export module foundation {
					export module lazy {
						export module layout {
							export class MutableIntervalList<T>  extends ly.img.editor.compose.foundation.lazy.layout.IntervalList<any> {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.lazy.layout.MutableIntervalList<any>>;
								public static $stable: number;
								public forEach(param0: number, param1: number, param2: any<any,any>): void;
								public constructor();
								public get(param0: number): ly.img.editor.compose.foundation.lazy.layout.IntervalList.Interval<any>;
								public getSize(): number;
								public addInterval(param0: number, param1: any): void;
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
			export module compose {
				export module foundation {
					export module pager {
						export class AwaitLazyListStateSet {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.pager.AwaitLazyListStateSet>;
							public constructor();
							public waitFinalLazyListSetting(param0: any): any;
							public onStateLoaded(): void;
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
			export module compose {
				export module foundation {
					export module pager {
						export class ConsumeAllFlingOnDirection {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.pager.ConsumeAllFlingOnDirection>;
							public constructor(param0: androidx.compose.foundation.gestures.Orientation);
							public "consumeOnOrientation-QWom1Mo"(param0: number, param1: androidx.compose.foundation.gestures.Orientation): number;
							public "onPostFling-RZ2iAVY"(param0: number, param1: number, param2: any): any;
							public "consumeOnOrientation-8S9VItk"(param0: number, param1: androidx.compose.foundation.gestures.Orientation): number;
							public getOrientation(): androidx.compose.foundation.gestures.Orientation;
							public "onPostScroll-DzOQY0M"(param0: number, param1: number, param2: number): number;
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
			export module compose {
				export module foundation {
					export module pager {
						export class PageSize {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.pager.PageSize>;
							/**
							 * Constructs a new instance of the ly.img.editor.compose.foundation.pager.PageSize interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								calculateMainAxisPageSize(param0: androidx.compose.ui.unit.Density, param1: number, param2: number): number;
							});
							public constructor();
							public calculateMainAxisPageSize(param0: androidx.compose.ui.unit.Density, param1: number, param2: number): number;
						}
						export module PageSize {
							export class Fill extends ly.img.editor.compose.foundation.pager.PageSize {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.pager.PageSize.Fill>;
								public static INSTANCE: ly.img.editor.compose.foundation.pager.PageSize.Fill;
								public static $stable: number;
								public calculateMainAxisPageSize(param0: androidx.compose.ui.unit.Density, param1: number, param2: number): number;
							}
							export class Fixed extends ly.img.editor.compose.foundation.pager.PageSize {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.pager.PageSize.Fixed>;
								public static $stable: number;
								public calculateMainAxisPageSize(param0: androidx.compose.ui.unit.Density, param1: number, param2: number): number;
								public "getPageSize-D9Ej5fM"(): number;
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
			export module compose {
				export module foundation {
					export module pager {
						export class PagerDefaults {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.pager.PagerDefaults>;
							public static INSTANCE: ly.img.editor.compose.foundation.pager.PagerDefaults;
							public static $stable: number;
							public flingBehavior(param0: ly.img.editor.compose.foundation.pager.PagerState, param1: ly.img.editor.compose.foundation.pager.PagerSnapDistance, param2: androidx.compose.animation.core.AnimationSpec<java.lang.Float>, param3: androidx.compose.animation.core.DecayAnimationSpec<java.lang.Float>, param4: androidx.compose.animation.core.AnimationSpec<java.lang.Float>, param5: androidx.compose.runtime.Composer, param6: number, param7: number): ly.img.editor.compose.foundation.gestures.snapping.SnapFlingBehavior;
							public pageNestedScrollConnection(param0: androidx.compose.foundation.gestures.Orientation): androidx.compose.ui.input.nestedscroll.NestedScrollConnection;
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
			export module compose {
				export module foundation {
					export module pager {
						export class PagerSnapDistance {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.pager.PagerSnapDistance>;
							/**
							 * Constructs a new instance of the ly.img.editor.compose.foundation.pager.PagerSnapDistance interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								calculateTargetPage(param0: number, param1: number, param2: number, param3: number, param4: number): number;
								"<clinit>"(): void;
							});
							public constructor();
							public calculateTargetPage(param0: number, param1: number, param2: number, param3: number, param4: number): number;
						}
						export module PagerSnapDistance {
							export class Companion {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.pager.PagerSnapDistance.Companion>;
								public atMost(param0: number): ly.img.editor.compose.foundation.pager.PagerSnapDistance;
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
			export module compose {
				export module foundation {
					export module pager {
						export class PagerSnapDistanceMaxPages extends ly.img.editor.compose.foundation.pager.PagerSnapDistance {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.pager.PagerSnapDistanceMaxPages>;
							public hashCode(): number;
							public calculateTargetPage(param0: number, param1: number, param2: number, param3: number, param4: number): number;
							public equals(param0: any): boolean;
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
			export module compose {
				export module foundation {
					export module pager {
						export class PagerState {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.pager.PagerState>;
							public static $stable: number;
							public constructor(param0: number, param1: number);
							public getSettledPage(): number;
							public getCurrentPage(): number;
							public scroll(param0: androidx.compose.foundation.MutatePriority, param1: any<any,any,any>, param2: any): any;
							public getCurrentPageOffsetFraction(): number;
							public getTargetPage(): number;
							public getInteractionSource(): androidx.compose.foundation.interaction.InteractionSource;
							public getInitialPage(): number;
							public setPageSpacing$editor_experimental_release(param0: number): void;
							public animateScrollToPage(param0: number, param1: number, param2: androidx.compose.animation.core.AnimationSpec<java.lang.Float>, param3: any): any;
							public getPageCount$editor_experimental_release(): number;
							public isScrollInProgress(): boolean;
							public getCanScrollForward(): boolean;
							public dispatchRawDelta(param0: number): number;
							public updateOnScrollStopped$editor_experimental_release(): void;
							public constructor();
							public setSnapRemainingScrollOffset$editor_experimental_release(param0: number): void;
							public getPageSpacing$editor_experimental_release(): number;
							public getInitialPageOffsetFraction(): number;
							public loadNewState$editor_experimental_release(param0: ly.img.editor.compose.foundation.lazy.LazyListState): void;
							public getSnapRemainingScrollOffset$editor_experimental_release(): number;
							public getFirstVisiblePage$editor_experimental_release(): androidx.compose.foundation.lazy.LazyListItemInfo;
							public getPageSize$editor_experimental_release(): number;
							public getLayoutInfo$editor_experimental_release(): androidx.compose.foundation.lazy.LazyListLayoutInfo;
							public getCanScrollBackward(): boolean;
							public scrollToPage(param0: number, param1: number, param2: any): any;
						}
						export module PagerState {
							export class Companion {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.pager.PagerState.Companion>;
								public getSaver(): androidx.compose.runtime.saveable.Saver<ly.img.editor.compose.foundation.pager.PagerState,any>;
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
			export module compose {
				export module foundation {
					export module pager {
						export class PagerWrapperFlingBehavior {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.pager.PagerWrapperFlingBehavior>;
							public getOriginalFlingBehavior(): ly.img.editor.compose.foundation.gestures.snapping.SnapFlingBehavior;
							public constructor(param0: ly.img.editor.compose.foundation.gestures.snapping.SnapFlingBehavior, param1: ly.img.editor.compose.foundation.pager.PagerState);
							public performFling(param0: androidx.compose.foundation.gestures.ScrollScope, param1: number, param2: any): any;
							public getPagerState(): ly.img.editor.compose.foundation.pager.PagerState;
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
			export module compose {
				export module foundation {
					export module relocation {
						export class AndroidBringIntoViewParent extends ly.img.editor.compose.foundation.relocation.BringIntoViewParent {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.relocation.AndroidBringIntoViewParent>;
							public constructor(param0: globalAndroid.view.View);
							public bringChildIntoView(param0: androidx.compose.ui.layout.LayoutCoordinates, param1: any, param2: any): any;
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
			export module compose {
				export module foundation {
					export module relocation {
						export abstract class BringIntoViewChildModifier {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.relocation.BringIntoViewChildModifier>;
							public onModifierLocalsUpdated(param0: androidx.compose.ui.modifier.ModifierLocalReadScope): void;
							public constructor(param0: ly.img.editor.compose.foundation.relocation.BringIntoViewParent);
							public getLayoutCoordinates(): androidx.compose.ui.layout.LayoutCoordinates;
							public onPlaced(param0: androidx.compose.ui.layout.LayoutCoordinates): void;
							public getParent(): ly.img.editor.compose.foundation.relocation.BringIntoViewParent;
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
			export module compose {
				export module foundation {
					export module relocation {
						export class BringIntoViewParent {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.relocation.BringIntoViewParent>;
							/**
							 * Constructs a new instance of the ly.img.editor.compose.foundation.relocation.BringIntoViewParent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								bringChildIntoView(param0: androidx.compose.ui.layout.LayoutCoordinates, param1: any, param2: any): any;
							});
							public constructor();
							public bringChildIntoView(param0: androidx.compose.ui.layout.LayoutCoordinates, param1: any, param2: any): any;
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
			export module compose {
				export module foundation {
					export module relocation {
						export class BringIntoViewRequestPriorityQueue {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.relocation.BringIntoViewRequestPriorityQueue>;
							public constructor();
							public getSize(): number;
							public cancelAndRemoveAll(param0: java.lang.Throwable): void;
							public resumeAndRemoveAll(): void;
							public isEmpty(): boolean;
							public resumeAndRemoveWhile(param0: any<any,java.lang.Boolean>): void;
							public enqueue(param0: ly.img.editor.compose.foundation.gestures.ContentInViewModifier.Request): boolean;
							public forEachFromSmallest(param0: any<any,any>): void;
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
			export module compose {
				export module foundation {
					export module relocation {
						export class BringIntoViewRequester {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.relocation.BringIntoViewRequester>;
							/**
							 * Constructs a new instance of the ly.img.editor.compose.foundation.relocation.BringIntoViewRequester interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								bringIntoView(param0: androidx.compose.ui.geometry.Rect, param1: any): any;
							});
							public constructor();
							public bringIntoView(param0: androidx.compose.ui.geometry.Rect, param1: any): any;
						}
						export module BringIntoViewRequester {
							export class DefaultImpls {
								public static class: java.lang.Class<ly.img.editor.compose.foundation.relocation.BringIntoViewRequester.DefaultImpls>;
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
			export module compose {
				export module foundation {
					export module relocation {
						export class BringIntoViewRequesterImpl extends ly.img.editor.compose.foundation.relocation.BringIntoViewRequester {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.relocation.BringIntoViewRequesterImpl>;
							public constructor();
							public getModifiers(): androidx.compose.runtime.collection.MutableVector<ly.img.editor.compose.foundation.relocation.BringIntoViewRequesterModifier>;
							public bringIntoView(param0: androidx.compose.ui.geometry.Rect, param1: any): any;
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
			export module compose {
				export module foundation {
					export module relocation {
						export class BringIntoViewRequesterModifier extends ly.img.editor.compose.foundation.relocation.BringIntoViewChildModifier {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.relocation.BringIntoViewRequesterModifier>;
							public constructor(param0: ly.img.editor.compose.foundation.relocation.BringIntoViewParent);
							public bringIntoView(param0: androidx.compose.ui.geometry.Rect, param1: any): any;
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
			export module compose {
				export module foundation {
					export module relocation {
						export class BringIntoViewResponder {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.relocation.BringIntoViewResponder>;
							/**
							 * Constructs a new instance of the ly.img.editor.compose.foundation.relocation.BringIntoViewResponder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								calculateRectForParent(param0: androidx.compose.ui.geometry.Rect): androidx.compose.ui.geometry.Rect;
								bringChildIntoView(param0: any, param1: any): any;
							});
							public constructor();
							public bringChildIntoView(param0: any, param1: any): any;
							public calculateRectForParent(param0: androidx.compose.ui.geometry.Rect): androidx.compose.ui.geometry.Rect;
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
			export module compose {
				export module foundation {
					export module relocation {
						export class BringIntoViewResponderModifier extends ly.img.editor.compose.foundation.relocation.BringIntoViewChildModifier {
							public static class: java.lang.Class<ly.img.editor.compose.foundation.relocation.BringIntoViewResponderModifier>;
							public responder: ly.img.editor.compose.foundation.relocation.BringIntoViewResponder;
							public constructor(param0: ly.img.editor.compose.foundation.relocation.BringIntoViewParent);
							public getKey(): androidx.compose.ui.modifier.ProvidableModifierLocal<ly.img.editor.compose.foundation.relocation.BringIntoViewParent>;
							public bringChildIntoView(param0: androidx.compose.ui.layout.LayoutCoordinates, param1: any, param2: any): any;
							public getResponder(): ly.img.editor.compose.foundation.relocation.BringIntoViewResponder;
							public getValue(): ly.img.editor.compose.foundation.relocation.BringIntoViewParent;
							public setResponder(param0: ly.img.editor.compose.foundation.relocation.BringIntoViewResponder): void;
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
			export module compose {
				export module internal {
					export class OriginallyExpect {
						public static class: java.lang.Class<ly.img.editor.compose.internal.OriginallyExpect>;
						/**
						 * Constructs a new instance of the ly.img.editor.compose.internal.OriginallyExpect interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module compose {
				export module material3 {
					export class BottomAppBarDefaults {
						public static class: java.lang.Class<ly.img.editor.compose.material3.BottomAppBarDefaults>;
						public static INSTANCE: ly.img.editor.compose.material3.BottomAppBarDefaults;
						public static $stable: number;
						public getContentPadding(): androidx.compose.foundation.layout.PaddingValues;
						public getWindowInsets(param0: androidx.compose.runtime.Composer, param1: number): androidx.compose.foundation.layout.WindowInsets;
						public getBottomAppBarFabColor(param0: androidx.compose.runtime.Composer, param1: number): number;
						public getContainerColor(param0: androidx.compose.runtime.Composer, param1: number): number;
						public "getContainerElevation-D9Ej5fM"(): number;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class CardColors {
						public static class: java.lang.Class<ly.img.editor.compose.material3.CardColors>;
						public static $stable: number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public containerColor$editor_experimental_release(param0: boolean, param1: androidx.compose.runtime.Composer, param2: number): androidx.compose.runtime.State<androidx.compose.ui.graphics.Color>;
						public contentColor$editor_experimental_release(param0: boolean, param1: androidx.compose.runtime.Composer, param2: number): androidx.compose.runtime.State<androidx.compose.ui.graphics.Color>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class CardDefaults {
						public static class: java.lang.Class<ly.img.editor.compose.material3.CardDefaults>;
						public static INSTANCE: ly.img.editor.compose.material3.CardDefaults;
						public static $stable: number;
						public "elevatedCardElevation-aqJV_2Y"(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: androidx.compose.runtime.Composer, param7: number, param8: number): ly.img.editor.compose.material3.CardElevation;
						public getShape(param0: androidx.compose.runtime.Composer, param1: number): androidx.compose.ui.graphics.Shape;
						public outlinedCardBorder(param0: boolean, param1: androidx.compose.runtime.Composer, param2: number, param3: number): androidx.compose.foundation.BorderStroke;
						public "cardColors-ro_MJ88"(param0: number, param1: number, param2: number, param3: number, param4: androidx.compose.runtime.Composer, param5: number, param6: number): ly.img.editor.compose.material3.CardColors;
						public getOutlinedShape(param0: androidx.compose.runtime.Composer, param1: number): androidx.compose.ui.graphics.Shape;
						public "outlinedCardColors-ro_MJ88"(param0: number, param1: number, param2: number, param3: number, param4: androidx.compose.runtime.Composer, param5: number, param6: number): ly.img.editor.compose.material3.CardColors;
						public "cardElevation-aqJV_2Y"(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: androidx.compose.runtime.Composer, param7: number, param8: number): ly.img.editor.compose.material3.CardElevation;
						public "outlinedCardElevation-aqJV_2Y"(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: androidx.compose.runtime.Composer, param7: number, param8: number): ly.img.editor.compose.material3.CardElevation;
						public getElevatedShape(param0: androidx.compose.runtime.Composer, param1: number): androidx.compose.ui.graphics.Shape;
						public "elevatedCardColors-ro_MJ88"(param0: number, param1: number, param2: number, param3: number, param4: androidx.compose.runtime.Composer, param5: number, param6: number): ly.img.editor.compose.material3.CardColors;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class CardElevation {
						public static class: java.lang.Class<ly.img.editor.compose.material3.CardElevation>;
						public static $stable: number;
						public shadowElevation$editor_experimental_release(param0: boolean, param1: androidx.compose.foundation.interaction.InteractionSource, param2: androidx.compose.runtime.Composer, param3: number): androidx.compose.runtime.State<androidx.compose.ui.unit.Dp>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public tonalElevation$editor_experimental_release(param0: boolean, param1: androidx.compose.foundation.interaction.InteractionSource, param2: androidx.compose.runtime.Composer, param3: number): androidx.compose.runtime.State<androidx.compose.ui.unit.Dp>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class ChipBorder {
						public static class: java.lang.Class<ly.img.editor.compose.material3.ChipBorder>;
						public static $stable: number;
						public borderStroke$editor_experimental_release(param0: boolean, param1: androidx.compose.runtime.Composer, param2: number): androidx.compose.runtime.State<androidx.compose.foundation.BorderStroke>;
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class ChipColors {
						public static class: java.lang.Class<ly.img.editor.compose.material3.ChipColors>;
						public static $stable: number;
						public labelColor$editor_experimental_release(param0: boolean, param1: androidx.compose.runtime.Composer, param2: number): androidx.compose.runtime.State<androidx.compose.ui.graphics.Color>;
						public trailingIconContentColor$editor_experimental_release(param0: boolean, param1: androidx.compose.runtime.Composer, param2: number): androidx.compose.runtime.State<androidx.compose.ui.graphics.Color>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public containerColor$editor_experimental_release(param0: boolean, param1: androidx.compose.runtime.Composer, param2: number): androidx.compose.runtime.State<androidx.compose.ui.graphics.Color>;
						public leadingIconContentColor$editor_experimental_release(param0: boolean, param1: androidx.compose.runtime.Composer, param2: number): androidx.compose.runtime.State<androidx.compose.ui.graphics.Color>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class ChipElevation {
						public static class: java.lang.Class<ly.img.editor.compose.material3.ChipElevation>;
						public static $stable: number;
						public shadowElevation$editor_experimental_release(param0: boolean, param1: androidx.compose.foundation.interaction.InteractionSource, param2: androidx.compose.runtime.Composer, param3: number): androidx.compose.runtime.State<androidx.compose.ui.unit.Dp>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public tonalElevation$editor_experimental_release(param0: boolean, param1: androidx.compose.foundation.interaction.InteractionSource, param2: androidx.compose.runtime.Composer, param3: number): androidx.compose.runtime.State<androidx.compose.ui.unit.Dp>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export module ColorSchemeKt {
export module  {
						export class WhenMappings {
							public static class: java.lang.Class<ly.img.editor.compose.material3.ColorSchemeKt.WhenMappings>;
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
			export module compose {
				export module material3 {
					export class ElevationDefaults {
						public static class: java.lang.Class<ly.img.editor.compose.material3.ElevationDefaults>;
						public static INSTANCE: ly.img.editor.compose.material3.ElevationDefaults;
						public outgoingAnimationSpecForInteraction(param0: androidx.compose.foundation.interaction.Interaction): androidx.compose.animation.core.AnimationSpec<androidx.compose.ui.unit.Dp>;
						public incomingAnimationSpecForInteraction(param0: androidx.compose.foundation.interaction.Interaction): androidx.compose.animation.core.AnimationSpec<androidx.compose.ui.unit.Dp>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class EnterAlwaysScrollBehavior extends ly.img.editor.compose.material3.TopAppBarScrollBehavior {
						public static class: java.lang.Class<ly.img.editor.compose.material3.EnterAlwaysScrollBehavior>;
						public getSnapAnimationSpec(): androidx.compose.animation.core.AnimationSpec<java.lang.Float>;
						public constructor(param0: ly.img.editor.compose.material3.TopAppBarState, param1: androidx.compose.animation.core.AnimationSpec<java.lang.Float>, param2: androidx.compose.animation.core.DecayAnimationSpec<java.lang.Float>, param3: any);
						public getState(): ly.img.editor.compose.material3.TopAppBarState;
						public setNestedScrollConnection(param0: androidx.compose.ui.input.nestedscroll.NestedScrollConnection): void;
						public getCanScroll(): any;
						public isPinned(): boolean;
						public getFlingAnimationSpec(): androidx.compose.animation.core.DecayAnimationSpec<java.lang.Float>;
						public getNestedScrollConnection(): androidx.compose.ui.input.nestedscroll.NestedScrollConnection;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class ExitUntilCollapsedScrollBehavior extends ly.img.editor.compose.material3.TopAppBarScrollBehavior {
						public static class: java.lang.Class<ly.img.editor.compose.material3.ExitUntilCollapsedScrollBehavior>;
						public getSnapAnimationSpec(): androidx.compose.animation.core.AnimationSpec<java.lang.Float>;
						public constructor(param0: ly.img.editor.compose.material3.TopAppBarState, param1: androidx.compose.animation.core.AnimationSpec<java.lang.Float>, param2: androidx.compose.animation.core.DecayAnimationSpec<java.lang.Float>, param3: any);
						public getState(): ly.img.editor.compose.material3.TopAppBarState;
						public setNestedScrollConnection(param0: androidx.compose.ui.input.nestedscroll.NestedScrollConnection): void;
						public getCanScroll(): any;
						public isPinned(): boolean;
						public getFlingAnimationSpec(): androidx.compose.animation.core.DecayAnimationSpec<java.lang.Float>;
						public getNestedScrollConnection(): androidx.compose.ui.input.nestedscroll.NestedScrollConnection;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class InputChipDefaults {
						public static class: java.lang.Class<ly.img.editor.compose.material3.InputChipDefaults>;
						public static INSTANCE: ly.img.editor.compose.material3.InputChipDefaults;
						public static $stable: number;
						public getShape(param0: androidx.compose.runtime.Composer, param1: number): androidx.compose.ui.graphics.Shape;
						public "getIconSize-D9Ej5fM"(): number;
						public "inputChipBorder-gHcDVlo"(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: androidx.compose.runtime.Composer, param7: number, param8: number): ly.img.editor.compose.material3.SelectableChipBorder;
						public "inputChipColors-kwJvTHA"(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: androidx.compose.runtime.Composer, param14: number, param15: number, param16: number): ly.img.editor.compose.material3.SelectableChipColors;
						public "getAvatarSize-D9Ej5fM"(): number;
						public "getHeight-D9Ej5fM"(): number;
						public "inputChipElevation-aqJV_2Y"(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: androidx.compose.runtime.Composer, param7: number, param8: number): ly.img.editor.compose.material3.SelectableChipElevation;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class InputPhase {
						public static class: java.lang.Class<ly.img.editor.compose.material3.InputPhase>;
						public static Focused: ly.img.editor.compose.material3.InputPhase;
						public static UnfocusedEmpty: ly.img.editor.compose.material3.InputPhase;
						public static UnfocusedNotEmpty: ly.img.editor.compose.material3.InputPhase;
						public static values(): androidNative.Array<ly.img.editor.compose.material3.InputPhase>;
						public static valueOf(param0: string): ly.img.editor.compose.material3.InputPhase;
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
			export module compose {
				export module material3 {
					export class OutlinedTextFieldDefaults {
						public static class: java.lang.Class<ly.img.editor.compose.material3.OutlinedTextFieldDefaults>;
						public static INSTANCE: ly.img.editor.compose.material3.OutlinedTextFieldDefaults;
						public static $stable: number;
						public "ContainerBox-nbWgWpA"(param0: boolean, param1: boolean, param2: androidx.compose.foundation.interaction.InteractionSource, param3: ly.img.editor.compose.material3.TextFieldColors, param4: androidx.compose.ui.graphics.Shape, param5: number, param6: number, param7: androidx.compose.runtime.Composer, param8: number, param9: number): void;
						public getShape(param0: androidx.compose.runtime.Composer, param1: number): androidx.compose.ui.graphics.Shape;
						public "colors-0hiis_0"(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: androidx.compose.foundation.text.selection.TextSelectionColors, param11: number, param12: number, param13: number, param14: number, param15: number, param16: number, param17: number, param18: number, param19: number, param20: number, param21: number, param22: number, param23: number, param24: number, param25: number, param26: number, param27: number, param28: number, param29: number, param30: number, param31: number, param32: number, param33: number, param34: number, param35: number, param36: number, param37: number, param38: number, param39: number, param40: number, param41: number, param42: number, param43: androidx.compose.runtime.Composer, param44: number, param45: number, param46: number, param47: number, param48: number, param49: number, param50: number): ly.img.editor.compose.material3.TextFieldColors;
						public "getFocusedBorderThickness-D9Ej5fM"(): number;
						public "contentPadding-a9UjIt4"(param0: number, param1: number, param2: number, param3: number): androidx.compose.foundation.layout.PaddingValues;
						public DecorationBox(param0: string, param1: any<any,any,any>, param2: boolean, param3: boolean, param4: androidx.compose.ui.text.input.VisualTransformation, param5: androidx.compose.foundation.interaction.InteractionSource, param6: boolean, param7: any<any,any,any>, param8: any<any,any,any>, param9: any<any,any,any>, param10: any<any,any,any>, param11: any<any,any,any>, param12: any<any,any,any>, param13: any<any,any,any>, param14: ly.img.editor.compose.material3.TextFieldColors, param15: androidx.compose.foundation.layout.PaddingValues, param16: any<any,any,any>, param17: androidx.compose.runtime.Composer, param18: number, param19: number, param20: number): void;
						public "getUnfocusedBorderThickness-D9Ej5fM"(): number;
						public "getMinHeight-D9Ej5fM"(): number;
						public "getMinWidth-D9Ej5fM"(): number;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class OutlinedTextFieldMeasurePolicy {
						public static class: java.lang.Class<ly.img.editor.compose.material3.OutlinedTextFieldMeasurePolicy>;
						public maxIntrinsicWidth(param0: androidx.compose.ui.layout.IntrinsicMeasureScope, param1: java.util.List<any>, param2: number): number;
						public minIntrinsicWidth(param0: androidx.compose.ui.layout.IntrinsicMeasureScope, param1: java.util.List<any>, param2: number): number;
						public maxIntrinsicHeight(param0: androidx.compose.ui.layout.IntrinsicMeasureScope, param1: java.util.List<any>, param2: number): number;
						public minIntrinsicHeight(param0: androidx.compose.ui.layout.IntrinsicMeasureScope, param1: java.util.List<any>, param2: number): number;
						public constructor(param0: any<any,any>, param1: boolean, param2: number, param3: androidx.compose.foundation.layout.PaddingValues);
						public "measure-3p2s80s"(param0: androidx.compose.ui.layout.MeasureScope, param1: java.util.List<any>, param2: number): androidx.compose.ui.layout.MeasureResult;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class PinnedScrollBehavior extends ly.img.editor.compose.material3.TopAppBarScrollBehavior {
						public static class: java.lang.Class<ly.img.editor.compose.material3.PinnedScrollBehavior>;
						public getSnapAnimationSpec(): androidx.compose.animation.core.AnimationSpec<java.lang.Float>;
						public getState(): ly.img.editor.compose.material3.TopAppBarState;
						public setNestedScrollConnection(param0: androidx.compose.ui.input.nestedscroll.NestedScrollConnection): void;
						public getCanScroll(): any;
						public isPinned(): boolean;
						public getFlingAnimationSpec(): androidx.compose.animation.core.DecayAnimationSpec<java.lang.Float>;
						public getNestedScrollConnection(): androidx.compose.ui.input.nestedscroll.NestedScrollConnection;
						public constructor(param0: ly.img.editor.compose.material3.TopAppBarState, param1: any);
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class RangeSliderComponents {
						public static class: java.lang.Class<ly.img.editor.compose.material3.RangeSliderComponents>;
						public static ENDTHUMB: ly.img.editor.compose.material3.RangeSliderComponents;
						public static STARTTHUMB: ly.img.editor.compose.material3.RangeSliderComponents;
						public static TRACK: ly.img.editor.compose.material3.RangeSliderComponents;
						public static values(): androidNative.Array<ly.img.editor.compose.material3.RangeSliderComponents>;
						public static valueOf(param0: string): ly.img.editor.compose.material3.RangeSliderComponents;
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
			export module compose {
				export module material3 {
					export class RangeSliderLogic {
						public static class: java.lang.Class<ly.img.editor.compose.material3.RangeSliderLogic>;
						public getRawOffsetEnd(): androidx.compose.runtime.State<java.lang.Float>;
						public getEndInteractionSource(): androidx.compose.foundation.interaction.MutableInteractionSource;
						public activeInteraction(param0: boolean): androidx.compose.foundation.interaction.MutableInteractionSource;
						public getRawOffsetStart(): androidx.compose.runtime.State<java.lang.Float>;
						public compareOffsets(param0: number): number;
						public getStartInteractionSource(): androidx.compose.foundation.interaction.MutableInteractionSource;
						public getOnDrag(): androidx.compose.runtime.State<any<java.lang.Boolean,java.lang.Float,any>>;
						public captureThumb(param0: boolean, param1: number, param2: androidx.compose.foundation.interaction.Interaction, param3: kotlinx.coroutines.CoroutineScope): void;
						public constructor(param0: androidx.compose.foundation.interaction.MutableInteractionSource, param1: androidx.compose.foundation.interaction.MutableInteractionSource, param2: androidx.compose.runtime.State<java.lang.Float>, param3: androidx.compose.runtime.State<java.lang.Float>, param4: androidx.compose.runtime.State<any>);
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class SelectableChipBorder {
						public static class: java.lang.Class<ly.img.editor.compose.material3.SelectableChipBorder>;
						public static $stable: number;
						public borderStroke$editor_experimental_release(param0: boolean, param1: boolean, param2: androidx.compose.runtime.Composer, param3: number): androidx.compose.runtime.State<androidx.compose.foundation.BorderStroke>;
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class SelectableChipColors {
						public static class: java.lang.Class<ly.img.editor.compose.material3.SelectableChipColors>;
						public static $stable: number;
						public leadingIconContentColor$editor_experimental_release(param0: boolean, param1: boolean, param2: androidx.compose.runtime.Composer, param3: number): androidx.compose.runtime.State<androidx.compose.ui.graphics.Color>;
						public labelColor$editor_experimental_release(param0: boolean, param1: boolean, param2: androidx.compose.runtime.Composer, param3: number): androidx.compose.runtime.State<androidx.compose.ui.graphics.Color>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public trailingIconContentColor$editor_experimental_release(param0: boolean, param1: boolean, param2: androidx.compose.runtime.Composer, param3: number): androidx.compose.runtime.State<androidx.compose.ui.graphics.Color>;
						public containerColor$editor_experimental_release(param0: boolean, param1: boolean, param2: androidx.compose.runtime.Composer, param3: number): androidx.compose.runtime.State<androidx.compose.ui.graphics.Color>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class SelectableChipElevation {
						public static class: java.lang.Class<ly.img.editor.compose.material3.SelectableChipElevation>;
						public static $stable: number;
						public shadowElevation$editor_experimental_release(param0: boolean, param1: androidx.compose.foundation.interaction.InteractionSource, param2: androidx.compose.runtime.Composer, param3: number): androidx.compose.runtime.State<androidx.compose.ui.unit.Dp>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public tonalElevation$editor_experimental_release(param0: boolean, param1: androidx.compose.foundation.interaction.InteractionSource, param2: androidx.compose.runtime.Composer, param3: number): androidx.compose.runtime.State<androidx.compose.ui.unit.Dp>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export module ShapesKt {
export module  {
						export class WhenMappings {
							public static class: java.lang.Class<ly.img.editor.compose.material3.ShapesKt.WhenMappings>;
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
			export module compose {
				export module material3 {
					export class SliderColors {
						public static class: java.lang.Class<ly.img.editor.compose.material3.SliderColors>;
						public static $stable: number;
						public tickColor$editor_experimental_release(param0: boolean, param1: boolean, param2: androidx.compose.runtime.Composer, param3: number): androidx.compose.runtime.State<androidx.compose.ui.graphics.Color>;
						public trackColor$editor_experimental_release(param0: boolean, param1: boolean, param2: androidx.compose.runtime.Composer, param3: number): androidx.compose.runtime.State<androidx.compose.ui.graphics.Color>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public thumbColor$editor_experimental_release(param0: boolean, param1: androidx.compose.runtime.Composer, param2: number): androidx.compose.runtime.State<androidx.compose.ui.graphics.Color>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class SliderComponents {
						public static class: java.lang.Class<ly.img.editor.compose.material3.SliderComponents>;
						public static THUMB: ly.img.editor.compose.material3.SliderComponents;
						public static TRACK: ly.img.editor.compose.material3.SliderComponents;
						public static values(): androidNative.Array<ly.img.editor.compose.material3.SliderComponents>;
						public static valueOf(param0: string): ly.img.editor.compose.material3.SliderComponents;
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
			export module compose {
				export module material3 {
					export class SliderDefaults {
						public static class: java.lang.Class<ly.img.editor.compose.material3.SliderDefaults>;
						public static INSTANCE: ly.img.editor.compose.material3.SliderDefaults;
						public static $stable: number;
						public "Thumb-9LiSoMs"(param0: androidx.compose.foundation.interaction.MutableInteractionSource, param1: androidx.compose.ui.Modifier, param2: ly.img.editor.compose.material3.SliderColors, param3: boolean, param4: number, param5: androidx.compose.runtime.Composer, param6: number, param7: number): void;
						public Track(param0: ly.img.editor.compose.material3.SliderPositions, param1: androidx.compose.ui.Modifier, param2: ly.img.editor.compose.material3.SliderColors, param3: boolean, param4: androidx.compose.runtime.Composer, param5: number, param6: number): void;
						public "colors-q0g_0yA"(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: androidx.compose.runtime.Composer, param11: number, param12: number, param13: number): ly.img.editor.compose.material3.SliderColors;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class SliderDraggableState {
						public static class: java.lang.Class<ly.img.editor.compose.material3.SliderDraggableState>;
						public isDragging(): boolean;
						public constructor(param0: any<any,any>);
						public dispatchRawDelta(param0: number): void;
						public getOnDelta(): any<java.lang.Float,any>;
						public drag(param0: androidx.compose.foundation.MutatePriority, param1: any<any,any,any>, param2: any): any;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class SliderPositions {
						public static class: java.lang.Class<ly.img.editor.compose.material3.SliderPositions>;
						public static $stable: number;
						public getTickFractions(): androidNative.Array<number>;
						public constructor();
						public getActiveRange(): any;
						public constructor(param0: any, param1: androidNative.Array<number>);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public setActiveRange$editor_experimental_release(param0: any): void;
						public setTickFractions$editor_experimental_release(param0: androidNative.Array<number>): void;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class Strings {
						public static class: java.lang.Class<ly.img.editor.compose.material3.Strings>;
						public static "equals-impl"(param0: number, param1: any): boolean;
						public static "equals-impl0"(param0: number, param1: number): boolean;
						public static "toString-impl"(param0: number): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static "hashCode-impl"(param0: number): number;
						public toString(): string;
					}
					export module Strings {
						export class Companion {
							public static class: java.lang.Class<ly.img.editor.compose.material3.Strings.Companion>;
							public "getTooltipLongPressLabel-iZG3JrY"(): number;
							public "getSearchBarSearch-iZG3JrY"(): number;
							public "getTimePickerPeriodToggle-iZG3JrY"(): number;
							public "getTimePickerMinuteSelection-iZG3JrY"(): number;
							public "getDatePickerScrollToShowEarlierYears-iZG3JrY"(): number;
							public "getDatePickerSwitchToInputMode-iZG3JrY"(): number;
							public "getDatePickerSwitchToYearSelection-iZG3JrY"(): number;
							public "getDateRangeInputInvalidRangeInput-iZG3JrY"(): number;
							public "getDatePickerScrollToShowLaterYears-iZG3JrY"(): number;
							public "getCloseDrawer-iZG3JrY"(): number;
							public "getDatePickerSwitchToCalendarMode-iZG3JrY"(): number;
							public "getDatePickerTitle-iZG3JrY"(): number;
							public "getDateInputInvalidNotAllowed-iZG3JrY"(): number;
							public "getDatePickerHeadlineDescription-iZG3JrY"(): number;
							public "getTimePickerHourSelection-iZG3JrY"(): number;
							public "getDateInputHeadline-iZG3JrY"(): number;
							public "getDatePickerSwitchToNextMonth-iZG3JrY"(): number;
							public "getDatePickerTodayDescription-iZG3JrY"(): number;
							public "getBottomSheetPartialExpandDescription-iZG3JrY"(): number;
							public "getDateInputTitle-iZG3JrY"(): number;
							public "getTooltipPaneDescription-iZG3JrY"(): number;
							public "getDialog-iZG3JrY"(): number;
							public "getDateRangeInputTitle-iZG3JrY"(): number;
							public "getSuggestionsAvailable-iZG3JrY"(): number;
							public "getExposedDropdownMenu-iZG3JrY"(): number;
							public "getTimePicker24HourSuffix-iZG3JrY"(): number;
							public "getDatePickerYearPickerPaneTitle-iZG3JrY"(): number;
							public "getDatePickerSwitchToDaySelection-iZG3JrY"(): number;
							public "getDateRangePickerEndHeadline-iZG3JrY"(): number;
							public "getCloseSheet-iZG3JrY"(): number;
							public "getDateInputHeadlineDescription-iZG3JrY"(): number;
							public "getTimePickerMinute-iZG3JrY"(): number;
							public "getDefaultErrorMessage-iZG3JrY"(): number;
							public "getDatePickerSwitchToPreviousMonth-iZG3JrY"(): number;
							public "getDateInputLabel-iZG3JrY"(): number;
							public "getTimePickerMinuteTextField-iZG3JrY"(): number;
							public "getDateInputNoInputDescription-iZG3JrY"(): number;
							public "getDateRangePickerScrollToShowPreviousMonth-iZG3JrY"(): number;
							public "getDateRangePickerScrollToShowNextMonth-iZG3JrY"(): number;
							public "getSliderRangeStart-iZG3JrY"(): number;
							public "getDateInputInvalidYearRange-iZG3JrY"(): number;
							public "getDateRangePickerTitle-iZG3JrY"(): number;
							public "getNavigationMenu-iZG3JrY"(): number;
							public "getSliderRangeEnd-iZG3JrY"(): number;
							public "getDatePickerNavigateToYearDescription-iZG3JrY"(): number;
							public "getBottomSheetDragHandleDescription-iZG3JrY"(): number;
							public "getDateRangePickerStartHeadline-iZG3JrY"(): number;
							public "getTimePickerAM-iZG3JrY"(): number;
							public "getMenuExpanded-iZG3JrY"(): number;
							public "getDateInputInvalidForPattern-iZG3JrY"(): number;
							public "getTimePickerHourSuffix-iZG3JrY"(): number;
							public "getDatePickerHeadline-iZG3JrY"(): number;
							public "getSnackbarDismiss-iZG3JrY"(): number;
							public "getTimePickerHourTextField-iZG3JrY"(): number;
							public "getDatePickerNoSelectionDescription-iZG3JrY"(): number;
							public "getTimePickerPM-iZG3JrY"(): number;
							public "getBottomSheetDismissDescription-iZG3JrY"(): number;
							public "getMenuCollapsed-iZG3JrY"(): number;
							public "getBottomSheetExpandDescription-iZG3JrY"(): number;
							public "getTimePickerHour-iZG3JrY"(): number;
							public "getDateRangePickerDayInRange-iZG3JrY"(): number;
							public "getTimePickerMinuteSuffix-iZG3JrY"(): number;
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
			export module compose {
				export module material3 {
					export class TextFieldColors {
						public static class: java.lang.Class<ly.img.editor.compose.material3.TextFieldColors>;
						public static $stable: number;
						public labelColor$editor_experimental_release(param0: boolean, param1: boolean, param2: androidx.compose.foundation.interaction.InteractionSource, param3: androidx.compose.runtime.Composer, param4: number): androidx.compose.runtime.State<androidx.compose.ui.graphics.Color>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public trailingIconColor$editor_experimental_release(param0: boolean, param1: boolean, param2: androidx.compose.foundation.interaction.InteractionSource, param3: androidx.compose.runtime.Composer, param4: number): androidx.compose.runtime.State<androidx.compose.ui.graphics.Color>;
						public leadingIconColor$editor_experimental_release(param0: boolean, param1: boolean, param2: androidx.compose.foundation.interaction.InteractionSource, param3: androidx.compose.runtime.Composer, param4: number): androidx.compose.runtime.State<androidx.compose.ui.graphics.Color>;
						public placeholderColor$editor_experimental_release(param0: boolean, param1: boolean, param2: androidx.compose.foundation.interaction.InteractionSource, param3: androidx.compose.runtime.Composer, param4: number): androidx.compose.runtime.State<androidx.compose.ui.graphics.Color>;
						public supportingTextColor$editor_experimental_release(param0: boolean, param1: boolean, param2: androidx.compose.foundation.interaction.InteractionSource, param3: androidx.compose.runtime.Composer, param4: number): androidx.compose.runtime.State<androidx.compose.ui.graphics.Color>;
						public prefixColor$editor_experimental_release(param0: boolean, param1: boolean, param2: androidx.compose.foundation.interaction.InteractionSource, param3: androidx.compose.runtime.Composer, param4: number): androidx.compose.runtime.State<androidx.compose.ui.graphics.Color>;
						public getSelectionColors(param0: androidx.compose.runtime.Composer, param1: number): androidx.compose.foundation.text.selection.TextSelectionColors;
						public textColor$editor_experimental_release(param0: boolean, param1: boolean, param2: androidx.compose.foundation.interaction.InteractionSource, param3: androidx.compose.runtime.Composer, param4: number): androidx.compose.runtime.State<androidx.compose.ui.graphics.Color>;
						public cursorColor$editor_experimental_release(param0: boolean, param1: androidx.compose.runtime.Composer, param2: number): androidx.compose.runtime.State<androidx.compose.ui.graphics.Color>;
						public containerColor$editor_experimental_release(param0: boolean, param1: boolean, param2: androidx.compose.foundation.interaction.InteractionSource, param3: androidx.compose.runtime.Composer, param4: number): androidx.compose.runtime.State<androidx.compose.ui.graphics.Color>;
						public indicatorColor$editor_experimental_release(param0: boolean, param1: boolean, param2: androidx.compose.foundation.interaction.InteractionSource, param3: androidx.compose.runtime.Composer, param4: number): androidx.compose.runtime.State<androidx.compose.ui.graphics.Color>;
						public suffixColor$editor_experimental_release(param0: boolean, param1: boolean, param2: androidx.compose.foundation.interaction.InteractionSource, param3: androidx.compose.runtime.Composer, param4: number): androidx.compose.runtime.State<androidx.compose.ui.graphics.Color>;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class TextFieldDefaults {
						public static class: java.lang.Class<ly.img.editor.compose.material3.TextFieldDefaults>;
						public static INSTANCE: ly.img.editor.compose.material3.TextFieldDefaults;
						public static $stable: number;
						public "getUnfocusedIndicatorThickness-D9Ej5fM"(): number;
						/** @deprecated */
						public getFilledShape(param0: androidx.compose.runtime.Composer, param1: number): androidx.compose.ui.graphics.Shape;
						/** @deprecated */
						public "outlinedTextFieldColors-M37tBTI"(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: androidx.compose.foundation.text.selection.TextSelectionColors, param9: number, param10: number, param11: number, param12: number, param13: number, param14: number, param15: number, param16: number, param17: number, param18: number, param19: number, param20: number, param21: number, param22: number, param23: number, param24: number, param25: number, param26: number, param27: number, param28: number, param29: number, param30: number, param31: number, param32: number, param33: number, param34: number, param35: number, param36: number, param37: number, param38: number, param39: number, param40: number, param41: androidx.compose.runtime.Composer, param42: number, param43: number, param44: number, param45: number, param46: number, param47: number, param48: number): ly.img.editor.compose.material3.TextFieldColors;
						/** @deprecated */
						public TextFieldDecorationBox(param0: string, param1: any<any,any,any>, param2: boolean, param3: boolean, param4: androidx.compose.ui.text.input.VisualTransformation, param5: androidx.compose.foundation.interaction.InteractionSource, param6: boolean, param7: any<any,any,any>, param8: any<any,any,any>, param9: any<any,any,any>, param10: any<any,any,any>, param11: any<any,any,any>, param12: any<any,any,any>, param13: any<any,any,any>, param14: androidx.compose.ui.graphics.Shape, param15: ly.img.editor.compose.material3.TextFieldColors, param16: androidx.compose.foundation.layout.PaddingValues, param17: any<any,any,any>, param18: androidx.compose.runtime.Composer, param19: number, param20: number, param21: number): void;
						/** @deprecated */
						public "outlinedTextFieldPadding-a9UjIt4"(param0: number, param1: number, param2: number, param3: number): androidx.compose.foundation.layout.PaddingValues;
						public "supportingTextPadding-a9UjIt4$editor_experimental_release"(param0: number, param1: number, param2: number, param3: number): androidx.compose.foundation.layout.PaddingValues;
						public "indicatorLine-gv0btCI"(param0: androidx.compose.ui.Modifier, param1: boolean, param2: boolean, param3: androidx.compose.foundation.interaction.InteractionSource, param4: ly.img.editor.compose.material3.TextFieldColors, param5: number, param6: number): androidx.compose.ui.Modifier;
						/** @deprecated */
						public "textFieldWithLabelPadding-a9UjIt4"(param0: number, param1: number, param2: number, param3: number): androidx.compose.foundation.layout.PaddingValues;
						public DecorationBox(param0: string, param1: any<any,any,any>, param2: boolean, param3: boolean, param4: androidx.compose.ui.text.input.VisualTransformation, param5: androidx.compose.foundation.interaction.InteractionSource, param6: boolean, param7: any<any,any,any>, param8: any<any,any,any>, param9: any<any,any,any>, param10: any<any,any,any>, param11: any<any,any,any>, param12: any<any,any,any>, param13: any<any,any,any>, param14: androidx.compose.ui.graphics.Shape, param15: ly.img.editor.compose.material3.TextFieldColors, param16: androidx.compose.foundation.layout.PaddingValues, param17: any<any,any,any>, param18: androidx.compose.runtime.Composer, param19: number, param20: number, param21: number): void;
						/** @deprecated */
						public getOutlinedShape(param0: androidx.compose.runtime.Composer, param1: number): androidx.compose.ui.graphics.Shape;
						public "getFocusedIndicatorThickness-D9Ej5fM"(): number;
						public "contentPaddingWithoutLabel-a9UjIt4"(param0: number, param1: number, param2: number, param3: number): androidx.compose.foundation.layout.PaddingValues;
						public ContainerBox(param0: boolean, param1: boolean, param2: androidx.compose.foundation.interaction.InteractionSource, param3: ly.img.editor.compose.material3.TextFieldColors, param4: androidx.compose.ui.graphics.Shape, param5: androidx.compose.runtime.Composer, param6: number, param7: number): void;
						/** @deprecated */
						public "textFieldColors-M37tBTI"(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: androidx.compose.foundation.text.selection.TextSelectionColors, param9: number, param10: number, param11: number, param12: number, param13: number, param14: number, param15: number, param16: number, param17: number, param18: number, param19: number, param20: number, param21: number, param22: number, param23: number, param24: number, param25: number, param26: number, param27: number, param28: number, param29: number, param30: number, param31: number, param32: number, param33: number, param34: number, param35: number, param36: number, param37: number, param38: number, param39: number, param40: number, param41: androidx.compose.runtime.Composer, param42: number, param43: number, param44: number, param45: number, param46: number, param47: number, param48: number): ly.img.editor.compose.material3.TextFieldColors;
						public getShape(param0: androidx.compose.runtime.Composer, param1: number): androidx.compose.ui.graphics.Shape;
						public "colors-0hiis_0"(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: androidx.compose.foundation.text.selection.TextSelectionColors, param11: number, param12: number, param13: number, param14: number, param15: number, param16: number, param17: number, param18: number, param19: number, param20: number, param21: number, param22: number, param23: number, param24: number, param25: number, param26: number, param27: number, param28: number, param29: number, param30: number, param31: number, param32: number, param33: number, param34: number, param35: number, param36: number, param37: number, param38: number, param39: number, param40: number, param41: number, param42: number, param43: androidx.compose.runtime.Composer, param44: number, param45: number, param46: number, param47: number, param48: number, param49: number, param50: number): ly.img.editor.compose.material3.TextFieldColors;
						/** @deprecated */
						public "textFieldWithoutLabelPadding-a9UjIt4"(param0: number, param1: number, param2: number, param3: number): androidx.compose.foundation.layout.PaddingValues;
						/** @deprecated */
						public "getFocusedBorderThickness-D9Ej5fM"(): number;
						/** @deprecated */
						public FilledContainerBox(param0: boolean, param1: boolean, param2: androidx.compose.foundation.interaction.InteractionSource, param3: ly.img.editor.compose.material3.TextFieldColors, param4: androidx.compose.ui.graphics.Shape, param5: androidx.compose.runtime.Composer, param6: number, param7: number): void;
						/** @deprecated */
						public OutlinedTextFieldDecorationBox(param0: string, param1: any<any,any,any>, param2: boolean, param3: boolean, param4: androidx.compose.ui.text.input.VisualTransformation, param5: androidx.compose.foundation.interaction.InteractionSource, param6: boolean, param7: any<any,any,any>, param8: any<any,any,any>, param9: any<any,any,any>, param10: any<any,any,any>, param11: any<any,any,any>, param12: any<any,any,any>, param13: any<any,any,any>, param14: ly.img.editor.compose.material3.TextFieldColors, param15: androidx.compose.foundation.layout.PaddingValues, param16: any<any,any,any>, param17: androidx.compose.runtime.Composer, param18: number, param19: number, param20: number): void;
						public "contentPaddingWithLabel-a9UjIt4"(param0: number, param1: number, param2: number, param3: number): androidx.compose.foundation.layout.PaddingValues;
						/** @deprecated */
						public "OutlinedBorderContainerBox-nbWgWpA"(param0: boolean, param1: boolean, param2: androidx.compose.foundation.interaction.InteractionSource, param3: ly.img.editor.compose.material3.TextFieldColors, param4: androidx.compose.ui.graphics.Shape, param5: number, param6: number, param7: androidx.compose.runtime.Composer, param8: number, param9: number): void;
						public "getMinHeight-D9Ej5fM"(): number;
						public "getMinWidth-D9Ej5fM"(): number;
						/** @deprecated */
						public "getUnfocusedBorderThickness-D9Ej5fM"(): number;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class TextFieldMeasurePolicy {
						public static class: java.lang.Class<ly.img.editor.compose.material3.TextFieldMeasurePolicy>;
						public maxIntrinsicWidth(param0: androidx.compose.ui.layout.IntrinsicMeasureScope, param1: java.util.List<any>, param2: number): number;
						public minIntrinsicWidth(param0: androidx.compose.ui.layout.IntrinsicMeasureScope, param1: java.util.List<any>, param2: number): number;
						public constructor(param0: boolean, param1: number, param2: androidx.compose.foundation.layout.PaddingValues);
						public maxIntrinsicHeight(param0: androidx.compose.ui.layout.IntrinsicMeasureScope, param1: java.util.List<any>, param2: number): number;
						public minIntrinsicHeight(param0: androidx.compose.ui.layout.IntrinsicMeasureScope, param1: java.util.List<any>, param2: number): number;
						public "measure-3p2s80s"(param0: androidx.compose.ui.layout.MeasureScope, param1: java.util.List<any>, param2: number): androidx.compose.ui.layout.MeasureResult;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class TextFieldTransitionScope {
						public static class: java.lang.Class<ly.img.editor.compose.material3.TextFieldTransitionScope>;
						public static INSTANCE: ly.img.editor.compose.material3.TextFieldTransitionScope;
						public "Transition-DTcfvLk"(param0: ly.img.editor.compose.material3.InputPhase, param1: number, param2: number, param3: any<any,any,any,androidx.compose.ui.graphics.Color>, param4: boolean, param5: any<any,any,any,any,any,any,any,any>, param6: androidx.compose.runtime.Composer, param7: number): void;
					}
					export module TextFieldTransitionScope {
						export class WhenMappings {
							public static class: java.lang.Class<ly.img.editor.compose.material3.TextFieldTransitionScope.WhenMappings>;
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
			export module compose {
				export module material3 {
					export class TextFieldType {
						public static class: java.lang.Class<ly.img.editor.compose.material3.TextFieldType>;
						public static Filled: ly.img.editor.compose.material3.TextFieldType;
						public static Outlined: ly.img.editor.compose.material3.TextFieldType;
						public static getEntries(): any;
						public static values(): androidNative.Array<ly.img.editor.compose.material3.TextFieldType>;
						public static valueOf(param0: string): ly.img.editor.compose.material3.TextFieldType;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class TopAppBarColors {
						public static class: java.lang.Class<ly.img.editor.compose.material3.TopAppBarColors>;
						public static $stable: number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public "getActionIconContentColor-0d7_KjU$editor_experimental_release"(): number;
						public "getTitleContentColor-0d7_KjU$editor_experimental_release"(): number;
						public "getNavigationIconContentColor-0d7_KjU$editor_experimental_release"(): number;
						public "containerColor-XeAY9LY$editor_experimental_release"(param0: number, param1: androidx.compose.runtime.Composer, param2: number): number;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class TopAppBarDefaults {
						public static class: java.lang.Class<ly.img.editor.compose.material3.TopAppBarDefaults>;
						public static INSTANCE: ly.img.editor.compose.material3.TopAppBarDefaults;
						public static $stable: number;
						public exitUntilCollapsedScrollBehavior(param0: ly.img.editor.compose.material3.TopAppBarState, param1: any, param2: androidx.compose.animation.core.AnimationSpec<java.lang.Float>, param3: androidx.compose.animation.core.DecayAnimationSpec<java.lang.Float>, param4: androidx.compose.runtime.Composer, param5: number, param6: number): ly.img.editor.compose.material3.TopAppBarScrollBehavior;
						public pinnedScrollBehavior(param0: ly.img.editor.compose.material3.TopAppBarState, param1: any, param2: androidx.compose.runtime.Composer, param3: number, param4: number): ly.img.editor.compose.material3.TopAppBarScrollBehavior;
						public getWindowInsets(param0: androidx.compose.runtime.Composer, param1: number): androidx.compose.foundation.layout.WindowInsets;
						public "largeTopAppBarColors-zjMxDiM"(param0: number, param1: number, param2: number, param3: number, param4: number, param5: androidx.compose.runtime.Composer, param6: number, param7: number): ly.img.editor.compose.material3.TopAppBarColors;
						/** @deprecated */
						public "smallTopAppBarColors-zjMxDiM"(param0: number, param1: number, param2: number, param3: number, param4: number, param5: androidx.compose.runtime.Composer, param6: number, param7: number): ly.img.editor.compose.material3.TopAppBarColors;
						public "topAppBarColors-zjMxDiM"(param0: number, param1: number, param2: number, param3: number, param4: number, param5: androidx.compose.runtime.Composer, param6: number, param7: number): ly.img.editor.compose.material3.TopAppBarColors;
						public "mediumTopAppBarColors-zjMxDiM"(param0: number, param1: number, param2: number, param3: number, param4: number, param5: androidx.compose.runtime.Composer, param6: number, param7: number): ly.img.editor.compose.material3.TopAppBarColors;
						public "centerAlignedTopAppBarColors-zjMxDiM"(param0: number, param1: number, param2: number, param3: number, param4: number, param5: androidx.compose.runtime.Composer, param6: number, param7: number): ly.img.editor.compose.material3.TopAppBarColors;
						public enterAlwaysScrollBehavior(param0: ly.img.editor.compose.material3.TopAppBarState, param1: any, param2: androidx.compose.animation.core.AnimationSpec<java.lang.Float>, param3: androidx.compose.animation.core.DecayAnimationSpec<java.lang.Float>, param4: androidx.compose.runtime.Composer, param5: number, param6: number): ly.img.editor.compose.material3.TopAppBarScrollBehavior;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class TopAppBarScrollBehavior {
						public static class: java.lang.Class<ly.img.editor.compose.material3.TopAppBarScrollBehavior>;
						/**
						 * Constructs a new instance of the ly.img.editor.compose.material3.TopAppBarScrollBehavior interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getState(): ly.img.editor.compose.material3.TopAppBarState;
							isPinned(): boolean;
							getSnapAnimationSpec(): androidx.compose.animation.core.AnimationSpec<java.lang.Float>;
							getFlingAnimationSpec(): androidx.compose.animation.core.DecayAnimationSpec<java.lang.Float>;
							getNestedScrollConnection(): androidx.compose.ui.input.nestedscroll.NestedScrollConnection;
						});
						public constructor();
						public getSnapAnimationSpec(): androidx.compose.animation.core.AnimationSpec<java.lang.Float>;
						public getState(): ly.img.editor.compose.material3.TopAppBarState;
						public isPinned(): boolean;
						public getFlingAnimationSpec(): androidx.compose.animation.core.DecayAnimationSpec<java.lang.Float>;
						public getNestedScrollConnection(): androidx.compose.ui.input.nestedscroll.NestedScrollConnection;
					}
				}
			}
		}
	}
}

declare module ly {
	export module img {
		export module editor {
			export module compose {
				export module material3 {
					export class TopAppBarState {
						public static class: java.lang.Class<ly.img.editor.compose.material3.TopAppBarState>;
						public static $stable: number;
						public getHeightOffset(): number;
						public setHeightOffsetLimit(param0: number): void;
						public getCollapsedFraction(): number;
						public getContentOffset(): number;
						public getOverlappedFraction(): number;
						public getHeightOffsetLimit(): number;
						public constructor(param0: number, param1: number, param2: number);
						public setHeightOffset(param0: number): void;
						public setContentOffset(param0: number): void;
					}
					export module TopAppBarState {
						export class Companion {
							public static class: java.lang.Class<ly.img.editor.compose.material3.TopAppBarState.Companion>;
							public getSaver(): androidx.compose.runtime.saveable.Saver<ly.img.editor.compose.material3.TopAppBarState,any>;
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
			export module compose {
				export module material3 {
					export module TypographyKt {
export module  {
						export class WhenMappings {
							public static class: java.lang.Class<ly.img.editor.compose.material3.TypographyKt.WhenMappings>;
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
			export module compose {
				export module material3 {
					export module tokens {
						export class BottomAppBarTokens {
							public static class: java.lang.Class<ly.img.editor.compose.material3.tokens.BottomAppBarTokens>;
							public static INSTANCE: ly.img.editor.compose.material3.tokens.BottomAppBarTokens;
							public getContainerColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getContainerShape(): ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public getContainerSurfaceTintLayerColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getContainerHeight-D9Ej5fM"(): number;
							public "getContainerElevation-D9Ej5fM"(): number;
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
			export module compose {
				export module material3 {
					export module tokens {
						export class ColorSchemeKeyTokens {
							public static class: java.lang.Class<ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens>;
							public static Background: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static Error: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static ErrorContainer: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static InverseOnSurface: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static InversePrimary: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static InverseSurface: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static OnBackground: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static OnError: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static OnErrorContainer: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static OnPrimary: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static OnPrimaryContainer: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static OnSecondary: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static OnSecondaryContainer: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static OnSurface: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static OnSurfaceVariant: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static OnTertiary: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static OnTertiaryContainer: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static Outline: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static OutlineVariant: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static Primary: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static PrimaryContainer: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static Scrim: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static Secondary: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static SecondaryContainer: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static Surface: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static SurfaceTint: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static SurfaceVariant: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static Tertiary: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static TertiaryContainer: ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static valueOf(param0: string): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public static getEntries(): any;
							public static values(): androidNative.Array<ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens>;
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
			export module compose {
				export module material3 {
					export module tokens {
						export class ElevatedCardTokens {
							public static class: java.lang.Class<ly.img.editor.compose.material3.tokens.ElevatedCardTokens>;
							public static INSTANCE: ly.img.editor.compose.material3.tokens.ElevatedCardTokens;
							public static DisabledContainerOpacity: number;
							public "getFocusContainerElevation-D9Ej5fM"(): number;
							public "getIconSize-D9Ej5fM"(): number;
							public getDisabledContainerColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getHoverContainerElevation-D9Ej5fM"(): number;
							public getContainerColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getDisabledContainerElevation-D9Ej5fM"(): number;
							public "getDraggedContainerElevation-D9Ej5fM"(): number;
							public "getPressedContainerElevation-D9Ej5fM"(): number;
							public getContainerShape(): ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public getContainerSurfaceTintLayerColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getContainerElevation-D9Ej5fM"(): number;
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
			export module compose {
				export module material3 {
					export module tokens {
						export class ElevationTokens {
							public static class: java.lang.Class<ly.img.editor.compose.material3.tokens.ElevationTokens>;
							public static INSTANCE: ly.img.editor.compose.material3.tokens.ElevationTokens;
							public "getLevel0-D9Ej5fM"(): number;
							public "getLevel2-D9Ej5fM"(): number;
							public "getLevel5-D9Ej5fM"(): number;
							public "getLevel3-D9Ej5fM"(): number;
							public "getLevel4-D9Ej5fM"(): number;
							public "getLevel1-D9Ej5fM"(): number;
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
			export module compose {
				export module material3 {
					export module tokens {
						export class FabSecondaryTokens {
							public static class: java.lang.Class<ly.img.editor.compose.material3.tokens.FabSecondaryTokens>;
							public static INSTANCE: ly.img.editor.compose.material3.tokens.FabSecondaryTokens;
							public "getLoweredFocusContainerElevation-D9Ej5fM"(): number;
							public "getLoweredHoverContainerElevation-D9Ej5fM"(): number;
							public "getPressedContainerElevation-D9Ej5fM"(): number;
							public getPressedIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getContainerWidth-D9Ej5fM"(): number;
							public "getContainerHeight-D9Ej5fM"(): number;
							public "getContainerElevation-D9Ej5fM"(): number;
							public "getFocusContainerElevation-D9Ej5fM"(): number;
							public "getIconSize-D9Ej5fM"(): number;
							public "getHoverContainerElevation-D9Ej5fM"(): number;
							public getContainerColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getContainerShape(): ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public getHoverIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getLoweredPressedContainerElevation-D9Ej5fM"(): number;
							public getFocusIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getLoweredContainerElevation-D9Ej5fM"(): number;
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
			export module compose {
				export module material3 {
					export module tokens {
						export class FilledCardTokens {
							public static class: java.lang.Class<ly.img.editor.compose.material3.tokens.FilledCardTokens>;
							public static INSTANCE: ly.img.editor.compose.material3.tokens.FilledCardTokens;
							public static DisabledContainerOpacity: number;
							public "getFocusContainerElevation-D9Ej5fM"(): number;
							public "getIconSize-D9Ej5fM"(): number;
							public getDisabledContainerColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getHoverContainerElevation-D9Ej5fM"(): number;
							public getContainerColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getDisabledContainerElevation-D9Ej5fM"(): number;
							public "getDraggedContainerElevation-D9Ej5fM"(): number;
							public "getPressedContainerElevation-D9Ej5fM"(): number;
							public getContainerShape(): ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public getIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getContainerElevation-D9Ej5fM"(): number;
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
			export module compose {
				export module material3 {
					export module tokens {
						export class FilledTextFieldTokens {
							public static class: java.lang.Class<ly.img.editor.compose.material3.tokens.FilledTextFieldTokens>;
							public static INSTANCE: ly.img.editor.compose.material3.tokens.FilledTextFieldTokens;
							public static DisabledActiveIndicatorOpacity: number;
							public static DisabledContainerOpacity: number;
							public static DisabledInputOpacity: number;
							public static DisabledLabelOpacity: number;
							public static DisabledLeadingIconOpacity: number;
							public static DisabledSupportingOpacity: number;
							public static DisabledTrailingIconOpacity: number;
							public "getDisabledActiveIndicatorHeight-D9Ej5fM"(): number;
							public getDisabledContainerColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getDisabledActiveIndicatorColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getDisabledTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getFocusLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getFocusTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorHoverInputColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getHoverActiveIndicatorHeight-D9Ej5fM"(): number;
							public "getLeadingIconSize-D9Ej5fM"(): number;
							public getFocusActiveIndicatorColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getFocusSupportingColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getActiveIndicatorHeight-D9Ej5fM"(): number;
							public getHoverLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getHoverSupportingColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getDisabledLabelColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorFocusCaretColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getHoverInputColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getSupportingFont(): ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public getErrorHoverActiveIndicatorColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorFocusTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getInputFont(): ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public getErrorActiveIndicatorColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorFocusInputColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getFocusActiveIndicatorHeight-D9Ej5fM"(): number;
							public getFocusLabelColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getLabelFont(): ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public getErrorFocusActiveIndicatorColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getContainerHeight-D9Ej5fM"(): number;
							public getLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getInputPrefixColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getContainerColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getDisabledLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getFocusInputColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorHoverTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getTrailingIconSize-D9Ej5fM"(): number;
							public getErrorFocusSupportingColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorFocusLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorSupportingColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorHoverSupportingColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorFocusLabelColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getSupportingColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorInputColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getInputSuffixColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getContainerShape(): ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public getHoverActiveIndicatorColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getInputPlaceholderColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getDisabledSupportingColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorLabelColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getDisabledInputColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getHoverLabelColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getHoverTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getInputColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getCaretColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorHoverLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorHoverLabelColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getLabelColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getActiveIndicatorColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
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
			export module compose {
				export module material3 {
					export module tokens {
						export class InputChipTokens {
							public static class: java.lang.Class<ly.img.editor.compose.material3.tokens.InputChipTokens>;
							public static INSTANCE: ly.img.editor.compose.material3.tokens.InputChipTokens;
							public static DisabledLabelTextOpacity: number;
							public static DisabledSelectedContainerOpacity: number;
							public static DisabledUnselectedOutlineOpacity: number;
							public static DisabledAvatarOpacity: number;
							public static DisabledLeadingIconOpacity: number;
							public static DisabledTrailingIconOpacity: number;
							public getUnselectedFocusLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getUnselectedDraggedLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getUnselectedDraggedTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getSelectedHoverLabelTextColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getSelectedDraggedLabelTextColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getDisabledTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getLeadingIconSize-D9Ej5fM"(): number;
							public getSelectedFocusTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getUnselectedHoverLabelTextColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getUnselectedTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getUnselectedFocusOutlineColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getUnselectedPressedTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getSelectedPressedLabelTextColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getUnselectedOutlineWidth-D9Ej5fM"(): number;
							public getDisabledLabelTextColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getLabelTextFont(): ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public getSelectedLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getSelectedPressedLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getUnselectedFocusTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getUnselectedLabelTextColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getContainerHeight-D9Ej5fM"(): number;
							public "getContainerElevation-D9Ej5fM"(): number;
							public getSelectedContainerColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getAvatarShape(): ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public getDisabledLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getSelectedPressedTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getSelectedTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getUnselectedHoverLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getTrailingIconSize-D9Ej5fM"(): number;
							public getUnselectedPressedLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getSelectedHoverLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getDraggedContainerElevation-D9Ej5fM"(): number;
							public getUnselectedFocusLabelTextColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getSelectedHoverTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getSelectedFocusLabelTextColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getSelectedLabelTextColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getUnselectedOutlineColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getAvatarSize-D9Ej5fM"(): number;
							public "getSelectedOutlineWidth-D9Ej5fM"(): number;
							public getContainerShape(): ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public getSelectedDraggedTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getSelectedFocusLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getUnselectedLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getDisabledSelectedContainerColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getSelectedDraggedLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getUnselectedDraggedLabelTextColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getUnselectedHoverTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getUnselectedPressedLabelTextColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getDisabledUnselectedOutlineColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
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
			export module compose {
				export module material3 {
					export module tokens {
						export class OutlinedCardTokens {
							public static class: java.lang.Class<ly.img.editor.compose.material3.tokens.OutlinedCardTokens>;
							public static INSTANCE: ly.img.editor.compose.material3.tokens.OutlinedCardTokens;
							public static DisabledOutlineOpacity: number;
							public "getDisabledContainerElevation-D9Ej5fM"(): number;
							public "getDraggedContainerElevation-D9Ej5fM"(): number;
							public "getPressedContainerElevation-D9Ej5fM"(): number;
							public "getContainerElevation-D9Ej5fM"(): number;
							public "getFocusContainerElevation-D9Ej5fM"(): number;
							public getHoverOutlineColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getIconSize-D9Ej5fM"(): number;
							public getDraggedOutlineColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getHoverContainerElevation-D9Ej5fM"(): number;
							public getContainerColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getDisabledOutlineColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getOutlineWidth-D9Ej5fM"(): number;
							public getContainerShape(): ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public getContainerSurfaceTintLayerColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getOutlineColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getPressedOutlineColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getFocusOutlineColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
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
			export module compose {
				export module material3 {
					export module tokens {
						export class OutlinedTextFieldTokens {
							public static class: java.lang.Class<ly.img.editor.compose.material3.tokens.OutlinedTextFieldTokens>;
							public static INSTANCE: ly.img.editor.compose.material3.tokens.OutlinedTextFieldTokens;
							public static DisabledInputOpacity: number;
							public static DisabledLabelOpacity: number;
							public static DisabledLeadingIconOpacity: number;
							public static DisabledOutlineOpacity: number;
							public static DisabledSupportingOpacity: number;
							public static DisabledTrailingIconOpacity: number;
							public getDisabledTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getFocusLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getFocusOutlineWidth-D9Ej5fM"(): number;
							public getFocusTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorHoverInputColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getLeadingIconSize-D9Ej5fM"(): number;
							public getFocusSupportingColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getHoverLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getHoverSupportingColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getDisabledLabelColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorFocusCaretColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getHoverInputColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getSupportingFont(): ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public getErrorFocusTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getInputFont(): ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public getOutlineColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorFocusInputColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getFocusLabelColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getLabelFont(): ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public "getContainerHeight-D9Ej5fM"(): number;
							public getLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getInputPrefixColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getDisabledOutlineColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getDisabledLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getFocusInputColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorHoverTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getTrailingIconSize-D9Ej5fM"(): number;
							public getErrorFocusSupportingColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorFocusLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorSupportingColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getHoverOutlineWidth-D9Ej5fM"(): number;
							public getErrorHoverSupportingColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorFocusLabelColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getSupportingColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorInputColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getInputSuffixColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getContainerShape(): ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public getInputPlaceholderColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getDisabledSupportingColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorLabelColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorOutlineColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getDisabledInputColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getHoverLabelColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorFocusOutlineColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getHoverTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getDisabledOutlineWidth-D9Ej5fM"(): number;
							public getInputColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getCaretColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorHoverOutlineColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getHoverOutlineColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getErrorHoverLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getOutlineWidth-D9Ej5fM"(): number;
							public getErrorHoverLabelColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getLabelColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getFocusOutlineColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
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
			export module compose {
				export module material3 {
					export module tokens {
						export class ShapeKeyTokens {
							public static class: java.lang.Class<ly.img.editor.compose.material3.tokens.ShapeKeyTokens>;
							public static CornerExtraLarge: ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public static CornerExtraLargeTop: ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public static CornerExtraSmall: ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public static CornerExtraSmallTop: ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public static CornerFull: ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public static CornerLarge: ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public static CornerLargeEnd: ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public static CornerLargeTop: ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public static CornerMedium: ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public static CornerNone: ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public static CornerSmall: ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public static values(): androidNative.Array<ly.img.editor.compose.material3.tokens.ShapeKeyTokens>;
							public static getEntries(): any;
							public static valueOf(param0: string): ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
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
			export module compose {
				export module material3 {
					export module tokens {
						export class SliderTokens {
							public static class: java.lang.Class<ly.img.editor.compose.material3.tokens.SliderTokens>;
							public static INSTANCE: ly.img.editor.compose.material3.tokens.SliderTokens;
							public static DisabledActiveTrackOpacity: number;
							public static DisabledHandleOpacity: number;
							public static DisabledInactiveTrackOpacity: number;
							public static TickMarksActiveContainerOpacity: number;
							public static TickMarksDisabledContainerOpacity: number;
							public static TickMarksInactiveContainerOpacity: number;
							public getHandleShape(): ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public getTickMarksActiveContainerColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getLabelContainerColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getHoverHandleColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getActiveTrackShape(): ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public "getHandleWidth-D9Ej5fM"(): number;
							public "getStateLayerSize-D9Ej5fM"(): number;
							public getDisabledActiveTrackColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getHandleElevation-D9Ej5fM"(): number;
							public getActiveTrackColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getInactiveTrackHeight-D9Ej5fM"(): number;
							public "getHandleHeight-D9Ej5fM"(): number;
							public getInactiveTrackShape(): ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public getTickMarksContainerShape(): ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public getHandleColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getLabelContainerElevation-D9Ej5fM"(): number;
							public "getLabelContainerHeight-D9Ej5fM"(): number;
							public getTickMarksInactiveContainerColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getLabelTextFont(): ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public "getTickMarksContainerSize-D9Ej5fM"(): number;
							public "getTrackElevation-D9Ej5fM"(): number;
							public "getOverlapHandleOutlineWidth-D9Ej5fM"(): number;
							public getFocusHandleColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getInactiveTrackColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getDisabledHandleElevation-D9Ej5fM"(): number;
							public getTickMarksDisabledContainerColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getOverlapHandleOutlineColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getDisabledInactiveTrackColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getActiveTrackHeight-D9Ej5fM"(): number;
							public getDisabledHandleColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getPressedHandleColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getLabelTextColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
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
			export module compose {
				export module material3 {
					export module tokens {
						export class TopAppBarLargeTokens {
							public static class: java.lang.Class<ly.img.editor.compose.material3.tokens.TopAppBarLargeTokens>;
							public static INSTANCE: ly.img.editor.compose.material3.tokens.TopAppBarLargeTokens;
							public "getTrailingIconSize-D9Ej5fM"(): number;
							public getContainerColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getContainerShape(): ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public getContainerSurfaceTintLayerColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getContainerHeight-D9Ej5fM"(): number;
							public getHeadlineColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getContainerElevation-D9Ej5fM"(): number;
							public getHeadlineFont(): ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public getLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getLeadingIconSize-D9Ej5fM"(): number;
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
			export module compose {
				export module material3 {
					export module tokens {
						export class TopAppBarMediumTokens {
							public static class: java.lang.Class<ly.img.editor.compose.material3.tokens.TopAppBarMediumTokens>;
							public static INSTANCE: ly.img.editor.compose.material3.tokens.TopAppBarMediumTokens;
							public "getTrailingIconSize-D9Ej5fM"(): number;
							public getContainerColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getContainerShape(): ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public getContainerSurfaceTintLayerColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getContainerHeight-D9Ej5fM"(): number;
							public getHeadlineColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getContainerElevation-D9Ej5fM"(): number;
							public getHeadlineFont(): ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public getLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getLeadingIconSize-D9Ej5fM"(): number;
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
			export module compose {
				export module material3 {
					export module tokens {
						export class TopAppBarSmallCenteredTokens {
							public static class: java.lang.Class<ly.img.editor.compose.material3.tokens.TopAppBarSmallCenteredTokens>;
							public static INSTANCE: ly.img.editor.compose.material3.tokens.TopAppBarSmallCenteredTokens;
							public "getTrailingIconSize-D9Ej5fM"(): number;
							public getTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getContainerHeight-D9Ej5fM"(): number;
							public "getContainerElevation-D9Ej5fM"(): number;
							public getHeadlineFont(): ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public getLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getLeadingIconSize-D9Ej5fM"(): number;
							public "getOnScrollContainerElevation-D9Ej5fM"(): number;
							public "getAvatarSize-D9Ej5fM"(): number;
							public getAvatarShape(): ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public getContainerColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getContainerShape(): ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public getContainerSurfaceTintLayerColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getHeadlineColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
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
			export module compose {
				export module material3 {
					export module tokens {
						export class TopAppBarSmallTokens {
							public static class: java.lang.Class<ly.img.editor.compose.material3.tokens.TopAppBarSmallTokens>;
							public static INSTANCE: ly.img.editor.compose.material3.tokens.TopAppBarSmallTokens;
							public "getTrailingIconSize-D9Ej5fM"(): number;
							public getContainerColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getContainerShape(): ly.img.editor.compose.material3.tokens.ShapeKeyTokens;
							public getContainerSurfaceTintLayerColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public getTrailingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getContainerHeight-D9Ej5fM"(): number;
							public getHeadlineColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getContainerElevation-D9Ej5fM"(): number;
							public getHeadlineFont(): ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public getLeadingIconColor(): ly.img.editor.compose.material3.tokens.ColorSchemeKeyTokens;
							public "getLeadingIconSize-D9Ej5fM"(): number;
							public "getOnScrollContainerElevation-D9Ej5fM"(): number;
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
			export module compose {
				export module material3 {
					export module tokens {
						export class TypographyKeyTokens {
							public static class: java.lang.Class<ly.img.editor.compose.material3.tokens.TypographyKeyTokens>;
							public static BodyLarge: ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public static BodyMedium: ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public static BodySmall: ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public static DisplayLarge: ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public static DisplayMedium: ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public static DisplaySmall: ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public static HeadlineLarge: ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public static HeadlineMedium: ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public static HeadlineSmall: ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public static LabelLarge: ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public static LabelMedium: ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public static LabelSmall: ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public static TitleLarge: ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public static TitleMedium: ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public static TitleSmall: ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public static valueOf(param0: string): ly.img.editor.compose.material3.tokens.TypographyKeyTokens;
							public static getEntries(): any;
							public static values(): androidNative.Array<ly.img.editor.compose.material3.tokens.TypographyKeyTokens>;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//ly.img.editor.compose.animation.AnimatedContentScope:1
//ly.img.editor.compose.animation_core.Animatable:2
//ly.img.editor.compose.animation_core.Animation:2
//ly.img.editor.compose.animation_core.AnimationResult:2
//ly.img.editor.compose.animation_core.AnimationScope:2
//ly.img.editor.compose.animation_core.AnimationSpec:1
//ly.img.editor.compose.animation_core.AnimationState:2
//ly.img.editor.compose.animation_core.DecayAnimation:2
//ly.img.editor.compose.animation_core.DecayAnimationSpec:1
//ly.img.editor.compose.animation_core.DecayAnimationSpecImpl:1
//ly.img.editor.compose.animation_core.DurationBasedAnimationSpec:1
//ly.img.editor.compose.animation_core.FiniteAnimationSpec:1
//ly.img.editor.compose.animation_core.InfiniteRepeatableSpec:1
//ly.img.editor.compose.animation_core.KeyframesSpec:1
//ly.img.editor.compose.animation_core.KeyframesSpec.KeyframeEntity:1
//ly.img.editor.compose.animation_core.KeyframesSpec.KeyframesSpecConfig:1
//ly.img.editor.compose.animation_core.MutableTransitionState:1
//ly.img.editor.compose.animation_core.RepeatableSpec:1
//ly.img.editor.compose.animation_core.SnapSpec:1
//ly.img.editor.compose.animation_core.SpringSpec:1
//ly.img.editor.compose.animation_core.TargetBasedAnimation:2
//ly.img.editor.compose.animation_core.Transition:1
//ly.img.editor.compose.animation_core.Transition.DeferredAnimation:2
//ly.img.editor.compose.animation_core.Transition.DeferredAnimation.DeferredAnimationData:2
//ly.img.editor.compose.animation_core.Transition.Segment:1
//ly.img.editor.compose.animation_core.Transition.SegmentImpl:1
//ly.img.editor.compose.animation_core.Transition.TransitionAnimationState:2
//ly.img.editor.compose.animation_core.TweenSpec:1
//ly.img.editor.compose.animation_core.TwoWayConverter:2
//ly.img.editor.compose.animation_core.TwoWayConverterImpl:2
//ly.img.editor.compose.animation_core.VectorizedAnimationSpec:1
//ly.img.editor.compose.animation_core.VectorizedDecayAnimationSpec:1
//ly.img.editor.compose.animation_core.VectorizedDurationBasedAnimationSpec:1
//ly.img.editor.compose.animation_core.VectorizedFiniteAnimationSpec:1
//ly.img.editor.compose.animation_core.VectorizedFloatAnimationSpec:1
//ly.img.editor.compose.animation_core.VectorizedFloatDecaySpec:1
//ly.img.editor.compose.animation_core.VectorizedInfiniteRepeatableSpec:1
//ly.img.editor.compose.animation_core.VectorizedKeyframesSpec:1
//ly.img.editor.compose.animation_core.VectorizedRepeatableSpec:1
//ly.img.editor.compose.animation_core.VectorizedSnapSpec:1
//ly.img.editor.compose.animation_core.VectorizedSpringSpec:1
//ly.img.editor.compose.animation_core.VectorizedTweenSpec:1
//ly.img.editor.compose.bottomsheet.AnchorChangeHandler:1
//ly.img.editor.compose.bottomsheet.SwipeableV2State:1
//ly.img.editor.compose.foundation.gestures.snapping.AnimationResult:2
//ly.img.editor.compose.foundation.gestures.snapping.ApproachAnimation:2
//ly.img.editor.compose.foundation.lazy.layout.DefaultLazyLayoutItemsProvider:1
//ly.img.editor.compose.foundation.lazy.layout.IntervalList:1
//ly.img.editor.compose.foundation.lazy.layout.IntervalList.Interval:1
//ly.img.editor.compose.foundation.lazy.layout.MutableIntervalList:1

