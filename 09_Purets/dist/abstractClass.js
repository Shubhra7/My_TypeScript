"use strict";
class TakePhotos {
    constructor(cameraMode, filer) {
        this.cameraMode = cameraMode;
        this.filer = filer;
    }
    getReelTime() {
        return 8;
    }
}
class Instagramm extends TakePhotos {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        ;
        console.log("Sepia");
    }
}
const hc = new Instagramm("test", "Test", 123);
hc.getReelTime();
