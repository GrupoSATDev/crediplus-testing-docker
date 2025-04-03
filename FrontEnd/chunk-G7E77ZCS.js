import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
  ɵɵdefineInjectable
} from "./chunk-WGDVSMOG.js";

// src/@fuse/animations/defaults.ts
var _FuseAnimationCurves = class _FuseAnimationCurves {
};
_FuseAnimationCurves.standard = "cubic-bezier(0.4, 0.0, 0.2, 1)";
_FuseAnimationCurves.deceleration = "cubic-bezier(0.0, 0.0, 0.2, 1)";
_FuseAnimationCurves.acceleration = "cubic-bezier(0.4, 0.0, 1, 1)";
_FuseAnimationCurves.sharp = "cubic-bezier(0.4, 0.0, 0.6, 1)";
var FuseAnimationCurves = _FuseAnimationCurves;
var _FuseAnimationDurations = class _FuseAnimationDurations {
};
_FuseAnimationDurations.complex = "375ms";
_FuseAnimationDurations.entering = "225ms";
_FuseAnimationDurations.exiting = "195ms";
var FuseAnimationDurations = _FuseAnimationDurations;

// src/@fuse/animations/expand-collapse.ts
var expandCollapse = trigger("expandCollapse", [
  state("void, collapsed", style({
    height: "0"
  })),
  state("*, expanded", style("*")),
  // Prevent the transition if the state is false
  transition("void <=> false, collapsed <=> false, expanded <=> false", []),
  // Transition
  transition("void <=> *, collapsed <=> expanded", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.entering} ${FuseAnimationCurves.deceleration}`
    }
  })
]);

// src/@fuse/animations/fade.ts
var fadeIn = trigger("fadeIn", [
  state("void", style({
    opacity: 0
  })),
  state("*", style({
    opacity: 1
  })),
  // Prevent the transition if the state is false
  transition("void => false", []),
  // Transition
  transition("void => *", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.entering} ${FuseAnimationCurves.deceleration}`
    }
  })
]);
var fadeInTop = trigger("fadeInTop", [
  state("void", style({
    opacity: 0,
    transform: "translate3d(0, -100%, 0)"
  })),
  state("*", style({
    opacity: 1,
    transform: "translate3d(0, 0, 0)"
  })),
  // Prevent the transition if the state is false
  transition("void => false", []),
  // Transition
  transition("void => *", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.entering} ${FuseAnimationCurves.deceleration}`
    }
  })
]);
var fadeInBottom = trigger("fadeInBottom", [
  state("void", style({
    opacity: 0,
    transform: "translate3d(0, 100%, 0)"
  })),
  state("*", style({
    opacity: 1,
    transform: "translate3d(0, 0, 0)"
  })),
  // Prevent the transition if the state is false
  transition("void => false", []),
  // Transition
  transition("void => *", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.entering} ${FuseAnimationCurves.deceleration}`
    }
  })
]);
var fadeInLeft = trigger("fadeInLeft", [
  state("void", style({
    opacity: 0,
    transform: "translate3d(-100%, 0, 0)"
  })),
  state("*", style({
    opacity: 1,
    transform: "translate3d(0, 0, 0)"
  })),
  // Prevent the transition if the state is false
  transition("void => false", []),
  // Transition
  transition("void => *", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.entering} ${FuseAnimationCurves.deceleration}`
    }
  })
]);
var fadeInRight = trigger("fadeInRight", [
  state("void", style({
    opacity: 0,
    transform: "translate3d(100%, 0, 0)"
  })),
  state("*", style({
    opacity: 1,
    transform: "translate3d(0, 0, 0)"
  })),
  // Prevent the transition if the state is false
  transition("void => false", []),
  // Transition
  transition("void => *", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.entering} ${FuseAnimationCurves.deceleration}`
    }
  })
]);
var fadeOut = trigger("fadeOut", [
  state("*", style({
    opacity: 1
  })),
  state("void", style({
    opacity: 0
  })),
  // Prevent the transition if the state is false
  transition("false => void", []),
  // Transition
  transition("* => void", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.exiting} ${FuseAnimationCurves.acceleration}`
    }
  })
]);
var fadeOutTop = trigger("fadeOutTop", [
  state("*", style({
    opacity: 1,
    transform: "translate3d(0, 0, 0)"
  })),
  state("void", style({
    opacity: 0,
    transform: "translate3d(0, -100%, 0)"
  })),
  // Prevent the transition if the state is false
  transition("false => void", []),
  // Transition
  transition("* => void", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.exiting} ${FuseAnimationCurves.acceleration}`
    }
  })
]);
var fadeOutBottom = trigger("fadeOutBottom", [
  state("*", style({
    opacity: 1,
    transform: "translate3d(0, 0, 0)"
  })),
  state("void", style({
    opacity: 0,
    transform: "translate3d(0, 100%, 0)"
  })),
  // Prevent the transition if the state is false
  transition("false => void", []),
  // Transition
  transition("* => void", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.exiting} ${FuseAnimationCurves.acceleration}`
    }
  })
]);
var fadeOutLeft = trigger("fadeOutLeft", [
  state("*", style({
    opacity: 1,
    transform: "translate3d(0, 0, 0)"
  })),
  state("void", style({
    opacity: 0,
    transform: "translate3d(-100%, 0, 0)"
  })),
  // Prevent the transition if the state is false
  transition("false => void", []),
  // Transition
  transition("* => void", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.exiting} ${FuseAnimationCurves.acceleration}`
    }
  })
]);
var fadeOutRight = trigger("fadeOutRight", [
  state("*", style({
    opacity: 1,
    transform: "translate3d(0, 0, 0)"
  })),
  state("void", style({
    opacity: 0,
    transform: "translate3d(100%, 0, 0)"
  })),
  // Prevent the transition if the state is false
  transition("false => void", []),
  // Transition
  transition("* => void", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.exiting} ${FuseAnimationCurves.acceleration}`
    }
  })
]);

// src/@fuse/animations/shake.ts
var shake = trigger("shake", [
  // Prevent the transition if the state is false
  transition("void => false", []),
  // Transition
  transition("void => *, * => true", [
    animate("{{timings}}", keyframes([
      style({
        transform: "translate3d(0, 0, 0)",
        offset: 0
      }),
      style({
        transform: "translate3d(-10px, 0, 0)",
        offset: 0.1
      }),
      style({
        transform: "translate3d(10px, 0, 0)",
        offset: 0.2
      }),
      style({
        transform: "translate3d(-10px, 0, 0)",
        offset: 0.3
      }),
      style({
        transform: "translate3d(10px, 0, 0)",
        offset: 0.4
      }),
      style({
        transform: "translate3d(-10px, 0, 0)",
        offset: 0.5
      }),
      style({
        transform: "translate3d(10px, 0, 0)",
        offset: 0.6
      }),
      style({
        transform: "translate3d(-10px, 0, 0)",
        offset: 0.7
      }),
      style({
        transform: "translate3d(10px, 0, 0)",
        offset: 0.8
      }),
      style({
        transform: "translate3d(-10px, 0, 0)",
        offset: 0.9
      }),
      style({
        transform: "translate3d(0, 0, 0)",
        offset: 1
      })
    ]))
  ], {
    params: {
      timings: "0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955)"
    }
  })
]);

// src/@fuse/animations/slide.ts
var slideInTop = trigger("slideInTop", [
  state("void", style({
    transform: "translate3d(0, -100%, 0)"
  })),
  state("*", style({
    transform: "translate3d(0, 0, 0)"
  })),
  // Prevent the transition if the state is false
  transition("void => false", []),
  // Transition
  transition("void => *", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.entering} ${FuseAnimationCurves.deceleration}`
    }
  })
]);
var slideInBottom = trigger("slideInBottom", [
  state("void", style({
    transform: "translate3d(0, 100%, 0)"
  })),
  state("*", style({
    transform: "translate3d(0, 0, 0)"
  })),
  // Prevent the transition if the state is false
  transition("void => false", []),
  // Transition
  transition("void => *", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.entering} ${FuseAnimationCurves.deceleration}`
    }
  })
]);
var slideInLeft = trigger("slideInLeft", [
  state("void", style({
    transform: "translate3d(-100%, 0, 0)"
  })),
  state("*", style({
    transform: "translate3d(0, 0, 0)"
  })),
  // Prevent the transition if the state is false
  transition("void => false", []),
  // Transition
  transition("void => *", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.entering} ${FuseAnimationCurves.deceleration}`
    }
  })
]);
var slideInRight = trigger("slideInRight", [
  state("void", style({
    transform: "translate3d(100%, 0, 0)"
  })),
  state("*", style({
    transform: "translate3d(0, 0, 0)"
  })),
  // Prevent the transition if the state is false
  transition("void => false", []),
  // Transition
  transition("void => *", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.entering} ${FuseAnimationCurves.deceleration}`
    }
  })
]);
var slideOutTop = trigger("slideOutTop", [
  state("*", style({
    transform: "translate3d(0, 0, 0)"
  })),
  state("void", style({
    transform: "translate3d(0, -100%, 0)"
  })),
  // Prevent the transition if the state is false
  transition("false => void", []),
  // Transition
  transition("* => void", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.exiting} ${FuseAnimationCurves.acceleration}`
    }
  })
]);
var slideOutBottom = trigger("slideOutBottom", [
  state("*", style({
    transform: "translate3d(0, 0, 0)"
  })),
  state("void", style({
    transform: "translate3d(0, 100%, 0)"
  })),
  // Prevent the transition if the state is false
  transition("false => void", []),
  // Transition
  transition("* => void", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.exiting} ${FuseAnimationCurves.acceleration}`
    }
  })
]);
var slideOutLeft = trigger("slideOutLeft", [
  state("*", style({
    transform: "translate3d(0, 0, 0)"
  })),
  state("void", style({
    transform: "translate3d(-100%, 0, 0)"
  })),
  // Prevent the transition if the state is false
  transition("false => void", []),
  // Transition
  transition("* => void", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.exiting} ${FuseAnimationCurves.acceleration}`
    }
  })
]);
var slideOutRight = trigger("slideOutRight", [
  state("*", style({
    transform: "translate3d(0, 0, 0)"
  })),
  state("void", style({
    transform: "translate3d(100%, 0, 0)"
  })),
  // Prevent the transition if the state is false
  transition("false => void", []),
  // Transition
  transition("* => void", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.exiting} ${FuseAnimationCurves.acceleration}`
    }
  })
]);

// src/@fuse/animations/zoom.ts
var zoomIn = trigger("zoomIn", [
  state("void", style({
    opacity: 0,
    transform: "scale(0.5)"
  })),
  state("*", style({
    opacity: 1,
    transform: "scale(1)"
  })),
  // Prevent the transition if the state is false
  transition("void => false", []),
  // Transition
  transition("void => *", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.entering} ${FuseAnimationCurves.deceleration}`
    }
  })
]);
var zoomOut = trigger("zoomOut", [
  state("*", style({
    opacity: 1,
    transform: "scale(1)"
  })),
  state("void", style({
    opacity: 0,
    transform: "scale(0.5)"
  })),
  // Prevent the transition if the state is false
  transition("false => void", []),
  // Transition
  transition("* => void", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.exiting} ${FuseAnimationCurves.acceleration}`
    }
  })
]);

// src/@fuse/animations/public-api.ts
var fuseAnimations = [
  expandCollapse,
  fadeIn,
  fadeInTop,
  fadeInBottom,
  fadeInLeft,
  fadeInRight,
  fadeOut,
  fadeOutTop,
  fadeOutBottom,
  fadeOutLeft,
  fadeOutRight,
  shake,
  slideInTop,
  slideInBottom,
  slideInLeft,
  slideInRight,
  slideOutTop,
  slideOutBottom,
  slideOutLeft,
  slideOutRight,
  zoomIn,
  zoomOut
];

// src/@fuse/services/utils/utils.service.ts
var _FuseUtilsService = class _FuseUtilsService {
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Get the equivalent "IsActiveMatchOptions" options for "exact = true".
   */
  get exactMatchOptions() {
    return {
      paths: "exact",
      fragment: "ignored",
      matrixParams: "ignored",
      queryParams: "exact"
    };
  }
  /**
   * Get the equivalent "IsActiveMatchOptions" options for "exact = false".
   */
  get subsetMatchOptions() {
    return {
      paths: "subset",
      fragment: "ignored",
      matrixParams: "ignored",
      queryParams: "subset"
    };
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Generates a random id
   *
   * @param length
   */
  randomId(length = 10) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let name = "";
    for (let i = 0; i < 10; i++) {
      name += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return name;
  }
};
_FuseUtilsService.\u0275fac = function FuseUtilsService_Factory(t) {
  return new (t || _FuseUtilsService)();
};
_FuseUtilsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FuseUtilsService, factory: _FuseUtilsService.\u0275fac, providedIn: "root" });
var FuseUtilsService = _FuseUtilsService;

export {
  FuseUtilsService,
  fuseAnimations
};
//# sourceMappingURL=chunk-G7E77ZCS.js.map
