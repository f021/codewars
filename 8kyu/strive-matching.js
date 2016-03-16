const match = (candidate, job) => {
  if (candidate.minSalary && job.maxSalary) {
    return job.maxSalary >= candidate.minSalary * .9
  } else {
    throw new TypeError('Missing salary')
  }
}
