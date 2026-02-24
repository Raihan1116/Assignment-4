const tabs = document.querySelectorAll(".tab");
const jobCards = document.querySelectorAll(".job-card");

const totalCount = document.querySelector(".total");
const interviewCount = document.querySelector(".interview-count");
const rejectedCount = document.querySelector(".rejected-count");

// Initial Total সেট
totalCount.textContent = jobCards.length;

// ========================
// TAB FILTER SYSTEM
// ========================
tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const filter = tab.textContent.toLowerCase();

        jobCards.forEach(card => {
            if (filter === "all") {
                card.style.display = "block";
            } else {
                card.style.display =
                    card.dataset.status === filter ? "block" : "none";
            }
        });
    });
});

// ========================
// INTERVIEW BUTTON
// ========================
document.querySelectorAll(".interview-btn").forEach(btn => {
    btn.addEventListener("click", function () {

        const card = this.closest(".job-card");
        const statusText = card.querySelector(".status");

        card.dataset.status = "interview";

        statusText.textContent = "INTERVIEW";
        statusText.className = "status interview-status";

        updateCounts();
        refreshActiveTab();
    });
});

// ========================
// REJECT BUTTON
// ========================
document.querySelectorAll(".reject-btn").forEach(btn => {
    btn.addEventListener("click", function () {

        const card = this.closest(".job-card");
        const statusText = card.querySelector(".status");

        card.dataset.status = "rejected";

        statusText.textContent = "REJECTED";
        statusText.className = "status rejected-status";

        updateCounts();
        refreshActiveTab();
    });
});

// ========================
// COUNT UPDATE FUNCTION
// ========================
function updateCounts() {

    let interview = 0;
    let rejected = 0;

    jobCards.forEach(card => {
        if (card.dataset.status === "interview") interview++;
        if (card.dataset.status === "rejected") rejected++;
    });

    interviewCount.textContent = interview;
    rejectedCount.textContent = rejected;
}

// ========================
// ACTIVE TAB REFRESH
// ========================
function refreshActiveTab() {
    document.querySelector(".tab.active").click();
}
