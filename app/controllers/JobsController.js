import { AppState } from "../AppState.js"
import { jobsService } from "../services/JobsService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawJobs() {
    let jobTemplate = ''
    AppState.jobs.forEach(job => {
        jobTemplate += job.HTMLTemplate
    })
    setHTML('jobListings', jobTemplate)
}

export class JobsController {
    constructor() {
        console.log('Jobs Controller Loaded')
        _drawJobs()
        AppState.on('jobs', _drawJobs)
    }

    createJob(event) {
        event.preventDefault()
        const form = event.target
        const jobData = getFormData(form)
        jobsService.createJob(jobData)
        form.reset()
    }

    async deleteJob(jobId) {
        const wantsToDelete = await Pop.confirm('Do you want to delete this job listing?')

        if (!wantsToDelete)
            return
        jobsService.deleteJob(jobId)
    }
}