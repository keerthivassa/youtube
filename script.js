const videos= async() => {

    try {
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?key=AAIzaSyDJJ1HueA35iWNQgbxsu83eKVkc7u7gh0g`);
        let data = await res.json();
        console.log(data.items);
        append(data.items);

    } catch (error) {
        console.log(error);


}

}

