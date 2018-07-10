'use strict'
const Helpers = use('Helpers');
const Music= use('App/Models/Music');
class MainController {
    async index({ request, response, params, view }) {
        const musics = await Music.all();
        return view.render('welcome',{
            musics:musics.toJSON()
        })
    }
    async img({request, response, params,}){
        const {name} = request.all();
        const file = request.file('file');
        const musicPath = `music`;
        const path = Helpers.publicPath(musicPath);
        const type = file.subtype;

        await file.move(path, {
            name:`${name}.${type}`
          })

        const music = new Music();
        music.name = `${name}.${type}`;
        music.path = `music\\${name}.${type}`;
        await music.save();
        return response.redirect('/')

        
    }

    async apiImg({request, response, params,}){
        const {name} = request.all();
        const file = request.file('file');
        const musicPath = `music`;
        const path = Helpers.publicPath(musicPath);
        const type = file.subtype;

        await file.move(path, {
            name:`${name}.${type}`
          })

        const music = new Music();
        music.name = `${name}.${type}`;
        music.path = `music\\${name}.${type}`;
        await music.save();
        response.json({
            music
        })

        
    }

    async getMusic({response}){
        const music = await Music.all();
        response.json({music})
    }
}

module.exports = MainController
