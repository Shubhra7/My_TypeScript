interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void
}

class Instagram implements TakePhoto{
    constructor(  // need all parent one to do
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
    }
}

class Youtube implements TakePhoto, Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: number  // can add more items
    ){}

    createStory(): void {
        console.log("Story was created");
    }
}