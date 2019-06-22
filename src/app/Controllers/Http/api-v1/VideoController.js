'use strict'
const Video = use('App/Models/Video')

class VideoController {
    async getAll() {
        return await Video.all()
    }
    async store({ request }) {
        const data = request.only(['name', 'description', 'resolution', 'time'])
        const video = new Video()
        video.name = data.name
        video.description = data.description
        video.resolution = data.resolution
        video.time = data.time
        await video.save()
        return video
    }
}

module.exports = VideoController
