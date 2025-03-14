/* Dark Mode */
body.dark-mode {
    background-color: #000;
    color: #fff;
}

/* Dark Mode Toggle Button */
.dark-mode-toggle {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 15px;
    background: linear-gradient(135deg, #ffcc00, #ff6600);
    color: #121212;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(255, 204, 0, 0.5);
    transition: all 0.3s ease-in-out;
}

.dark-mode-toggle:hover {
    background: linear-gradient(135deg, #ff6600, #ffcc00);
    transform: scale(1.1);
}

/* FAQ Smooth Expand */
.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;
}

/* Back to Top Button */
.back-to-top {
    position: fixed;
    bottom: 70px;
    right: 20px;
    padding: 10px 15px;
    background: linear-gradient(135deg, #ff6600, #ffcc00);
    color: #121212;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    display: none;
    box-shadow: 0 0 10px rgba(255, 204, 0, 0.5);
    transition: all 0.3s ease-in-out;
}

.back-to-top:hover {
    transform: scale(1.1);
}
