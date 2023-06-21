export const JobView = /*html*/`
<div class='container-fluid'>
    <section class="row">
        <div class="col-12 p-4 d-flex">
            <h1>Jobs</h1>
            <button class="btn btn-primary ms-3" type="button" data-bs-toggle="collapse" data-bs-target="#houseCollapse" aria-expanded="false" aria-controls="collapseExample">
                Create Job Listing
            </button>
        </div>
    </section>
    <section class="row mb-4">
        <div class="col-10 m-auto">
            <div div class="collapse" id="houseCollapse">
                <form onsubmit='app.JobsController.createJob(event)' class='w-100'>
                    <div class="mb-3 d-flex align-items-center">
                        <div class='flex-fill'>
                            <label for="listingName" class="form-label d-inline">Listing Title</label>
                            <input required type="text" class="form-control" id="listingName" minlength='5' maxlength='50' name='name'>
                        </div>
                        <div>
                            <label for="jobPosition" class="form-label d-inline">Job Position</label>
                            <input required type="text" class="form-control" id="jobPosition" minLength='5' max='35' name='position'>
                        </div>
                        <div>
                            <label for="jobPayRate" class="form-label d-inline">Hourly Pay Rate</label>
                            <input required type="number" class="form-control" id="jobPayRate" min='10' max='10000' name='payRate'>
                        </div>
                        <div>
                            <label for="jobCompany" class="form-label d-inline">Company</label>
                            <input required type="text" class="form-control" id="jobCompany" min='3' max='50' name='company'>
                        </div>
                    </div>
                    <div class="mb-3 d-flex align-items-center">
                        <div class='flex-fill'>
                            <label for="houseImgUrl" class="form-label d-inline">Job Picture URL</label>
                            <input required type="url" class="form-control" id="houseSquareFeet" minlength='10' maxlength='300' name='imgUrl'>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="houseDescription" class="form-label">Job Description</label>
                        <textarea class="form-control" id="houseDescription" rows="2" name='description'></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </section>
    <section id='jobListings' class='row'>

    </section>
</div>
`