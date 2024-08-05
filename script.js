function showMessage() {
    var heart = document.getElementById("heart");
    var messageCard = document.getElementById("messageCard");
    var button = document.querySelector(".press-btn");
    
    button.style.display = "none"; // Ẩn nút
    
    heart.style.display = "block";
    setTimeout(function() {
        heart.style.display = "none";
        messageCard.style.transform = "translate(-50%, -50%) scale(1)";
    }, 6000); // Hiệu ứng trái tim động và di chuyển trong 10 giây
}