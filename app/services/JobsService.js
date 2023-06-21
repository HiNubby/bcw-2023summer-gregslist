import { AppState } from "../AppState.js"
import { Job } from "../models/Job.js"
import { saveState } from "../utils/Store.js"

function _saveJobs() {
    saveState('jobs', AppState.jobs)
}

class JobsService {
    createJob(data) {
        AppState.jobs = [...AppState.jobs, new Job(data)]
        _saveJobs()
    }

    deleteJob(jobId) {
        AppState.jobs = [...AppState.jobs.filter(job => job.id != jobId)]
        _saveJobs()
    }
}

export const jobsService = new JobsService()