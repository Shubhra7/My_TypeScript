abstract class TakePhotos {
    constructor(
        public cameraMode: string,
        public filer: string
    ){}

    abstract getSepia(): void

    getReelTime(): number{
        return 8
    }
}

class Instagramm extends TakePhotos{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
         super(cameraMode,filter)
    }

    getSepia(): void {
        ;console.log("Sepia");
    }

}

const hc = new Instagramm("test","Test",123)
hc.getReelTime()

