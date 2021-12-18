async function getMedia(){
    const media = getPhotographerApi()
    return media
}

async function displayMedia(photographers, media){

    const photographDetails = photographDetail(photographers, media)
    photographDetails.getPhotographDetails()
    photographDetails.getPhotographMedia()

    //GETTING NUMBER OFL LIKES AND PRICE PER PIC

    const Price = getExtraInfo(photographers, media)
    Price.getPrice()
    Price.getTotalLikes()

}

async function run(){
    const {photographers, media} = await getMedia()
    displayMedia(photographers, media)
}

run()