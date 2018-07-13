'use strict'
const Helpers = use('Helpers');
const Music = use('App/Models/Music');
const data = new Date();
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
class MainController {
    async index({request, response, params, view}) {
        return view.render('welcome')
    }


    async apiImg({request, response, params, auth}) {
        const user = await auth.getUser();
        const { title,singer,year,genre } = request.all();


        const name = `${getRandom(data.getMilliseconds(),9999999)}`;
        const file = request.file('file');
        const type = file.subtype;
        const cover = request.file('cover');
        const coverType = cover.subtype;

        const musicPath = `music\\${user.username}\\${name}`;
        const path = Helpers.publicPath(musicPath);



        const music = new Music();
        music.name = `${name}`;
        music.username = `${user.username}`;
        music.path = `music\/${user.username}\/${name}\/${name}.${type}`;
        music.icon = `music\/icons\/icon1.jpg`;
        music.title = title;
        music.singer = singer;
        music.year = year;
        music.genre = genre;
        music.cover = `music\/${user.username}\/${name}\/${name}.${coverType}`;

        await user.musics().save(music);

        await file.move(path, {
            name: `${name}.${type}`
        });
        await cover.move(path, {
            name: `${name}.${coverType}`
        });

        response.json({
            music
        })


    }

    async getMusic({response}) {
        const music = await Music.all();
        response.json({
            music
        })
    }
    async getUserMusic({response, auth}) {
        const user = await auth.getUser();
        const music = await user.musics().fetch();
        response.json({
            music
        })
    }
}

module.exports = MainController
