function constructionCrew(worker) {
    if (worker.dizziness == true) {
        const waterNeeded = worker.weight * worker.experience * 0.1;
        worker.levelOfHydrated += waterNeeded;
        worker.dizziness = false;
    }
    return worker;
}

constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true });