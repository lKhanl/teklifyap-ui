export const NavbarAnimation = () => {
    if (document.getElementById("L1") != null) {
        document.getElementById("L1").addEventListener("mouseover", () => {
            document.getElementById("nav-circles").style.display = "block";
        });
        document.getElementById("L1").addEventListener("mouseout", () => {
            document.getElementById("nav-circles").style.display = "none";
        });
    }
    /******************************************************/
    if (document.getElementById("L2") != null) {
        document.getElementById("L2").addEventListener("mouseover", () => {
            document.getElementById("nav-circles2").style.display = "block";
        });
        document.getElementById("L2").addEventListener("mouseout", () => {
            document.getElementById("nav-circles2").style.display = "none";
        });
    }
    /******************************************************/
    if (document.getElementById("L3") != null) {
        document.getElementById("L3").addEventListener("mouseover", () => {
            document.getElementById("nav-circles3").style.display = "block";
        });
        document.getElementById("L3").addEventListener("mouseout", () => {
            document.getElementById("nav-circles3").style.display = "none";
        });
    }
    /******************************************************/
    if (document.getElementById("L4") != null) {
        document.getElementById("L4").addEventListener("mouseover", () => {
            document.getElementById("nav-circles4").style.display = "block";
        });
        document.getElementById("L4").addEventListener("mouseout", () => {
            document.getElementById("nav-circles4").style.display = "none";
        });
    }

};