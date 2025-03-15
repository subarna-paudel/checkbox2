document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".custom-checkbox");
    const goalInputs = document.querySelectorAll(".goal-input");
    const progressValue = document.querySelector(".progress-value");
    const errorLevel = document.querySelector(".error-level");
    
    function updateProgress() {
        let completedCount = document.querySelectorAll(".completed").length;
        let totalGoals = goalInputs.length;
        
        let progressPercentage = (completedCount / totalGoals) * 100;
        progressValue.style.width = `${progressPercentage}%`;
        progressValue.textContent = `${completedCount}/${totalGoals} complete`;
        
        errorLevel.style.display = completedCount === totalGoals ? "none" : "block";
    }
    
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener("click", function () {
            let parentGoalContainer = this.closest(".goals-container");
            if (parentGoalContainer.classList.contains("completed")) {
                parentGoalContainer.classList.remove("completed");
            } else {
                parentGoalContainer.classList.add("completed");
            }
            updateProgress();
        });
    });
    
    updateProgress(); 
});
